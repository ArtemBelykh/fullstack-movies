FROM node:20.9.0-alpine

WORKDIR ./

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]