---
id: over-the-top-wwi-configure-poll-system
title: "Over the Top WWI: Configura el Sistema de Votaciones"
description: "Aprende a configurar las opciones de votación y encuestas en tu servidor Over the Top WWI → Aprende más ahora"
sidebar_label: Sistema de Votaciones
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El sistema de votaciones en **Over the Top WWI** permite a los jugadores votar sobre diversas acciones como expulsar jugadores, cambiar mapas o modificar configuraciones de juego. Esta función mejora la interacción de la comunidad y reduce la necesidad de intervención constante del admin.

Al configurar las opciones de votación, puedes controlar qué tipos de votos están permitidos y cómo se comportan durante la partida.

<InlineVoucher />

## Configuración

El sistema de votaciones se configura dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
PollPercentThresh = 51
EnableBanPlayerPoll = 0
EnableKickPlayerPoll = 0
EnableChangeMapsPoll = 0
EnableMutePlayerPoll = 0
EnableCustomPoll = 1
ChangeMapImmediately = 1
```

- `PollPercentThresh` define el porcentaje de votos necesarios para que una votación sea aprobada
- `EnableBanPlayerPoll` permite a los jugadores votar para banear a otros
- `EnableKickPlayerPoll` permite a los jugadores votar para expulsar a otros
- `EnableChangeMapsPoll` permite a los jugadores votar para cambiar mapas
- `EnableMutePlayerPoll` permite a los jugadores votar para silenciar a otros
- `EnableCustomPoll` habilita opciones de votación personalizadas
- `ChangeMapImmediately` determina si un cambio de mapa aprobado se aplica de inmediato

Modos de juego permitidos para votaciones:

```
PollBattle = 1
PollTDM = 1
PollConquest = 1
PollSiege = 1
PollKingoftheHill = 1
PollConvoyAmbush = 1
PollCaptureTheFlag = 1
PollCommanderBattle = 1
```

Estas configuraciones definen qué modos de juego pueden ser seleccionados durante las votaciones.

- `1` → Habilitado
- `0` → Deshabilitado

Puedes desactivar modos específicos para limitar las opciones de votación y mantener una experiencia de juego consistente.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los ajustes actualizados de votación se aplicarán automáticamente.

## Conclusión

¡Felicidades! Has configurado con éxito el sistema de votaciones en tu **servidor Over the Top WWI**. Esto permite que los jugadores participen en la toma de decisiones y ayuda a automatizar la gestión del servidor.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂

<InlineVoucher />