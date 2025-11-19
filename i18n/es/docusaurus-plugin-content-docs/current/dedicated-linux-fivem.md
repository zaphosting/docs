---
id: dedicated-linux-fivem
title: "Servidor Dedicado: Configuración de Servidor Dedicado FiveM en Linux (Interfaz GS/TS3)"
description: "Descubre cómo configurar y ejecutar tu propio servidor dedicado FiveM con txAdmin para una experiencia multijugador sin interrupciones → Aprende más ahora"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introducción
¿Tienes un servidor dedicado y quieres instalar y gestionar tu propio servicio de servidor dedicado FiveM con txAdmin? ¡Estás en el lugar correcto! A continuación, te explicamos todos los pasos necesarios para instalarlo, configurarlo y qué debes tener en cuenta.

:::warning  Sistema operativo seleccionado e instalado
Se asume que ya has seleccionado e instalado un sistema operativo para tu servidor dedicado. Si aún no has completado este paso, primero debes seguir los pasos de la [configuración inicial](dedicated-setup.md) para servidores dedicados.
:::



## Preparación

Para configurar un servidor FiveM, es necesario realizar ciertos pasos de preparación que deben implementarse antes de comenzar con la configuración real del servidor dedicado FiveM.


### Configurar base de datos

Para nuestra opción de interfaz GS/TS3 ya proporcionamos nuestras propias bases de datos incluidas. Sin embargo, si prefieres configurar tu propio servidor de base de datos y base de datos, te recomendamos echar un vistazo a la [guía de instalación de base de datos](dedicated-linux-databases.md). 

:::warning
Si usas tu propia base de datos, deberás reemplazar la información de base de datos predefinida por la tuya durante la configuración de txAdmin. 
:::



### Instalar interfaz GS/TS3
Con la interfaz GS/TS3 fácil de usar, puedes instalar tu servidor dedicado FiveM con solo unos clics. No se requieren conocimientos previos para esta instalación. La configuración de todos los paquetes necesarios, archivos del servidor y la instalación en sí están completamente automatizados, ahorrándote tiempo y esfuerzo.

:::warning
La función de interfaz GS/TS3 se puede usar con los siguientes sistemas operativos:

- Debian: 10, 11
- Ubuntu: 20.04

(*) Ya estamos trabajando para ofrecer otros sistemas operativos y versiones más recientes en un futuro cercano.
:::

Si aún no conoces la interfaz GS/TS3, te recomendamos echar un vistazo a nuestra [guía de interfaz GS/TS3](dedicated-linux-gs-interface.md). 

Una vez que hayas instalado la interfaz GS/TS3, abre el servicio de servidor de juegos recién creado. Allí, ahora debes seleccionar el juego. Para ello, navega a la página **Juegos**. Haz clic en juegos disponibles, busca txAdmin y haz clic en el botón de instalar. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### Crear clave de licencia para servidor FiveM

Cada servidor FiveM requiere su propia clave de licencia, que se gestiona a través del nuevo [Portal Cfx.re](http://portal.cfx.re/). La clave de licencia está vinculada a tu cuenta Cfx.re. Inicia sesión en la web, navega a la categoría **Servidor** y haz clic en el botón **Generar clave**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuración

Ahora puedes empezar a configurar el servidor FiveM y txAdmin. Para ello, abre el panel de tu servidor de juegos. Encontrarás el enlace y los datos de acceso para la instancia de txAdmin en la sección txAdmin. Ábrelo y luego inicia sesión allí. 

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### Configuración de txAdmin

Durante la configuración de txAdmin, tu propio servidor FiveM se instala y configura en cinco pasos. Sigue las instrucciones en la interfaz de txAdmin y define primero un **nombre de servidor**. Luego selecciona el **tipo de servidor** deseado. Este ejemplo muestra la instalación de un servidor FiveM con QBCore preinstalado.

Selecciona la opción **Recetas populares** en el paso **Tipo de implementación** y luego la **Plantilla del Framework QBCore**. Confirma el **Directorio de datos** deseado y lanza el **Desplegador de recetas** para completar la instalación.

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### Configuración del firewall

Al instalar el servidor FiveM mediante la interfaz GS/TS3, todo el reenvío de puertos necesario se configura **automáticamente** en el firewall. En caso de problemas, también puedes configurar el reenvío de puertos manualmente vía SSH con el siguiente comando: 

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## Conclusión

Has instalado y configurado con éxito un servicio de servidor dedicado FiveM en tu servidor dedicado. Para más preguntas o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡disponible a diario para ayudarte! 🙂



