---
id: voiceserver-voicebot-connection
title: "Voiceserver : Connecter ton bot vocal à ton serveur vocal"
description: "Découvre comment connecter ton bot vocal aux serveurs TeamSpeak et Discord pour une communication et un contrôle sans accroc → En savoir plus maintenant"
sidebar_label: Lien vers serveur vocal
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## Introduction

Tu veux connecter ton bot vocal à ton serveur TeamSpeak, mais tu ne sais pas trop comment faire ? Pas de stress, on t’explique tout en détail juste en dessous !



## Connecter le bot à ton TeamSpeak

Pour connecter ton bot vocal à ton serveur TeamSpeak 3, il faut d’abord le lancer dans le panneau de contrôle. Ensuite, clique sur **Serveur** à gauche comme montré ici :

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

Tu peux maintenant sélectionner un TeamSpeak sous **Serveur** si tu en as déjà réservé un avec ton compte. Si ton serveur est hébergé ailleurs, tu peux aussi choisir **Serveur Teamspeak personnalisé**.

Ensuite, entre les infos demandées juste en dessous, sauvegarde, et ton bot vocal se connectera à ton serveur TeamSpeak 3. Voilà un exemple :

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## Connecter le bot à ton Discord

Pour connecter ton bot vocal à Discord, va dans **Serveur**, puis choisis **Discord**.

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

Tu dois ensuite entrer le **Token du bot Discord** et l’**ID client du bot Discord**. Une fois fait, le bot vocal se connectera à ton serveur Discord.


## Récupérer ton Token et ton Client ID Discord

Comme ton serveur Discord n’a pas d’adresse IP ou de port direct, il y a quelques étapes à préparer avant de pouvoir utiliser ton bot sur un serveur Discord.


### Créer une application Discord

La première étape, c’est de créer une application Discord. Ton bot sera rattaché à cette appli et agira sous son nom. Pour créer cette appli, rends-toi sur [le portail développeur Discord](https://discord.com/developers/applications/).

Clique sur **New Application** pour créer une nouvelle appli, puis donne-lui un nom comme ici :

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Ensuite, clique sur **Create** pour créer l’application. Note bien l’ID de l’application pour la suite :

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Configurer le bot et récupérer le token

Quand tu crées une application, un bot est automatiquement créé aussi. Pour récupérer le token, clique sur **Reset Token**. Tu obtiens alors un token utilisateur à noter précieusement :

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Ne partage jamais le token de ton bot pour que ton bot puisse fonctionner tranquille et éviter tout problème de sécurité. Le token est comme une clé secrète, garde-le pour toi.
:::

Un peu plus bas sur la même page, active les options **Presence Intent**, **Server Members Intent** et **Message Content Intent**, puis sauvegarde :

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### Inviter le bot sur ton Discord

Pour inviter le bot, remplace l’ID client noté précédemment dans ce lien à l’endroit indiqué, puis ouvre-le dans ton navigateur pour ajouter le bot à ton serveur Discord. Ça doit ressembler à ça :
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Configurer le panneau du bot

Maintenant, colle le token et l’ID client que tu as notés dans les champs du panneau de contrôle ZAP-Hosting, puis clique sur **Sauvegarder** en bas :

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

Tu peux ensuite démarrer le bot. Il devrait se connecter à ton serveur Discord en environ 10 secondes.


## Conclusion

Le bot vocal est un produit super utile et fun pour beaucoup de monde. Tu peux l’utiliser aussi bien sur un serveur TeamSpeak que sur Discord. Si tu as des questions ou besoin d’aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂 

<InlineVoucher />