# Phantomklänge

## Development
### NixOS

Activate the environment using Nix the provided Nix flake:

```Bash
cd phantomklange
nix develop
```

Inside this new shell, the hugo command will be available. You can now run your standard Hugo commands:

```Bash
hugo server -D  # Start the development server (include drafts)
hugo            # Build the static site into the 'public' directory
hugo version    # Check the version provided by the flake
git status      # Git is also available
```

### Windows