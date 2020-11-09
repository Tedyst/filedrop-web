#!/bin/bash


export REACT_APP_TITLE="filedrop"
export REACT_APP_SERVER="wss://drop.stoicatedy.ovh/ws"
export REACT_APP_USE_BROWSER_ROUTER="1"
export REACT_APP_ABUSE_EMAIL="tedy@stoicatedy.ovh"
export REACT_APP_SHOW_CLI_TOOL_INFO="0"
yarn install
yarn build
docker buildx build --build-arg=COMMIT=$(git rev-parse --short HEAD) --platform linux/amd64,linux/arm64,linux/arm/v7 --push -t ghcr.io/tedyst/filedrop-web .