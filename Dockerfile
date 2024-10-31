FROM node
WORKDIR /LANDL_FRONTEND
COPY package.json .
RUN npm i
COPY . .
EXPOSE 5173
CMD ["npm", "run", "serve"]