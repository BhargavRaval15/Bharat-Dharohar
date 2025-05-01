#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install dependencies
npm install

# Store build information
echo "NODE_ENV=production" > .env
echo "BUILD_DATE=$(date)" >> .env
echo "BUILD_VERSION=$(git rev-parse --short HEAD)" >> .env 