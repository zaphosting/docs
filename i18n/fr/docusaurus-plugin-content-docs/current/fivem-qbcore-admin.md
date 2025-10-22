---
id: fivem-qbcore-admin
title: "FiveM : Deviens admin avec QBCore"
description: "Découvre comment attribuer les permissions d’administrateur pour un contrôle total du serveur et une gestion améliorée en jeu → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer les permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes nécessaires pour attribuer les permissions d’administrateur à ton serveur sont décrites ci-dessous.

<InlineVoucher />

## Configuration

La configuration des permissions d’administrateur se fait via le fichier de configuration ``server.cfg``. Pour cela, connecte-toi à l’interface txAdmin et ouvre l’éditeur CFG. Ensuite, rends-toi à la fin du fichier de configuration jusqu’à la section `Permissions`.

![img](https://screensaver01.zap-hosting.com/index.php/s/KPRTmPoYdsCWjGd/preview)

QBCore supporte plusieurs identifiants joueurs, notamment les IDs FiveM (`identifier.fivem:`), les licences Rockstar (`identifier.license:`) et les IDs Discord (`identifier.discord:`). Tu peux récupérer ces identifiants directement depuis ton interface txAdmin. Ensuite, tu peux choisir de leur attribuer le statut GOD, Admin ou Mod.

Une fois que tu as récupéré les identifiants et choisi le statut à attribuer, tu peux assigner les permissions individuelles en les ajoutant dans ton `server.cfg`. Pour cela, ajoute une de ces trois options disponibles comme nouvelle entrée dans la section permissions :

```
add_principal identifier.license:xxxxxx qbcore.god   # Nom du joueur
add_principal identifier.license:xxxxxx qbcore.admin # Nom du joueur
add_principal identifier.license:xxxxxx qbcore.mod   # Nom du joueur
```

Le résultat final pourrait ressembler à ça, par exemple :

```
## Permissions ##
add_ace group.admin command allow # autoriser toutes les commandes
# Note du déployeur : cet admin master n’a pas d’identifiants pour être ajouté automatiquement.
# add_principal identifier.discord:111111111111111111 group.admin #exemple

add_principal identifier.fivem:16219250 qbcore.admin # Nom du joueur
```

## Conclusion

Si tu as suivi toutes les étapes avec succès, tu es maintenant admin sur ton propre serveur. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />