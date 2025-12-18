---
id: vserver-linux-bitwarden
title: "VPS : Installer Bitwarden sur Linux"
description: "Découvrez comment héberger en toute sécurité Bitwarden pour gérer vos mots de passe avec un chiffrement de bout en bout et des fonctionnalités solides de gestion des identifiants → En savoir plus maintenant"
sidebar_label: Installer Bitwarden
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Bitwarden est un gestionnaire de mots de passe open source pour mots de passe et clés d’accès qui utilise le principe du zero knowledge et un chiffrement de bout en bout pour protéger vos données. Vous pouvez l’utiliser comme service cloud ou l’auto-héberger, avec des fonctionnalités pour générer, stocker et remplir automatiquement des identifiants forts.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Vous pensez à héberger ce service vous-même ? On vous guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

<InlineVoucher />



## Prérequis

Avant d’installer **Bitwarden**, assurez-vous que votre environnement d’hébergement remplit les conditions suivantes pour garantir une installation fluide et des performances optimales.

| Matériel  | Minimum      | Recommandation ZAP-Hosting |
| --------- | ------------ | -------------------------- |
| CPU       | 1 vCPU       | 4 vCPU                    |
| RAM       | 2 Go         | 4 Go                      |
| Espace disque | 12 Go     | 25 Go                     |

Le logiciel nécessite que toutes les dépendances soient installées et qu’il tourne sur un système d’exploitation supporté. Vérifiez que votre serveur répond aux critères suivants avant de lancer l’installation :

**Dépendances :** `Docker (Engine 26+ et Compose)`

**Système d’exploitation :** Dernière version d’Ubuntu/Debian compatible avec Docker 26+

Assurez-vous que toutes les dépendances sont installées et que la bonne version du système d’exploitation est utilisée pour éviter les problèmes de compatibilité lors de l’installation de Bitwarden.



## Préparation

Avant de configurer **Bitwarden**, vous devez préparer votre système. Cela inclut la mise à jour de votre système d’exploitation à la dernière version et l’installation de toutes les dépendances requises. Ces préparatifs garantissent un environnement stable et évitent les soucis pendant ou après l’installation.


### Mettre à jour le système
Pour être sûr que votre système tourne avec les dernières améliorations logicielles et de sécurité, commencez toujours par une mise à jour système. Pour cela, lancez la commande suivante :

```
sudo apt update && sudo apt upgrade -y
```
Cela garantit que votre système dispose des derniers correctifs de sécurité et des versions logicielles avant de continuer.

### Installer les dépendances
Une fois la mise à jour terminée, vous pouvez installer les dépendances. Bitwarden sera déployé et exécuté sur votre machine via plusieurs conteneurs Docker. Il faut donc installer Docker en premier. Pour cela, lancez :

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un guide complet sur l’installation et l’utilisation de Docker est disponible dans notre [guide Docker](vserver-linux-docker.md).



### Créer un utilisateur & un répertoire

On recommande de configurer votre serveur Linux avec un compte service dédié `bitwarden` pour installer et faire tourner Bitwarden. Cela garantit que votre instance Bitwarden est isolée des autres applis sur votre serveur.

Créez l’utilisateur bitwarden et définissez un mot de passe fort et unique pour ce compte.

```
sudo adduser bitwarden
sudo passwd bitwarden
```

Créez le groupe docker s’il n’existe pas encore et ajoutez l’utilisateur bitwarden au groupe docker :

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

Créez le répertoire de travail, définissez les permissions et attribuez la propriété à bitwarden :
```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```



### Configurer votre domaine

Par défaut, Bitwarden tourne sur l’hôte via les ports 80 (HTTP) et 443 (HTTPS). Configurez un domaine avec des enregistrements DNS pointant vers l’hôte, par exemple server.example.com, surtout si vous le servez sur Internet. Évitez d’inclure « Bitwarden » dans le nom d’hôte pour limiter la divulgation du rôle ou du logiciel du serveur.




## Installation
Maintenant que tous les prérequis sont remplis et que la préparation est faite, vous pouvez lancer l’installation de l’application Bitwarden.

Téléchargez le script d’installation Bitwarden sur votre machine puis exécutez-le. Un répertoire `./bwdata` sera créé à côté du fichier `bitwarden.sh`.

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

Dans l’installateur, vous entrez d’abord le nom de domaine de votre instance Bitwarden, généralement l’enregistrement DNS configuré. Ensuite, vous choisissez si Let’s Encrypt doit générer un certificat SSL gratuit et reconnu. Si oui, vous fournissez un email pour les notifications d’expiration. Sinon, les questions sur le certificat suivent.

Saisissez votre ID d’installation et votre clé d’installation, tous deux obtenus sur [Bitwarden](https://bitwarden.com/host). Puis sélectionnez la région US ou EU, ce qui importe uniquement si vous connectez une instance auto-hébergée à un abonnement payant.

Si vous n’utilisez pas Let’s Encrypt, vous pouvez utiliser un certificat existant en plaçant les fichiers dans `./bwdata/ssl/your.domain` et en indiquant s’il est reconnu. Sinon, vous pouvez générer un certificat auto-signé, recommandé uniquement pour les tests. Si vous choisissez de ne pas utiliser de certificat, vous devez placer un proxy HTTPS devant l’installation, sinon Bitwarden ne fonctionnera pas.



## Configuration

Après l’installation, complétez la configuration de base via deux fichiers. Commencez par éditer le fichier d’environnement `./bwdata/env/global.override.env`. Configurez-y les détails de votre serveur SMTP, incluant hôte, port, SSL, nom d’utilisateur et mot de passe, pour que Bitwarden puisse envoyer les emails de vérification et d’invitation d’organisation. Si vous avez besoin d’accéder au portail administrateur système, ajoutez un email d’administrateur dans `adminSettings__admins`.

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

Validez la configuration SMTP avec `./bitwarden.sh checksmtp`. Une configuration correcte affiche un succès ; sinon, vous verrez des messages sur OpenSSL manquant ou des valeurs incorrectes. Appliquez les changements avec `./bitwarden.sh restart`.

Ensuite, vérifiez les paramètres d’installation dans `./bwdata/config.yml`. Ce fichier contrôle les ressources générées et doit être ajusté pour des environnements spécifiques, par exemple derrière un proxy ou avec des ports alternatifs. Appliquez ces modifications avec `./bitwarden.sh rebuild`.

Enfin, démarrez l’instance avec `./bitwarden.sh start`. Le premier lancement peut prendre du temps pendant que Docker télécharge les images. Utilisez `docker ps` pour vérifier que tous les conteneurs sont en bonne santé. Puis ouvrez le coffre-fort web à votre domaine configuré et créez un compte si besoin. La vérification par email nécessite une configuration SMTP correcte.

## Conclusion et ressources supplémentaires

Félicitations ! Vous avez maintenant installé et configuré Bitwarden avec succès sur votre VPS. On vous recommande aussi de jeter un œil aux ressources suivantes, qui peuvent vous aider et vous guider dans la configuration de votre serveur :

- [bitwarden.com](https://bitwarden.com/) - Site officiel
- https://bitwarden.com/help/ - Centre d’aide Bitwarden (Documentation)

Vous avez des questions spécifiques non couvertes ici ? Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂