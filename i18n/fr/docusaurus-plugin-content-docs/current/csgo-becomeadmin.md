---
id: csgo-becomeadmin
title: "CS:GO : Devenir admin"
description: "Découvre comment attribuer et gérer les permissions d’administrateur pour un contrôle total de ton serveur CS:GO avec Sourcemod → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer des permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles via Sourcemod directement dans le jeu. Toutes les étapes nécessaires pour attribuer les permissions d’administrateur à ton serveur sont décrites ci-dessous.  
<InlineVoucher />

## Préparation

Pour utiliser les privilèges d’administrateur, une base doit d’abord être mise en place. Par défaut, CS:GO ne propose pas de gestion complète de l’administration. Cependant, il existe des frameworks pour ça, comme Sourcemod. Le framework doit être installé pour pouvoir le configurer. Si tu ne l’as pas encore installé, n’hésite pas à consulter notre guide d’installation de plugin pour CS:GO.

## Définir les admins

L’ajout d’admins se fait via le fichier de configuration `admins_simple.ini` ou `admins.cfg`, situé dans `../csgo/cstrike/addons/sourcemod/configs/`. Pour des setups simples, `admins_simple.ini` suffit généralement. Tu peux y définir les admins par SteamID et leur attribuer directement des flags de permission.

```ini title="admins_simple.ini (Exemple)"
"STEAM_0:1:12345678" "z"
"STEAM_0:1:87654321" "bcdefgjk"
```

Dans cet exemple, le premier admin reçoit toutes les permissions grâce au flag `z`, tandis que le second admin a seulement des permissions sélectionnées.

Si tu veux utiliser des configurations plus avancées comme les groupes, l’immunité ou les mots de passe, il vaut mieux utiliser `admins.cfg`.

```
Admins
{
  "User 1"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:12345678"
    "flags"   "z"
  }

  "User 2"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:87654321"
    "flags"   "bcdefgjk"
  }
}
```

## Définir des groupes d’admins

Tu peux aussi définir des groupes d’admins. Ainsi, les permissions d’un admin sont gérées via son groupe. Pas besoin de configurer les permissions individuellement pour chaque admin. Les groupes sont définis dans le fichier `admin_groups.cfg`, situé dans `../csgo/cstrike/addons/sourcemod/configs/`.

```
Groups
{
  "Full Admin"
  {
    "flags"   "z"
    "immunity" "99"
  }

  "Moderator"
  {
    "flags"   "bcdefgjk"
    "immunity" "10"
  }
}
```

Ensuite, tu peux assigner un groupe à un admin dans le fichier `admins.cfg` :

```
Admins
{
  "User 1"
  {
    "auth"     "steam"
    "identity" "STEAM_0:1:12345678"
    "group"    "Full Admin"
  }
}
```

## Définir l’immunité des admins

Une valeur d’immunité peut être attribuée aux admins ou aux groupes. Si un admin avec une immunité plus basse tente d’agir sur un admin avec une immunité plus haute, la commande échouera. Tu peux définir cette valeur en ajoutant la clé `immunity` à chaque admin dans `admins.cfg` ou directement dans `admin_groups.cfg`.

```
Admins
{
  "ZoNiCaL"
  {
    "auth"      "steam"
    "identity"  "STEAM_0:1:12345678"
    "flags"     "z"
    "immunity"  "100"
  }
}
```

Une valeur d’immunité plus élevée signifie un niveau de protection plus fort contre les actions administratives d’autres admins avec une immunité plus faible.

## Conclusion

Félicitations, tu as configuré avec succès les permissions d’administrateur pour ton serveur CS:GO avec Sourcemod. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />