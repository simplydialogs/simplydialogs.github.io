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
sizing.html \
positioning.html \
keyboard.html \
progress.html \
wait.html \
backdrop.html \
forms.html \
forms.input.html \
forms.select.html \
index.old \
examples.html \
integration.html \
credits.html \
footer.html >> ../index.html

