---
id: vrising-plugins-bepinex
title: "V Rising : Installer des plugins sur le serveur (BepInEx)"
description: "Découvre comment améliorer ton expérience V Rising avec des mods BepInEx et personnaliser ton serveur → En savoir plus maintenant"
sidebar_label: Installer des plugins (BepInEx)
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guide archivé
Ce document a été archivé. Les documents sont archivés lorsqu’ils ne sont plus pertinents, incorrects ou à jour. Il a été archivé pour les raisons suivantes :

**Raison** : Le produit V Rising avec BepInEx n’est plus fonctionnel et a donc été retiré de la boutique. 
::::

## Introduction
BepInEx est un framework open-source très populaire pour les plugins et le modding, qui permet aux joueurs d’ajouter des mods à plusieurs jeux qui ne supportent pas officiellement le modding. Dans ce guide, on te montre comment installer des plugins via BepInEx sur V Rising.
<InlineVoucher />

## Version du jeu BepInEx

Pour utiliser des plugins compatibles **BepInEx** sur V Rising, tu dois d’abord installer la version du jeu **V Rising BepInEx** sur ton serveur. C’est super simple grâce à notre fonctionnalité de changement de jeu sur le serveur de jeux, découvre comment faire dans notre [guide Changement de jeu](gameserver-gameswitch.md).

## Upload des plugins

Commence par chercher des mods compatibles avec BepInEx que tu souhaites ajouter à ton serveur. Tu trouveras généralement les infos sur la compatibilité du plugin sur la page de téléchargement.

:::important
Les plugins doivent obligatoirement être compatibles **BepInEx**, sinon ils ne fonctionneront pas !
:::

Une fois que tu as ton mod prêt, connecte-toi à ton serveur de jeux via FTP. Consulte notre [guide Accès via FTP](gameserver-ftpaccess.md) pour savoir comment faire.

Avec ton client FTP prêt, rends-toi dans le dossier suivant :
```
../vrising/BepInEx/plugins
```

Dépose dans ce dossier les mods que tu as téléchargés. En général, ce sont des fichiers avec l’extension `.dll`. Dans cet exemple, on upload un mod framework utile pour créer des commandes.

:::note
Le serveur doit être arrêté avant d’ajouter ou modifier des mods, sinon les modifications risquent de ne pas être prises en compte.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9xkrPmPMp7YZYWQ/preview)

## Démarrage du serveur

Une fois les plugins uploadés, il te suffit de redémarrer ton serveur.

:::info
Certains plugins peuvent aussi nécessiter une installation côté client sur ton PC. Consulte les infos sur le site du plugin pour savoir si c’est nécessaire.
:::

Tu as réussi à installer de nouveaux plugins BepInEx sur ton serveur de jeux V Rising !

<InlineVoucher />