FROM node
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/
COPY package.json /usr/src/app/
COPY src/ /usr/src/app/
RUN npm install
EXPOSE 80
EXPOSE 22
EXPOSE 443
EXPOSE 8000
CMD ["npm", "start"]
