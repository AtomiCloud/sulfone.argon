# Config

**What**: Multi-environment (landscape) configuration for development, staging, and production.

**Why**: Supports different API endpoints and auth credentials per environment.

**Key Files**:
- `src/config/shared/index.ts:1-17` → Landscape config selection
- `src/config/shared/pichu.config.ts` → Development config
- `src/config/shared/pikachu.config.ts` → Staging config
- `src/config/shared/raichu.config.ts` → Production config
- `src/config/shared/lapras.config.ts` → Local config

## Responsibilities

- Environment-specific configuration (API endpoints, auth credentials)
- Type-safe config access via TypeScript interface
- Compile-time config inclusion (only selected landscape bundled)
- Client/server/shared config separation

## Structure

```
src/config/
├── client/          # Browser-accessible (PUBLIC_ prefixed)
│   ├── index.ts
│   ├── pichu.config.ts
│   ├── pikachu.config.ts
│   ├── raichu.config.ts
│   └── lapras.config.ts
├── server/          # Server-only (can include secrets)
│   ├── index.ts
│   ├── pichu.config.ts
│   ├── pikachu.config.ts
│   ├── raichu.config.ts
│   └── lapras.config.ts
└── shared/          # Used by both client and server
    ├── index.ts
    ├── config.ts    # Type definitions
    ├── pichu.config.ts
    ├── pikachu.config.ts
    ├── raichu.config.ts
    └── lapras.config.ts
```

| Folder | Purpose | Prefix |
|--------|---------|--------|
| `client/` | Browser-accessible config | `PUBLIC_` |
| `server/` | Server-only config (can have secrets) | None |
| `shared/` | Used by both contexts | `PUBLIC_` if in client |

## Dependencies

```mermaid
flowchart LR
    A[Config] --> B[Env Variable]
    B -->|PUBLIC_LANDSCAPE| C[Select Config]
```

| Dependency | Why |
|------------|-----|
| `PUBLIC_LANDSCAPE` | Environment variable to select active config |

| Dependent | Why |
|-----------|-----|
| API Client | Uses `config.api.domain` for baseUrl |
| Auth System | Uses `config.auth` for Descope credentials |

## Key Interfaces

### `ISharedConfig`

Type definition for shared configuration.

**Key File**: `src/config/shared/config.ts:1-21`

```typescript
interface ISharedConfig {
  app: {
    landscape: string;
    platform: string;
    service: string;
    module: string;
    version: string;
  };
  errorPortal: {
    enabled: boolean;
    scheme: 'http' | 'https';
    host: string;
  };
  api: {
    domain: string;
    scheme: string;
  };
}
```

### Config Selection

Landscape is selected via `PUBLIC_LANDSCAPE` environment variable.

**Key File**: `src/config/shared/index.ts:1-17`

```typescript
import { PUBLIC_LANDSCAPE } from '$env/static/public';

const reg: { [s: string]: ISharedConfig } = {
  lapras,
  pichu,
  pikachu,
  raichu,
};

const config: ISharedConfig = reg[PUBLIC_LANDSCAPE];
export { config };
```

## Landscapes

| Landscape | Name | Purpose |
|-----------|------|---------|
| `lapras` | Local | Local development |
| `pichu` | Development | Dev environment |
| `pikachu` | Staging | Staging environment |
| `raichu` | Production | Production environment |

## Environment Variable

Set the landscape at build time or runtime:

```bash
export PUBLIC_LANDSCAPE=lapras  # or pichu, pikachu, raichu
```

## Config Properties

Each landscape config includes:

### App Metadata
- `landscape`: Landscape name
- `platform`: Platform identifier
- `service`: Service name (argon)
- `module`: Module name
- `version`: Current version

### Error Portal
- `enabled`: Whether error portal is active
- `scheme`: HTTP or HTTPS
- `host`: Error portal hostname

### API Configuration
- `domain`: Zinc API domain
- `scheme`: HTTP or HTTPS

### Auth Configuration (server-only)
- `clientId`: Descope project ID
- `clientSecret`: Descope project secret
- `secret`: Session encryption secret

## Usage

### Import in Client Code

```typescript
import { config } from '$lib/config/shared';

const apiUrl = `${config.api.scheme}://${config.api.domain}`;
```

### Import in Server Code

```typescript
import { config } from './config/server';

const descopeIssuer = `https://api.descope.com/${config.auth.clientId}`;
```

## Related

- [Getting Started](../01-getting-started.md) - How to set up environment
