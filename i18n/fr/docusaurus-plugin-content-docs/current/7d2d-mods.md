---
id: 7d2d-mods
title: "7 Days to Die : Installation des mods"
description: "Découvre comment personnaliser ton serveur avec des mods populaires et améliorer le gameplay pour une expérience unique → En savoir plus maintenant"
sidebar_label: Installer des mods
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Avec les mods, tu as la possibilité de personnaliser encore plus ton serveur. Dans ce qui suit, on t’explique où trouver les mods serveur les plus populaires et comment les installer. Avec l’arrivée de l’Alpha 17 Experimental, le concept des modlets a été introduit. Les modlets sont des mods plus petits qui ne remplacent pas les fichiers XML vanilla, mais qui sont chargés depuis le dossier mods.

![](https://screensaver01.zap-hosting.com/index.php/s/McQLetfwmEMbo6N/preview)

<InlineVoucher />

## Préparation

La première chose à faire est de télécharger les mods que tu souhaites installer sur ton serveur. Tu peux trouver un large choix de mods sur [7daystodiemods.com](https://7daystodiemods.com/). Tu y trouveras plus de 1000 mods, et la liste s’agrandit régulièrement. Une fois que tu as téléchargé un mod, il devrait contenir la structure de fichiers suivante :

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```

## Installation

Une fois les mods désirés téléchargés, tu peux commencer l’installation proprement dite. La mise en place des mods se fait via FTP. Il te faut un client FTP pour pouvoir uploader les fichiers sur ton serveur. Si tu ne sais pas ce qu’est le FTP ni comment ça marche, jette un œil à ce guide : [Accès via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)

Dans le répertoire ``/gXXXXX4/7dtd-linux-exp/``, tu dois créer un dossier nommé **Mods**. Pour ça, fais un clic droit et clique sur **Créer un répertoire**.

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)

Ensuite, il faut uploader les fichiers du mod dans le dossier mods :

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)

L’installation du mod est alors terminée. La prochaine fois que tu démarres le serveur, les mods devraient se charger automatiquement.

<InlineVoucher />