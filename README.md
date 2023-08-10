# gamedir-back-nestjs

Backend para un directorio de videojuegos

## Tech Stack

- Node.js 18
- NestJS 10
- Objection 3 with knex 2.5.1

## Iniciar el proyecto localmente
```bash
pnpm i
pnpm start:dev
```

## Integración
Pronto colocaré la especificación del api en **OpenApi** para que sea más fácil integrarlo con un frontend

## Knowing issues
- Los logs incluyen información completa del request. Es posible que esta información se muestre solo una vez?
- dotenv se está cargando de una forma poco elegante, existe una mejor forma de hacerlo? Ya probé usando el Config de Nest pero no carga las variables durante la configuración del logging

