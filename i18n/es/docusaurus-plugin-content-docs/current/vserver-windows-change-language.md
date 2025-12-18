---
id: vserver-windows-change-language
title: "VPS: Gestiona los Idiomas en Windows Server"
description: "Descubre cómo personalizar la configuración de idioma de tu servidor Windows para una experiencia localizada y mejorar la usabilidad → Aprende más ahora"
sidebar_label: Añadir y Gestionar Idiomas
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El sistema operativo Windows está localizado en una gran variedad de idiomas, permitiéndote usar fácilmente tu idioma nativo. En esta guía, cubriremos los métodos disponibles para cambiar el idioma de tu servidor Windows.

:::info
Durante la configuración inicial del servidor, puedes elegir entre versiones del servidor en inglés o alemán, las cuales están destacadas con las etiquetas **(EN)** y **(DE)** durante la selección de la versión del sistema operativo.
:::

<InlineVoucher />

## Añadiendo Paquetes de Idioma

Los paquetes de idioma son una función útil integrada en Windows que te permite gestionar fácilmente los paquetes de idioma localizados en tu servidor.

Comienza conectándote a tu servidor Windows vía RDP. Si necesitas ayuda con esto, consulta nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md).

Una vez conectado, busca **Idioma** en la barra de búsqueda de Windows o presionando la tecla/icono de Windows y usando la barra de búsqueda del menú inicio.

![](https://screensaver01.zap-hosting.com/index.php/s/iwnxdwsYHPy9AMP/preview)

En esta página, encuentra la sección de idiomas y pulsa el botón **Agregar un idioma**.

![](https://screensaver01.zap-hosting.com/index.php/s/EJxNz66LPBDiE9J/preview)

Usando el menú, busca el idioma que deseas instalar y selecciónalo pulsando **Siguiente**. En la página siguiente, asegúrate de que todas las opciones estén marcadas, incluyendo la opción **Establecer como idioma de visualización de Windows** si quieres activarlo de inmediato.

:::important
Para cambiar el idioma en todo el sistema operativo Windows, asegúrate de que el idioma seleccionado soporte la funcionalidad de **Idioma de visualización**.
:::

:::tip
Si no ves ningún idioma con el campo **Idioma de visualización**, instala las actualizaciones pendientes de Windows desde **Actualización y seguridad** en Configuración, lo que soluciona este [error](https://learn.microsoft.com/en-us/troubleshoot/windows-server/shell-experience/cannot-configure-language-pack-windows-server-desktop-experience).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ZENz49zaSmkLNER/preview)

Windows comenzará a descargar el paquete de idioma seleccionado. Ten paciencia, ya que esto puede tardar un rato.

Después de que la descarga termine, si no seleccionaste previamente la opción **Establecer como idioma de visualización de Windows** durante la descarga, vuelve a la página de idiomas y selecciónala en el menú desplegable.

![](https://screensaver01.zap-hosting.com/index.php/s/Ee3rMKzXTidr9Jk/preview)

Finalmente, reinicia tu servidor y el nuevo idioma estará activo. ¡Has gestionado con éxito los paquetes de idioma en tu servidor Windows!

## Reinstalando el Sistema Operativo del Servidor

Si tienes problemas para cambiar los paquetes de idioma o tu servidor es nuevo, puedes decidir reinstalar tu servidor Windows en inglés o alemán usando las versiones de sistema operativo disponibles.

:::warning
Reinstalar el sistema operativo es un proceso destructivo y **borrará** todos los datos en el servidor. Asegúrate de hacer una copia de seguridad de cualquier dato importante antes de continuar con este paso.
:::

Esto se puede hacer desde el panel web de tu servidor, yendo a la sección **Configuración**.

En esta página, podrás seleccionar entre **Windows (EN)** y **Windows (DE)** para el idioma respectivo y elegir reinstalar el servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/gxw8pKDr8sBBTHQ/preview)

Una vez que inicies la reinstalación, ten paciencia ya que puede tardar un tiempo (hasta 30 minutos) para que el servidor complete todo el proceso.

<InlineVoucher />