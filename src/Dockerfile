FROM node:lts-alpine
WORKDIR /app
RUN npm i -g nodemon
EXPOSE 8081
ENTRYPOINT ["nodemon", "-e", "js,json,yml", "--watch", "./dist", "--inspect=0.0.0.0:9229", "--nolazy", "./dist/src/index.js"]