---
title: "Over the Top WWI : Configurer les messages du serveur"
description: "Apprenez à configurer des messages automatiques sur votre serveur Over the Top WWI → En savoir plus maintenant"
sidebar_label: Messages du serveur
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les messages automatiques du serveur sont un super moyen de communiquer des infos importantes aux joueurs pendant la partie. Ces messages peuvent servir à partager les règles, promouvoir ton serveur Discord, ou donner des astuces utiles.

Sur un serveur **Over the Top WWI**, les messages peuvent s’afficher à intervalles réguliers, pour que tous les joueurs reçoivent les infos importantes sans que tu aies à intervenir manuellement.

<InlineVoucher />

## Configuration

Les messages du serveur se configurent dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier `ServerConfiguration.ini`. Dans ce fichier, repère les paramètres suivants :

```
ShowServerTimedMessages = 1
AddServerMessage = Rejoins le Discord officiel ! discord.gg/example
AddServerMessage = Merci de signaler les bugs sur notre Discord.
ServerMessagesTimer = 120
```

- `ShowServerTimedMessages` active ou désactive les messages automatiques. Mets `1` pour activer, `0` pour désactiver.
- `AddServerMessage` définit les messages qui seront affichés. Tu peux ajouter plusieurs lignes pour faire tourner différents messages pendant la partie.
- `ServerMessagesTimer` définit l’intervalle entre les messages en secondes. Par exemple, `120` affichera un message toutes les 2 minutes.

Tu peux personnaliser et étendre tes messages en ajoutant des lignes supplémentaires :

```
AddServerMessage = Bienvenue sur le serveur !
AddServerMessage = Respecte les règles et les autres joueurs.
AddServerMessage = Rejoins notre Discord pour les mises à jour.
```

Après avoir modifié le `ServerConfiguration.ini`, sauvegarde le fichier et redémarre ton serveur. Les messages apparaîtront automatiquement en jeu à l’intervalle configuré.

## Conclusion

Bravo ! Tu as configuré avec succès les messages automatiques sur ton **serveur Over the Top WWI**. Ça t’aide à garder les joueurs informés et améliore la communication globale sur ton serveur.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />