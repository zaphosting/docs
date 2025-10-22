---
id: eco-whitelist
title: "ECO : Activer la Whitelist"
description: "Découvrez comment sécuriser votre serveur en gérant l'accès des joueurs grâce à la whitelist d'ECO → En savoir plus maintenant"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

La whitelist d'ECO vous permet de protéger votre serveur en autorisant uniquement les joueurs sélectionnés sur la liste à se connecter au serveur.

<InlineVoucher />

### Activation (Config)

L'activation de la whitelist se fait automatiquement. Elle devient active dès qu'au moins un joueur est ajouté à la liste. Les joueurs doivent être ajoutés dans le fichier de config **Users.eco**. 

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
```



Le champ **$values** contient les SteamIDs des joueurs qui doivent être ajoutés à la whitelist. Vous pouvez les trouver en ouvrant d'abord votre profil Steam, puis en faisant un clic droit quelque part dessus. Vous pouvez alors copier l'URL Steam du profil. 



![](https://screensaver01.zap-hosting.com/index.php/s/BoY3ZapTkQfyKKX/preview)


Ensuite, ouvrez une des pages suivantes et collez-y l'URL de votre profil : 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/


![](https://screensaver01.zap-hosting.com/index.php/s/trfGtL9obL4WRkp/preview)

Cela vous fournira des infos générales ainsi que le Steam ID de votre compte. Ici, on a juste besoin du SteamID64. Le SteamID64 sera alors inséré dans **$values**. Ça donnera ça :

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
            "123456789",
            "weitereSteamID"      
      ]
    }
```



### Activation (Chat)

Sinon, il est aussi possible d’ajouter des joueurs à la whitelist directement en jeu avec les permissions d’admin. L’ajout se fait via le chat/console avec la commande suivante :

```
/whitelist [player]
```



## Gérer la Whitelist

La gestion de la whitelist ne peut se faire que dans le fichier de config **Users.eco**, car il n’y a pas de commande serveur pour retirer un joueur de la whitelist. Si vous voulez retirer un joueur, il suffit de le supprimer du fichier de config. Un redémarrage du serveur est aussi nécessaire pour que le changement soit pris en compte. 

<InlineVoucher />