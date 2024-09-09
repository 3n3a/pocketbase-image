##################### BUILD ######################
FROM alpine:latest AS installer

RUN apk add --no-cache \
    curl jq unzip

COPY ./scripts/download-pocketbase.sh /tmp/download-pocketbase.sh
RUN sh /tmp/download-pocketbase.sh

COPY ./scripts/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

#####################  RUN  ######################
FROM alpine:latest

# pocketbase
COPY --from=installer /pb/pocketbase /
COPY --from=installer /PB_VERSION /PB_VERSION
COPY --from=installer /entrypoint.sh /entrypoint.sh

# pb_hooks
COPY ./hooks /pb_hooks

# pb_migrations
COPY ./migrations /pb_migrations

##
## ATTENTION: Volume for PB_DATA will be mounted under ROOT!!!!!!!!!!!!
##

# start PocketBase
ENTRYPOINT ["/entrypoint.sh"]