FROM node:16-alpine
WORKDIR /app
# COPY package.json .
# COPY pnpm-lock.yaml .

# RUN npm install --global yarn

# RUN npm install typescript -g
RUN yarn install
COPY . .
# RUN yarn build


EXPOSE 3000
# CMD [ "yarn", "run", "dev" ]
CMD ["ls", "-la"]