---
id: dedicated-linux-phpmyadmin
title: "Configurer phpMyAdmin sur un serveur Linux - Gérez vos bases de données via une interface web"
description: "Découvrez comment gérer facilement vos bases de données MySQL et MariaDB avec l’interface web de phpMyAdmin pour une administration efficace → En savoir plus maintenant"
sidebar_label: Installer phpMyAdmin
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

phpMyAdmin est un outil gratuit basé sur le web pour gérer les bases de données MySQL et MariaDB. Il offre une interface conviviale qui permet aux utilisateurs de créer, modifier, gérer et supprimer des bases de données sans avoir à saisir manuellement des commandes SQL.



## Installer phpMyAdmin avec le One Click Apps Installer

Tu peux installer **phpMyAdmin** directement via notre **One Click Apps Installer** dans l’interface web de ton VPS. Après avoir terminé la configuration initiale des apps, ouvre le catalogue d’applications, cherche **phpMyAdmin**, et lance le déploiement avec ton projet, environnement et paramètres de domaine préférés. C’est une manière rapide et simple de déployer et gérer **phpMyAdmin** sans passer par la ligne de commande, tout en profitant d’une gestion web intégrée, du support de domaine personnalisé, et de la mise en place SSL quand c’est dispo.

## Préparation

Avant de commencer l’installation, assure-toi que ton système est à jour. Les mises à jour et upgrades en attente peuvent être effectuées comme suit :

```
sudo apt update -y
sudo apt upgrade -y
```

Tu dois aussi vérifier que PHP est déjà installé sur ton système. C’est indispensable pour utiliser phpMyAdmin. Pour savoir comment installer PHP, jette un œil à notre [guide Installer PHP](vserver-linux-php.md).

:::warning Paquets PHP manquants
Si les paquets PHP nécessaires manquent, les fichiers PHP de phpMyAdmin ne pourront pas être traités et affichés correctement. 
:::

## Installation

Une fois la préparation terminée, l’installation de l’interface phpMyAdmin peut commencer. Pour cela, ouvre d’abord le répertoire d’installation où phpMyAdmin doit être installé.

Navigue vers le répertoire correspondant avec la commande `cd /usr/share`. La dernière version de phpMyAdmin doit ensuite être téléchargée dans ce répertoire avec `wget` :

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Si le service `wget` n’est pas trouvé, il peut être installé avec la commande `sudo apt install wget -y`. 
:::

Dès que le téléchargement est terminé, le fichier ZIP téléchargé peut être décompressé avec la commande suivante :

```
unzip phpmyadmin.zip
```
:::warning
Si le service `unzip` n’est pas trouvé, il peut être installé avec la commande `sudo apt install unzip -y`. 
:::

L’archive décompressée peut maintenant être renommée avec un nom plus simple, le fichier ZIP supprimé, et les permissions nécessaires appliquées :

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Configuration

### Fichier de configuration du serveur web

Maintenant, phpMyAdmin doit être ajouté à la configuration du serveur web. Pour cela, utilise `nano /etc/apache2/conf-available/phpmyadmin.conf` pour créer un nouveau fichier de configuration Virtual Host et remplis-le avec ce contenu :

```
# Configuration Apache pour phpMyAdmin

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Interdire l’accès web pour des raisons de sécurité aux répertoires qui n’en ont pas besoin
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

Une fois la configuration Apache2-phpMyAdmin remplie, sauvegarde et ferme avec `CTRL+X`, puis appuie sur `Y` et valide avec `Entrée`.

Le fichier de configuration Virtual Host nouvellement créé doit ensuite être activé et chargé. Pour cela, exécute les commandes suivantes :

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Création du répertoire temporaire requis

Pour que phpMyAdmin fonctionne correctement, un répertoire temporaire doit être créé et les permissions nécessaires définies. Tu peux faire ça avec ces commandes :

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Conclusion

Félicitations, tu as installé et configuré phpMyAdmin avec succès. Tu peux accéder à l’interface web en utilisant l’adresse IP et le chemin de ton serveur (http://Adresse-IP/phpmyadmin). Pour toute question ou aide, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider ! 🙂