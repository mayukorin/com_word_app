FROM node:12.14.1

WORKDIR /com_word_app/frontend
RUN npm install -g @vue/cli 
COPY  ./package*.json /com_word_app/frontend/
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080