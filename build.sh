#!/bin/bash

npm install
npm run build
docker buildx build --build-arg=COMMIT=$(git rev-parse --short HEAD) --platform linux/amd64,linux/arm64,linux/arm/v7 --push -t ghcr.io/tedyst/filedrop-web .