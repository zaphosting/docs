---
id: fivem-txadmin-import-server-base
title: "FiveM: Importar base de servidor con txAdmin"
description: "Descubre cómo importar una base de servidor lista para usar a tu propio servidor con txAdmin para una configuración rápida e integración sin complicaciones → Aprende más ahora"
sidebar_label: Importar base de servidor
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introducción

¿Has encontrado una base de servidor lista en Internet y quieres subirla a tu propio servidor? ¡Sin problema! Con txAdmin, puedes importar una base de servidor rápida y fácilmente, siempre que tengas en cuenta algunos requisitos y detalles importantes. En esta guía, te mostraremos cómo importar una base de servidor.



<InlineVoucher />

## Preparación

Para comenzar el proceso de configuración, es necesario que ya hayas descargado una base de servidor lista desde Internet a tu ordenador y que el archivo ya esté descomprimido.

El contenido de una base de servidor puede variar según el tipo y contenido del servidor, y los archivos pueden verse diferentes en consecuencia. Sin embargo, tu base de servidor debería contener generalmente los siguientes datos:

- **Configuración del servidor - `server.cfg` (obligatorio):** El archivo de configuración del servidor contiene todos los comandos/configuraciones relevantes para tu servidor.
- **Carpeta de recursos - `resource` (obligatorio):** La carpeta de recursos contiene todos los recursos listos que se usan en la base de servidor proporcionada.
- **Archivo SQL - `filenameXY.sql` (opcional):** Este archivo contiene la estructura de base de datos terminada que se requiere para el uso y comunicación entre los recursos y la base de datos (si se usa).

Los **datos (`server.cfg`, `resources`)** de tu base de servidor descargada deben subirse a tu servidor de juegos. El **archivo SQL** debe importarse en la base de datos ZAP que te proporcionamos.

### Archivos del servidor
La subida de los datos de tu Base de Servidor se realiza vía FTP. Si aún no sabes exactamente cómo funciona, echa un vistazo a la siguiente guía: [Acceso FTP](gameserver-ftpaccess.md)

Conéctate a tu servidor de juegos vía FTP y navega a la carpeta `fivem`. Crea una carpeta para tu base de servidor ahí, si aún no existe. En este ejemplo, se usa el nombre **ExampleServer** para la base de servidor terminada.

![img](https://screensaver01.zap-hosting.com/index.php/s/HzDrADKgK3rqfKm/download)



Una vez creada la carpeta, ahora debes subir los datos de la Base de Servidor. Para ello, navega a la carpeta recién creada y sube la carpeta de recursos y tu configuración del servidor. El resultado debería verse así:

![img](https://screensaver01.zap-hosting.com/index.php/s/xyAZyt8W5XcxGaF/preview)

 

### Base de datos

Si tu Base de Servidor también requiere el uso de una base de datos, entonces el archivo SQL proporcionado debe importarse en tu base de datos ZAP. Si aún no sabes exactamente cómo funciona, echa un vistazo a la siguiente guía: [Importar archivo SQL](fivem-sql-file-import.md)

Importa tu archivo SQL en tu base de datos como se describe en la guía. Pero primero asegúrate de haber ajustado el contenido del archivo SQL y especificado el nombre correcto de tu base de datos ZAP. Para ello, reemplaza el valor original en el comando Use '...' con el nombre de tu base de datos ZAP.

:::warning Revisa bien el contenido del archivo SQL antes de importar
Por favor, asegúrate de que el contenido del archivo SQL ha sido ajustado y es completamente correcto antes de importarlo. De lo contrario, aparecerá el siguiente mensaje de error:

`Access denied for user ‘zapXXXXX-X’@’%’ to database ’originalDatabaseName’`
:::



## Configuración de txAdmin

La preparación para configurar el servidor ya está completa. La configuración, instalación y ajuste del servidor se realiza ahora a través del proceso de configuración de la interfaz txAdmin. La siguiente guía explica en detalle cómo acceder a txAdmin y cómo se realiza exactamente la configuración: [Configuración de txAdmin](fivem-txadmin-setup.md)



### Bienvenida

Define un nombre que quieras usar para tu proyecto. Este nombre no es para la lista de servidores, sino que es solo para uso dentro de la interfaz de txAdmin y para mensajes en Chat/Discord. Continúa con el paso Tipo de despliegue.

![img](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)

### Tipo de despliegue

En Tipo de despliegue, ahora debes elegir cómo quieres configurar tu servidor. Tienes las siguientes opciones: **Recetas populares**, **Datos de servidor existentes**, **Plantilla URL remota** y **Plantilla personalizada**. Para tu caso, debes elegir **Datos de servidor existentes**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oMSBwf6jmHMwtYn/preview)

### Selección de rutas

A continuación, debes especificar la ruta donde se encuentra tu base de servidor. La estructura de carpetas comienza así y debe extenderse con el nombre de tu base de servidor definida: `/home/zapXXXXX/gXXXXXXXX/fivem/ExampleServer`.

Puedes copiar y pegar la estructura de carpetas especificada como se muestra en la captura y luego añadir el nombre de la carpeta de tu Base de Servidor creada previamente. El resultado debería verse así:

![img](https://screensaver01.zap-hosting.com/index.php/s/eDPeDzSqfMbk7Tg/download)



Haz clic en **Siguiente**. Ahora debería reconocerse el archivo de configuración del servidor `server.cfg`. Confírmalo y completa la configuración habitual con el botón **Guardar y arrancar**.



## Configuración

Es muy probable que el servidor no pueda arrancar porque no toda la información necesaria es correcta. Esto se debe, entre otras cosas, a información incorrecta sobre la dirección IP y el puerto del servidor, falta de información de base de datos para una conexión exitosa, así como una clave de licencia faltante. Por eso, aún se requieren ajustes finales en la configuración del servidor para completarlo.

### Detalles del servidor

Por defecto, la información de dirección IP y puerto proporcionada no está disponible o es incorrecta. Asegúrate de que las entradas para los endpoints estén presentes y sean correctas en tu archivo de configuración del servidor. La sintaxis es la siguiente:

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
```

Reemplaza la dirección IP (0.0.0.0) y el puerto (30120) con la información de tu servidor. Puedes encontrar estos datos en la administración de tu servidor de juegos.

:::warning IP/puerto incorrectos
Si la información que configuraste no es correcta, lo reconocerás por el siguiente mensaje de error:

```
Line XX: [ZAP-Hosting] the 'endpoint_add_tcp' interface MUST be 'XXX.XXX.XXX.XXX'
Line XX: [ZAP-Hosting] the 'endpoint_add_udp' interface MUST be 'XXX.XXX.XXX.XXX'
```
:::


### Base de datos

Para que tu servidor pueda establecer conexión con la base de datos, debe especificarse una cadena de conexión MySQL con la información de la base de datos en el archivo de configuración `server.cfg`. Por defecto, puede verse así:

```sql
set mysql_connection_string "mysql://username:password@dataBaseHostname/databaseName?charset=utf8mb4"
```

Si ya existe una cadena de conexión MySQL en tu configuración o no, depende de la base de servidor que estés usando. Si no existe o no contiene la información necesaria, tendrás que añadirla y ajustarla. Puedes ver la información de la base de datos en la administración del servidor de juegos bajo Bases de datos. El resultado podría verse así, por ejemplo:

```sql
set mysql_connection_string "mysql://zapXXXXXXX-X:yourDatabasePassword@mysql-mariadb-XX-XXX.zap-hosting.com/zapXXXXXX-X?charset=utf8mb4"
```

:::tip Simplifícalo
Si quieres ahorrarte este paso, también puedes hacer clic en el botón **[Reconfigurar cadena de conexión MySQL](https://screensaver01.zap-hosting.com/index.php/s/zZSmQex6ropFK3X/preview)** en la administración del servidor de juegos, en la configuración al final de la página.
:::


### Onesync

Si el archivo de configuración `server.cfg` de tu Base de Servidor contiene información sobre **Onesync**, esta debe eliminarse. En su lugar, se gestiona a través de la configuración de la interfaz txAdmin. Si quieres activarlo, encontrarás la opción en **Configuración ⟶ FXServer**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y4LKM8ZRn4ZSFzp/download)

### Clave de licencia

Para operar tu servidor, necesitas tu propia clave de licencia de CFX. Puedes aprender cómo crear tu propia clave en la siguiente guía: [Clave de licencia propia](fivem-licensekey.md)

Añade la clave de licencia al archivo de configuración del servidor:

```
sv_licenseKey "tuClaveDeLicenciaAquí"
```



## Conclusión

¡Felicidades! Una vez que hayas subido los archivos con éxito, completado la configuración de txAdmin y realizado los cambios necesarios en la configuración del servidor, ya puedes arrancar y jugar en tu servidor con tu base de servidor.

<InlineVoucher />