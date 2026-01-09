---
id: redm-steam-web-api-key
title: "RedM : Configuration de la clé Steam Web API"
description: "Découvrez comment obtenir et activer une clé Steam Web API pour RedM afin d’activer l’authentification et améliorer la configuration de votre serveur → En savoir plus maintenant"
sidebar_label: Clé Steam Web API
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une clé Steam Web API est super importante pour RedM. Elle sert notamment à l’authentification via la clé API quand Steam est utilisé comme identifiant par différents scripts et/ou ressources.

<InlineVoucher />

## Préparation

Un compte Steam non limité est nécessaire pour demander une clé API. Les comptes Steam restreints ont un accès limité aux fonctionnalités de Steam, donc sans accès complet, il est impossible de demander une clé API. Il faut avoir dépensé au moins **5,00 USD** sur la boutique Steam pour débloquer votre compte et ses fonctionnalités.

## Demander une clé API

Une fois votre compte Steam prêt, vous pouvez demander votre propre clé Steam Web API. Pour ça, connectez-vous [sur le site de Steam](https://steamcommunity.com/dev/apikey) avec votre nom de compte Steam et votre mot de passe.

![](https://screensaver01.zap-hosting.com/index.php/s/Wm8rdwwFPbt7D5W/preview)

Une fois connecté, vous devrez entrer un nom de domaine, accepter les conditions d’utilisation de la Steam Web API et cliquer sur le bouton **Register**. Le domaine doit être votre **adresse IP du serveur** *(sans port)*, donc entrez-la ici.

![](https://screensaver01.zap-hosting.com/index.php/s/GNmZXzTn9JJ8cBo/preview)

Si tout se passe bien, vous verrez votre propre clé Steam Web API, comme ci-dessous.

![](https://screensaver01.zap-hosting.com/index.php/s/m8WoXg3WcjeaQrW/preview)

## Activation de la clé API

Maintenant que vous avez votre clé Steam Web API, vous devez la placer dans la configuration de votre serveur (`server.cfg`) sur votre serveur de jeux RedM. Vous pouvez accéder à votre `server.cfg` via l’**interface txAdmin** dans **CFG Editor**. Trouvez une ligne existante ou créez-en une nouvelle si elle n’existe pas, et ajoutez ceci en remplaçant `YOUR_KEY_HERE` par la clé que vous avez générée : 

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/Rw48iY5FGCfP5s9/preview)



## Conclusion

Enfin, vous pouvez redémarrer votre serveur. Votre clé Steam Web API sera chargée au prochain démarrage complet de votre serveur. Vous avez réussi à ajouter une clé Steam Web API à votre serveur de jeux RedM. Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />