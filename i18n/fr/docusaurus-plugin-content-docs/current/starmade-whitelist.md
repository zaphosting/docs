---
id: starmade-whitelist
title: "StarMade : Liste blanche"
description: "Infos pour activer la liste blanche sur ton serveur StarMade chez ZAP-Hosting → Découvre tout maintenant"
sidebar_label: Liste blanche
services:
  - gameserver-starmade
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche, c’est une liste d’accès qui limite qui peut rejoindre ton serveur. StarMade gère ça nativement via `server.cfg` et la liste est remplie dans `whitelist.txt`.

<InlineVoucher />

## Activer la liste blanche

Connecte-toi à ton serveur via FTP et ouvre `server.cfg`. Active l’authentification et la liste blanche.

```cfg
USE_STARMADE_AUTHENTICATION=true
REQUIRE_STARMADE_AUTHENTICATION=true
USE_WHITELIST=true
```

Sauvegarde le fichier. Ensuite, ouvre ou crée `whitelist.txt` dans le même dossier serveur. Ajoute les joueurs au format utilisé par StarMade, un par ligne.

```txt
act:-1:PlayerName
act:-1:AnotherPlayer
```

Redémarre le serveur pour charger la liste blanche mise à jour.

## Gérer les joueurs sur la liste blanche

Pour ajouter un joueur, ajoute une ligne dans `whitelist.txt` avec le même format, sauvegarde, puis redémarre. Pour en retirer un, supprime sa ligne, sauvegarde, et redémarre.

Si les noms contiennent des caractères spéciaux, utilise exactement le nom en jeu tel qu’il apparaît à la connexion pour éviter les erreurs.

## Vérifier que la liste blanche fonctionne

Après le redémarrage, essaie de te connecter avec un compte qui n’est pas dans `whitelist.txt`. L’accès doit être refusé. Puis connecte-toi avec un nom présent dans la liste.

Si les joueurs listés ne peuvent pas rejoindre, vérifie que l’authentification StarMade est bien activée et obligatoire, sinon les noms risquent de ne pas matcher correctement.

## Conclusion

Si tu as suivi toutes les étapes, ta liste blanche est active et tu contrôles exactement qui peut rejoindre ton serveur. Si ça ne marche toujours pas comme prévu, redémarre une fois de plus le serveur et vérifie le fichier ou les logs pour confirmer que la modif a bien été prise en compte.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />