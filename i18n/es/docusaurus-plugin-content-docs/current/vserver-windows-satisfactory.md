---
id: vserver-windows-satisfactory
title: "VPS: Configuración de Servidor Dedicado de Satisfactory en Windows"
description: "Descubre cómo configurar un Servidor Dedicado de Satisfactory en tu VPS o servidor dedicado rápida y fácilmente → Aprende más ahora"
sidebar_label: Satisfactory
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS o servidor dedicado y quieres instalar servidores de juegos en él? ¿Por ejemplo, un Servidor Dedicado de Satisfactory? ¡Entonces estás en el lugar correcto! A continuación te explicamos paso a paso cómo puedes instalar este servicio en tu servidor.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oHiNw9tMBtgL6nq/preview" title="Configuración de Servidor Dedicado de Satisfactory en VPS Windows" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o prefieras absorber la información de la forma más entretenida posible."/>
<InlineVoucher />

## Preparación

Para la configuración de un servidor de Satisfactory se necesita SteamCMD. SteamCMD es la **versión de línea de comandos del cliente Steam**. Esta herramienta se puede usar para descargar rápida y fácilmente las aplicaciones de servidores dedicados de juegos populares de Steam. Puedes encontrar SteamCMD en la página oficial para desarrolladores de Valve: https://developer.valvesoftware.com/wiki/SteamCMD. 

Después de esto, se realiza la descarga. Esta contendrá el archivo **steamcmd.zip**, que primero debe ser descomprimido. Se recomienda crear una carpeta aparte donde puedas descomprimir el archivo. Deberías ver el archivo **steamcmd.exe** como resultado. Ejecútalo y espera hasta que el proceso de instalación haya finalizado.

![](https://screensaver01.zap-hosting.com/index.php/s/NkbSey5q2rWRjtF/preview)

Tan pronto como aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor de Satisfactory.



## Instalación

Después de la instalación deberías poder ejecutar comandos en la **línea de comandos de Steam (steamcmd.exe)**. Allí necesitas iniciar sesión. Esto se hace con el usuario **anonymous**. Ejecuta el siguiente comando: `login anonymous`

El siguiente paso será la instalación. Esto se hace con el comando `app_update 1690800`. El ID de la aplicación **1690800** corresponde a la aplicación del **Servidor Dedicado de Satisfactory**.

![](https://screensaver01.zap-hosting.com/index.php/s/b8ePqS9FdP2rTzP/preview)



:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un momento, ¡pero vale la pena ser paciente! :)
:::



Navega al directorio donde realizaste la instalación y entra en el siguiente subdirectorio: **../steamapps/common/SatisfactoryDedicatedServer**

Ahí tienes que crear el archivo de inicio, que es necesario para ejecutar el software del servidor. Crea un archivo con el siguiente nombre: server-start.bat

:::info
Asegúrate de tener activada la opción Mostrar extensiones de archivo para que se use la extensión correcta.
:::

Abre el archivo, añade el siguiente contenido y guarda los cambios:

```
Factoryserver.exe -log -unattended
```



Luego ejecuta el archivo. En el primer inicio, debería aparecer una ventana emergente que te indica que se necesitan ciertos componentes para ejecutar el programa. El juego requiere el Visual C++ Runtime. Haz clic en Sí y completa la instalación. 

Para que el servidor sea visible y accesible desde fuera, los puertos del servidor que se usan deben estar habilitados/redireccionados en el firewall. Para ello, abre la configuración del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/x29gQWEreNt3y2W/preview)


Se deben añadir reglas adicionales en la configuración. Para ello, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para el protocolo UDP y el puerto 15000.



## Configuración

La configuración básica ya está completa. Cambios adicionales se pueden hacer en el archivo de configuración **ServerSettings.ini**. Ahí puedes cambiar el nombre del servidor, la contraseña y otras opciones. Navega al siguiente directorio: 

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Jugar

Al final de la configuración, ahora puedes iniciar el servidor ejecutando el archivo **server-start.bat** que creaste antes. Esto debería abrir la consola del servidor y comenzar el proceso de arranque. Si todo va bien, el servidor debería ser visible en la lista de servidores después de un inicio exitoso.



## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor de Satisfactory en tu VPS! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días. 

<InlineVoucher />