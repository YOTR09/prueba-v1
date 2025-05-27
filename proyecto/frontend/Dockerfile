# Etapa 1: build
FROM node:20

WORKDIR /app

COPY ./src/package*.json ./

RUN npm install

COPY ./src ./

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "dev"]