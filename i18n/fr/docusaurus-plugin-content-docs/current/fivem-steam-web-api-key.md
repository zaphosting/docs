---
id: fivem-steam-web-api-key
title: "FiveM : Configuration de la clé Steam Web API"
description: "Découvrez comment obtenir et activer une clé Steam Web API pour FiveM afin d'activer l'authentification et améliorer les fonctionnalités du serveur → En savoir plus maintenant"
sidebar_label: Clé Steam Web API
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une clé Steam Web API est super importante pour FiveM. Elle sert notamment à l’authentification via la clé API quand Steam est utilisé comme identifiant par différents scripts et/ou ressources.

<InlineVoucher />

## Préparation

Il te faut un compte Steam non limité pour demander une clé API. Les comptes Steam restreints ont un accès limité aux fonctionnalités de Steam, donc sans accès complet, impossible de demander une clé API. Tu dois dépenser au moins **5,00 USD** sur la boutique Steam pour débloquer ton compte et ses fonctionnalités.

## Demander une clé API

Une fois ton compte Steam prêt, tu peux demander ta propre clé Steam Web API. Pour ça, connecte-toi [sur le site de Steam](https://steamcommunity.com/dev/apikey) avec ton nom de compte et ton mot de passe Steam.

![](https://screensaver01.zap-hosting.com/index.php/s/Wm8rdwwFPbt7D5W/preview)

Une fois connecté, tu devras entrer un nom de domaine, confirmer les conditions d’utilisation de la Steam Web API et cliquer sur le bouton **Register**. Le domaine doit être ton **IP du serveur** *(sans le port)*, donc entre-le ici.

![](https://screensaver01.zap-hosting.com/index.php/s/GNmZXzTn9JJ8cBo/preview)

Si tout se passe bien, tu verras ta clé Steam Web API, comme montré ci-dessous.

![](https://screensaver01.zap-hosting.com/index.php/s/m8WoXg3WcjeaQrW/preview)

## Activation de la clé API

Maintenant que tu as ta clé Steam Web API, tu dois la placer dans la configuration de ton serveur (`server.cfg`) sur ton serveur de jeux FiveM. Tu peux accéder à ton `server.cfg` via l’**interface txAdmin** sous **Éditeur CFG**. Trouve une ligne existante ou crée-en une nouvelle si elle n’existe pas, et ajoute ceci en remplaçant `YOUR_KEY_HERE` par ta clé générée :

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/ED4QbkP8aaeF92B/preview)

## Conclusion

Pour finir, redémarre ton serveur. Ta clé Steam Web API sera chargée au prochain démarrage complet du serveur. Tu as réussi à ajouter une clé Steam Web API à ton serveur de jeux FiveM. Si tu as des questions ou besoin d’aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />