FROM node:latest

RUN mkdir app

WORKDIR /app

COPY public public
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json ./
COPY .env.sample ./

RUN npm install --verbose

COPY src src
# COPY scss.d.ts scss.d.ts
EXPOSE 3000

CMD npm start