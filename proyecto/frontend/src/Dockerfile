# Etapa 1: build
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

RUN npm run build

CMD ["npm", "start"]

