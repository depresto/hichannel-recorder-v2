#!/bin/sh
while true; do 
  # Add 2s in order to handle open ffmpeg latency
  timeout 3602 ffmpeg -i $(node ./index.js) "/record/$(date '+%Y%m%d-%H%M%S').mp3" &
  sleep 3600
done
