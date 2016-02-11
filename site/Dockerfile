FROM node
ADD api/package.json /api/
RUN cd api && npm install
# ADD /public/
RUN cd api && npm install
ADD . /
CMD node api/index.js

