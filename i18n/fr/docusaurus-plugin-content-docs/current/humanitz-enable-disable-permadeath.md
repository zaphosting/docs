---
id: humanitz-enable-disable-permadeath
title: "HumanitZ : Activer/Désactiver la Mort Permanente"
description: "Apprends comment activer ou désactiver la mort permanente sur ton serveur HumanitZ → Découvre-le maintenant"
sidebar_label: "Activer/Désactiver la Mort Permanente"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

La mort permanente augmente considérablement la difficulté et la tension du gameplay survie dans HumanitZ. Lorsqu’elle est activée, les joueurs perdent définitivement leur personnage à leur mort et doivent en créer un nouveau. Ce réglage est souvent utilisé sur les serveurs hardcore ou à risque élevé.

<InlineVoucher />

## Configuration

La mort permanente se gère dans le fichier `GameServerSettings.ini`. Tu peux accéder à ce fichier depuis ton panneau de contrôle serveur, dans la section **Configs**. Dans ce fichier de config, trouve le paramètre suivant :

```
;When set to true the player that died will lose their character and have to create a new one
PermaDeath=false
```

- `PermaDeath=true` – Active la mort permanente. Les joueurs perdent définitivement leur personnage à la mort.  
- `PermaDeath=false` – Désactive la mort permanente. Les joueurs peuvent respawn avec leur personnage existant.

Si tu veux activer la mort permanente, change la valeur en :

```
PermaDeath=true
```

Après avoir modifié le fichier, sauvegarde tes changements et redémarre le serveur pour que le nouveau réglage soit pris en compte.

## Conclusion

Félicitations ! En modifiant la valeur `PermaDeath` dans le `GameServerSettings.ini`, tu as activé ou désactivé la mort permanente sur ton serveur HumanitZ. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂 

<InlineVoucher />