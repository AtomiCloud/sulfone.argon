{ pkgs, pkgs-2305, atomi, atomi_classic, pkgs-oct-21-23 }:
let

  all = {
    atomipkgs_classic = (
      with atomi_classic;
      {
        inherit
          sg;
      }
    );
    atomipkgs = (
      with atomi;
      {
        inherit
          infisical
          mirrord
          typescript_json_schema
          swagger_typescript_api
          pls;
      }
    );
    nix-2305 = (
      with pkgs-2305;
      { }
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
atomipkgs //
atomipkgs_classic //
oct-21-23
