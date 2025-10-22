---
id: minecraft-whitelist
title: "Minecraft : Activation et édition d’une whitelist"
description: "Découvrez comment sécuriser votre serveur de jeux Minecraft en gérant l’accès des joueurs avec la whitelist et protégez votre gameplay → En savoir plus maintenant"
sidebar_label: Whitelist
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
La **whitelist Minecraft** est une option pour protéger ton serveur en n’autorisant que les joueurs sélectionnés sur la liste à se connecter à ton serveur. Par défaut, Minecraft ne propose pas d’option de mot de passe serveur comme d’autres jeux.

![](https://screensaver01.zap-hosting.com/index.php/s/zbbRQdonbZPTeib/preview)

<YouTube videoId="nyor26XxwLY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oSWCcxscEcDzrq7/preview" title="Comment activer la WHITELIST sur ton serveur Minecraft" description="Tu préfères comprendre en voyant les choses en action ? On a ce qu’il te faut ! Plonge dans notre vidéo qui t’explique tout. Que tu sois pressé ou que tu aimes apprendre de façon fun et efficace !"/>

<InlineVoucher />

## Activer la whitelist



### Activation (Config)

Pour activer la whitelist, la valeur de la commande dans le fichier **server.properties** doit être réglée sur **true**. Un redémarrage du serveur est nécessaire pour que le changement soit pris en compte.

```
white-list=true
```



### Activation (Chat)

Sinon, tu peux aussi activer la whitelist en jeu ou via la console live :

```
/whitelist on			(Activer la whitelist)
/whitelist off			(Désactiver la whitelist)
```



Pour activer la whitelist en jeu, il faut avoir les permissions d’opérateur ! Sinon, tu peux aussi le faire via la console live (interface). Attention, dans la console live, les commandes doivent être tapées sans le symbole **/**.


![](https://screensaver01.zap-hosting.com/index.php/s/rxsCnTeEarycfR7/preview)



## Gérer la Whitelist



### Ajouter / supprimer des joueurs



**Chat**

Tu peux ajouter ou retirer des joueurs de la whitelist avec ces commandes :

```
/whitelist add NomDuJoueur
/whitelist remove NomDuJoueur
```



**white-list.json**

Si tu connais l’UUID du joueur, tu peux aussi l’ajouter manuellement dans le fichier **white-list.json**. Ce fichier est accessible et modifiable via FTP. Voici un guide pour te connecter en FTP : [Accès via FTP](gameserver-ftpaccess.md)

```
[
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Joueur1"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Joueur2"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Joueur3"
  }
]
```



### Mettre à jour la liste

Si tu ajoutes des joueurs manuellement, il faudra recharger la whitelist en jeu. Tu peux aussi utiliser une commande pour éviter de redémarrer le serveur :

```
 /whitelist reload
```



### Voir la liste

Si tu ne veux pas ouvrir le fichier whitelist via FTP à chaque fois, tu peux afficher tous les joueurs de la whitelist avec cette commande :

```
/whitelist list
```


<InlineVoucher />