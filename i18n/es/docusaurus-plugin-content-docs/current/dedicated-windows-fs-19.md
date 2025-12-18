---
id: dedicated-windows-fs-19
title: "Servidor dedicado: Configuración del Servidor dedicado de Farming Simulator 2019 en Windows"
description: "Descubre cómo configurar un Servidor dedicado de Farming Simulator 2019 en tu VPS o servidor dedicado Windows de forma rápida y eficiente → Aprende más ahora"
sidebar_label: Farming Simulator 2019
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS o servidor dedicado Windows y quieres instalar el servicio de Servidor dedicado de Farming Simulator 2019? Estás en el lugar correcto. En esta guía te explicamos paso a paso cómo instalar este servicio en tu servidor.



## Preparación

Se requiere un servidor basado en Windows Server 2016/2019 con al menos 4x CPU a 2.4 GHz (AMD/Intel) y al menos 2GB de RAM (DDR3/4) y 6GB de disco libre (SSD o mejor, preferido). El servidor debe funcionar en arquitectura de 64 bits.  
Además, se necesita una licencia de juego propia (no versión Steam), así como una dirección IPv4 pública. No se requiere GPU ni tarjeta de sonido para el Servidor dedicado.  
Dependiendo de cuánto se modifique el servidor dedicado, se extienda con mods o DLCs, puede que se necesiten más recursos. 


## Paso 1 Compra la licencia digital

Se requiere una versión digital de Farming Simulator 2019, no puede ser la versión de Steam.  
La versión digital se puede comprar en la [web de Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Después de comprar la versión digital, Farming Simulator se puede descargar online siguiendo el enlace [Link](https://eshop.giants-software.com/downloads.php) que recibirás en el mail de Giants.  
:::info
Importante: En el mail encontrarás la GameKey que necesitas para la descarga y para la activación posterior de la instalación. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## Paso 2 Descarga Farming Simulator directamente en tu servidor Windows

Conéctate vía [Acceso Inicial (RDP)](vserver-windows-userdp.md) a tu servidor Windows. Una vez conectado, abre el navegador y vuelve a entrar al [enlace](https://eshop.giants-software.com/downloads.php) del mail. Introduce tu GameKey y selecciona la descarga para Windows 8/10. 

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

El archivo se descargará y debería estar en el directorio de descargas. (El directorio puede variar)

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

Con doble clic se abre el archivo y se puede ejecutar el Setup.exe.  
Luego se leen y aceptan los TOS. Después, la instalación puede ser Estándar o Personalizada, normalmente Estándar es suficiente.  
Finalmente, haz clic en instalar y Farming Simulator 2019 comenzará a instalarse, esto puede tardar unos minutos. 

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

Cuando termine la instalación, aparecerá el siguiente mensaje que puedes confirmar con "Finalizar". 

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

La instalación básica ya está completa. 

## Paso 3 Activación del juego y configuración del servidor dedicado

Ahora hay que iniciar Farming Simulator. Debería haber un acceso directo en el escritorio, si no, también se puede iniciar desde el menú de Windows.  
Los errores sobre falta de GPU o similares se pueden ignorar o cerrar con No/Cancelar. Farming Simulator solo necesita iniciarse para poder introducir la clave. 

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

Una vez reconocida la clave, aparecerá una confirmación. 

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

Ahora hay que establecer o cambiar/leer un nombre de usuario y contraseña en la Config del Servidor dedicado para poder acceder al panel web del Servidor dedicado.  
La Config está en la instalación estándar en  
`C:\Program Files (x86)\Farming Simulator 2019` bajo el nombre `"dedicatedServer.xml"`.  
Los datos de acceso se pueden personalizar libremente. 

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## Paso 4 Iniciar el Servidor dedicado de Farming Simulator 2019

Para iniciar el servidor dedicado, hay que ejecutar `"dedicatedServer.exe"` en el mismo directorio donde está `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

Después se puede abrir el panel web vía `https://IP-DEL-SERVIDOR:8080`. 

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

El login se hace con los datos establecidos/leídos previamente en `"dedicatedServer.xml"`.  
La configuración posterior es intuitiva en el panel web y se puede hacer con unos pocos clics, según tus preferencias personales. 

## Paso 5 Desbloquear puertos en el firewall

El servidor debe ser accesible públicamente para jugar con amigos. Para ello, hay que habilitar los puertos del servidor en el firewall de Windows. Los puertos 10823 y 8080 deben estar abiertos para el protocolo TCP. 10823 es el puerto del servidor de juegos y 8080 es el puerto web para el panel web, este último solo debe abrirse si se necesita, ya que la administración también se puede hacer localmente en el servidor Windows vía RDP.  
Cómo habilitar puertos en Windows: [Redirección de puertos (Firewall)](vserver-windows-port.md). 

Después de abrir los puertos, el servidor será accesible públicamente, siempre que esté iniciado. 


