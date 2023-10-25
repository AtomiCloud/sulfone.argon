#!/usr/bin/env bash

branch="$CF_PAGES_BRANCH"

set -eou pipefail

branch_upper="$(echo "$branch" | tr '[:lower:]' '[:upper:]')"

echo "💱 ${branch} Using env vars: ${branch_upper}_DESCOPE_ID, ${branch_upper}_DESCOPE_SECRET, ${branch_upper}_AUTH_SECRET"

export PUBLIC_LANDSCAPE=${branch}
export "DESCOPE_ID=${branch_upper}_DESCOPE_ID"
export "DESCOPE_SECRET=${branch_upper}_DESCOPE_SECRET"
export "AUTH_SECRET=${branch_upper}_AUTH_SECRET"

echo "🔨 Building for branch: ${branch}"
bun run build
