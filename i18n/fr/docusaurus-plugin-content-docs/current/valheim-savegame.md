---
id: valheim-savegame
title: "Valheim : Gérer les sauvegardes sur les serveurs"
description: "Découvrez comment gérer, télécharger et restaurer efficacement vos sauvegardes Valheim avec le Savegame-Manager → En savoir plus maintenant"
sidebar_label: Gérer les sauvegardes
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Télécharger les sauvegardes

:::info
Note : Avant de télécharger la sauvegarde, vous devez arrêter le serveur pour enregistrer la sauvegarde active. Après avoir arrêté le serveur, la sauvegarde apparaîtra après avoir rechargé la page une fois.
:::

Pour télécharger votre sauvegarde, vous pouvez utiliser le `Savegame-Manager` dans l’interface web :

![](https://screensaver01.zap-hosting.com/index.php/s/FryL7EXmEYBFBXD/preview)

Ici, vous pouvez facilement télécharger votre sauvegarde en cliquant sur le bouton vert "Download" :

![](https://screensaver01.zap-hosting.com/index.php/s/2o2gnQ3GKpwc22w/preview)

:::info
Notez que vous devez télécharger à la fois les fichiers `.db` **et** `.fwl`.
:::

C’est fait ! Vous pouvez maintenant utiliser la sauvegarde pour d’autres usages, ou la réuploader plus tard.

## Upload & Activation de la sauvegarde

Pour uploader vos propres sauvegardes, ouvrez d’abord votre savegame manager.

Ici, vous pouvez maintenant uploader votre sauvegarde par glisser-déposer, ça devrait ressembler à ça ensuite :

![](https://screensaver01.zap-hosting.com/index.php/s/H2RJSyMGeiojfxD/preview)

:::info
Notez que votre sauvegarde doit avoir le même nom que celui créé par le jeu.
:::

Dans notre cas, les fichiers de sauvegarde s’appellent `380622.fwl` et `380622.db`.

Maintenant, entrez le nom de la sauvegarde ci-dessus sous `Savegame (worlds)` :

![](https://screensaver01.zap-hosting.com/index.php/s/Ggrys4xKjDm7inz/preview)

Sous `ZAP Backups`, cherchez votre sauvegarde :

![](https://screensaver01.zap-hosting.com/index.php/s/beRMYmE4CicDNsz/preview)

Il ne reste plus qu’à cliquer sur le bouton jaune "Restore" pour les deux fichiers et confirmer, votre sauvegarde sera alors chargée.

Une fois chargée, un message apparaît en bas à droite :

![](https://screensaver01.zap-hosting.com/index.php/s/Zs9F4rNRen4QMcs/preview)

Vous pouvez maintenant démarrer le serveur, la sauvegarde uploadée sera active sur le serveur.



## Sauvegardes automatiques

Malheureusement, Valheim ne supporte pas encore les sauvegardes automatiques. Pour sauvegarder votre progression, le serveur doit être arrêté. Le Planificateur de Redémarrage dans l’interface web peut être utilisé pour redémarrer automatiquement votre serveur à des horaires précis :

![](https://screensaver01.zap-hosting.com/index.php/s/gTp5yJDQyHKX7eF/preview)

Ici, vous pouvez simplement ajouter une heure pour un redémarrage quotidien ou hebdomadaire :

![](https://screensaver01.zap-hosting.com/index.php/s/nyqbMzjNL78qz9K/preview)

Une fois le redémarrage sauvegardé, vous pouvez aussi ajouter plusieurs redémarrages quotidiens ou hebdomadaires.

![](https://screensaver01.zap-hosting.com/index.php/s/BddatyGLAZZWnCA/preview)

C’est tout ! Votre serveur redémarrera maintenant à ces horaires précis, la sauvegarde sera enregistrée pendant ces redémarrages.

<InlineVoucher />