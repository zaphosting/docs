---
id: unturned-whitelist
title: "Unturned : Activer et modifier la whitelist sur le serveur"
description: "Découvrez comment sécuriser votre serveur Unturned en activant et gérant la whitelist pour un accès joueur contrôlé → En savoir plus maintenant"
sidebar_label: Whitelist
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Activer la whitelist

La whitelist dans Unturned te permet de protéger ton serveur en n'autorisant que les joueurs sélectionnés présents sur la liste à se connecter au serveur. L’activation de la whitelist se fait dans le jeu via une commande. Cela nécessite les **droits de propriétaire**. Si tu ne sais pas ce que c’est ni comment les attribuer, consulte ce guide : [Devenir admin](unturned-becomeadmin.md)

Si tu as suivi le guide et que tu es devenu admin avec succès, tu peux maintenant activer la whitelist sur ton serveur. Pour cela, ouvre le chat/console dans le jeu sur ton serveur. Tu dois y exécuter la commande suivante :

```
/Whitelisted
```

La whitelist devrait maintenant être active et ne permettre que aux joueurs présents sur la liste de rejoindre le serveur. L’ajout et la suppression de joueurs se font via les commandes suivantes.

## Gérer la whitelist

**Ajouter un joueur à la whitelist :**

```
Permit [SteamID]/[Tag]
```

**Retirer un joueur de la whitelist :**

```
Unpermit [SteamID]
```

**Afficher tous les joueurs autorisés :**

```
Permits
```

<InlineVoucher />