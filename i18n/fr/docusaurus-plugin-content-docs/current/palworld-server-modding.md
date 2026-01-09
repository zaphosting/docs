---
id: palworld-server-modding
title: "Palworld : Installer des Mods pour Palworld"
description: "Découvrez comment améliorer votre expérience Palworld avec des mods pour serveurs et clients, de manière sûre et efficace → En savoir plus maintenant"
sidebar_label: Installer des Mods
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Depuis la sortie de Palworld, de nouveaux mods passionnants ont commencé à apparaître en ligne pour améliorer l’expérience de jeu et rendre le jeu encore plus fun. Dans ce guide, nous allons explorer le processus d’ajout de modifications de jeu (mods) à votre serveur de jeux Palworld et/ou à votre client de jeu.

<YouTube videoId="x4tfL3Vi5qE" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5LynAssgfXj6qgr/preview" title="Comment Installer des Mods sur Votre Serveur Palworld !" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus immersive !"/>

<InlineVoucher />

### Infos Clés

À l’heure actuelle, vous pouvez consulter et télécharger les mods disponibles via des sites tiers spécialisés dans le modding. On recommande des sites comme [Nexus Mods](https://www.nexusmods.com/palworld/) ou [Curseforge](https://www.curseforge.com/palworld/) qui sont réputés dans le milieu du modding. Vous ne pouvez pas télécharger de mods via Steam Workshop pour le moment.

:::note
ZAP-Hosting ne peut être tenu responsable des modifications ou dommages potentiels causés à vos fichiers serveur ou monde en installant des mods. On vous conseille fortement de faire des sauvegardes avant de continuer. Pour en savoir plus sur les sauvegardes, consultez notre guide dédié [Gérer les Savegames](palworld-server-savegames.md) qui détaille tout ça.
:::

:::info
Nous supportons actuellement uniquement les mods PAK (.PAK files). Vous ne pourrez pas utiliser de mods nécessitant un fichier exécutable pour des raisons de sécurité.
:::



### Mods côté Serveur & côté Client

Quand vous choisissez des mods, vous devez d’abord déterminer s’ils sont côté serveur ou côté client. Le plus simple est de vérifier la description du mod sur le site ou de contacter directement l’auteur du mod.

Les scripts côté serveur s’installent directement sur le serveur et ne demandent aucune action aux joueurs. En revanche, les mods côté client nécessitent que chaque utilisateur qui veut se connecter télécharge et installe le mod localement dans ses fichiers de jeu.

:::info
Vous devez vérifier que le mod que vous souhaitez utiliser est compatible avec la version actuelle du build de Palworld.
:::



## Étape 1 : Préparer le fichier PAK

En vous rendant sur des sites de modding, comme ceux suggérés dans l’intro, vous pourrez parcourir et télécharger une large sélection de mods différents.

:::info
Rappel : Nous supportons uniquement les mods PAK (.PAK files) pour des raisons de sécurité.
:::

Allez sur le mod que vous souhaitez utiliser, et téléchargez-le localement sur votre appareil. Si besoin, décompressez les fichiers avec un outil comme [7zip](https://www.7-zip.org/) pour extraire le fichier **.pak**.

![](https://screensaver01.zap-hosting.com/index.php/s/EA4NBWkQAZQoqfi/preview)



## Étape 2 : Upload via FTP

Une fois que vous avez les fichiers PAK prêts à être uploadés, rendez-vous dans la section **Outils->FTP-Browser** de l’interface web de votre serveur de jeux.

Vous aurez besoin d’un client FTP pour vous connecter à votre serveur. Utilisez notre guide dédié [Accès via FTP](gameserver-ftpaccess.md) si vous n’avez pas encore de client FTP ou si vous avez besoin d’aide pour la connexion FTP.

Dans votre interface web, vous pouvez utiliser le bouton **Connexion Directe**. Cela devrait ouvrir automatiquement le programme FTP de votre choix et vous connecter.

Sinon, utilisez les identifiants fournis sur la page FTP-Browser pour les saisir manuellement dans votre client FTP et vous connecter.

![](https://screensaver01.zap-hosting.com/index.php/s/nWYPNMRbnrDbDLF/preview)

Ensuite, vous devrez uploader les fichiers PAK du mod que vous avez préparé. Vous devez les placer dans le répertoire suivant :
```
../g[votre_zapid]/palworld-windows/Pal/Content/Paks/ # Pour la version Windows
../g[votre_zapid]/palworld-linux/Pal/Content/Paks/ # Pour la version Linux
```

![](https://screensaver01.zap-hosting.com/index.php/s/87wqpW65SibyLGz/preview)

Et voilà pour le côté serveur ! Maintenant, passons au côté client.



## Étape 3 : Installer les mods côté Client

Maintenant que tous nos mods sont installés sur le serveur, il faut s’assurer que chaque client qui veut rejoindre le serveur fasse pareil. Ils devront répéter ce processus. Actuellement, il n’y a pas de moyen pour un client de récupérer automatiquement les mods et les télécharger en rejoignant.

Commencez par ouvrir Steam, faites un clic droit sur Palworld, sélectionnez gérer puis parcourir les fichiers locaux.

![](https://screensaver01.zap-hosting.com/index.php/s/zf8iSjsJNit9sqB/preview)

Un dossier s’ouvrira avec l’installation locale de Palworld sur votre appareil.

![](https://screensaver01.zap-hosting.com/index.php/s/GwSzNffxDJaJCrX/preview)

Ensuite, naviguez vers le répertoire suivant : 
```
../Palworld/Pal/Content/Paks/
```

Déplacez les fichiers **.pak** des mods dans ce dossier. Répétez pour chaque mod supplémentaire que vous avez ajouté.

![](https://screensaver01.zap-hosting.com/index.php/s/ZmAtezELEbNCwc4/preview)



## Étape 4 : Lancez Palworld & Connectez-vous au serveur

Vous pouvez maintenant vous connecter à votre serveur de jeux Palworld et profiter de l’expérience avec plein de nouveaux mods. Utilisez notre guide dédié [Se Connecter au Serveur](palworld-connect.md) si vous avez besoin d’aide pour la connexion.

Une fois dans le jeu, vous devriez voir les différences apportées par les mods.

Par exemple, nous utilisons un mod de blocs Minecraft sur notre serveur de test :

![](https://screensaver01.zap-hosting.com/index.php/s/dxytjjrwaqLtiik/preview)

Vous avez réussi à installer des mods sur votre serveur Palworld. Si vous rencontrez des problèmes avec le modding, consultez la section dépannage ci-dessous.



## Dépannage

Dans cette section dépannage, on vous donne quelques raisons courantes de problèmes ainsi que des étapes pour vous aider à cibler la source du souci. Gardez en tête que le modding est encore en phase early-access et n’est pas officiel, donc des bugs peuvent survenir.

#### Vérifiez la version compatible du mod

Assurez-vous que les mods installés sont compatibles avec la version actuelle du build de Palworld. Sinon, vous risquez d’avoir des erreurs et certaines fonctionnalités des mods peuvent ne pas fonctionner. Contactez l’auteur du mod pour demander une mise à jour si le mod est obsolète.

#### Redémarrez le serveur

Pensez à redémarrer le serveur après chaque modification ou si vous ne voyez pas les mods. On vous conseille aussi de consulter l’auteur du mod en cas d’erreurs ou bugs spécifiques.

#### Cherchez les erreurs dans les logs

Une première piste est de vérifier la section **Informations->Fichiers Logs** dans l’interface web de votre serveur de jeux. Ces fichiers contiennent plein d’infos sur le serveur, comme les événements en cours, des indices ou des messages d’erreur.

Les messages d’erreur en particulier peuvent aider à identifier et comprendre la cause d’un problème. Souvent, les difficultés peuvent être détectées et résolues en regardant attentivement les logs.

:::info
Besoin d’aide supplémentaire ? Pas de souci, rejoignez notre [Communauté Discord](https://discord.com/invite/zaphosting) ou postez sur notre [Subreddit r/zaphosting](https://www.reddit.com/r/zaphosting/) où nous et la communauté pourrons vous aider.

Vous voulez un support officiel ? Merci de [créer un ticket](https://zap-hosting.com/en/customer/support/) sur notre site avec un max de détails, on vous répondra au plus vite ! :)
:::


<InlineVoucher />