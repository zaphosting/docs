---
id: vserver-windows-bitwarden
title: "Installer Bitwarden sur un serveur Windows - Sécurisez la gestion de vos mots de passe"
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

Bitwarden est un gestionnaire de mots de passe open source pour mots de passe et clés d’accès qui utilise le principe du zero knowledge et un chiffrement de bout en bout pour protéger vos données. Vous pouvez l’utiliser en tant que service cloud ou l’auto-héberger, avec des fonctionnalités pour générer, stocker et remplir automatiquement des identifiants forts.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Vous pensez à héberger ce service vous-même ? On vous guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

<InlineVoucher />

## Prérequis

Avant d’installer **Bitwarden**, assurez-vous que votre environnement d’hébergement répond aux exigences suivantes pour garantir une installation fluide et des performances optimales.

| Matériel  | Minimum      | Recommandation ZAP-Hosting |
| --------- | ------------ | -------------------------- |
| CPU       | 1 vCPU       | 4 vCPU                     |
| RAM       | 2 Go         | 4 Go                       |
| Espace disque | 12 Go     | 25 Go                      |

Le logiciel nécessite que toutes les dépendances requises soient installées et qu’il tourne sur un système d’exploitation supporté. Vérifiez que votre serveur répond aux critères suivants avant de lancer l’installation :

**Dépendances :** `Docker (Engine 26+ et Compose)`

**Système d’exploitation :** Dernière version de Windows Server compatible avec Docker 26+

Assurez-vous que toutes les dépendances sont installées et que la version du système d’exploitation est correcte pour éviter tout problème de compatibilité lors de l’installation de Bitwarden.

## Préparation

Avant de configurer **Bitwarden**, vous devez préparer votre système. Cela inclut la mise à jour de votre système d’exploitation à la dernière version et l’installation de toutes les dépendances nécessaires. Ces préparations garantissent un environnement stable et évitent les soucis pendant ou après l’installation.

### Mise à jour du système

Pour être sûr que votre système tourne avec les dernières améliorations logicielles et de sécurité, commencez toujours par effectuer les mises à jour système. Cela garantit que votre serveur dispose des derniers patchs de sécurité et versions logicielles avant de continuer.

### Installer les dépendances

Une fois la mise à jour terminée, vous pouvez passer à l’installation des dépendances. Bitwarden sera déployé et exécuté sur votre machine via plusieurs conteneurs Docker. Il faut donc installer Docker en premier. Pour cela, installez [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) sur votre serveur.

Un guide complet sur l’installation et l’utilisation de Docker est disponible dans notre [guide Docker](vserver-windows-docker.md).

### Créer un utilisateur & un dossier

On recommande de configurer votre serveur Windows avec un compte service dédié `bitwarden` pour installer et faire tourner Bitwarden. Cela garantit que votre instance Bitwarden est isolée des autres applications sur votre serveur.

Ouvrez PowerShell en mode administrateur. Créez l’utilisateur local Bitwarden avec les commandes suivantes. Après la première commande, une fenêtre de saisie de texte apparaît : entrez le mot de passe souhaité et confirmez. Puis lancez la deuxième commande pour finaliser la création.

```
PS C:\> $Password = Read-Host -AsSecureString
New-LocalUser "Bitwarden" -Password $Password -Description "Bitwarden Local Admin"
```

Ensuite, créez un dossier Bitwarden sous `C:\` pour ce nouvel utilisateur :

```
PS C:\> mkdir Bitwarden
```

Dans Docker Desktop, allez dans **Paramètres → Ressources → Partage de fichiers**. Ajoutez le dossier `C:\Bitwarden` aux chemins partagés. Cliquez sur Appliquer & Redémarrer pour valider.

### Configurer votre domaine

Par défaut, Bitwarden tourne sur l’hôte via les ports 80 (HTTP) et 443 (HTTPS). Configurez un domaine avec des enregistrements DNS pointant vers l’hôte, par exemple server.example.com, surtout si vous le servez sur Internet. Évitez d’inclure "Bitwarden" dans le nom d’hôte pour limiter la divulgation du rôle ou du logiciel du serveur.

## Installation

Maintenant que toutes les exigences sont remplies et que les préparatifs sont faits, vous pouvez lancer l’installation de Bitwarden.

Téléchargez le script d’installation Bitwarden sur votre machine puis exécutez-le :

```
cd C:\Bitwarden
Invoke-RestMethod -OutFile bitwarden.ps1 -Uri "https://func.bitwarden.com/api/dl/?app=self-host&platform=windows"
.\bitwarden.ps1 -install
```

Dans l’installateur, entrez d’abord le nom de domaine de votre instance Bitwarden, généralement le DNS configuré. Ensuite, choisissez si Let’s Encrypt doit générer un certificat SSL gratuit et reconnu. Si oui, fournissez un email pour les notifications d’expiration. Sinon, vous passerez aux questions sur le certificat.

Entrez votre ID d’installation et votre clé d’installation, obtenus sur [Bitwarden](https://bitwarden.com/host). Puis sélectionnez la région US ou EU, utile uniquement si vous connectez une instance auto-hébergée à un abonnement payant.

Si vous n’utilisez pas Let’s Encrypt, vous pouvez utiliser un certificat existant en plaçant les fichiers dans `C:\Bitwarden\bwdata\ssl\<votre_domaine>` et en indiquant s’il est reconnu. Sinon, vous pouvez générer un certificat auto-signé, recommandé uniquement pour les tests. Si vous choisissez de ne pas utiliser de certificat, vous devez placer un proxy HTTPS devant l’installation, sinon Bitwarden ne fonctionnera pas.

## Configuration

Après l’installation, complétez la configuration de base via deux fichiers. Commencez par éditer le fichier d’environnement situé dans `\bwdata\env\global.override.env`. Configurez-y les détails de votre serveur SMTP, incluant hôte, port, SSL, nom d’utilisateur et mot de passe, pour que Bitwarden puisse envoyer les emails de vérification et d’invitation aux organisations. Si vous avez besoin d’accéder au portail administrateur système, ajoutez un email d’administrateur dans `adminSettings__admins`.

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

Validez la configuration SMTP. Une configuration correcte affiche un message de succès ; sinon, vous verrez des messages d’erreur sur OpenSSL manquant ou des valeurs incorrectes. Appliquez les changements avec `.\bitwarden.ps1 -start`.

Ensuite, vérifiez les paramètres d’installation dans `.\bwdata\config.yml`. Ce fichier contrôle les ressources générées et doit être ajusté pour des environnements spécifiques, par exemple derrière un proxy ou avec des ports alternatifs. Appliquez ces modifications avec `.\bitwarden.ps1 -rebuild`.

Enfin, démarrez l’instance avec `.\bitwarden.ps1 -start`. Le premier lancement peut prendre du temps pendant que Docker télécharge les images. Utilisez `docker ps` pour vérifier que tous les conteneurs sont en bonne santé. Puis ouvrez le coffre-fort web à votre domaine configuré et créez un compte si besoin. La vérification par email nécessite une configuration SMTP correcte.

## Conclusion et ressources supplémentaires

Félicitations ! Vous avez maintenant installé et configuré Bitwarden avec succès sur votre VPS/serveur dédié. On vous recommande aussi de jeter un œil aux ressources suivantes, qui peuvent vous aider et vous guider dans la configuration de votre serveur :

- [bitwarden.com](https://bitwarden.com/) - Site officiel
- https://bitwarden.com/help/ - Centre d’aide Bitwarden (Documentation)

Vous avez des questions spécifiques non couvertes ici ? Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂