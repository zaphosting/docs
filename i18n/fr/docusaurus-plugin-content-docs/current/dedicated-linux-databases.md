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

Ce guide vous explique les étapes pour installer différents types de bases de données. Pour cet exemple, Ubuntu 20.04 est utilisé comme système d’exploitation, mais les commandes équivalentes pour d’autres distributions Linux que nous proposons sur notre site sont également indiquées. Ces commandes doivent être exécutées via SSH. Si vous ne savez pas comment vous connecter à votre serveur via SSH, jetez un œil ici : [Accès initial (SSH)](vserver-linux-ssh.md).

<InlineVoucher />

## Préparation

Avant de commencer l’installation d’une base de données, il est nécessaire de s’assurer que le système est à jour. Pour cela, vous devez mettre à jour les paquets via le gestionnaire de paquets de votre système avec la commande suivante, selon votre système d’exploitation :

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

Selon le service de base de données que vous souhaitez installer, suivez le guide correspondant :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## Qu’est-ce que MariaDB ?

MariaDB est un système de gestion de base de données relationnelle open-source, initialement forké de MySQL. Il garantit de meilleures performances, une sécurité renforcée et un développement continu. Notamment, MariaDB offre des moteurs de stockage améliorés et son architecture est entièrement compatible avec MySQL. Nous recommandons MariaDB plutôt que MySQL.

## Installation de MariaDB

Tout d’abord, vous devez vous assurer que la dernière version de MariaDB est installée. Certains anciens systèmes comme Debian 9 ou Ubuntu 18.04 ne proposent pas par défaut la dernière version de MariaDB dans leur gestionnaire de paquets. En exécutant la commande suivante, vous vous assurez de récupérer la version la plus récente.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Après avoir installé le dépôt, mettez à jour le cache de votre gestionnaire de paquets en suivant les étapes indiquées dans la section [préparation](#préparation).

:::info
L’installation du dépôt MariaDB (étape ci-dessus) peut être ignorée en toute sécurité sur les systèmes modernes comme Ubuntu 22.04 ou Debian 11.
:::

Une fois le dépôt configuré, l’installation de MariaDB peut commencer en installant le paquet `mariadb-server`. Selon votre système d’exploitation, exécutez la commande correspondante :

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

Une fois l’installation terminée, lancez la configuration du serveur avec la commande suivante : 

```
mysql_secure_installation
```

Vous pouvez maintenant configurer votre serveur MariaDB (MySQL) en suivant les instructions et en définissant un mot de passe pour votre serveur. À l’invite suivante, vous pouvez passer la saisie pour l’instant en appuyant sur **Entrée**.

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
L’utilisateur root est l’utilisateur principal de votre serveur MariaDB (MySQL) !
:::

Ensuite, il vous sera demandé si vous souhaitez définir un mot de passe pour l’utilisateur root, confirmez avec **y** pour oui. Puis, saisissez le nouveau mot de passe pour l’utilisateur root.

:::note
Pendant la saisie du mot de passe, vous ne le verrez pas s’afficher. Ce comportement est normal et votre mot de passe sera bien enregistré. Assurez-vous d’utiliser un mot de passe sécurisé pour l’utilisateur root et conservez-le en lieu sûr.
:::

Vous serez ensuite invité à supprimer les utilisateurs anonymes de votre serveur, ce que vous devriez faire pour des raisons de sécurité. Confirmez avec un **y** pour oui :

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

À l’invite suivante, vous définissez si l’utilisateur root est autorisé à se connecter au serveur depuis l’extérieur. Pour des raisons de sécurité, vous devriez désactiver cette option et confirmer donc avec **y** :

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

À l’étape suivante, vous pouvez aussi confirmer la suppression de la base de données de test fournie par MariaDB (MySQL) avec **y**, car elle n’est pas nécessaire et peut être facilement supprimée :

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

À la fin du processus de configuration, il vous sera demandé si vous souhaitez mettre à jour les permissions de la base de données. Confirmez avec **y** pour activer le mot de passe défini précédemment pour l’utilisateur root :

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

Votre serveur MariaDB (MySQL) est maintenant prêt à être utilisé !

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Qu’est-ce que Redis ?

Redis est un magasin de structures de données en mémoire, principalement utilisé pour stocker des données sous forme clé-valeur, bien qu’il supporte d’autres formats comme les listes, JSON et plus encore. Il se caractérise par sa rapidité, fournissant des réponses aux requêtes en millisecondes.

## Installation de Redis

Tout d’abord, vous devez ajouter un dépôt qui permet d’installer Redis. Cette étape n’est pas nécessaire pour toutes les distributions Linux, seulement pour celles listées ci-dessous. Exécutez la commande correspondant à votre système d’exploitation et version :

```
// Ubuntu (toutes versions) et Debian (seulement Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (seulement CentOS 7)
sudo yum install epel-release

// CentOS (seulement CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Après avoir installé le dépôt, mettez à jour le cache de votre gestionnaire de paquets en suivant les étapes de la section [préparation](#préparation).

:::info
Si votre système d’exploitation ne figure pas dans la liste ci-dessus, vous pouvez passer cette étape.
:::

Après avoir installé le dépôt correspondant, procédez à l’installation du paquet Redis Server. Lancez la commande adaptée à votre système :

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

Après l’installation, votre serveur Redis est prêt à l’emploi ! Par défaut, il tourne sur 127.0.0.1:6379 sans mot de passe.

:::caution 
Pour les utilisateurs Debian/Ubuntu :
N’oubliez pas d’activer le service `redis-server` après l’installation pour qu’il démarre automatiquement au démarrage du serveur. Vous pouvez le faire avec la commande suivante :
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## Qu’est-ce que MongoDB ?
MongoDB est une base de données NoSQL orientée documents, conçue pour la scalabilité et l’agilité des développeurs. Elle stocke les données au format BSON, similaire à JSON, permettant de gérer divers types de données. Elle offre la possibilité d’utiliser des index pour réduire le temps de réponse et se caractérise par l’absence de schéma prédéfini comme MySQL ou SQLite, offrant ainsi agilité et flexibilité.

## Installation de MongoDB

Sélectionnez votre système d’exploitation dans les onglets ci-dessous pour afficher le guide correspondant.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Installation sur Ubuntu & Debian

Commencez par exécuter la commande suivante pour importer la clé publique GPG de MongoDB :

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Ensuite, ajoutez la source MongoDB à la liste des sources de votre système. Pour cela, exécutez la commande suivante :

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Le gestionnaire de paquets peut maintenant installer MongoDB Community Edition, mais avant cela, mettez à jour les dépôts avec la commande : `sudo apt update`. Enfin, installez MongoDB avec :

```
sudo apt install mongodb-org
```

Votre installation MongoDB devrait maintenant fonctionner !

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Installation sur CentOS & Fedora

Commencez par configurer le dépôt MongoDB pour les systèmes Red Hat.

Créez un fichier nommé `/etc/yum.repos.d/mongodb-org-6.0.repo` et collez-y le contenu suivant :

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Vous pouvez maintenant installer MongoDB. La commande d’installation diffère légèrement entre CentOS et Fedora, utilisez donc celle qui correspond à votre système :

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

Votre installation MongoDB devrait maintenant fonctionner, c’est beaucoup plus simple comparé à d’autres distributions Linux !

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Installation sur OpenSUSE

Commencez par importer la clé publique MongoDB pour le dépôt MongoDB avec la commande :

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Ensuite, ajoutez le dépôt MongoDB en exécutant la commande suivante :

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

Enfin, installez la dernière version de MongoDB avec :

```
sudo zypper -n install mongodb-org
```

Votre installation MongoDB devrait maintenant fonctionner !

</TabItem>
</Tabs>

</TabItem>
</Tabs>

<InlineVoucher />