---
id: fivem-server-customisation
title: "FiveM: Personaliza los detalles del servidor"
description: "Descubre cómo personalizar el nombre de tu servidor con colores y emojis para que destaque en la lista de servidores → Aprende más ahora"
sidebar_label: Personaliza los detalles del servidor
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Quieres personalizar tu servidor para mostrar información personalizada en la lista de servidores? ¡Es muy fácil! En esta guía aprenderás a configurar diferentes personalizaciones disponibles para que tu servidor destaque en la lista de servidores.



<InlineVoucher />



## Nombre personalizado del servidor

### Códigos de color

Hay varios colores que puedes añadir al nombre de tu servidor. Estos se especifican usando un prefijo cuando quieres cambiar el color. La lista de colores disponibles la puedes ver en la tabla a continuación.

:::info
Para usar colores en el nombre de tu servidor, debes tener una [suscripción válida de Cfx.re](https://portal.cfx.re/subscriptions) que incluya este beneficio. Si la tienes y aún no funciona, asegúrate de haber configurado una [clave de licencia propia](fivem-licensekey.md).
:::

Ahora puedes cambiar el nombre de tu servidor abriendo el Editor CFG en txAdmin, buscando `sv_hostname` y personalizándolo a tu gusto. Aquí tienes un ejemplo del uso de colores y el resultado:
```
sv_hostname "^2ZAP-Hosting ^0| ^4Servidor Oficial de la Comunidad ^0- ^1Eventos próximamente ^8pronto^1!"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)



| Código | Color       | Código Hex |
| ------ | ----------- | ---------- |
| ^0     | Blanco      | #F0F0F0    |
| ^1     | Rojo        | #F44336    |
| ^2     | Verde       | #4CAF50    |
| ^3     | Amarillo    | #FFEB3B    |
| ^4     | Azul        | #42A5F5    |
| ^5     | Azul Claro  | #03A9F4    |
| ^6     | Morado      | #9C27B0    |
| ^7     | Blanco      | #F0F0F0    |
| ^8     | Naranja     | #FF5722    |
| ^9     | Gris        | #9E9E9E    |

### Emojis

FiveM también te permite poner emojis directamente en el nombre de tu servidor. Simplemente coloca los emojis que quieras en el parámetro `sv_hostname` dentro de la configuración de tu servidor y funcionará. No necesitas una suscripción de Cfx.re para esto.



## Configurar detalles del proyecto

### Descripción del servidor

Configurar una descripción del servidor es útil para dar una vista rápida y directa de tu servidor. Puedes poner una pequeña descripción para tu servidor de juegos FiveM, que se mostrará junto al nombre de tu servidor en la lista. Aquí tienes un ejemplo de cómo poner una descripción y el resultado que genera:

```
sets sv_projectDesc "¡Únete a nuestro Discord para estar al día con los últimos eventos! discord.gg/zaphosting"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

### Etiquetas del servidor

Configurar etiquetas para el servidor ayuda a definir de qué va tu servidor y permite que jugadores potenciales lo encuentren al filtrar servidores según sus gustos. Una vez que configures etiquetas, estas serán visibles en la página de la lista de servidores y también se usarán para filtrar tu servidor. Aquí tienes un ejemplo de cómo poner etiquetas y el resultado que genera:

```
sets tags "zap, zap-hosting, oficial, comunidad, zap-comunidad, servidor-zap-comunidad"
```

![](https://screensaver01.zap-hosting.com/index.php/s/oS2Y3dbPZDFDJPj/preview)

### Otros detalles varios

También puedes cambiar algunos detalles varios del servidor a tu gusto.

#### Tipo de juego

Configurar el parámetro gametype cambia lo que se muestra en la página de la lista de servidores. Esto **no** cambia el modo de juego en el servidor en sí. Puedes cambiar el gametype desde el panel web de tu servidor de juegos, o configurando una etiqueta:

```
sets gametype "Freeroam"
```

#### Idioma

Por último, puedes cambiar el idioma de tu servidor que se muestra en la página de la lista de servidores. Tenemos una [guía de Idioma / ubicación (bandera)](fivem-locale.md) para configurar la localización. Esto se puede hacer desde el panel web de tu servidor de juegos, o configurando una etiqueta:

```
sets locale "en-GB"
```

Puedes obtener una lista de todos los códigos de localización viendo [este recurso](https://github.com/TiagoDanin/Locale-Codes#locale-list) o algo similar.



## Conclusión

Si has seguido todos los pasos, ya has personalizado con éxito tu servidor de juegos FiveM. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />