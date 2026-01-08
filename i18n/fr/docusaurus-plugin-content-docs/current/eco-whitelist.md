---
id: eco-whitelist
title: "ECO : Liste blanche"
description: "Infos pour mettre ton serveur ECO en liste blanche chez ZAP-Hosting → Découvre ça maintenant"
sidebar_label: Liste blanche
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche, c’est une liste d’accès qui limite qui peut se connecter à ton serveur. Dans ECO, la liste blanche est stockée dans la config `Users.eco` et s’active automatiquement dès qu’au moins un SteamID64 est présent.

## Activer la liste blanche

Connecte-toi à ton serveur via FTP et trouve le fichier `Users.eco`. Ouvre-le et cherche la section `WhiteList`. Ajoute les SteamID64 dans `$values`.

```json
"WhiteList": {
  "System.String": {
"$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
"$values": [
  "76561198000000000"
]
  }
}
```

Sauvegarde le fichier et redémarre le serveur pour appliquer la nouvelle liste d’accès.

## Gérer les joueurs en liste blanche

Tu peux aussi ajouter des joueurs via la console live dans la gestion de ton serveur de jeux ZAP-Hosting, si tu as la permission en jeu. Utilise la commande whitelist avec le nom du joueur.

```text
/whitelist PlayerName
```

Pour retirer un joueur, modifie `Users.eco`. Supprime le SteamID64 de `$values`, sauvegarde, et redémarre le serveur, car il n’y a pas de commande serveur pour supprimer une entrée.

## Vérifier que la liste blanche fonctionne

Après le redémarrage, essaie de te connecter avec un compte qui n’est pas dans `$values`. L’accès doit être bloqué. Puis connecte-toi avec un compte en liste blanche.

Si l’accès est toujours ouvert, vérifie qu’au moins un SteamID64 est bien présent et que le fichier `Users.eco` que tu as modifié correspond bien à l’instance active du serveur.

## Conclusion

Si tu as suivi toutes les étapes, ta liste blanche est active et tu contrôles exactement qui peut rejoindre le serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarre une fois de plus le serveur et vérifie le fichier ou la sortie de commande pour confirmer que le changement a bien été pris en compte.

<InlineVoucher />