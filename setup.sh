#!/bin/bash
sudo gh repo sync --branch main
sudo npm i
pm2 start index.js --name bmsce-firstyearerp-api-sheets
pm2 save
