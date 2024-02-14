# Используем образ node:alpine в качестве базового для контейнера
FROM node:alpine
#УЖЕ ДОЛЖНА БЫТЬ ПАПКА node_modules
COPY . /app
WORKDIR /app
# Установка права на чтение/запись/выполнение для всех файлов и папок внутри /app
RUN chmod 777 -R /app && npm i
# команда, которая будет выполняться при запуске контейнера
CMD ["npm", "run", "dev"]
#docker build -t front_container -f ./Dockerfile .
#docker run -p 5173:5173 -d front
# Экспорт порта 5173 из контейнера
EXPOSE 5173
