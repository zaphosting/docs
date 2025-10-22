---
id: ats-server-modding
title: "ATS : Installer des Mods/DLCs sur votre serveur ATS"
description: "Découvrez comment améliorer votre expérience American Truck Simulator avec des mods et DLCs pour le jeu client et serveur → En savoir plus maintenant"
sidebar_label: Installer Mods/DLCs
services:
  - gameserver-ats
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

American Truck Simulator supporte nativement le modding via le Steam Workshop intégré au jeu, ce qui vous permet d’ajouter une grande variété de mods à votre jeu et à votre serveur, en plus des DLCs achetés. Dans ce guide, on va voir comment installer des mods sur votre client puis sur votre serveur ATS.

<InlineVoucher />

## Ajouter des Mods & DLCs

Pour commencer, vous devez trouver et sélectionner les mods et DLCs que vous souhaitez utiliser. Vous pouvez le faire directement dans le jeu en accédant aux options **Gestionnaire de Mods** et **Navigateur de DLC** dans le menu principal.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

Vous pouvez accéder aux Mods via l’option **Gestionnaire de Mods** dans le menu principal, qui vous permet de trouver facilement des mods via le Steam Workshop.

Une fois que vous avez installé des mods, assurez-vous de les déplacer dans la liste **Mods Actifs** en utilisant les flèches à côté de chaque mod.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Enfin, confirmez les changements et lancez le jeu en mode solo.

### DLCs

Vous pouvez accéder aux DLCs que vous avez achetés sur votre compte via l’option **Navigateur de DLC** dans le menu principal.

Sur cette page, vous pouvez parcourir tous les DLCs que vous possédez et qui sont installés sur votre client.

## Exporter les Packages Serveur

Maintenant que vous avez activé les mods et êtes prêt en jeu, vous devez exporter vos mods sous forme de packages serveur. Pour cela, vous devez ouvrir la console en jeu, qui est désactivée par défaut.

Pour l’activer, rendez-vous dans le répertoire suivant et ouvrez le fichier `config.cfg` :
```
C:/Users/[votre_utilisateur]/Documents/American Truck Simulator
```

Dans ce fichier, trouvez la ligne `uset g_developer "0"` et remplacez-la par `uset g_developer "1"` pour activer. De même, trouvez la ligne `uset g_console "0"` et remplacez-la par `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

Redémarrez votre jeu, vous pourrez maintenant ouvrir la console avec l’une des touches suivantes selon la disposition de votre clavier :
```
` OU ~ OU \
```

Une fois prêt, tapez dans la console la commande suivante pour exporter les packages serveur :
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

Deux fichiers seront exportés dans votre dossier `Documents/American Truck Simulator`, les fichiers `server_packages.dat` et `server_packages.sii`, qui contiennent les infos sur les DLCs/mods et seront utilisés dans la section suivante.

## Upload des Packages Serveur

Maintenant que vos packages serveur pour les mods sont exportés, vous devez les uploader sur votre serveur ATS via FTP. Utilisez notre [guide d’Accès FTP](gameserver-ftpaccess.md) pour vous aider à vous connecter à votre serveur.

Une fois prêt, allez dans le répertoire racine principal **American Truck Simulator**. Uploadez les deux fichiers de packages serveur dans ce dossier. S’ils existent déjà, remplacez-les simplement.

![](https://screensaver01.zap-hosting.com/index.php/s/c5cYWL8eQKTzDg9/preview)

:::tip
Quand vous moddez, les mods doivent être synchronisés entre le client et le serveur. Ça veut dire que si vous vous connectez à un serveur avec des mods que vous n’avez pas, on vous proposera de télécharger les mods manquants.
:::

Enfin, redémarrez votre serveur pour activer et installer automatiquement les mods. Vous avez réussi à installer des mods sur votre serveur ATS.

<InlineVoucher />