---
id: vserver-windows-vrising
title: "VPS: Configuración de Servidor Dedicado V-Rising en Windows"
description: "Descubre cómo configurar un servidor dedicado de V Rising en Windows para un rendimiento óptimo en gaming y hosting sin complicaciones → Aprende más ahora"
sidebar_label: V-Rising
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qnEwRNpMmo3JzQq/preview" title="¡Cómo configurar un Servidor Dedicado V RISING en Windows!" description="¿Te va mejor entender las cosas viéndolas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible."/>
<InlineVoucher />

## Información Básica: 
Se requiere un servidor basado en Windows Server 2016/2019 con al menos 4x CPU a 2.4 GHz (AMD/Intel) y mínimo 4GB de RAM (DDR3/4) y 6GB de disco libre (SSD o mejor, preferido). El servidor debe funcionar en arquitectura de 64 bits.

## Paso 1 Crea una carpeta para V-Rising

Primero, conecta a tu servidor usando el [Acceso Inicial (RDP)](vserver-windows-userdp.md). Una vez conectado, crea una nueva carpeta en tu servidor donde se instalarán los archivos de V-Rising.  
En este ejemplo, crearemos una carpeta nueva en el Escritorio.  
Haz clic derecho y selecciona "Nuevo -> Carpeta".

![](https://screensaver01.zap-hosting.com/index.php/s/wgf8ckdTgiQ9wAq/preview)

Ponle el nombre que quieras. En nuestro ejemplo la llamaremos "VRising".

## Paso 2 Descarga SteamCMD en tu servidor Windows

Abre el navegador y ve al [enlace](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Esto descargará SteamCMD para Windows en tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/7HE5smMXq6mEetw/preview)

El archivo se descargará y debería estar en la carpeta de descargas (la ubicación puede variar).

![](https://screensaver01.zap-hosting.com/index.php/s/eEsyPe9J8KWGRMs/preview)

Para tener todo organizado, copia el archivo steamcmd.zip a la carpeta VRising que creaste en el escritorio.  
Haz clic en el archivo y presiona "CTRL+C".  
Luego abre la carpeta VRising y presiona "CTRL+V".  
Ahora verás el archivo dentro de la carpeta VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/rNCZB7NDYkqDxrm/preview)

Haz clic derecho sobre steamcmd.zip y selecciona "Extraer todo". Acepta el mensaje que aparece haciendo clic en el botón Extraer.

![](https://screensaver01.zap-hosting.com/index.php/s/RSQReHkc3SYbzNS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yaw87p2bcmFe9z6/preview)

Cuando termine, haz doble clic en el archivo steamcmd.exe.  
Se abrirá una ventana nueva que instalará los archivos de steamcmd.

![](https://screensaver01.zap-hosting.com/index.php/s/R7Xm4tSLfEBqboD/preview)

## Paso 3 Descarga los archivos de V Rising

Una vez instalados los archivos de steamcmd, verás esta ventana.

![](https://screensaver01.zap-hosting.com/index.php/s/DjaZjaqM8tFZzCj/preview)

Ahora indica dónde quieres que se descarguen los archivos con el comando "force_install_dir".  
En nuestro ejemplo usamos:  
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/EFdLWdJ5Ypym3Ym/preview)

Luego, inicia sesión como usuario anónimo con:  
login anonymous

![](https://screensaver01.zap-hosting.com/index.php/s/SN8qqRPezLDEF3Q/preview)

Finalmente, descarga los archivos con:  
app_update 1829350 validate

La descarga puede tardar unos minutos.

![](https://screensaver01.zap-hosting.com/index.php/s/S5cwykrPq6bYyrG/preview)

Cuando termine, verás todos los archivos en la carpeta VRising en tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/8PwswWgB8BxwECL/preview)

## Paso 4 Inicia y configura el servidor V Rising

Puedes editar el archivo start_server_example.bat para hacer algunos ajustes.  
Haz clic derecho sobre el archivo y selecciona editar.  
Ahí puedes cambiar el nombre del servidor y la ruta donde se guardará el proceso.

![](https://screensaver01.zap-hosting.com/index.php/s/PFDkyayBtSBoEFa/preview)

También puedes modificar más configuraciones en los archivos dentro de la carpeta VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/jQWy34tbPTEtcc9/preview)

En el archivo ServerHostSettings.json puedes hacer cambios generales, como definir los puertos, descripción del servidor, intervalo de guardado y la contraseña del servidor de juegos.  
Por ejemplo, cambié el nombre del servidor a "ZAP-Hosting Test Server".

Para iniciar el servidor, haz doble clic en start_server_example.bat.

![](https://screensaver01.zap-hosting.com/index.php/s/nSqbQQb3pHXnWmZ/preview)

El proceso de inicio puede tardar un poco.  
Si los puertos están correctamente abiertos, podrás encontrar el servidor en la lista.

![](https://screensaver01.zap-hosting.com/index.php/s/TajWHXtRCLEeRKf/preview)

## Paso 5 Abre los puertos en el firewall

Para que el servidor sea accesible públicamente y puedas jugar con amigos, debes abrir los puertos en el firewall de Windows.  
Los puertos 9876 y 9877 deben estar abiertos para los protocolos TCP Y UDP.  
El puerto 9876 es el puerto del servidor de juegos y el 9877 es el puerto Query.  
Cómo abrir puertos en Windows, mira [Redirección de Puertos (Firewall)](vserver-windows-port.md).

Después de abrir los puertos, el servidor será accesible públicamente si está iniciado.

## Conclusión

¡Felicidades! Has instalado y configurado con éxito V-Rising en tu VPS. Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, ¡están disponibles todos los días para ayudarte!

<InlineVoucher />