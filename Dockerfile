FROM node:20

WORKDIR /LANDL_FRONTEND

COPY package.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "serve"]
