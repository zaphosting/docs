---
id: spaceengineers-whitelist
title: "Space Engineers : Liste blanche"
description: Informations sur la façon d'ajouter votre serveur Space Engineers à la liste blanche chez ZAP-Hosting → En savoir plus maintenant"
sidebar_label: Liste blanche
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche est une liste d’accès qui limite qui peut rejoindre ton serveur. Space Engineers utilise souvent une liste blanche basée sur un groupe Steam, où seuls les membres d’un groupe Steam spécifique peuvent se connecter.

<InlineVoucher />

## Activation de la liste blanche

Crée un groupe Steam pour ton serveur et ajoute les joueurs que tu souhaites autoriser. Ensuite, connecte-toi à ton serveur via FTP et ouvre `SpaceEngineers-Dedicated.cfg`.

Assure-toi que le serveur est configuré en mode privé et définis l’ID du groupe à la fin de la configuration.

```xml
<ServerType>PRIVATE</ServerType>
<GroupID>XXXXXXXXXXXXXXXXXX</GroupID>
```

Remplace l’ID du groupe par celui de ton groupe Steam. Sauvegarde le fichier et redémarre le serveur.

## Gestion des joueurs sur la liste blanche

Pour ajouter quelqu’un à la liste blanche, invite-le dans le groupe Steam et assure-toi qu’il a bien rejoint le groupe. Il pourra se connecter dès qu’il sera membre.

Pour retirer quelqu’un, supprime-le du groupe Steam. Une fois qu’il n’est plus membre, il ne pourra plus se connecter. Si tu veux changer la liste blanche pour un autre groupe, modifie la valeur `<GroupID>` et redémarre le serveur.

## Vérification du fonctionnement de la liste blanche

Après le redémarrage, essaie de te connecter avec un compte Steam qui n’est pas dans le groupe Steam. Le serveur devrait refuser la connexion. Puis teste avec un compte membre du groupe.

Si l’accès est toujours ouvert, vérifie que le serveur tourne bien en mode privé et que l’entrée `<GroupID>` est présente dans le fichier actif `SpaceEngineers-Dedicated.cfg`.

## Conclusion

Si toutes les étapes ci-dessus ont été suivies correctement, ta liste blanche est maintenant active et tu peux contrôler exactement qui est autorisé à rejoindre le serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarre le serveur une fois de plus et vérifie le fichier ou la sortie des commandes pour confirmer que le changement a bien été appliqué.

Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />