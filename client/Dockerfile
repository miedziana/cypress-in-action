FROM node:16-alpine AS build

RUN apk update && apk add git

RUN mkdir -p /app

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build
RUN npx nyc instrument dist/client dist/client --exclude-after-remap=false --complete-copy --in-place


# -----------------

FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --production

COPY --from=build ./app/dist/client ./dist/client
COPY ./server.js .

RUN apk --no-cache add curl

ENV NODE_ENV=production
ENV SERVER_PORT=3000

EXPOSE 3000

CMD ["npm", "run", "prod"]
