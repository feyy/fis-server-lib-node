#! /bin/sh

rm server.tar
tar -cf server.tar server.js transpond-config.js package.json ./node_modules
echo 'build completed!'
