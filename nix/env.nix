{ pkgs, packages }:
with packages;
{
  system = [
    coreutils
    findutils
    gnugrep
    gnused
    yq-go
    jq
  ];

  dev = [
    pls
    git
    doppler
  ];

  infra = [
    mirrord
  ];

  main = [
    bun
    infisical
  ];

  lint = [
    # core
    treefmt
    typescript_json_schema
    swagger_typescript_api
    gitlint
    shellcheck
    sg
  ];

  releaser = [
    nodejs
    sg
    npm
  ];
}
