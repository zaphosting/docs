---
id: fivem-esx-spawnpoints
title: "FiveM : Gère et personnalise les points de spawn avec ESX"
description: "Découvre comment personnaliser et étendre les points de spawn dans le framework ESX pour une expérience de jeu améliorée → En savoir plus maintenant"
sidebar_label: Points de spawn
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu veux changer les points de spawn par défaut ou en ajouter d’autres ? La gestion des points de spawn dans le **framework ESX** est définie dans `es_extended`. Voici comment tu peux les personnaliser. 

<InlineVoucher />

## Configuration

Les points de spawn se configurent via le fichier `main.lua` dans `es_extended` (../es_extended/shared/config/). Tu peux modifier ce fichier via FTP. Si tu ne sais pas encore comment utiliser le FTP, on te conseille de jeter un œil au [guide accès FTP](gameserver-ftpaccess.md). 

La config par défaut des points de spawn ressemble à ça : 

```
Config.DefaultSpawns = { -- Si tu veux plus de positions de spawn et les sélectionner aléatoirement, décommente le code commenté ou ajoute d’autres emplacements
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
}
```

Imaginons que tu veuilles ajouter plus de points de spawn, il te suffit d’ajouter une nouvelle entrée dans le fichier de config : 

```
Config.DefaultSpawns = { -- Si tu veux plus de positions de spawn et les sélectionner aléatoirement, décommente le code commenté ou ajoute d’autres emplacements
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
    --{x = 766.5239, y = -112.0400, z = 30.2922, heading = 1.0} // NOUVEAU SPAWN 
}
```

:::info Trouver les coordonnées
Il te faut une ressource adaptée pour récupérer les coordonnées actuelles. Tu en trouveras plusieurs sur Internet, à toi de choisir celle qui te convient le mieux. :)
:::




## Conclusion

Tu as réussi à modifier les points de spawn existants ou à en ajouter de nouveaux grâce à cette méthode. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />