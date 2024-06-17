#!/usr/bin/env bash

myfunc() {
  ls
  x=120
  y=500
  sleep 5
  echo $(($x+$y))
  echo $1 | tr ' ' '\n'
}

myfunc 'some jibberish gibberish pr siaiisj iqagsi asuhs auu yYVS'
