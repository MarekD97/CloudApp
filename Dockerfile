# Frontend build
FROM node:14 AS build
WORKDIR /usr/src/app
COPY frontend/ .
RUN npm install && npm run build

# Frontend
FROM nginx:alpine AS frontend
EXPOSE 8081
COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY frontend/frontend.conf /etc/nginx/conf.d

# BACKEND
FROM node:14 AS backend
WORKDIR /usr/src/app
EXPOSE 8080
COPY backend/ .
RUN npm install
CMD [ "node", "server.js" ]

# Database
FROM mysql:5.7 AS db
RUN apt-get update && apt-get install -y locales && rm -rf /var/lib/apt/lists/* $\
    && localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8
ENV MYSQL_DATABASE=fifa \
    MYSQL_ROOT_PASSWORD=root \
    LANG=en_US.utf8
ADD FIFA-21-Complete.sql /docker-entrypoint-initdb.d
EXPOSE 3306