FROM node
COPY package.json /app/
RUN cd /app && npm install
COPY app.js user-mapping.json /app/
WORKDIR /app
CMD [ "npm", "start" ]
