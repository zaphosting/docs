---
id: cs16-becomeadmin
title: "CS 1.6 : Deviens admin sur ton propre serveur"
description: "Découvre comment attribuer les permissions d’administrateur pour un contrôle total du serveur et une gestion améliorée en jeu → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer les permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes nécessaires pour attribuer les permissions d’administrateur à ton serveur sont décrites ci-dessous.  
<InlineVoucher />

## Configuration
L’ajout d’un admin se fait via la config **users.ini**. Pour pouvoir devenir admin et accéder à ces fichiers, tu dois d’abord installer **AMXmodX** et **Metamod**. Si ce n’est pas encore fait, ce guide vaut le coup d’œil : [Installer des plugins](cs16-plugins.md)

Pour modifier le fichier de config **users.ini**, tu dois te connecter au serveur via FTP. Ensuite, rends-toi dans le répertoire ``/gXXXX/cs16/cstrike/addons/amxmodx/configs``. Ouvre la config avec un éditeur de texte et modifie-la.

<InlineVoucher />

```
...
; Exemples de comptes admin :
; "STEAM_0:0:123456" "" "abcdefghijklmnopqrstu" "ce"
; "123.45.67.89" "" "abcdefghijklmnopqrstu" "de"
; "Mon Nom" "mon_mdp" "abcdefghijklmnopqrstu" "a"

"loopback" "" "abcdefghijklmnopqrstu" "de"
```

Dans la config, l’entrée ``"loopback" "" "abcdefghijklmnopqrstu" "en"`` doit être modifiée. À l’époque, l’authentification se faisait uniquement par nom et mot de passe. Aujourd’hui, elle se fait uniquement via le SteamID64. Tu peux trouver ton SteamID64 en ouvrant ton profil Steam et en faisant un clic droit n’importe où dessus. Clique ensuite sur **Copier l’URL Steam**.

Ensuite, colle cette URL sur l’un des sites suivants :

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/agXYcjRaDn8nSim/preview)

Tu obtiendras les infos générales du compte ainsi que le Steam ID. Ici, on a juste besoin du SteamID64. Ce Steam ID doit être ajouté à l’entrée client sous **SteamID**. Le résultat ressemble à ça :

```
"STEAM_0:0:XXXXXX" "" "abcdefghijklmnopqrstu" "ce"
```

La ligne contient les infos suivantes :

1. nom/SteamID - ID unique du joueur.
2. mot de passe - aucun si authentification Steam
3. niveau de permission
4. flags de connexion - Ces flags contrôlent comment AMX Mod X tente d’autoriser un admin qui se connecte.

Ici, pas besoin de mot de passe car l’authentification se fait via Steam. On met donc ``ce`` au lieu de ``en``. Voici un aperçu de tous les niveaux d’autorisation et flags de connexion :


**Niveau d’autorisation**

| Niveau d’autorisation | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| a                     | immunité (ne peut pas être kické/ban/slay/slap et affecté par d’autres commandes) |
| b                     | réservation (peut rejoindre les slots réservés)              |
| c                     | commande amx_kick                                            |
| d                     | commandes amx_ban et amx_unban                               |
| e                     | commandes amx_slay et amx_slap                               |
| f                     | commande amx_map                                            |
| g                     | commande amx_cvar (pas tous les cvars disponibles)           |
| h                     | commande amx_cfg                                            |
| i                     | commandes amx_chat et autres commandes chat                  |
| j                     | commandes amx_vote et autres commandes vote                  |
| k                     | accès au cvar sv_password (via commande amx_cvar)            |
| l                     | accès à la commande amx_rcon et au cvar rcon_password (via commande amx_cvar) |
| m                     | niveau personnalisé A (pour plugins additionnels)            |
| n                     | niveau personnalisé B (pour plugins additionnels)            |
| o                     | niveau personnalisé C (pour plugins additionnels)            |
| p                     | niveau personnalisé D (pour plugins additionnels)            |
| q                     | niveau personnalisé E (pour plugins additionnels)            |
| r                     | niveau personnalisé F (pour plugins additionnels)            |
| s                     | niveau personnalisé G (pour plugins additionnels)            |
| t                     | niveau personnalisé H (pour plugins additionnels)            |
| u                     | accès au menu                                               |
| z                     | utilisateur (pas admin)                                     |


**Flags de connexion**

| Flag | Description                                        |
| ---- | -------------------------------------------------- |
| a    | déconnecte le joueur si mot de passe invalide      |
| b    | tag de clan                                        |
| c    | c’est un steamid/wonid                             |
| d    | c’est une IP                                       |
| e    | mot de passe non vérifié (seul nom/ip/steamid requis) |


## Conclusion

Félicitations, tu as configuré avec succès les permissions d’administrateur. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />