---
id: 7d2d-whitelist
title: "7 Days To Die : Liste blanche"
description: Informations sur la façon de mettre votre serveur 7 Days To Die en liste blanche chez ZAP-Hosting → En savoir plus maintenant"
sidebar_label: Liste blanche
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche est une liste d’accès qui limite qui peut rejoindre votre serveur. Dans 7 Days To Die, cela se gère généralement dans le fichier serveradmin.xml, qui stocke les comptes Steam autorisés. Une fois activée, seuls les joueurs listés peuvent se connecter.

<InlineVoucher />


## Activation de la liste blanche

Connectez-vous à votre serveur via FTP et localisez le fichier `serveradmin.xml`. Sur la plupart des installations hébergées, il se trouve dans le répertoire de sauvegarde, souvent sous un chemin similaire à `7-days-to-die/Saves/<WorldName>/<SaveName>/serveradmin.xml` ou directement dans `7-days-to-die/Saves/serveradmin.xml` selon l’organisation du fournisseur. Ouvrez le fichier et cherchez la section `<whitelist>` à l’intérieur de `<adminTools>`.

Ajoutez au moins un SteamID64 à la liste blanche. Le format ci-dessous suit la structure par défaut utilisée par le jeu.

```xml
<whitelist>
  <user steamID="76561198021925107" name="PlayerName" permission_level="1000" />
</whitelist>
```

Enregistrez le fichier et redémarrez le serveur pour que la nouvelle liste blanche soit prise en compte. Si votre fichier ne contient que des exemples commentés, assurez-vous que votre ligne `<user ... />` ne soit pas dans un commentaire XML.

## Gestion des joueurs en liste blanche

Pour ajouter un autre joueur, répétez la même modification dans `serveradmin.xml` en ajoutant une autre entrée `<user ... />` dans `<whitelist>`. Utilisez le SteamID64 du joueur pour `steamID`.

Pour retirer un joueur, supprimez la ligne `<user ... />` correspondante dans la section `<whitelist>`, enregistrez et redémarrez le serveur.

Si vous préférez les commandes, ouvrez la console Live dans la gestion du serveur de jeux ZAP-Hosting et utilisez les commandes intégrées de liste blanche pour ajouter ou retirer des joueurs. Les modifications faites via commandes seront aussi reflétées dans les mêmes données de liste blanche utilisées par le serveur au redémarrage.

## Vérification du fonctionnement de la liste blanche

Après le redémarrage, essayez de vous connecter avec un compte qui n’est pas sur la liste blanche. La tentative de connexion doit être refusée. Puis essayez avec un compte en liste blanche pour confirmer que l’accès fonctionne.

Si le serveur laisse encore passer des joueurs non autorisés, vérifiez que vos entrées de liste blanche ne sont pas commentées et que vous avez bien modifié le bon `serveradmin.xml` pour la sauvegarde active.

## Conclusion

Si toutes les étapes ci-dessus ont été suivies correctement, votre liste blanche est maintenant active et vous pouvez contrôler précisément qui est autorisé à rejoindre le serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarrez une fois de plus le serveur et revérifiez le fichier ou la sortie des commandes pour confirmer que la modification a bien été appliquée.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />