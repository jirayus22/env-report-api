# ===== Stage 1: Dependencies =====
FROM node:22-alpine3.19 AS deps
WORKDIR /app

COPY package*.json ./
RUN npm install --production
COPY . .

# ===== Stage 2: Runtime =====
FROM node:22-alpine3.19 AS runner
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
