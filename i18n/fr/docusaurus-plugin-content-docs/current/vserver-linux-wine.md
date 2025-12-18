---
id: vserver-linux-wine
title: "VPS : Configuration de Wine Compatibility Layer sous Linux"
description: "Découvrez comment configurer Wine sur Linux pour faire tourner des logiciels Windows et des serveurs de jeux sans accroc sur votre système → En savoir plus maintenant"
sidebar_label: Configuration de Wine Compatibility Layer
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Wine est une couche de compatibilité open-source pour Linux qui permet de faire tourner des logiciels initialement développés pour Windows sur des systèmes Linux. C’est super important pour les serveurs dédiés de jeux qui ne proposent que des fichiers serveurs Windows, et c’est souvent un prérequis pour nos autres guides dédiés aux serveurs Linux. Dans ce guide, on va voir comment installer Wine sur votre serveur Linux pour la première fois. On utilise Ubuntu en exemple, mais la procédure est très similaire sur d’autres distributions.

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS via SSH. Si vous avez besoin d’aide, consultez notre [guide d’accès SSH initial](vserver-linux-ssh.md).

## Installation de Wine

Commencez par vérifier que le dossier `/etc/apt/keyrings/` existe, c’est nécessaire pour Wine.
```
sudo mkdir -pm755 /etc/apt/keyrings
```

Ensuite, téléchargez et stockez la clé GPG de Wine dans ce dossier, elle sert à vérifier que le paquet est authentique.
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

Il faut aussi sauvegarder la liste des sources pour WineHQ, ce qui peut se faire avec cette commande toute prête :
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

Lancez la commande de mise à jour pour que vos changements de paquets soient pris en compte et installés.
```
sudo apt update
```

Maintenant, vous pouvez passer à l’étape principale : télécharger la dernière version de Wine. Ça peut prendre un peu de temps.
```
sudo apt install --install-recommends winehq-staging
```

Enfin, installez quelques paquets supplémentaires pour que Wine fonctionne bien avec les serveurs dédiés de jeux en lançant cette commande.
```
sudo apt install cabextract winbind screen xvfb
```

## Conclusion

Vous avez maintenant configuré avec succès la couche de compatibilité Wine, ce qui vous permet de faire tourner des programmes Windows sur votre serveur Linux. Avec ce prérequis important en place, vous pouvez maintenant installer des serveurs dédiés même s’ils sont conçus pour Windows.

On vous recommande de jeter un œil aux autres guides de cette section qui expliquent comment installer des jeux spécifiques via SteamCMD et potentiellement Wine pour les fichiers serveurs dédiés Windows.

<InlineVoucher />