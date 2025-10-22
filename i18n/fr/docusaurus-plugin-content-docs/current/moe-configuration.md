---
id: moe-configuration
title: "Myth of Empires : Configuration du Serveur"
description: "Découvrez comment personnaliser votre serveur Myth of Empires pour un gameplay optimal et un contrôle total → En savoir plus maintenant"
sidebar_label: Configuration du Serveur
services:
  - gameserver-moe
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Myth of Empires propose une large gamme d’options de configuration qui vous permettent de personnaliser votre serveur à votre goût. Dans ce guide, nous allons explorer certains des paramètres de configuration disponibles et expliquer chacun en détail.

<YouTube videoId="a-tZnWIpOSg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/GozxMwycZ43y4sm/preview" title="Configurez votre serveur Myth Of Empires en seulement UNE MINUTE !" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus fun et immersive !" />

<InlineVoucher />

## Accéder à votre Fichier de Configuration

Tout d’abord, vous devez accéder à votre fichier de configuration pour pouvoir modifier les paramètres. Il existe plusieurs façons d’éditer ce fichier.

:::tip
On vous recommande vivement d’utiliser la méthode **Webinterface** car MOE possède beaucoup d’options et de fichiers de configuration, ce qui rendra la configuration bien plus rapide que d’éditer directement les valeurs dans les fichiers.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

La méthode la plus simple est de vous rendre dans la section **Paramètres** du panneau de contrôle de votre serveur de jeux et de chercher les réglages appropriés, comme montré ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Vous pourrez voir une grande variété de sections et de paramètres où vous pouvez modifier directement les valeurs.

</TabItem>

<TabItem value="configs" label="Via fichier de config WI">

#### Via fichier de config WI

:::note
Le serveur doit être arrêté avant de pouvoir modifier la config, sinon les changements seront annulés au redémarrage.
:::

Sinon, pour les utilisateurs qui préfèrent éditer directement les fichiers de configuration bruts, vous pouvez y accéder via la section **Configs** du panneau de contrôle de votre serveur de jeux. Pour modifier un fichier de configuration, cliquez simplement sur le bouton bleu d’édition, comme ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/ke6TF9RooBGqawW/preview)

Cela ouvrira un éditeur de texte directement sur le site pour que vous puissiez modifier le fichier.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Le serveur doit être arrêté avant de pouvoir modifier la config, sinon les changements seront annulés au redémarrage.
:::

La dernière méthode pour accéder au fichier brut est via FTP. Si vous ne connaissez pas FTP, on vous conseille de jeter un œil au [guide d’accès via FTP](gameserver-ftpaccess.md). Cependant, cette méthode est plus longue et si vous souhaitez modifier directement le contenu du fichier, on vous recommande d’utiliser simplement la section **Paramètres** du panneau de contrôle de votre serveur de jeux comme expliqué plus haut.

</TabItem>
</Tabs>

## Options de Configuration du Serveur

Voici une sélection des options de configuration principales et importantes que vous voudrez probablement modifier, incluant quelques réglages internes.

:::tip
On ne recommande pas de modifier les paramètres de Port, IP ou Répertoire, car ils sont configurés automatiquement par le serveur de jeux. Modifier ces valeurs peut potentiellement casser votre serveur !
:::

| Nom du Paramètre | Exemple                               | Description                                               |
| ---------------- | ----------------------------------- | --------------------------------------------------------- | 
| name             | ZAP-Hosting Docs Test                | Le nom de votre serveur                                   |
| password         | iLoveZAP!2024                       | Protégez votre serveur avec un mot de passe (privé)      |
| description      | This is a cool server!               | Ajoutez une description pour votre serveur               |
| gamemode         | PVE / PVP                          | Définissez le mode de jeu de votre serveur                |
| mapname          | Central Island                      | Choisissez la carte de votre serveur                      |
| difficulty       | 1                                   | Difficulté de votre monde                                 |

Une fois vos modifications terminées, pensez à sauvegarder le fichier et à redémarrer votre serveur. Au prochain démarrage, votre serveur utilisera les paramètres que vous avez définis.

<InlineVoucher />