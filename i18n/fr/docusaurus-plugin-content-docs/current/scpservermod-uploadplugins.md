---
id: scpservermod-uploadplugins
title: "SCP Secret Laboratory : Installer des plugins sur le serveur"
description: "Découvrez comment installer et configurer les plugins SMOD pour votre serveur SCP afin d'améliorer le gameplay et les fonctionnalités du serveur → En savoir plus maintenant"
sidebar_label: Installer des Plugins
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guide Archivé
Ce document a été archivé. Les documents sont archivés lorsqu'ils ne sont plus pertinents, incorrects ou à jour. Il a été archivé pour les raisons suivantes :

Raison : L'extension Servermod pour SCP a été abandonnée et ne sera donc plus maintenue. Nous recommandons de passer à **[SCP:EXILED](exiled-plugins.md)** à la place. 
::::

<InlineVoucher />

## Connexion au FTP

Avant de pouvoir installer des plugins, l’[accès via FTP](gameserver-ftpaccess.md) doit être configuré.

Une fois cela configuré, vous pouvez vous connecter et ouvrir le dossier serveur suivant.  
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/2Fid5MKq57YDCNj/preview)

## Installation des Plugins

### Trouver des Plugins

Tout d’abord, vous devrez localiser des plugins compatibles SMOD disponibles.

Le meilleur endroit pour les obtenir est directement sur leur [Discord](https://discord.gg/T9aurNf)

:::info
Ce n’est qu’un endroit où vous pouvez les trouver. Ils peuvent aussi être disponibles ailleurs. Il est important de vérifier qu’ils sont compatibles avec votre version de SMOD. 
:::

Dans cet exemple, nous allons prendre le plugin suivant :

![](https://screensaver01.zap-hosting.com/index.php/s/bEEQP3cm33fgMFi/preview)

### Upload des Plugins

Une fois que vous avez téléchargé les plugins souhaités, vous devez les uploader sur le FTP de votre serveur. Vous pouvez les uploader via **glisser-déposer** dans le dossier **sm_plugins.**

![](https://screensaver01.zap-hosting.com/index.php/s/HzRKJXFyENqK4N8/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/kSSMs23E6g4PfwN/preview)

:::info
Note : Après chaque installation de plugin, vous devrez **redémarrer votre serveur** pour que les changements **prennent effet.**
:::

### Configuration des Plugins

Selon le plugin, il peut y avoir différentes configurations à ajouter dans votre fichier config_gameplay.txt.

Dans notre exemple de plugin, les configurations suivantes sont définies.

![](https://screensaver01.zap-hosting.com/index.php/s/5PrLzeCQaFamGRn/preview)

Pour les ajouter, nous allons éditer le fichier config_gameplay.txt.

Vous pouvez le trouver via l’onglet **Configs** à gauche.

![](https://screensaver01.zap-hosting.com/index.php/s/mMck39x2mEnLtLY/preview)

Puis nous trouvons le fichier **config_gameplay.txt**

![](https://screensaver01.zap-hosting.com/index.php/s/SGLpBYM5DAWRRzN/preview)

:::info
Les configurations peuvent en réalité être écrites n’importe où. Pour une bonne pratique, nous les placerons sous la section '#Misc gameplay settings' dans le fichier config_gameplay.txt.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/JMK542jpCj472ag/preview)

:::info
NOTE : Selon le plugin, vos configurations seront différentes. Assurez-vous toujours de lire les instructions fournies avec le plugin pour ajouter les configs correctement.
:::

Une fois les configurations définies, vous redémarrez votre serveur (ou le démarrez) puis vérifiez directement en jeu !  

<InlineVoucher />