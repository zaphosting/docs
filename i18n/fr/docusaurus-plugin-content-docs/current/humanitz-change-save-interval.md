---
id: humanitz-change-save-interval
title: "HumanitZ : Modifier l’intervalle de sauvegarde"
description: "Apprends à ajuster l’intervalle de sauvegarde automatique du monde sur ton serveur HumanitZ → Découvre-le maintenant"
sidebar_label: "Modifier l’intervalle de sauvegarde"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

L’intervalle de sauvegarde détermine à quelle fréquence ton serveur HumanitZ sauvegarde automatiquement l’état du monde. Sauvegarder régulièrement aide à éviter la perte de données en cas de crash ou d’arrêt inattendu, tandis qu’un intervalle plus long peut légèrement réduire l’activité disque.

<InlineVoucher />

## Configuration

L’intervalle de sauvegarde du monde se règle dans le fichier `GameServerSettings.ini`. Tu peux accéder à ce fichier dans ton panneau de contrôle sous **Configs**. Dans ce fichier de config, trouve le paramètre suivant :

```
;The interval in seconds at which the server saves the world. Set to 0 to disable auto-saving.
SaveIntervalSec=300
```

- `SaveIntervalSec=300` – Le serveur sauvegarde le monde toutes les 300 secondes (5 minutes).  
- `SaveIntervalSec=0` – Désactive la sauvegarde automatique du monde.  

La valeur est définie en **secondes**. Par exemple :

- `600` = 10 minutes  
- `900` = 15 minutes  

Si tu veux augmenter l’intervalle à 10 minutes :

```
SaveIntervalSec=600
```

Après avoir modifié le fichier, sauvegarde tes changements et redémarre le serveur pour que la nouvelle configuration soit prise en compte.

## Conclusion

Bravo ! En modifiant la valeur `SaveIntervalSec` dans le fichier `GameServerSettings.ini`, tu as ajusté avec succès l’intervalle de sauvegarde automatique du monde sur ton serveur HumanitZ.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />