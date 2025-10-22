---
id: dedicated-linux-jitsi
title: "Serveur dédié : Installation de Jitsi Meet"
description: "Découvrez comment configurer et faire tourner votre propre serveur de vidéoconférence sécurisé Jitsi Meet pour des réunions en ligne simples et privées → En savoir plus maintenant"
sidebar_label: Installer Jitsi Meet
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Jitsi Meet est un logiciel de vidéoconférence open source avec lequel tu peux mettre en place tes propres vidéoconférences sur ton serveur. Un gros avantage de Jitsi Meet, c’est sa simplicité d’utilisation : tu as juste besoin d’un navigateur (ou de l’app Jitsi sur mobile) et tu n’as pas à te connecter à des services externes. Chaque vidéoconférence a sa propre URL pour rejoindre la réunion. Jitsi Meet est parfait pour faire des visios même avec des personnes qui ne sont pas très à l’aise avec la technique.  
Attention : Sans réglages supplémentaires, toute personne qui accède au serveur Jitsi Meet peut lancer ses propres vidéoconférences sur le serveur.

<InlineVoucher />

## Installer Jitsi Meet sur un serveur Debian

Dans ce guide, on te montre comment installer un serveur Jitsi Meet sur un serveur Debian. En gros, Jitsi Meet fonctionne aussi sur d’autres serveurs Linux, comme Ubuntu, et l’installation est très similaire.

### Préparatifs

Pour utiliser Jitsi Meet correctement, il vaut mieux utiliser ton propre domaine pour accéder au serveur Jitsi. C’est une bonne idée de créer un sous-domaine dédié pour ton serveur Jitsi Meet. Par exemple, on utilise le domaine meet.zap-testdomain.de.  
Pour les domaines ZAP-Hosting, tu dois créer une nouvelle entrée dans l’administration DNS. Mets le nom du sous-domaine dans le champ "Nom" et l’adresse IP de ton serveur dans le champ "Valeur". Dans notre exemple, on mettra "meet" dans le champ Nom et l’adresse IP du serveur test ZAP où on va installer Jitsi Meet dans le champ Valeur : 185.239.239.49 (mets l’IP de ton serveur, pas celle de l’exemple)

Tu peux accéder à un serveur Jitsi Meet via l’adresse IP, mais un domaine est nécessaire pour le certificat SSL. Sans domaine, le navigateur affichera un avertissement de sécurité.

Une fois le sous-domaine configuré (ça peut prendre jusqu’à 24h pour que les changements soient actifs), tu peux préparer ton serveur pour l’installation.  
Connecte-toi à ton serveur via Putty ou WinSCP.  
Avant de continuer, assure-toi que ton serveur est à jour. Si besoin, lance chaque commande avec les droits superutilisateur en ajoutant "sudo" devant (ex : "sudo apt-get update").

```
$	apt-get update
```
```
$	apt-get upgrade
```

Si aucun pare-feu n’est installé sur ton serveur, tu peux en installer un, par exemple UFW :
```
$	apt install ufw
```

Fais les réglages suivants sur le pare-feu :

```
$	ufw allow OpenSSH
$	ufw allow 80/tcp
$	ufw allow 443/tcp
$	ufw allow 4443/tcp
$	ufw allow 10000/udp
```

Active le pare-feu :
```
$	ufw enable
```

Vérifie le statut :
```
$	ufw status
```

### Installation de Jitsi Meet

Pour installer Jitsi Meet, il te faut d’abord le paquet gnupg :
```
$	apt install gnupg
```

Après l’installation, télécharge la clé GPG de Jitsi et ajoute-la :
```
$	wget https://download.jitsi.org/jitsi-key.gpg.key
```
```
$	apt-key add jitsi-key.gpg.key
```

Pour installer Jitsi Meet, il faut ajouter le dépôt Jitsi :
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

Ajoute la ligne suivante dans l’éditeur. Ensuite, sauvegarde et ferme l’éditeur :
```
$	deb https://download.jitsi.org stable/
```

Maintenant, tu peux installer Jitsi Meet. Il est recommandé de mettre à jour tous les paquets installés avant :
```
$	apt update
```
```
$	apt install jitsi-meet
```

Pendant l’installation, on te demandera d’entrer un nom d’hôte. Mets le sous-domaine que tu as créé pour ton serveur Jitsi Meet. Dans notre exemple, c’est : meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)

Confirme avec "Ok". Une nouvelle fenêtre s’ouvrira pour te demander si tu veux créer un certificat TLS auto-signé ou utiliser un certificat existant. Choisis "Générer un nouveau certificat auto-signé" :

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)

L’installation de Jitsi Meet est maintenant terminée, il ne te reste plus qu’à récupérer le certificat TLS.  
Installe le paquet Certbot :
```
$	apt install certbot
```

Lance le script d’installation du certificat TLS :
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

Pendant l’exécution, on te demandera une adresse email qui sera envoyée à letsencrypt.org. Entre une adresse email valide et confirme.

Après ça, Jitsi Meet devrait être complètement installé et actif sur ton serveur. Pour vérifier que tout fonctionne, entre simplement le sous-domaine que tu as configuré dans la barre d’adresse de ton navigateur. Dans ce tuto, c’est :
```
https://meet.zap-testdomain.de
```

Si la page charge Jitsi Meet, tu peux directement lancer ta première vidéoconférence.

<InlineVoucher />