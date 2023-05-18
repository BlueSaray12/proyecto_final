# Primer paso - ANGULAR 

FROM node:19-alpine3.16 AS build-env

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build

# Segundo Paso - ngInx

FROM nginx:1.23.3-alpine

COPY --from=build-env /app/dist/tiendatecno/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]