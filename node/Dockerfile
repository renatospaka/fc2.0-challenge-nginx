#FROM node:10-slim
FROM node:15-slim

#USER node

RUN mkdir -p /home/node/app \
    && chown -R node:node /home/node/app 

# RUN mkdir -p /var/lib/apt/lists \
#     &&chmod -R 100 /var/lib/apt/lists

RUN apt-get update \
    && apt-get install -y wget 

#USER node
#RUN chown -R node:node /home/node/app 

WORKDIR /home/node/app

COPY --chown=node package*.json ./

RUN npm install

COPY --chown=node . .

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

# CMD ["node","index.js"]
