---
id: dst-whitelist
title: "Don't Starve Together : Liste blanche"
description: "Informations sur la façon d'ajouter votre serveur Don't Starve Together à la liste blanche chez ZAP-Hosting - Documentation ZAP-Hosting.com"
sidebar_label: Liste blanche
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche est une liste d’accès qui limite qui peut rejoindre ton serveur. Dans Don't Starve Together, c’est implémenté comme une allowlist basée sur les IDs utilisateur Klei. La config habituelle est un fichier `whitelist.txt` plus `whitelist_slots` dans `cluster.ini`.

<InlineVoucher />


## Activation de la liste blanche

Connecte-toi à ton serveur via FTP et localise ton dossier cluster, souvent similaire à `DoNotStarveTogether/Cluster_1/` ou un chemin spécifique à ton fournisseur contenant `cluster.ini`. Ouvre `cluster.ini` et dans la section `[NETWORK]`, règle `whitelist_slots`.

Pour que le serveur soit effectivement en mode liste blanche uniquement, mets `whitelist_slots` égal à la valeur de `max_players`.

```ini
[NETWORK]
max_players = 6
whitelist_slots = 6
```

Dans le même dossier cluster, crée ou modifie `whitelist.txt`. Ajoute un ID Klei par ligne au format KU_.

```txt
KU_aaaaaaaa
KU_bbbbbbbb
```

Sauvegarde les fichiers et redémarre le serveur. L’allowlist est lue au démarrage.

## Gestion des joueurs en liste blanche

Pour ajouter un joueur, ajoute son ID KU_ dans `whitelist.txt`, sauvegarde, puis redémarre.

Pour retirer un joueur, supprime son ID KU_ de `whitelist.txt`, sauvegarde, puis redémarre.

Garde le nombre d’IDs dans `whitelist.txt` au moins égal à `whitelist_slots` pour éviter les problèmes de connexion quand les slots réservés dépassent le nombre d’utilisateurs listés.

## Vérification du fonctionnement de la liste blanche

Après le redémarrage, essaie de te connecter avec un compte qui n’est pas dans `whitelist.txt`. Si `whitelist_slots` est égal à `max_players`, la connexion doit échouer. Ensuite, connecte-toi avec un ID KU_ listé pour confirmer l’accès.

Si le serveur laisse encore passer des joueurs non listés, vérifie que tu as bien modifié le dossier cluster actif et que la section `[NETWORK]` contient bien la ligne `whitelist_slots`.

## Conclusion

Si toutes les étapes ci-dessus ont été suivies correctement, ta liste blanche est maintenant active et tu peux contrôler exactement qui est autorisé à rejoindre le serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarre le serveur une fois de plus et re-vérifie les fichiers ou la sortie des commandes pour confirmer que le changement a bien été appliqué.

<InlineVoucher />