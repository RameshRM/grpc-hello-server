FROM node:4
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm config set registry https://registry.npmjs.org
RUN npm install

COPY . /usr/src/app

ENV APP_RPC_PORT=50051
ENV DEBUG=grpc-hello-server

EXPOSE 50051

CMD [ "npm", "start" ]
