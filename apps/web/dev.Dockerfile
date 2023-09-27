FROM node:18-alpine AS base
WORKDIR /app
COPY . .
RUN yarn install
# RUN yarn build
EXPOSE 3000
CMD ["yarn", "dev"]