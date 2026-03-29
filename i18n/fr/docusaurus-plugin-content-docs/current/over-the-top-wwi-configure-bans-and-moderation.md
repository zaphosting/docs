---
id: over-the-top-wwi-configure-bans-and-moderation
title: "Over the Top WWI : Configurer les bans et la modération"
description: "Apprends à configurer les listes de bans et les paramètres de modération sur ton serveur Over the Top WWI → Découvre tout maintenant"
sidebar_label: Bans & Modération
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les outils de modération dans **Over the Top WWI** te permettent de contrôler le comportement des joueurs et de maintenir un environnement juste et fun sur ton serveur. En configurant les listes de bans et les paramètres de modération, tu peux restreindre l’accès, gérer les sanctions et fournir des instructions claires aux joueurs.

Ces réglages sont particulièrement utiles pour les serveurs communautaires où une modération active est nécessaire.

<InlineVoucher />

## Configuration

Les paramètres de ban et de modération se configurent dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier `ServerConfiguration.ini`. Dans ce fichier, repère les paramètres suivants :

```
BanPathstring = Banlist.txt
TempBanPathstring = TempBanlist.txt
CustomUnBanString =
```

- `BanPathstring` définit le fichier qui contient les joueurs bannis définitivement  
- `TempBanPathstring` définit le fichier qui contient les joueurs bannis temporairement  

- `CustomUnBanString` te permet de définir un message personnalisé indiquant aux joueurs comment demander un unban. Exemple : lien Discord ou site web

### Utilisation des fichiers de ban

Les fichiers de ban se trouvent dans le répertoire de ton serveur et contiennent les identifiants des joueurs.

Chaque joueur banni doit être listé sur une nouvelle ligne dans le fichier :

```
SteamID1
SteamID2
SteamID3
```

Ces fichiers sont automatiquement lus par le serveur pour bloquer l’accès aux joueurs listés. Modifier ces paramètres te permet de définir comment les bans sont gérés et comment les joueurs peuvent faire appel.

Après avoir modifié le `ServerConfiguration.ini`, sauvegarde le fichier et redémarre ton serveur. Les nouveaux paramètres de modération seront appliqués automatiquement.

## Conclusion

Félicitations ! Tu as configuré avec succès les paramètres de bans et de modération sur ton **serveur Over the Top WWI**. Tu peux maintenant gérer efficacement le comportement des joueurs et maintenir un environnement serveur contrôlé.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />