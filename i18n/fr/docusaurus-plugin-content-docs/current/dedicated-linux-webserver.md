---
id: dedicated-linux-webserver
title: "Configurer Nginx et Apache sur un serveur Linux - Mets en place un environnement web puissant"
description: "Découvre comment installer et configurer les serveurs web Nginx ou Apache pour héberger ton site efficacement → En savoir plus maintenant"
sidebar_label: Installer un serveur web
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Nginx et Apache sont des services web populaires utilisés pour livrer des pages web au navigateur d’un utilisateur. Ci-dessous, on te montre comment installer l’un de ces services sur ton système. 



## Préparation

Avant de commencer l’installation effective d’un serveur web, il faut s’assurer que le système est à jour. Pour ça, on se connecte au serveur via SSH. Si tu ne sais pas ce qu’est SSH ni comment l’utiliser, jette un œil à ce guide : [Accès initial (SSH)](vserver-linux-ssh.md).

Une fois connecté, tu peux mettre à jour le système avec la commande adaptée à ton système d’exploitation :

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper update

// Fedora
sudo dnf upgrade --refresh
```



## Installation

Une fois la préparation terminée, tu peux lancer l’installation du serveur web. Selon ton système d’exploitation et le serveur web choisi, exécute les commandes suivantes :



### Apache

```
// Debian
sudo apt install apache2

// Ubuntu
sudo apt install apache2

// CentOS
sudo yum install httpd

// OpenSUSE
sudo zypper install httpd

// Fedora
sudo dnf install httpd
```

Après l’installation du serveur web, tu peux uploader les fichiers de ton site. Connecte-toi à ton serveur via FTP/SFTP, rends-toi dans le dossier suivant et dépose tes fichiers.

```
/var/www/html/
```



### Nginx

```
// Debian
sudo apt install nginx

// Ubuntu
sudo apt install nginx

// CentOS
sudo yum install nginx

// OpenSUSE
sudo zypper install nginx

// Fedora
sudo dnf install nginx
```

Après l’installation du serveur web, tu peux uploader les fichiers de ton site. Connecte-toi à ton serveur via FTP/SFTP, rends-toi dans le dossier suivant et dépose tes fichiers.

```
/usr/share/nginx/html
```



## Vérification de la version

Une fois l’installation terminée, tu peux utiliser les commandes `apache2 -v` (Apache) et `nginx -v` (Nginx) pour vérifier que tout s’est bien passé. Le résultat devrait ressembler à ça :



### Apache

```
apache2 -v
Server version: Apache/2.4.41 (Ubuntu)
Server built:   XXXX-XX-XXTXX:XX:XX
```



### Nginx

```
nginx -V
nginx version: nginx/1.2.3
...
```

Si tu obtiens ce genre de retour, c’est que ton serveur web est installé et prêt à l’emploi. 
