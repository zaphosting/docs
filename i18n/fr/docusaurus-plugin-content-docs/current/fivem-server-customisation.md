---
id: fivem-server-customisation
title: "FiveM : Personnalise les détails du serveur"
description: "Découvre comment personnaliser le nom de ton serveur avec des couleurs et des emojis pour qu’il se démarque dans la liste des serveurs → En savoir plus maintenant"
sidebar_label: Personnaliser les détails du serveur
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu veux personnaliser ton serveur pour afficher des infos custom dans la liste des serveurs ? C’est super simple ! Dans ce guide, tu vas apprendre à configurer plein de personnalisations dispo pour faire ressortir ton serveur dans la liste !

<InlineVoucher />

## Nom de serveur personnalisé

### Codes Couleurs

Tu peux ajouter plein de couleurs différentes à ton nom de serveur. Pour ça, il suffit d’utiliser un préfixe spécial pour changer la couleur. La liste des couleurs dispo est dans le tableau juste en dessous.

:::info
Pour utiliser des couleurs dans le nom de ton serveur, tu dois avoir un [abonnement Cfx.re valide](https://portal.cfx.re/subscriptions) qui inclut cet avantage. Si tu l’as mais que ça marche toujours pas, vérifie que tu as bien configuré une [clé de licence perso](fivem-licensekey.md).
:::

Maintenant, tu peux changer le nom de ton serveur en ouvrant l’éditeur CFG dans txAdmin, en cherchant `sv_hostname` et en le personnalisant comme tu veux. Voici un exemple avec des couleurs et le rendu final :
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

FiveM te permet aussi de mettre des emojis directement dans le nom de ton serveur. Il suffit de placer les emojis que tu veux dans le paramètre `sv_hostname` dans la config de ton serveur, ça marche direct. Pas besoin d’abonnement Cfx.re pour ça.

## Configurer les détails du projet

### Description du serveur

Mettre une description serveur, c’est top pour donner un aperçu rapide et clair de ton serveur. Tu peux facilement définir une petite description de projet pour ton serveur de jeux FiveM, qui s’affichera à côté du nom de ton serveur dans la liste. Exemple de description et rendu :

```
sets sv_projectDesc "Rejoins notre Discord pour rester à jour sur les derniers événements ! discord.gg/zaphosting"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

### Tags du serveur

Mettre des tags serveur, c’est super utile pour préciser ce que ton serveur propose, et ça aide les joueurs à le trouver en filtrant selon leurs préférences. Une fois que tu as mis des tags, ils seront visibles sur la page de ton serveur dans la liste et serviront aussi au filtrage. Exemple de tags et rendu :

```
sets tags "zap, zap-hosting, officiel, communauté, zap-communauté, serveur-zap-communauté"
```

![](https://screensaver01.zap-hosting.com/index.php/s/oS2Y3dbPZDFDJPj/preview)

### Autres détails divers

Tu peux aussi modifier quelques autres détails du serveur selon tes envies.

#### Type de jeu

Le paramètre gametype change ce qui s’affiche sur la page de ton serveur dans la liste. Ça ne modifie **pas** le mode de jeu sur le serveur lui-même. Tu peux changer le gametype via l’interface web de ton serveur de jeux, ou en mettant un tag :

```
sets gametype "Freeroam"
```

#### Langue

Enfin, tu peux changer la langue affichée de ton serveur dans la liste. On a un [guide Langue / localisation (drapeau)](fivem-locale.md) pour configurer ça. Tu peux le faire via l’interface web de ton serveur de jeux, ou en mettant un tag :

```
sets locale "en-GB"
```

Tu peux trouver la liste complète des tags de locale en regardant [cette ressource](https://github.com/TiagoDanin/Locale-Codes#locale-list) ou un truc similaire.

## Conclusion

Si tu as suivi toutes les étapes, ton serveur de jeux FiveM est maintenant personnalisé à fond. Si tu as des questions ou besoin d’aide, n’hésite surtout pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />