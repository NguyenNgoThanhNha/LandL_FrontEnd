FROM node:20

WORKDIR /LANDL_FRONTEND

COPY package.json .
RUN npm i

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]
RUN npm run build

EXPOSE 5173

CMD ["npx", "serve", "-s", "dist", "-l", "5713"]