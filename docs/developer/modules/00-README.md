# Modules

Code organization and structural components in Argon.

## Overview

Modules in Argon are organized by their functional responsibility. Each module includes:
- **What**: One-sentence description of what the module does
- **Why**: Why this is a separate module
- **Key Files**: Main source files in the module
- **Responsibilities**: What the module is responsible for
- **Dependencies**: What the module depends on

## Modules Map

| Module | Description | Link |
|--------|-------------|------|
| API Client | HTTP client with auto-generated types and auth injection | [01-api-client.md](./01-api-client.md) |
| UI Components | shadcn-svelte base components and custom components | [02-ui-components.md](./02-ui-components.md) |
| Stores | Auth state and API client initialization | [03-stores.md](./03-stores.md) |
| Config | Multi-environment (landscape) configuration | [04-config.md](./04-config.md) |
