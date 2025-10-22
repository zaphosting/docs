---
id: gameserver-backups
title: 'Serveur de jeux : Créer, télécharger et importer des sauvegardes'
description: "Découvrez comment créer et restaurer facilement des sauvegardes manuelles ou automatiques pour votre serveur de jeux afin de protéger vos données → En savoir plus maintenant"
sidebar_label: Sauvegardes
services:
  - gameserver
  - premium-storage
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Nous offrons la possibilité de créer des sauvegardes individuelles en un clic. Cela vous permet de créer des sauvegardes facilement et sans effort, ainsi que de les importer à tout moment par la suite. Cette fonctionnalité est disponible pour les fichiers de votre serveur de jeux ainsi que pour les bases de données associées. Toutes les sauvegardes sont stockées sur votre serveur de stockage, qui inclut par défaut 10 Go d’espace de stockage gratuit. Si vous avez besoin de plus, vous pouvez également passer au Premium Storage.

En plus de la création manuelle, les sauvegardes peuvent aussi être créées automatiquement. Elles peuvent être programmées quotidiennement ou hebdomadairement à une heure précise. Après la restauration d’une sauvegarde, le serveur retrouvera l’état qu’il avait au moment de la création de la sauvegarde.

<YouTube videoId="yUDAcfyDELc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/CTWHD2Lq4QqFWQw/preview" title="Comment créer des SAUVEGARDES pour votre serveur !" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus immersive !" />

<InlineVoucher />

## Créer des sauvegardes manuellement

Appuyez sur le bouton vert **+** à côté de la liste des sauvegardes pour créer une sauvegarde manuellement. Le processus de sauvegarde démarrera ensuite.

:::info
La création de la sauvegarde peut prendre quelques minutes selon la taille des fichiers de votre serveur !
:::

## Créer des sauvegardes automatiquement

En bas de la page, vous trouverez plus d’options, y compris les réglages pour les sauvegardes automatiques. L’option **Créer des sauvegardes automatiquement** doit être activée pour que cette fonctionnalité soit active. Ensuite, il faut définir l’intervalle.

![](https://screensaver01.zap-hosting.com/index.php/s/gB9n6JspdNW73bj/preview)

Selon le jeu, il est généralement aussi conseillé de sauvegarder la base de données, car des données importantes comme les scores, les permissions et bien plus y sont souvent stockées.

>⚠️ Avoir suffisamment d’espace de stockage est essentiel pour créer des sauvegardes régulières. Assurez-vous d’avoir toujours assez d’espace disponible.

## Télécharger/supprimer des sauvegardes

Si vous souhaitez télécharger ou supprimer des sauvegardes, vous devez vous connecter au serveur de stockage via FTP. Voici des instructions pour utiliser FTP : [Accès via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/tfJoBpaELEPKMij/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/q3E8XTX8gRQoasY/preview)

Là, vous pouvez consulter les identifiants utilisateur de votre serveur de stockage et l’espace de stockage utilisé actuellement. Une fois connecté via FTP, vous pouvez télécharger ou supprimer les sauvegardes directement.

<InlineVoucher />