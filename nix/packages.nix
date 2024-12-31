{ pkgs, pkgs-2305, pkgs-2411, atomi, pkgs-oct-21-23 }:
let

  all = {

    atomipkgs = (
      with atomi;
      {
        inherit
          mirrord
          typescript_json_schema
          swagger_typescript_api
          sg
          pls;
      }
    );
    nix-2305 = (
      with pkgs-2305;
      { }
    );
    nix-2411 = (
      with pkgs-2411;
      {
        inherit
          infisical;
      }
    );
    oct-21-23 = (
      with pkgs-oct-21-23;
      {
        nodejs = nodejs_18;
        npm = nodePackages.npm;
        inherit
          coreutils
          yq-go
          gnused
          gnugrep
          bash
          jq
          findutils
          doppler

          git

          bun
          treefmt
          gitlint
          shellcheck
          ;
      }
    );
  };
in
with all;
nix-2305 //
nix-2411 //
atomipkgs //
oct-21-23
