# hono-node-drizzle-template
This is the backend for the T2Site application, built with [NestJS](https://nestjs.com/), [Drizzle ORM](https://orm.drizzle.team/), [Hono](https://hono.dev/), and other essential libraries.

## Table of Contents

- [hono-node-drizzle-template](#hono-node-drizzle-template)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
    - [Development Mode](#development-mode)
  - [Scripts](#scripts)
  - [Environment Variables](#environment-variables)
  - [Dependencies](#dependencies)
    - [Main Dependencies](#main-dependencies)
    - [Development Dependencies](#development-dependencies)

---

## Installation

**1. Clone the repository**

```bash
git clone https://github.com/desyed/t2site-backend.git
cd t2site-backend
```

**2. Install dependencies**

```bash
pnpm install
```

**3. Set up environment variables**

Duplicate the `.env.example` file as `.env` and update it with the correct configurations for your setup [see Environment Variables](#environment-variables).

**4. Start Docker (for development)**

Ensure you have Docker installed and running.

## Getting Started

### Development Mode

To start the project in development mode with Docker support:

```bash
pnpm dev
```

## Scripts

- `build`: Build the NestJS application.
- `dev:up`: Start Docker containers for development.
- `dev:down`: Stop Docker containers for development.
- `dev`: Start Docker containers and run the NestJS application in watch mode.
- `preview:dev`: Start Docker containers and run the compiled application.
- `db:generate`: Generate database schema using Drizzle Kit.

## Environment Variables

The project uses environment variables for configuration. Duplicate the `.env.example` file as `.env` and update it with your specific settings.

## Dependencies

### Main Dependencies

- `@hono/node-server`: ^1.13.2
- `@hono/node-ws`: ^1.0.4
- `@hono/oauth-providers`: ^0.6.2
- `@hono/zod-validator`: ^0.4.1
- `add`: ^2.0.6
- `dayjs`: ^1.11.13
- `dotenv`: ^16.4.5
- `drizzle-orm`: ^0.35.3
- `hono`: ^4.6.6
- `hono-rate-limiter`: ^0.4.0
- `ioredis`: ^5.4.1
- `pg`: ^8.13.1
- `zod`: ^3.23.8

### Development Dependencies

- `@nestjs/cli`: ^10.4.5
- `@types/node`: ^20.17.0
- `@types/pg`: ^8.11.10
- `drizzle-kit`: ^0.26.2
- `tsx`: ^4.7.1
- `typescript`: >=5.0.0
