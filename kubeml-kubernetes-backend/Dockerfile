FROM node:12.18.1-stretch

RUN curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.18.0/bin/linux/amd64/kubectl && \
    chmod +x ./kubectl && \
    mv ./kubectl /usr/local/bin/kubectl && \
    curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
    
WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 5050

USER node

ENTRYPOINT ["node"]

CMD ["index.js"]