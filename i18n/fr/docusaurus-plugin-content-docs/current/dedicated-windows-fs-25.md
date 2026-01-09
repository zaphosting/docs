---
id: dedicated-windows-fs-25
title: "Serveur dédié : Configuration du serveur dédié Farming Simulator 2025 sous Windows"
description: "Découvrez comment configurer un serveur dédié Farming Simulator 2025 sous Windows pour héberger vos parties multijoueurs sans accroc → En savoir plus maintenant"
sidebar_label: Farming Simulator 2025
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu as un serveur dédié Windows et tu veux installer le service serveur dédié Farming Simulator 2025 dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur.

## Préparation

Pour héberger un serveur dédié Farming Simulator 2025, tu dois avoir un serveur Windows prêt à l’emploi ainsi qu’une licence de jeu valide pour faire tourner le serveur dédié.

Avant de lancer l’installation, connecte-toi à ton serveur Windows via Remote Desktop (RDP). Si tu as besoin d’aide, utilise notre [guide d’accès initial (RDP)](vserver-windows-userdp.md).

### Licence de jeu

Pour héberger le serveur dédié sur ton serveur Windows, tu dois posséder une copie digitale de Farming Simulator 2025 achetée directement sur le site officiel [Farming Simulator](https://www.farming-simulator.com/buy-now.php).

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

Tu ne peux pas utiliser la même clé de licence que celle avec laquelle tu joues, donc il te faudra acheter une **seconde** copie du jeu uniquement pour ton serveur dédié.

:::info Licence Steam
Il est possible d’utiliser une licence Steam pour héberger ton serveur dédié, mais c’est souvent galère car il faut garder le client Steam lancé en arrière-plan en permanence. Ça t’empêche aussi de jouer à d’autres jeux sur d’autres machines avec le même compte Steam à cause des limitations de Steam. Du coup, on te conseille vivement d’acheter une clé indépendante directement sur le site pour éviter ces soucis.

Si tu comptes quand même utiliser une licence **Steam**, installe les fichiers via Steam comme d’habitude et passe directement à la section **Configuration du serveur dédié** du guide.
:::

Une fois que tu as acheté ta version digitale sur le site, tu recevras un code produit par email à l’adresse que tu as fournie lors de l’achat. Tu auras besoin de cette clé dans la section suivante pour télécharger le jeu et valider ton serveur dédié lors de la configuration.

## Installation

### Installation des fichiers

Maintenant que ta clé de licence et ton serveur Windows sont prêts, rends-toi sur la page [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) depuis ton serveur Windows et entre la clé de licence reçue par email.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

Si tout est bon, tu auras accès à une page avec plusieurs méthodes de téléchargement du jeu. Trouve l’option principale Windows **Farming Simulator 25 (Windows 10/11)** et lance le téléchargement.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

Le téléchargement va commencer et peut prendre un peu de temps car c’est le jeu complet qui est téléchargé, sois patient.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

Une fois fini, va dans tes téléchargements et trouve le fichier **.img** que tu as téléchargé. Double-clique dessus pour monter le lecteur dans l’Explorateur de fichiers.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Lance ensuite le fichier **Setup.exe** et accepte la fenêtre UAC. Suis le menu d’installation pour configurer le jeu, ce qui inclut accepter les termes & conditions et modifier le chemin d’installation si tu veux.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Encore une fois, sois patient et attends que l’installation complète se termine. Une fois prêt, quitte simplement le menu d’installation. On te recommande de faire un clic droit sur le **lecteur DVD monté** dans l’Explorateur et de sélectionner **Éjecter** pour le retirer, il ne sera plus nécessaire. À ce stade, l’installation de base du jeu est terminée.

### Activation du jeu

Avec le jeu installé, tu dois le lancer au moins une fois pour l’activer. Lance-le depuis le raccourci sur le bureau ou via la barre de recherche Windows.

Au lancement, tu verras une invite pour entrer ta clé de licence la première fois. Entre la clé reçue par email et valide. Si c’est bon, ton jeu sera activé et il commencera à charger.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Tu peux maintenant fermer le jeu, il ne sera plus nécessaire, et passer à la section suivante pour configurer le serveur dédié et son interface web. Si tu as une erreur **Video Driver**, sélectionne simplement **non** pour annuler le démarrage.

## Configuration du serveur dédié

Avec le jeu prêt, tu dois modifier quelques options de configuration pour ton serveur dédié. Commence par accéder au dossier d’installation du jeu. Par défaut, il se trouve sous `C:\Program Files (x86)\Farming Simulator 2025` mais ça peut être différent si tu as changé le chemin à l’installation.

Une fois là, trouve et ouvre le fichier **dedicatedServer.xml** avec un éditeur de texte.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

On te conseille de modifier les champs `username` et `passphrase` tout en haut du fichier avec tes propres identifiants. Ce seront les identifiants que tu utiliseras pour te connecter au panneau web de ton serveur. N’oublie pas de sauvegarder le fichier et de le fermer.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Accès à l’interface web

Avec les identifiants configurés, tu peux lancer le serveur en exécutant le fichier **dedicatedServer.exe** dans le même dossier racine du jeu.

:::info Privilèges administrateur
Assure-toi de lancer l’exécutable du serveur dédié avec les privilèges administrateur, sinon tu risques d’avoir des problèmes pour démarrer le serveur de jeu. Pour ça, fais un clic droit sur le fichier et choisis **Exécuter en tant qu’administrateur**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Une fenêtre CMD va s’ouvrir et générer automatiquement les certificats nécessaires, installer les mises à jour et outils requis. Ça peut prendre un peu de temps au premier lancement, sois patient.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

Une fois prêt, tu pourras accéder à ton panneau web en ouvrant `http://[ton_ip_serveur]:8080` dans un navigateur. Utilise les identifiants que tu as configurés pour te connecter.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

Sur ce panneau web, tu pourras faire plein de réglages sur ton serveur : modifier les paramètres, gérer les sauvegardes, gérer les mods, et bien plus.

### Redirection de ports pour ton serveur

Pour que ton serveur soit accessible depuis l’extérieur, tu dois configurer la redirection des ports utilisés par le processus du serveur dédié. Tu peux le faire via des commandes PowerShell, ce qui est plus simple, ou via la page du pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Ouvre la recherche Windows et tape **PowerShell**. Fais un clic droit et choisis **Exécuter en tant qu’administrateur** pour avoir les permissions nécessaires.

:::info
Assure-toi d’exécuter PowerShell en mode administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copie-colle ensuite ces commandes dans PowerShell :
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

Ces commandes vont créer automatiquement les règles de pare-feu nécessaires pour que ton serveur Farming Simulator 2025 soit accessible depuis l’extérieur.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilise la recherche Windows pour ouvrir **Paramètres du pare-feu Windows avec sécurité avancée**. Si tu ouvres la page de base du pare-feu, clique sur **Paramètres avancés** pour accéder à la bonne fenêtre.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Tu dois créer de nouvelles règles pour ton serveur FS2025. Pour ça, clique sur les règles entrantes et sortantes comme expliqué ci-dessous et ajoute-les pour ces protocoles et ports :
- TCP entrant et sortant : 8080, 10823
- UDP entrant et sortant : 8080, 10823

Si tu as besoin d’aide, consulte notre [guide de redirection de ports (pare-feu)](vserver-windows-port.md).

</TabItem>
</Tabs>

Une fois ces règles ajoutées, ton serveur sera accessible, ce qui veut dire que tu pourras accéder au panneau web depuis internet et te connecter au serveur en jeu.

### Démarrage du serveur

Après avoir configuré les réglages et les règles de pare-feu, va sur la page d’accueil de l’interface web et clique sur le bouton **Start** pour lancer le serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Si tout se passe bien, le serveur va démarrer et tu pourras le voir via l’interface mise à jour et une nouvelle fenêtre CMD qui lance le serveur de jeu. Si tu as des erreurs au démarrage, vérifie que tu as bien lancé l’interface en mode administrateur.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Conclusion

Félicitations, tu as installé et configuré avec succès le serveur dédié Farming Simulator 2025 sur ton serveur dédié ! Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !