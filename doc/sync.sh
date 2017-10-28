#!/bin/bash
read -p "prod or dev（默认dev）：" type

cd `dirname $0`
# 打包
cd ../

if [ "$type"t = "prod"t ]
then
	yarn build
fi
# 同步prod
rsync -vzrtu  --progress --exclude-from=.syncignore -e "ssh -p 1500" ./build/h5/prod/ rsyncer@112.124.41.152:/var/webdata/www/stmall/frontend/web/h5
