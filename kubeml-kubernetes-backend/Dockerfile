FROM node:12.18.1-stretch

ARG KUBERNETES_VERSION
ARG HELM_VERSION

RUN apt-get update && apt-get install -y nano bash

RUN curl -LO https://storage.googleapis.com/kubernetes-release/release/v${KUBERNETES_VERSION}/bin/linux/amd64/kubectl && \
    chmod +x ./kubectl && \
    mv ./kubectl /usr/local/bin/kubectl && \
    curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-${HELM_VERSION} | bash
    
WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 5050
USER node

# ENTRYPOINT ["node"]
CMD ["node", "index.js"]
