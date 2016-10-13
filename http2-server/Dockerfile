FROM node:4
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm config set registry https://registry.npmjs.org
RUN npm install

COPY . /usr/src/app

ENV APP_HTTP2_PORT=3030

EXPOSE 3030

CMD [ "npm", "start" ]
