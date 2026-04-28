# 🚀 Backend Relevo API - DevOps Practice

Este repositorio contiene la API principal de la plataforma **Relevo**, diseñada como un caso de estudio para implementar mejores prácticas de **DevOps**, **Containerización** y **CI/CD**.

---

## 🛠️ Stack Tecnológico

- **Runtime**: Node.js v24 (Alpine)
- **Lenguaje**: TypeScript
- **Framework**: Express.js
- **Base de Datos**: MongoDB (Mongoose)
- **Documentación**: Swagger / OpenAPI
- **Infraestructura**: Docker & Docker Compose
- **Automatización**: GitHub Actions

---

## 🐳 Docker & Containerización

El proyecto está totalmente dockerizado para asegurar que el entorno de desarrollo sea idéntico al de producción.

### Arquitectura de Contenedores

- **App**: Nodo de Node.js que ejecuta la API.
- **DB**: Instancia de MongoDB v9.
- **Network**: Red interna aislada `backend-network`.
- **Volumes**: Volumen persistente `mongo-data` para asegurar que los datos no se pierdan.

### Cómo ejecutarlo en local

1. Clona el repositorio.
2. Crea tu archivo de entorno: `cp .env.example .env`.
3. Levanta la infraestructura:
   ```bash
   docker-compose up -d
   ```
4. Accede a la API en `http://localhost:4000`.

---

## 📖 Documentación de la API

Una vez levantado el proyecto, puedes consultar la documentación interactiva en:
👉 **[http://localhost:4000/docs](http://localhost:4000/docs)**

---

## 🚀 Pipeline de CI/CD (Continuous Delivery)

Este repositorio utiliza **GitHub Actions** para automatizar el ciclo de vida de la aplicación.

### Flujo de Trabajo

1. **Push a `main`**: Al subir cambios a la rama principal, se dispara el workflow.
2. **Build**: Se construye la imagen Docker utilizando `Docker Buildx` (multi-plataforma y caché avanzada).
3. **Registry**: La imagen se publica automáticamente en **Docker Hub** con dos etiquetas:
   - `latest`: Siempre apunta a la última versión funcional.
   - `${GITHUB_SHA}`: Identificador único basado en el commit para permitir rollbacks.

---

## 📁 Estructura de Ramas (DevOps Roadmap)

Este repositorio está organizado por ramas para demostrar diferentes escenarios de despliegue:

- **`main`**: Configuración base de Docker y CI/CD hacia Docker Hub.

---
