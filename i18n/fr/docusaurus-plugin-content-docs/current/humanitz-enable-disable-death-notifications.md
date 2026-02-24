---
id: humanitz-enable-disable-death-notifications
title: "HumanitZ : Activer/Désactiver les notifications de mort"
description: "Apprends à activer ou désactiver les notifications de mort des joueurs sur ton serveur HumanitZ → Découvre-le maintenant"
sidebar_label: "Activer/Désactiver les notifications de mort"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

Les notifications de mort informent les joueurs lorsqu’un joueur meurt sur le serveur. Ça peut être utile pour suivre l’activité, mais certains serveurs préfèrent une expérience plus immersive ou compétitive sans messages publics de mort.

HumanitZ te permet d’activer ou désactiver ces notifications directement via le fichier de configuration du serveur.

<InlineVoucher />

## Configuration

Les paramètres des notifications de mort se gèrent dans le fichier `GameServerSettings.ini`. Tu peux accéder à ce fichier dans ton panneau de gestion sous **Configs**.  
Dans le fichier de config, trouve ce paramètre :

```
;If set to true notification about dead players will be disabled. Admins will still be able to see them.
NoDeathFeedback=true
```

- `NoDeathFeedback=true` – Désactive les notifications de mort pour les joueurs classiques. Les admins les verront toujours.  
- `NoDeathFeedback=false` – Active les notifications de mort pour tous les joueurs.

Si tu veux que les notifications de mort soient visibles par tout le monde, mets la valeur suivante :

```
NoDeathFeedback=false
```

Après avoir modifié le fichier, sauvegarde tes changements et redémarre le serveur pour que la nouvelle configuration soit prise en compte.

## Conclusion

Bravo ! En modifiant la valeur `NoDeathFeedback` dans le fichier `GameServerSettings.ini`, tu as configuré avec succès les notifications de mort sur ton serveur HumanitZ. Pour toute question ou aide, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />