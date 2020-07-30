FROM node:12.18.1-stretch
    
WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 6060

USER node

ENTRYPOINT ["node"]

CMD ["index.js"]

# version: "3"

# services:
#   kubeml-api-gateway:
#     build: ./haproxy
#     image: kubemlregistry/kubeml-api-gateway:1.1.0
#     ports:
#       - 1234:80
#     restart: always

#   kubeml-kubernetes-backend:
#     build: ./kubeml-kubernetes-backend
#     image: kubemlregistry/kubeml-kubernetes-backend:1.1.0
#     ports:
#       - 5050:5050
#     restart: always
#     hostname: kubeml-kubernetes-backend

#   kubeml-stripe-backend:
#     build: ./kubeml-stripe-backend
#     image: kubemlregistry/kubeml-stripe-backend:1.1.0
#     ports:
#       - 8080:8080
#     restart: always
#     hostname: kubeml-stripe-backend

#   kubeml-frontend-server:
#     build: ./kubeml-frontend-server
#     image: kubemlregistry/kubeml-frontend-server:1.1.0
#     ports:
#       - 6060:6060
#     restart: always
#     hostname: kubeml-frontend-server
