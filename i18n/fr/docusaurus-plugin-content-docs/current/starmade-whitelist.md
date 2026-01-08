---
id: starmade-whitelist
title: "StarMade : Liste blanche"
description: "Infos pour mettre votre serveur StarMade en liste blanche chez ZAP-Hosting → En savoir plus maintenant"
sidebar_label: Liste blanche
services:
  - gameserver-starmade
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche est une liste d’accès qui limite qui peut rejoindre ton serveur. StarMade supporte une liste blanche intégrée contrôlée dans `server.cfg` et remplie via `whitelist.txt`.

<InlineVoucher />

## Activation de la liste blanche

Connecte-toi à ton serveur via FTP et ouvre `server.cfg`. Active l’authentification et la liste blanche.

```cfg
USE_STARMADE_AUTHENTICATION=true
REQUIRE_STARMADE_AUTHENTICATION=true
USE_WHITELIST=true
```

Sauvegarde le fichier. Ensuite, ouvre ou crée `whitelist.txt` dans le même dossier serveur. Ajoute les joueurs au format utilisé par StarMade, une entrée par ligne.

```txt
act:-1:PlayerName
act:-1:AnotherPlayer
```

Redémarre le serveur pour charger la liste blanche mise à jour.

## Gestion des joueurs en liste blanche

Pour ajouter un joueur, ajoute une nouvelle ligne dans `whitelist.txt` avec le même format, sauvegarde, puis redémarre. Pour retirer un joueur, supprime sa ligne dans `whitelist.txt`, sauvegarde, puis redémarre.

Si les noms contiennent des caractères spéciaux, utilise exactement le nom en jeu tel qu’il apparaît à la connexion pour éviter les erreurs.

## Vérification du fonctionnement de la liste blanche

Après le redémarrage, essaie de te connecter avec un compte qui n’est pas dans `whitelist.txt`. L’accès doit être refusé. Puis connecte-toi avec un nom de joueur listé.

Si les joueurs listés ne peuvent pas rejoindre, vérifie que l’authentification StarMade est activée et requise, sinon les noms risquent de ne pas correspondre correctement.

## Conclusion

Si tu as suivi toutes les étapes ci-dessus, ta liste blanche est maintenant active et tu peux contrôler précisément qui peut rejoindre le serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarre le serveur une fois de plus et vérifie le fichier ou la sortie des commandes pour confirmer que le changement a bien été appliqué.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />