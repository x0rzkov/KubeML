FROM mhart/alpine-node:12
MAINTAINER Michalski Luc <michalski.luc@gmail.com>

WORKDIR /opt/seoz-naxly
COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

CMD ["npm", "run-scripts", "dev"]
