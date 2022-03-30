FROM node:14.19-alpine as wall-e
WORKDIR /usr/src/wall-e
COPY . .
ENV NODE_ENV=local
RUN yarn install