FROM node:16.15.0

RUN mkdir -p /server

WORKDIR /server

COPY package.json .

COPY .env .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "server"]