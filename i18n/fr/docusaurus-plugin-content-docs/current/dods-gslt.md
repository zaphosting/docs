---
id: dods-gslt
title: "Day of Defeat: Source : Créer un GSLT (Steam Game Server Login Token)"
description: "Découvrez comment authentifier et sécuriser vos serveurs de jeux dédiés avec le Game Server Login Token de Steam pour une meilleure visibilité et protection → En savoir plus maintenant"
sidebar_label: Créer un GSLT
services:
  - gameserver-dods
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Le **GSLT (Game Server Login Token)** est un token de connexion requis par Steam/Valve pour faire tourner des serveurs dédiés pour certains jeux. Il est lié à un compte Steam et garantit que le serveur est correctement authentifié.

Sans un GSLT valide, les serveurs concernés peuvent ne pas apparaître dans la liste publique des serveurs ou ne pas pouvoir utiliser la protection VAC.

<InlineVoucher />



## Exigences

Pour utiliser un Game Server Login Token (GSLT), votre compte Steam ne doit pas être limité, banni ou exclu de la communauté. Il doit être lié à un smartphone vérifié, et vous devez posséder le jeu que vous souhaitez héberger. Vous pouvez créer jusqu’à 1000 tokens par compte.

Gardez en tête que vous êtes entièrement responsable de vos tokens. Si un token est mal utilisé ou banni, vous pouvez perdre l’accès au jeu lié de façon permanente. Ne partagez jamais vos tokens, et si vous l’avez fait, supprimez-les immédiatement. Lorsque votre mot de passe Steam est réinitialisé, tous les tokens sont automatiquement régénérés. Les tokens inutilisés pendant longtemps expirent, mais peuvent être recréés à tout moment.



## Créer un GSLT
Pour créer un Game Server Login Token, connectez-vous avec votre compte Steam et accédez à la [Gestion des comptes de serveurs de jeux Steam](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Une fois connecté, vous pouvez créer un nouveau token via le formulaire affiché sur la page. Dans le champ **App ID**, entrez l’ID `300` qui correspond à **Day of Defeat: Source**. Assurez-vous d’entrer le bon ID, car le token ne fonctionnera pas avec une valeur incorrecte.

Pour le champ **Memo**, vous pouvez ajouter une description de votre choix. Cela vous aidera à identifier plus tard l’usage du token, comme le nom ou le rôle du serveur. Après avoir rempli ces deux champs, cliquez sur **Create** pour générer le token. Le token sera alors affiché et pourra être utilisé dans la configuration de lancement de votre serveur.

![img](https://screensaver01.zap-hosting.com/index.php/s/n7pZjBfz5cy59TM/download)

## Configuration du serveur

Le token de connexion doit maintenant être ajouté à la configuration de votre serveur. Pour cela, ouvrez l’interface de gestion de votre serveur de jeux et allez dans la section **Paramètres**. Entrez le token dans le champ nommé **GSL Token** et sauvegardez.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Exploitation de plusieurs serveurs Day of Defeat: Source
Si vous exploitez plusieurs serveurs **Day of Defeat: Source**, vous aurez besoin d’un GSLT pour chaque serveur. Il est <u>**impossible**</u> d’exploiter plusieurs serveurs de jeux avec un seul GSLT.
:::



## Conclusion

Le GSLT a été créé et appliqué à la configuration de votre serveur. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />