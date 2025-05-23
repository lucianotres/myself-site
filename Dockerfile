FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base as production
WORKDIR /app
COPY . .
RUN npm install 

#ENV NODE_ENV=production
RUN npm run build

#RUN npm ci

CMD npm run dev

FROM base as dev
ENV NODE_ENV=development
RUN npm install 
COPY . .
CMD npm run dev