---
id: fivem-qbcore-spawnpoints
title: "FiveM : Gère et customise les points de spawn avec QbCore"
description: "Découvre comment personnaliser et ajouter des points de spawn dans le framework QBCore pour une expérience de jeu améliorée → En savoir plus maintenant"
sidebar_label: Points de spawn
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu veux changer les points de spawn par défaut ou en ajouter d’autres ? La gestion des points de spawn dans le **framework QBCore** se fait via la ressource `qb-spawn`. Voici comment tu peux les personnaliser. 

<InlineVoucher />

## Configuration

Les points de spawn se configurent via le fichier `config.lua` de la ressource `qb-spawn`. Tu peux modifier ce fichier via FTP. Si tu ne sais pas encore comment utiliser le FTP, on te conseille de jeter un œil au [guide FTP access](gameserver-ftpaccess.md). 

La config par défaut des points de spawn ressemble à ça : 

```
QB.Spawns = {
    ["legion"] = { -- Index pour le tableau
        coords = vector4(195.17, -933.77, 29.7, 144.5), -- Où le joueur spawn
        location = "legion", -- c’est comme ça que le javascript sait lequel tu as choisi
        label = "Legion Square", -- Ce que le joueur voit dans le menu
    },

    ["policedp"] = {
        coords = vector4(428.23, -984.28, 29.76, 3.5),
        location = "policedp",
        label = "Police Department",
    },

    ["paleto"] = {
        coords = vector4(80.35, 6424.12, 31.67, 45.5),
        location = "paleto",
        label = "Paleto Bay",
    },

    ["motel"] = {
        coords = vector4(327.56, -205.08, 53.08, 163.5),
        location = "motel",
        label = "Motels",
    },
```

Imaginons que tu veuilles ajouter plus de points de spawn, il te faudra ajouter un nouvel enregistrement dans le fichier de config : 

```
["new_spawn_name"] = { -- Doit être unique
    coords = vector4(1.1, -1.1, 1.1, 180.0), -- Coordonnées où le joueur spawn
    location = "new_spawn_name", -- Doit être unique
    label = "New spawn name", -- C’est le label qui apparaîtra dans le menu de sélection.
},
```

:::info Trouver les coordonnées
Il te faut une ressource adaptée pour récupérer les coordonnées actuelles. Tu en trouveras plusieurs sur Internet, choisis celle qui te convient le mieux. :)
:::

Le résultat final ressemblera donc à ça : 

```
    QB.Spawns = {
    
        ["legion"] = { -- Index pour le tableau
            coords = vector4(195.17, -933.77, 29.7, 144.5), -- Où le joueur spawn
            location = "legion", -- c’est comme ça que le javascript sait lequel tu as choisi
            label = "Legion Square", -- Ce que le joueur voit dans le menu
        },
    
        ["policedp"] = {
            coords = vector4(428.23, -984.28, 29.76, 3.5),
            location = "policedp",
            label = "Police Department",
        },
    
        ["paleto"] = {
            coords = vector4(80.35, 6424.12, 31.67, 45.5),
            location = "paleto",
            label = "Paleto Bay",
        },
    
        ["motel"] = {
            coords = vector4(327.56, -205.08, 53.08, 163.5),
            location = "motel",
            label = "Motels",
        },
        
        ["new_spawn_name"] = { -- Doit être unique
        coords = vector4(1.1, -1.1, 1.1, 180.0), -- Coordonnées où le joueur spawn
        location = "new_spawn_name", -- Doit être unique
        label = "New spawn name", -- C’est le label qui apparaîtra dans le menu de sélection.
         },
    }
```




## Conclusion

Tu as réussi à modifier les points de spawn existants ou à en ajouter de nouveaux grâce à cette méthode. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />