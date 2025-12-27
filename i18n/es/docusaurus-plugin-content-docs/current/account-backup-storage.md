---
id: account-backup-storage
title: "Almacenamiento de Copias de Seguridad: Guarda, Restaura y Descarga Backups"
description: "Descubre cómo almacenar y gestionar tus backups de forma segura con opciones de almacenamiento escalables para una restauración y acceso fáciles → Aprende más ahora"
sidebar_label: Almacenamiento de Copias de Seguridad
---

## Introducción

El Almacenamiento de Copias de Seguridad ofrece un lugar centralizado para guardar las copias de seguridad creadas desde tus servicios. Te permite conservar los archivos de backup de forma segura, restaurarlos directamente en los servicios o descargarlos para almacenarlos localmente.

Cada cuenta incluye 10 GB de espacio gratuito para Almacenamiento de Copias de Seguridad. Si necesitas más capacidad, el almacenamiento puede ampliarse hasta 200 GB por un coste adicional.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZBy57k2pbTcteKg/preview)



## Funcionalidad del almacenamiento de backups

Las copias de seguridad se crean directamente a través de la interfaz web del servicio correspondiente. Una vez generado un backup, se almacena automáticamente en el Almacenamiento de Copias de Seguridad. Los backups almacenados pueden usarse de dos maneras:

- Restaurándolos directamente en el servicio correspondiente mediante su función de backup
- Descargándolos desde el Almacenamiento de Copias de Seguridad para uso local



## Acceso a los archivos de backup

Los archivos de backup están disponibles en el Almacenamiento de Copias de Seguridad inmediatamente después de su creación. Además de restaurar backups a través de la interfaz del servicio, también puedes acceder a los archivos mediante una conexión FTP.



## Conexión al Almacenamiento de Copias de Seguridad vía FTP

Para acceder al Almacenamiento de Copias de Seguridad vía FTP, instala un cliente FTP como FileZilla para tu sistema operativo y abre la aplicación tras la instalación. Al abrirla, verás la interfaz de FileZilla:

![img](https://screensaver01.zap-hosting.com/index.php/s/4CrofjFEe7TxYCR/preview)

Para establecer la conexión, introduce los datos de acceso FTP en los campos superiores de FileZilla. Los datos necesarios los encontrarás en la interfaz web, en la página del Almacenamiento de Copias de Seguridad. Abre la sección de Almacenamiento de Copias de Seguridad y haz clic en el icono que está en la parte superior de la barra de menú.

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

En la página del Almacenamiento de Copias de Seguridad, los datos de acceso FTP se muestran en la sección resaltada que ves a continuación. Introduce la siguiente información en FileZilla:

- **Servidor**: dirección IP
- **Nombre de usuario**: usuario FTP
- **Contraseña**: contraseña FTP

No es necesario especificar el puerto si está configurado en **21**. Haz clic en **Conectar** para establecer la conexión. Tras una conexión exitosa, los backups creados por tus servicios serán visibles en los directorios correspondientes.

Introduce la dirección IP en FileZilla en el campo **Servidor**, el usuario en el campo **Nombre de usuario** y la contraseña en el campo **Contraseña**. No necesitas incluir el puerto si es igual a *21*. Ahora haz clic en **Conectar**.  
Si la conexión es exitosa, encontrarás los backups creados por tus servicios en las carpetas respectivas.

![img](https://screensaver01.zap-hosting.com/index.php/s/9PAFpxWHiJx9LnT/preview)



## Mensajes y registros de backups

La sección **Mensajes** en la barra lateral muestra un registro de las acciones relacionadas con los backups. Indica qué eventos de backup se han activado, para qué servicio o paquete, y en qué momento.

![img](https://screensaver01.zap-hosting.com/index.php/s/nFfDMfQBNeE4Jt4/preview)