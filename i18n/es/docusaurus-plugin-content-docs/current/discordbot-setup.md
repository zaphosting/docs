---
id: discordbot-setup
title: Configura tu Bot de Discord
description: "Descubre cómo ejecutar y gestionar bots de Discord para moderación, música, sorteos y más con un alquiler de servidores sin complicaciones → Aprende más ahora"
sidebar_label: Configuración
services:
  - discord-bot
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introducción

Un **servidor de bots de Discord** te permite ejecutar tus bots de Discord de forma continua y sin interrupciones. Estos bots pueden realizar una variedad de tareas, como moderar automáticamente tu canal de Discord, reproducir música, organizar sorteos y encuestas, ¡y mucho más!

<YouTube videoId="OoKA8UJ_N5A" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ffjmn3snRrkoeoK/preview" title="¡Cómo configurar un servidor de bots de Discord y subir archivos del bot!" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo. Ya sea que tengas prisa o prefieras absorber la información de la forma más entretenida posible."/>

<InlineVoucher />



## Lenguajes soportados

Los bots de Discord pueden programarse en diferentes lenguajes. Nuestro producto soporta bots de Discord escritos en uno de los siguientes lenguajes de programación compatibles:

- Java
- Python
- NodeJS

  
  

## Preparación



### Obtén el Bot

Para comenzar, necesitarás un bot de Discord completamente funcional. Puedes crearlo tú mismo o descargar un bot ya hecho desde internet. Guárdalo en tu computadora para poder subirlo fácilmente a tu servicio después.

### Sube los archivos

Los archivos de tu bot de Discord deben subirse. Esto se puede hacer usando FTP. Si no sabes cómo usar FTP, te recomendamos revisar la [guía de Acceso vía FTP](gameserver-ftpaccess.md) para instrucciones detalladas.

![](https://screensaver01.zap-hosting.com/index.php/s/x4WPiNS6xQcWQrp/preview)


Una vez que hayas abierto la carpeta, simplemente sube los archivos del bot a la carpeta vacía:

![](https://screensaver01.zap-hosting.com/index.php/s/t7DDaF684PZkXjn/preview)



## Configuración

Para poder ejecutar tu bot usando el panel, el bot debe configurarse en el Panel de Bots de Discord dentro de la página de **Configuración**.

![](https://screensaver01.zap-hosting.com/index.php/s/HoPpfJKsTC6ozNy/preview)

Ahí debes configurar qué lenguaje de programación usa el bot y cómo se llama su archivo principal. En este ejemplo se usa Python 3 y se especifica el nombre del archivo del bot de Discord que se ejecutará. El nombre del archivo es `main.py`.

![](https://screensaver01.zap-hosting.com/index.php/s/ixfz2xKYCepS9Ek/preview)



:::danger Dependencias
Los bots de Discord suelen tener dependencias adicionales para su funcionamiento. Asegúrate de que todas estén presentes y correctamente configuradas en el bot de Discord. Estas se definen en los siguientes archivos:

- Python: Dependencias en `requirements.txt`.
- Node.js: Dependencias en `package.json`.
- Java: Dependencias en `pom.xml` (Maven) o `build.gradle` (Gradle).

:::



## Prueba de funcionalidad

Después de guardar la configuración, el bot puede iniciarse simplemente usando el botón verde de inicio en la parte superior de la página. En la consola en vivo puedes verificar si el bot se ha iniciado correctamente.



## Conclusión

¡Felicidades, has instalado y configurado tu Bot de Discord con éxito! Para cualquier pregunta o ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para asistirte 🙂






<InlineVoucher />