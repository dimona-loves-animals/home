FROM node:9.11.1-alpine as angular

# Linux setup (from https://github.com/johnpapa/docker-angular-cli/blob/master/Dockerfile)
RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

# python needed by lib-sass (needed by @angular/cli).
RUN apk add yarn python --no-cache
RUN npm i -g --unsafe-perm @angular/cli@1.7.4
RUN ng set --global packageManager=yarn

ENV HOME=/home/node
RUN mkdir -p $HOME && chown node:node $HOME && chmod -R u+w $HOME
WORKDIR $HOME
USER node

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN ng build --prod --build-optimizer

FROM nginx:alpine
COPY --from=angular /home/node/dist /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;" ]
