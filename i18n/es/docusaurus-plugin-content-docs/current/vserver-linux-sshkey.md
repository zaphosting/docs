---
id: vserver-linux-sshkey
title: "VPS: Generar y usar claves SSH para servidores Linux"
description: "Descubre cómo generar y gestionar claves SSH de forma segura para tu servidor Linux y mejorar la seguridad y control de tus conexiones → Aprende más ahora"
sidebar_label: Clave SSH
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Generar clave SSH

Para una conexión mucho más segura que la conexión convencional con contraseña SSH, se recomienda usar claves SSH. Para ello, abre la pestaña "**Acceso y Seguridad**" en el panel de tu servidor Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/wJCtHY44dYiYoqX/preview)

En "**Acceso y Seguridad**" ahora puedes generar una clave con el botón "**Generar clave SSH**".  
Al pulsar este botón, se abrirá una ventana emergente y se descargará automáticamente una clave generada aleatoriamente en tu PC.  
Para que la clave se añada al servidor, debes hacer clic en el botón "**Añadir clave**".

:::info
En el caso de VPS Linux, la clave se añade directamente. En servidores root Linux, es necesario reiniciar el servidor para que los cambios tengan efecto.
:::

<InlineVoucher />

![](https://screensaver01.zap-hosting.com/index.php/s/GsER3sNYWYj8t7y/preview)

Si necesitas más claves, puedes pulsar el botón "**Generar clave**" en la misma ventana.  
Con "**Nombre de clave**" puedes asignar un nombre a la clave, que se mostrará en el panel de ZAP-Hosting. Esto es súper útil para tener todo bien organizado.

Cuando hayas generado y añadido todas las claves que quieras, se mostrarán bajo "**Acceso y Seguridad**".

![](https://screensaver01.zap-hosting.com/index.php/s/5yjACdnpyiw6E97/preview)

Si tienes tu propia clave pública, generada fuera de nuestro panel, puedes integrarla haciendo clic en el icono "**+**".

![](https://screensaver01.zap-hosting.com/index.php/s/H75CCTe5tTonn8y/preview)

Se abrirá un panel vacío donde puedes pegar tu clave pública. Luego, pulsa "**Añadir clave**" para agregarla al servidor y que aparezca en nuestro panel.

## De OpenSSH a clave privada PuTTY con PuTTYGen

Las claves SSH creadas por nuestro panel están en formato OpenSSH. Para usarlas con PuTTY, primero hay que convertirlas al formato de clave privada de PuTTY. Para eso, usa el programa "**PuTTYGen**", que se instala automáticamente con PuTTY.

La aplicación PuTTYGen está en la carpeta raíz de PuTTY. Por defecto, la carpeta PuTTY suele estar en la ruta que ves en la imagen: "**C:>Program Files>PuTTY**".

Abre PuTTYGen y luego haz clic en "**Archivo**" -> "**Cargar clave privada**".

![](https://screensaver01.zap-hosting.com/index.php/s/KNeiG7eWpWateDz/preview)

Ahora abre el archivo generado por ZAP-Hosting. Para ello, ve a la carpeta donde se guardan tus descargas.

:::info
**Importante:** Asegúrate de tener el filtro en "**Todos los archivos**" como en la imagen, porque el archivo .pri creado por el sistema no se verá si no.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/WQfWN264pJPKWYX/preview)

Una vez cargado, puedes usar los campos para añadir comentarios y una contraseña para la clave. Para poner contraseña, escribe la misma en "**Frase de contraseña**" y en "**Confirmar frase de contraseña**".  
*Nota:* También puedes dejar estos campos vacíos y crear la clave sin contraseña, pero es menos seguro y no lo recomendamos. Cuando tengas todo listo, guarda la clave compatible con PuTTY con el botón "**Guardar clave privada**".

![](https://screensaver01.zap-hosting.com/index.php/s/N4dKc86M95yYbtK/preview)

Ponle un nombre al archivo .ppk y guárdalo para encontrarlo fácilmente después.

## Conexión con clave SSH

Para usar la clave en las conexiones, primero hay que vincularla con PuTTY. Ve a "**SSH**" - "**Auth**" - "**Examinar...**".

![](https://screensaver01.zap-hosting.com/index.php/s/3BJ7NaG2AemGSZt/preview)

Busca la clave que creaste con PuTTYGen y pulsa "**Abrir**".

Para no tener que hacer esto cada vez que te conectes, te recomendamos guardar esta configuración en la sesión. Haz clic en "**Sesión**" - "**Configuración predeterminada**" - "**Guardar**", como ves en la imagen.

![](https://screensaver01.zap-hosting.com/index.php/s/zENfY7DBZk85mMa/preview)

Ahora ya puedes iniciar sesión en el servidor con PuTTY. Ahí verás el "**Comentario de clave**" que pusiste en PuTTYGen.

## Desactivar login con contraseña

Las claves SSH se crearon para aumentar la seguridad. Si el login con contraseña SSH sigue activo, la seguridad del servidor no ha cambiado. Por eso, ahora hay que desactivar el login por contraseña. Hay una diferencia entre VPS Linux y servidores root Linux en cómo hacerlo. Si el login está desactivado correctamente, solo podrán conectarse usuarios con la clave SSH que creaste.

### VPS Linux

Puedes desactivar el login por contraseña fácilmente en la pestaña Acceso y Seguridad.  
Pulsa el botón **Desactivar login por contraseña** junto al botón Generar clave SSH.  
Una vez desactivado, ya no se podrá acceder al servidor con contraseña.

![](https://screensaver01.zap-hosting.com/index.php/s/jd9NiypwxgpeMGe/preview)

El estado de "**Login SSH por contraseña**" cambiará a "**Inactivo**".

## Conclusión

¡Felicidades, has instalado y configurado tu clave SSH con éxito! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible todos los días para ayudarte.

<InlineVoucher />