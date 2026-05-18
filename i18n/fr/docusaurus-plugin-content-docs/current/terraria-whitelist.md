---
id: terraria-whitelist
title: "Terraria : Liste blanche"
description: "Infos sur comment mettre en liste blanche ton serveur Terraria chez ZAP-Hosting → Découvre ça maintenant"
sidebar_label: Liste blanche
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche, c’est une liste d’accès qui limite qui peut rejoindre ton serveur. Pour l’hébergement Terraria, la méthode classique, c’est d’utiliser un serveur TShock et d’activer sa fonction liste blanche, gérée via un fichier et des commandes.

<InlineVoucher />

## Activer la liste blanche

Connecte-toi à ton serveur via FTP et vérifie que ton serveur tourne bien sous TShock. Ensuite, trouve le fichier de config TShock `tshock/config.json` et active la liste blanche en mettant :

```
"EnableWhitelist": true
```

Sauvegarde le fichier et redémarre le serveur. TShock demandera maintenant une approbation via la liste blanche pour les connexions entrantes.

## Gérer les joueurs en liste blanche

Pour ajouter une entrée, ouvre la console live dans la gestion de ton serveur de jeux ZAP-Hosting et utilise la commande whitelist avec l’adresse IP du joueur.

```text
whitelist 203.0.113.25
```

TShock stocke la liste dans `tshock/whitelist.txt`. Pour retirer une entrée, connecte-toi en FTP, ouvre ce fichier, supprime la ligne IP, sauvegarde et redémarre le serveur.

```txt
203.0.113.25
198.51.100.10
```

## Vérifier que la liste blanche fonctionne

Après le redémarrage, essaie de te connecter depuis une IP qui n’est pas dans la liste. L’accès doit être bloqué. Puis connecte-toi depuis une IP en liste blanche.

Si des joueurs peuvent encore rejoindre sans être listés, vérifie que `EnableWhitelist` est bien à true dans `config.json` et que le serveur a bien démarré en mode TShock.

## Conclusion

Si tu as suivi toutes les étapes, ta liste blanche est active et tu contrôles exactement qui peut rejoindre le serveur. Si l’accès ne marche toujours pas comme prévu, redémarre une fois de plus le serveur et vérifie les fichiers ou la sortie des commandes pour confirmer que le changement a bien été pris en compte.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂



<InlineVoucher />