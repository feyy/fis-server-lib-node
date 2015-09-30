#! /bin/sh

rm server.tar
tar -cf server.tar server.js package.json ./node_modules
echo 'build completed!'
