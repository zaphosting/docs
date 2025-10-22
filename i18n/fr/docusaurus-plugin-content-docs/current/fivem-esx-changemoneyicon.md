---
id: fivem-esx-changemoneyicon
title: "FiveM : Changer l’icône de l’argent"
description: "Découvre comment personnaliser l’icône de l’argent de ton serveur pour une expérience en jeu unique → En savoir plus maintenant"
sidebar_label: Changer l’icône de l’argent
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guide archivé
Ce document a été archivé. Les documents sont archivés s’ils ne sont plus pertinents, incorrects ou à jour. Il a été archivé pour les raisons suivantes :

**Raison** : La méthode présentée concerne une version ESX obsolète. Cette approche ne fonctionne pas avec la version actuelle d’ESX, car la structure a changé.
::::



<InlineVoucher />

## Connexion via FTP

D’abord, il faut configurer l’[accès via FTP](gameserver-ftpaccess.md).


Une fois configuré, tu peux te connecter et ouvrir le dossier du serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/pxEfN8qRjRJGWzN/preview)


Ici, on ouvre le fichier `server.cfg` dans le dossier `server-data`.

## Modifier la config

Maintenant, ajoute la ligne suivante au-dessus de `start essentialmode` :

```Lua
set es_moneyIcon "$"
```

Tu peux remplacer le $ par l’icône que tu veux.

![](https://screensaver01.zap-hosting.com/index.php/s/gYapTyixG98AQo5/preview)


Après avoir sauvegardé le fichier et redémarré le serveur, l’icône de l’argent sera modifiée en jeu.

<InlineVoucher />