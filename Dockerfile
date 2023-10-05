FROM node:18-alpine

WORKDIR /static-portfolio/

COPY . .

RUN npm install

EXPOSE 5007

CMD ["npm", "run", "dev", "--", "--host"]