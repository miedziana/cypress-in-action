FROM node:16-alpine AS build

RUN apk update && apk add git

RUN mkdir -p /app

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build
RUN npx nyc instrument --compact=false .\dist\login-demo\ instrumented

# -----------------

FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --production

COPY --from=build ./app/dist/login-demo ./dist
COPY ./server.js .
COPY ./api-server.js .
COPY ./auth_config.json .

RUN apk --no-cache add curl

ENV NODE_ENV=production
ENV SERVER_PORT=4200
ENV API_SERVER_PORT=3001

EXPOSE 4200
EXPOSE 3001

CMD ["npm", "run", "prod"]
