# Pocketbase Image

A Pocketbase Docker Image with support for webhooks.

## Building

```
docker build --no-cache --progress plain -t pb .
```

## Run locally

```
docker run -e PORT=5000 -v /tmp/pb_data/:/pb_data pb
```

## Push to dokku / heroku

1. clone this repo
2. push to git server of dokku / heroku

### dokku

the following was done:

```
# create app
dokku apps:create pocketbase

# create storage directory
dokku storage:ensure-directory pocketbase

# mount storage
dokku storage:mount pocketbase /var/lib/dokku/data/storage/pocketbase/:/pb_data

# deploy app
git remote add dokku dokku@dokku.me:pocketbase

# enable letsencrypt
dokku letsencrypt:enable pocketbase
```