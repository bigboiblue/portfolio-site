FROM node:14 as base
EXPOSE 8080
LABEL maintainer="kyle.blue.nuttall@gmail.com"
WORKDIR /src

FROM base as release
COPY src ./src
COPY package-lock.json package.json ./
RUN npm install
ENV env=release
CMD npm start

FROM base as dev
ENV env=dev
