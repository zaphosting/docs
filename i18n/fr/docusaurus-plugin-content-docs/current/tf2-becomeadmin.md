---
id: tf2-becomeadmin
title: "Team Fortress 2 : Deviens admin"
description: "Découvre comment attribuer les permissions d’administrateur pour un contrôle total du serveur et une gestion améliorée en jeu → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-tf2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Attribuer les permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes nécessaires pour attribuer les permissions d’administrateur à ton serveur sont décrites ci-dessous.

<InlineVoucher />



## Configuration

Pour t’enregistrer en tant qu’admin, l’installation de SourceMod ou MetaMod est obligatoire. De plus, tu auras besoin du Steam ID de ton compte Steam. Il existe plusieurs façons de l’obtenir : tu peux utiliser un site externe qui fournit ce service ou le récupérer directement via la console en jeu.


Pour obtenir ton SteamID via un site web, commence par ouvrir ton profil Steam et fais un clic droit n’importe où sur la page pour copier l’URL du profil. Ensuite, colle cette URL dans l’un des sites suivants :

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

La page affichera ton SteamID ainsi que d’autres infos sur ton compte. Pour l’enregistrement admin, tu as besoin du **SteamID32** :

```
steamID32: STEAM_0:1:XXXXXX
```

Sinon, tu peux récupérer ton SteamID en jeu via la console. Lance le jeu, connecte-toi à ton serveur, ouvre la console et tape la commande :

```
status
```

Cela affichera tes infos de connexion, y compris ton SteamID. Ensuite, connecte-toi au serveur via FTP et ouvre le fichier `admins.cfg` situé dans :

```
.../addons/sourcemod/configs/
```

Le fichier contient un exemple d’entrée que tu peux copier et adapter :

```
Admins
{
	"Nom du joueur"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

Le **nom du joueur** n’a pas besoin de correspondre à ton nom Steam ; c’est juste pour référence interne. Le champ `auth` définit la méthode d’authentification, qui reste `steam`. Dans `identity`, entre le SteamID32. Les `flags` définissent les permissions accordées à l’admin :

| Permission  | Flag | Description                      |
|-------------|:----:|---------------------------------|
| réservation | a    | Réservation de slot             |
| générique   | b    | Droits basiques (obligatoire)  |
| kick        | c    | Expulser des joueurs            |
| ban         | d    | Bannir des joueurs              |
| unban       | e    | Débannir des joueurs            |
| slay        | f    | Frapper ou tuer des joueurs     |
| changemap   | g    | Changer de map                 |
| cvar        | h    | Modifier les valeurs serveur    |
| config      | i    | Exécuter les configs serveur    |
| chat        | j    | Droits avancés sur le chat      |
| vote        | k    | Lancer des votes admin          |
| password    | l    | Définir le mot de passe serveur |
| rcon        | m    | Exécuter des commandes RCON     |
| cheats      | n    | Activer `sv_cheats`             |
| root        | z    | Accès complet                   |

Tu peux combiner plusieurs flags (ex. `bc` pour droits de kick). Pour un accès complet, utilise uniquement `z`. Tu peux ouvrir le menu admin en tapant `admin` dans le chat ou `sm_admin` dans la console. Avec la commande `admin` dans le chat ou `sm_admin` dans la console, le menu peut être appelé.



## Commandes Admin

Voici une liste des commandes admin courantes que tu peux utiliser en tant qu’admin sur ton serveur.

| Commande                          | Description                                  |
| -------------------------------- | -------------------------------------------- |
| `sm_kick <joueur>`               | Expulse un joueur                            |
| `sm_ban <joueur> <temps> [raison]` | Bannit un joueur pour X minutes (0 = permanent) |
| `sm_unban <SteamID/IP>`          | Débannit un joueur                           |
| `sm_slay <joueur>`               | Tue instantanément le joueur                 |
| `sm_slap <joueur> [dégâts]`      | Frappe le joueur (optionnellement avec dégâts) |
| `sm_map <nomdelamap>`            | Change pour la map spécifiée                 |
| `sm_cvar <cvar> <valeur>`        | Définit une variable de config serveur à la volée |
| `sm_vote <sujet>`                | Lance un vote basique                        |
| `sm_restartgame <secondes>`      | Redémarre le jeu après un compte à rebours  |
| `sm_say <message>`               | Envoie un message dans le chat global        |



## Conclusion

Félicitations, si tu as suivi toutes les étapes, tu as réussi à configurer les permissions admin pour ton serveur. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />