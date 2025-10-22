---
id: vserver-linux-lamp-stack
title: "VPS : Installer la stack LAMP - Linux, Apache, MySQL, PHP"
description: "Découvre comment configurer une stack LAMP pour héberger efficacement des sites PHP dynamiques sur un VPS Linux → En savoir plus maintenant"
sidebar_label: Stack Web LAMP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

La stack **LAMP** est une sélection populaire de logiciels open-source configurés ensemble pour permettre un hébergement simple de sites web dynamiques, avec un focus particulier sur les sites et applis PHP. L’acronyme signifie : **L**inux comme OS (système d’exploitation), **A**pache comme serveur web, **M**ySQL comme base de données et enfin **P**HP pour le traitement. Dans ce guide, on va voir comment installer une stack LAMP sur un VPS Linux, avec un exemple détaillé de création d’un site web de liste de tâches.

<InlineVoucher />

## Préparation

Commence par te connecter à ton serveur via SSH. Si tu ne sais pas comment faire, jette un œil à notre [guide d’accès initial (SSH)](vserver-linux-ssh.md).

Ici, on utilise Ubuntu comme distribution Linux. Les instructions sont les mêmes pour Debian et similaires pour d’autres distributions, même si la syntaxe des commandes peut légèrement varier. Assure-toi d’avoir un OS installé et d’être connecté au serveur via SSH.

Comme toujours, avant de lancer l’installation, vérifie que tous les paquets sont à jour avec la commande suivante :
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

L’installation se divise facilement en chaque dépendance principale de la stack LAMP, en commençant par le serveur web Apache, suivi de la base de données MySQL, et enfin PHP. Pendant l’installation, on va configurer un site test écrit en PHP qui accèdera à la base MySQL. Chaque requête web sera ensuite traitée et servie via Apache.

### Installation d’Apache

Apache est le serveur web qui va traiter les requêtes entrantes et renvoyer les réponses. Installe-le avec la commande suivante.
```
sudo apt install apache2
```

Une fois installé, assure-toi que les règles du pare-feu sont bien configurées pour que le serveur web soit accessible depuis Internet. Ici, on utilise le **pare-feu UFW** car Apache a une application enregistrée pour ça.

Si tu utilises un autre pare-feu, assure-toi d’autoriser le port 80 (HTTP). Tu peux en apprendre plus sur les pare-feux Linux dans notre guide [Gérer le pare-feu](vserver-linux-firewall.md).

Active le pare-feu UFW et crée une règle pour SSH.
```
# Autoriser SSH
sudo ufw allow OpenSSH

# Activer le pare-feu UFW
sudo ufw enable
```

:::caution
Assure-toi d’avoir une règle pour SSH si tu utilises UFW ! Sinon, tu **ne pourras plus** te connecter en SSH si tu perds ta session actuelle !
:::

Crée maintenant la règle pour Apache et vérifie que les règles sont bien en place.
```
# Autoriser Apache
sudo ufw allow in "Apache Full"

# Vérifier les règles du pare-feu UFW
sudo ufw status
```

:::tip
Tu peux voir les profils disponibles avec la commande `ufw app list`. Ici, `Apache Full` crée les règles pour HTTP (port 80) et HTTPS (port 443).
:::

Tu devrais voir les règles `Apache` et `Apache (v6)` avec l’action `ALLOW`, ce qui confirme que le pare-feu est prêt. Tu verras aussi les autres règles que tu as pu configurer, y compris celle pour SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Avec le pare-feu ouvert pour Apache, vérifie que le serveur fonctionne. Essaie d’accéder à ton adresse IP dans un navigateur : `http://[ton_adresse_ip]`

Si ça marche, tu verras une page d’accueil par défaut. Sinon, vérifie le statut du service avec : `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Installation de MySQL

Installe maintenant un serveur MySQL qui servira de base de données pour stocker tes données de façon relationnelle.
```
sudo apt install mysql-server
```

Une fois fini, il est recommandé de lancer un script d’installation sécurisée pour protéger ton serveur MySQL. C’est optionnel mais fortement conseillé. Lance-le avec `sudo mysql_secure_installation`.

Ce script interactif te demandera d’abord si tu veux activer la validation des mots de passe. On recommande de répondre `Y` pour n’autoriser que des mots de passe sécurisés, puis de choisir `MEDIUM` avec `1` ou `STRONG` avec `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Ensuite, il te demandera si tu veux supprimer l’utilisateur `anonymous` et interdire la connexion root à distance. Accepte avec `Y` pour renforcer la sécurité. Ça supprime l’utilisateur test et limite l’accès root à la connexion locale via SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Enfin, il te proposera de supprimer la base de données `test` et de recharger les tables de privilèges. Accepte encore avec `Y` car la base test n’est pas nécessaire et il faut recharger les privilèges.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Vérifie que MySQL tourne bien en essayant de te connecter : `sudo mysql -u root`. Si ça marche, tu verras un message de bienvenue. Tape `quit` pour sortir.

### Installation de PHP

La dernière dépendance LAMP est PHP, et c’est simple à installer. Cette commande installe PHP avec un module Apache et un plugin MySQL pour que tout fonctionne ensemble.
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

On recommande de modifier l’ordre des fichiers index pour que `index.php` soit prioritaire sur `index.html`. Ouvre le fichier :
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

Dans nano, enlève `index.php` et remets-le en premier dans la liste, comme ça :
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Sauvegarde avec `CTRL + X`, puis `Y` et `ENTER`. Redémarre Apache pour appliquer : `sudo systemctl restart apache2`.

### Création du site test

Maintenant que tout est installé, on va créer un site test pour montrer comment la stack LAMP fonctionne ensemble. C’est optionnel, mais ça aide à comprendre comment utiliser ces outils pour tes propres sites.

Ici, on crée un petit site de liste de tâches en PHP qui récupère et affiche les tâches stockées dans une base MySQL. Le site sera servi via Apache.

On utilisera un domaine test `zapdocs.example.com`. En vrai, tu utiliseras un domaine. Tu **dois** créer un enregistrement DNS de type `A` pointant vers l’adresse IP de ton serveur. Besoin d’aide ? Consulte notre guide [Enregistrements de domaine](domain-records.md).

:::note
Tu peux ne pas utiliser de domaine et remplacer `[your_domain]` par un nom simple. Tu accéderas alors au site via l’adresse IP. Dans ce cas, supprime la ligne `ServerName` dans le fichier de configuration du virtual host.
:::

#### Configuration d’Apache

Sur les serveurs web, les fichiers des sites sont généralement dans `/var/www`. Par défaut, Apache a un dossier `html` avec une page par défaut. Pour organiser plusieurs sites, on recommande de créer un dossier par site.

Crée un dossier pour ton domaine dans `/var/www/[your_domain]`. Ici : `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Crée un fichier de configuration de virtual host dans `sites-available` pour ce domaine.
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Copie-colle ce modèle en remplaçant `[your_domain]` par ton domaine.
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

Sauvegarde et quitte nano (`CTRL + X`, `Y`, `ENTER`). Vérifie la config avec :
```
sudo apache2ctl configtest
```

Active le virtual host avec :
```
sudo a2ensite [your_domain]
```

:::note Pas de domaine
Si tu n’utilises pas de domaine, supprime ou commente la ligne `ServerName` avec un `#`. Désactive aussi le virtual host par défaut :
```
sudo a2dissite 000-default
```
:::

Redémarre Apache pour appliquer : `sudo systemctl restart apache2`.

#### Création du site web

Maintenant que Apache est configuré, crée le site web à proprement parler. Le dossier est vide, donc rien ne sera servi pour l’instant. On va créer un petit site de liste de tâches.

##### Préparation de la base de données

Connecte-toi à MySQL :
```
sudo mysql -u root
```

Crée une base `todowebsite` et une table `todoitems`.
```
# Créer la base
CREATE DATABASE todowebsite;

# Utiliser la base
USE todowebsite;

# Créer la table
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Ajoute quelques entrées exemples.
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Crée un utilisateur dédié `todo` pour ce site.
```
# Créer l’utilisateur
# Remplace [your_password] par ton mot de passe
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Donner les droits (copie en une seule fois)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Recharger les privilèges
FLUSH PRIVILEGES;
```

Sors de MySQL avec `quit`.

##### Fichiers PHP du site

Crée le fichier PHP principal `index.php` dans `/var/www/[your_domain]`.
```
sudo nano /var/www/[your_domain]/index.php
```

Voici un code simple pour afficher la liste des tâches depuis la base. La première partie PHP connecte MySQL.

:::important
N’oublie pas de remplacer `[your_password]` par le mot de passe que tu as défini pour l’utilisateur `todo`.
:::

La partie HTML affiche la page avec une liste non ordonnée qui boucle sur les résultats.

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

// Requête SQL pour récupérer les entrées
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
          // Vérifier s’il y a des résultats
          if ($result->num_rows > 0) {
              // Boucler sur chaque entrée
              foreach ($result as $entry) {
                  echo "<li>";
                  // Afficher le nom en sécurisant contre XSS
                  echo htmlspecialchars($entry["name"]);

                  // Afficher le statut de complétion
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // Afficher la date de création
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Si rien, afficher un message par défaut
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// Fermer la connexion
$conn->close();
?>
```

Sauvegarde et quitte nano (`CTRL + X`, `Y`, `ENTER`).

#### Tester le site

Tu as suivi le guide et créé un site test qui utilise toute la stack LAMP !

Tu peux maintenant accéder au site via le domaine (en HTTP/port 80) que tu as configuré, ici `zapdocs.example.com`. Le rendu final devrait ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusion

Bravo, tu as installé et configuré la stack LAMP avec succès ! La prochaine étape, on te **recommande vivement** de configurer un domaine et un **certificat SSL** pour sécuriser les échanges avec tes sites. Consulte notre [guide Certbot](vserver-linux-certbot.md) en te concentrant sur le **plugin Apache** et suis la configuration interactive pour installer rapidement un certificat pour ton domaine.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />