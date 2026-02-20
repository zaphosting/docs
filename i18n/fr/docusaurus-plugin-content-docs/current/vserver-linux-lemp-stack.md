---
id: vserver-linux-lemp-stack
title: "Installer une stack LEMP sur un serveur Linux - Déploie des applications web ultra performantes"
description: "Découvre comment configurer une stack LEMP pour héberger des sites PHP dynamiques sur des VPS Linux → En savoir plus maintenant"
sidebar_label: Stack Web LEMP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

La stack **LEMP** est une sélection populaire de logiciels open-source configurés ensemble pour permettre un hébergement simple de sites web dynamiques, avec un focus particulier sur les sites et applis PHP. L’acronyme signifie : **L**inux comme OS (système d’exploitation), "**E**ngine x" (nginx) comme serveur web, **M**ySQL comme base de données et enfin **P**HP pour le traitement. Dans ce guide, on va voir comment installer une stack LEMP sur un VPS Linux, avec un exemple détaillé de création d’un site web de liste de tâches.

<InlineVoucher />

## Préparation

Commence par te connecter à ton serveur via SSH. Si tu ne sais pas comment faire, jette un œil à notre [guide d’accès initial (SSH)](vserver-linux-ssh.md).

Ici, on utilise Ubuntu comme distribution Linux. Les instructions sont les mêmes pour Debian et similaires pour d’autres distributions, mais la syntaxe des commandes peut légèrement varier. Assure-toi d’avoir un OS installé et d’être connecté au serveur via SSH.

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

L’installation se découpe facilement en chaque dépendance principale de la stack LEMP, en commençant par le serveur web Nginx, suivi de la base de données MySQL et enfin PHP. Pendant l’installation, on va configurer un site test écrit en PHP qui accèdera à la base MySQL. Chaque requête web sera ensuite traitée et servie via Nginx.

### Configuration de Nginx

Nginx est le serveur web qui va traiter les requêtes entrantes et renvoyer les réponses. Installe-le avec la commande suivante.
```
sudo apt install nginx
```

Une fois installé, assure-toi que les règles du pare-feu sont bien créées pour que le serveur web soit accessible depuis Internet. Ici, on utilise le **pare-feu UFW** car Nginx a une application enregistrée pour ça.

Si tu utilises un autre pare-feu, veille à autoriser le port 80 (HTTP). Tu peux en apprendre plus sur les pare-feux Linux dans notre guide [Gérer le pare-feu](vserver-linux-firewall.md).

Assure-toi que le pare-feu UFW est activé et qu’une règle SSH est créée.
```
# Crée une règle pour autoriser SSH
sudo ufw allow OpenSSH

# Active le pare-feu UFW
sudo ufw enable
```

:::caution
Assure-toi d’avoir une règle SSH si tu utilises UFW ! Sinon, tu **ne pourras plus** te connecter en SSH si tu perds ta session actuelle !
:::

Crée maintenant la règle pour autoriser Nginx puis vérifie que les règles sont bien en place.
```
# Autorise Nginx
sudo ufw allow in "Nginx Full"

# Vérifie les règles du pare-feu UFW
sudo ufw status
```

:::tip
Tu peux voir les profils disponibles avec la commande `ufw app list`. Ici, `Nginx Full` crée les règles pour HTTP (port 80) et HTTPS (port 443).
:::

Tu devrais voir les règles `Nginx` et `Nginx (v6)` avec l’action `ALLOW`, ce qui confirme que le pare-feu est prêt. Tu verras aussi les autres règles que tu as pu configurer, y compris celle pour SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

Avec le pare-feu ouvert pour Nginx, vérifie que Nginx fonctionne bien. Essaie d’accéder à ton adresse IP dans un navigateur : `http://[ton_adresse_ip]`

Si ça marche, tu verras une page d’accueil par défaut. Sinon, vérifie le statut du service avec : `systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### Configuration de MySQL

Installe et configure maintenant un serveur MySQL qui servira de base de données pour stocker tes données de façon relationnelle. Installe-le avec :
```
sudo apt install mysql-server
```

Une fois fini, il est recommandé de lancer un script d’installation sécurisée pour protéger ton serveur MySQL. C’est optionnel mais fortement conseillé. Lance-le avec `sudo mysql_secure_installation`.

Ce script interactif te demandera d’abord si tu veux activer la validation des mots de passe. On recommande de répondre `Y` pour n’autoriser que des mots de passe sécurisés, puis de choisir `MEDIUM` avec `1` ou `STRONG` avec `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Ensuite, il te demandera de supprimer l’utilisateur `anonymous` et d’interdire la connexion root à distance. Accepte les deux avec `Y` pour renforcer la sécurité. Ça supprime l’utilisateur test et limite l’accès root à la machine locale via SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Enfin, il te proposera de supprimer la base `test` et de recharger les tables de privilèges. Accepte encore avec `Y` car la base test n’est pas nécessaire et il faut recharger les privilèges.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Vérifie que MySQL tourne bien en essayant de te connecter : `sudo mysql -u root`. Si ça marche, tu verras un message de bienvenue. Tape `quit` pour sortir.

### Configuration de PHP

La dernière dépendance LEMP est PHP. Pour Nginx, il faut utiliser un programme externe appelé `php-fpm` (PHP fastCGI process manager). Nginx sera configuré pour passer les requêtes à `php-fpm` avant de répondre.

Installe la dernière version de php-fpm et le plugin PHP pour MySQL avec :
```
sudo apt install php-fpm php-mysql
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

### Création du site test

Maintenant que chaque dépendance LEMP est installée, on va créer un site test pour montrer comment la stack fonctionne ensemble pour faire un super site dynamique. C’est optionnel, mais utile pour comprendre comment utiliser ces outils.

Ici, on va créer un petit site de liste de tâches en PHP qui récupère et affiche les tâches stockées dans une base MySQL. Le site sera servi via Nginx.

On utilisera un domaine test `zapdocs.example.com` pour l’exemple, car dans la vraie vie tu utiliseras un domaine. Tu **dois** créer un enregistrement DNS de type `A` pour ce domaine qui pointe vers l’adresse IP de ton serveur. Si tu as besoin d’aide, consulte notre guide [Enregistrements de domaine](domain-records.md).

:::note
Tu peux ne pas utiliser de domaine et remplacer `[your_domain]` par un nom simple. Tu accéderas alors au site via l’adresse IP. Mais dans ce cas, supprime la ligne `server_name` dans le fichier de configuration du serveur.
:::

#### Configuration de Nginx

Sur les serveurs web, tous les fichiers et données des sites sont généralement stockés dans `/var/www`. Par défaut, Nginx a un dossier `html` avec une page par défaut. Pour organiser proprement, surtout si tu héberges plusieurs sites, on recommande de créer un dossier par site.

Crée un nouveau dossier dans `/var/www/[your_domain]` pour ton site. Ici ce sera `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Crée ensuite un fichier de configuration de bloc serveur Nginx dans `sites-available` pour ce domaine.
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

Copie-colle ce template dans nano, en remplaçant `[your_domain]` par ton domaine.
```
server {
    listen 80;
    server_name [your_domain] www.[your_domain];
    root /var/www/[your_domain];

    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php[your_phpversion]-fpm.sock;
     }

    location ~ /\.ht {
        deny all;
    }
}
```

:::important Version PHP
Change bien `[your_phpversion]` par la version PHP installée. Vérifie avec `php -v`, par exemple : `PHP 8.3.6 (cli) (built: Mar 19 2025 10:08:38) (NTS)`.

Ici, mets `8.3` pour que la ligne devienne : `fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;`
:::

Ce fichier gère les requêtes sur le port 80 (HTTP) et vérifie que la requête correspond au `server_name` (ton domaine). Il indique aussi que le dossier `/var/www/[your_domain]` doit servir les fichiers.

Sauvegarde et quitte nano avec `CTRL + X`, puis `Y` et `ENTER`.

Active la config en créant un lien dans `sites-enabled`.
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note Pas de domaine
Si tu n’utilises pas de domaine, supprime ou commente la ligne `server_name` (avec un `#`). Désactive aussi le bloc serveur par défaut avec : `sudo unlink /etc/nginx/sites-enabled/default`.
:::

Teste la config avec `sudo nginx -t` pour vérifier qu’il n’y a pas d’erreurs.

Redémarre Nginx pour appliquer la nouvelle config : `sudo systemctl reload nginx`.

#### Création du site web

Maintenant que Nginx est configuré, il faut créer le site web à proprement parler. Le dossier est vide, donc rien ne sera servi. On va créer un petit site de liste de tâches en PHP.

##### Préparation de la base de données

Connecte-toi à MySQL.
```
sudo mysql -u root
```

Crée une base `todowebsite` et une table `todoitems`.
```
# Crée la base
CREATE DATABASE todowebsite;

# Utilise la base
USE todowebsite;

# Crée la table des tâches
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Ajoute quelques entrées exemples.
```
INSERT INTO todoitems (name, is_completed) VALUES ('Créer le guide ZAP-Docs', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Acheter un serveur ZAP-Hosting', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Rejoindre le Discord ZAP-Hosting', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Passe une super journée !', 0);
```

Crée un utilisateur dédié `todo` pour ce site.
```
# Crée l’utilisateur
# Remplace [your_password] par ton mot de passe
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Donne les droits (copie en une seule fois)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Recharge les privilèges
FLUSH PRIVILEGES;
```

Sors de MySQL avec `quit`.

##### Fichiers PHP du site

Crée le fichier PHP principal `index.php` dans `/var/www/[your_domain]`.
```
sudo nano /var/www/[your_domain]/index.php
```

Voici un code simple pour afficher la liste des tâches depuis la base. La première partie PHP établit la connexion MySQL.

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
<html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Liste de Tâches</title>
  </head>
  <body>
      <h1>Super Liste de Tâches :D</h1>
      <p>Pour notre super guide ZAP-Hosting : <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
      <ul>
          <?php
          // Vérifie s’il y a des résultats
          if ($result->num_rows > 0) {
              // Parcourt chaque entrée
              foreach ($result as $entry) {
                  echo "<li>";
                  // Affiche le nom en sécurisant contre le XSS
                  echo htmlspecialchars($entry["name"]);

                  // Affiche le statut de complétion
                  if ($entry["is_completed"]) {
                      echo " <strong>(Terminé)</strong>";
                  } else {
                      echo " <strong>(Incomplet)</strong>";
                  }

                  // Affiche la date de création
                  echo " - Date de création : " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Si rien, affiche un message par défaut
              echo "<li>Aucune tâche trouvée.</li>";
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

Sauvegarde et quitte nano avec `CTRL + X`, puis `Y` et `ENTER`.

#### Test du site

Tu as suivi le guide et créé un site test qui utilise toute la stack LEMP !

Tu peux maintenant accéder au site via le domaine (en `http`/port 80) que tu as défini dans le bloc serveur, ici `zapdocs.example.com`. Le résultat final devrait ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusion

Bravo, tu as installé et configuré la stack LEMP avec succès ! La prochaine étape, on te **recommande vivement** de configurer un domaine et un **certificat SSL** pour sécuriser les échanges avec tes sites. Consulte notre [guide Certbot](dedicated-linux-certbot.md) avec un focus sur le **plugin Nginx** et suis l’installation interactive pour mettre en place un certificat facilement.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />