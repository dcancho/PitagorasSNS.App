FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Install a simple server for serving static content
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist"]