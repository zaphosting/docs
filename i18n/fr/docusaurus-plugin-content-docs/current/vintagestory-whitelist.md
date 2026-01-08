---
id: vintagestory-whitelist
title: "Vintage Story : Liste blanche"
description: "Infos pour mettre votre serveur Vintage Story en liste blanche chez ZAP-Hosting → En savoir plus maintenant"
sidebar_label: Liste blanche
services:
  - gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche est une liste d’accès qui limite qui peut rejoindre ton serveur. Vintage Story propose un mode liste blanche intégré que tu peux activer puis gérer joueur par joueur.

<InlineVoucher />


## Activer la liste blanche

Ouvre la console en jeu et configure le mode liste blanche avec la commande de config serveur. Utilise la valeur 1 pour whitelist mode afin d’autoriser uniquement les joueurs sur la liste blanche.

```text
/serverconfig whitelistmode 1
```

Redémarre le serveur une fois après avoir activé le mode pour que le réglage soit bien pris en compte au démarrage.

## Gérer les joueurs en liste blanche

Pour autoriser un joueur, ajoute-le à la liste blanche avec la commande joueur.

```text
/player PlayerName whitelist on
```

Pour retirer l’accès, désactive la whitelist pour ce joueur.

```text
/player PlayerName whitelist off
```

Si tu veux vérifier la config actuelle du serveur, affiche la config serveur ou lance la commande whitelistmode sans changer d’autres valeurs et assure-toi qu’elle reste bien à 1.

## Vérifier que la liste blanche fonctionne

Essaie de te connecter avec un joueur qui n’est pas en liste blanche. La connexion doit être refusée. Puis connecte-toi avec un joueur pour lequel tu as mis `whitelist on`.

Si tout le monde peut encore rejoindre, vérifie que `whitelistmode` est bien à 1 et que tu as lancé les commandes sur le bon serveur.

## Conclusion

Si tu as suivi toutes les étapes ci-dessus, ta liste blanche est maintenant active et tu peux contrôler précisément qui peut rejoindre le serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarre le serveur une fois et re-vérifie la config ou la sortie des commandes pour confirmer que le changement a bien été appliqué.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />