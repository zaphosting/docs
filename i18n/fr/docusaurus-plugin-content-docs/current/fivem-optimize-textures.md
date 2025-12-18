---
id: fivem-optimize-textures
title: "FiveM : Optimise les textures"
description: "Découvre comment optimiser les textures des mods GTA5 pour réduire leur taille et améliorer les performances du jeu → En savoir plus maintenant"
sidebar_label: Optimiser les textures
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu veux optimiser les textures de ton mod GTA5 et réduire leur taille sans perdre en qualité ? Dans ce guide, on te montre comment compresser efficacement les textures à moins de 16 Mo. Avec quelques étapes simples et les bons outils, tu peux booster les performances de ton jeu et économiser de l’espace de stockage. Ça aide aussi à éviter des problèmes comme :

```
Asset hevo/hevo.ytd utilise 166.0 MiB de mémoire physique. Des assets trop volumineux peuvent causer des soucis de streaming (modèles qui ne chargent pas/s’affichent pas, connus sous le nom de 'perte de texture', 'bug de la ville' ou 'streaming pas top').
```

<InlineVoucher />


## Préparation

Avant de commencer, assure-toi d’avoir téléchargé et installé les outils nécessaires. Télécharge **OpenIV** et **XnResize** depuis leurs sites officiels et suis les instructions d’installation. Ces outils te serviront à éditer les textures :

- **OpenIV**  [(Télécharger)](https://openiv.com/)
- **XnResize** [(Télécharger)](https://www.xnview.com/en/xnresize/#downloads)



## Configuration
Une fois les outils installés, tu peux commencer à éditer les textures. Trouve le fichier .ytd de ton mod dans OpenIV et ouvre-le pour accéder aux textures.

![OpenIV Texture Dictionary](https://screensaver01.zap-hosting.com/index.php/s/K879XfYoR4sqN6d/preview) 

Dans OpenIV, tu trouveras l’option "Export all textures" en bas à gauche. Clique dessus pour exporter toutes les textures de ton mod. Sauvegarde-les dans un dossier à l’intérieur de ton répertoire de mod véhicule, par exemple sous "textures". 



## Optimisation

Maintenant que tu as exporté toutes les textures, il est temps de les éditer et de les redimensionner. Lance XnResize sur ton PC. Glisse tous les fichiers .dds exportés dans la fenêtre de XnResize. Tu devrais voir toutes tes textures dans l’application. Dans l’onglet "Action" de XnResize, choisis largeur et hauteur en pourcentage et réduis la taille des textures à 50% de leur taille originale. Pense bien à garder le ratio.

![XnResize Action Tab](https://screensaver01.zap-hosting.com/index.php/s/sQMq7goPYDb89cM/preview)



Dans l’onglet "Output", sélectionne un dossier cible pour les textures modifiées, par exemple "textures_resized", et choisis le format DDS - Direct Draw Surface.

![XnResize Output Tab](https://screensaver01.zap-hosting.com/index.php/s/Do927b2WQsYTszN/preview)



## Conclusion
Après avoir édité toutes les textures et ajusté leur taille, remplace les anciennes textures de ton mod par les nouvelles versions compressées. Tu verras que la taille des textures compressées est bien plus faible, ce qui économise de l’espace de stockage et améliore les performances de ton jeu.

| **Description**            | **Dictionnaire de textures original** | Dictionnaire de textures compressé | X Fois mieux      |
| :-------------------------- | :------------------------------------ | :-------------------------------- | :---------------- |
| **Taille compressée**       | 11,8 Mo                              | 1,23 Mo                           | 9,6x              |
| **Taille non compressée**   | 164 Mo                              | 11 Mo                            | 14,9x             |
| **Mémoire virtuelle**       | 0,05 MiB                           | 0,05 MiB                         | -                 |
| **Mémoire physique**        | 166,00 MiB                        | 10,69 MiB                        | 15,5x             |

N’oublie pas de tester les textures en jeu. Si tu rencontres des soucis, tu peux toujours remettre certaines textures à leur taille originale ou utiliser les fichiers .dds d’origine.

<InlineVoucher />