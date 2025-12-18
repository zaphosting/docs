---
id: dedicated-linux-gs-interface
title: "Servidor Dedicado: Interfaz Gameserver/TS3"
description: "Descubre cómo configurar fácilmente servidores de juegos, servidores de voz y bots de música en VPS Linux o servidores dedicados → Aprende más ahora"
sidebar_label: Interfaz GS/TS3
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Si los productos de servidor de juegos no se ajustan a tu estilo o expectativas, o si necesitas tu servicio de otras formas, usar un VPS o servidor dedicado suele ser una mejor opción. Sin embargo, a menudo te enfrentas al reto de que no todos los servicios están automatizados o preinstalados. Configurar servicios como servidores de juegos, servidores Teamspeak 3 y bots de música debe hacerse de forma independiente.

Para resolver este problema, hemos desarrollado una solución práctica para nuestros VPS o servidores dedicados basados en Linux. La llamada interfaz Gameserver/Teamspeak 3 Server (Interfaz GS/TS3)!



## Caso de uso

Con la interfaz GS/TS3 fácil de usar, puedes instalar Teamspeak 3 u otros servicios seleccionados de servidor de juegos en tu VPS o servidor dedicado basado en Linux con solo unos clics. No se requiere conocimiento previo para esta instalación. La configuración de todos los paquetes necesarios, archivos del servidor y la instalación en sí están completamente automatizados, ahorrándote tiempo y esfuerzo.

:::warning
La función de la interfaz GS/TS3 se puede usar con los siguientes sistemas operativos:

- Debian: 10, 11, 12
- Ubuntu: 20.04, 22.04

(*) Ya estamos trabajando para que otros sistemas operativos y versiones más nuevas estén disponibles en un futuro cercano.
:::



## Servicios y juegos disponibles

La interfaz GS/TS3 soporta la configuración de servidores de juegos, servidores de voz y bots de música. La mayoría de los juegos que ofrecemos para nuestros productos de servidor de juegos también están disponibles en la opción de interfaz GS/TS3. Esto aplica a todos los juegos que operamos activamente bajo Linux. Todos los juegos que funcionan en sistemas operativos Windows lamentablemente no pueden instalarse. Allí solo es posible una instalación manual, siempre que el juego soporte una versión de servidor Linux.

| Servicios    | Soportado |
| ----------- | ---------------- |
| Servidor de juegos  | ✔️                |
| Servidor de voz | ✔️                |
| Bot de música (Sinusbot)  | ✔️                |



## Instalación y configuración

Para instalar la interfaz GS/TS3, debes navegar al panel de navegación **Ajustes** en la administración del servidor de tu producto y hacer clic en el subelemento **Gameserver / TS3**. 

La primera vez que accedas a la interfaz GS/TS3, serás redirigido al asistente de configuración fácil de usar. Para configurar la interfaz y vincularla con el servidor, debes seleccionar un sistema operativo soportado y proporcionar los datos de acceso del usuario root. 

![](https://screensaver01.zap-hosting.com/index.php/s/dLeLDKdmdiZ74CP/download)



Una vez que el servidor y la web estén vinculados con éxito, se podrá crear la interfaz GS/TS3. 



![](https://screensaver01.zap-hosting.com/index.php/s/FK9mP3BgzrPmH7S/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/JL7jyTKbCEx8FBZ/preview)

:::info
**Atención**: Por favor, no continúes el proceso hasta que la interfaz esté completamente instalada. Puedes reconocer la instalación exitosa porque la barra de progreso habrá desaparecido y en lugar de "Faltante" aparecerá "Instalado" para cada paquete requerido.
:::



### Crear servidor de juegos

Siempre que la creación e instalación de la interfaz GS/TS3 se haya completado con éxito, ahora puedes comenzar a configurar los servicios. La instalación de un servidor de juegos se realiza a través del botón **Instalar servidor de juegos** en la categoría **Servidor de juegos**.

![](https://screensaver01.zap-hosting.com/index.php/s/QinM7KtFwcAp5pE/preview)



En el siguiente paso, tienes la opción de seleccionar la dirección IP del servidor de juegos deseado (si tu servidor tiene más de una IP). También puedes especificar el puerto deseado, el número de slots y el aumento de RAM de forma individual.

![](https://screensaver01.zap-hosting.com/index.php/s/cqWwZbXT77okeDa/preview)

Asegúrate de que todos los datos sean correctos y cumplan con tus requisitos. Tan pronto como hayas hecho todos los ajustes, haz clic en "Instalar servidor de juegos ahora" para iniciar el proceso de instalación. El servidor de juegos se configurará según tus especificaciones y pronto podrás comenzar. Ahora puedes ver y acceder a tu servidor de juegos recién creado en la lista.



![](https://screensaver01.zap-hosting.com/index.php/s/9WkJnxzkaEHmri7/preview)



Ahora estás en la administración de tu servidor de juegos. Allí puedes seleccionar e instalar el juego deseado para tu servidor de juegos en el panel de navegación **Ajustes** bajo **Juegos**.

![](https://screensaver01.zap-hosting.com/index.php/s/6pxEbWttos6HAYt/preview)

Aquí encontrarás una lista de todos los juegos que puedes instalar en tu servidor. En este ejemplo, se instalará un servidor con el juego (paquete) Minecraft: Paperspigot. Selecciona tu juego deseado y haz clic en el botón verde para iniciar la instalación.

![](https://screensaver01.zap-hosting.com/index.php/s/gazW2itexCJd7cY/preview)

Se mostrará un resumen con todas las condiciones necesarias. Si todas las condiciones se cumplen, puedes confirmar el proceso con el botón **Aceptar e instalar**.

![](https://screensaver01.zap-hosting.com/index.php/s/jeQC7dp6zpe3ny4/preview)

La configuración del juego puede tardar un poco dependiendo del juego. El progreso se muestra en el estado. Después, puedes iniciar tu servidor de juegos y conectarte a él en el juego!



### Crear servidor de voz

La instalación de un **Servidor de voz (Teamspeak 3 Server)** es similar a la instalación de un servidor de juegos. Primero debes hacer clic nuevamente en "Gameserver / TS3". En esta sección encontrarás la opción **Instalar servidor de voz**, que puedes pulsar para iniciar el proceso de instalación del servidor Teamspeak 3.

![](https://screensaver01.zap-hosting.com/index.php/s/mi8p3NTfwBBExsD/preview)

En el siguiente paso, tienes la opción de especificar los ajustes deseados para tu servidor Teamspeak 3, como la dirección IP, el puerto y el número de slots disponibles. Una vez que hayas ingresado toda la información necesaria, puedes completar la instalación haciendo clic en **Instalar servidor de voz ahora**.

![](https://screensaver01.zap-hosting.com/index.php/s/ajfzxsJfCFdfBac/preview)

Asegúrate de que toda la información sea correcta y cumpla con tus requisitos. Una vez que hayas hecho todos los ajustes, haz clic en **Instalar Teamspeak 3/5 Server ahora** para iniciar el proceso de instalación. Ahora puedes ver y hacer clic en el servidor Teamspeak 3 instalado en la **Vista general de servidores de voz**.

![](https://screensaver01.zap-hosting.com/index.php/s/YaEYorRG7TJGpmB/preview)

:::info
**Atención**: Esta es la instancia en la que se instalará el servidor Teamspeak 3 posteriormente.
:::

Ahora estás en la interfaz de la instancia de tu servidor Teamspeak 3 instalado. Puedes iniciar la instancia haciendo clic en el botón **Iniciar**.

![](https://screensaver01.zap-hosting.com/index.php/s/SmqHB24ozJimBY9/preview)


Ahora puedes hacer clic en el menú **Servidores Virtuales**. Todos los servidores Teamspeak 3 instalados en tu instancia están claramente listados en esta área. Para acceder a la interfaz del respectivo servidor Teamspeak 3, simplemente haz clic en el símbolo del "ojo".

![](https://screensaver01.zap-hosting.com/index.php/s/E3ZqxC9rPjWwC5F/preview)

En la interfaz del servidor Teamspeak 3 encontrarás toda la información necesaria y opciones de configuración para diseñar y administrar tu servidor de forma individual. Por ejemplo, en la pestaña "Clave de autorización" puedes crear un token que te otorgue derechos de administrador en tu servidor. Esto te da control total sobre la administración de usuarios y el acceso al servidor.

En el menú "Ajustes" tienes más opciones para personalizar tu servidor. Aquí puedes, por ejemplo, cambiar el nombre de tu servidor, establecer una contraseña para restringir el acceso o guardar un mensaje de bienvenida personal que los usuarios reciben al entrar al servidor.

:::caution Información sobre licencias Teamspeak
Por defecto, no hay ninguna licencia instalada en el servidor Teamspeak 3. Esto significa que solo puedes usar un servidor Teamspeak 3 con una capacidad de 32 slots. Sin embargo, si quieres activar más capacidad o funciones adicionales para tu servidor Teamspeak 3, puedes comprar una licencia correspondiente directamente en Teamspeak.
:::





## Conclusión
¡Felicidades, has instalado y configurado con éxito nuestra interfaz GS/TS3! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.