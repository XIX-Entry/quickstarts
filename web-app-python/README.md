# Structure

- `server.py` contains the logic for serving a demo web app and handlers for the main events (login, token retrieval, logout).
- `Dockerfile` containerizes the logic for running the server.
- `templates/index.html` displays the login button and user's profile data after the login.

# Quickstart

## Prerequisites

1. Make sure that you have `http://localhost/*` in Redirect URLs in your App.
2. Your Workspace should either be public or should already contain the users that will be testing your local deployment (e.g. invited via Entry Dashboard). If you only want to test it yourself, ignore this step.


## Running locally

1. Copy `.env.example` as `.env` (e.g. by running `cp .env.example .env` in your terminal) and put your Entry Workspace settings there.
2. Build and run the docker image (`./run.sh` in your terminal, if you see an error - run `chmod +x run.sh` to allow executing the script)