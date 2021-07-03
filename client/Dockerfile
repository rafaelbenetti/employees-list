FROM node:14

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app/

RUN npm i && npm i -g @angular/cli

COPY . /app/

EXPOSE 4200

CMD ["npm", "start"]
