---
id: dedicated-linux-wine
title: "Serveur dédié : Configuration de la couche de compatibilité Wine sous Linux"
description: "Découvrez comment configurer Wine sur Linux pour faire tourner des serveurs de jeux Windows sans accroc sur Ubuntu et systèmes similaires → En savoir plus maintenant"
sidebar_label: Configuration de la couche de compatibilité Wine
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Wine est une couche de compatibilité open-source pour Linux qui permet de faire tourner des logiciels initialement développés pour Windows sur des systèmes Linux. C’est super important pour les serveurs de jeux dédiés qui ne proposent que des fichiers serveurs Windows et peut être nécessaire comme prérequis pour nos autres guides dédiés Linux. Dans ce guide, on va voir comment installer Wine sur ton serveur Linux pour la première fois. On utilise Ubuntu en exemple, mais la procédure est très similaire sur d’autres distributions.

## Préparation

Pour commencer, connecte-toi à ton serveur dédié via SSH. Si tu as besoin d’aide, consulte notre [guide d’accès initial SSH](vserver-linux-ssh.md).

## Installation de Wine

Commence par vérifier que le dossier `/etc/apt/keyrings/` existe, c’est indispensable pour Wine.
```
sudo mkdir -pm755 /etc/apt/keyrings
```

Ensuite, télécharge et stocke la clé GPG de Wine dans ce dossier pour vérifier l’authenticité du paquet.
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

Tu dois aussi sauvegarder la liste des sources pour WineHQ avec cette commande toute prête :
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

Lance la commande de mise à jour pour que les changements soient pris en compte.
```
sudo apt update
```

Maintenant, tu peux passer à l’étape principale : télécharger la dernière version de Wine. Ça peut prendre un peu de temps.
```
sudo apt install --install-recommends winehq-staging
```

Enfin, installe quelques paquets supplémentaires pour que Wine fonctionne bien avec ton serveur de jeux dédié en lançant cette commande.
```
sudo apt install cabextract winbind screen xvfb
```

## Conclusion

Tu as maintenant configuré avec succès la couche de compatibilité Wine, ce qui te permet de faire tourner des programmes Windows sur ton serveur Linux. Avec ce prérequis important en place, tu peux installer des serveurs de jeux dédiés même s’ils sont conçus pour Windows.

On te conseille de jeter un œil aux autres guides de cette section qui expliquent comment installer des jeux spécifiques via SteamCMD et potentiellement Wine pour les fichiers serveurs dédiés Windows.