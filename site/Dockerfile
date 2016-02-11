FROM node:5-slim
ADD api/package.json /api/
RUN cd api && node --version
RUN cd api && npm --version
RUN cd api && npm install
# ADD /public/
RUN cd api && npm install
ADD . /
CMD node api/index.js

