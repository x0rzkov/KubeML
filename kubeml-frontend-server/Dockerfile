FROM node:12.18.1-stretch
    
WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN cd client && \
 	npm install && \
    npm run-script build

EXPOSE 6060

USER node


ENTRYPOINT ["node"]
CMD ["index.js"]