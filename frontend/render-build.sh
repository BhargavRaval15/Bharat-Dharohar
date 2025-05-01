#!/usr/bin/env bash
# Build script for Render deployment

# Exit on error
set -e

# Install dependencies
npm install

# Build the application
npm run build

# Move the build to the appropriate location for Render
echo "Build completed successfully!" 