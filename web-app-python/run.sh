docker build -t entry-webapp-python .
docker run --env-file .env -p 3000:3000 -it entry-webapp-python