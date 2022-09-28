FROM cypress/base:14
WORKDIR /cypress

# dependencies will be installed only if the package files change
COPY package.json .
COPY package-lock.json .

# by setting CI environment variable we switch the Cypress install messages
# to small "started / finished" and avoid 1000s of lines of progress messages
# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1
RUN npm i typescript@4.8.3
RUN npm i @types/node@18.7.23
RUN npm ci
# verify that Cypress has been installed correctly.
# running this command separately from "cypress run" will also cache its result
# to avoid verifying again when running the tests
RUN npx cypress verify
