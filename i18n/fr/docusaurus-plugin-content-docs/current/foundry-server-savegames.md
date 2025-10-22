---
id: foundry-server-savegames
title: "Foundry : Gérer les sauvegardes Foundry"
description: "Découvrez comment sauvegarder et gérer en toute sécurité vos sauvegardes Foundry localement et sur votre serveur pour une continuité de jeu sans accroc → En savoir plus maintenant"
sidebar_label: Gérer les sauvegardes
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans ce guide, on va voir comment gérer vos sauvegardes Foundry sur votre serveur de jeux, y compris comment faire des sauvegardes locales et serveur, ainsi que comment les uploader sur votre serveur.

<InlineVoucher />

## Préparation

Pour accéder aux fichiers de votre serveur, vous aurez besoin d’un client FTP comme [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), tous deux open-source et gratuits.

Vous devrez vous connecter à votre serveur via un client FTP avec les identifiants que vous trouverez sous **Outils->FTP-Browser** dans le panneau de contrôle de votre serveur de jeux. Pour plus d’aide, utilisez notre [guide Accès via FTP](gameserver-ftpaccess.md) pour vous connecter à votre serveur.

## Sauvegarder la partie

### Sauvegarde locale

Les sauvegardes locales sont celles que vous créez en hébergeant une partie multijoueur directement sur votre appareil. Elles se trouvent dans le dossier Windows LocalLow AppData, précisément ici :
```
../AppData/LocalLow/Channel 3 Entertainment/Foundry/save
```

:::tip
Vous pouvez accéder facilement à ce chemin en appuyant simultanément sur `CTRL` + `R` et en collant ce chemin dans la fenêtre d’exécution : `%userprofile%/appdata/locallow/Channel 3 Entertainment/foundry/save`. Cliquez sur **OK** et vous serez directement redirigé vers le dossier.

![](https://screensaver01.zap-hosting.com/index.php/s/E6rniERFyc5AdS9/preview)
:::

Dans ce dossier, vous verrez toutes vos sauvegardes locales.

![](https://screensaver01.zap-hosting.com/index.php/s/LGPj2xZNGeCJpjt/preview)

### Accéder à la sauvegarde via FTP

Sauvegarder votre partie depuis le serveur est simple. Une fois connecté à votre serveur de jeux via un client FTP, rendez-vous dans ce dossier :
```
../foundry/saves/save
```

Vous devriez voir des dossiers, chacun correspondant à une sauvegarde. Faites un clic droit sur le dossier et cliquez sur **Télécharger** pour le sauvegarder localement sur votre appareil.

![](https://screensaver01.zap-hosting.com/index.php/s/X2f3Fo27GCyFe3m/preview)

### Sauvegarde automatique

On propose aussi une option pour sauvegarder automatiquement votre partie (et le fichier de config) directement via notre panneau de contrôle. Allez dans la section **Outils->Sauvegardes** de votre serveur de jeux. Vous pourrez configurer plusieurs options pour planifier des sauvegardes automatiques. On vous offre 10 Go de stockage gratuit pour vos sauvegardes. Pour plus d’infos, consultez notre guide dédié aux [Sauvegardes](gameserver-backups.md).

## Upload de la sauvegarde

Comme pour la sauvegarde, uploader votre partie est simple. Connectez-vous d’abord à votre serveur via un client FTP. Ensuite, allez dans ce dossier :
```
../foundry/saves/save
```

![](https://screensaver01.zap-hosting.com/index.php/s/CobaowD4JLPWte7/preview)

Glissez-déposez simplement vos sauvegardes dans ce dossier via votre client FTP, elles seront uploadées sur votre serveur.

:::tip
Pensez à copier le nom du dossier de la sauvegarde que vous avez uploadée, vous en aurez besoin pour l’activer dans la section suivante.
:::

## Activer la sauvegarde

Pour utiliser une sauvegarde spécifique, il faut modifier un fichier de configuration. Plusieurs méthodes existent, on va voir la plus simple via le panneau de contrôle. Si vous voulez d’autres méthodes, jetez un œil à notre [Configuration serveur](foundry-configuration.md).

Allez dans la section **Paramètres** du panneau de contrôle de votre serveur de jeux et trouvez le paramètre **Savename**.

Changez cette valeur par le nom du dossier de la sauvegarde que vous avez uploadée. Une fois fait, sauvegardez en bas avec le bouton vert **Sauvegarder** puis redémarrez votre serveur.

<InlineVoucher />