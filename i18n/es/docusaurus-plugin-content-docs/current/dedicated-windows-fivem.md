---
id: dedicated-windows-fivem
title: "Servidor Dedicado: Configuración de Servidor Dedicado FiveM"
description: "Descubre cómo configurar y administrar tu propio Servidor Dedicado FiveM con txAdmin para una experiencia multijugador sin interrupciones → Aprende más ahora"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introducción

¿Tienes un servidor dedicado y quieres instalar y administrar tu propio servicio de Servidor Dedicado FiveM con txAdmin? ¡Estás en el lugar correcto! A continuación, te explicamos todos los pasos necesarios para instalarlo, configurarlo y qué debes tener en cuenta.



:::warning  Sistema operativo seleccionado e instalado
Se asume que ya has seleccionado e instalado un sistema operativo para tu servidor dedicado. Si aún no has completado este paso, primero debes seguir los pasos de la [Configuración inicial](dedicated-setup.md) para servidores dedicados.
:::



## Preparación

Para configurar un servidor FiveM, es necesario realizar ciertos pasos de preparación que deben implementarse antes de comenzar con la configuración real del Servidor Dedicado FiveM.



### Configurar base de datos

Si quieres usar e instalar recursos que requieren una base de datos, necesitas un **servidor de base de datos** adicional. Hay varias formas de configurar dicho servidor. En nuestra guía [Instalar MySQL](dedicated-windows-installmysql.md) te mostramos cómo instalar tu propio **servidor de base de datos** en tu **servidor dedicado**.



### Descargar software del servidor FiveM

El siguiente paso es descargar el software del servidor FiveM. Para ello, navega al sitio web de [Lista de Builds del Servidor](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) de FiveM a través de uno de los navegadores instalados que prefieras y descarga la última build del servidor FiveM.

Descomprime el archivo descargado en el directorio de Descargas y mueve los archivos del servidor FiveM preferiblemente a un directorio separado. En este ejemplo, el software del servidor está ubicado en una carpeta llamada **FiveM** en el escritorio.

:::warning Herramienta de descompresión requerida
Para descomprimir el software del Servidor FiveM descargado, se requiere una herramienta de descompresión para el archivo empaquetado. En este ejemplo, se usa [7Zip Software](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Crear clave de licencia para el servidor FiveM

Cada servidor FiveM requiere su propia clave de licencia, que se gestiona a través del nuevo [Portal Cfx.re](http://portal.cfx.re/). La clave de licencia está vinculada a tu cuenta Cfx.re. Inicia sesión en el sitio web, navega a la categoría **Servidor** y haz clic en el botón **Generar clave**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuración

Ahora puedes comenzar con la instalación del Servidor FiveM y txAdmin. Para iniciar este paso, abre nuevamente el directorio de tu Servidor FiveM y ejecuta la aplicación `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


Una vez que la aplicación del servidor se haya ejecutado, se abrirán la consola del servidor y txAdmin. En la interfaz de txAdmin, debes vincular tu **cuenta Cfx.re** con txAdmin.


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### Configuración de txAdmin

Durante la configuración de txAdmin, tu propio servidor FiveM se instala y configura en cinco pasos. Sigue las instrucciones en la interfaz de txAdmin y define primero un **nombre para el servidor**. Luego selecciona el **tipo de servidor** deseado. Este ejemplo muestra la instalación de un servidor FiveM con QBCore preinstalado.

Selecciona la opción **Recetas Populares** en el paso **Tipo de Despliegue** y luego la **Plantilla del Framework QBCore**. Confirma el **Directorio de Datos** deseado y comienza el **Despliegue de Receta** para completar la instalación.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Durante el Despliegue de Receta, se deben añadir los últimos datos necesarios antes de que el servidor pueda iniciarse finalmente. Introduce tu clave de licencia FiveM creada previamente en el campo **Clave de Licencia**. Luego haz clic en **Mostrar/Ocultar Opciones de Base de Datos (Avanzado)** e ingresa los datos de acceso de tu servidor de base de datos. En este caso, solo se requiere la contraseña definida previamente para el usuario **root**. Todas las demás configuraciones pueden permanecer sin cambios. Revisa tu entrada y luego haz clic en **Ejecutar Receta** para iniciar el proceso.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Configuración del firewall
Para asegurar que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que utiliza el proceso del servidor dedicado. Puedes hacerlo mediante comandos de Powershell, que es más fácil, o de forma habitual a través de la página del Firewall de Windows Defender.

<Tabs>
<TabItem value="powershell" label="Vía Powershell" default>

Abre el cuadro de búsqueda de Windows y busca **Powershell**. Asegúrate de hacer clic derecho y **Ejecutar como Administrador** para que los permisos estén disponibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar Powershell en modo Administrador, de lo contrario, las configuraciones podrían no aplicarse correctamente.
:::

Luego, copia y pega los siguientes comandos en tu consola de Powershell:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor FiveM sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la función de búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que presionar **Configuración avanzada** para abrir la ventana necesaria si abres la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor FiveM. Para ello, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 30120
- UDP entrante y saliente: 30120

Por favor, usa nuestra guía de [Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda para hacerlo.

</TabItem>
</Tabs>

## Conclusión

Has instalado y configurado con éxito un servicio de Servidor Dedicado FiveM en tu servidor dedicado. Para cualquier pregunta o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂



