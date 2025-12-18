---
id: fivem-esx-disableinventory
title: "FiveM : Désactiver l'inventaire (F2)"
description: "Découvrez comment désactiver l'inventaire par défaut dans ESX pour personnaliser l'expérience de votre serveur → En savoir plus maintenant"
sidebar_label: Désactiver l'inventaire (F2)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guide archivé
Ce document a été archivé. Les documents sont archivés lorsqu'ils ne sont plus pertinents, incorrects ou à jour. Il a été archivé pour les raisons suivantes :

**Raison** : La méthode décrite concerne une version obsolète d'ESX. Cette approche ne peut pas être utilisée pour la version actuelle d'ESX, car la structure a changé. 
::::

<InlineVoucher />

## Connexion au FTP

Avant de pouvoir désactiver l'inventaire, l'[accès via FTP](gameserver-ftpaccess.md) doit être configuré.

Une fois cette étape réalisée, vous pouvez vous connecter et ouvrir le dossier du serveur :

![](https://screensaver01.zap-hosting.com/index.php/s/GWPAB639GoYcybT/preview)


## Effectuer les modifications

Maintenant, ouvrez le chemin `server-data/resources/[esx]`, vous y trouverez un dossier es_extended :

![](https://screensaver01.zap-hosting.com/index.php/s/6HLxaYmZgsQ5Qc5/preview)

Dans ce dossier, ouvrez le fichier `config.lua`.

Après avoir ouvert ce fichier dans un éditeur de texte, cherchez le code suivant :

```Lua
Config.EnableDefaultInventory   = true -- Afficher l'inventaire par défaut ( F2 )
```

Remplacez-le par :

```Lua
Config.EnableDefaultInventory   = false
```


Vous pouvez maintenant sauvegarder le fichier et redémarrer le serveur. Une fois connecté au serveur, l'inventaire ne pourra plus être ouvert.

<InlineVoucher />