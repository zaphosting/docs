---
id: dedicated-linux-openvpn
title: "Serveur dédié : Installation d’OpenVPN"
description: "Découvrez comment sécuriser votre connexion internet et accéder à du contenu restreint grâce à OpenVPN sur serveurs Linux → En savoir plus maintenant"
sidebar_label: Installer OpenVPN
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

OpenVPN est un logiciel VPN puissant et polyvalent qui permet une connexion sécurisée sur Internet. C’est une solution open source qui offre une technologie VPN robuste et configurable pour établir une connexion chiffrée entre votre appareil et un serveur VPN. En utilisant OpenVPN, les utilisateurs peuvent sécuriser leur connexion internet, protéger leur vie privée en ligne et accéder à du contenu géo-restreint où qu’ils soient dans le monde. Dans ce guide, nous allons explorer le processus d’installation et de configuration du service **OpenVPN** sur un serveur Linux.

## Préparation

Tout d’abord, le pilote réseau **TUN** doit être activé. Cette étape n’est pas nécessaire pour les serveurs root.  
Pour cela, vous devez créer un nouveau fichier appelé **tunscript.sh** dans le dossier **/usr/sbin**.

```
nano /usr/sbin/tunscript.sh 
```

Insérez ensuite les lignes suivantes :
```
#!/bin/bash
mkdir /dev/net
mknod /dev/net/tun c 10 200
chmod 0666 /dev/net/tun
```

Sauvegardez le fichier en appuyant sur `CTRL+O`, puis `Y` et enfin `Entrée`. Pour quitter le fichier, appuyez sur `CTRL+X`. Ensuite, lancez la commande suivante :

```
chmod +x /usr/sbin/tunscript.sh
```

Une fois cela fait, lancez ``crontab -e`` et sélectionnez l’**éditeur nano** [1]. Ajoutez cette ligne à la fin du fichier :  
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

Sauvegardez le fichier en appuyant sur `CTRL+O`, puis `Y` et enfin `Entrée`. Pour quitter, appuyez sur `CTRL+X`. Vous devriez alors pouvoir continuer après un redémarrage.

## Installation

Pour installer OpenVPN, exécutez la commande suivante dans la console :  
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Un dialogue apparaît alors pour vous demander si vous souhaitez utiliser UDP ou TCP. Nous recommandons UDP, donc tapez `1` et appuyez sur `Entrée`. Ensuite, il vous sera demandé un port pour OpenVPN, nous recommandons d’utiliser le port par défaut.

Ensuite, vous devez configurer le serveur DNS. Nous recommandons d’utiliser soit Google Public DNS, soit Cloudflare DNS :  
```
8.8.8.8 / 8.8.4.4 - Google Public DNS
1.1.1.1 / 1.0.0.1 - Cloudflare DNS
```

Après cette étape, vous devez définir un nom client. Vous pouvez choisir n’importe quel nom, par exemple le nom de votre appareil.

## Configuration

### Ajouter plusieurs clients

Si vous souhaitez créer plusieurs connexions, il est utile de créer plusieurs comptes. Pour créer un autre compte, exécutez la commande suivante :  
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Sélectionnez `1` puis confirmez. Vous devrez ensuite définir le nom du client.

### Supprimer des clients

Pour supprimer un client, lancez la commande suivante :  
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Sélectionnez le numéro du client dans votre liste que vous souhaitez supprimer. Puis appuyez sur `Entrée`. Vous serez invité à confirmer la suppression. Si vous êtes sûr, appuyez sur `Y` puis sur `Entrée`.  
Le client devrait alors être supprimé.

## Désinstallation

Si vous n’avez plus besoin d’OpenVPN, vous pouvez le désinstaller ainsi :  
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
Appuyez sur `3` et confirmez. Confirmez une nouvelle fois et OpenVPN sera désinstallé.

## Connexion au VPN

Pour vous connecter à votre VPN, nous recommandons d’utiliser le **[client OpenVPN](https://openvpn.net/community-downloads/)**. Téléchargez-le simplement sur l’appareil depuis lequel vous souhaitez vous connecter.

Connectez-vous en SFTP à votre serveur pour télécharger le fichier .ovpn créé, puis supprimez ce fichier de votre serveur ensuite. Une fois le client installé, lancez le programme. Faites un clic droit sur l’icône OpenVPN dans la barre des tâches. Cliquez ensuite sur « Importer un fichier » et sélectionnez le fichier que vous avez téléchargé, puis cliquez sur « Ouvrir ». Pour vous connecter, cliquez de nouveau sur l’icône et sélectionnez « Connecter ».

:::info
Si vous avez importé plusieurs fichiers, vous devez sélectionner le client que vous souhaitez utiliser, puis cliquer sur Connecter.
:::