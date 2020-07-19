FROM node:12.18-slim

RUN mkdir /build_burger
WORKDIR /build_burger

COPY ./start-exec.sh /build_burger/

ENTRYPOINT ["./start-exec.sh"]
