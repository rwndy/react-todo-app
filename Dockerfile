FROM node:18-alpine
WORKDIR /app
# COPY package.json .
# COPY pnpm-lock.yaml .

RUN yarn install
COPY . .
RUN yarn add -D types
RUN yarn build


EXPOSE 3000
CMD [ "yarn", "run", "preview" ]