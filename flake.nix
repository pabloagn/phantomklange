# flake.nix
{
  description = "Development environment for my Hugo website";

  inputs = {
    # Pin nixpkgs to a specific revision for reproducibility.
    # Using nixos-unstable typically gives you newer package versions.
    # You can change 'nixos-unstable' to a specific NixOS release like 'nixos-23.11' for more stability.
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        # Import packages for the specific system architecture.
        pkgs = nixpkgs.legacyPackages.${system};

        # The primary tool needed for development.
        # pkgs.hugo in recent nixpkgs is typically the "extended" version needed for many themes (Sass/SCSS support).
        hugo = pkgs.hugo;

        # Git is usually essential for project management.
        git = pkgs.git;

      in
      {
        # Development Shell accessed via `nix develop`
        devShells.default = pkgs.mkShell {
          # Packages available inside the development environment.
          packages = [
            hugo
            git
            # Add any other tools you might need here, e.g.:
            # pkgs.nodejs # If your theme uses Node.js for asset processing
            # pkgs.some-linter # If you use specific linters
          ];

          # Optional: Commands to run when entering the shell.
          shellHook = ''
            echo "Entering Hugo development environment..."
            echo "Hugo version: $(hugo version)"
            echo "Available commands: hugo server, hugo, git, ..."
            # You could add aliases or other setup here if needed.
            # Example: alias hs="hugo server -D"
          '';
        };
      });
}