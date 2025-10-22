---
id: valheim-plugins-bepinex
title: "Valheim : Installer des plugins sur serveur (BepInEx)"
description: "Découvre comment améliorer ton expérience Valheim avec les plugins BepInEx et débloque de nouvelles possibilités de modding → En savoir plus maintenant"
sidebar_label: Installer des plugins (BepInEx)
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/valheim-plugins.json';

## Introduction
BepInEx est un framework open-source ultra populaire pour plugins et mods qui permet aux joueurs d’ajouter des mods à plusieurs jeux qui ne supportent pas officiellement le modding. Dans ce guide, on te montre comment installer des plugins via BepInEx sur Valheim.

<InlineVoucher />

## Version du jeu BepInEx

Pour utiliser des plugins compatibles **BepInEx** sur Valheim, tu dois d’abord installer la version **Valheim Plus** sur ton serveur. On propose aussi une version standalone **Valheim BepInEx**, mais on recommande Valheim Plus car elle inclut tout ce qu’il faut. C’est super simple à faire avec notre fonctionnalité de changement de jeu sur le serveur, découvre comment dans notre [guide Changement de jeu](gameserver-gameswitch.md).

:::info
Valheim Plus doit aussi être installé localement sur ton PC. Tu peux télécharger Valheim Plus ici : [Téléchargement Valheim Plus](https://www.nexusmods.com/valheim/mods/4).
:::

## Upload des plugins

Commence par chercher des mods compatibles BepInEx que tu veux ajouter à ton serveur. En général, tu trouveras les infos de compatibilité sur la page de téléchargement du plugin.

:::important
Les plugins doivent obligatoirement être compatibles **BepInEx**, sinon ils ne fonctionneront pas !
:::

Une fois ton mod prêt, connecte-toi à ton serveur de jeux via FTP. Consulte notre [Accès via FTP](gameserver-ftpaccess.md) pour savoir comment faire.

Avec ton client FTP prêt, rends-toi dans ce dossier :
```
../valheim-linux-plus/BepInEx/plugins
```

Dépose dans ce dossier les mods que tu as téléchargés. En général, ce sont des fichiers avec l’extension `.dll`.

:::note
Le serveur doit être arrêté avant d’ajouter ou modifier des mods, sinon les modifications risquent de ne pas être prises en compte.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/d8gTeFiGXTsxHwz/preview)

## Démarrage du serveur

Une fois les plugins uploadés, il ne te reste plus qu’à redémarrer ton serveur.

:::info
Certains plugins peuvent aussi nécessiter une installation côté client sur ton PC. Consulte les infos sur le site du plugin pour savoir si c’est nécessaire.
:::

Tu as réussi à installer de nouveaux plugins BepInEx sur ton serveur de jeux Valheim !

## Plugins populaires

Tu cherches encore les plugins parfaits pour ton serveur ?

Parcours notre liste soigneusement sélectionnée des plugins les plus populaires et recommandés pour booster ton gameplay et donner à ton serveur la touche finale qu’il mérite. Inspire-toi et trouve exactement les ajouts qui collent à ton projet.

<SearchableItemList items={items} />

<InlineVoucher />