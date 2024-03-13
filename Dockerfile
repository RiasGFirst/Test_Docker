FROM node:12.18.3
WORKDIR /app
VOLUME .:/app/config
COPY . /app
RUN npm install
RUN mkdir -p /app/config && cp config/.example.json /app/config/development.json

EXPOSE 8080
CMD ["node", "index.js"]