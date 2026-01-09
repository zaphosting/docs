---
id: vserver-windows-fs-25
title: "VPS : Configuration d’un serveur dédié Farming Simulator 2025 sous Windows"
description: "Découvrez comment configurer un serveur dédié Farming Simulator 2025 sur votre VPS Windows pour un gameplay multijoueur fluide → En savoir plus maintenant"
sidebar_label: Farming Simulator 2025
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous avez un VPS Windows et vous souhaitez installer le service serveur dédié Farming Simulator 2025 dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur.

<InlineVoucher />

## Préparation

Pour héberger un serveur dédié Farming Simulator 2025, vous devez disposer d’un serveur Windows prêt à l’emploi ainsi que d’une licence de jeu valide pour faire tourner le serveur dédié.

Avant de lancer l’installation, connectez-vous à votre serveur Windows via Remote Desktop (RDP). Utilisez notre [guide d’accès initial (RDP)](vserver-windows-userdp.md) si vous avez besoin d’aide pour ça.

### Licence de jeu

Pour héberger le serveur dédié sur votre serveur Windows, vous devez posséder une copie digitale de Farming Simulator 2025 achetée directement sur le site officiel [Farming Simulator](https://www.farming-simulator.com/buy-now.php).

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

Vous ne pouvez pas utiliser la même clé de licence que celle avec laquelle vous jouez, il faudra donc acheter une **deuxième** copie du jeu uniquement pour votre serveur dédié.

:::info Licence Steam
Il est possible d’utiliser une licence Steam pour héberger votre serveur dédié, mais c’est souvent galère car il faut garder le client Steam lancé en arrière-plan en permanence. De plus, vous ne pourrez pas jouer à d’autres jeux sur un autre système avec le même compte Steam à cause des limitations de Steam. On vous conseille donc vivement d’acheter une clé indépendante directement sur le site pour éviter ces soucis.

Si vous comptez quand même utiliser une licence **Steam**, installez les fichiers via Steam comme d’habitude et passez directement à la section **Configuration du serveur dédié** du guide.
:::

Une fois la version digitale achetée sur le site, vous recevrez un code produit par email à l’adresse fournie lors de l’achat. Vous aurez besoin de cette clé de licence dans la section suivante pour accéder au téléchargement du jeu et valider votre serveur dédié lors de la configuration.

## Installation

### Installation des fichiers

Maintenant que votre clé de licence et votre serveur Windows sont prêts, rendez-vous sur la page [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) depuis votre serveur Windows et entrez la clé de licence reçue par email.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

Une fois validé, vous aurez accès à une page avec plusieurs méthodes de téléchargement du jeu. Trouvez l’option principale Windows **Farming Simulator 25 (Windows 10/11)** et lancez le téléchargement.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

Le téléchargement va commencer et peut prendre un peu de temps car le jeu complet est téléchargé, soyez patient.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

Une fois terminé, allez dans vos téléchargements et trouvez le fichier **.img** que vous venez de télécharger. Double-cliquez dessus pour monter le lecteur dans l’Explorateur de fichiers.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Lancez ensuite le fichier **Setup.exe** et acceptez la fenêtre UAC. Suivez le menu d’installation, acceptez les termes & conditions et modifiez le chemin d’installation si vous le souhaitez.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Encore une fois, soyez patient pendant toute la durée de l’installation. Une fois terminée, quittez le menu d’installation. On vous recommande de faire un clic droit sur le **lecteur DVD monté** dans l’Explorateur et de sélectionner **Éjecter** pour le démonter, il ne sera plus nécessaire. À ce stade, l’installation de base du jeu est terminée.

### Activation du jeu

Avec le jeu installé, vous devez le lancer au moins une fois pour l’activer. Lancez-le via le raccourci bureau ou la barre de recherche Windows.

Au lancement, une fenêtre vous demandera d’entrer la clé de licence reçue par email. Entrez-la et validez. Si tout est bon, votre jeu sera activé et le chargement commencera.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Vous pouvez maintenant fermer le jeu, il ne sera plus nécessaire. Passez à la section suivante pour configurer le serveur dédié et son interface web. Si vous avez une erreur **Video Driver**, sélectionnez simplement **non** pour annuler le démarrage.

## Configuration du serveur dédié

Avec le jeu prêt, il faut maintenant modifier quelques options de configuration pour votre serveur dédié. Commencez par accéder au dossier d’installation du jeu. Par défaut, il se trouve sous `C:\Program Files (x86)\Farming Simulator 2025`, sauf si vous avez changé le chemin à l’installation.

Une fois dans ce dossier, trouvez et ouvrez le fichier **dedicatedServer.xml** avec un éditeur de texte.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

On vous conseille de modifier les champs `username` et `passphrase` tout en haut du fichier avec vos propres identifiants. Ce seront les identifiants pour vous connecter au panneau web de votre serveur. N’oubliez pas d’enregistrer et de fermer le fichier.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Accès à l’interface web

Avec les identifiants configurés, lancez le serveur en exécutant le fichier **dedicatedServer.exe** dans le même dossier racine du jeu.

:::info Privilèges administrateur
Assurez-vous de lancer l’exécutable du serveur dédié avec les privilèges administrateur, sinon vous risquez d’avoir des problèmes au démarrage du serveur de jeux. Faites un clic droit sur le fichier et sélectionnez **Exécuter en tant qu’administrateur**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Une fenêtre CMD s’ouvrira et générera automatiquement les certificats nécessaires, installera les mises à jour et outils requis. Cela peut prendre un peu de temps au premier lancement, soyez patient.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

Une fois prêt, vous pourrez accéder à l’interface web en ouvrant `http://[votre_ip_serveur]:8080` dans un navigateur. Connectez-vous avec les identifiants que vous avez configurés.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

Sur ce panneau web, vous pourrez modifier plein de paramètres du serveur, gérer les sauvegardes, les mods et bien plus.

### Redirection des ports

Pour que votre serveur soit accessible publiquement, vous devez configurer la redirection des ports utilisés par le serveur dédié. Vous pouvez le faire via des commandes PowerShell, ce qui est plus simple, ou via le pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Ouvrez la recherche Windows et tapez **PowerShell**. Faites un clic droit et choisissez **Exécuter en tant qu’administrateur** pour avoir les permissions nécessaires.

:::info
Assurez-vous d’exécuter PowerShell en mode administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copiez-collez ensuite ces commandes dans PowerShell :
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

Ces commandes créent automatiquement les règles pare-feu nécessaires pour que votre serveur Farming Simulator 2025 soit accessible publiquement.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Ouvrez la recherche Windows et lancez **Paramètres du pare-feu Windows avec sécurité avancée**. Si vous ouvrez la page de base du pare-feu, cliquez sur **Paramètres avancés** pour accéder à la bonne fenêtre.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Créez de nouvelles règles pour votre serveur FS2025. Ajoutez-les dans les règles entrantes et sortantes pour les protocoles et ports suivants :
- TCP entrant et sortant : 8080, 10823
- UDP entrant et sortant : 8080, 10823

Si besoin, consultez notre [guide Redirection de ports (Pare-feu)](vserver-windows-port.md) pour plus d’aide.

</TabItem>
</Tabs>

Une fois ces règles ajoutées, votre serveur sera accessible depuis Internet, vous pourrez accéder à l’interface web et vous connecter au serveur en jeu.

### Démarrage du serveur

Après avoir configuré les réglages et le pare-feu, allez sur la page d’accueil de l’interface web et cliquez sur le bouton **Start** pour lancer le serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Si tout se passe bien, le serveur va démarrer et vous verrez la mise à jour de l’interface ainsi qu’une nouvelle fenêtre CMD qui lance le serveur de jeux. En cas d’erreur au démarrage, vérifiez que vous avez lancé l’interface en mode administrateur.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur dédié Farming Simulator 2025 sur votre VPS ! Si vous avez d’autres questions ou problèmes, contactez notre support, dispo tous les jours pour vous aider !

<InlineVoucher />