#!/bin/bash
prefix=$(date +'%Y-%m-')
lastDay=$(cal| awk 'NR == 7{print $NF}')

firstDay=$prefix"01"
lastDay=$prefix$lastDay

author=$1
a=0
b=0
c=0

# 当月代码量统计
fun(){
	eval $(git log --author="$author" --since=$firstDay --until=lastDay --pretty=tformat: --numstat 2> /dev/null \
	| awk '{ add += $1; subs += $2; loc += $1 + $2 } \
	END { printf "if [ x%s != x ] ; then a=$(( $a + %s ));b=$(( $b + %s ));c=$(( $c + %s )); fi", add, add, subs, loc}');
}
fun

branch=$(git config  remote.origin.url)

for file in $PWD/*; do
	if test -d $file; then
		cd $file
		if [ x$(git config  remote.origin.url) != x$branch ]; then
			fun
		fi
		cd ..
	fi
done

echo '本月的代码量如下：'
echo '新增：'$a '删除：'$b '总计：'$c