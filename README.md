# 🔴 Backend Relevo - [ENTORNO DE PRODUCCIÓN]

> **ATENCIÓN**: Esta es la rama de despliegue estable. Cualquier cambio aquí disparará automáticamente una nueva build de Docker y actualizará la imagen en Docker Hub.

---

## 🚀 Estado del Despliegue

- **Entorno**: Producción
- **Docker Image**: `polp2/backend-relevo:latest`
- **Pipeline**: CI/CD (Tests ✅ -> Build 🐳 -> Push 🚀)

---

## 🛠️ Stack y Versiones

- **API Version**: 1.0.0
- **Node**: 24-alpine
- **DB**: MongoDB v9

---

## 📝 Notas de Mantenimiento

Para subir cambios a esta rama:

1. Trabajar siempre en `main`.
2. Verificar que los tests pasan en `main`.
3. Hacer merge de `main` a `produccion`.

---

Desplegado automáticamente mediante GitHub Actions.
