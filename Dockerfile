FROM node:18.18.2 as builder

WORKDIR /usr/app

COPY ["package.json", "./"]

RUN npm install

COPY . .

ENV REACT_APP_ENV production
ENV GENERATE_SOURCEMAP false

RUN npm run build

FROM nginx:1.16.1-alpine

EXPOSE 80 443

COPY --from=builder /usr/app/dist /usr/share/nginx/html

COPY --from=builder /usr/app/build-resources/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
