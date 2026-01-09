---
id: ark-savegame
title: ARK Survival Evolved Importer sa propre sauvegarde
description: "Découvrez comment restaurer votre serveur Ark: Survival Evolved en utilisant des sauvegardes officielles ou personnelles pour une continuité de jeu sans accroc → En savoir plus maintenant"
sidebar_label: Importer une sauvegarde
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu cherches à importer ta propre sauvegarde ou une sauvegarde officielle sur ton serveur Ark: Survival Evolved ? Ne cherche plus, ce guide t’explique toutes les étapes pour importer ta sauvegarde perso ou officielle sur ton nouveau serveur.

<YouTube videoId="lvIIVOhAUjo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/riyYaWCc4562mTS/preview" title="Comment obtenir un serveur ARK:SE avec des sauvegardes officielles" description="Tu préfères voir les choses en action pour mieux comprendre ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de manière fun et efficace !"/>

<InlineVoucher />

## Prépare ta sauvegarde

### Sauvegarde officielle

Tu dois d’abord télécharger ta sauvegarde officielle du serveur. Tu peux le faire directement depuis le [site officiel d’ARK](https://survivetheark.com/index.php?/server-backups/), ou utiliser [un outil créé par la communauté](https://arkutils.netlify.app/tools/officialdownload) pour trouver ton serveur plus facilement grâce à la fonction de recherche.

:::note
Si tu joues sur Xbox ou Playstation, tu ne pourras malheureusement pas télécharger les fichiers officiels du serveur. Les développeurs ont seulement autorisé les sauvegardes mondiales des plateformes Steam et Epic à être téléchargées librement.
:::

Il y a deux snapshots disponibles, le premier du 25 août 2023 et le second du 30 septembre 2023. Pour l’un ou l’autre, tu dois trouver ton serveur et télécharger ta sauvegarde.

:::note
L’utilisation de ta propre sauvegarde officielle est uniquement possible avec la variante de serveur de jeux **ARK - SE (compatible sauvegarde officielle)**. Si tu utilises une autre version pour ton serveur, tu peux changer la version dans la section **jeux** de l’interface web de ton serveur ou en suivant notre [guide Changement de jeu](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/Kwjyx4sDSHLTFZJ/preview)
:::



### Sauvegarde perso classique

Pour importer ta propre sauvegarde (non officielle), tous les fichiers de la sauvegarde sont nécessaires. Ils se trouvent généralement dans le dossier **SavedArks**, situé dans le répertoire **Shootergame/Saved**. Trouve ces fichiers et garde-les prêts pour l’import.

:::note
Pour ça, tu dois utiliser la variante classique **Ark: SE** (sans support de sauvegarde officielle) car tu importes une sauvegarde classique non officielle.

![](https://screensaver01.zap-hosting.com/index.php/s/FCMPjApJBjZxdR2/preview)
:::



## Upload de la sauvegarde sur le serveur

Une fois que tu as téléchargé ton fichier `.zip` de sauvegarde, il faut le décompresser avec un programme comme 7zip ou Winrar. Peu importe le type de serveur de jeux ou de sauvegarde, le processus d’upload est le même.

Tu dois maintenant accéder à ton serveur via FTP pour uploader tes fichiers de sauvegarde. Utilise notre [guide Accès via FTP](gameserver-ftpaccess.md) si tu as besoin d’aide pour te connecter avec ton client FTP préféré et transférer les fichiers.

Avec ton client FTP ouvert, rends-toi dans le sous-dossier suivant sur ton serveur de jeux :
```
/gxxxxx/ark/ShooterGame/Saved/SavedArks
```

![](https://screensaver01.zap-hosting.com/index.php/s/YXFcNPMgtbmRJJj/preview)

Supprime tous les fichiers de la sauvegarde actuelle (ou fais-en une sauvegarde avant si tu veux pouvoir rejouer dessus plus tard). Ensuite, glisse et dépose tous les fichiers extraits dans ce dossier (y compris les fichiers .ark, .arktribe et .arkprofile). Sois patient, ça peut prendre un peu de temps selon la taille de ta sauvegarde.

Une fois l’upload terminé, redémarre ton serveur et les fichiers fraîchement uploadés devraient être chargés. Tu as réussi à uploader une sauvegarde officielle sur ton serveur de jeux Ark: Survival Evolved.

<InlineVoucher />