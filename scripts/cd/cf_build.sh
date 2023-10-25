#!/usr/bin/env bash

branch="$CF_PAGES_BRANCH"

set -eou pipefail

if [ "$branch" = "pichu" ] || [ "$branch" = "pikachu" ] || [ "$branch" = "raichu" ]; then
  echo "🔍 Qualified branch: ${branch}"
else
  echo "🔍 Non-qualified branch: ${branch}, downgrading to pichu"
  branch="pichu"
fi

branch_upper="$(echo "$branch" | tr '[:lower:]' '[:upper:]')"
echo "🗻 Landscape: ${branch}"
echo "💱 Using env vars: ${branch_upper}_DESCOPE_ID, ${branch_upper}_DESCOPE_SECRET, ${branch_upper}_AUTH_SECRET"

export PUBLIC_LANDSCAPE=${branch}
export "DESCOPE_ID=\$${branch_upper}_DESCOPE_ID"
export "DESCOPE_SECRET=\$${branch_upper}_DESCOPE_SECRET"
export "AUTH_SECRET=\$${branch_upper}_AUTH_SECRET"

echo "🔑 Descope ID: ${DESCOPE_ID}"

echo "🔨 Building for branch: ${branch}"
bun run build
