# Token Refresh

**What**: JWT token expiration checking and automatic redirect to login.

**Why**: Ensures users have valid sessions without manual token management.

**Key Files**:

- `src/hooks.server.ts:7-12` → `expired()` function for token validation
- `src/hooks.server.ts:60-66` → JWT callback that clears expired tokens
- `src/store.ts:22` → Token expiration check before API calls
- `src/store.ts:43-45` → Auto sign-in when token expired

## Overview

JWT tokens from Descope have a limited lifetime. Argon checks token expiration at multiple points: during session validation on the server, before making API calls on the client, and in the JWT callback. When a token is detected as expired, it's cleared from the session and the user is automatically redirected to Descope for re-authentication.

## Flow

### High-Level

```mermaid
flowchart LR
    A[API Call] --> B{Token Expired?}
    B -->|Yes| C[Clear Session]
    B -->|No| D[Execute Call]
    C --> E[Redirect to Login]
    E --> F[Descope OAuth]
    F --> G[New Token]
```

### Detailed

```mermaid
sequenceDiagram
    participant C as Client
    participant S as store.ts
    participant D as Descope

    C->>S: 1. Make API call
    S->>S: 2. Check token expiration
    alt Token expired
        S->>D: 3. Trigger signIn('descope')
        D-->>C: 4. OAuth redirect
        C->>D: 5. Re-authenticate
        D-->>S: 6. New JWT token
        S->>S: 7. Store in session
        Note over S,C: 8. User must retry API call manually (page reload)
    else Token valid
        S->>S: 9. Add Authorization header
        S-->>C: 10. API response
    end
```

| #   | Step             | What                         | Why                         | Key File                    |
| --- | ---------------- | ---------------------------- | --------------------------- | --------------------------- |
| 1   | API call         | Client makes request         | Access protected resource   | `src/store.ts:38-56`        |
| 2   | Check expiration | Validate JWT exp claim       | Ensure token is still valid | `src/store.ts:22`           |
| 3   | Trigger signIn   | Redirect to Descope          | Get fresh token             | `src/store.ts:43-45`        |
| 4   | OAuth redirect   | User sees login screen       | Re-authenticate             | `@auth/sveltekit/client`    |
| 5   | Re-authenticate  | User proves identity         | Get new token               | Descope service             |
| 6   | New token        | Fresh JWT received           | Update session              | `src/hooks.server.ts:39-58` |
| 7   | Store session    | Save new token               | Use for future calls        | `src/hooks.server.ts:29-38` |
| 8   | Manual retry     | User retries original action | Complete user action        | N/A (page reload required)  |
| 9   | Add header       | Include Authorization header | Authenticated request       | `src/store.ts:46-50`        |
| 10  | API response     | Return data to caller        | Display result              | `src/lib/api/core/Api.ts`   |

## Edge Cases

- **Refresh token also expired**: User must fully re-authenticate with credentials
- **Multiple tabs**: All tabs detect expiration and redirect simultaneously
- **API call in progress**: Call may fail before redirect completes

## Related

- [Authentication](./01-authentication.md) - Initial OAuth flow
- [API Client](../modules/01-api-client.md) - HTTP client with auth injection
