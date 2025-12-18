---
id: dedicated-linux-sshkey
title: "Servidor Dedicado: Generar y usar claves SSH para servidores Linux"
description: "Descubre cómo generar y gestionar claves SSH de forma segura para tu servidor Linux y mejorar la seguridad de la conexión → Aprende más ahora"
sidebar_label: Clave SSH
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Generar clave SSH

Para una conexión mucho más segura que la convencional con contraseña SSH, se recomienda usar claves SSH. Para ello, abre la pestaña "**Acceso y Seguridad**" en el panel de tu servidor Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/34o6qRBQdcDbtSt/preview)

En "**Acceso y Seguridad**" ahora puedes generar una clave con el botón "**Generar clave SSH**".  
Al pulsarlo, se abrirá una ventana emergente y se descargará directamente una clave generada aleatoriamente en tu PC.  
Para que la clave se añada al servidor, debes hacer clic en el botón "**Añadir clave**".

:::info
En el caso de VPS Linux, la clave se añade directamente. En servidores root Linux, es necesario reiniciar el servidor para que los cambios tengan efecto.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/97qtHoLXoTNJeBw/preview)

Si necesitas más claves, puedes pulsar el botón "**Generar clave**" en la misma ventana.  
Con "**Nombre de clave**" puedes asignar un nombre a la clave, que se mostrará en el panel de ZAP-Hosting. Esto es recomendable para tener mejor organización.

Cuando todas las claves deseadas estén generadas y añadidas, se mostrarán bajo "**Acceso y Seguridad**".

![](https://screensaver01.zap-hosting.com/index.php/s/c7NzacjDy9Npwrm/preview)

Si tienes tu propia clave pública, generada externamente y no a través de nuestro panel, puedes integrarla haciendo clic en el icono "**+**".

![](https://screensaver01.zap-hosting.com/index.php/s/MFMn7o2yf8TKfRK/preview)

Se abrirá un panel vacío donde puedes pegar tu clave pública. Luego, al pulsar la función "**Añadir clave**", la clave se añadirá al servidor y se mostrará en nuestro panel.

## De OpenSSH a clave privada PuTTY con PuTTYGen

Las claves SSH creadas por nuestro panel están en formato OpenSSH. Para usarlas con PuTTY, primero debes convertirlas al formato de clave privada de PuTTY. Puedes usar el software "**PuTTYGen**", que se instala automáticamente con PuTTY.

La aplicación PuTTYGen está en el directorio raíz de PuTTY. Por defecto, la carpeta PuTTY se mostraría en la ruta del ejemplo como "**C:>Program Files>PuTTY**".

Abre PuTTYGen y luego haz clic en "**Archivo**" -> "**Cargar clave privada**".

![](https://screensaver01.zap-hosting.com/index.php/s/q4jAx8dikeSfisE/preview)

Ahora debes abrir el archivo generado por ZAP-Hosting. Para ello, navega hasta la carpeta estándar donde se guardan tus descargas.

:::info
**Importante:** Asegúrate de tener el filtro en "**Todos los archivos**" como se muestra en la imagen, ya que el archivo .pri creado por el sistema no se verá si no.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/5eRjG5HNMrxW38D/preview)

Una vez cargado, puedes usar los campos para añadir comentarios y una contraseña para la clave. Para establecer la contraseña, debes introducirla en "**Frase de contraseña**" y en "**Confirmar frase de contraseña**".  
*Nota:* También puedes dejar estos campos vacíos y crear la clave sin contraseña, pero esto es menos seguro y no recomendado. Cuando hayas configurado todo, guarda la clave compatible con PuTTY con el botón "**Guardar clave privada**".

![](https://screensaver01.zap-hosting.com/index.php/s/S2XNpejKYds6C6K/preview)

Ponle un nombre al archivo .ppk y guárdalo para encontrarlo fácilmente después.

## Conexión con clave SSH

Para usar la clave en las conexiones, primero debes vincularla con PuTTY. Para ello, haz clic en "**SSH**" - "**Auth**" - "**Examinar...**".

![](https://screensaver01.zap-hosting.com/index.php/s/cxLBRMPiqEXBG55/preview)

Busca la clave que acabas de crear con PuTTYGen y pulsa "**Abrir**".

Para no repetir estos pasos en cada conexión, te recomendamos guardar esta configuración en la sesión. Haz clic en "**Sesión**" - "**Configuración predeterminada**" - "**Guardar**", como se ve en la captura.

![](https://screensaver01.zap-hosting.com/index.php/s/eqriRDGeJAL9sKH/preview)

Ahora puedes iniciar sesión en el servidor con PuTTY. Ahí podrás ver el "**Comentario de clave**" que introdujiste en PuTTYGen.

## Desactivar inicio de sesión con contraseña

Las claves SSH se crearon para aumentar la seguridad. Si aún es posible iniciar sesión con contraseña SSH, la seguridad del servidor no ha cambiado. Por eso, ahora debes desactivar el inicio de sesión por contraseña. Hay una diferencia entre VPS Linux y servidores root Linux en cómo se desactiva este inicio de sesión. Si el inicio de sesión está correctamente desactivado, solo podrán conectarse usuarios con la clave SSH que creaste.

### VPS Linux

Puedes desactivar el inicio de sesión por contraseña fácilmente en la pestaña Acceso y Seguridad.  
Pulsa el botón **Desactivar inicio de sesión por contraseña** junto al botón Generar clave SSH.  
Una vez desactivado, ya no será posible acceder al servidor con contraseña.

![](https://screensaver01.zap-hosting.com/index.php/s/77gNyyEx66GoWsg/preview)

El estado de "**Inicio de sesión SSH por contraseña**" también cambiará a "**Inactivo**".