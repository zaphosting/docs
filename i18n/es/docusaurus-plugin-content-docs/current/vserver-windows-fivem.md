---
id: vserver-windows-fivem
title: "VPS: Configuración de Servidor Dedicado FiveM"
description: "Descubre cómo instalar y configurar tu propio Servidor Dedicado FiveM en un VPS para un juego multijugador sin interrupciones → Aprende más ahora"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introducción

¿Tienes un VPS y quieres instalar y manejar tu propio servicio de Servidor Dedicado FiveM con txAdmin? ¡Estás en el lugar correcto! A continuación, te explicamos todos los pasos necesarios para instalarlo y configurarlo, y qué debes tener en cuenta. 


## Preparación

Para montar un servidor FiveM, se necesitan ciertos pasos previos que deben completarse antes de comenzar con la configuración real del Servidor Dedicado FiveM.



### Configurar base de datos

Si quieres usar e instalar recursos que requieren base de datos, necesitas un **servidor de base de datos** adicional. Hay varias formas de configurar uno. En nuestra [guía Instalar MySQL](vserver-windows-installmysql.md) te mostramos cómo instalar tu propio **servidor de base de datos** en tu **VPS**.



### Descargar software del servidor FiveM

El siguiente paso es descargar el software del servidor FiveM. Para ello, navega a la página [Lista de Builds del Servidor](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) de FiveM desde cualquiera de los navegadores instalados que prefieras y descarga la última build del servidor FiveM. 

Descomprime el archivo descargado en la carpeta de Descargas y mueve los archivos del servidor FiveM preferiblemente a un directorio aparte. En este ejemplo, el software del servidor está en una carpeta llamada **FiveM** en el escritorio. 

:::warning Herramienta de descompresión necesaria
Para descomprimir el software del Servidor FiveM descargado, necesitas una herramienta para archivos comprimidos. En este ejemplo usamos [7Zip](https://7-zip.com/). 
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Crear clave de licencia para el servidor FiveM

Cada servidor FiveM necesita su propia clave de licencia, que se gestiona a través del nuevo [Portal Cfx.re](http://portal.cfx.re/). La clave de licencia está vinculada a tu cuenta Cfx.re. Inicia sesión en la web, ve a la categoría **Servidor** y haz clic en el botón **Generar Clave**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuración

Ahora puedes empezar con la instalación del Servidor FiveM y txAdmin. Para ello, abre de nuevo el directorio del Servidor FiveM y ejecuta la aplicación `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


Una vez que la aplicación del servidor se haya ejecutado, se abrirán la consola del servidor y txAdmin. En la interfaz de txAdmin, debes vincular tu **cuenta Cfx.re** con txAdmin.  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### Configuración de txAdmin

Durante la configuración de txAdmin, tu propio servidor FiveM se instala y configura en cinco pasos. Sigue las instrucciones en la interfaz de txAdmin y define primero un **nombre para el servidor**. Luego selecciona el **tipo de servidor** deseado. Este ejemplo muestra la instalación de un servidor FiveM con QBCore preinstalado.

Selecciona la opción **Recetas Populares** en el paso **Tipo de Despliegue** y luego la **Plantilla del Framework QBCore**. Confirma el **Directorio de Datos** deseado y lanza el **Desplegador de Recetas** para completar la instalación.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Durante el Desplegador de Recetas, debes añadir la última información necesaria antes de que el servidor pueda arrancar finalmente. Introduce tu clave de licencia FiveM creada previamente en el campo **Clave de Licencia**. Luego haz clic en **Mostrar/Ocultar Opciones de Base de Datos (Avanzado)** e introduce los datos de acceso de tu servidor de base de datos. En este caso, solo se requiere la contraseña definida previamente para el usuario **root**. El resto de ajustes puede quedar igual. Revisa tus datos y luego haz clic en **Ejecutar Receta** para iniciar el proceso.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Configuración del firewall
Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo directamente con comandos de Powershell, que es más fácil, o de forma tradicional a través de la página del Firewall de Windows Defender.

<Tabs>
<TabItem value="powershell" label="Vía Powershell" default>

Abre el buscador de Windows y busca **Powershell**. Asegúrate de hacer clic derecho y **Ejecutar como Administrador** para que los permisos estén disponibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar Powershell en modo Administrador, si no, los ajustes podrían no aplicarse bien.
:::

Luego copia y pega los siguientes comandos en tu consola de Powershell:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor FiveM sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que pulsar en **Configuración avanzada** para abrir la ventana necesaria si entras desde la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor FiveM. Para ello, haz clic en las reglas entrantes y salientes como se indica a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 30120
- UDP entrante y saliente: 30120

Si necesitas ayuda adicional, consulta nuestra [guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Conclusión

Has instalado y configurado con éxito un servicio de Servidor Dedicado FiveM en tu VPS. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡que está disponible todos los días para ayudarte! 🙂


<InlineVoucher />