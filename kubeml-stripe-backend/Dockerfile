FROM node:12.18.1-stretch
    
WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8080

USER node

ENTRYPOINT ["node"]

CMD ["index.js"]