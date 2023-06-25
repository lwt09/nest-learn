# 第一阶段，构建
FROM node:16.20.0-alpine3.18 as build-stage

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

# 拿到dist
# 第二阶段，生产
FROM node:16.20.0-alpine3.18 as production-stage

WORKDIR /app

COPY --from=build-stage /app/dist /app/dist

COPY --from=build-stage /app/package.json /app/package.json

COPY --from=build-stage /app/ecosystem.config.js /app/ecosystem.config.js

# --production 只安装dependencies ，因为不用执行 npm run build ，所以不需要安装非生产阶段的devDependencies
RUN npm install --production

RUN npm i -g pm2

EXPOSE 3000

# CMD [ "node", "./dist/main.js" ]
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
