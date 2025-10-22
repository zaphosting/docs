---
id: spaceengineers-addmods
title: "Space Engineers : Installation des mods"
description: "Découvre comment configurer et ajouter des mods en toute sécurité sur ton serveur de jeux Space Engineers pour une expérience de jeu personnalisée → En savoir plus maintenant"
sidebar_label: Installer des mods
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Préparation

Pour pouvoir ajouter des mods sur un serveur, un fichier de config doit être modifié. Pour éviter tout problème lors de l’application des changements, assure-toi que ton serveur est arrêté avant !

Pour que la bonne config soit prise en compte par la suite, il faut d’abord connaître le nom de la sauvegarde. Si les réglages n’ont pas été modifiés, le nom par défaut est "zap001". Mais pour être sûr, vérifie comme expliqué maintenant :

Pour accéder aux paramètres de ton serveur, ouvre l’élément "Paramètres" dans la liste à gauche sous l’onglet "Paramètres"

![](https://screensaver01.zap-hosting.com/index.php/s/Begs32xtfWitRDA/preview)

Le nom de la sauvegarde peut être consulté ou modifié dans le premier champ de cette page. Ce nom doit être retenu pour pouvoir modifier le bon fichier de config plus tard.

![](https://screensaver01.zap-hosting.com/index.php/s/DHs7JGyxRMSfDKN/preview)

L’installation de **Notepad++** est aussi indispensable pour ce guide afin de suivre les étapes exactement comme indiqué !

## Choisir des mods

Beaucoup de mods sont dispo dans l’atelier de Space Engineers. Tu peux le trouver [ici](https://steamcommunity.com/workshop/about/?appid=244850).

Une fois un mod intéressant trouvé, clique dessus pour voir tous les détails. Si le mod te plaît, note maintenant son ID. L’ID du mod est généralement en gras sur le côté ou en haut dans la barre d’URL :

![](https://screensaver01.zap-hosting.com/index.php/s/k6WKbbZEizX7TpR/preview)

## Ouvrir les fichiers de config

Il y a deux façons d’éditer les fichiers d’un serveur. Soit via [l’accès FTP](gameserver-ftpaccess.md), soit via l’éditeur de config directement dans l’interface web.

Ici, on va modifier la config manuellement via FTP pour éviter les erreurs de syntaxe. Comment se connecter en FTP est expliqué en détail dans le guide lié plus haut.

Une fois connecté en FTP, rends-toi dans ce dossier :

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

Ce dossier liste toutes les sauvegardes jamais créées sur le serveur. Pour modifier la config de la sauvegarde voulue, ouvre le dossier correspondant. Dans notre exemple, c’est "zap001" :

![](https://screensaver01.zap-hosting.com/index.php/s/cLT8FLSnQE42ZwN/preview)

Le fichier sandbox doit être édité dans ce dossier. C’est précisément cette config qu’il faut ouvrir comme montré dans la capture !

![](https://screensaver01.zap-hosting.com/index.php/s/bKrCK6LcCMbkwbb/preview)

## Ajouter des mods

Il y a déjà une section mods dans la config, située à la fin du fichier. Sélectionne cette partie avec la souris et supprime-la. Ensuite, ajoute ce contenu :

`<Mods></Mods>`

Une fois collé, place le curseur entre "&gt;" & "&lt;" puis appuie une fois sur ENTER. Ça va automatiquement appliquer la bonne syntaxe et tu pourras continuer.

![](https://screensaver01.zap-hosting.com/index.php/s/JbTqfX455XbffRs/preview)

Ensuite, on ajoute le premier mod. Pour ça, on utilise un "ModItem" qui représente un mod. Copie ce contenu et colle-le dans la config comme dans le GIF :

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
		<PublishedServiceName>Steam</PublishedServiceName>
	</ModItem>
```

![](https://screensaver01.zap-hosting.com/index.php/s/FkgJmMTBAp8SLzp/preview)

:::info
Ici, remplace 12345 par l’ID du mod que tu as choisi !
:::

Comme on voit dans le GIF, il suffit de répéter ces étapes pour chaque mod à ajouter. Une fois tous les mods ajoutés, sauvegarde la config avec **CTRL+S** et ferme-la. Tu peux ensuite démarrer ton serveur normalement, les mods s’installeront automatiquement.

<InlineVoucher />