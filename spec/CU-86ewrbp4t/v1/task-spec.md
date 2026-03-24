# Task Specification: [Ar] implement resolver UI (CU-86ewrbp4t)

## Source

- Ticket: CU-86ewrbp4t
- System: ClickUp
- URL: https://app.clickup.com/t/86ewrbp4t

## Objective

Implement resolver UI components for Argon frontend, following the existing plugin/processor/template patterns. This includes a resolver detail page, resolver card for registry listing, registry page integration, and a dependencies tab on the template detail page.

## Acceptance Criteria

- [ ] Resolver detail page loads and displays resolver metadata (name, description, project, source, tags)
- [ ] Resolver detail page shows version list with search/filter functionality
- [ ] Resolver detail page shows download count and stars
- [ ] Resolver card component displays correctly in registry
- [ ] Registry page includes "Resolver" in the type dropdown filter
- [ ] Registry page search works for resolvers
- [ ] Template detail page has "Dependencies" tab showing resolvers, plugins, processors as links
- [ ] All existing tests pass
- [ ] Code follows existing patterns (no new patterns introduced)
- [ ] Commit messages follow `type: description` convention with ticket ID
- [ ] Browser MCP used to verify UI renders correctly; report any issues found

## Scope

### In Scope

1. **Resolver detail page route**

   - `src/routes/resolvers/[user_id]/[resolver_id]/+page.ts` — page loader
   - `src/routes/resolvers/[user_id]/[resolver_id]/+page.svelte` — page component

2. **Resolver card component**

   - `src/lib/components/cards/resolver.svelte` — card for registry listing

3. **Registry page update**

   - Add "Resolver" option to dropdown filter
   - Add `searchResolver` function
   - Add resolver card rendering in the grid

4. **Template detail page update**
   - Add "Dependencies" tab to tabs list
   - Add Dependencies tab content showing resolvers, plugins, processors as linked names

### Out of Scope

- Navigation changes (resolvers accessed via direct URL, no nav link needed)
- Resolver push/create functionality (read-only UI)
- Separate resolver listing page (registry page serves this purpose)
- API client regeneration (already exists)

## Technical Decisions

| Decision             | Choice                                                         | Reasoning                                                                       |
| -------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Route parameters     | `[user_id]` = user UUID (sub), `[resolver_id]` = resolver UUID | Matches existing plugin/processor pattern where both are UUIDs                  |
| Template integration | New "Dependencies" tab                                         | Consolidates all dependency types (resolvers, plugins, processors) in one place |
| Resolver listing     | Registry page with dropdown filter                             | Registry page already handles listing/search for all resource types             |
| Dependencies display | Names with links only                                          | Simple list view, no additional metadata needed                                 |

## Edge Cases

- **Empty dependencies**: If template has no dependencies, Dependencies tab should show empty state message
- **Missing resolver**: If resolver lookup fails (404), show "Resolver not found" message using existing Page component pattern
- **Search with no results**: Show "There are no resolvers found" message (existing pattern)

## Error Handling

- API failures handled via `toResult` wrapper and `Res.fromSerial` pattern (existing pattern)
- 404 errors show not found message via Page component's `notFoundMessage` prop
- All errors propagate to Page component's `problem` prop for consistent display

## References

| What                  | Reference File/Pattern                                                         |
| --------------------- | ------------------------------------------------------------------------------ |
| Page load pattern     | `src/routes/plugins/[user_id]/[plugin_id]/+page.ts`                            |
| Detail page component | `src/routes/plugins/[user_id]/[plugin_id]/+page.svelte`                        |
| Card component        | `src/lib/components/cards/plugin.svelte`                                       |
| Registry page         | `src/routes/registry/+page.svelte`                                             |
| API client            | `src/lib/api/core/Api.ts`, `src/lib/api/core/data-contracts.ts`                |
| Types                 | `src/lib/api/core/data-contracts.ts` (`ResolverResp`, `ResolverPrincipalResp`) |
| Store                 | `src/store.ts`                                                                 |

## Implementation Notes

### Resolver Detail Page Loader

```typescript
// src/routes/resolvers/[user_id]/[resolver_id]/+page.ts
import type { ProblemDetails } from '../../../../errors/problem_details';
import type { ResolverResp } from '$lib/api/core/data-contracts';
import { NewApi } from '../../../../store';
import type { PageLoad } from './$types';
import { toResult } from '$lib/utility';

export const load = (async ({
  params,
  fetch,
  parent,
}): Promise<{
  result: ['err', ProblemDetails] | ['ok', ResolverResp];
}> => {
  const data = await parent();
  const api = NewApi({ data, fetch });

  const r = await toResult(
    () => api.vResolverIdDetail(params.user_id, params.resolver_id, '1'),
    'Fail to get resolver',
  ).serial();
  return {
    result: r,
  };
}) satisfies PageLoad;
```

### Resolver Card Component

Follow `src/lib/components/cards/plugin.svelte` pattern exactly, using:

- `ResolverPrincipalResp` type
- Link to `/resolvers/{resolver.userId}/{resolver.id}`
- Display name, description, tags, email, project/source links

### Registry Page Updates

Add to options array:

```typescript
{
  value: "resolver",
  label: "Resolver",
}
```

Add `searchResolver` function following `searchPlugin` pattern using `api.vResolverDetail`.

Add resolver card rendering in the grid.

### Template Dependencies Tab

Add new tab trigger and content:

```svelte
<Tabs.Trigger value="dependencies">Dependencies</Tabs.Trigger>
<Tabs.Content value="dependencies">
  <!-- List resolvers, plugins, processors with links -->
</Tabs.Content>
```

Use `TemplateVersionResp.plugins`, `.processors`, `.resolvers` arrays.

## Browser MCP Verification

After implementation, use browser MCP to verify UI renders correctly:

1. Start dev server if not running
2. Navigate to registry page and test resolver filter/search
3. Navigate to resolver detail page (if data available) and verify layout
4. Navigate to template detail page and verify Dependencies tab
5. Report any issues found (visual bugs, broken links, missing data display)
