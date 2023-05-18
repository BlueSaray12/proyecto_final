FROM node:alpine

EXPOSE 3000

COPY src/assets/data/tecnologia.json /opt/tecnologia.json

RUN yarn global add json-server

CMD ["json-server", "-H", "0.0.0.0", "/opt/tecnologia.json"]