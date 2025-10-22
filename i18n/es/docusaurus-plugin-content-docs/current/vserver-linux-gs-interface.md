---
id: vserver-linux-gs-interface
title: "VPS: Interfaz Gameserver/TS3"
description: "Descubre cómo configurar fácilmente servidores de juegos y de voz en VPS Linux sin conocimientos previos usando una interfaz automatizada → Aprende más ahora"
sidebar_label: Interfaz GS/TS3
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Si los productos de servidor de juegos no se ajustan a tu estilo o expectativas, o si necesitas tu servicio de otras maneras, usar un VPS suele ser una opción mejor. Sin embargo, a menudo te enfrentas al reto de que no todos los servicios están automatizados o preinstalados. Configurar servicios como servidores de juegos, servidores Teamspeak 3 y bots de música debe hacerse de forma independiente.

Para solucionar este problema, hemos desarrollado una solución práctica para nuestros VPS o servidores dedicados basados en Linux. ¡La llamada interfaz Gameserver/Teamspeak 3 Server (Interfaz GS/TS3)!

<YouTube videoId="V6qyQFPp_Ls" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/frWNEMQqcMxzRcM/preview" title="¡Configura un servidor de juegos usando VPS Linux SIN EXPERIENCIA!" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible."/>

<InlineVoucher />

## Caso de uso

Con la interfaz GS/TS3 fácil de usar, puedes instalar Teamspeak 3 u otros servicios seleccionados de servidor de juegos en tu VPS o servidor dedicado basado en Linux con solo unos clics. No se requieren conocimientos previos para esta instalación. La configuración de todos los paquetes necesarios, archivos del servidor y la instalación real están completamente automatizados, ahorrándote tiempo y esfuerzo.

:::warning
La función de la interfaz GS/TS3 puede usarse con los siguientes sistemas operativos:

- Debian: 10, 11, 12
- Ubuntu: 20.04, 22.04

(*) Ya estamos trabajando para ofrecer otros sistemas operativos y versiones más recientes en un futuro cercano.
:::

## Servicios / juegos disponibles

La interfaz GS/TS3 soporta la configuración de servidores de juegos, servidores de voz y bots de música. La mayoría de los juegos que ofrecemos para nuestros productos de servidor de juegos también están disponibles en la opción de interfaz GS/TS3. Esto aplica a todos los juegos que operamos activamente bajo Linux. Todos los juegos que funcionan en sistemas operativos Windows lamentablemente no pueden instalarse. Allí solo es posible una instalación manual, siempre que el juego soporte una versión de servidor Linux.

| Servicios    | Soportado |
| ----------- | ---- |
| Servidor de juegos  | ✔️    |
| Servidor de voz | ✔️    |
| Musicbot (Sinuxbot)   | ✔️    |

## Instalación y configuración

Para instalar la interfaz GS/TS3, debes navegar al panel de navegación **Ajustes** en la administración de tu producto y hacer clic en el submenú **Gameserver / TS3**.

La primera vez que accedas a la interfaz GS/TS3, serás llevado al asistente de configuración fácil de usar. Para configurar la interfaz y vincularla a tu servidor, primero es necesario crear una clave SSH. Esta clave es necesaria para que la web establezca una conexión segura con el servidor. Esto permite configurar, gestionar y controlar servicios como servidores de juegos y servidores Teamspeak 3 directamente a través de la interfaz.

Una vez allí, debes crear la clave SSH. Para ello, haz clic en el botón **Generar clave SSH** y luego añade la clave haciendo clic en el botón **Añadir clave**.

![](https://screensaver01.zap-hosting.com/index.php/s/teZ87eGKRm6iJRa/preview)

Una vez que hayas hecho clic en **Añadir clave**, la clave SSH se almacena en tu servidor. La interfaz GS/TS3 podrá entonces añadirse a tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/QqtCFmC3oxPErD9/preview)

:::info
**Nota:** Si la clave SSH no se reconoce de inmediato, reiniciar el servidor y refrescar la página puede ser una solución.
:::

Durante la instalación puedes comprobar el progreso actual. Ten en cuenta que la instalación y configuración de la interfaz y sus paquetes puede tardar un poco. Normalmente puede durar entre 5 y 15 minutos.

![](https://screensaver01.zap-hosting.com/index.php/s/xkWQBEp74BqQdM6/preview)

:::info
**Atención**: Por favor, no continúes el proceso hasta que la interfaz esté completamente instalada. Puedes reconocer la instalación exitosa porque la barra de progreso habrá desaparecido y en lugar de "Faltante" aparecerá "Instalado" para cada paquete requerido.
:::

### Crear servidor de juegos

Siempre que la creación e instalación de la interfaz GS/TS3 se haya completado con éxito, ahora puedes empezar a configurar los servicios. La instalación de un servidor de juegos se realiza mediante el botón **Instalar servidor de juegos** en la categoría **Servidor de juegos**.

![](https://screensaver01.zap-hosting.com/index.php/s/4TD3w3dpXrFYNcb/preview)

En el siguiente paso, tienes la opción de seleccionar la dirección IP del servidor de juegos deseado (si tu servidor tiene más de una IP). También puedes especificar el puerto deseado, el número de slots y el aumento de RAM de forma individual.

![](https://screensaver01.zap-hosting.com/index.php/s/icfwifbTrmwZQ6q/preview)

Asegúrate de que todos los datos sean correctos y cumplan con tus requisitos. En cuanto hayas hecho todos los ajustes, haz clic en "Instalar servidor de juegos ahora" para iniciar el proceso de instalación. El servidor de juegos se configurará según tus especificaciones y pronto podrás empezar a jugar. Ahora puedes ver y acceder a tu servidor de juegos recién creado en la lista.

![](https://screensaver01.zap-hosting.com/index.php/s/MTRmMwc9GyMFW5A/preview)

Ahora estás en la administración de tu servidor de juegos. Allí puedes seleccionar e instalar el juego deseado para tu servidor de juegos en el panel de navegación **Ajustes** bajo **Juegos**.

![](https://screensaver01.zap-hosting.com/index.php/s/xqxLAAR6jbdmM3Z/preview)

Aquí encontrarás una lista de todos los juegos que puedes instalar en tu servidor. En este ejemplo, se instalará un servidor con el juego (paquete) Minecraft: Paperspigot. Selecciona tu juego deseado y haz clic en el botón verde para iniciar la instalación.

![](https://screensaver01.zap-hosting.com/index.php/s/MtrsxLoYxssJLBt/preview)

Se mostrará un resumen con todas las condiciones necesarias. Si todas las condiciones se cumplen, puedes confirmar el proceso con el botón **Aceptar e instalar**.

![](https://screensaver01.zap-hosting.com/index.php/s/GjijXaM3z9EgnYG/preview)

La configuración del juego puede tardar un poco dependiendo del juego. El progreso se muestra en el indicador de estado. Después, podrás iniciar tu servidor de juegos y conectarte a él en el juego.

### Crear servidor de voz

La instalación de un **Servidor de voz (Teamspeak 3 Server)** es similar a la instalación de un servidor de juegos. Primero debes hacer clic de nuevo en "Gameserver / TS3". En esta sección encontrarás la opción **Instalar servidor de voz**, que puedes pulsar para iniciar el proceso de instalación del servidor Teamspeak 3.

![](https://screensaver01.zap-hosting.com/index.php/s/xct5DPC57wWeABG/preview)

En el siguiente paso, tienes la opción de especificar los ajustes deseados para tu servidor Teamspeak 3, como la dirección IP, el puerto y el número de slots disponibles. Una vez que hayas introducido toda la información necesaria, puedes completar la instalación haciendo clic en **Instalar servidor de voz ahora**.

![](https://screensaver01.zap-hosting.com/index.php/s/2XnJrDEDyLwBsHk/preview)

Asegúrate de que toda la información sea correcta y cumpla con tus requisitos. Una vez que hayas hecho todos los ajustes, haz clic en **Instalar servidor Teamspeak 3/5 ahora** para iniciar el proceso de instalación. Ahora puedes ver y hacer clic en el servidor Teamspeak 3 instalado en la **Vista general de servidores de voz**.

![](https://screensaver01.zap-hosting.com/index.php/s/bgpZJgPjz7Ybpke/preview)

:::info
**Atención**: Esta es la instancia en la que se instalará el servidor Teamspeak 3 posteriormente.
:::

Ahora estás en la interfaz de la instancia de tu servidor Teamspeak 3 instalado. Puedes iniciar la instancia haciendo clic en el botón **Iniciar**.

![](https://screensaver01.zap-hosting.com/index.php/s/G96RPrjEdm96CCj/preview)

Ahora puedes hacer clic en el menú **Servidores virtuales**. Todos los servidores Teamspeak 3 instalados en tu instancia están claramente listados en esta área. Para acceder a la interfaz del servidor Teamspeak 3 correspondiente, simplemente haz clic en el símbolo del "ojo".

![](https://screensaver01.zap-hosting.com/index.php/s/awJdyTgJPSia5B2/preview)

En la interfaz del servidor Teamspeak 3 encontrarás toda la información necesaria y opciones de configuración para diseñar y gestionar tu servidor de forma individual. Por ejemplo, en la pestaña "Clave de autorización" puedes crear un token que te otorgue derechos de administrador en tu servidor. Esto te da control total sobre la administración de usuarios y el acceso al servidor.

En el menú "Ajustes" tienes más opciones para personalizar tu servidor. Aquí puedes, por ejemplo, cambiar el nombre de tu servidor, establecer una contraseña para restringir el acceso o guardar un mensaje de bienvenida personal que los usuarios reciben al entrar al servidor.

:::caution Información sobre licencias Teamspeak
Por defecto, no hay ninguna licencia instalada en el servidor Teamspeak 3. Esto significa que solo puedes usar un servidor Teamspeak 3 con una capacidad de 32 slots. Sin embargo, si quieres activar más capacidad o funciones adicionales para tu servidor Teamspeak 3, puedes comprar una licencia correspondiente directamente de Teamspeak.
:::

## Conclusión

¡Felicidades, has instalado y configurado con éxito nuestra interfaz GS/TS3! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.

<InlineVoucher />