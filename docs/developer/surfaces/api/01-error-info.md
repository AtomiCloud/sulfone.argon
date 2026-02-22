# Error Info API

**What**: HTTP endpoints for retrieving error type information.

**Why**: Provides error details for client-side error display and debugging.

**Key Files**:

- `src/routes/api/v1/error_info/+server.ts` → List all error types
- `src/routes/api/v1/error_info/[slug]/+server.ts` → Get specific error
- `src/routes/api/v1/error_info/[slug]/schema.json` → Error schema

## Overview

The Error Info API provides structured error information for the application. It returns error definitions with titles, descriptions, and solutions that can be displayed to users when problems occur.

## Endpoints

### List All Errors

`GET /api/v1/error_info`

Returns a list of all error types available in the system.

**Response**: `Record<string, ErrorInfo>`

```typescript
{
  "error_type": {
    "title": "Error Title",
    "description": "Error description",
    "solution": "How to fix it"
  }
}
```

**Key File**: `src/routes/api/v1/error_info/+server.ts`

### Get Specific Error

`GET /api/v1/error_info/[slug]`

Returns details for a specific error type.

**Parameters**:

- `slug` (path): Error type identifier

**Response**: `ErrorInfo`

```typescript
{
  "title": "Error Title",
  "description": "Error description",
  "solution": "How to fix it"
}
```

**Key File**: `src/routes/api/v1/error_info/[slug]/+server.ts`

## Error Types

Common error types returned by this API:

| Slug                  | Title               | Description                 |
| --------------------- | ------------------- | --------------------------- |
| `user_not_found`      | User Not Found      | User does not exist in Zinc |
| `token_expired`       | Token Expired       | JWT token has expired       |
| `invalid_credentials` | Invalid Credentials | Authentication failed       |
| `network_error`       | Network Error       | Unable to reach API         |

## Usage

Client components can fetch error info to display user-friendly messages:

```typescript
const response = await fetch(`/api/v1/error_info/${errorType}`);
const errorInfo = await response.json();
// Display errorInfo.title, description, and solution
```

## Related

- [Error Handling Feature](../../features/01-authentication.md) - How errors are handled
