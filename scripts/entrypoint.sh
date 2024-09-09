#!/bin/ash
#
# entrypoint for pocketbase
# - support PORT variable for Heroku and the likes: specifies on which port it will listen (Default: 5000)
# - support HOST variable: specified on which host it will liste (Default: 0.0.0.0)

PB_VERSION=$(cat /PB_VERSION)

PB_PORT=${PORT:=5000}
PB_HOST=${HOST:=0.0.0.0}

echo "=== Starting Pocketbase Version $PB_VERSION ==="

exec /pocketbase serve --http=$PB_HOST:$PB_PORT