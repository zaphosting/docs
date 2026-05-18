---
id: vintagestory-whitelist
title: "Vintage Story : Liste blanche"
description: "Infos sur comment mettre votre serveur Vintage Story en liste blanche chez ZAP-Hosting → En savoir plus maintenant"
sidebar_label: Liste blanche
services:
  - gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche est une liste d’accès qui limite qui peut rejoindre ton serveur. Vintage Story propose un mode liste blanche intégré que tu peux activer puis gérer joueur par joueur.

<InlineVoucher />


## Activation de la liste blanche

Ouvre la console en jeu et définis le mode liste blanche avec la commande de config serveur. Utilise la valeur 1 pour whitelistmode afin de n’autoriser que les joueurs en liste blanche.

```text
/serverconfig whitelistmode 1
```

Redémarre le serveur une fois après avoir activé ce mode pour que le réglage soit bien pris en compte au démarrage.

## Gestion des joueurs en liste blanche

Pour autoriser un joueur, ajoute-le à la liste blanche avec la commande joueur.

```text
/player PlayerName whitelist on
```

Pour retirer l’accès, désactive la whitelist pour ce joueur.

```text
/player PlayerName whitelist off
```

Si tu veux vérifier la config actuelle du serveur, affiche la config serveur ou lance la commande whitelistmode sans changer d’autres valeurs pour confirmer qu’elle reste bien à 1.

## Vérification du fonctionnement de la liste blanche

Essaie de te connecter avec un joueur qui n’est pas en liste blanche. La connexion doit être refusée. Puis connecte-toi avec un joueur pour lequel tu as activé `whitelist on`.

Si tout le monde peut encore rejoindre, vérifie que `whitelistmode` est bien à 1 et que tu as lancé les commandes sur le bon serveur.

## Conclusion

Si tu as suivi toutes les étapes ci-dessus, ta liste blanche est maintenant active et tu peux contrôler précisément qui peut rejoindre le serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarre le serveur une fois et vérifie à nouveau la config ou la sortie des commandes pour confirmer que le changement a été appliqué.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />