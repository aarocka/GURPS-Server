FROM aarocka/swift-sandbox:slim
RUN apt-get update && \
	apt-get install -y libssl-dev \
		libevent-dev \
		libsqlite3-dev \
		libcurl4-openssl-dev \
		libicu-dev \
		uuid-dev && \
		apt-get clean && \
		rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 80
EXPOSE 22
EXPOSE 443
COPY samples/  /tmp/
