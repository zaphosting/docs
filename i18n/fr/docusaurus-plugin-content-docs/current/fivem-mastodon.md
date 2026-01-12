---
id: fivem-mastodon
title: "FiveM : Configurer un fil d’activité avec Mastodon"
description: "Découvrez comment intégrer un fil d’activité Mastodon à votre serveur pour des mises à jour en temps réel et une meilleure interaction avec la communauté → En savoir plus maintenant"
sidebar_label: Configurer le fil d’activité
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Un fil d’activité permet de tenir les joueurs informés directement depuis votre serveur FiveM. En connectant un compte Mastodon, les mises à jour du serveur, annonces et messages courts peuvent s’afficher en temps réel, sans que les joueurs aient besoin d’aller sur des plateformes externes.

Cette intégration crée un canal de communication clair entre le serveur et sa communauté, garantissant que les infos importantes restent toujours visibles en un seul endroit centralisé.

## Préparation

Avant de configurer le fil d’activité, un compte Mastodon est nécessaire. Ce compte servira à publier les mises à jour qui apparaîtront ensuite sur le serveur.

Si vous n’en avez pas encore, inscrivez-vous sur une instance [Mastodon](https://joinmastodon.org/) de votre choix. Après l’inscription, assurez-vous que le profil est accessible et prêt à publier des mises à jour, car ces posts seront affichés dans le fil d’activité.



## Configuration

Ouvrez votre profil Mastodon et copiez votre nom d’utilisateur complet.  
Le nom d’utilisateur suit généralement ce format :

```
username@instance.domain
```

Dans cet exemple, le nom d’utilisateur est `zaphosting@mstdn.instance`. Ensuite, ouvrez la section **Configs** de votre serveur FiveM et éditez le fichier `server.cfg`. Descendez tout en bas du fichier et ajoutez la ligne suivante :

```
sets activitypubFeed username
```

Remplacez `username` par votre propre nom d’utilisateur Mastodon.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Sauvegardez le fichier et redémarrez le serveur. Après le redémarrage, il peut falloir jusqu’à 20 minutes avant que le fil d’activité soit disponible. Une fois actif, un nouvel onglet **Feed** apparaîtra lors de l’ouverture du serveur, affichant les posts du compte Mastodon lié.



## Conclusion

Avec le fil d’activité configuré, les mises à jour et annonces du serveur s’affichent directement aux joueurs de manière claire et accessible. Cette configuration améliore la transparence, renforce l’interaction avec la communauté et offre un moyen efficace de partager des news sans dépendre de liens ou plateformes externes.



Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous accompagner ! 🙂