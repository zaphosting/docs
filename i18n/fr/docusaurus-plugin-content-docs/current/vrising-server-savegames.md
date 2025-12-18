---
id: vrising-server-savegames
title: "V Rising : Gérer les sauvegardes de V Rising"
description: "Découvrez comment gérer et sauvegarder vos parties de V Rising pour une expérience multijoueur sécurisée → En savoir plus maintenant"
sidebar_label: Gérer les sauvegardes
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans ce guide, on va voir comment gérer vos sauvegardes de V Rising sur votre serveur de jeux, y compris comment sauvegarder vos parties locales et celles sur le serveur, ainsi que comment les uploader sur votre serveur.

<InlineVoucher />

## Préparation

Pour accéder aux fichiers de votre serveur, vous aurez besoin d’un client FTP comme [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), tous deux open-source et gratuits.

Vous devrez vous connecter à votre serveur via un client FTP en utilisant les identifiants que vous trouverez sous **Outils->FTP-Browser** dans le panneau de contrôle de votre serveur de jeux. Pour plus d’aide, utilisez notre [guide Accès via FTP](gameserver-ftpaccess.md) pour vous connecter à votre serveur.

## Sauvegarder la partie

### Sauvegarde locale

Les sauvegardes locales sont celles que vous avez créées en hébergeant une partie multijoueur directement sur votre appareil. Elles se trouvent dans le dossier Windows LocalLow AppData, précisément ici :
```
../AppData/LocalLow/Stunlock Studios/VRising
```

:::tip
Vous pouvez accéder facilement à ce chemin en appuyant simultanément sur `CTRL` + `R` et en collant ce chemin dans la fenêtre d’exécution : `%userprofile%/appdata/locallow/Stunlock Studios/VRising`. Cliquez sur **OK** et vous serez directement dans le dossier.

![](https://screensaver01.zap-hosting.com/index.php/s/dz4ytiTai5jD2ep/preview)
:::

À cet emplacement, vous verrez un dossier `Saves` et/ou `CloudSaves` selon que vous avez utilisé la fonction Steam Cloud Saving et le type de serveur. En ouvrant ces dossiers, vous trouverez vos sauvegardes locales.

:::note
Selon la version du jeu, vos sauvegardes seront dans un dossier v1 ou v3.
:::

### Accéder aux sauvegardes via FTP

Sauvegarder votre partie depuis le serveur est simple. Une fois connecté à votre serveur de jeux via un client FTP, rendez-vous dans ce chemin :
```
../vrising/save-data/Saves
```

Vous devriez voir un dossier v1 et un dossier v3, selon la version du jeu. Dans chacun, vous trouverez vos sauvegardes. Faites un clic droit sur le dossier et utilisez le bouton **Télécharger** pour enregistrer la sauvegarde localement sur votre appareil.

![](https://screensaver01.zap-hosting.com/index.php/s/tZ4HngqLeHTkizz/preview)

### Sauvegarde automatique

On propose aussi une option pour sauvegarder automatiquement votre partie (et le fichier de config) directement via notre panneau de contrôle. Allez simplement dans la section **Outils->Sauvegardes** de votre interface web serveur. Vous pourrez configurer plusieurs options pour planifier des sauvegardes automatiques. On vous offre 10 Go de stockage gratuit pour vos sauvegardes. Pour plus d’infos, jetez un œil à notre guide dédié [Sauvegardes](gameserver-backups.md).

## Upload de la sauvegarde

Comme pour la sauvegarde, uploader votre partie est simple. Connectez-vous d’abord à votre serveur via un client FTP. Ensuite, allez dans ce chemin :
```
../vrising/save-data/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/RXd4aoxrA6QnP46/preview)

Selon la version de vos sauvegardes, glissez-déposez simplement vos fichiers dans le dossier correspondant via votre client FTP, ils seront uploadés sur votre serveur.

:::tip
Pensez à copier le nom du dossier de la sauvegarde que vous avez uploadée, vous en aurez besoin pour l’activer dans la section suivante.
:::

## Activation de la sauvegarde

Pour utiliser une sauvegarde spécifique, il faut modifier un fichier de configuration. Plusieurs méthodes existent, on va voir la plus simple via le panneau de contrôle. Si vous voulez d’autres méthodes, consultez notre guide [Configuration du serveur](vrising-configuration.md).

Allez dans la section **Paramètres** de l’interface web de votre serveur et trouvez le réglage **Savename**.

Changez cette valeur par le nom du dossier de la sauvegarde que vous avez uploadée. Une fois fait, sauvegardez en bas avec le bouton vert **Sauvegarder** puis redémarrez votre serveur.

<InlineVoucher />