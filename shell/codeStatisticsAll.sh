#!/bin/bash
prefix=$(date +'%Y-%m-')
lastDay=$(cal| awk 'NR == 7{print $NF}')

firstDay=$prefix"01"
lastDay=$prefix$lastDay

# 当月代码量统计
git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --since=$firstDay --until=lastDay --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 + $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done