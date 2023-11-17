FROM node:alpine
#УЖЕ ДОЛЖНА БЫТЬ ПАПКА node_modules
COPY . /app
WORKDIR /app
RUN chmod 777 -R /app && npm i
CMD ["npm", "run", "dev"]
#docker build -t front_container -f ./Dockerfile .
#docker run -p 5173:5173 -d front
EXPOSE 5173
