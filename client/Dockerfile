# Step 1: Build the React app with Vite
FROM node:20 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the React app with Vite preview
CMD ["npm", "run", "serve"]