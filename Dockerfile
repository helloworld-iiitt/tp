# ---------- Build Stage ----------
FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build your app — should output to 'dist'
RUN npm run build

RUN ls -al /app/dist


# ---------- Production Stage ----------
FROM node:24-alpine

WORKDIR /app

# Install 'serve' to serve static files
RUN npm install -g serve

COPY --from=build /app/dist ./dist

EXPOSE 3001

# Serve the app from 'dist' folder
CMD ["serve", "-s", "dist", "-l", "3001"]
