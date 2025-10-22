---
id: gmod-gslt
title: "Garry’s Mod : Crée un GSLT (Steam Game Server Login Token)"
description: "Découvre comment authentifier ton serveur de jeux avec un Steam Game Server Login Token pour un listing correct et la protection VAC → En savoir plus maintenant"
sidebar_label: Créer un GSLT
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Le **GSLT (Game Server Login Token)** est un token de connexion exigé par Steam/Valve pour faire tourner des serveurs dédiés pour certains jeux. Il est lié à un compte Steam et garantit que le serveur est bien authentifié.

Sans un GSLT valide, les serveurs concernés risquent de ne pas apparaître dans la liste publique des serveurs ou de ne pas pouvoir utiliser la protection VAC.

<InlineVoucher />



## Conditions

Pour utiliser un Game Server Login Token (GSLT), ton compte Steam ne doit pas être limité, banni ou exclu de la communauté. Il doit être lié à un smartphone vérifié, et tu dois posséder le jeu que tu souhaites héberger. Tu peux créer jusqu’à 1000 tokens par compte.

Garde en tête que tu es entièrement responsable de tes tokens. Si un token est mal utilisé ou banni, tu risques de perdre l’accès au jeu lié de façon permanente. Ne partage jamais tes tokens, et si tu l’as fait, supprime-les immédiatement. Quand ton mot de passe Steam est réinitialisé, tous les tokens sont automatiquement régénérés. Les tokens inutilisés pendant longtemps expirent, mais peuvent être recréés à tout moment.



## Créer un GSLT
Pour créer un Game Server Login Token, connecte-toi avec ton compte Steam et accède à la [Gestion des comptes de serveurs de jeux Steam](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Une fois connecté, tu peux créer un nouveau token via le formulaire affiché sur la page. Dans le champ **App ID**, entre l’ID `4000` qui correspond à **Garry’s Mod**. Assure-toi d’entrer le bon ID, car le token ne fonctionnera pas avec une valeur incorrecte.

Pour le champ **Memo**, tu peux ajouter une description de ton choix. Ça t’aidera à identifier plus tard l’usage du token, comme le nom ou le rôle du serveur. Après avoir rempli les deux champs, clique sur **Create** pour générer le token. Le token s’affichera alors et pourra être utilisé dans la configuration de lancement de ton serveur.

![img](https://screensaver01.zap-hosting.com/index.php/s/Yn572Ze42ZsXNPL/download)

## Configuration du serveur

Le token de connexion doit maintenant être ajouté à la configuration de ton serveur. Pour ça, ouvre l’interface de gestion de ton serveur de jeux et va dans la section **Paramètres**. Entre le token dans le champ nommé **GSL Token** et sauvegarde.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Exploiter plusieurs serveurs Garry’s Mod
Si tu exploites plusieurs serveurs **Garry’s Mod**, tu auras besoin d’un GSLT pour chaque serveur. Il est <u>**impossible**</u> d’exploiter plusieurs serveurs de jeux avec un seul GSLT.
:::



## Conclusion

Le GSLT a été créé et appliqué à la configuration de ton serveur. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />