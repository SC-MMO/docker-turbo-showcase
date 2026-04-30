FROM node:24-alpine

WORKDIR /app
RUN corepack enable

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./
COPY packages ./packages
COPY apps ./apps

RUN pnpm install

RUN pnpm --filter @repo/db exec prisma generate

CMD ["sh", "-c", "pnpm --filter @repo/db exec prisma db push && pnpm --filter backend dev"]
