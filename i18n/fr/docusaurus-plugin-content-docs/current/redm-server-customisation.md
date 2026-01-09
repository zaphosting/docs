---
id: redm-server-customisation
title: "RedM : Personnalise les détails du serveur"
description: "Découvre comment personnaliser le nom de ton serveur avec des couleurs et des emojis pour qu’il se démarque dans la liste des serveurs → En savoir plus maintenant"
sidebar_label: Personnaliser les détails du serveur
services:
  - gameserver-redm
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu veux personnaliser ton serveur pour afficher des infos custom dans la liste des serveurs ? C’est super simple ! Dans ce guide, tu vas apprendre à configurer plein de personnalisations différentes pour que ton serveur sorte du lot dans la liste !

<InlineVoucher />

## Nom de serveur personnalisé

### Codes Couleurs

Tu peux ajouter plein de couleurs différentes à ton nom de serveur. Pour ça, il suffit d’utiliser un préfixe spécial quand tu veux changer la couleur. La liste des couleurs dispo est dans le tableau juste en dessous.

:::info
Pour utiliser des couleurs dans le nom de ton serveur, tu dois avoir un [abonnement Cfx.re valide](https://portal.cfx.re/subscriptions) qui inclut cette fonctionnalité. Si tu l’as mais que ça marche toujours pas, vérifie que tu as bien configuré une [clé de licence perso](redm-licensekey.md).
:::

Maintenant, tu peux changer le nom de ton serveur via une des trois méthodes décrites dans la section d’accès à la configuration. Voici un exemple d’utilisation des couleurs et le rendu que ça donne :
```
sv_hostname "^2ZAP-Hosting ^0| ^4Serveur Communautaire Officiel ^0- ^1Événements à venir ^8bientôt^1 !"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

| Code | Couleur    | Code Hex |
| ---- | ---------- | -------- |
| ^0   | Blanc      | #F0F0F0  |
| ^1   | Rouge      | #F44336  |
| ^2   | Vert       | #4CAF50  |
| ^3   | Jaune      | #FFEB3B  |
| ^4   | Bleu       | #42A5F5  |
| ^5   | Bleu clair | #03A9F4  |
| ^6   | Violet     | #9C27B0  |
| ^7   | Blanc      | #F0F0F0  |
| ^8   | Orange     | #FF5722  |
| ^9   | Gris       | #9E9E9E  |

### Emojis

RedM te permet aussi de mettre des emojis directement dans le nom de ton serveur. Il suffit de placer les emojis que tu veux dans le paramètre `sv_hostname` dans la config de ton serveur, ça marche direct. Pas besoin d’abonnement Cfx.re pour ça.

## Configurer les détails du projet

### Description du serveur

Mettre une description serveur, c’est top pour donner un aperçu rapide et clair de ton serveur. Tu peux facilement définir une petite description de projet pour ton serveur de jeux RedM, qui s’affichera à côté du nom dans la liste des serveurs. Exemple de description et rendu :

```
sets sv_projectDesc "Rejoins notre Discord pour rester à jour sur les derniers événements ! discord.gg/zaphosting"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

### Tags du serveur

Mettre des tags serveur aide à préciser le style de ton serveur et permet aux joueurs de le trouver plus facilement en filtrant selon leurs préférences. Une fois les tags définis, ils seront visibles sur la page de ton serveur dans la liste et seront utilisés pour filtrer ton serveur. Exemple de tags et rendu :

```
sets tags "zap, zap-hosting, officiel, communauté, zap-communauté, serveur-communauté-zap"
```

![](https://screensaver01.zap-hosting.com/index.php/s/oS2Y3dbPZDFDJPj/preview)

### Autres détails divers

Tu peux aussi modifier quelques autres détails du serveur selon tes envies.

#### Type de jeu

Le paramètre gametype change ce qui s’affiche sur la page de ton serveur dans la liste. Ça ne modifie **pas** le mode de jeu sur le serveur lui-même. Tu peux changer le gametype via l’interface web de ton serveur de jeux, ou en définissant un tag :

```
sets gametype "Freeroam"
```

#### Langue

Enfin, tu peux changer la langue affichée sur la page de ton serveur dans la liste. On a un [guide Langue / localisation (drapeau)](redm-locale.md) pour configurer ça. Tu peux le faire via l’interface web de ton serveur de jeux, ou en définissant un tag :

```
sets locale "en-GB"
```

Tu peux trouver la liste complète des tags de localisation en regardant [cette ressource](https://github.com/TiagoDanin/Locale-Codes#locale-list) ou un truc similaire.

## Conclusion

Si tu as suivi toutes les étapes, ton serveur de jeux RedM est maintenant personnalisé à fond. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />