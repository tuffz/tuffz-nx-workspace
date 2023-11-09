# Creating local library

```sh
npx nx generate @nx/react:library --name=<lib name> --importPath=@tuffz-workspace/<lib name> --tags='"type:<feature|ui|data-access|utility|others>", "scope:<shared|biograpy|...>"' --no-interactive #--dry-run
```

## Reference

- [Creating local libraries](https://nx.dev/concepts/more-concepts/library-types)
- [Library Types](https://nx.dev/concepts/more-concepts/library-types)
- [Imposing Constraints with Module Boundary Rules](https://nx.dev/concepts/more-concepts/library-types)
