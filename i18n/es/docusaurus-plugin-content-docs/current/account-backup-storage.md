---
id: account-backup-storage
title: Almacenamiento de Copias de Seguridad
description: "Descubre cómo almacenar y gestionar tus copias de seguridad de forma segura con opciones de almacenamiento escalables para una fácil restauración y acceso → Aprende más ahora"
sidebar_label: Almacenamiento de Copias de Seguridad
---

## ¿Qué es el almacenamiento de copias de seguridad?
El Almacenamiento de Copias de Seguridad ofrece a nuestros clientes la posibilidad de crear copias de seguridad a través de sus servicios. Cada cliente tiene un espacio gratuito de 10GB en su almacenamiento de copias, que puede usar completamente. Sin embargo, por un pequeño recargo, se puede reservar una ampliación del almacenamiento hasta 200GB.

## ¿Cómo accedo a mis archivos de copia de seguridad?
Los archivos de copia de seguridad se colocan en el almacenamiento de copias tan pronto como se crea una copia a través de la interfaz web. Luego, los archivos pueden restaurarse al servicio correspondiente usando la función de copia de seguridad de ese servicio o descargarse desde el almacenamiento de copias vía conexión FTP.

### Conectar al almacenamiento de copias vía FTP
Para conectarte al Almacenamiento de Copias vía FTP, descarga e instala el programa [FileZilla](http://www.filezilla.de/download.htm) para tu sistema operativo. Cuando la instalación termine, abre el programa.
Ahora deberías ver la interfaz de FileZilla:

![2022-04-08_04-41](https://screensaver01.zap-hosting.com/index.php/s/XHa7gfPBKcGgYj4/preview)

Para conectar con tu almacenamiento de copias, introduce los datos de conexión en los campos de texto arriba.
Puedes encontrar estos datos yendo a la página de tu almacenamiento de copias en la interfaz web.
Haz clic en este icono en la parte superior de la barra de menú:

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

En la página de Almacenamiento de Copias encontrarás tus datos de acceso para la conexión FTP en el recuadro marcado en la imagen:

![2022-04-08_04-39](https://screensaver01.zap-hosting.com/index.php/s/pziwNeT9jmFC5Ax/preview)

Introduce la dirección IP en FileZilla en el campo **Servidor**, el usuario en el campo **Nombre de usuario** y la contraseña en el campo **Contraseña**. No necesitas incluir el puerto si es igual a *21*. Ahora haz clic en **Conectar**.
Si la conexión es exitosa, encontrarás las copias creadas por tus servicios en las carpetas respectivas.

![2022-04-08_04-41_1](https://screensaver01.zap-hosting.com/index.php/s/K9MZHf8napDMCjT/preview)

![2022-04-08_04-41_2](https://screensaver01.zap-hosting.com/index.php/s/ca7DkJ2T6DpxTFH/preview)

Las copias están en formato comprimido como archivos **\*.tar.gz** en las carpetas respectivas y pueden descomprimirse con programas como WinRAR o 7-Zip.

## Mensaje de error "Transfer connection interrupted"

Si aparece el mensaje de error "Transfer connection interrupted: ECCONABORTED - Connection aborted" durante la conexión o transferencia, se puede cambiar el modo de transferencia de "**Pasivo**" a "**Activo**".
Los siguientes pasos muestran cómo cambiar esto en la configuración de FileZilla.

Presiona "**Editar**" en tu cliente FileZilla, luego abre directamente "**Configuración...**":

![2022-04-08_05-16](https://screensaver01.zap-hosting.com/index.php/s/AgrmP6i5aAEr2kr/preview)

Después se abrirá la ventana de "**Configuración**". Ahí puedes hacer clic en "**FTP**" para ver las opciones de conexión FTP.
En "**FTP**" el modo de transferencia predeterminado está en "**Pasivo**", ahí puedes seleccionar el botón de opción "**Activo**" y confirmar el cambio con "**OK**".

![2022-04-08_05-17](https://screensaver01.zap-hosting.com/index.php/s/REPQieY3Zbm8arM/preview)

Una vez hecho esto, puedes probar la conexión FTP de nuevo.

## Mensajes
En la barra lateral, en el submenú *Mensajes*, se muestra el registro que indica bajo qué disparador/razón se ejecutó qué acción durante las copias de seguridad para qué paquete y cuándo.

![2022-04-08_04-42](https://screensaver01.zap-hosting.com/index.php/s/GwtGHoDL7d9r3Ds/preview)