---
id: redm-txadmin-discord-bot
title: "RedM : Bot Discord txAdmin"
description: "Configure et intègre un bot Discord avec ton serveur RedM txAdmin pour améliorer la gestion et la communication → Découvre-le maintenant"
sidebar_label: Bot Discord txAdmin
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction
Le panneau txAdmin offre plein de fonctionnalités pour ton serveur RedM, dont une intégration de bot Discord.
Dans ce guide, on te montre comment configurer le bot Discord et comment l’utiliser.

<InlineVoucher />

## Préparation

Pour configurer le bot Discord pour ton serveur txAdmin, tu dois d’abord te connecter à ton panneau txAdmin.
Les infos de connexion s’affichent sur la page d’aperçu du serveur, comme ici :

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

:::info

Ce guide nécessite que txAdmin soit déjà configuré. Pour apprendre à le faire, tu peux consulter notre [guide RedM : Configuration txAdmin](redm-txadmin-setup.md).

:::

## Configuration

### Création d’une application Discord

Pour configurer le bot avec txAdmin, tu dois créer une application Discord. Ton bot lui sera alors rattaché et agira sous son nom. Pour créer cette application, rends-toi sur [le portail développeur Discord](https://discord.com/developers/applications/).

Crée une nouvelle application en cliquant sur **New Application** et donne-lui un nom comme ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Ensuite, crée l’application en cliquant sur **Create**. Pour la suite, note bien l’ID de l’application :

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Configuration du bot et récupération du token

Quand tu crées une application, un bot est automatiquement créé aussi. Tu peux facilement récupérer le token en cliquant sur **Reset Token**. Tu obtiens alors un token utilisateur que tu dois noter ou garder précieusement :

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Ne partage jamais le token du bot pour que ton bot fonctionne sans interruption et ne pose pas de problème de sécurité. Le token est comme une clé secrète, garde-le pour toi.
:::

Sur la même page, descends un peu et active l’option "Server Members Intent", puis sauvegarde tes modifications :

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Invitation du bot sur ton Discord

Pour inviter le bot, insère l’ID client noté précédemment dans le lien ci-dessous à l’endroit indiqué, puis ouvre ce lien dans ton navigateur et ajoute le bot à ton serveur Discord. Ça devrait ressembler à cet exemple :
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Récupération des IDs du serveur et du canal

Pour utiliser le bot correctement avec txAdmin, tu dois récupérer l’ID du serveur sur lequel le bot va opérer.
Tu peux l’obtenir en faisant un clic droit sur l’icône du serveur dans Discord et en cliquant sur **Copier l’ID du serveur**. Note aussi cet ID.

Voici un exemple de ce que ça donne :
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

Tu peux aussi, si tu veux, définir un canal où les mises à jour de statut comme les redémarrages seront postées. Tu peux copier l’ID de la même manière, mais pour un canal.
N’oublie pas que le bot doit avoir la permission de lire et écrire dans ce canal.

:::info
Si tu n’as pas l’option pour copier l’ID du serveur ou du canal, active d’abord le mode développeur dans les paramètres utilisateur de Discord :
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Personnalisation des paramètres dans txAdmin

Maintenant, tu peux activer le bot Discord dans txAdmin et insérer tous les IDs et tokens que tu as notés plus tôt :

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Optionnel : Envoyer un message de statut

Tu peux aussi envoyer un message de statut une fois, qui mettra à jour en continu le statut actuel du serveur, les joueurs, etc.
Pour ça, clique sur le canal Discord où tu veux le message et tape `/status add`. Assure-toi que le bot a la permission d’envoyer des messages dans ce canal.

Ça devrait créer un message comme celui-ci :

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Tout dans ce message peut être personnalisé dans la page des paramètres Discord dans txAdmin.

## Conclusion

Configurer un bot Discord pour txAdmin te permet d’afficher facilement le statut de ton serveur RedM et d’autres infos directement dans ton serveur Discord. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />