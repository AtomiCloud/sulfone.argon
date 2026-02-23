# Argon Developer Documentation

Argon is the **Registry Frontend** for the CyanPrint platform - a SvelteKit application that serves as the web UI for browsing and managing Templates, Processors, Plugins, and Extensions.

## Quick Navigation

- [Getting Started](./01-getting-started.md) - Setup and development guide
- [Architecture](./02-architecture.md) - High-level system overview
- [Features](./features/) - User-facing features and flows
- [Modules](./modules/) - Code organization and structure

## What is Argon?

Argon provides a browsable catalog of Templates, Processors, Plugins, and Extensions that users can discover and use with the CyanPrint CLI.

### Key Capabilities

- **User Authentication** via Descope OAuth
- **Template/Plugin/Processor Browsing** with search and filtering
- **Resource Detail Pages** with documentation and install commands
- **User Profile Management** including API token generation
- **Dark Mode** theme switching

### Technology Stack

| Component | Technology |
|-----------|------------|
| Framework | SvelteKit with TypeScript |
| UI Library | shadcn-svelte + bits-ui |
| Styling | Tailwind CSS |
| Auth Provider | Descope (OAuth2/OIDC) |
| API Client | Auto-generated from Zinc OpenAPI |
| Deployment | Cloudflare Pages |
| Build Tool | Bun |

### Architecture Position

```
┌─────────────────┐     ┌──────────────────────────────────┐
│ Client Cluster  │────▶│     Registry Cluster              │
│                 │     │  ┌─────────────┐  ┌────────────┐ │
│ • CLI (Iridium) │     │  │   Argon     │  │   Zinc     │ │
│ • WebApp        │     │  │ (Frontend)  │  │ (Backend)  │ │
└─────────────────┘     │  └─────────────┘  └────────────┘ │
                        └──────────────────────────────────┘
```

### Environment URLs

| Landscape | Name | URL |
|-----------|------|-----|
| Local | Lapras | http://localhost:5173 |
| Development | Pichu | https://pichu.sulfone-argon.pages.dev |
| Staging | Pikachu | https://pikachu.sulfone-argon.pages.dev |
| Production | Raichu | https://cyanprint.dev |

### Related Components

- **Zinc** - Registry Backend API (provides the REST API that Argon consumes)
- **Boron** - Execution Cluster Coordinator (executes templates that users browse in Argon)
- **Iridium** - CLI tool that can use API tokens generated through Argon

## Start Here

New to Argon? Start with:
1. [Getting Started](./01-getting-started.md) - Set up your development environment
2. [Architecture](./02-architecture.md) - Understand how the system works
3. [Features](./features/) - Learn about specific features

## Development Commands

| Command | Purpose |
|---------|---------|
| `pls setup` | Install dependencies and setup secrets |
| `pls dev` | Start development server |
| `pls build` | Build for production |
| `pls test` | Run tests |
| `pls check` | Type checking |
