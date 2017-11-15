FROM node:latest

MAINTAINER Sam Reaves

COPY . /var/app

WORKDIR /var/app

EXPOSE 8080

CMD ["npm", "run", "dev"]
