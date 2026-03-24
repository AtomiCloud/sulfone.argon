{ pkgs, packages }:
with packages;
{
  system = [
    atomiutils
  ];

  dev = [
    pls
    git
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
