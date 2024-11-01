# Sử dụng Node để build
FROM node:20 AS build-stage

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy toàn bộ file của project vào container
COPY . .

# Cài đặt các package
RUN npm install

# Build project để tạo thư mục dist
RUN npm run build

# Sử dụng Nginx để phục vụ nội dung
FROM nginx:latest AS production-stage

# Copy cấu hình Nginx nếu có
COPY /app/default.conf /etc/nginx/conf.d/default.conf

# Copy thư mục dist từ build-stage sang thư mục phục vụ của Nginx
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose cổng 80
EXPOSE 80

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]

