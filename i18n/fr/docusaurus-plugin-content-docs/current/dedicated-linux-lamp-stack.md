---
id: dedicated-linux-lamp-stack
title: "Configurer une stack LAMP sur un serveur Linux - Boostez vos applis PHP classiques"
description: "Découvrez comment configurer une stack LAMP pour héberger efficacement des sites PHP dynamiques sur serveurs Linux → En savoir plus maintenant"
sidebar_label: Stack Web LAMP
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

La stack **LAMP** est une sélection populaire de logiciels open-source configurés ensemble pour permettre un hébergement simple de sites web dynamiques, avec un focus particulier sur les sites et applis PHP. L’acronyme signifie : **L**inux comme OS (système d’exploitation), **A**pache comme serveur web, **M**ySQL comme base de données et enfin **P**HP pour le traitement. Dans ce guide, on va couvrir le processus d’installation d’une stack LAMP sur un serveur dédié Linux, avec un exemple détaillé de création d’un site web de liste de tâches.

## Préparation

Commence par te connecter à ton serveur via SSH. Si tu ne sais pas comment faire, jette un œil à notre [guide d’accès initial (SSH)](vserver-linux-ssh.md).

Ici, on utilise Ubuntu comme distribution Linux. Les instructions sont les mêmes pour Debian et assez similaires pour d’autres distributions, même si la syntaxe des commandes peut légèrement varier. Assure-toi d’avoir un OS installé et d’être connecté au serveur via SSH.

Comme toujours, avant de lancer l’installation, assure-toi que tous les paquets sont à jour avec la commande suivante :
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

L’installation se divise facilement en chaque dépendance principale de la stack LAMP, en commençant par le serveur web Apache, suivi de la base de données MySQL et enfin PHP. Pendant l’installation, on va configurer un site test écrit en PHP qui accèdera à la base MySQL. Chaque requête web sera ensuite traitée et servie via Apache.

### Configuration d’Apache

Apache est le serveur web qui va traiter les requêtes entrantes et renvoyer les réponses. Installe-le avec la commande suivante :
```
sudo apt install apache2
```

Une fois installé, assure-toi que les règles du pare-feu sont bien configurées pour que le serveur web soit accessible depuis Internet. Ici, on utilise le **pare-feu UFW** car Apache a une application enregistrée pour ça.

Si tu utilises un autre pare-feu, assure-toi d’autoriser le port 80 (HTTP). Tu peux en apprendre plus sur les pare-feux Linux dans notre guide [Gérer le pare-feu](vserver-linux-firewall.md).

Vérifie que le pare-feu UFW est activé et qu’une règle SSH est créée.
```
# Crée une règle pour autoriser SSH
sudo ufw allow OpenSSH

# Active le pare-feu UFW
sudo ufw enable
```

:::caution
Assure-toi d’avoir une règle SSH si tu utilises UFW ! Sinon, tu **ne pourras plus** te connecter en SSH si ta session actuelle est coupée !
:::

Crée maintenant la règle pour autoriser Apache et vérifie que les règles sont bien en place.
```
# Autorise Apache
sudo ufw allow in "Apache Full"

# Vérifie les règles du pare-feu UFW
sudo ufw status
```

:::tip
Tu peux voir les profils disponibles avec la commande `ufw app list`. Ici, `Apache Full` crée les règles pour HTTP (port 80) et HTTPS (port 443).
:::

Tu devrais voir les règles `Apache` et `Apache (v6)` avec l’action `ALLOW`, ce qui confirme que le pare-feu est prêt. Tu verras aussi les autres règles que tu as pu configurer, y compris SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Avec le pare-feu ouvert pour Apache, vérifie que ce dernier fonctionne. Essaie d’accéder à ton adresse IP dans un navigateur : `http://[ton_adresse_ip]`

Si ça marche, tu verras une page d’accueil par défaut. Sinon, vérifie le statut du service avec : `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configuration de MySQL

Installe maintenant MySQL, qui servira de base de données pour stocker tes données de manière relationnelle.
```
sudo apt install mysql-server
```

Une fois fini, il est recommandé de lancer un script d’installation sécurisée pour renforcer la sécurité de ton serveur MySQL. C’est optionnel mais fortement conseillé. Lance-le avec : `sudo mysql_secure_installation`.

Ce script interactif te guidera. D’abord, il te demandera si tu veux activer la validation des mots de passe. On recommande de répondre `Y` pour n’autoriser que des mots de passe sécurisés, puis de choisir `MEDIUM` (1) ou `STRONG` (2).

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Ensuite, il te demandera de supprimer l’utilisateur `anonymous` et d’interdire la connexion root à distance. Accepte les deux (`Y`) pour des raisons de sécurité. Ça supprime l’utilisateur test et limite l’accès root à la machine locale via SSH, réduisant les risques.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Enfin, il te proposera de supprimer la base de données `test` et de recharger les tables de privilèges. Accepte encore (`Y`) car la base test n’est pas nécessaire et il faut recharger les privilèges pour appliquer les changements.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Vérifie que MySQL tourne bien en essayant de te connecter : `sudo mysql -u root`. Si ça marche, un message de bienvenue s’affiche. Tu peux quitter avec la commande `quit`.

### Configuration de PHP

La dernière dépendance LAMP est PHP, facile à installer. Cette commande installe PHP avec un plugin Apache et MySQL pour que tout fonctionne ensemble.
```
sudo apt install php libapache2-mod-php php-mysql
```

Vérifie que PHP est bien installé en affichant la version. Si tu vois une version, c’est bon.
```
php -v
```

:::tip Extensions PHP
Pour des cas avancés, tu peux avoir besoin d’extensions PHP supplémentaires. Liste-les avec `apt search php- | less`.

Utilise les flèches pour naviguer et `Q` pour quitter. Pour installer une extension, utilise :
```
sudo apt install [php_extension] [...]
```
Tu peux en mettre plusieurs séparées par un espace pour aller plus vite.
:::

On recommande de modifier l’ordre des fichiers index pour que `index.php` soit prioritaire sur `.html`. Ouvre le fichier :
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

Dans nano, enlève `index.php` et remets-le en premier dans la liste :
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Sauvegarde avec `CTRL + X`, puis `Y` et `ENTER`. Redémarre Apache pour appliquer avec :
```
sudo systemctl restart apache2
```

### Création du site test

Avec la stack LAMP installée, on va créer un site test pour montrer comment tout fonctionne ensemble. C’est optionnel mais super utile pour comprendre comment utiliser ces outils.

Ici, on crée un petit site de liste de tâches en PHP qui récupère et affiche les entrées depuis une base MySQL, servi par Apache.

On utilise un domaine test `zapdocs.example.com`. En vrai, tu utiliseras un domaine. Tu **dois** créer un enregistrement DNS de type `A` pointant vers l’adresse IP de ton serveur. Besoin d’aide ? Consulte notre guide [Enregistrements de domaine](domain-records.md).

:::note
Tu peux ne pas utiliser de domaine et remplacer `[your_domain]` par un nom simple. Tu accéderas alors au site via l’IP. Dans ce cas, supprime la ligne `ServerName` dans le fichier de configuration du virtual host.
:::

#### Configuration d’Apache

Sur les serveurs web, les fichiers des sites sont généralement dans `/var/www`. Par défaut, Apache a un dossier `html` avec une page par défaut. Pour organiser plusieurs sites sur un même Apache, on recommande de créer un dossier par site.

Crée un dossier pour ton domaine dans `/var/www/[your_domain]`. Ici, ce sera `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Crée un fichier de configuration de virtual host dans `sites-available` pour ce domaine.
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Copie-colle ce modèle en remplaçant `[your_domain]` par ton domaine :
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

Ce fichier gère les requêtes sur le port 80 (HTTP) et vérifie si la requête correspond au `ServerName` (ton domaine). Il indique aussi que le dossier `/var/www/[your_domain]` sert les fichiers.

Sauvegarde avec `CTRL + X`, `Y` puis `ENTER`. Vérifie la syntaxe avec :
```
sudo apache2ctl configtest
```

Active le virtual host avec :
```
sudo a2ensite [your_domain]
```

:::note Pas de domaine
Si tu n’utilises pas de domaine, supprime ou commente la ligne `ServerName` (ajoute un `#` devant). Désactive aussi le virtual host par défaut avec :
```
sudo a2dissite 000-default
```
:::

Redémarre Apache pour appliquer :
```
sudo systemctl restart apache2
```

#### Création du site web

Maintenant que Apache est configuré, il faut créer le site web. Le dossier est vide, donc rien ne sera servi pour l’instant. On va créer un petit site de liste de tâches pour ce domaine.

##### Préparation de la base de données

Connecte-toi à MySQL :
```
sudo mysql -u root
```

Crée une base `todowebsite` et une table `todoitems` :
```
# Crée la base
CREATE DATABASE todowebsite;

# Utilise la base
USE todowebsite;

# Crée la table des items
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Ajoute quelques entrées exemples :
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Crée un utilisateur dédié `todo` pour ce site :
```
# Crée l’utilisateur
# Remplace [your_password] par ton mot de passe
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Donne les droits (copie en une fois)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Recharge les privilèges
FLUSH PRIVILEGES;
```

Sors de MySQL avec `quit`.

##### Fichiers PHP du site

On va créer le fichier PHP principal `index.php` dans `/var/www/[your_domain]`.
```
sudo nano /var/www/[your_domain]/index.php
```

Voici un code simple pour afficher la liste de tâches depuis la base. La première partie PHP connecte MySQL.

:::important
N’oublie pas de remplacer `[your_password]` par le mot de passe que tu as défini pour l’utilisateur `todo`.
:::

La partie HTML affiche la page avec une liste non ordonnée, parcourant les résultats.

```
<?php
// Prépare la connexion MySQL
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Crée la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifie la connexion, sinon affiche une erreur
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Exécute une requête SQL pour récupérer les entrées
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF--8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-Do List</title>
  </head>
  <body>
      <h1>Awesome To-Do List :D</h1>
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
      <ul>
          <?php
          // Vérifie s’il y a des résultats
          if ($result->num_rows > 0) {
              // Parcourt chaque entrée
              foreach ($result as $entry) {
                  echo "<li>";
                  // Affiche le nom en sécurisant contre XSS
                  echo htmlspecialchars($entry["name"]);

                  // Affiche le statut de complétion
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // Affiche la date de création
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Si aucun résultat, affiche un message par défaut
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// Ferme la connexion à la base
$conn->close();
?>
```

Sauvegarde avec `CTRL + X`, `Y` puis `ENTER`.

#### Test du site

Bravo, tu as configuré un site test qui utilise toute la stack LAMP !

Tu peux maintenant accéder au site via le domaine (en HTTP/port 80) que tu as défini dans le virtual host, ici `zapdocs.example.com`. Le rendu final devrait ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusion

Félicitations, tu as installé et configuré ta stack LAMP avec succès ! La prochaine étape, on te **recommande vivement** de configurer un domaine et un **certificat SSL** pour sécuriser les échanges avec tes sites. Consulte notre [guide Certbot](dedicated-linux-certbot.md) en te concentrant sur le **plugin Apache** et suis l’installation interactive pour mettre en place un certificat rapidement.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂