FROM node:12.18.3
WORKDIR /app
COPY . .
RUN mkdir -p /app/config && cp config/.example.json /app/config/development.json
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]