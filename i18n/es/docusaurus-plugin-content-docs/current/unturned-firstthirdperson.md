---
id: unturned-firstthirdperson
title: "Unturned: Configura la perspectiva 1ª/3ª persona para tu servidor"
description: "Descubre cómo personalizar la perspectiva de los jugadores en tu servidor de Unturned entre primera persona, tercera persona o ambas para una experiencia de juego mejorada → Aprende más ahora"
sidebar_label: 1ª/3ª Persona
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Perspectiva 1ª / 3ª persona

Unturned te permite cambiar la perspectiva en el servidor. Puedes elegir entre la perspectiva en primera persona y tercera persona. Por defecto, el juego se juega en primera persona. Sin embargo, desde la versión 3.9.9.0, esto también se puede modificar. A continuación te explicamos cómo cambiarlo para tu servidor.



## Configuración

El cambio se realiza en el archivo de configuración **Commands.dat**. Este se encuentra en el **panel web bajo Configs**. Dependiendo de la perspectiva que quieras establecer, debes añadir el siguiente comando en la configuración:

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)



### Perspectiva en 1ª persona (por defecto):

Esta opción ya está activa por defecto, aunque el comando no esté añadido en la configuración. De todas formas, para que quede claro, puedes añadir este comando sin problema. El comando para esta opción sería:

```
perspective first
```



### Perspectiva en 3ª persona:

Si prefieres usar la perspectiva en tercera persona en lugar de la primera, también puedes configurarlo. El comando para esta opción sería:

```
perspective third
```



### Ambas perspectivas:

También puedes usar ambas perspectivas juntas. En este caso, solo tienes que ajustar el valor del comando. El comando para esta opción sería:

```
perspective both
```



La próxima vez que inicies tu servidor, la opción que hayas elegido estará activada.

<InlineVoucher />