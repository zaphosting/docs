---
id: vserver-linux-standard-notes
title: "VPS : Installer Standard Notes sur Linux"
description: "Découvrez comment synchroniser et protéger vos notes en toute sécurité sur plusieurs appareils avec Standard Notes en auto-hébergement → En savoir plus maintenant"
sidebar_label: Installer Standard Notes
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Standard Notes est une application de prise de notes open-source qui protège vos données grâce à un chiffrement de bout en bout audité. Vous êtes le seul à contrôler les clés de déchiffrement. Elle synchronise vos notes et fichiers chiffrés de manière fluide sur un nombre illimité d’appareils, les garde accessibles hors ligne, et protège activement votre contenu contre tout accès externe.

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

Vous envisagez d’héberger ce service vous-même ? On vous guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

<InlineVoucher />



## Prérequis

Avant d’installer **Standard Notes**, assurez-vous que votre environnement d’hébergement répond aux exigences suivantes pour garantir une installation fluide et des performances optimales.

| Matériel   | Minimum      | Recommandation ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Cœurs | 4 vCPU Cœurs               |
| RAM        | 2 Go         | 4 Go                       |
| Espace disque | 5 Go       | 25 Go                      |

Le logiciel nécessite que toutes les dépendances requises soient installées et qu’il tourne sur un système d’exploitation supporté. Vérifiez que votre serveur remplit les conditions suivantes avant de lancer l’installation :

**Dépendances :** `Docker (Engine 26+ et Compose)`

**Système d’exploitation :** Dernière version d’Ubuntu/Debian compatible avec Docker 26+

Assurez-vous que toutes les dépendances sont installées et que la version du système d’exploitation est correcte pour éviter tout problème de compatibilité lors de l’installation de Standard Notes.



## Préparation

Avant de configurer **Standard Notes**, vous devez préparer votre système. Cela inclut la mise à jour de votre système d’exploitation vers la dernière version et l’installation de toutes les dépendances nécessaires. Ces préparatifs garantissent un environnement stable et aident à prévenir les soucis pendant ou après l’installation.


### Mise à jour du système
Pour vous assurer que votre système fonctionne avec les dernières améliorations logicielles et de sécurité, commencez toujours par une mise à jour système. Pour cela, lancez la commande suivante :

```
sudo apt update && sudo apt upgrade -y
```
Cela garantit que votre système dispose des derniers correctifs de sécurité et des versions logicielles avant de continuer.

### Installer les dépendances
Une fois la mise à jour terminée, vous pouvez passer à l’installation des dépendances. Standard Notes sera déployé et exécuté sur votre machine via plusieurs conteneurs Docker. Docker doit donc être installé en premier. Pour cela, lancez la commande suivante :

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un guide complet sur l’installation et l’utilisation de Docker est disponible dans notre [guide Docker](dedicated-linux-docker.md).




## Installation
Maintenant que toutes les exigences sont remplies et que les préparatifs sont faits, vous pouvez procéder à l’installation de l’application Standard Notes.



Commencez par créer un dossier qui contiendra tous les fichiers de configuration et d’installation. Ce dossier sera votre répertoire de travail pour l’installation.

```
mkdir standardnotes
cd standardnotes
```

Ensuite, créez un fichier `.env` dans votre répertoire de travail et remplissez-le avec les valeurs par défaut du fichier de configuration exemple du projet :
```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

Ce fichier contient uniquement les variables minimales requises pour une installation fonctionnelle. La liste complète des variables actuellement utilisées est disponible ici : [docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

Ouvrez le fichier `.env` et assurez-vous que toutes les clés dans la section KEYS sont correctement définies. Générez des valeurs aléatoires pour chaque variable d’environnement requise avec :

```
openssl rand -hex 32
```

Collez ces valeurs dans votre fichier `.env`. Standard Notes nécessite un script bootstrap pour LocalStack. Téléchargez-le dans votre répertoire de travail et rendez-le exécutable :

```shell
curl https://raw.githubusercontent.com/standardnotes/server/main/docker/localstack_bootstrap.sh > localstack_bootstrap.sh
chmod +x localstack_bootstrap.sh
```

Téléchargez la configuration officielle d’exemple et enregistrez-la sous le nom `docker-compose.yml` dans votre dossier de travail. Ce fichier définit tous les services conteneurs nécessaires pour Standard Notes.

```
curl https://raw.githubusercontent.com/standardnotes/server/main/docker-compose.example.yml > docker-compose.yml
```

Une fois tout prêt, récupérez les dernières images et démarrez les services en mode détaché :

```
docker compose pull && docker compose up -d
```



## Configuration

La configuration par défaut dans le fichier `docker-compose.yml` fourni peut être personnalisée selon vos besoins spécifiques. Un point clé est le service `server`, où vous pouvez ajuster les mappages de ports dans la propriété `ports`. Cela vous permet de choisir sur quels ports hôtes l’application sera accessible, évitant ainsi les conflits avec d’autres services en cours d’exécution ou pour correspondre à votre configuration réseau préférée.

Sécuriser la base de données est une autre étape cruciale. Les mots de passe par défaut doivent être remplacés par des chaînes fortes et générées aléatoirement. Vous pouvez créer un mot de passe sécurisé avec :

```
openssl rand -hex 12  
```

Ajoutez la valeur générée dans le fichier `.env` sous `DB_PASSWORD`. Cette même valeur doit aussi être définie pour `MYSQL_ROOT_PASSWORD` et `MYSQL_PASSWORD` dans le fichier `docker-compose.yml` pour garder les conteneurs synchronisés.

Ces modifications de configuration garantissent que votre installation est non seulement fonctionnelle, mais aussi sécurisée et adaptée à votre environnement.





## Connexion au serveur de synchronisation

Pour configurer votre compte dans Standard Notes, cliquez sur l’icône avatar en bas à droite de l’application. Dans le menu qui s’ouvre, sélectionnez « Créer un compte » pour commencer à créer un nouveau profil utilisateur. Entrez une adresse email valide ainsi qu’un mot de passe sécurisé.

Avant de finaliser, ouvrez la section « Options avancées ». Sous « Serveur de synchronisation », choisissez l’option « Personnalisé » et saisissez l’adresse IP et le port de votre propre serveur au format IP:Port. Cela garantit que vos notes ne sont pas synchronisées via le service Standard Notes par défaut, mais bien avec votre serveur auto-hébergé.

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)





## Conclusion et ressources supplémentaires

Félicitations ! Vous avez maintenant installé et configuré avec succès Standard Notes sur votre VPS. Nous vous recommandons aussi de jeter un œil aux ressources suivantes, qui pourraient vous apporter un coup de main et des conseils supplémentaires pendant la configuration de votre serveur :

- [Standardnotes.com](https://standardnotes.com/) - Site officiel
- [Standardnotes.com/help](https://standardnotes.com/help) - Centre d’aide Standard Notes (Documentation)

Vous avez des questions spécifiques qui ne sont pas couvertes ici ? Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂