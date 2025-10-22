---
id: soulmask-server-savegames
title: "Soulmask : Gérer les sauvegardes Soulmask"
description: "Découvrez comment gérer et sauvegarder vos parties Soulmask localement et sur votre serveur pour un gameplay sécurisé → En savoir plus maintenant"
sidebar_label: Gérer les sauvegardes
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans ce guide, on va voir comment gérer vos sauvegardes Soulmask sur votre serveur de jeux, y compris comment faire des sauvegardes locales et serveur, ainsi que comment les uploader sur votre serveur.

<InlineVoucher />

## Préparation

Pour accéder aux fichiers de votre serveur, vous aurez besoin d’un client FTP comme [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), tous deux open-source et gratuits.

Vous devrez vous connecter à votre serveur via un client FTP en utilisant les identifiants que vous trouverez sous **Outils->FTP-Browser** dans le panneau de contrôle de votre serveur de jeux. Pour plus d’aide, consultez notre [guide Accès via FTP](gameserver-ftpaccess.md) pour vous connecter à votre serveur.

## Sauvegarder la partie

### Sauvegarde locale

Les sauvegardes locales sont celles que vous créez en hébergeant une partie multijoueur directement sur votre appareil. Elles se trouvent dans le dossier AppData local de Windows, précisément ici :
```
../AppData/Local/WS/[votre_steamid]/AutoGames
```

:::tip
Vous pouvez accéder facilement à ce chemin en appuyant simultanément sur `CTRL` + `R` et en collant ce chemin dans la fenêtre d’exécution : `%userprofile%/appdata/local/WS/`. Cliquez sur **OK** puis ouvrez le dossier avec votre SteamID pour accéder au dossier AutoGames.

![](https://screensaver01.zap-hosting.com/index.php/s/FT4J9Jdi8d8LDxq/preview)
:::

À cet emplacement, vous verrez toutes vos sauvegardes locales. Chaque dossier porte le code d’invitation du serveur, ce qui facilite l’identification du monde correct.

### Accéder à la sauvegarde via FTP

Sauvegarder votre partie depuis le serveur est simple. Une fois connecté à votre serveur de jeux via un client FTP, rendez-vous à ce chemin :
```
../soulmask/WS/Saved/Worlds/Dedicated
```

Là, vous verrez le dossier principal `Level01_Main`, qui contient la sauvegarde du serveur dédié. Faites un clic droit sur ce dossier et utilisez le bouton **Télécharger** pour le sauvegarder localement sur votre appareil.

:::note
Pour l’instant, les serveurs dédiés Soulmask ne supportent qu’une seule sauvegarde à la fois, située dans le dossier principal `Level01_Main`.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Ywna6zc3BkCK6ES/preview)

### Sauvegarde automatique

On propose aussi une option pour sauvegarder automatiquement votre partie (et le fichier de config) directement via notre panneau de contrôle. Allez dans la section **Outils->Sauvegardes** de votre interface web serveur. Vous pouvez configurer plusieurs options pour programmer des sauvegardes automatiques. Vous bénéficiez de 10 Go de stockage gratuit pour vos sauvegardes. Pour plus d’infos, jetez un œil à notre guide dédié [Sauvegardes](gameserver-backups.md).

## Upload de la sauvegarde

Comme pour la sauvegarde, uploader votre partie est simple. Assurez-vous d’abord de vous connecter à votre serveur via un client FTP et d’arrêter votre serveur.

:::note
Pour l’instant, les serveurs dédiés Soulmask ne supportent qu’une seule sauvegarde à la fois, située dans le dossier principal `Level01_Main`.
:::

Ensuite, rendez-vous ici :
```
../soulmask/WS/Saved/Worlds/Dedicated/Level01_Main
```

![](https://screensaver01.zap-hosting.com/index.php/s/iWKPKw5Grg4JgPi/preview)

Glissez-déposez le fichier **world.db** de la sauvegarde que vous voulez uploader et remplacez le fichier existant. Pensez à télécharger le fichier actuel du serveur si vous voulez le garder, sinon il sera perdu lors du remplacement.

Vous pouvez aussi uploader votre fichier de paramètres de jeu, en allant ici :
```
../soulmask/WS/Saved/GameplaySettings
```

![](https://screensaver01.zap-hosting.com/index.php/s/yqXF9EaDCin5rzT/preview)

Glissez-déposez le fichier **GameXishu.json** de la sauvegarde que vous voulez uploader et remplacez le fichier existant. Encore une fois, téléchargez le fichier actuel si vous voulez le garder avant de le remplacer.

:::tip
Si le fichier de sauvegarde a un nom légèrement différent pour **GameXishu.json**, par exemple `GameXishu_2.json`, renommez-le en `GameXishu.json` pour qu’il soit reconnu par le serveur dédié.
:::

Il ne vous reste plus qu’à redémarrer le serveur, et votre sauvegarde devrait se charger correctement.

<InlineVoucher />