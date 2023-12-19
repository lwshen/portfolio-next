FROM node:18-alpine

WORKDIR /app

COPY ./ .

RUN npm install -g pnpm
RUN pnpm install
RUN SKIP_ENV_VALIDATION=true pnpm build
ENV NODE_ENV=production

CMD pnpm db:migrate && pnpm start
EXPOSE 3000
