---
id: webspace-mybb
title: "Hosting web: Instala el software de foro MyBB"
description: "Descubre cómo configurar y lanzar tu propio foro MyBB para crear una comunidad online súper activa → Aprende más ahora"
sidebar_label: Instalar MyBB
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

MyBB, antes conocido como MyBulletinBoard, es un software de foro gratuito y de código abierto desarrollado por el grupo MyBB. En esta guía te explicamos cómo instalar este software de foro en nuestro producto de hosting web.

<InlineVoucher />

## Preparación

Antes de poder realizar la instalación de MyBB, hay que hacer algunas preparaciones. Esto incluye conseguir el software del foro, configurar la base de datos que se usará y el servidor de correo (dirección de email).

**Software**

El software del foro se puede descargar desde la web oficial de MyBB. El enlace de descarga es este: [MyBB](https://mybb.com/download/)

![Bildschirmfoto vom 2022-05-15 23-16-59](https://screensaver01.zap-hosting.com/index.php/s/s8kbtNFq6c79SoH/preview)

La descarga contiene un archivo comprimido, que debes descomprimir en tu ordenador local. Dentro encontrarás una carpeta llamada **Upload**. Su contenido es necesario y debe subirse vía **FTP o Gestor de Archivos**. En **Sitios web y dominios** bajo **Acceso FTP** puedes crear un usuario FTP.

Después de abrir el gestor de archivos en el panel Plesk, navega hasta el directorio **httpdocs** y sube los archivos del software del foro.

![en-file](https://screensaver01.zap-hosting.com/index.php/s/x9oWpWCzrtB87e7/preview)

**Base de datos**

Luego, hay que crear la base de datos que almacenará toda la info del foro. Para eso, haz clic en **Sitios web y dominios** y luego en **Bases de datos**. Después pulsa en Añadir base de datos y crea una base de datos:

![en-db](https://screensaver01.zap-hosting.com/index.php/s/f3dwjM5qxQQpzd6/preview)

Haz clic en **OK** y la base de datos quedará creada.

**Servidor de correo (dirección de email)**

Para registrar una cuenta en el foro necesitas un servidor de correo con una dirección de email, para que los mails de registro puedan enviarse a los usuarios. Las instrucciones para configurar una dirección de email están aquí: [Enviar Emails](webspace-plesk-sendmail.md)

## Instalación

Si ya cumpliste todos los pasos de preparación, ahora puedes empezar con la instalación real de MyBB. Para eso, abre la web en tu navegador. Debería verse así:

![mybbinstall](https://screensaver01.zap-hosting.com/index.php/s/DzgRZMBFotTgsXZ/preview)

Aquí tienes que configurar las 9 categorías durante la instalación. La configuración comprobará que se cumplan todos los requisitos, configurará la base de datos y el software del foro, etc. Primero debes decidir si quieres enviar estadísticas anónimas a MyBB o no. Luego, aceptarás los términos de la licencia.

Después verás un resumen de los requisitos del sistema. Esto incluye versión de PHP, memoria, etc. El hosting web ya debería estar configurado para cumplir con todos estos requisitos por defecto.

![install2](https://screensaver01.zap-hosting.com/index.php/s/fTJQGRADn5SF62C/preview)

Si algún requisito no se cumple, contacta con soporte. Si todo está bien, haz clic en **Siguiente** para continuar. Ahora configura la base de datos que creaste antes. Debes rellenar los datos de la base de datos creada:

![](https://screensaver01.zap-hosting.com/index.php/s/GaRZiSizcYCMX3Z/preview)

La base de datos se configurará a continuación. Esto puede tardar un momento. Luego se importarán los datos y temas por defecto. Solo tienes que hacer clic en **Siguiente**.

Después llegamos a la configuración general. Aquí defines el nombre del sitio web, foro, URL y más:

![install3](https://screensaver01.zap-hosting.com/index.php/s/asEA4KqtZGaN65A/preview)

Por último, crea una cuenta de administrador general antes de finalizar la instalación.

![Install4](https://screensaver01.zap-hosting.com/index.php/s/3T6NMLYyMnb4pja/preview)

Si hiciste todo bien y la configuración fue exitosa, verás este mensaje y podrás acceder a tu foro:

![](https://screensaver01.zap-hosting.com/index.php/s/9N2jBCbzEYe2iyn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/g9iecMjiDX4GoqP/preview)

<InlineVoucher />