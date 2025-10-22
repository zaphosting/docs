---
id: valheim-serverlisting
title: "Valheim : Problèmes de listing des serveurs avec les jeux Steam utilisant Steamworks"
description: "Découvrez pourquoi les jeux populaires ont du mal à afficher tous les serveurs actifs à cause des limites de Steamworks et comment cela impacte votre expérience multijoueur → En savoir plus maintenant"
sidebar_label: Problèmes de listing des serveurs
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Malheureusement, beaucoup de jeux populaires comme ARK ou Valheim rencontrent d’énormes problèmes pour afficher tous les serveurs dans la liste des serveurs intégrée au jeu.

C’est parce que ces jeux utilisent le logiciel "Steamworks" pour leur listing.

Steamworks peut lister un maximum de 4880 serveurs. Si un jeu a plus de serveurs actifs que ce nombre, seule une petite partie des serveurs actifs sera affichée pour le joueur.

C’est très aléatoire si le joueur 1 voit le serveur Y ou pas.  
Il arrive donc aussi que le joueur 1 voie le serveur Y, mais pas le joueur 2. Le joueur 3, lui, le voit à nouveau, mais ne voit pas un autre serveur que le joueur 1 voit.

Pour exclure un problème avec le fournisseur du serveur, vous pouvez chercher le serveur sous "Steam" - "Afficher" - "Serveur" avec l’adresse IP et le port. S’il est trouvé là, la connexion entre le joueur et le serveur est parfaite. Car c’est une requête directe faite par le joueur.

Un bon exemple pour valider le problème est que les joueurs d’ARK qui lancent le jeu via Steam ne trouvent pas les serveurs. S’ils ouvrent ARK via Epic Games, les serveurs sont parfaitement trouvés. Steamworks n’est pas utilisé ici.

Plusieurs développeurs de jeux ont aussi commenté ce problème. Par exemple, Garry Newman de Garrysmod pensait que le souci venait de son fournisseur de serveurs OVH. Mais ce n’était pas le cas. Le problème concerne aussi ZAP-Hosting et tous les autres fournisseurs, car il vient directement de Steamworks :

![](https://screensaver01.zap-hosting.com/index.php/s/mWWpmZzJ6ZXX59W/preview)

Source : https://x.com/garrynewman/status/1334446218437681152?s=20

Ou même Rust, comme ils l’écrivent dans leur blog :

```
Ce n’est pas tout rose quand on connaît un tel pic de popularité soudain.  
On commence à voir des fissures apparaître dans les fondations, le plus visible pour nous étant que le navigateur de serveurs n’a jamais été conçu pour gérer un si grand nombre de serveurs.  
Sans entrer dans les détails techniques, cela a entraîné que beaucoup de serveurs ne s’affichent pas pour les utilisateurs, ce qui cause beaucoup de frustration chez les propriétaires de serveurs.  
Nous travaillons actuellement sur des solutions et explorons des pistes, merci de votre patience.
```

Source : https://rust.facepunch.com/blog/

Nous continuerons de suivre ce problème de près et vous tiendrons informés ici dès qu’une solution sera trouvée.

<InlineVoucher />