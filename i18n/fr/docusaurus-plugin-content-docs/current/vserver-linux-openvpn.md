---
id: vserver-linux-openvpn
title: "VPS : Installation d’OpenVPN"
description: "Découvre comment sécuriser ta connexion internet et accéder à du contenu restreint avec OpenVPN sur serveurs Linux → En savoir plus maintenant"
sidebar_label: Installer OpenVPN
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

OpenVPN est un logiciel VPN puissant et polyvalent qui permet une connexion sécurisée via Internet. C’est une solution open source qui offre une technologie VPN robuste et configurable pour établir une connexion chiffrée entre ton appareil et un serveur VPN. En utilisant OpenVPN, tu peux sécuriser ta connexion internet, protéger ta vie privée en ligne et accéder à du contenu géo-restreint peu importe où tu te trouves dans le monde. Dans ce guide, on va explorer le processus d’installation et de configuration du service **OpenVPN** sur un serveur Linux.

<InlineVoucher />

## Préparation

Tout d’abord, le pilote réseau **TUN** doit être activé. Cette étape n’est pas nécessaire pour les serveurs root.
Pour cela, tu dois créer un nouveau fichier appelé **tunscript.sh** dans le dossier **/usr/sbin**.

```
nano /usr/sbin/tunscript.sh 
```

Insère ensuite les lignes suivantes :
```
#!/bin/bash
mkdir /dev/net
mknod /dev/net/tun c 10 200
chmod 0666 /dev/net/tun
```

Sauvegarde le fichier en appuyant sur `CTRL+O`, puis `Y` et enfin `Entrée`. Pour quitter le fichier, appuie sur `CTRL+X`. Ensuite, lance la commande suivante :

```
chmod +x /usr/sbin/tunscript.sh
```

Une fois fait, lance ``crontab -e`` et choisis l’**éditeur nano** [1]. Ajoute cette ligne à la fin du fichier :
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

Sauvegarde en appuyant sur `CTRL+O`, puis `Y` et enfin `Entrée`. Pour quitter, appuie sur `CTRL+X`. Tu devrais pouvoir continuer après un redémarrage.

## Installation

Pour installer OpenVPN, exécute la commande suivante dans la console :
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Un dialogue apparaît alors pour te demander si tu veux utiliser UDP ou TCP. On recommande UDP, donc tape `1` et appuie sur `Entrée`. Ensuite, on te demandera un port pour OpenVPN, on recommande d’utiliser le port par défaut.

Ensuite, tu dois configurer le serveur DNS. On recommande d’utiliser soit Google Public DNS soit Cloudflare DNS :
```
8.8.8.8 / 8.8.4.4 - Google Public DNS
1.1.1.1 / 1.0.0.1 - Cloudflare DNS
```

Après cette étape, tu dois définir un nom client. Tu peux mettre n’importe quel nom que tu souhaites, par exemple le nom de ton appareil.

## Configuration

### Ajouter plus de clients

Si tu veux créer plusieurs connexions, c’est utile de créer plusieurs comptes. Pour créer un autre compte, exécute la commande suivante :
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Sélectionne `1` puis confirme. Maintenant, définis le nom du client.

### Supprimer des clients

Lance la commande suivante pour supprimer un client :
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Sélectionne le numéro du client dans ta liste que tu souhaites supprimer. Puis appuie sur `Entrée`. On te demandera de confirmer la suppression. Si tu es sûr, appuie sur `Y` puis `Entrée`.
Le client devrait être supprimé à ce stade.

## Désinstallation

Si tu n’as plus besoin d’OpenVPN, tu peux le désinstaller comme ceci :
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
Appuie sur `3` et confirme. Confirme encore une fois et OpenVPN sera désinstallé.

## Connexion au VPN

Si tu veux te connecter à ton VPN, on recommande d’utiliser le **[client OpenVPN](https://openvpn.net/community-downloads/)**. Télécharge-le simplement sur l’appareil depuis lequel tu souhaites te connecter.

Connecte-toi en SFTP à ton serveur pour télécharger le fichier .ovpn créé, puis supprime ce fichier sur ton serveur après. Dès que tu as installé le client, lance le programme. Clique droit sur l’icône OpenVPN dans la barre des tâches. Clique ensuite sur 'Importer un fichier' et sélectionne le fichier que tu as téléchargé, puis clique sur 'Ouvrir'. Pour te connecter, clique à nouveau sur l’icône et sélectionne "Connecter".

:::info
Si tu as importé plusieurs fichiers, tu dois sélectionner le client que tu veux utiliser puis cliquer sur Connecter.
:::

## Conclusion

Félicitations, tu as installé et configuré OpenVPN avec succès ! Si tu as d’autres questions ou problèmes, contacte notre équipe support, disponible tous les jours pour t’aider !

<InlineVoucher />