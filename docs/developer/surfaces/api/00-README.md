# HTTP Endpoints

Server routes and HTTP endpoints exposed by Argon.

## Overview

Argon exposes a limited set of HTTP endpoints, primarily for error information retrieval. Most API interactions are client-side calls to the Zinc backend.

## Endpoints

| Endpoint | Method | Description | Link |
|----------|--------|-------------|------|
| `/api/v1/error_info` | GET | List all error types | [01-error-info.md](./01-error-info.md) |
| `/api/v1/error_info/[slug]` | GET | Get specific error details | [01-error-info.md](./01-error-info.md#specific-error) |
