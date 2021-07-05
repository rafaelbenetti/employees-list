FROM node:14

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app/

RUN npm i && npm i -g @angular/cli

# Install Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -y google-chrome-stable

COPY . /app/

EXPOSE 4200

CMD ["npm", "start"]
