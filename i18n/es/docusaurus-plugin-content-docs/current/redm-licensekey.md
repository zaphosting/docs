---
id: redm-licensekey
title: "RedM: Añadir Clave de Licencia Personalizada"
description: "Descubre cómo crear y gestionar tu propia clave de licencia RedM para desbloquear beneficios de suscripción y personalizar la configuración de tu servidor → Aprende más ahora"
sidebar_label: Clave de Licencia Propia
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Por defecto, tu servidor de juegos RedM viene con una clave de licencia generada automáticamente. Ajustar esto y usar tu propia clave de licencia RedM puede ser beneficioso por varias razones, incluyendo acceder a los beneficios de tu suscripción al RedM Element Club como Onesync, cambiar el propietario del servidor a tu nombre y mucho más. En esta guía, cubriremos el proceso para crear y añadir tu propia clave de licencia a tu servidor de juegos RedM.

<InlineVoucher />

## Preparación

Para comenzar con el proceso de creación de la clave, debes dirigirte al sitio oficial del **[Portal Cfx.re](https://portal.cfx.re/)** e iniciar sesión con tu cuenta del foro Cfx.re. Si aún no tienes una cuenta, puedes seleccionar la opción de registro para crear una nueva.

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info Nuevo Portal Cfx.re
El Portal Cfx.re es el nuevo hogar para todo lo relacionado con RedM, reemplazando las antiguas soluciones de RedM Keymaster y Patreon. En este nuevo portal, ahora puedes gestionar las claves de licencia de tu servidor, acceder a cualquier recurso que hayas comprado y administrar tu suscripción RedM, todo en un solo lugar.

Te recomendamos mucho leer el [post oficial del blog](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/) para obtener información sobre cómo migrar suscripciones de Patreon al nuevo Portal Cfx.re y mantener tus beneficios.
:::

## Generar Clave de Licencia

Una vez dentro del portal, navega a la sección **Servers** desde la barra de navegación superior para acceder al área principal de gestión de claves. Esto reemplaza el antiguo sitio RedM Keymaster en un portal todo en uno. También puedes refrescar cualquier clave de licencia usando la opción **Re-Activate** en esta página.

Selecciona el botón **Generate Key** para abrir el cuadro de registro.

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

En el cuadro, introduce un nombre útil para la clave que te ayude a identificarla fácilmente en el futuro. Selecciona el botón generar cuando estés listo.

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

Ahora deberías ver una nueva entrada en la tabla con la clave que acabas de generar. Copia la clave usando los botones de acción a la derecha y tenla lista para la siguiente sección.

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## Añadir la Clave al Servidor

Con la clave de licencia ya preparada, ahora tendrás que ajustar la clave de licencia existente en tu servidor de juegos RedM y reemplazarla con la clave recién creada. Para hacer esto, debes acceder al panel txAdmin de tu servidor de juegos RedM. Esto lo encontrarás en el panel web de tu servidor de juegos. Usa las credenciales que aparecen en la página para iniciar sesión en el panel.

Una vez dentro de la interfaz txAdmin, navega al **Editor CFG** en el menú lateral izquierdo para acceder al archivo `server.cfg`. En el editor, busca la línea con el parámetro `sv_licensekey` y edítala con tu clave de licencia personalizada. Presiona el botón guardar cuando termines para aplicar los cambios.

![img](https://screensaver01.zap-hosting.com/index.php/s/KKQ8aRBKo9246yR/preview)

## Conclusión

Después de configurar la clave de licencia personalizada, reinicia tu servidor para empezar a usarla. ¡Has añadido con éxito una clave de licencia personalizada a tu servidor de juegos RedM! Para cualquier pregunta o ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte. 🙂

<InlineVoucher />