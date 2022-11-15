#!/bin/bash
sudo gh repo sync --branch main
sudo npm i
pm2 restart bmsce-firstyearerp-api-sheets
pm2 save
