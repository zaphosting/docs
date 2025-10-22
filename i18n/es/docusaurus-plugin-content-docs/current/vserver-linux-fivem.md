---
id: vserver-linux-fivem
title: "VPS: Configuración de Servidor Dedicado FiveM en Linux (Interfaz GS/TS3)"
description: "Descubre cómo configurar y manejar tu propio servidor dedicado FiveM con txAdmin para un juego multijugador sin complicaciones → Aprende más ahora"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introducción
¿Tienes un VPS y quieres instalar y manejar tu propio servidor dedicado FiveM con txAdmin? ¡Estás en el lugar correcto! A continuación te explicamos todos los pasos necesarios para instalarlo, configurarlo y qué debes tener en cuenta.



## Preparación

Para montar un servidor FiveM, hay ciertos pasos previos que debes completar antes de empezar con la configuración real del servidor dedicado FiveM.


### Configurar base de datos

Para nuestra opción con interfaz GS/TS3 ya incluimos nuestras propias bases de datos. Sin embargo, si prefieres montar tu propio servidor de base de datos y base de datos, te recomendamos echar un vistazo a la [guía de instalación de base de datos](vserver-linux-databases.md). 

:::warning
Si usas tu propia base de datos, tendrás que reemplazar la información de base de datos predefinida por la tuya durante la configuración de txAdmin. 
:::



### Instalar interfaz GS/TS3
Con la interfaz GS/TS3 súper fácil de usar puedes instalar tu servidor dedicado FiveM con solo unos clics. No necesitas conocimientos previos para esta instalación. La configuración de todos los paquetes necesarios, archivos del servidor y la instalación en sí están totalmente automatizados, ahorrándote tiempo y esfuerzo.

:::warning
La función de interfaz GS/TS3 se puede usar con los siguientes sistemas operativos:

- Debian: 10, 11
- Ubuntu: 20.04

(*) Ya estamos trabajando para ofrecer otros sistemas operativos y versiones más recientes muy pronto.
:::

Si aún no conoces la interfaz GS/TS3, te recomendamos echar un vistazo a nuestra [guía de Interfaz GS/TS3](dedicated-linux-gs-interface.md). 

Una vez que hayas instalado la interfaz GS/TS3, abre el servicio de servidor de juegos recién creado. Allí, ahora debes seleccionar el juego. Para ello, ve a la página de **Juegos**. Haz clic en juegos disponibles, busca txAdmin y pulsa el botón de instalar. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### Crear clave de licencia para servidor FiveM

Cada servidor FiveM necesita su propia clave de licencia, que se gestiona a través del nuevo [Portal Cfx.re](http://portal.cfx.re/). La clave de licencia está vinculada a tu cuenta Cfx.re. Inicia sesión en la web, ve a la categoría **Servidor** y haz clic en el botón **Generar clave**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuración

Ahora puedes empezar a configurar el servidor FiveM y txAdmin. Para ello, abre el panel de tu servidor de juegos. Encontrarás el enlace y los datos de acceso para la instancia de txAdmin en la sección de txAdmin. Ábrelo y luego inicia sesión allí. 

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### Configuración de txAdmin

Durante la configuración de txAdmin, tu propio servidor FiveM se instala y configura en cinco pasos. Sigue las instrucciones en la interfaz de txAdmin y define primero un **nombre para el servidor**. Luego selecciona el **tipo de servidor** deseado. Este ejemplo muestra la instalación de un servidor FiveM con QBCore preinstalado.

Selecciona la opción **Recetas Populares** en el paso de **Tipo de Despliegue** y luego la **Plantilla del Framework QBCore**. Confirma el **Directorio de Datos** deseado y lanza el **Desplegador de Recetas** para completar la instalación.

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### Configuración del firewall

Al instalar el servidor FiveM vía la interfaz GS/TS3, todo el reenvío de puertos necesario se configura **automáticamente** en el firewall. En caso de problemas, también puedes configurar el reenvío de puertos manualmente vía SSH con el siguiente comando: 

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## Conclusión

Has instalado y configurado con éxito un servicio de servidor dedicado FiveM en tu VPS. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡que está disponible todos los días para echarte una mano! 🙂


<InlineVoucher />