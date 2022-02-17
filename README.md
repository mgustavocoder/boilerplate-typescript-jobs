# My boilerplate project with Typescript.

## Tooling
- Jest for tests.
- Eslint with standart config for lint.
- Husky as pre-commit checker (test, lint, audit).
- dotenv with **Dev** and **Prod** env files.
- Dockerfile
- VSCode Debbuger

## Running locally
- Requires node ^16.0.0
- npm run init
- npm run start:dev

## Running in docker
- Build the image:
    - docker build -t boilerplate-typescript:latest .
- Start the container
    - docker run boilerplate-typescript:latest