---
id: eco-becomeadmin
title: "ECO : Devenir Admin"
description: "Découvrez comment attribuer les permissions d’administrateur pour un contrôle total du serveur et une gestion efficace du jeu → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-eco
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer les permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes nécessaires pour attribuer les permissions d’administrateur à ton serveur sont décrites ci-dessous.  
<InlineVoucher />

## Configuration
L’ajout d’un admin se fait via la config **Users.eco**, que tu peux trouver dans l’interface sous Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/ACgPpyPfGmnmi8X/preview)



Pour ajouter un nouveau joueur en tant qu’admin, la partie suivante dans la config **Users.eco** doit être modifiée :

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
  },
```



Le joueur qui doit devenir admin est spécifié dans le champ **values**. En cas de plusieurs admins, ils sont ajoutés séparés par des virgules. Pour identifier le joueur, on utilise le SteamID64.

Tu peux le trouver en accédant à ton profil Steam, puis en faisant un clic droit n’importe où sur la page. Là, tu peux copier l’URL Steam de ton profil.

![](https://screensaver01.zap-hosting.com/index.php/s/YQoe4tpFzbRTAqd/preview)



Ensuite, l’URL doit être collée dans l’un des sites suivants :

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/3RSya5KbWGfcgHr/preview)



Cela te donnera les infos générales du compte ainsi que le Steam ID. C’est ce dernier que tu inséreras dans **values**. Le résultat ressemble à ça :

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
			"123456789",
			"anotherSteamID"
	]
    }
  },
```



Une fois le serveur redémarré, les joueurs listés auront les privilèges d’administrateur. Si tu veux ajouter d’autres admins, tu n’es plus obligé de passer par la config. Tu peux aussi le faire directement en jeu avec la commande suivante :

```
/admin [player]
```



Voici un aperçu des commandes admin les plus utilisées que tu peux exécuter en tant qu’admin.



## Commandes courantes

|              Commandes              |                      Description                       |
| :--------------------------------: | :----------------------------------------------------: |
|             /allblocks             |                   Fait apparaître tous les blocs                    |
|          /allconstructed           |         Fait apparaître tous les blocs constructibles par le joueur         |
|             /allplants             |                Fait apparaître tous les blocs de plantes                 |
|             /allskills             |                   Débloque toutes les compétences                   |
|            /allterrain             |               Fait apparaître tous les blocs creusables               |
|          /allworldobjects          |                Fait apparaître tous les objets du monde                |
|      /kick [player],(reason)       |                      Expulse un joueur                      |
|       /ban [player],(reason)       |                      Bannit un joueur                       |
|     /give [itemname],(amount)      |                 Donne un objet à toi-même                  |
| /giveskillpoints [player],(amount) |           Donne des points de compétence à un autre joueur           |
|                /fly                |                    Active/désactive le mode vol                    |
|         /move [x],[y],[z]          | Te déplace à la position x, y, z ; où xyz sont des entiers. |
|       /removeadmin [player]        |               Retire un joueur du statut Admin               |

D’autres commandes sont dispo sur le [Wiki officiel d’ECO](https://eco.gamepedia.com/Chat_Commands).

## Conclusion

Félicitations, tu as configuré avec succès les permissions d’administrateur. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />