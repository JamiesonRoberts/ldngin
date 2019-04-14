#!/bin/sh

# CodeShip uses phpenv to manage PHP versions.
# Set PHP version.
phpenv local 7.3

# Install composer dependencies.
composer install --no-interaction

# Exit the deployment if any of the automatic composer scripts generated a file change
# git add --all
# git diff --quiet HEAD -- . ':(exclude).phpstorm.meta.php' ':(exclude)_ide_helper.php' ':(exclude).php-version' || { echo "Git diff detected. Aborting build."; exit 1; }

# CodeShip uses nvm to manage Node version.
# Require our node version.
if [ ! -f .nvmrc ]; then
    nvm install 6.13.0
else
    nvm install
fi

# Install NPM packages.
npm install

# compile front-end assets
npm run production
