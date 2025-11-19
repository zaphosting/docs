---
id: dedicated-linux-databases
title: "Serveur dédié : Installation des bases de données"
description: "Découvrez comment installer et configurer différentes bases de données sur Ubuntu et autres distributions Linux pour des performances et une sécurité optimisées → En savoir plus maintenant"
sidebar_label: Installer des bases de données
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ce guide te donne les étapes pour installer différents types de bases de données. Pour cet exemple, Ubuntu 20.04 est utilisé comme système d’exploitation, mais les commandes équivalentes pour d’autres distributions Linux que nous proposons sur notre site sont aussi précisées. Ces commandes doivent être exécutées via SSH, si tu ne sais pas comment te connecter à ton serveur via SSH, jette un œil ici : [Accès initial (SSH)](vserver-linux-ssh.md).

## Préparation

Avant de commencer l’installation d’une base de données, il faut d’abord s’assurer que le système est à jour. Pour ça, tu dois mettre à jour les paquets via le gestionnaire de paquets de ton système avec la commande suivante, selon ton système d’exploitation :

```
// Ubuntu & Debian
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## Types de bases de données

Selon le service de base de données que tu souhaites installer, suis le guide correspondant :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## Qu’est-ce que MariaDB ?

MariaDB est un système de gestion de base de données relationnelle open-source, initialement forké de MySQL. Il garantit de meilleures performances, une sécurité renforcée et un développement continu. MariaDB propose notamment des moteurs de stockage améliorés, et son architecture est totalement compatible avec MySQL. On recommande MariaDB plutôt que MySQL.

## Installation de MariaDB

D’abord, il faut s’assurer que la dernière version de MariaDB est installée. Certains vieux systèmes comme Debian 9 ou Ubuntu 18.04 ne proposent pas par défaut la dernière version dans leur gestionnaire de paquets, donc en lançant la commande suivante, tu t’assures de récupérer la version la plus récente.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Après avoir installé le dépôt, mets à jour le cache de ton gestionnaire de paquets en suivant les étapes de la section préparation.

:::info
L’installation du dépôt MariaDB (étape ci-dessus) peut être ignorée sans souci sur les systèmes modernes comme Ubuntu 22.04 ou Debian 11.
:::

Une fois le dépôt configuré, tu peux commencer l’installation de MariaDB en installant le paquet `mariadb-server`. Selon ton système, exécute la commande correspondante :

```
// Ubuntu & Debian
sudo apt install mariadb-server

// CentOS
sudo yum install mariadb-server

// OpenSUSE
sudo zypper install mariadb

// Fedora
sudo dnf install mariadb-server
```

## Configuration de MariaDB

Une fois l’installation terminée, lance la configuration du serveur avec la commande suivante :

```
mysql_secure_installation
```

Tu peux maintenant configurer ton serveur MariaDB (MySQL) en suivant les instructions et en définissant un mot de passe pour ton serveur. À l’invite suivante, tu peux passer cette étape pour l’instant en appuyant sur **Entrée**.

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
L’utilisateur root est l’utilisateur principal de ton serveur MariaDB (MySQL) !
:::

Ensuite, on te demandera si tu veux définir un mot de passe pour l’utilisateur root, confirme avec **y** pour oui. Puis, tape le nouveau mot de passe pour root.

:::note
Pendant que tu tapes le mot de passe, tu ne le verras pas s’afficher. C’est normal, ton mot de passe sera bien pris en compte. Assure-toi d’utiliser un mot de passe sécurisé pour root et garde-le précieusement.
:::

On te demandera ensuite si tu souhaites supprimer les utilisateurs anonymes de ton serveur, tu devrais le faire pour des raisons de sécurité. Confirme avec **y** :

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

À l’invite suivante, tu définis si l’utilisateur root peut se connecter au serveur depuis l’extérieur. Pour la sécurité, il vaut mieux désactiver cette option, donc confirme avec **y** :

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

À l’étape suivante, tu peux aussi confirmer la suppression de la base de données de test fournie par MariaDB (MySQL) avec **y**, elle n’est pas nécessaire et peut être supprimée facilement :

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

À la fin de la configuration, on te demandera si tu veux mettre à jour les permissions de la base. Confirme avec **y** pour activer le mot de passe root que tu viens de définir :

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

Ton serveur MariaDB (MySQL) est maintenant prêt à être utilisé !

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Qu’est-ce que Redis ?

Redis est un magasin de structures de données en mémoire, principalement utilisé pour stocker des données sous forme clé-valeur, mais il supporte aussi d’autres formats comme les listes, JSON et plus. Il est reconnu pour sa rapidité, répondant aux requêtes en millisecondes.

## Installation de Redis

D’abord, tu dois ajouter un dépôt qui permet d’installer Redis. Cette étape n’est pas nécessaire pour toutes les distributions Linux, seulement pour celles listées ci-dessous. Exécute la commande correspondant à ton système et version :

```
// Ubuntu (toutes versions) et Debian (seulement Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (seulement CentOS 7)
sudo yum install epel-release

// CentOS (seulement CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Après avoir ajouté le dépôt, mets à jour le cache de ton gestionnaire de paquets comme expliqué dans la section préparation.

:::info
Si ton système n’est pas listé ci-dessus, tu peux passer cette étape.
:::

Après avoir ajouté le dépôt, installe le paquet Redis Server. Lance la commande adaptée à ton système :

```
// Ubuntu et Debian
sudo apt install redis-server

// CentOS
sudo yum install redis

// OpenSUSE
sudo zypper install redis

// Fedora
sudo dnf install redis
```

Après l’installation, ton serveur Redis est prêt à l’emploi ! Par défaut, il tourne sur 127.0.0.1:6379 sans mot de passe.

:::caution 
Pour les utilisateurs Debian/Ubuntu :
N’oublie pas d’activer le service `redis-server` après l’installation pour qu’il démarre automatiquement au boot du serveur. Tu peux faire ça avec la commande suivante :
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## Qu’est-ce que MongoDB ?
MongoDB est une base de données NoSQL orientée documents, conçue pour la scalabilité et l’agilité des développeurs. Elle stocke les données au format BSON, proche du JSON, ce qui permet de gérer différents types de données. Elle offre la possibilité d’utiliser des index pour réduire le temps de réponse et se caractérise par l’absence de schéma prédéfini comme MySQL ou SQLite, offrant ainsi flexibilité et rapidité.

## Installation de MongoDB

Choisis ton système d’exploitation dans les onglets ci-dessous pour afficher le guide correspondant.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Installation sur Ubuntu & Debian

Commence par importer la clé publique GPG de MongoDB avec la commande suivante :

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Ensuite, ajoute la source MongoDB à la liste des sources de ton système avec cette commande :

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Maintenant, le gestionnaire de paquets peut installer MongoDB Community Edition, mais avant ça, mets à jour les dépôts avec `sudo apt update`. Enfin, installe MongoDB avec :

```
sudo apt install mongodb-org
```

Ton installation MongoDB devrait maintenant fonctionner !

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Installation sur CentOS & Fedora

D’abord, configure le dépôt MongoDB pour les systèmes Red Hat.

Crée un fichier nommé `/etc/yum.repos.d/mongodb-org-6.0.repo` et colle-y ce contenu :

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Maintenant, tu peux installer MongoDB. La commande diffère un peu entre CentOS et Fedora, utilise celle qui correspond à ton système :

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

Ton installation MongoDB devrait être opérationnelle, c’est beaucoup plus simple que sur d’autres distributions Linux !

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Installation sur OpenSUSE

Commence par importer la clé publique MongoDB pour le dépôt avec cette commande :

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Ensuite, ajoute le dépôt MongoDB avec :

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

Enfin, installe la dernière version de MongoDB avec :

```
sudo zypper -n install mongodb-org
```

Ton installation MongoDB devrait maintenant fonctionner !

</TabItem>
</Tabs>

</TabItem>
</Tabs>