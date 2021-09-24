#!/usr/bin/env sh



echo 'The following "npm" command runs your Node.js application'
set -x
npm start &
sleep 1
echo $! > .pidfile
set +x



echo 'Now you can'
echo 'Visit http://localhost:9981/nodejsapp to see your Node.js application'
