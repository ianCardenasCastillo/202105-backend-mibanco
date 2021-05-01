FROM node:15.10.0

# Dentro del contenedor creamos una carpeta que contendra la app
RUN mkdir /src

# Definimos que la carpeta de trabajo sera el src de nuestro contenedor
WORKDIR /src

# Copía los recursos desde el src local al contenedor en su primera ejecución
# Para efectos de desarrollo no lo usaremos aun
COPY ./ /src/
# COPY ./api/package*.json /src/


RUN npm install
RUN npm rebuild bcrypt --build-from-source
# RUN npm uninstall bcrypt
# RUN npm install bcrypt
CMD [ "npm", "start" ]