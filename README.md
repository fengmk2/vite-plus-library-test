# problem

```bash
vite i                                                                                      node(v22.21.1) 
 WARN  GET https://registry.npmjs.org/cac error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
 WARN  GET https://registry.npmjs.org/picocolors error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
 WARN  Request took 11141ms: https://registry.npmjs.org/cac
 WARN  Request took 10687ms: https://registry.npmjs.org/picocolors
 WARN  GET https://registry.npmjs.org/@vitest%2Fui error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
 ERR_PNPM_NO_MATCHING_VERSION  No matching version found for @vitejs/devtools@>=0.0.0 <0.0.1 while fetching it from https://registry.npmjs.org/

This error happened while installing a direct dependency of /private/tmp/vite-plus-library-test

The latest release of @vitejs/devtools is "0.0.0-alpha.20".

If you need the full list of all 20 published versions run "$ pnpm view @vitejs/devtools versions".
Progress: resolved 137, reused 96, downloaded 0, added 0
```