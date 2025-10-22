---
id: fivem-txadmin-discord-bot
title: "FiveM : Bot Discord txAdmin"
description: "Découvrez comment intégrer et utiliser le bot Discord avec votre serveur txAdmin pour une gestion améliorée de votre serveur FiveM → En savoir plus maintenant"
sidebar_label: Bot Discord txAdmin
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction
Le panneau txAdmin apporte plein de fonctionnalités pour votre serveur FiveM, dont une intégration avec un bot Discord.
Dans ce guide, on vous montre comment configurer le bot Discord et comment l’utiliser.

<InlineVoucher />

## Préparation

Pour configurer le bot Discord pour votre serveur txAdmin, vous devez d’abord vous connecter à votre panneau txAdmin.
Les infos de connexion sont affichées sur la page d’aperçu du serveur, comme ici :

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

:::info

Ce guide nécessite que txAdmin soit déjà configuré. Pour apprendre à le faire, vous pouvez consulter notre [guide FiveM : Configuration txAdmin](fivem-txadmin-setup.md).

:::

## Configuration

### Création d’une application Discord

Pour configurer le bot avec txAdmin, vous devez créer une application Discord. Votre bot lui sera alors rattaché et agira sous son nom. Pour créer cette application, rendez-vous sur [le portail développeur Discord](https://discord.com/developers/applications/).

Vous allez créer une nouvelle application en cliquant sur **New Application** puis vous pouvez lui donner un nom comme ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Ensuite, créez l’application en cliquant sur **Create**. Pour les étapes suivantes, notez bien l’ID de l’application :

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Configuration du bot et récupération du token

Lors de la création de l’application, un bot est automatiquement créé aussi. Vous pouvez facilement récupérer le token en cliquant sur **Reset Token**. Vous recevrez alors un token utilisateur qu’il faut aussi noter ou garder précieusement :

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Ne partagez jamais le token du bot pour que votre bot fonctionne sans interruption et ne pose pas de problème de sécurité. Le token est comme une clé secrète, gardez-le pour vous.
:::

Sur la même page, descendez un peu et activez l’option "Server Members Intent" puis sauvegardez vos modifications :

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Invitation du bot sur votre Discord

Pour inviter le bot, insérez l’ID client noté précédemment dans le lien ci-dessous à l’endroit approprié, ouvrez ce lien dans votre navigateur et ajoutez le bot à votre serveur Discord. Ça devrait ressembler à cet exemple :
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Récupération des IDs du serveur et du canal

Pour utiliser correctement le bot avec txAdmin, vous devez récupérer l’ID du serveur sur lequel le bot va opérer.
Vous pouvez l’obtenir en faisant un clic droit sur l’icône du serveur dans Discord et en cliquant sur **Copier l’ID du serveur**. Notez aussi cet ID.

Voici un exemple de ce que ça donne :
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

Vous pouvez aussi, en option, définir un canal où les mises à jour de statut comme les plannings de redémarrage seront postées. Vous pouvez copier l’ID de la même manière, mais pour un canal.
N’oubliez pas que le bot doit avoir la permission de lire et écrire dans ce canal.

:::info
Si vous ne voyez pas l’option pour copier l’ID du serveur ou du canal, activez d’abord le mode développeur dans les paramètres utilisateur Discord :
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Personnalisation des paramètres dans txAdmin

Maintenant, vous pouvez activer le bot Discord dans txAdmin et insérer tous les IDs et tokens que vous avez sauvegardés :

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Optionnel : Envoyer un message de statut

Vous pouvez aussi envoyer un message de statut unique, qui sera mis à jour en continu avec le statut actuel du serveur, les joueurs, etc.
Pour cela, cliquez sur le canal Discord où vous voulez l’avoir et tapez `/status add`. Assurez-vous que le bot a la permission d’envoyer des messages dans ce canal.

Cela devrait créer un message comme celui-ci :

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Tout dans ce message peut être personnalisé dans la page des paramètres Discord dans txAdmin.

## Conclusion

Configurer un bot Discord pour txAdmin vous permet d’afficher facilement le statut de votre serveur FiveM et d’autres infos directement dans votre serveur Discord. Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />