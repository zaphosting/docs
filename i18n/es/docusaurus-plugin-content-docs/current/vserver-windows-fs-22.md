---
id: vserver-windows-fs-22
title: "VPS: Configuración del Servidor Dedicado de Farming Simulator 2022 en Windows"
description: "Descubre cómo configurar el Servidor Dedicado de Farming Simulator 2022 en tu VPS Windows para un juego multijugador fluido → Aprende más ahora"
sidebar_label: Farming Simulator 2022
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS Windows y quieres instalar el servicio de Servidor Dedicado de Farming Simulator 2022? Estás en el lugar correcto. En esta guía te explicamos paso a paso cómo instalar este servicio en tu servidor.
<InlineVoucher />

## Preparación
Se requiere un servidor basado en Windows Server 2016/2019 con al menos 4x CPU de 2.4 GHz (AMD/Intel) y mínimo 2GB de RAM (DDR3/4) y 6GB de disco libre (SSD o mejor, preferido). El servidor debe funcionar en arquitectura de 64 bits.  
Además, se necesita una licencia de juego propia (no versión Steam), así como una dirección IPv4 pública. No se requiere GPU ni tarjeta de sonido para el Servidor Dedicado.  
Dependiendo de cuánto se modifique el servidor dedicado, o se amplíe con mods o DLCs, podrían ser necesarios más recursos. 

## Paso 1 Compra de licencia digital

Se requiere una versión digital de Farming Simulator 2022, no puede ser la versión de Steam.  
La versión digital se puede comprar en la [web de Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Después de comprar la versión digital, Farming Simulator puede descargarse online siguiendo el enlace [Link](https://eshop.giants-software.com/downloads.php) que recibirás en el mail de Giants.  
:::info
Importante: En el mail encontrarás el GameKey que necesitas para la descarga y para la activación posterior de la instalación. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/EH9ysn2jHaQXrtf/preview)

## Paso 2 Descarga Farming Simulator directamente en tu servidor Windows

Conéctate vía [Acceso Inicial (RDP)](vserver-windows-userdp.md) a tu servidor Windows. Una vez conectado, abre el navegador y vuelve a entrar al [enlace](https://eshop.giants-software.com/downloads.php) del mail. Introduce tu GameKey y selecciona la descarga para Windows 8/10. 

![](https://screensaver01.zap-hosting.com/index.php/s/JwMzAXbMx64CybQ/preview)

El archivo se descargará y debería estar en la carpeta de descargas. (La carpeta puede variar)

![](https://screensaver01.zap-hosting.com/index.php/s/74LiBCfn2w6BwLJ/preview)

Con doble clic abre el archivo y ejecuta el Setup.exe.  
Luego lee los TOS y confírmalos. La instalación puede hacerse en modo Estándar o Personalizado, normalmente Estándar es suficiente.  
Finalmente, haz clic en instalar y Farming Simulator 2022 se instalará, esto puede tardar unos minutos. 

![](https://screensaver01.zap-hosting.com/index.php/s/8SrHwEjgirmKTJJ/preview)

Cuando termine la instalación, aparecerá un mensaje que puedes confirmar con "Finalizar". 

![](https://screensaver01.zap-hosting.com/index.php/s/KYMX8SeMgxWmYdt/preview)

La instalación básica ya está completa. 

## Paso 3 Activación del juego y configuración del servidor dedicado

Ahora hay que iniciar Farming Simulator. Debería haber un acceso directo en el escritorio, si no, se puede iniciar desde el menú de Windows.  
Los errores sobre falta de GPU o similares se pueden ignorar o cerrar con No/Cancelar. Farming Simulator solo necesita iniciarse para poder introducir la clave. 

![](https://screensaver01.zap-hosting.com/index.php/s/iMTyYAGknFwDA3H/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/spnct8XYniz3Nf5/preview)

Ahora hay que establecer o cambiar un nombre de usuario y contraseña en la Config del Servidor Dedicado para poder acceder a la interfaz web del servidor.  
La Config está en la instalación estándar en  
`C:\Program Files (x86)\Farming Simulator 2022` bajo el nombre `"dedicatedServer.xml"`.  
Los datos de acceso se pueden personalizar libremente. 

![](https://screensaver01.zap-hosting.com/index.php/s/kK7nxEtqxgxjLFG/preview)

## Paso 4 Iniciar el Servidor Dedicado de Farming Simulator 2022

Para arrancar el servidor dedicado, ejecuta `"dedicatedServer.exe"` en el mismo directorio donde está `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/qagHezKmK2tx2kj/preview)

Luego abre la interfaz web vía `https://IP-DEL-SERVIDOR:8080`. 

![](https://screensaver01.zap-hosting.com/index.php/s/E8b34yHDPDbr9YP/preview)

El login se hace con los datos configurados/leídos en `"dedicatedServer.xml"`.  
La configuración en la interfaz web es intuitiva y se puede hacer con unos pocos clics según tus preferencias. 

## Paso 5 Abrir puertos en el firewall

El servidor debe ser accesible públicamente para jugar con amigos. Para ello, hay que habilitar los puertos en el firewall de Windows. Los puertos 10823 y 8080 deben estar abiertos para el protocolo TCP. 10823 es el puerto del servidor de juegos y 8080 es el puerto web para la interfaz web, este último solo debe abrirse si se necesita, ya que la administración también puede hacerse localmente en el servidor Windows vía RDP.  
Cómo abrir puertos en Windows: [Redirección de Puertos (Firewall)](vserver-windows-port.md).  

Después de abrir los puertos, el servidor será accesible públicamente si está arrancado. 

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor de Farming Simulator 2022 en tu VPS! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días! 

<InlineVoucher />