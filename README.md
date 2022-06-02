# FOSS-monorepo-template

### macos system setup
pnpm will be used as a node version manager and main package manager

see intructions https://pnpm.io/installation

```zsh
curl -fsSL https://get.pnpm.io/install.sh | sh -

# install nodejs LTS
# it makes rush happy to run on LTS

pnpm env use --global lts
pnpm i -g @microsoft/rush

```


