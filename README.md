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
