---
id: humanitz-enable-disable-voice-chat
title: "HumanitZ : Activer ou Désactiver le Chat Vocal"
description: "Apprends comment activer ou désactiver le chat vocal sur ton serveur HumanitZ → Découvre-le maintenant"
sidebar_label: "Activer/Désactiver le Chat Vocal"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

La communication vocale peut vraiment changer l’ambiance sur un serveur HumanitZ. Activer le chat vocal permet aux joueurs de communiquer directement à proximité, ce qui booste l’immersion et la coopération. Le désactiver peut encourager l’utilisation de plateformes externes ou créer une expérience de survie plus calme et isolée.

Dans HumanitZ, le chat vocal se configure directement dans le fichier de configuration du serveur.

<InlineVoucher />

## Configuration

Les réglages du chat vocal se trouvent dans le fichier `GameServerSettings.ini`. Tu peux accéder à ce fichier depuis ton panneau de gestion du serveur, sous **Configs**. Dans ce fichier, cherche ce paramètre :

```
;When set to 1 or true voice chat will be enabled, set 0 or false to disable
Voip=true
```

Voici comment ça marche :

- `Voip=true` ou `Voip=1` – Active le chat vocal  
- `Voip=false` ou `Voip=0` – Désactive le chat vocal  

Pour changer le réglage du chat vocal, modifie simplement la valeur selon ton choix. Après avoir édité le fichier, sauvegarde tes modifications et redémarre le serveur pour que le changement soit pris en compte.

## Conclusion

Bravo ! En modifiant la valeur `Voip` dans le fichier `GameServerSettings.ini`, tu as activé ou désactivé avec succès le chat vocal sur ton serveur HumanitZ. Si tu as d’autres questions ou besoin d’aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />