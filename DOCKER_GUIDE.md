# Guía Docker - Front-end React SW2

## Requisitos previos
- Docker Desktop instalado
- Docker Compose instalado (incluido en Docker Desktop)
- Git

## Archivos creados

### 1. **Dockerfile**
- Utiliza multi-stage build para optimizar el tamaño de la imagen
- **Stage 1 (Builder)**: Compila la aplicación React con Vite
- **Stage 2 (Production)**: Sirve la aplicación con Nginx optimizado

### 2. **nginx.conf**
- Configuración profesional de Nginx
- Compresión Gzip habilitada
- Cache optimization para assets
- Headers de seguridad
- SPA routing (react-router)
- Rate limiting
- Health check endpoint

### 3. **docker-compose.yml**
- Servicio frontend con React
- Redes personalizadas
- Health checks
- Secciones comentadas para: Backend API, PostgreSQL, Redis

### 4. **.dockerignore**
- Acelera las builds excluyendo archivos innecesarios

### 5. **.env.example**
- Plantilla de variables de entorno

---

## 🚀 Instrucciones de uso

### Opción 1: Desplegar solo el frontend

```bash
# Clonar repositorio
git clone https://github.com/R0nald12345/Sw2-final-frontReactJs.git
cd front-sw2-final

# Copiar archivo de ejemplo
cp .env.example .env

# Construir la imagen
docker build -t sw2-frontend:latest .

# Ejecutar con docker-compose
docker-compose up -d

# Verificar estado
docker-compose ps

# Ver logs
docker-compose logs -f frontend
```

La aplicación estará disponible en: **http://localhost**

### Opción 2: Con backend (descomenta en docker-compose.yml)

```bash
# Actualizar docker-compose.yml - descomenta las secciones del backend
# Luego:

docker-compose up -d

# Esto levantará: frontend + backend + database
```

### Comandos útiles

```bash
# Ver estado de contenedores
docker-compose ps

# Ver logs en tiempo real
docker-compose logs -f frontend

# Entrar al contenedor
docker exec -it sw2-frontend /bin/sh

# Detener servicios
docker-compose down

# Reconstruir después de cambios
docker-compose up -d --build

# Eliminar volúmenes (CUIDADO)
docker-compose down -v

# Ver uso de recursos
docker stats
```

---

## 📋 Configuración

### Variables de entorno (.env)

```env
NODE_ENV=production
VITE_API_URL=http://tu-api-backend:8080
```

### Cambiar puerto
En `docker-compose.yml`:
```yaml
ports:
  - "8080:80"  # Cambia 8080 por el puerto deseado
```

### HTTPS (SSL/TLS)
1. Obtén certificados (ej: Let's Encrypt)
2. Copia los certificados a una carpeta `certs/`
3. En `docker-compose.yml`, descomenta:
   ```yaml
   volumes:
     - ./certs:/etc/nginx/certs:ro
   ports:
     - "443:443"
   ```
4. En `nginx.conf`, descomenta la sección HTTPS

---

## 🔍 Monitoreo

### Health Check
El contenedor tiene health checks automáticos:
```bash
curl http://localhost/health
```

### Logs
```bash
# Últimas 100 líneas
docker-compose logs --tail=100 frontend

# Seguimiento en vivo
docker-compose logs -f frontend
```

---

## 🐳 Tamaño de imagen

El uso de multi-stage build resulta en:
- **Build image**: ~500MB (descartada)
- **Final image**: ~50-100MB (optimizada)

---

## ⚠️ Notas importantes

1. **Variable VITE_API_URL**: Asegúrate de actualizar la URL del backend según tu entorno
2. **Performance**: Nginx está configurado con compresión Gzip y cache
3. **Seguridad**: Se incluyen headers de seguridad estándar
4. **Rate Limiting**: Habilitado por defecto (10 req/s general, 30 req/s para API)

---

## 🆘 Troubleshooting

### El contenedor se reinicia constantemente
```bash
docker-compose logs frontend
# Revisar el output del error
```

### No puedo acceder a la aplicación
```bash
# Verifica que el puerto 80 está disponible
netstat -ano | findstr :80  # Windows
# o
lsof -i :80  # Mac/Linux

# Cambia el puerto en docker-compose.yml
```

### Necesito actualizar el código
```bash
# Realiza cambios en tu código
# Luego:
docker-compose up -d --build
```

---

## 📦 Despliegue en producción

### En un servidor:
```bash
# SSH al servidor
ssh user@tu-servidor

# Clonar repo
git clone https://github.com/R0nald12345/Sw2-final-frontReactJs.git
cd front-sw2-final

# Copiar archivo .env con valores de producción
nano .env

# Ejecutar
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

Para producción, considera:
- Usar HTTPS obligatorio
- Configurar backup de volúmenes
- Monitorear con Prometheus/Grafana
- Usar registry privado para imágenes
- Implementar CI/CD (GitHub Actions, GitLab CI)

---

## 📝 Más información

- [Docker Documentation](https://docs.docker.com/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [React + Vite Documentation](https://vitejs.dev/guide/)

