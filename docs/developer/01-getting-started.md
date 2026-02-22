# Getting Started

Get Argon running locally for development.

## Prerequisites

- **Nix** package manager with flakes enabled
- **Bun** package manager (installed via Nix)
- Node.js 22 (installed via Nix)

## Installation

### 1. Enter Development Environment

```bash
cd argon
nix develop
```

This activates the development shell with Node.js 22 and Bun pre-installed.

### 2. Install Dependencies

```bash
bun install
```

### 3. Configure Environment

Set the landscape environment variable:

```bash
export PUBLIC_LANDSCAPE=lapras  # or pichu, pikachu, raichu
```

| Landscape | Purpose |
|-----------|---------|
| `lapras` | Local development (default) |
| `pichu` | Development environment |
| `pikachu` | Staging environment |
| `raichu` | Production environment |

### 4. Setup Secrets

```bash
./scripts/local/secrets.sh
```

This creates the necessary `.env` file with Descope OAuth credentials.

### 5. Start Development Server

```bash
pls dev
```

The application will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── routes/          # SvelteKit file-based routing
│   ├── +layout.svelte       # Root layout wrapper
│   ├── +layout.server.ts    # Auth & session management
│   ├── +page.svelte         # Home page
│   ├── registry/            # Registry/search page
│   ├── templates/           # Template detail pages
│   ├── plugins/             # Plugin pages
│   ├── processors/          # Processor pages
│   ├── profile/             # User profile
│   ├── register/            # Username registration
│   └── tokens/              # Token management
├── lib/
│   ├── api/core/            # Generated API client (Zinc)
│   ├── components/
│   │   ├── ui/              # shadcn-svelte components
│   │   ├── cards/           # Domain-specific cards
│   │   ├── custom/          # Custom components
│   │   └── complex/         # Complex composed components
│   ├── core/                # Result, Option types
│   └── design/              # Animation utilities
├── config/
│   ├── client/              # Client-side config
│   ├── server/              # Server-side config
│   └── shared/              # Shared config
├── errors/                  # Error definitions
├── hooks.server.ts          # SvelteKit server hooks
└── store.ts                 # API client initialization
```

## Making Changes

1. Edit files in `src/routes/` for pages
2. Edit files in `src/lib/components/` for UI components
3. The dev server hot-reloads automatically
4. Use `pls check` for type checking

## Type Checking

```bash
pls check
```

This runs `svelte-check` to verify TypeScript types are correct.

## Building

```bash
pls build
```

This creates a production build in `.svelte-kit/output/`.

## Commands Reference

| Command | Description |
|---------|-------------|
| `pls setup` | Install dependencies and setup secrets |
| `pls dev` | Start development server |
| `pls build` | Build for production |
| `pls preview` | Preview production build locally |
| `pls test` | Run Playwright E2E tests |
| `pls check` | Type checking with svelte-check |
| `pls add <component>` | Add shadcn-svelte component |
| `pls sdk-gen` | Generate API client from Zinc OpenAPI |

## API Client Regeneration

The API client in `src/lib/api/core/` is auto-generated from Zinc's OpenAPI spec. To regenerate after Zinc API changes:

```bash
pls sdk-gen
```

This runs `scripts/local/sdk_gen.sh v1` which fetches the spec and generates TypeScript types.

**Do not edit** files in `src/lib/api/core/` directly - they will be overwritten.

## Configuration

| Option | Default | Description |
|--------|---------|-------------|
| `PUBLIC_LANDSCAPE` | `lapras` | Environment to use (lapras/pichu/pikachu/raichu) |

## Common Issues

### Issue: Nix flake not found

**Symptom**: `error: experimental Nix feature 'nix-command' is disabled`

**Solution**: Enable flakes in `~/.config/nix/nix.conf`:
```
experimental-features = nix-command flakes
```

### Issue: Descope credentials missing

**Symptom**: OAuth login redirects without authenticating

**Solution**: Contact the CyanPrint team to get credentials for your development landscape and run `./scripts/local/secrets.sh`

### Issue: Type errors

**Symptom**: Red squiggly lines in editor or build failures

**Solution**: Run `pls check` to see detailed type errors and fix them before building

## Next Steps

- [Architecture](./02-architecture.md) - System overview
- [Features](./features/) - What this component does
