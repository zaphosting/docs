---
id: abioticfactor-server-savegames
title: "Abiotic Factor : Gérer les sauvegardes d’Abiotic Factor"
description: "Découvrez comment gérer et sauvegarder vos parties d’Abiotic Factor localement et sur votre serveur pour un gameplay sécurisé → En savoir plus maintenant"
sidebar_label: Gérer les sauvegardes
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans ce guide, on va voir comment gérer vos sauvegardes d’Abiotic Factor sur votre serveur de jeux, y compris comment faire des sauvegardes locales et serveur, ainsi que comment les uploader sur votre serveur.

<InlineVoucher />

## Préparation

Pour accéder aux fichiers de votre serveur, vous aurez besoin d’un client FTP comme [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), tous deux open-source et gratuits.

Vous devrez vous connecter à votre serveur via un client FTP en utilisant les identifiants que vous trouverez sous **Outils->FTP-Browser** dans le panneau de contrôle de votre serveur de jeux. Pour plus d’aide, consultez notre [Accès via FTP](gameserver-ftpaccess.md).

## Sauvegarder la partie

### Sauvegarde locale

Les sauvegardes locales sont celles que vous créez en hébergeant une partie multijoueur directement sur votre appareil. Elles se trouvent dans le dossier AppData local de Windows, précisément ici :
```
../AppData/Local/AbioticFactor/Saved/SaveGames/[votre_steamid]/Worlds
```

:::tip
Vous pouvez accéder facilement à ce chemin en appuyant simultanément sur `CTRL` + `R` et en collant ce chemin dans la fenêtre d’exécution : `%userprofile%/AppData/Local/AbioticFactor/Saved/SaveGames`. Cliquez sur **OK** et vous serez directement dans le dossier.

![](https://screensaver01.zap-hosting.com/index.php/s/zd7Zy5C6EH7BMHa/preview)
:::

Pensez bien à naviguer dans le dossier correspondant à votre Steam ID, puis dans le dossier `Worlds`. C’est là que toutes vos sauvegardes locales sont stockées.

### Accéder à la sauvegarde via FTP

Pour sauvegarder votre partie depuis le serveur, c’est simple. Une fois connecté à votre serveur de jeux via un client FTP, rendez-vous dans ce chemin :
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds
```

Vous y trouverez vos sauvegardes. Faites un clic droit sur le dossier et utilisez le bouton **Télécharger** pour enregistrer la sauvegarde localement sur votre appareil.

![](https://screensaver01.zap-hosting.com/index.php/s/RJSeBFpCdGamK7s/preview)

### Sauvegarde automatique

On propose aussi une option pour sauvegarder automatiquement votre partie (et le fichier de config) directement via notre panneau de contrôle. Allez dans la section **Outils->Sauvegardes** de votre interface serveur. Vous pourrez configurer plusieurs options pour planifier des sauvegardes automatiques. On vous offre 10 Go de stockage gratuit pour vos sauvegardes. Pour plus d’infos, jetez un œil à notre guide dédié [Sauvegardes](gameserver-backups.md).

## Uploader une sauvegarde

Comme pour la sauvegarde, uploader votre partie est simple. Connectez-vous d’abord à votre serveur via un client FTP. Ensuite, allez dans ce chemin :
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

:::note
Pour l’instant, les serveurs dédiés Abiotic Factor ne supportent pas le changement entre plusieurs sauvegardes, donc vous devez uploader le contenu de votre dossier de sauvegarde directement dans le dossier principal `world`.
:::

Ouvrez le dossier de la sauvegarde que vous voulez uploader. Glissez-déposez simplement tout le contenu à l’intérieur dans le dossier `world` sur le serveur. Ça uploadra votre sauvegarde sur le serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/wsT4MXpp2MFWLtQ/preview)

:::info
Si le dossier principal `world` est manquant, essayez d’arrêter puis de redémarrer le serveur. Si ça ne marche pas, utilisez le bouton **Revalider les fichiers Steam** dans le tableau de bord principal du serveur pour restaurer les fichiers par défaut.
:::

## Activer la sauvegarde

Contrairement à d’habitude où il faut modifier un fichier de config pour activer une sauvegarde, ici ce n’est pas nécessaire car les serveurs dédiés Abiotic Factor ne supportent pas encore le changement de sauvegarde.

Il suffit juste de redémarrer votre serveur et au prochain lancement, il chargera automatiquement la sauvegarde que vous avez uploadée dans le dossier principal `world`.

<InlineVoucher />