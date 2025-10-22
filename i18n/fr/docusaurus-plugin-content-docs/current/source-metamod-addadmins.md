---
id: source-metamod-addadmins
title: Deviens admin serveur
description: "Découvre comment devenir admin en récupérant ton Steam ID et en configurant les permissions pour gérer ton serveur → Apprends-en plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Deviens admin

Pour pouvoir te déclarer admin, l’installation de Source- / Metamod est indispensable.

Ensuite, tu as besoin du Steam ID de ton compte Steam. Il y a plusieurs façons de l’obtenir. Soit tu utilises un site externe qui propose ce service, soit tu passes par la console du jeu.

<InlineVoucher />

### SteamID via site web

D’abord, il faut ouvrir le profil Steam, puis faire un clic droit n’importe où dans le profil. Tu peux alors copier l’URL Steam du profil.

![](https://screensaver01.zap-hosting.com/index.php/s/5xbii7Kzmpa33KE/preview)

Ensuite, tu peux coller cette URL sur l’un des sites suivants :

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/wiMssSGFEXWSF9R/preview)

Tu obtiens alors le Steam ID en plus des infos générales du compte. C’est le **Steam ID 32** qui est nécessaire :

```
steamID32: STEAM_0:1:XXXXXX
```

### SteamID via console du jeu

Lance le jeu et connecte-toi à ton serveur. En ouvrant la console du jeu et en tapant la commande `status`, tu obtiens ce genre de résultat :

```
] status
Connected to XXX.XXX.XXX.XX:XXXXX
hostname: Server Hosted by ZAP-Hosting.com
version : 1.37.1.1 secure
os : Linux
type : community dedicated
map : en_dust2
players : 1 humans, 0 bots (16/0 max) (not hibernating)

# userid name uniqueid connected ping loss state rate
# 2 1 "Player name" STEAM_1:1:XXXXXXXXX 44:39 30 0 active 196608
#end
```

### Config

Ensuite, reconnecte-toi au serveur via FTP et ouvre le fichier de config admins.cfg. Il se trouve dans ce dossier : addons/sourcemod/configs

Le fichier contient déjà un exemple d’entrée admin. Tu peux le copier et le modifier comme suit :

```
Admins
{
	"Player name"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

Le **nom du joueur** ne doit **pas** forcément correspondre au nom du compte Steam. C’est juste pour s’y retrouver dans la config. L’entrée `auth` signifie authentification. Ici, c’est fixé sur Steam, donc pas besoin de changer. Sous `identity`, tu mets le SteamID32 du compte Steam. Avec `flags`, tu définis les droits. Il y a plusieurs niveaux de permissions.

| permission | flag | usage |
| ------------|:----:|:--------:|
| réservation | a || réservation de slot |
| basique | b | les bases (obligatoire) |
| kick | c || expulser des joueurs |
| ban | d || bannir des joueurs |
| unban | e || débannir des joueurs |
| slay | f || tuer des joueurs |
| changemap | g | changer de map |
| cvar | h | modifier les valeurs serveur |
| config | i | lancer des configs serveur |
| chat | j | droits avancés chat |
| vote | k | votes admin |
| password | l || définir un mot de passe serveur |
| rcon | m | exécuter des commandes RCON |
| cheats | n | activer sv_cheats dans le jeu |
| root | z | accès complet |

Selon les droits à attribuer, tu peux écrire les flags les uns à la suite des autres. Par exemple, si tu veux juste donner le droit de kick, tu mets les flags 'b' et 'c'. Mais pour un accès complet, le flag `z` suffit.

### Utiliser le menu Admin

Avec la commande `admin` dans le chat ou `sm_admin` dans la console, tu peux ouvrir le menu.

![](https://screensaver01.zap-hosting.com/index.php/s/jwLWXJ99XeJJGSK/preview)

<InlineVoucher />