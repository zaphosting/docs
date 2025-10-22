---
id: satisfactory-savegame
title: "Satisfactory : Gérer les sauvegardes"
description: "Découvrez comment gérer et sauvegarder vos parties de Satisfactory localement et sur votre serveur pour un gameplay sécurisé → En savoir plus maintenant"
sidebar_label: Gestion des sauvegardes
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans ce guide, on va voir comment gérer vos sauvegardes de Satisfactory sur votre serveur de jeux, y compris comment faire des sauvegardes locales et serveur, ainsi que comment les uploader sur votre serveur.

<InlineVoucher />

## Préparation

Pour accéder aux fichiers de votre serveur, vous aurez besoin d’un client FTP comme [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), tous deux open-source et gratuits.

Vous devrez vous connecter à votre serveur via un client FTP en utilisant les identifiants disponibles sous **Outils->FTP-Browser** dans le panneau de contrôle de votre serveur de jeux. N’hésitez pas à consulter notre [guide Accès via FTP](gameserver-ftpaccess.md) pour plus d’aide à la connexion.

## Sauvegarder la partie

### Sauvegarde locale

Les sauvegardes locales sont celles que vous créez en jouant en solo ou en hébergeant une partie multijoueur localement sur votre machine. Elles se trouvent dans le dossier AppData de Windows, précisément ici :
```
../AppData/Local/FactoryGame/Saved/SaveGames
```

:::tip
Vous pouvez accéder facilement à ce chemin en appuyant simultanément sur `CTRL` + `R` et en collant ce chemin dans la fenêtre d’exécution : `%localappdata%/FactoryGame/Saved/SaveGames`. Cliquez sur **OK** et vous serez directement dans le dossier.

![](https://screensaver01.zap-hosting.com/index.php/s/pbXDwJWfEPtbAY3/preview)
:::

Dans ce dossier, vous verrez plusieurs dossiers contenant toutes vos sauvegardes locales regroupées.

![](https://screensaver01.zap-hosting.com/index.php/s/knB2RkXYGNR7J5M/preview)

### Accéder à la sauvegarde via FTP

Pour sauvegarder votre partie depuis le serveur, c’est simple. Une fois connecté à votre serveur de jeux via un client FTP, rendez-vous dans ce dossier :
```
../satisfactory/save-backups
```

Vous y trouverez un dossier avec une série de caractères aléatoires, c’est votre sauvegarde. Faites un clic droit dessus et choisissez **Télécharger** pour la sauvegarder localement sur votre machine.

![](https://screensaver01.zap-hosting.com/index.php/s/feHc74QHrzPwo24/preview)

### Sauvegarde automatique

On propose aussi une option pour sauvegarder automatiquement votre partie (et le fichier de config) directement via notre panneau de contrôle. Allez dans la section **Outils->Sauvegardes** de votre serveur de jeux. Vous pourrez configurer plusieurs options pour programmer des sauvegardes automatiques. Vous bénéficiez de 10 Go de stockage gratuit pour vos sauvegardes. Pour plus d’infos, consultez notre guide dédié aux [Sauvegardes](gameserver-backups.md).

## Uploader une sauvegarde

Comme pour la sauvegarde, uploader votre partie est simple. Connectez-vous à votre serveur via un client FTP, puis allez dans ce dossier :
```
../satisfactory/save-backups
```

![](https://screensaver01.zap-hosting.com/index.php/s/8WsKYjYzNk54A65/preview)

Glissez-déposez simplement votre sauvegarde dans ce dossier via votre client FTP, elle sera uploadée sur votre serveur.

:::tip
Pensez à copier le nom du dossier de la sauvegarde que vous avez uploadée, vous en aurez besoin pour l’activer dans la section suivante.
:::

## Activer une sauvegarde

Utiliser votre sauvegarde est super simple. Vous pouvez gérer ça via le Satisfactory Server Manager en jeu ou directement depuis le tableau de bord de votre serveur dans la section **Gestionnaire de sauvegardes**.

## Conclusion

Vous avez réussi à ajouter une sauvegarde sur votre serveur de jeux. Pour toute question ou aide, n’hésitez pas à contacter notre support, dispo tous les jours pour vous aider ! 🙂


<InlineVoucher />