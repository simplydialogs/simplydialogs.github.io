#!/bin/bash 
# usage ./build.sh

rm ../index.html

cat header.html \
aside.html \
summary.html \
defaults.html \
captions.html \
icons.html \
classes.html \
index.old \
examples.html \
integration.html \
credits.html \
footer.html >> ../index.html

