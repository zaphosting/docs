---
id: gmod-servercfg
title: "Garry's Mod : Paramètres Server.cfg"
description: "Configure ton serveur de jeux Garry's Mod pour personnaliser le gameplay et les limites de spawn pour une expérience optimisée → Découvre-en plus maintenant"
sidebar_label: Modification Server.cfg Garry's Mod
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Configure ton server.cfg dans Garry's Mod.

Pour modifier le server.cfg directement via notre interface web, rends-toi dans l’onglet Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/TNFHX38G5PNpqac/preview)

Ensuite, ouvre le server.cfg dans notre éditeur de config intégré.

![](https://screensaver01.zap-hosting.com/index.php/s/Pro5QoBBKSQCTdF/preview)

Tu es maintenant dans notre éditeur de config, ici tu peux modifier toutes les variables comme tu veux. Fais juste attention à ne pas mélanger les paramètres entre notre onglet Paramètres et le server.cfg, ça pourrait affecter : hostname, rcon_password et sv_password.

Variables possibles pour personnaliser ton serveur de jeux Garry's Mod :

Paramètres de spawn :
```
sbox_maxprops 150		//Définit la limite max de props qu’un joueur peut avoir.
sbox_maxragdolls 10		//Définit la limite max de ragdolls qu’un joueur peut avoir.
sbox_maxballoons 10		//Définit la limite max de ballons qu’un joueur peut avoir.
sbox_maxeffects 10		//Définit la limite max d’effets qu’un joueur peut avoir. (Impacte les FPS)
sbox_maxdynamite 10		//Définit la limite max de dynamite qu’un joueur peut avoir.
sbox_maxlamps 10		//Définit la limite max de lampes qu’un joueur peut avoir.
sbox_maxthrusters 10	//Définit la limite max de propulseurs qu’un joueur peut avoir.
sbox_maxwheels 10		//Définit la limite max de roues qu’un joueur peut avoir.
sbox_maxnpcs 10			//Définit la limite max de PNJ qu’un joueur peut avoir.
sbox_maxhoverballs 10	//Définit la limite max de hoverballs qu’un joueur peut avoir.
sbox_maxvehicles 10		//Définit la limite max de véhicules qu’un joueur peut avoir.
sbox_maxbuttons 10		//Définit la limite max de boutons qu’un joueur peut avoir.
```

Paramètres de jeu :
```
sbox_plpldamage 0 / 1	//0 = PVP désactivé, 1 = PVP activé
sbox_godmode	0 / 1	//0 = désactivé, 1 = activé (Mode Dieu pour tous les joueurs)
sbox_noclip		0 / 1	//0 = Noclip désactivé, 1 = Noclip activé
sv_noclipaccelerate 3	//Change la vitesse du noclip.
sv_alltalk 1			//Si activé, tu peux entendre tous les joueurs sur le serveur.
```

Paramètres réseau (modifications non recommandées)
```
sv_minrate 0			//Vitesse de connexion minimale
sv_maxrate 10000		//Vitesse de connexion maximale
sv_minupdaterrate 10	//Tickrate minimal
sv_maxupdaterrate 66	//Tickrate maximal
net_maxfilesize	64		//Taille max des fichiers transférables sans FastDL.
sv_lan 0				//Transforme le jeu en jeu en ligne.
sv_region 3				//0+1 = US, 2 = Afrique du Sud, 3 = Europe, 4 = Asie, 5 = Australie, 6 = Moyen-Orient, 7 = Afrique, 255 = Monde entier
```

Une fois que tu as modifié tout ce que tu voulais, il te suffit de sauvegarder tes changements.

![](https://screensaver01.zap-hosting.com/index.php/s/zpaddQA5EXfSRM3/preview)

Après un reboot du serveur, toutes les modifications sont prises en compte.

<InlineVoucher />