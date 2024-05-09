#!/bin/bash

cd ~

sudo chmod o+w /var/www/html

cd /var/www/html

sudo node dist/src/main.js > output.log 2>&1 &
