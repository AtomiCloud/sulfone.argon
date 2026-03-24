{ pkgs, pkgs-2411, atomi }:
let

  all = {

    atomipkgs = (
      with atomi;
      {
        inherit
          atomiutils
          mirrord
          typescript_json_schema
          swagger_typescript_api
          sg
          pls;
      }
    );
    nix-2411 = (
      with pkgs-2411;
      {
        inherit
          infisical
          git

          bun
          treefmt
          gitlint
          shellcheck;
      }
    );
  };
in
with all;
nix-2411 //
atomipkgs
