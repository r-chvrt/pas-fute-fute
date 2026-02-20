# ---------- Base ----------
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.11.0 --activate
WORKDIR /app

# ---------- Install deps ----------
FROM base AS deps
COPY . .
RUN pnpm install --frozen-lockfile

# ---------- Build ----------
FROM deps AS build
RUN pnpm --filter @pas-fute-fute/app build

# ---------- Production ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# On copie uniquement le build généré
COPY --from=build /app/packages/app/.output ./

EXPOSE 3000

CMD ["node", "server/index.mjs"]