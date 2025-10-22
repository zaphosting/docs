---
id: minecraft-bedrock-add-world
title: "Minecraft Bedrock : Importer son propre Monde"
description: "Découvrez comment importer et partager vos mondes Minecraft Bedrock personnalisés sur votre serveur pour un fun multijoueur sans accroc → En savoir plus maintenant"
sidebar_label: Importer son propre Monde
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Minecraft Bedrock Edition vous permet de créer vos propres mondes et de les utiliser sur votre serveur. Dans ce guide, on vous montre comment importer un monde perso dans votre serveur Minecraft : Bedrock pour le partager avec vos potes.

<InlineVoucher />

## Préparation

Pour importer un monde dans votre serveur Minecraft Bedrock, il faut vous connecter via FTP. Si vous ne connaissez pas, on vous conseille de jeter un œil au [guide d’accès FTP](gameserver-ftpaccess.md).

Assurez-vous d’avoir déjà sauvegardé le monde que vous voulez importer sur votre ordi. Le monde doit être dans un dossier avec les fichiers correspondants.  
Si vous voulez uploader un monde depuis Minecraft : Bedrock en solo, vous pouvez le trouver à ce chemin :  
```
C:\Users\%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

## Installation

### Arrêter le Serveur

Avant de lancer l’import, il faut arrêter votre serveur Minecraft Bedrock. Ça évite de perdre des données et garantit que l’import se passe nickel.

### Uploader le Monde

Via FTP, allez dans le dossier où sont stockés les mondes de votre serveur. Le chemin est généralement :

```
/gXXXXXX/minecraft-bedrock/worlds
```

Là, vous verrez les dossiers de tous les mondes déjà présents sur votre serveur. Chaque monde a un nom unique.

Upload le dossier de votre monde à importer dans ce répertoire. Faites gaffe à ne pas changer le nom du dossier, sinon Minecraft ne reconnaîtra pas le monde.

Ensuite, ouvrez le fichier `server.properties` qui se trouve dans le dossier principal du serveur, et modifiez la valeur de `level-name` dans cette ligne pour mettre le nom du dossier de votre monde :

```
level-name=Bedrock level
```
:::tip
Si vous voulez revenir à votre monde par défaut, il suffit de remettre la valeur à `Bedrock level` et de redémarrer le serveur !
:::

### Démarrer le Serveur

Une fois le monde uploadé avec succès, relancez votre serveur. Le monde importé devrait se charger automatiquement.

### Vérifier les Modifications

Connectez-vous à votre serveur et vérifiez que le monde importé est bien chargé. Vous devriez pouvoir jouer dans ce nouveau monde. Si ça ne marche pas comme prévu, revérifiez les étapes et assurez-vous que les dossiers du monde sont bien nommés et placés au bon endroit.

## Conclusion

Importer un monde dans votre serveur Minecraft Bedrock, c’est simple et ça vous permet de partager vos créations avec les autres. Pour toute question ou aide, n’hésitez pas à contacter notre support, dispo tous les jours pour vous filer un coup de main ! 🙂

<InlineVoucher />