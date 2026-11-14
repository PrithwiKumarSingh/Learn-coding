FROM ubuntu

RUN apt-get update
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install nodejs -y 

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY main.js main.js

RUN npm install 

ENTRYPOINT ["node", "main.js"]