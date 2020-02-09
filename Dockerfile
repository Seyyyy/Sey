FROM node:lts

EXPOSE 8080

RUN mkdir /app_name 

ENV APP_ROOT /app_name 
WORKDIR $APP_ROOT

ADD ./package.json $APP_ROOT/package.json
ADD ./yarn.lock $APP_ROOT/yarn.lock 

RUN yarn

ADD . $APP_ROOT