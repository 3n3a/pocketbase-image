#!/bin/sh
#
# download latest pocketbase release
# 

PB_VERSION="$(curl -fsSL https://api.github.com/repos/pocketbase/pocketbase/releases/latest | jq -r '.tag_name | split("v") | .[1]')"
echo "Pocketbase Version $PB_VERSION"

curl -fsSL -o /tmp/pb.zip https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip
unzip /tmp/pb.zip -d /pb/
echo "Successfully downloaded and unzipped"

# save version to a file 
echo "$PB_VERSION" > /PB_VERSION