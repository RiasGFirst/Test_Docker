FROM node:12.18.3
WORKDIR /app
COPY package*.json .
RUN pwd && echo "---------" && ls
RUN npm install
COPY . .
RUN mkdir -p /app/config && cp config/.example.json /app/config/development.json

EXPOSE 8080
CMD ["npm", "start"]