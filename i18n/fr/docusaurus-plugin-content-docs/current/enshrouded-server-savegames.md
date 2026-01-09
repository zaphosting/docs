---
id: enshrouded-server-savegames
title: "Enshrouded : Gérer les sauvegardes d’Enshrouded"
description: "Découvrez comment gérer et sauvegarder vos parties Enshrouded pour un jeu multijoueur sécurisé → En savoir plus maintenant"
sidebar_label: Gérer les sauvegardes
services:
  - gameserver-enshrouded
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans ce guide, on va voir comment gérer vos sauvegardes Enshrouded sur votre serveur de jeux, y compris comment faire une sauvegarde de vos parties locales et serveur, ainsi que comment les uploader sur votre serveur.

<InlineVoucher />

## Préparation

Pour accéder aux fichiers de votre serveur, vous aurez besoin d’un client FTP comme [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), tous deux open-source et gratuits.

Vous devrez vous connecter à votre serveur via un client FTP en utilisant les identifiants que vous trouverez sous **Outils->FTP-Browser** dans le panneau de contrôle de votre serveur de jeux. Pour plus d’aide, utilisez notre [guide Accès via FTP](gameserver-ftpaccess.md) pour vous connecter à votre serveur.

## Sauvegarder la partie

### Sauvegarde locale

Les sauvegardes locales sont celles que vous créez en hébergeant une partie multijoueur directement sur votre appareil. Par défaut, Enshrouded utilise Steam Cloud pour sauvegarder automatiquement votre partie. Pour y accéder, il faut aller dans le dossier userdata de Steam pour récupérer les données du jeu. Suivez ce chemin :
```
../Steam/userdata/[votre_steamid]/1203620/remote
```

:::tip
Dans une installation classique, le dossier Steam se trouve sur votre disque système, à l’emplacement : `C://Program Files x86/Steam`. Sachez que ce chemin peut être différent si vous avez installé Steam ailleurs.
:::

Une fois dans ce dossier, vous verrez un fichier de personnages ainsi que toutes vos sauvegardes locales regroupées.

![](https://screensaver01.zap-hosting.com/index.php/s/dyydLNzQt7ZWRPx/preview)

:::note
Si vous **n’utilisez pas** Steam Cloud pour sauvegarder, vous trouverez votre dossier de sauvegarde ici : `C://Users/[votre_utilisateur]/Saved Games/Enshrouded`.
:::

### Accéder à la sauvegarde via FTP

Sauvegarder votre partie depuis le serveur est simple. Une fois connecté à votre serveur de jeux via un client FTP, rendez-vous à cet emplacement :
```
../enshrouded/savegame/
```

Vous devriez voir un fichier avec des caractères aléatoires, c’est votre sauvegarde. Faites un clic droit dessus et cliquez sur **Télécharger** pour la sauvegarder localement sur votre appareil.

![](https://screensaver01.zap-hosting.com/index.php/s/wTcodeKXYq3RBfY/preview)

### Sauvegarde automatique

On propose aussi une option pour sauvegarder automatiquement votre partie (et le fichier de config) directement via notre panneau de contrôle. Allez dans l’interface web de votre serveur de jeux, puis dans la section **Outils->Sauvegardes**. Là, vous pouvez configurer plusieurs options pour programmer des sauvegardes automatiques. Vous bénéficiez de 10 Go de stockage gratuit pour vos sauvegardes. Pour plus d’infos, consultez notre guide dédié aux [Sauvegardes](gameserver-backups.md).

## Upload de la sauvegarde

Comme pour la sauvegarde, uploader votre partie est simple. Assurez-vous d’être connecté à votre serveur via un client FTP. Ensuite, allez à ce chemin :
```
../enshrouded/savegame/
```

![](https://screensaver01.zap-hosting.com/index.php/s/gJW8wSapi4Bo2gw/preview)

Glissez-déposez simplement vos fichiers de sauvegarde dans ce dossier via votre client FTP, ils seront uploadés sur votre serveur.

## Activer la sauvegarde

Utiliser votre sauvegarde est super simple. Connectez-vous à votre serveur, et lors de l’écran de configuration du jeu, vous pourrez choisir la sauvegarde que vous voulez utiliser. Le nom de la sauvegarde, le niveau et la date de dernière utilisation s’afficheront sous chaque sauvegarde pour vous aider à choisir.

Vous avez réussi à ajouter une sauvegarde à votre serveur de jeux.

<InlineVoucher />