---
id: spaceengineers-whitelist
title: "Space Engineers : Liste blanche"
description: Informations sur la façon d’ajouter votre serveur Space Engineers à la liste blanche chez ZAP-Hosting → En savoir plus maintenant"
sidebar_label: Liste blanche
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche est une liste d’accès qui restreint qui peut rejoindre votre serveur. Space Engineers utilise couramment une liste blanche basée sur un groupe Steam, où seuls les membres d’un groupe Steam spécifique peuvent se connecter.

<InlineVoucher />

## Activation de la liste blanche

Créez un groupe Steam pour votre serveur et ajoutez les joueurs que vous souhaitez autoriser. Ensuite, connectez-vous à votre serveur via FTP et ouvrez `SpaceEngineers-Dedicated.cfg`.

Assurez-vous que le serveur est configuré en mode privé et définissez l’ID du groupe à la fin de la configuration.

```xml
<ServerType>PRIVATE</ServerType>
<GroupID>XXXXXXXXXXXXXXXXXX</GroupID>
```

Remplacez l’ID du groupe par celui de votre groupe Steam. Enregistrez le fichier et redémarrez le serveur.

## Gestion des joueurs sur liste blanche

Pour ajouter quelqu’un à la liste blanche, invitez-le dans le groupe Steam et assurez-vous qu’il l’a rejoint. Il pourra se connecter une fois membre du groupe.

Pour retirer quelqu’un, supprimez-le du groupe Steam. Une fois qu’il n’en est plus membre, il ne pourra plus se connecter. Si vous souhaitez changer la liste blanche pour un autre groupe, modifiez la valeur `<GroupID>` et redémarrez le serveur.

## Vérification du fonctionnement de la liste blanche

Après le redémarrage, essayez de vous connecter avec un compte Steam qui n’est pas dans le groupe Steam. Le serveur devrait refuser la connexion. Puis essayez avec un compte membre du groupe.

Si l’accès est toujours ouvert, vérifiez que le serveur fonctionne en mode privé et que l’entrée `<GroupID>` est bien présente dans le fichier actif `SpaceEngineers-Dedicated.cfg`.

## Conclusion

Si toutes les étapes ci-dessus ont été suivies correctement, votre liste blanche est maintenant active et vous pouvez contrôler précisément qui est autorisé à rejoindre le serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarrez le serveur une fois de plus et revérifiez le fichier ou la sortie de commande pour confirmer que le changement a bien été appliqué.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />