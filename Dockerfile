FROM node:12.18.3

WORKDIR /app
COPY . /app
RUN npm install
RUN mkdir -p /app/config
COPY config/development.json /app/config/
EXPOSE 8080

CMD ["node", "index.js"]