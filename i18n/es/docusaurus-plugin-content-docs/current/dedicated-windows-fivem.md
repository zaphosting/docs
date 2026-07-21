---
id: dedicated-windows-fivem
title: "Configuración de Servidor Dedicado FiveM"
description: "Descubre cómo configurar y ejecutar tu propio Servidor Dedicado FiveM con txAdmin para una experiencia multijugador sin interrupciones → Aprende más ahora"
sidebar_label: FiveM
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

¿Tienes un servidor dedicado y quieres instalar y gestionar tu propio servicio de Servidor Dedicado FiveM con txAdmin? ¡Estás en el lugar correcto! A continuación, te explicamos todos los pasos necesarios para instalarlo, configurarlo y qué debes tener en cuenta.



:::warning Sistema operativo seleccionado e instalado
Se asume que ya has seleccionado e instalado un sistema operativo para tu VPS/servidor dedicado. Si aún no has completado este paso, primero debes seguir los pasos de la guía [Configuración inicial](dedicated-setup.md) para servidores dedicados.
:::



## Preparación

Para configurar un servidor FiveM, es necesario realizar ciertos pasos previos que deben completarse antes de comenzar con la instalación del Servidor Dedicado FiveM.



### Configurar base de datos

Si quieres usar e instalar recursos que requieran una base de datos, necesitarás un **servidor de base de datos** adicional. Existen varias formas de configurar dicho servidor. En nuestra guía [Instalar MySQL](dedicated-windows-installmysql.md) te mostramos cómo instalar tu propio **servidor de base de datos** en tu **servidor dedicado**.



### Descargar software del servidor FiveM

El siguiente paso es descargar el software del servidor FiveM. Para ello, navega al sitio web [Lista de Builds del Servidor](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) de FiveM desde cualquiera de los navegadores instalados que prefieras y descarga la última build del servidor FiveM.

Descomprime el archivo descargado en el directorio de Descargas y mueve los archivos del servidor FiveM preferiblemente a un directorio separado. En este ejemplo, el software del servidor está en una carpeta llamada **FiveM** en el escritorio.

:::warning Herramienta de descompresión necesaria
Para descomprimir el software del servidor FiveM descargado, se requiere una herramienta de descompresión para el archivo empaquetado. En este ejemplo, se usa [7Zip Software](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Crear clave de licencia para el servidor FiveM

Cada servidor FiveM requiere su propia clave de licencia, que se gestiona a través del nuevo [Portal Cfx.re](http://portal.cfx.re/). La clave de licencia está vinculada a tu cuenta Cfx.re. Inicia sesión en el sitio web, navega a la categoría **Server** y haz clic en el botón **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuración

Ahora puedes comenzar con la instalación del Servidor FiveM y txAdmin. Para iniciar este paso, abre nuevamente el directorio de tu Servidor FiveM y ejecuta la aplicación `cfx-server.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


Una vez ejecutada la aplicación del servidor, se abrirán la consola del servidor y txAdmin. En la interfaz de txAdmin, debes vincular tu **cuenta Cfx.re** con txAdmin.



![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### Configuración de txAdmin

Durante la configuración de txAdmin, tu propio servidor FiveM se instala y configura en cinco pasos. Sigue las instrucciones en la interfaz de txAdmin y define primero un **nombre para el servidor**. Luego selecciona el **tipo de servidor** deseado. Este ejemplo muestra la instalación de un servidor FiveM con QBCore preinstalado.

Selecciona la opción **Popular Recipes** en el paso **Deployment Type** y luego la plantilla **QBCore Framework Template**. Confirma el **Directorio de Datos** deseado y comienza el **Recipe Deployer** para completar la instalación.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Durante el Recipe Deployer, debes añadir la última información necesaria antes de que el servidor pueda iniciarse finalmente. Introduce la clave de licencia FiveM que creaste previamente en el campo **License Key**. Luego haz clic en **Show/Hide Database Options (Advanced)** e ingresa los datos de acceso de tu servidor de base de datos. En este caso, solo se requiere la contraseña definida previamente para el usuario **root**. El resto de configuraciones puede permanecer sin cambios. Revisa tus datos y luego haz clic en **Run Recipe** para iniciar el proceso.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Configuración del firewall
Para asegurar que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que utiliza el proceso del VPS/servidor dedicado. Puedes hacerlo mediante comandos de Powershell, que es más sencillo, o a través de la página de Windows Defender Firewall.

<Tabs>
<TabItem value="powershell" label="Vía Powershell" default>

Abre el cuadro de búsqueda de Windows y busca **Powershell**. Asegúrate de hacer clic derecho y seleccionar **Ejecutar como administrador** para que los permisos sean accesibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar Powershell en modo administrador, de lo contrario las configuraciones podrían no aplicarse correctamente.
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

Usa la función de búsqueda de Windows para abrir **Configuración de Firewall de Windows con Seguridad Avanzada**. Puede que tengas que pulsar en **Configuración avanzada** para abrir la ventana necesaria si accedes a la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/woitzXpAAirg9JN/preview)

Debes crear nuevas reglas para tu servidor FiveM. Para ello, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 30120
- UDP entrante y saliente: 30120

Por favor, usa nuestra guía [Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas ayuda adicional para realizar esto.

</TabItem>
</Tabs>

## Conclusión

Has instalado y configurado con éxito un servicio de Servidor Dedicado FiveM en tu VPS/servidor dedicado. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible diariamente para ayudarte! 🙂