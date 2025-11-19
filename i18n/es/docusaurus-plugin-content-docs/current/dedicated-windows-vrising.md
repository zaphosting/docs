---
id: dedicated-windows-vrising
title: "Servidor Dedicado: Configuración de Servidor Dedicado V-Rising en Windows"
description: "Descubre cómo configurar un servidor dedicado V Rising en Windows para un rendimiento óptimo en juegos y gestión del servidor → Aprende más ahora"
sidebar_label: V-Rising
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/yCRYqJAjTTp4YFf/preview" title="¡Cómo configurar un Servidor Dedicado V RISING en Windows!" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o simplemente prefieras absorber la información de la forma más entretenida posible."/>



## Información Básica: 
Se requiere un servidor basado en Windows Server 2016/2019 con al menos 4x CPU de 2.4 GHz (AMD/Intel) y al menos 4GB de RAM (DDR3/4) y 6GB de disco libre (SSD o mejor, preferido). El servidor debe funcionar en arquitectura de 64 bits.

## Paso 1 Crea una carpeta para V-Rising

Primero, necesitas conectarte a tu servidor usando el [Acceso Inicial (RDP)](vserver-windows-userdp.md). Una vez conectado, debes crear una nueva carpeta en tu servidor donde se instalarán los archivos de V-Rising.  
En este ejemplo, crearemos una nueva carpeta en nuestro Escritorio.  
Esto se hace haciendo clic derecho con el ratón.  
Luego elige "Nuevo -> Carpeta".

![](https://screensaver01.zap-hosting.com/index.php/s/SzB3TgsSkHRAaAB/preview)

Puedes nombrarla como quieras. En nuestro ejemplo la llamaremos "VRising".

## Paso 2 Descarga SteamCMD en tu servidor Windows

Abre el navegador y ve al [enlace](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Esto descargará SteamCMD para Windows en tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/oHSse2fToxxTpCt/preview)

El archivo se descargará y debería estar en el directorio de descargas. (El directorio de descargas puede variar)

![](https://screensaver01.zap-hosting.com/index.php/s/35r8Dm49xcdwfq4/preview)

Para mayor claridad, copiamos el archivo steamcmd.zip a la carpeta VRising que creamos antes en nuestro escritorio.  
Para hacerlo, haz clic en el archivo y presiona la combinación de teclas "CTRL+C".  
Luego abre la carpeta VRising en el escritorio y presiona "CTRL+V".  
Ahora puedes ver el archivo dentro de la carpeta VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/kKGt3gy2yDQXSLx/preview)

Haz clic derecho en el archivo steamcmd.zip y elige Extraer todo. Acepta el mensaje que aparece haciendo clic en el botón Extraer.

![](https://screensaver01.zap-hosting.com/index.php/s/SHsNeRy4RbEenDX/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/y5ef3ncPgYMTzFw/preview)

Cuando termine, haz doble clic en el archivo steamcmd.exe.  
Se abrirá una nueva ventana que instalará los archivos de steamcmd.

![](https://screensaver01.zap-hosting.com/index.php/s/TC2KAbWaCHEeZiF/preview)

## Paso 3 Descarga los archivos de V Rising

Una vez que los archivos de steamcmd estén instalados, verás esto en la ventana que se abrió.

![](https://screensaver01.zap-hosting.com/index.php/s/GAb4TgCNbpiW2F2/preview)

Ahora debes especificar la ubicación donde se descargarán los archivos.  
Esto se hace con el comando "force_install_dir".  
El comando completo en nuestro ejemplo es:  
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/DeNFAWGLLnKq7pr/preview)

Después, necesitas iniciar sesión como usuario anónimo.  
Para ello, escribe "login anonymous".

![](https://screensaver01.zap-hosting.com/index.php/s/pq74iCW6E2k8Sid/preview)

Una vez hecho esto, finalmente podemos descargar los archivos.  
Para ello usa este comando:  
app_update 1829350 validate

Los archivos comenzarán a descargarse.  
Esto puede tardar unos minutos.

![](https://screensaver01.zap-hosting.com/index.php/s/6XX8wtekd89PJec/preview)

Cuando termine el proceso, podrás ver todos los archivos en la carpeta VRising en tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/y9Gx9ANEpgbpESy/preview)

## Paso 4 Inicia y configura el servidor V Rising

Puedes editar el archivo start_server_example.bat para hacer algunos cambios.  
Para ello, haz clic derecho en el archivo y elige editar.  
Puedes ajustar el nombre del servidor y la ruta donde se guardará el proceso.

![](https://screensaver01.zap-hosting.com/index.php/s/zpEw92o7eQG9P2a/preview)

Puedes hacer más cambios en los archivos de configuración,  
que están en el directorio VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/9TtQm6Yp8g3y5HH/preview)

En el archivo ServerHostSettings.json puedes hacer cambios generales,  
como definir los puertos, la descripción del servidor, el intervalo de guardado y, por ejemplo, la contraseña del servidor de juegos.  
Yo cambié el nombre del servidor a "ZAP-Hosting Test Server".

Para iniciar el servidor, haz doble clic en el archivo start_server_example.bat.

![](https://screensaver01.zap-hosting.com/index.php/s/gzs85C4HRy9MPTy/preview)

El proceso de inicio tardará un poco.  
Si los puertos están correctamente abiertos en el siguiente paso, podrás encontrar el servidor en la lista de servidores.

![](https://screensaver01.zap-hosting.com/index.php/s/S9mM8KNzsFARmQW/preview)

## Paso 5 Abre los puertos en el firewall

El servidor debe ser accesible públicamente para jugar con amigos. Para ello, los puertos del servidor deben estar habilitados en el firewall de Windows.  
Los puertos 9876 y 9877 deben estar abiertos para los protocolos TCP Y UDP.  
El puerto 9876 es el puerto del servidor de juegos y el 9877 es el puerto Query.  
Cómo abrir puertos en Windows: [Redirección de Puertos (Firewall)](vserver-windows-port.md).

Después de abrir los puertos, el servidor será accesible públicamente si está iniciado.