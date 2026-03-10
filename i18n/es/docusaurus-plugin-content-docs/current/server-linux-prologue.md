---
id: server-linux-prologue
title: "Configura Prologue en un servidor Linux - Aloja tu propia plataforma de audiolibros"
description: "Aprende a instalar y ejecutar un servidor de audiolibros compatible con Prologue en tu VPS Linux usando Docker o una instalación manual → Aprende más ahora"
sidebar_label: Instalar Prologue
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

[Prologue](https://prologue.audio/) es una plataforma moderna para escuchar audiolibros diseñada para funcionar con servidores de audiolibros autoalojados. Te permite hacer streaming, organizar y escuchar tu biblioteca de audiolibros en múltiples dispositivos como iPhone, iPad, Apple Watch y CarPlay.

En lugar de depender de plataformas de audiolibros en la nube, una configuración autoalojada te da control total sobre tu colección de audiolibros y la infraestructura de streaming. Una vez configurado el servidor, la app móvil Prologue se conecta a él y sincroniza el progreso de reproducción, marcadores y el historial de escucha.

En esta guía aprenderás a desplegar un servidor de audiolibros compatible con Prologue en un VPS Linux usando dos métodos diferentes:

- Instalación manual en un servidor web
- Despliegue basado en Docker para una gestión más sencilla y en contenedores

![img](https://screensaver01.zap-hosting.com/index.php/s/ocybWYJaSRrwksD/preview)

<InlineVoucher />



## Casos de uso de Prologue

Prologue puede usarse en muchos escenarios donde los usuarios quieren tener propiedad total y flexibilidad sobre su biblioteca de audiolibros.

Los casos de uso más comunes incluyen:

- Alojar una plataforma privada de streaming de audiolibros
- Gestionar grandes colecciones de audiolibros en una interfaz centralizada
- Sincronizar la reproducción entre varios dispositivos
- Acceder a los audiolibros de forma remota desde cualquier lugar
- Crear una alternativa autoalojada a plataformas comerciales de audiolibros

Una configuración autoalojada también garantiza que tus archivos multimedia permanezcan bajo tu control, mientras te permite construir un servidor de audiolibros escalable.



## Requisitos previos

Antes de instalar el servidor, asegúrate de que tu sistema cumple con los siguientes requisitos.

| Hardware | Mínimo | Recomendado |
|----------|---------|-------------|
| CPU | 1 vCPU | 2 vCPU |
| RAM | 2 GB | 4 GB |
| Espacio en disco | 20 GB | 50 GB |

<InlineServiceLink />

El software requerido depende del método de instalación:

Configuración manual:

- Servidor Linux
- Servidor web (Apache o Nginx)
- PHP
- Servidor de base de datos

Configuración con Docker:

- Docker
- Docker Compose





## Preparación

Antes de comenzar la instalación, actualiza los paquetes de tu sistema.

```
sudo apt update
sudo apt upgrade
```


Verifica que el entorno de ejecución requerido esté instalado según el método elegido. Para instalaciones con Docker:

```
docker --version
docker compose version
```

Si Docker no está instalado aún, instálalo antes de continuar.



## Instalación manual

La instalación manual instala la aplicación directamente en tu servidor sin contenedores. Este método es útil cuando despliegas en entornos tradicionales de hosting web.



### Descarga la aplicación

Primero crea un directorio para el proyecto y descarga los archivos de la aplicación.

```
mkdir prologue-server
cd prologue-server
```


Luego, clona el repositorio del proyecto:

```
git clone https://github.com/michaelstaake/Prologue.git
```



### Configura el servidor web

Mueve los archivos de la aplicación al directorio de tu servidor web. Ejemplo para [Apache](dedicated-linux-webserver.md#apache):

```
sudo mv prologue-server /var/www/prologue
```


Crea una configuración de host virtual apuntando al directorio de la aplicación. Ejemplo de configuración para Apache:

```<VirtualHost *:80>
ServerName tudominio.com
DocumentRoot /var/www/prologue
</VirtualHost>
```


Reinicia el servidor web tras la configuración.

```
sudo systemctl restart apache2
```



### Configura los ajustes del entorno

Edita el archivo de configuración y actualiza los ajustes necesarios como la conexión a la base de datos y la URL del servidor.

```
nano config.php
```


Una vez completada la configuración, la interfaz web estará disponible a través de tu dominio configurado o la dirección IP del servidor.



## Instalación con Docker

Docker ofrece un método de despliegue más sencillo ejecutando la aplicación dentro de un contenedor.



### Crea el directorio del proyecto

Crea un directorio para el despliegue con Docker.

```
mkdir prologue-docker
cd prologue-docker
```



### Crea la configuración de Docker Compose

Crea un archivo Docker Compose usando `nano compose.yaml` e inserta la siguiente configuración:

```
services:
  prologue:
    image: ghcr.io/michaelstaake/prologue:latest
    container_name: prologue
    ports:
      - "13378:80"
    volumes:
      - ./data:/data
    restart: unless-stopped
```



### Inicia el contenedor

Inicia el contenedor usando Docker Compose con `docker compose up -d` y verifica que el contenedor esté corriendo con `docker ps`. Docker descargará automáticamente la imagen requerida y arrancará el servidor de audiolibros.



### Accediendo al servidor

Una vez que el servidor esté en marcha, abre tu navegador y navega a:

```
http://TU_IP_DEL_SERVIDOR:13378
```

Sustituye TU_IP_DEL_SERVIDOR por la dirección IP de tu VPS. En el primer inicio se te pedirá:

- Crear una cuenta de administrador
- Configurar el directorio de tu biblioteca de audiolibros
- Escanear e importar los archivos de audiolibros


Después de configurar tu biblioteca, podrás conectar la app móvil Prologue al servidor y comenzar a hacer streaming de tu colección de audiolibros.



## Conclusión

¡Felicidades! Has desplegado con éxito un servidor de audiolibros compatible con Prologue usando una instalación manual o un despliegue basado en Docker.

Ambos métodos te permiten alojar tu colección de audiolibros en tu propia infraestructura y hacer streaming a tus dispositivos a través de la app Prologue. La configuración con Docker facilita el mantenimiento y las actualizaciones, mientras que la instalación manual ofrece mayor control sobre tu entorno de servidor web.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />