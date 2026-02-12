---
id: vserver-linux-lemp-stack
title: "VPS : Installer la stack LEMP - Linux, Nginx, MySQL, PHP"
description: "Découvrez comment configurer une stack LEMP pour héberger des sites PHP dynamiques sur des VPS Linux → En savoir plus maintenant"
sidebar_label: Stack Web LEMP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

La stack **LEMP** est une sélection populaire de logiciels open-source configurés ensemble pour permettre un hébergement simple de sites web dynamiques, avec un focus particulier sur les sites et applications PHP. L’acronyme signifie : **L**inux comme OS (système d’exploitation), "**E**ngine x" (nginx) comme serveur web, **M**ySQL comme base de données et enfin **P**HP pour le traitement. Dans ce guide, nous allons couvrir le processus d’installation d’une stack LEMP sur un VPS Linux, avec une explication détaillée et un exemple de création d’un site web de liste de tâches.

<InlineVoucher />

## Préparation

Commencez par vous connecter à votre serveur via SSH. Si vous ne savez pas comment faire, jetez un œil à notre [guide d’accès initial (SSH)](vserver-linux-ssh.md).

Dans ce guide, nous utiliserons Ubuntu comme distribution Linux. Les instructions sont les mêmes pour Debian et devraient être similaires pour d’autres distributions, même si la syntaxe des commandes peut légèrement varier. Assurez-vous d’avoir un OS installé et d’être connecté au serveur via SSH.

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

L’installation peut être facilement divisée en chaque dépendance principale de la stack LEMP, en commençant par le serveur web Nginx, suivi de la base de données MySQL et enfin PHP. Pendant l’installation, nous mettrons en place un site test écrit en PHP qui accédera à la base MySQL. Chaque requête web sera ensuite traitée et servie via le serveur web Nginx.

### Installation de Nginx

Nginx est le serveur web qui traitera les requêtes entrantes et servira les réponses. Installez-le avec la commande suivante.
```
sudo apt install nginx
```

Une fois installé, assurez-vous que les règles de pare-feu appropriées sont créées pour que le serveur web soit accessible depuis Internet. Dans cet exemple, nous utiliserons le **pare-feu UFW** car Nginx dispose d’une application enregistrée pour celui-ci.

Si vous utilisez un autre pare-feu, assurez-vous d’autoriser le port 80 (HTTP) à travers le pare-feu. Vous pouvez en apprendre plus sur les pare-feux sous Linux via notre guide [Gérer le pare-feu](vserver-linux-firewall.md).

Assurez-vous que le pare-feu UFW est activé et qu’une règle pour SSH est créée.
```
# Créer une règle pour autoriser SSH
sudo ufw allow OpenSSH

# Activer le pare-feu UFW
sudo ufw enable
```

:::caution
Assurez-vous d’avoir une règle SSH configurée si vous utilisez UFW ! Sinon, vous **ne pourrez plus** vous connecter en SSH si vous perdez la connexion actuelle !
:::

Créez maintenant la règle pour autoriser Nginx puis vérifiez que les règles sont bien en place.
```
# Créer une règle pour autoriser Nginx
sudo ufw allow in "Nginx Full"

# Vérifier les règles du pare-feu UFW
sudo ufw status
```

:::tip
Vous pouvez voir les profils disponibles avec la commande `ufw app list`. Dans l’exemple ci-dessus, utiliser `Nginx Full` signifie que les règles HTTP (port 80) et HTTPS (port 443) sont créées.
:::

Vous devriez voir les règles `Nginx` et `Nginx (v6)` avec l’action `ALLOW`, ce qui confirme que le pare-feu est prêt. Vous verrez aussi les autres règles que vous avez pu configurer, y compris celle pour SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

Avec le pare-feu ouvert pour Nginx, vérifiez que Nginx fonctionne bien. Vous pouvez tester en accédant à votre adresse IP dans un navigateur, par exemple : `http://[votre_adresse_ip]`

Si tout fonctionne, vous devriez voir une page d’accueil par défaut. Sinon, vérifiez le statut du service avec la commande : `systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### Installation de MySQL

Installez maintenant un serveur MySQL qui servira de base de données pour stocker les données de manière relationnelle. Installez-le avec la commande suivante.
```
sudo apt install mysql-server
```

Une fois l’installation terminée, il est recommandé de lancer un script d’installation sécurisée pour garantir la sécurité de votre instance MySQL. C’est optionnel mais fortement conseillé. Lancez-le avec la commande `sudo mysql_secure_installation`.

Ce script vous guidera de manière interactive. D’abord, il vous demandera si vous souhaitez activer la validation des mots de passe. Nous recommandons de répondre `Y` pour n’autoriser que des mots de passe sécurisés, puis de choisir soit `MEDIUM` via `1` ou `STRONG` via `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Ensuite, il vous demandera si vous souhaitez supprimer l’utilisateur `anonymous` et interdire la connexion root à distance. Pour la sécurité, acceptez les deux avec `Y`. Cela supprime l’utilisateur test et limite l’accès root à la connexion locale via SSH, réduisant ainsi les risques.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Enfin, il vous demandera si vous souhaitez supprimer la base de données `test` et recharger les tables de privilèges. Acceptez encore une fois avec `Y` car la base test n’est pas nécessaire et il faut recharger les privilèges pour que les changements prennent effet.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Vérifiez maintenant que MySQL tourne bien en essayant de vous connecter : `sudo mysql -u root`. Si ça marche, un message de bienvenue s’affichera. Vous pouvez quitter avec la commande `quit`.

### Installation de PHP

La dernière dépendance LEMP est PHP. Pour Nginx, cela nécessite d’utiliser un programme externe appelé `php-fpm` (PHP FastCGI Process Manager). Nginx sera configuré pour passer les requêtes à `php-fpm` avant de répondre.

Installez la dernière version de php-fpm ainsi qu’un plugin PHP pour MySQL, pour que Nginx puisse fonctionner avec PHP et que PHP puisse utiliser MySQL.
```
sudo apt install php-fpm php-mysql
```

Vérifiez que l’installation a réussi en affichant la version. Si une version s’affiche, PHP fonctionne correctement.
```
php -v
```

:::tip Extensions PHP
Pour des cas d’usage avancés, vous pourriez avoir besoin d’extensions PHP supplémentaires pour plus de fonctionnalités. Vous pouvez voir la liste avec la commande `apt search php- | less`.

Utilisez les flèches pour défiler et appuyez sur `Q` pour quitter. Pour installer une extension, utilisez simplement la commande apt install comme suit. Vous pouvez en installer plusieurs à la fois, séparées par un espace.

```
sudo apt install [php_extension] [...]
```
:::

### Création du site test

Avec toutes les dépendances LEMP installées, créons un site test pour montrer comment la stack fonctionne ensemble pour offrir une solution web dynamique. C’est optionnel, mais utile pour comprendre comment utiliser ces outils pour vos propres sites.

Dans cet exemple, on crée un petit site de liste de tâches en PHP qui récupère et affiche les tâches stockées dans une base MySQL. Le site sera servi via Nginx.

On utilisera un domaine test `zapdocs.example.com` tout au long du guide, car dans la vraie vie vous utiliserez sûrement un domaine. Vous **devez** configurer un enregistrement DNS de type `A` pour ce domaine pointant vers l’adresse IP de votre serveur. Si besoin, consultez notre guide [Enregistrements de domaine](domain-records.md).

:::note
Vous pouvez choisir de ne pas utiliser de domaine et remplacer `[your_domain]` par un nom simple. Vous accèderez alors au site via l’adresse IP. Mais dans ce cas, pensez à retirer la ligne `server_name` dans le fichier de configuration du serveur.
:::

#### Configuration de Nginx

Sur les serveurs web, tous les fichiers et données des sites sont généralement stockés dans `/var/www`. Par défaut, Nginx a un dossier `html` avec une page par défaut. Pour organiser proprement, surtout si vous hébergez plusieurs sites, on recommande de créer un dossier par site.

Créez donc un nouveau dossier dans `/var/www/[your_domain]` pour chaque domaine. Ici ce sera `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Créez maintenant un fichier de configuration de bloc serveur Nginx dans `sites-available` pour ce domaine.
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

Copiez-collez ce template dans nano, en remplaçant `[your_domain]` par votre domaine.
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
Il est important de remplacer `[your_phpversion]` par la version PHP installée. Vérifiez avec `php -v`, par exemple : `PHP 8.3.6 (cli) (built: Mar 19 2025 10:08:38) (NTS)`.

Ici, mettez `8.3` comme sous-version majeure, donc la ligne devient : `fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;`
:::

Ce fichier gère les requêtes HTTP sur le port 80 et vérifie que la requête correspond au `server_name` (votre domaine). Il indique aussi que le dossier `/var/www/[your_domain]` doit servir les fichiers.

Sauvegardez et quittez nano avec `CTRL + X`, puis `Y` pour confirmer et `ENTER`.

Activez la configuration en créant un lien symbolique dans `sites-enabled`.
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note Pas de domaine
Si vous **n’utilisez pas** de domaine, supprimez ou commentez la ligne `server_name` (en ajoutant un `#`). Désactivez aussi le bloc serveur par défaut avec `sudo unlink /etc/nginx/sites-enabled/default`.
:::

Testez la configuration avec `sudo nginx -t` pour vérifier qu’il n’y a pas d’erreurs.

Enfin, rechargez Nginx pour appliquer la nouvelle config : `sudo systemctl reload nginx`.

#### Création du site web

Maintenant que Nginx est configuré, il faut créer le site web à proprement parler. Le dossier est vide pour l’instant, donc rien ne sera servi. On va créer un petit site de liste de tâches comme expliqué.

##### Préparation de la base de données

D’abord, créons une base et une table pour stocker les tâches. Connectez-vous à MySQL.
```
sudo mysql -u root
```

Créez une base `todowebsite` et une table `todoitems`.
```
# Créer la base
CREATE DATABASE todowebsite;

# Utiliser la base
USE todowebsite;

# Créer la table des tâches
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Ajoutons quelques entrées exemples.
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Créons un utilisateur dédié `todo` pour ce site.
```
# Créer un utilisateur dédié
# Remplacez [your_password] par votre mot de passe
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Donner les privilèges (copiez en une seule fois)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Recharger les privilèges
FLUSH PRIVILEGES;
```

Quittez MySQL avec la commande `quit`.

##### Fichiers PHP du site

La dernière étape est de créer le fichier PHP principal pour la page de la liste de tâches. Ce sera un fichier `index.php` dans `/var/www/[your_domain]`. Ouvrez nano pour le créer.
```
sudo nano /var/www/[your_domain]/index.php
```

Voici un code simple à coller dans nano. Il crée une connexion MySQL et affiche les tâches stockées.

:::important
N’oubliez pas de remplacer `[your_password]` par le mot de passe que vous avez défini pour l’utilisateur `todo`.
:::

Le code HTML crée une liste non ordonnée qui boucle sur les résultats.

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

// Exécuter une requête SQL pour récupérer les entrées
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
      <p>Pour notre super guide ZAP-Hosting : <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
      <ul>
          <?php
          // Vérifier s’il y a des résultats
          if ($result->num_rows > 0) {
              // Boucler sur chaque entrée
              foreach ($result as $entry) {
                  echo "<li>";
                  // Afficher le nom en sécurisant contre le XSS
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
              // Si aucun résultat, afficher un message par défaut
              echo "<li>No to-do items found.</li>";
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

Sauvegardez et quittez nano avec `CTRL + X`, puis `Y` et `ENTER`.

#### Tester le site

Bravo, vous avez mis en place un site test de liste de tâches qui utilise toute la stack LEMP !

Vous devriez pouvoir accéder au site via le domaine (en HTTP/port 80) que vous avez configuré, ici `zapdocs.example.com`. Le rendu final devrait ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusion

Félicitations, vous avez installé et configuré la stack LEMP avec succès ! La prochaine étape, on vous **recommande vivement** de configurer un domaine et un **certificat SSL** pour sécuriser les échanges avec vos sites. Consultez notre [guide Certbot](dedicated-linux-certbot.md) en vous concentrant sur le **plugin Nginx** et suivez l’installation interactive pour configurer rapidement un certificat pour votre domaine.

Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />