FROM node:lts

EXPOSE 8080

RUN mkdir /app_name 

ENV APP_ROOT /app_name 
WORKDIR $APP_ROOT

ADD ./package.json $APP_ROOT/package.json
ADD ./package-lock.json $APP_ROOT/package-lock.json 

RUN npm install

ADD . $APP_ROOT