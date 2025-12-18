---
id: fivem-change-servericon
title: "FiveM : Changer l’icône dans la liste des serveurs"
description: "Découvrez comment personnaliser votre serveur FiveM avec une icône PNG unique de 96x96 pour renforcer l’identité de votre serveur → Apprenez-en plus maintenant"
sidebar_label: Changer l’icône du serveur
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu veux personnaliser ton serveur et mettre ta propre icône personnalisée ? C’est super simple ! Dans ce guide, tu vas apprendre à préparer une image et à la définir comme nouvelle icône personnalisée de ton serveur.

<InlineVoucher />

## Préparation
Pour définir une icône personnalisée sur ton serveur FiveM, il faut d’abord préparer une image au format PNG (`.png`) de 96x96 pixels. On te conseille d’utiliser un logiciel de retouche d’image comme GIMP, ou simplement un outil en ligne pour redimensionner et convertir ton image existante. Une fois que ton image respecte ces critères, tu es prêt à la téléverser et à la configurer sur ton serveur.

## Installation

### Téléversement des fichiers

L’étape suivante est de téléverser ton image prête sur ton serveur de jeux FiveM via FTP. Si tu ne connais pas encore FTP, on te recommande de jeter un œil à notre [guide d’accès FTP](gameserver-ftpaccess.md).

Une fois connecté en FTP, rends-toi dans `gXXXXXX/fivem/YOUR_FRAMEWORK/` et téléverse ton fichier icône serveur ici. L’exemple utilise le template par défaut CFX. Téléverse le fichier dans ton propre dossier framework. N’oublie pas le nom exact du fichier.

![img](https://screensaver01.zap-hosting.com/index.php/s/BffobqB7CmdK2Wb/download)

### Activation

Pour que l’icône soit chargée au démarrage du serveur, il faut maintenant la définir dans le fichier `server.cfg` de ton serveur, sous le paramètre `load_server_icon`. Par exemple, si ton icône s’appelle `zaphosting96x96`, la commande sera :

```
# Chargement d’une icône serveur (fichier PNG 96x96)
load_server_icon zaphosting96x96.png
```

:::info
Assure-toi que le nom du fichier image dans la commande correspond exactement à celui que tu as téléversé, y compris la casse.
:::

## Conclusion

Si tu as suivi toutes les étapes, ta nouvelle icône serveur s’affichera au prochain redémarrage du serveur. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />