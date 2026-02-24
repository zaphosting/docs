---
id: vserver-linux-standard-notes
title: "Installer Standard Notes sur un serveur Linux - Crée ton système privé de notes"
description: "Découvre comment synchroniser et protéger tes notes en toute sécurité sur tous tes appareils avec l’auto-hébergement de Standard Notes → En savoir plus maintenant"
sidebar_label: Installer Standard Notes
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Standard Notes est une appli de notes open-source qui protège tes données grâce à un chiffrement de bout en bout audité. Toi seul contrôles les clés de déchiffrement. Elle synchronise tes notes et fichiers chiffrés sans accroc sur un nombre illimité d’appareils, les garde accessibles hors ligne, et protège activement ton contenu contre tout accès externe.

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

<InlineVoucher />



## Prérequis

Avant d’installer **Standard Notes**, assure-toi que ton environnement d’hébergement répond aux exigences suivantes pour garantir une installation fluide et des performances optimales.

| Matériel   | Minimum      | Recommandation ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Cœurs | 4 vCPU Cœurs               |
| RAM        | 2 Go         | 4 Go                       |
| Espace disque | 5 Go       | 25 Go                      |

Le logiciel nécessite que toutes les dépendances requises soient installées et qu’il tourne sur un système d’exploitation supporté. Vérifie que ton serveur remplit ces conditions avant de lancer l’installation :

**Dépendances :** `Docker (Engine 26+ et Compose)` 

**Système d’exploitation :** Dernière version d’Ubuntu/Debian compatible Docker 26+

Assure-toi que toutes les dépendances sont installées et que la version du système d’exploitation est correcte pour éviter les problèmes de compatibilité lors de l’installation de Standard Notes.



## Préparation

Avant de configurer **Standard Notes**, tu dois préparer ton système. Cela inclut la mise à jour de ton système d’exploitation à la dernière version et l’installation de toutes les dépendances nécessaires. Ces préparatifs garantissent un environnement stable et préviennent les soucis pendant ou après l’installation.


### Mise à jour du système
Pour t’assurer que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par une mise à jour système. Lance cette commande :

```
sudo apt update && sudo apt upgrade -y
```
Cela garantit que ton système dispose des derniers patchs de sécurité et versions logicielles avant de continuer.

### Installer les dépendances
Une fois la mise à jour terminée, tu peux installer les dépendances. Standard Notes sera déployé et exécuté sur ta machine via plusieurs conteneurs Docker. Docker doit donc être installé en premier. Pour ça, lance :

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un guide complet sur l’installation et l’utilisation de Docker est dispo dans notre [guide Docker](dedicated-linux-docker.md).




## Installation
Maintenant que tous les prérequis sont remplis et que la préparation est faite, tu peux passer à l’installation de l’application Standard Notes.



Commence par créer un dossier qui contiendra tous les fichiers de configuration et d’installation. Ce dossier sera ton espace de travail pour l’installation.

```
mkdir standardnotes
cd standardnotes
```

Ensuite, crée un fichier `.env` dans ton dossier de travail et remplis-le avec les valeurs par défaut du fichier de configuration exemple du projet :
```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

Ce fichier contient uniquement les variables minimales requises pour un setup fonctionnel. La liste complète des variables utilisées est dispo ici : [docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

Ouvre le fichier `.env` et vérifie que toutes les clés dans la section KEYS sont bien définies. Génère des valeurs aléatoires pour chaque variable d’environnement requise avec :

```
openssl rand -hex 32
```

Colle ces valeurs dans ton fichier `.env`. Standard Notes a besoin d’un script bootstrap pour LocalStack. Télécharge-le dans ton dossier de travail et rends-le exécutable :

```shell
curl https://raw.githubusercontent.com/standardnotes/server/main/docker/localstack_bootstrap.sh > localstack_bootstrap.sh
chmod +x localstack_bootstrap.sh
```

Télécharge la configuration officielle d’exemple et sauvegarde-la sous `docker-compose.yml` dans ton dossier de travail. Ce fichier définit tous les services conteneurs nécessaires à Standard Notes.

```
curl https://raw.githubusercontent.com/standardnotes/server/main/docker-compose.example.yml > docker-compose.yml
```

Une fois tout prêt, récupère les dernières images et lance les services en mode détaché :

```
docker compose pull && docker compose up -d
```



## Configuration

La configuration par défaut dans le fichier `docker-compose.yml` fourni peut être personnalisée selon tes besoins. Un point clé est le service `server`, où tu peux ajuster les mappages de ports dans la propriété `ports`. Cela te permet de choisir sur quels ports hôtes l’application sera accessible, évitant ainsi les conflits avec d’autres services en cours ou pour coller à ta config réseau préférée.

Sécuriser la base de données est aussi crucial. Remplace les mots de passe par défaut par des chaînes fortes et générées aléatoirement. Tu peux créer un mot de passe sécurisé avec :

```
openssl rand -hex 12  
```

Ajoute la valeur générée dans le fichier `.env` sous `DB_PASSWORD`. La même valeur doit aussi être définie pour `MYSQL_ROOT_PASSWORD` et `MYSQL_PASSWORD` dans le fichier `docker-compose.yml` pour garder les conteneurs synchronisés.

Ces modifications garantissent que ton installation est non seulement fonctionnelle, mais aussi sécurisée et adaptée à ton environnement.





## Connexion au serveur de synchronisation

Pour configurer ton compte dans Standard Notes, clique sur l’icône avatar en bas à droite de l’appli. Dans le menu qui s’ouvre, choisis “Créer un compte” pour commencer à créer ton profil utilisateur. Entre une adresse email valide et un mot de passe sécurisé.

Avant de valider, ouvre la section “Options avancées”. Sous “Serveur de synchronisation”, sélectionne l’option “Personnalisé” et saisis l’adresse IP et le port de ton propre serveur au format IP:Port. Cela garantit que tes notes ne seront pas synchronisées via le service Standard Notes par défaut, mais bien avec ton serveur auto-hébergé.

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)





## Conclusion et ressources supplémentaires

Félicitations ! Tu as maintenant installé et configuré avec succès Standard Notes sur ton VPS/serveur dédié. On te conseille aussi de jeter un œil aux ressources suivantes, qui peuvent t’apporter un coup de main et des conseils pendant ta configuration serveur :

- [Standardnotes.com](https://standardnotes.com/) - Site officiel
- [Standardnotes.com/help](https://standardnotes.com/help) - Centre d’aide Standard Notes (Documentation)

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou assistance, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂