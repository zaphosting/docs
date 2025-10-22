---
id: redm-change-servericon
title: "RedM : Changer l’icône dans la liste des serveurs"
description: "Découvrez comment personnaliser l’icône de votre serveur RedM avec une image PNG parfaite de 96x96 pour un look unique → En savoir plus maintenant"
sidebar_label: Changer l’icône du serveur
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu veux personnaliser ton serveur et mettre ta propre icône personnalisée ? C’est super simple ! Dans ce guide, tu vas apprendre comment préparer une image et la définir comme nouvelle icône personnalisée de ton serveur.

<InlineVoucher />

## Préparation
Pour définir une icône personnalisée sur ton serveur RedM, il faut d’abord préparer un fichier image de taille 96x96 pixels au format PNG (`.png`). On te conseille d’utiliser un logiciel de retouche d’image comme GIMP, ou simplement un outil en ligne pour redimensionner et convertir ton image existante. Une fois que ton image respecte ces critères, tu es prêt à la téléverser et la configurer sur ton serveur.

## Installation

### Téléversement des fichiers

L’étape suivante est de téléverser ton image prête sur ton serveur de jeux RedM, via FTP. Si tu ne connais pas encore FTP, on te recommande de jeter un œil à notre [guide d’accès FTP](gameserver-ftpaccess.md).

Une fois connecté en FTP, va dans `gXXXXXX/redm-txadmin/YOUR_FRAMEWORK/` et téléverse ton fichier icône serveur ici. L’exemple utilise le template par défaut CFX. Téléverse le fichier dans ton propre dossier framework. Pense bien à retenir le nom du fichier.

![img](https://screensaver01.zap-hosting.com/index.php/s/XyxtsR2FbmjD6SM/download)

### Activation

Pour que l’icône soit chargée au démarrage du serveur, il faut maintenant la définir dans le fichier `server.cfg` de ton serveur, sous le paramètre `load_server_icon`. Par exemple, si ton icône s’appelle `zaphosting96x96`, la commande sera :

```
# Chargement d’une icône serveur (fichier PNG 96x96)
load_server_icon zaphosting96x96.png
```

:::info
Assure-toi que le nom du fichier image dans la commande correspond exactement à celui que tu as téléversé, y compris la casse (majuscules/minuscules).
:::

## Conclusion

Si tu as suivi toutes les étapes, ta nouvelle icône serveur s’affichera au prochain redémarrage du serveur. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />