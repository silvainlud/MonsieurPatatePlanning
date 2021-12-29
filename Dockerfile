FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY src ./src/
COPY data ./data/

RUN cd /app && npm install

CMD [ "node", "src/app.js"]