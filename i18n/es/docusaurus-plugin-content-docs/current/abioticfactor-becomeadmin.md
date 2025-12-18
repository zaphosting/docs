---
id: abioticfactor-becomeadmin
title: "Abiotic Factor: Cómo ser admin"
description: "Descubre cómo otorgar derechos de admin a jugadores para tener control total del servidor y mejorar la gestión del juego → Aprende más ahora"
sidebar_label: Cómo ser admin
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En **Abiotic Factor**, los administradores del servidor necesitan permisos elevados para gestionar jugadores, ejecutar comandos del servidor o modificar configuraciones durante el juego.

<InlineVoucher />

## Configuración

La configuración se realiza a través del archivo `admin.ini`. Para acceder a él, abre la sección **Configs** en la administración del servidor de juegos y localiza el `admin.ini`. Por defecto, el archivo debería contener la siguiente entrada, donde se pueden definir los administradores. Reemplaza los valores `ExampleID` con el **SteamID64** correspondiente de los jugadores a quienes quieres otorgar derechos de admin.

```
[Moderators]
Moderator=ExampleID1
Moderator=ExampleID2
```

## Conclusión

Una vez que la información esté correctamente añadida y el servidor reiniciado, el jugador especificado tendrá acceso completo de admin dentro del juego. Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂


<InlineVoucher />