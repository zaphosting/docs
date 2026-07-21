---
id: dedicated-windows-fivem
title: "Configuration d’un serveur dédié FiveM"
description: "Découvrez comment installer et gérer votre propre serveur dédié FiveM avec txAdmin pour un jeu multijoueur fluide → Apprenez tout maintenant"
sidebar_label: FiveM
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous possédez un serveur dédié et souhaitez installer et exploiter votre propre serveur dédié FiveM avec txAdmin ? Vous êtes au bon endroit ! Ce guide vous explique toutes les étapes nécessaires pour l’installer, le configurer et ce à quoi vous devez faire attention.

:::warning Système d’exploitation sélectionné et installé
Il est supposé que vous avez déjà choisi et installé un système d’exploitation pour votre VPS/serveur dédié. Si ce n’est pas encore fait, vous devez d’abord suivre les étapes du [guide de configuration initiale](dedicated-setup.md) pour serveurs dédiés.
:::

## Préparation

Pour mettre en place un serveur FiveM, certaines étapes préparatoires sont nécessaires avant de commencer l’installation proprement dite du serveur dédié FiveM.

### Configurer la base de données

Si vous souhaitez utiliser et installer des ressources nécessitant une base de données, vous aurez besoin d’un **serveur de base de données** supplémentaire. Il existe plusieurs façons de configurer un tel serveur. Dans notre [guide d’installation de MySQL](dedicated-windows-installmysql.md), nous vous montrons comment installer votre propre **serveur de base de données** sur votre **serveur dédié**.

### Télécharger le logiciel serveur FiveM

L’étape suivante consiste à télécharger le logiciel serveur FiveM. Pour cela, rendez-vous sur la page [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) de FiveM via l’un des navigateurs Internet installés de votre choix et téléchargez la dernière version du serveur FiveM.

Décompressez le fichier téléchargé dans le dossier Téléchargements et déplacez les fichiers du serveur FiveM de préférence dans un dossier séparé. Dans cet exemple, le logiciel serveur se trouve dans un dossier nommé **FiveM** sur le bureau.

:::warning Outil de décompression requis
Pour décompresser le logiciel serveur FiveM téléchargé, un outil de décompression est nécessaire pour le fichier compressé. Dans cet exemple, le logiciel [7Zip](https://7-zip.com/) est utilisé.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)

### Créer une clé de licence pour le serveur FiveM

Chaque serveur FiveM nécessite sa propre clé de licence, gérée via le nouveau [portail Cfx.re](http://portal.cfx.re/). La clé de licence est liée à votre compte Cfx.re. Connectez-vous au site, allez dans la catégorie **Server** et cliquez sur le bouton **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)

## Configuration

Vous pouvez maintenant commencer l’installation du serveur FiveM et de txAdmin. Pour cela, ouvrez à nouveau le dossier de votre serveur FiveM et lancez l’application `cfx-server.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)

Une fois l’application serveur lancée, la console serveur et txAdmin s’ouvrent. Dans l’interface txAdmin, vous devez lier votre **compte Cfx.re** à txAdmin.

![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)

### Configuration de txAdmin

Lors de la configuration de txAdmin, votre propre serveur FiveM est installé et configuré en cinq étapes. Suivez les instructions dans l’interface txAdmin et commencez par définir un **nom de serveur**. Sélectionnez ensuite le **type de serveur** souhaité. Cet exemple montre l’installation d’un serveur FiveM avec QBCore préinstallé.

Choisissez l’option **Popular Recipes** dans l’étape **Deployment Type**, puis sélectionnez le **QBCore Framework Template**. Confirmez le **répertoire de données** souhaité et lancez le **Recipe Deployer** pour finaliser l’installation.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Pendant le Recipe Deployer, vous devez fournir les dernières informations nécessaires avant de pouvoir démarrer le serveur. Saisissez votre clé de licence FiveM créée précédemment dans le champ **License Key**. Cliquez ensuite sur **Show/Hide Database Options (Advanced)** et entrez les identifiants de connexion de votre serveur de base de données. Ici, seul le mot de passe défini précédemment pour l’utilisateur **root** est requis. Les autres paramètres peuvent rester inchangés. Vérifiez vos saisies puis cliquez sur **Run Recipe** pour lancer le processus.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)

### Configuration du pare-feu

Pour que votre serveur soit accessible publiquement, vous devez modifier les règles de redirection de ports pour les ports utilisés par le processus VPS/serveur dédié. Vous pouvez le faire soit via des commandes Powershell, ce qui est plus simple, soit via la page du pare-feu Windows Defender.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Ouvrez la recherche Windows et tapez **Powershell**. Faites un clic droit et sélectionnez **Exécuter en tant qu’administrateur** pour que les permissions soient suffisantes et que tout fonctionne correctement.

:::info
Assurez-vous d’exécuter Powershell en mode administrateur, sinon les paramètres risquent de ne pas s’appliquer correctement.
:::

Copiez-collez ensuite les commandes suivantes dans votre invite Powershell :
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Ces commandes créent automatiquement les règles de pare-feu nécessaires pour que votre serveur FiveM soit accessible publiquement.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilisez la fonction de recherche Windows pour ouvrir les **Paramètres du pare-feu Windows avec sécurité avancée**. Vous devrez peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre nécessaire si vous ouvrez la page de base du pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/woitzXpAAirg9JN/preview)

Vous devez créer de nouvelles règles pour votre serveur FiveM. Pour cela, cliquez sur les règles entrantes et sortantes comme décrit ci-dessous et ajoutez-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 30120
- UDP entrant et sortant : 30120

Si vous avez besoin d’aide supplémentaire, consultez notre [guide de redirection de ports (pare-feu)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Conclusion

Vous avez installé et configuré avec succès un serveur dédié FiveM sur votre VPS/serveur dédié. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂