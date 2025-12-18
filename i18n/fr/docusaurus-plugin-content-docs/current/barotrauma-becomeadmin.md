---
id: barotrauma-becomeadmin
title: "Barotrauma : Deviens admin sur ton propre serveur"
description: "Découvre comment attribuer les permissions d’administrateur pour un contrôle total du serveur et une gestion fluide en jeu → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-barotrauma
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer les permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes pour attribuer les permissions d’administrateur à ton serveur sont décrites ci-dessous.  
<InlineVoucher />

## Configuration
L’ajout d’un admin se fait via le fichier de config **Clientpermissions.xml**, que tu peux trouver dans l’interface sous Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/oJNTozXz9YW8sjG/preview)


Une nouvelle entrée client doit être ajoutée dans la config pour ajouter un nouveau joueur. La syntaxe ressemble à ça :

```xml
<Client
    name="<nom du joueur>"
    steamid="<steamid>"
    permissions="<permission(s)>">
    <command
      name="<nom de la commande>" />
  </Client>
```



L’entrée client contient les variables **Name, SteamID, Permissions, et Command**. Elles doivent être modifiées. Le nom peut être choisi librement, il sert juste de repère. Ensuite, il faut définir le SteamID64 de ton compte Steam.

Tu peux le trouver en allant sur ton profil Steam, puis en faisant un clic droit n’importe où sur la page. Là, tu peux copier l’URL Steam du profil.



![](https://screensaver01.zap-hosting.com/index.php/s/C3nfdjemxkjZH5n/preview)



Ensuite, il faut coller cette URL dans l’un des sites suivants :

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/asnbFc4JDifdSHn/preview)



Tu obtiens alors les infos générales du compte ainsi que le Steam ID. Ici, c’est le **Steam ID 64** qui est nécessaire. Ce Steam ID doit être ajouté dans l’entrée client sous **SteamID**. Le résultat ressemble à ça : 

```xml
<Client
    name="Nom"
    steamid="123456789"
    permissions="<permission(s)>">
    <command
      name="<nom de la commande>" />
  </Client>
```



À ce stade, tu es déjà admin, mais aucun droit spécifique n’a encore été attribué à ton compte. Tu peux les ajouter en précisant les permissions et commandes utilisables. Par exemple, comme ça :

```xml
...
    permissions="<permission(s)>"> ---> permissions="ServerLog, ConsoleCommands">
...
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ClientPermissions> 
<Client
    name="Nom"
    steamid="123456789"
    permissions="ServerLog, ConsoleCommands">
    <command
      name="heal" />
    <command
      name="spawn" />
  </Client>
</ClientPermissions>
```



Dans cet exemple, l’admin a accès aux logs du serveur, à la console, ainsi qu’aux commandes heal et spawn. Voici un aperçu des permissions que tu peux définir.



## Permissions

| Permissions       | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| ManageRound       | Peut démarrer/terminer les rounds.                           |
| Kick              | Peut expulser d’autres joueurs.                              |
| Ban               | Peut bannir d’autres joueurs.                                |
| Unban             | Peut lever les bans d’autres joueurs.                        |
| SelectSub         | Peut choisir le sous-marin.                                  |
| SelectMode        | Peut choisir le mode de jeu.                                 |
| ManageCampaign    | Peut sélectionner la destination, la mission et acheter des fournitures dans la boutique de la campagne. |
| ConsoleCommands   | Peut utiliser les commandes console - attention, il faut aussi donner les permissions pour chaque commande console individuellement. |
| ServerLog         | Peut lire les logs du serveur.                               |
| ManageSettings    | Peut modifier les paramètres du serveur.                     |
| ManagePermissions | Peut modifier les permissions des autres clients.            |
| KarmaImmunity     | Immunisé aux effets négatifs du système de karma, ne perd pas de karma. |
| All               | Donne toutes les permissions.                                |



## Conclusion

Félicitations, tu as configuré avec succès les permissions d’administrateur. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />