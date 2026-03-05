---
id: csgo-becomeadmin
title: "CS:GO : Devenir admin"
description: "Découvre comment attribuer et gérer les permissions d’administrateur pour un contrôle total de ton serveur dans CS:GO → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer des permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes nécessaires pour attribuer les permissions d’administrateur à ton serveur sont décrites ci-dessous.  
<InlineVoucher />

## Préparation
Pour utiliser les privilèges d’administrateur, une base doit d’abord être mise en place. Par défaut, CS:GO ne propose pas de gestion d’administration complète. Cependant, il existe des frameworks pour ça, comme CounterStrikeSharp. Le framework doit être installé pour la configuration. Si tu ne l’as pas encore installé, n’hésite pas à consulter notre [guide Installer des plugins](csgo-plugins).

## Définir les admins

Ajouter un admin se fait via le fichier de configuration `admins.json`, situé sous `../CS:GO/game/csgo/addons/CounterStrikeShap/addons/configs/`. Pour déclarer un nouvel admin, tu dois créer une nouvelle entrée. Celle-ci doit inclure un nom, un identifiant (identity) et des flags (permissions). Le nom peut être choisi librement, il sert juste de repère/identifiant. Pour l’identifiant "identity", il faut fournir le SteamID du compte Steam. Ensuite, les flags doivent être définis selon les besoins.

```js title="admins.json (Exemple)"
{
  "User 1": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"]
  },
  "User 2": {
    "identity": "STEAM_0:1:1",
    "flags": ["@css/generic"]
  }
}
```

## Définir les groupes d’admins
Tu peux aussi définir des groupes d’admins. Ainsi, les permissions d’un admin sont définies via son groupe correspondant. Comme ça, tu n’as pas besoin de configurer les permissions individuellement pour chaque admin. Les groupes sont définis dans le fichier de config admin_groups.json, situé sous `../CS:GO/game/csgo/addons/CounterStrikeShap/addons/configs/`.
```js title="admin_groups.json"
"#css/simple-admin": {
  "flags": [
    "@css/generic",
    "@css/reservation",
    "@css/ban",
    "@css/slay",
  ]
}
```

## Définir l’immunité des admins
Une valeur d’immunité peut être attribuée aux admins. Si un admin ou joueur avec une immunité plus basse attaque un autre admin ou joueur avec une immunité plus haute, la commande échouera. Tu peux définir une valeur d’immunité en ajoutant la clé immunity à chaque admin dans configs/admins.json.

```
{
  "ZoNiCaL": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"],
    "immunity": 100
  }
}
```
:::info
La vérification de l’immunité n’est pas automatiquement gérée par CounterStrikeSharp. C’est aux plugins individuels de gérer cette vérification.
:::

## Conclusion

Félicitations, tu as configuré avec succès les permissions d’administrateur. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />