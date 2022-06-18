FROM node:16.15.0

RUN mkdir -p /frontend/src

WORKDIR /frontend/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]