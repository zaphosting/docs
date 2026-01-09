---
id: 7d2d-whitelist
title: "7 Days To Die : Liste blanche"
description: "Infos pour mettre votre serveur 7 Days To Die en liste blanche chez ZAP-Hosting → Découvre ça maintenant"
sidebar_label: Liste blanche
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche, c’est une liste d’accès qui limite qui peut rejoindre ton serveur. Dans 7 Days To Die, ça se gère souvent dans le fichier serveradmin.xml, qui stocke les comptes Steam autorisés. Une fois activée, seuls les joueurs listés peuvent se connecter.

<InlineVoucher />


## Activer la liste blanche

Connecte-toi à ton serveur via FTP et trouve le fichier `serveradmin.xml`. Sur la plupart des installations hébergées, il se trouve dans le dossier de sauvegarde, souvent sous un chemin du genre `7-days-to-die/Saves/<WorldName>/<SaveName>/serveradmin.xml` ou directement dans `7-days-to-die/Saves/serveradmin.xml` selon l’organisation du fournisseur. Ouvre le fichier et cherche la section `<whitelist>` à l’intérieur de `<adminTools>`.

Ajoute au moins un SteamID64 à la liste blanche. Le format ci-dessous suit la structure par défaut utilisée par le jeu.

```xml
<whitelist>
  <user steamID="76561198021925107" name="PlayerName" permission_level="1000" />
</whitelist>
```

Sauvegarde le fichier et redémarre le serveur pour que la nouvelle liste blanche soit prise en compte. Si ton fichier ne contient que des exemples commentés, assure-toi que ta ligne `<user ... />` n’est pas dans un commentaire XML.

## Gérer les joueurs en liste blanche

Pour ajouter un autre joueur, refais la même modif dans `serveradmin.xml` en ajoutant une autre entrée `<user ... />` dans `<whitelist>`. Utilise le SteamID64 du joueur pour `steamID`.

Pour retirer un joueur, supprime la ligne `<user ... />` correspondante dans la section `<whitelist>`, sauvegarde et redémarre le serveur.

Si tu préfères les commandes, ouvre la console Live dans la gestion de ton serveur de jeux ZAP-Hosting et utilise les commandes intégrées pour ajouter ou retirer des joueurs de la liste blanche. Les changements faits via commandes seront aussi reflétés dans les données de la liste blanche utilisées par le serveur au redémarrage.

## Vérifier que la liste blanche fonctionne

Après le redémarrage, essaie de te connecter avec un compte qui n’est pas sur la liste blanche. La tentative de connexion doit être refusée. Puis teste avec un compte en liste blanche pour confirmer que l’accès marche.

Si le serveur laisse encore passer des joueurs non autorisés, vérifie que tes entrées dans la liste blanche ne sont pas commentées et que tu as bien modifié le bon `serveradmin.xml` pour la sauvegarde active.

## Conclusion

Si tu as suivi toutes les étapes ci-dessus, ta liste blanche est maintenant active et tu peux contrôler exactement qui peut rejoindre ton serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarre le serveur une fois de plus et vérifie le fichier ou la sortie des commandes pour confirmer que la modif a bien été appliquée.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />