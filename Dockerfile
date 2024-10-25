FROM node:20-alpine AS base

FROM base AS builder

RUN apk add --no-cache gcompat
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

COPY package*.json pnpm-lock.yaml ./
COPY tsconfig.json ./
COPY src ./src

# Install dependencies using pnpm and build the project
RUN pnpm install --frozen-lockfile && \
    pnpm run build && \
    pnpm prune --prod

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 t2site

# Copy only production dependencies and built files
COPY --from=builder --chown=t2site:nodejs /app/node_modules /app/node_modules
COPY --from=builder --chown=t2site:nodejs /app/dist /app/dist
COPY --from=builder --chown=t2site:nodejs /app/package.json /app/package.json
COPY --from=builder --chown=t2site:nodejs /app/pnpm-lock.yaml /app/pnpm-lock.yaml

USER t2site
EXPOSE 8000

CMD ["node", "/app/dist/main.js"]
