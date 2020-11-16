FROM node:12.18.1-stretch

ARG KUBERNETES_VERSION
ARG HELM_VERSION

RUN curl -LO https://storage.googleapis.com/kubernetes-release/release/v${KUBERNETES_VERSION}/bin/linux/amd64/kubectl && \
    chmod +x ./kubectl && \
    mv ./kubectl /usr/local/bin/kubectl && \
    curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-${HELM_VERSION} | bash
    
WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 5050

USER node

ENTRYPOINT ["node"]
CMD ["index.js"]