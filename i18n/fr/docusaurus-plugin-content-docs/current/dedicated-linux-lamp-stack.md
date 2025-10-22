---
id: dedicated-linux-lamp-stack
title: "Serveur dédié : Installer la stack LAMP - Linux, Apache, MySQL, PHP"
description: "Découvrez comment configurer une stack LAMP pour héberger efficacement des sites PHP dynamiques sur serveurs Linux → En savoir plus maintenant"
sidebar_label: Stack Web LAMP
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

La stack **LAMP** est une sélection populaire de logiciels open-source configurés ensemble pour permettre un hébergement simple de sites web dynamiques, avec un focus particulier sur les sites et applications PHP. L'acronyme signifie : **L**inux comme système d’exploitation, **A**pache comme serveur web, **M**ySQL comme base de données et enfin **P**HP pour le traitement. Dans ce guide, nous allons couvrir le processus d’installation d’une stack LAMP sur un serveur dédié Linux, avec une explication détaillée et un exemple de création d’un site web de liste de tâches.

<InlineVoucher />

## Préparation

Commencez par vous connecter à votre serveur via SSH. Si vous ne savez pas comment faire, jetez un œil à notre [guide d’accès initial (SSH)](vserver-linux-ssh.md).

Dans ce guide, nous utiliserons Ubuntu comme distribution Linux. Les instructions sont les mêmes pour Debian et devraient être similaires pour d’autres distributions, mais la syntaxe des commandes peut varier légèrement. Assurez-vous d’avoir un OS installé et d’être connecté au serveur via SSH.

Comme toujours, avant de continuer l’installation, assurez-vous que tous les paquets sont à jour avec la commande suivante :
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

## Installation

L’installation peut être facilement divisée en chaque dépendance principale de la stack LAMP, en commençant par le serveur web Apache, suivi de la base de données MySQL et enfin PHP. Pendant l’installation, nous allons configurer un site test écrit en PHP qui accédera à la base MySQL. Chaque requête web sera ensuite traitée et servie via Apache.

### Configuration d’Apache

Apache est le serveur web qui traitera les requêtes entrantes et servira les réponses. Installez-le avec la commande suivante.
```
sudo apt install apache2
```

Une fois installé, assurez-vous que les règles du pare-feu appropriées sont créées pour que le serveur web soit accessible depuis Internet. Dans cet exemple, nous utiliserons le **pare-feu UFW** car Apache a une application enregistrée pour celui-ci.

Si vous utilisez un autre pare-feu, assurez-vous d’autoriser le port 80 (HTTP) à travers le pare-feu. Vous pouvez en apprendre plus sur les pare-feux sous Linux via notre guide [Gérer le pare-feu](vserver-linux-firewall.md).

Assurez-vous que le pare-feu UFW est activé et qu’une règle pour SSH est créée.
```
# Créer une règle pour autoriser SSH
sudo ufw allow OpenSSH

# Activer le pare-feu UFW
sudo ufw enable
```

:::caution
Assurez-vous d’avoir une règle configurée pour SSH si vous utilisez le pare-feu UFW ! Sinon, vous **ne pourrez pas** vous reconnecter en SSH si vous perdez la connexion à votre session actuelle !
:::

Créez maintenant la règle pour autoriser Apache puis vérifiez que les règles sont bien présentes.
```
# Créer une règle pour autoriser Apache
sudo ufw allow in "Apache Full"

# Vérifier les règles du pare-feu UFW
sudo ufw status
```

:::tip
Vous pouvez voir les profils disponibles en lançant la commande `ufw app list`. Dans l’exemple ci-dessus, utiliser `Apache Full` signifie que les règles pour HTTP (port 80) et HTTPS (port 443) sont créées.
:::

Vous devriez voir les règles `Apache` et `Apache (v6)` avec l’action `ALLOW`, ce qui confirme que le pare-feu est prêt. Vous verrez aussi les autres règles que vous avez peut-être déjà configurées, y compris celle pour SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Avec le pare-feu ouvert pour Apache, vérifiez maintenant qu’Apache fonctionne. Vous pouvez tester en accédant à votre adresse IP dans un navigateur, par exemple : `http://[votre_adresse_ip]`

Si tout fonctionne, vous devriez voir une page d’accueil par défaut. Sinon, vérifiez le statut du service avec la commande : `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configuration de MySQL

Installez maintenant un serveur MySQL qui servira de base de données pour stocker les données de manière relationnelle. Installez-le avec la commande suivante.
```
sudo apt install mysql-server
```

Une fois l’installation terminée, il est recommandé d’exécuter un script d’installation sécurisée pour garantir la sécurité de votre instance MySQL. C’est optionnel mais fortement conseillé. Lancez-le avec la commande `sudo mysql_secure_installation`.

Ce script vous guidera de manière interactive. D’abord, il vous sera demandé si vous souhaitez activer la validation des mots de passe. Nous recommandons de répondre `Y` pour n’autoriser que des mots de passe sécurisés, puis de choisir `MEDIUM` via `1` ou `STRONG` via `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Ensuite, vous serez invité à supprimer l’utilisateur `anonymous` et à interdire la connexion root à distance. Nous recommandons fortement d’accepter ces deux options avec `Y` pour des raisons de sécurité. Cela supprime l’utilisateur test et limite l’accès root à la connexion locale via SSH uniquement, réduisant ainsi les risques.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Enfin, il vous sera demandé de supprimer la base de données `test` et de recharger les tables de privilèges. Nous recommandons encore une fois d’accepter avec `Y` car la base test n’est pas nécessaire et il faut recharger les privilèges pour que les changements prennent effet.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Vérifiez maintenant que MySQL fonctionne en essayant de vous connecter avec la commande : `sudo mysql -u root`. Si la connexion réussit, un message de bienvenue s’affichera. Vous pouvez quitter avec la commande `quit`.

### Configuration de PHP

La dernière dépendance LAMP est PHP, et son installation est assez simple. La commande suivante installe PHP ainsi qu’un plugin pour Apache et MySQL, permettant à Apache de fonctionner avec PHP et à PHP d’utiliser MySQL.
```
sudo apt install php libapache2-mod-php php-mysql
```

Vérifiez que l’installation a réussi en affichant la version. Si une version s’affiche, PHP fonctionne correctement.
```
php -v
```

:::tip Extensions PHP
Pour des cas d’utilisation avancés, vous pourriez avoir besoin d’extensions PHP supplémentaires pour plus de fonctionnalités. Vous pouvez voir la liste en lançant la commande `apt search php- | less`.

Utilisez les flèches pour défiler et appuyez sur `Q` pour quitter. Pour installer une extension, utilisez simplement la commande apt install comme suit. Vous pouvez installer plusieurs extensions en même temps, séparées par un espace pour aller plus vite.

```
sudo apt install [php_extension] [...]
```
:::

On recommande de modifier l’index des répertoires pour que les fichiers `index.php` aient la priorité sur les `.html`. Ouvrez le fichier avec la commande suivante.
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

Dans l’éditeur nano, déplacez `index.php` en tête de liste, comme ceci :
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Sauvegardez et quittez nano avec `CTRL + X`, puis `Y` pour confirmer et enfin `ENTER`. Redémarrez Apache pour appliquer la modification avec `sudo systemctl restart apache2`.

### Création du site test

Avec l’installation de chaque dépendance LAMP terminée, créons un site test pour montrer comment la stack LAMP fonctionne ensemble pour offrir une super solution de site dynamique. C’est totalement optionnel, mais ça aide à comprendre comment utiliser ces outils pour vos propres sites.

Dans cet exemple, on va créer un petit site de liste de tâches en PHP qui récupère et affiche les entrées. Ces données seront stockées dans une table MySQL et servies via Apache.

On utilisera aussi un domaine test `zapdocs.example.com` tout au long du guide, car dans la vraie vie vous utiliserez probablement un domaine. Vous **devez** configurer un enregistrement DNS de type `A` pour ce domaine pointant vers l’adresse IP de votre serveur. Si vous avez besoin d’aide, consultez notre guide [Enregistrements de domaine](domain-records.md#a-records).

:::note
Vous pouvez choisir de ne pas utiliser de domaine et remplacer les mentions de `[your_domain]` par un nom simple. Vous accéderez alors au site via l’adresse IP. Notez cependant que lors de la création du fichier de virtual host, vous devrez retirer la ligne `ServerName`.
:::

#### Configuration d’Apache

En général, tous les fichiers et données des sites web sont stockés dans le répertoire `/var/www`. Par défaut, Apache vient avec un dossier `html` contenant une page par défaut. Pour garder tout organisé, surtout si vous hébergez plusieurs sites sur une même instance Apache, on recommande de créer un dossier individuel pour chaque site.

Pour cela, créez un nouveau dossier dans `/var/www/[your_domain]` pour chaque domaine. Ici, ce sera `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Créez maintenant un nouveau fichier de configuration de virtual host Apache dans le dossier `sites-available` pour ce domaine et dossier.
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Copiez-collez le modèle ci-dessous dans nano, en remplaçant `[your_domain]` par votre domaine.
```
<VirtualHost *:80>
    ServerName [your_domain]
    ServerAlias www.[your_domain]
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/[your_domain]
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Ce fichier virtual host gère les requêtes sur le port 80 (HTTP) et vérifie si la requête correspond au `ServerName` spécifié, ici votre domaine. Il indique aussi que le dossier `/var/www/[your_domain]` doit être utilisé pour servir les fichiers.

Sauvegardez et quittez nano avec `CTRL + X`, puis `Y` et `ENTER`. On recommande de tester la config avec la commande `sudo apache2ctl configtest` pour vérifier qu’il n’y a pas d’erreurs de syntaxe.

La dernière étape est d’activer ce virtual host avec `a2ensite`.
```
sudo a2ensite [your_domain]
```

:::note Pas de domaine utilisé
Si vous **n’utilisez pas** de domaine, supprimez ou commentez la ligne `ServerName` en la préfixant avec un `#`. Vous devrez aussi désactiver le virtual host par défaut avec la commande `sudo a2dissite 000-default`.
:::

Enfin, redémarrez Apache pour appliquer le nouveau virtual host avec : `sudo systemctl restart apache2`.

#### Création du site web

Maintenant que vous avez configuré Apache avec le nouveau virtual host et dossier, il est temps de créer le site web qui sera servi. Pour l’instant, le dossier est vide donc rien ne sera affiché. On va créer un petit site de liste de tâches comme expliqué plus haut.

##### Préparation de la base de données

Commençons par créer une nouvelle base de données et une table pour stocker les tâches. Connectez-vous à MySQL.
```
sudo mysql -u root
```

Créons une base `todowebsite` et une table `todoitems` dedans.
```
# Créer la base de données
CREATE DATABASE todowebsite;

# Utiliser la nouvelle base
USE todowebsite;

# Créer une table items dans la base
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Créons quelques entrées exemples.
```
INSERT INTO todoitems (name, is_completed) VALUES ('Créer le guide ZAP-Docs', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Acheter un serveur ZAP-Hosting', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Rejoindre le Discord ZAP-Hosting', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Passe une super journée !', 0);
```

Créons enfin un utilisateur dédié `todo` pour ce site.
```
# Créer un utilisateur dédié
# Remplacez [your_password] par votre mot de passe
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Donner les privilèges à l’utilisateur (copiez en une seule fois)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Recharger les privilèges
FLUSH PRIVILEGES;
```

La base est prête et l’utilisateur créé, vous pouvez quitter MySQL avec la commande `quit`.

##### Fichiers PHP du site

La dernière étape est de créer le fichier PHP du site de liste de tâches. Ce sera un fichier `index.php` dans le dossier `/var/www/[your_domain]` que vous avez créé. Ouvrez nano pour créer ce fichier.
```
sudo nano /var/www/[your_domain]/index.php
```

Voici un code simple à copier dans nano pour une page basique qui affiche les tâches stockées en base. La première partie PHP établit la connexion MySQL.

:::important
N’oubliez pas de remplacer `[your_password]` par le mot de passe que vous avez défini pour l’utilisateur `todo`.
:::

La partie HTML affiche la page principale avec une liste non ordonnée, parcourant les résultats.

```
<?php
// Préparer la connexion MySQL
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Créer la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion, sinon afficher une erreur
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Exécuter une requête SQL pour récupérer les entrées et stocker le résultat
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Liste de Tâches</title>
  </head>
  <body>
      <h1>Super Liste de Tâches :D</h1>
      <p>Pour notre super guide ZAP-Hosting : <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
      <ul>
          <?php
          // Vérifier s’il y a des résultats
          if ($result->num_rows > 0) {
              // Parcourir chaque élément du résultat
              foreach ($result as $entry) {
                  echo "<li>";
                  // Afficher le nom en sécurisant avec htmlspecialchars pour éviter le XSS
                  echo htmlspecialchars($entry["name"]);

                  // Afficher le statut de complétion
                  if ($entry["is_completed"]) {
                      echo " <strong>(Terminé)</strong>";
                  } else {
                      echo " <strong>(Incomplet)</strong>";
                  }

                  // Afficher la date de création
                  echo " - Date de création : " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Si aucun résultat, afficher un message par défaut
              echo "<li>Aucune tâche trouvée.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// Fermer la connexion à la base
$conn->close();
?>
```

Une fois copié dans nano, sauvegardez et quittez avec `CTRL + X`, puis `Y` et `ENTER`.

#### Tester le site

Vous avez suivi le guide et créé un site test de liste de tâches qui utilise tous les éléments de la stack LAMP !

Vous devriez maintenant pouvoir accéder au site via le domaine (en HTTP/port 80) que vous avez défini dans le virtual host, ici `zapdocs.example.com`. Le résultat final devrait ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusion

Bravo, vous avez installé et configuré la stack LAMP avec succès ! La prochaine étape, on vous **recommande vivement** de configurer un domaine et un **certificat SSL** pour sécuriser la transmission des données vers vos sites. Consultez notre [guide Certbot](vserver-linux-certbot.md#webroot-plugin) en vous concentrant sur le **plugin Apache** et suivez la configuration interactive pour installer rapidement un certificat pour votre domaine.

Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />