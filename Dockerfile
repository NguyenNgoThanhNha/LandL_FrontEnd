FROM node:20

WORKDIR /LANDL_FRONTEND

COPY package.json .
RUN npm i

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 5173

CMD ["npm", "run", "dev"]