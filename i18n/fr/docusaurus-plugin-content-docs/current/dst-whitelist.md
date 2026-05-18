---
id: dst-whitelist
title: "Don't Starve Together : Liste blanche"
description: "Infos sur comment mettre votre serveur Don't Starve Together en liste blanche chez ZAP-Hosting → En savoir plus maintenant"
sidebar_label: Liste blanche
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche est une liste d’accès qui limite qui peut rejoindre ton serveur. Dans Don't Starve Together, c’est une allowlist basée sur les IDs utilisateur Klei. La config classique, c’est un fichier `whitelist.txt` plus `whitelist_slots` dans `cluster.ini`.

<InlineVoucher />


## Activer la liste blanche

Connecte-toi à ton serveur via FTP et trouve ton dossier cluster, souvent du genre `DoNotStarveTogether/Cluster_1/` ou un chemin spécifique à ton fournisseur qui contient `cluster.ini`. Ouvre `cluster.ini` et dans la section `[NETWORK]`, règle `whitelist_slots`.

Pour que le serveur soit vraiment en mode liste blanche uniquement, mets `whitelist_slots` égal à la valeur de `max_players`.

```ini
[NETWORK]
max_players = 6
whitelist_slots = 6
```

Dans ce même dossier cluster, crée ou modifie `whitelist.txt`. Ajoute un ID Klei par ligne au format KU_.

```txt
KU_aaaaaaaa
KU_bbbbbbbb
```

Sauvegarde les fichiers et redémarre le serveur. L’allowlist est lue au démarrage.

## Gérer les joueurs en liste blanche

Pour ajouter un joueur, ajoute son ID KU_ dans `whitelist.txt`, sauvegarde, et redémarre.

Pour retirer un joueur, supprime son ID KU_ de `whitelist.txt`, sauvegarde, et redémarre.

Garde toujours au moins autant d’IDs dans `whitelist.txt` que la valeur de `whitelist_slots` pour éviter les problèmes d’accès quand les slots réservés dépassent le nombre d’utilisateurs listés.

## Vérifier que la liste blanche fonctionne

Après le redémarrage, essaie de te connecter avec un compte qui n’est pas dans `whitelist.txt`. Si `whitelist_slots` est égal à `max_players`, la connexion doit échouer. Ensuite, connecte-toi avec un ID KU_ listé pour confirmer l’accès.

Si le serveur laisse encore passer des joueurs non listés, vérifie que tu as bien modifié le dossier cluster actif et que la section `[NETWORK]` contient bien la ligne `whitelist_slots`.

## Conclusion

Si tu as suivi toutes les étapes ci-dessus, ta liste blanche est maintenant active et tu contrôles exactement qui peut rejoindre le serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarre une fois de plus le serveur et vérifie les fichiers ou la sortie des commandes pour confirmer que le changement a bien été pris en compte.

<InlineVoucher />