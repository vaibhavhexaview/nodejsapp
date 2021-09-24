#!/bin/bash

PID=$(lsof -i tcp:9981 | awk '{print $2}'| sed -n '2p') 
kill -9 $PID
