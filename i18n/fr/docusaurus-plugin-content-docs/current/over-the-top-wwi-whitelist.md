---
id: over-the-top-wwi-whitelist
title: "Over the Top WWI : Configurer la Whitelist"
description: "Apprends à activer et gérer une whitelist sur ton serveur Over the Top WWI → Découvre tout maintenant"
sidebar_label: Whitelist
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une whitelist te permet de restreindre l’accès à ton **serveur de jeux Over the Top WWI** pour que seuls les joueurs approuvés puissent rejoindre. C’est super pratique pour les serveurs privés, les communautés, ou les environnements de test où tu veux garder le contrôle.

En activant la whitelist, seuls les joueurs listés dans le fichier de whitelist pourront se connecter au serveur.

<InlineVoucher />

## Configuration

La whitelist se configure dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier `ServerConfiguration.ini`. Dans ce fichier, repère le paramètre suivant :

```
WhiteListIsEnabled = True
WhiteListPathString = Whitelist.txt
```

- `WhiteListIsEnabled` active ou désactive le système de whitelist

- `False` → Désactivé  
- `True` → Activé

- `WhiteListPathString` définit le fichier utilisé pour stocker les IDs des joueurs autorisés

Quand la whitelist est activée, seuls les joueurs listés dans le fichier spécifié pourront rejoindre le serveur.

## Gérer la whitelist

Le fichier de whitelist se trouve généralement dans le répertoire de ton serveur et contient la liste des IDs des joueurs autorisés.

Chaque joueur doit être ajouté sur une nouvelle ligne dans ce fichier :

```
SteamID1
SteamID2
SteamID3
```

Assure-toi d’utiliser les bons identifiants joueurs, sinon l’accès sera refusé. Après avoir mis à jour le fichier de whitelist ou modifié le `ServerConfiguration.ini`, sauvegarde tes changements et redémarre le serveur. La whitelist sera alors appliquée.

## Conclusion

Bravo ! Tu as configuré avec succès la whitelist sur ton **serveur Over the Top WWI**. Ça te permet de contrôler qui peut accéder à ton serveur et de garder un environnement privé ou modéré.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />