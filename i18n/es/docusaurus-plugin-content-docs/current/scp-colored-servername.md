---
id: scp-colored-servername
title: "SCP Secret Laboratory: Nombre de Servidor en Color"
description: "Aprende a personalizar el nombre de tu servidor con texto en color para mejor visibilidad y estilo → Aprende más ahora"
sidebar_label: Nombre de Servidor en Color
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Para mostrar tu servidor en la lista pública de servidores es necesario configurar un ID de pastebin. Puedes encontrar nuestra guía [Pastebin ID](scp-pastebin.md).

El servidor debe estar apagado para que los cambios tengan efecto.
:::

<InlineVoucher />

Abre la configuración de tu servidor y verifica si 'SCP Servername' está vacío.

![](https://screensaver01.zap-hosting.com/index.php/s/Y9BXkJnBGXy3jWP/preview)

Cuando estés seguro de que no hay nada ingresado, navega a la pestaña 'Configs', que está un menú debajo de configuración.

Ahora abre el archivo config_gameplay.txt presionando el botón azul.

![](https://screensaver01.zap-hosting.com/index.php/s/FAm8KQfAonpTWp2/preview)

Nuestro editor de configuración está abierto, puedes modificar el nombre de tu servidor con "server_name" usando [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) para usar varios colores diferentes.

![](https://screensaver01.zap-hosting.com/index.php/s/jebLtwqZToWJ27C/preview)

En este ejemplo, quiero que "Green Text", "Blue Text" y "Red Text" se muestren en el color correspondiente.

Para eso, es necesario usar la etiqueta `<color="COLOR">Tu Texto</color>`, puedes ver todos los colores disponibles [aquí](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html). También es posible cambiar otros atributos, como el tamaño.
:::info
Es importante recordar que las comillas " " son obligatorias alrededor del color dentro de la etiqueta, como en el ejemplo anterior.
:::

Cuando termines con tu personalización, guárdala.

:::info
Inicia tu servidor, y ahora el nombre de tu servidor aparecerá en color.
:::

<InlineVoucher />