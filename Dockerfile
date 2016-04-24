FROM node
RUN mkdir -p /usr/app/src/
WORKDIR /usr/app/
COPY package.json /usr/app/
COPY src/ /usr/app/src/
RUN npm install
ENV HTTP_PORT=3000
EXPOSE 80
EXPOSE 22
EXPOSE 443
EXPOSE 8000
CMD ["npm", "test"]
