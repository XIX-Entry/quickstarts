"""Python Flask WebApp integration example
"""

import json
from os import environ as env
from urllib.parse import quote_plus, urlencode

from authlib.integrations.flask_client import OAuth
from dotenv import find_dotenv, load_dotenv
from flask import Flask, redirect, render_template, session, url_for

ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

app = Flask(__name__)
app.secret_key = env.get("APP_SECRET_KEY")

# Entry config variables
WORKSPACE = env.get("WORKSPACE")
CLIENT_ID = env.get("CLIENT_ID")
CLIENT_SECRET = env.get("CLIENT_SECRET")
ENTRY_ENDPOINT = env.get("ENTRY_ENDPOINT").rstrip("/")
WORKSPACE_ENDPOINT = f"{ENTRY_ENDPOINT}/{WORKSPACE}"

metadata_url = f"{WORKSPACE_ENDPOINT}/.well-known/openid-configuration"
logout_url = f"{WORKSPACE_ENDPOINT}/protocol/openid-connect/logout"


oauth = OAuth(app)

oauth.register(
    "entry",
    client_id=CLIENT_ID,
    client_secret=CLIENT_SECRET,
    client_kwargs={
        "scope": "openid profile email",
    },
    server_metadata_url=metadata_url,
)


# Controllers API
@app.route("/")
def home():
    return render_template(
        "index.html",
        session=session.get("user"),
        pretty=json.dumps(session.get("user"), indent=4),
    )


@app.route("/callback", methods=["GET", "POST"])
def callback():
    token = oauth.entry.authorize_access_token()
    session["user"] = token
    return redirect("/")


@app.route("/login")
def login():
    return oauth.entry.authorize_redirect(
        redirect_uri=url_for("callback", _external=True)
    )


@app.route("/logout")
def logout():
    session.clear()
    return redirect(
        logout_url + "?"
        + urlencode(
            {
                "redirect_uri": url_for("home", _external=True),
                "client_id": CLIENT_ID,
            },
            quote_via=quote_plus,
        )
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=env.get("PORT", 3000))
