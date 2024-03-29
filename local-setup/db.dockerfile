FROM alpine:3.19.1

RUN apk update
RUN apk add postgresql postgresql-contrib

USER postgres

RUN initdb -D /var/lib/postgresql/data

USER root

RUN mkdir -p /run/postgresql
RUN chown -R postgres /run/postgresql

CMD tail -f /dev/null
