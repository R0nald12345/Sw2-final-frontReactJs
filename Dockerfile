# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm ci

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Production stage - usando Nginx para servir la aplicación
FROM nginx:alpine

# Instalar curl para health checks
RUN apk add --no-cache curl

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar archivos construidos desde el stage anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/health || exit 1

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
