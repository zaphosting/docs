---
id: vserver-linux-bitwarden
title: "Installer Bitwarden sur un serveur Linux - Sécurisez la gestion de vos mots de passe"
description: "Découvrez comment auto-héberger Bitwarden en toute sécurité pour gérer vos mots de passe avec un chiffrement de bout en bout et des fonctionnalités robustes → En savoir plus maintenant"
sidebar_label: Installer Bitwarden
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Bitwarden est un gestionnaire de mots de passe open source pour mots de passe et clés d’accès qui utilise le principe de connaissance nulle et un chiffrement de bout en bout pour protéger les données. Tu peux l’utiliser comme service cloud ou l’auto-héberger, avec des fonctionnalités pour générer, stocker et remplir automatiquement des identifiants forts.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

<InlineVoucher />

## Prérequis

Avant d’installer **Bitwarden**, assure-toi que ton environnement d’hébergement répond aux exigences suivantes pour garantir une installation fluide et des performances optimales.

| Matériel   | Minimum      | Recommandation ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU       | 4 vCPU                    |
| RAM        | 2 Go         | 4 Go                      |
| Espace disque | 12 Go      | 25 Go                     |

Le logiciel nécessite que toutes les dépendances soient installées et qu’il tourne sur un système d’exploitation supporté. Vérifie que ton serveur répond aux critères suivants avant de lancer l’installation :

**Dépendances :** `Docker (Engine 26+ et Compose)`

**Système d’exploitation :** Dernière version d’Ubuntu/Debian compatible avec Docker 26+

Assure-toi que toutes les dépendances sont installées et que la version du système d’exploitation est correcte pour éviter les problèmes de compatibilité lors de l’installation de Bitwarden.

## Préparation

Avant de configurer **Bitwarden**, tu dois préparer ton système. Cela inclut la mise à jour de ton système d’exploitation à la dernière version et l’installation de toutes les dépendances requises. Ces préparations garantissent un environnement stable et évitent les soucis pendant ou après l’installation.

### Mise à jour du système
Pour t’assurer que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par mettre à jour le système. Pour cela, lance la commande suivante :

```
sudo apt update && sudo apt upgrade -y
```
Cela garantit que ton système dispose des derniers correctifs de sécurité et des versions logicielles avant de continuer.

### Installer les dépendances
Une fois la mise à jour terminée, tu peux passer à l’installation des dépendances. Bitwarden sera déployé et exécuté sur ta machine via plusieurs conteneurs Docker. Docker doit donc être installé en premier. Pour cela, lance la commande suivante :

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un guide complet sur l’installation et l’utilisation de Docker est disponible dans notre [guide Docker](dedicated-linux-docker.md).

### Créer un utilisateur & un répertoire

On recommande de configurer ton serveur Linux avec un compte service dédié `bitwarden`, depuis lequel Bitwarden sera installé et exécuté. Cela garantit que ton instance Bitwarden est isolée des autres applications sur ton serveur.

Crée l’utilisateur bitwarden et définis un mot de passe fort et unique pour ce compte.

```
sudo adduser bitwarden
sudo passwd bitwarden
```

Crée le groupe docker s’il n’existe pas encore et ajoute l’utilisateur bitwarden au groupe docker :

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

Crée le répertoire de travail, définis les permissions et attribue la propriété à bitwarden :

```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```

### Configure ton domaine

Par défaut, Bitwarden tourne sur l’hôte via les ports 80 (HTTP) et 443 (HTTPS). Configure un domaine avec des enregistrements DNS pointant vers l’hôte, par exemple server.example.com, surtout si tu le sers sur Internet. Évite d’inclure Bitwarden dans le nom d’hôte pour réduire la divulgation du rôle ou du logiciel du serveur.

## Installation

Maintenant que tous les prérequis sont remplis et que les préparations sont faites, tu peux lancer l’installation de l’application Bitwarden.

Télécharge le script d’installation Bitwarden sur ta machine puis exécute-le. Un répertoire `./bwdata` sera créé à côté du fichier `bitwarden.sh`.

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

Dans l’installateur, tu commences par entrer le nom de domaine de ton instance Bitwarden, généralement l’enregistrement DNS configuré. Ensuite, tu choisis si Let’s Encrypt doit générer un certificat SSL gratuit et reconnu. Si oui, tu fournis un email pour les notifications d’expiration. Sinon, les questions sur le certificat suivent.

Entre ton ID d’installation et ta clé d’installation, tous deux obtenus sur [Bitwarden](https://bitwarden.com/host). Puis choisis la région US ou EU, ce qui importe uniquement si tu connectes une instance auto-hébergée à un abonnement payant.

Si tu n’utilises pas Let’s Encrypt, tu peux utiliser un certificat existant en plaçant les fichiers dans `./bwdata/ssl/your.domain` et en indiquant s’il est reconnu. Sinon, tu peux générer un certificat auto-signé, recommandé uniquement pour les tests. Si tu choisis de ne pas utiliser de certificat, tu dois placer un proxy HTTPS devant l’installation, sinon Bitwarden ne fonctionnera pas.

## Configuration

Après l’installation, complète la configuration de base via deux fichiers. Commence par éditer le fichier d’environnement `./bwdata/env/global.override.env`. Configure les détails de ton serveur SMTP, incluant hôte, port, SSL, nom d’utilisateur et mot de passe, pour que Bitwarden puisse envoyer les emails de vérification et d’invitation d’organisation. Si tu as besoin d’accéder au portail administrateur système, ajoute un email d’admin dans `adminSettings__admins`.

```
...
globalSettings__mail__smtp__host=<placeholder>
globalSettings__mail__smtp__port=<placeholder>
globalSettings__mail__smtp__ssl=<placeholder>
globalSettings__mail__smtp__username=<placeholder>
globalSettings__mail__smtp__password=<placeholder>
...
adminSettings__admins=
...
```

Teste la configuration SMTP avec `./bitwarden.sh checksmtp`. Une configuration correcte affiche un succès ; sinon, tu verras des messages sur OpenSSL manquant ou des valeurs incorrectes. Applique les changements avec `./bitwarden.sh restart`.

Ensuite, vérifie les paramètres d’installation dans `./bwdata/config.yml`. Ce fichier contrôle les ressources générées et doit être ajusté pour des environnements spécifiques, par exemple derrière un proxy ou avec des ports alternatifs. Applique ces modifications avec `./bitwarden.sh rebuild`.

Enfin, démarre l’instance avec `./bitwarden.sh start`. Le premier lancement peut prendre du temps pendant que Docker télécharge les images. Utilise `docker ps` pour vérifier que tous les conteneurs sont en bonne santé. Puis ouvre le coffre-fort web à ton domaine configuré et crée un compte si besoin. La vérification par email nécessite une configuration SMTP correcte.

## Conclusion et ressources supplémentaires

Félicitations ! Tu as maintenant installé et configuré Bitwarden avec succès sur ton VPS/serveur dédié. On te recommande aussi de jeter un œil aux ressources suivantes, qui peuvent t’apporter un coup de main et des conseils pendant ta configuration serveur :

- [bitwarden.com](https://bitwarden.com/) - Site officiel
- https://bitwarden.com/help/ - Centre d’aide Bitwarden (Documentation)

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute question ou assistance, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂