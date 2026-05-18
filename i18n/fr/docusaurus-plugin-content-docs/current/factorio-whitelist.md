---
id: factorio-whitelist
title: "Factorio : Liste blanche"
description: "Infos sur comment mettre votre serveur Factorio en liste blanche chez ZAP-Hosting → En savoir plus maintenant"
sidebar_label: Liste blanche
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche est une liste d’accès qui limite l’accès au serveur aux comptes Factorio approuvés. Sur la plupart des serveurs hébergés, la liste blanche s’active dès qu’au moins un joueur est ajouté, et elle est stockée dans un fichier `server-whitelist.json`.

<InlineVoucher />

## Activation de la liste blanche

Ouvre la console Live dans la gestion de ton serveur de jeux ZAP-Hosting et ajoute le premier joueur à la liste blanche. Ajouter le premier nom active généralement la liste blanche immédiatement.

```text
/whitelist add PlayerName
```

Si ton hébergeur propose une commande explicite d’activation, tu peux aussi la lancer avant d’ajouter des utilisateurs.

```text
/whitelist enable
```

Un redémarrage n’est généralement pas nécessaire pour que le changement prenne effet, mais redémarrer une fois après la configuration initiale garantit que le fichier de liste blanche est bien écrit et chargé au démarrage.

## Gestion des joueurs en liste blanche

Pour ajouter d’autres joueurs, relance la commande add avec leur pseudo Factorio.

```text
/whitelist add AnotherPlayer
```

Pour retirer un joueur, utilise la commande remove.

```text
/whitelist remove PlayerName
```

Pour afficher la liste blanche actuelle, utilise la commande get.

```text
/whitelist get
```

## Vérification du fonctionnement de la liste blanche

Après avoir ajouté au moins un joueur, essaie de te connecter avec un compte qui n’est pas listé. La connexion devrait être refusée. Puis connecte-toi avec un compte en liste blanche pour confirmer que ça marche.

Si le serveur laisse toujours tout le monde passer, vérifie que les commandes ont bien été exécutées sur le bon serveur et redémarre une fois pour confirmer que le fichier de liste blanche est chargé au démarrage.

## Conclusion

Si tu as suivi toutes les étapes ci-dessus, ta liste blanche est maintenant active et tu peux contrôler précisément qui peut rejoindre le serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarre le serveur une fois et vérifie à nouveau le fichier ou la sortie des commandes pour confirmer que le changement a bien été appliqué.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />