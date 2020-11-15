FROM mhart/alpine-node:12
MAINTAINER Michalski Luc <michalski.luc@gmail.com>

WORKDIR /opt/seoz-naxly
COPY package.json .

RUN yarn install

COPY . .

RUN cd client && \
    npx browserslist --update-db && \
    yarn install

RUN npx browserslist --update-db && \
    yarn build

CMD ["npm", "run-script", "dev"]
