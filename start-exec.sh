#!/bin/bash --login

echo 'Start'
yarn install

#entrypoint for docker
if [ "$1" = 'default' ]; then
  echo 'Starting Build Burger web server...'
  exec yarn start
else
  exec "$@"
fi    

