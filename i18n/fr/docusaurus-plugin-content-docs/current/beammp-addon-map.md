---
id: beammp-addon-map
title: "BeamMP : Installer une carte addon"
description: "Découvrez comment améliorer votre serveur BeamMP avec des cartes addons personnalisées pour un gameplay multijoueur amélioré → En savoir plus maintenant"
sidebar_label: Installer une carte addon
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

BeamNG.Drive supporte nativement le modding et possède une énorme communauté qui vous permet d’étendre et d’améliorer le gameplay avec vos potes. Comme BeamMP est simplement une modification multijoueur, la plupart des cartes addons devraient être compatibles avec votre serveur BeamMP. Dans ce guide, on va voir comment installer et activer une carte addon personnalisée sur votre serveur BeamMP.

<InlineVoucher />

## Préparation

Pour installer une carte addon sur votre serveur BeamMP, vous devez vous connecter via FTP. Si vous ne connaissez pas cette méthode, on vous conseille de jeter un œil au [guide Accès via FTP](gameserver-ftpaccess.md).

Avant d’installer, il faudra aussi trouver les cartes addons que vous voulez mettre sur votre serveur. On recommande de parcourir le [forum officiel BeamNG.Drive](https://www.beamng.com/resources/categories/terrains-levels-maps.9/) qui regorge de mods et de cartes addons créés par la communauté.

:::tip
Comme BeamMP est une modif multijoueur pour BeamNG.Drive, la plupart des cartes addons devraient marcher sur votre serveur BeamMP. Par contre, certaines cartes spécifiques peuvent ne pas fonctionner comme prévu, donc il faudra tester chaque carte.
:::

## Installation

Pour commencer, assurez-vous d’avoir téléchargé une carte addon que vous voulez ajouter à votre serveur. Elle doit être au format `.zip`.

### Vérifier le nom de la carte

Avant d’aller plus loin, il faut vérifier que le nom de la carte est correct. Le fichier `.zip` que vous avez téléchargé devrait normalement avoir le bon nom, mais ce n’est pas toujours le cas, donc mieux vaut vérifier.

Pour ça, ouvrez le fichier `.zip` téléchargé. À l’intérieur, trouvez et ouvrez le dossier `levels`, qui contient la carte elle-même.

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

Copiez le nom précis du dossier de la carte addon trouvé dans ce répertoire. Faites un clic droit dessus, choisissez `Propriétés` et copiez le texte en surbrillance avec `CTRL + C`.

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### Configurer la carte

Maintenant que vous avez le nom de la carte, il faut modifier le fichier de config pour changer le paramètre qui définit la carte active.

#### Désactiver la sélection de carte par défaut

D’abord, il faut désactiver la sélection de carte par défaut dans les paramètres, sinon elle écrasera vos modifications.

Pour ça, allez dans la section **Paramètres** dans le panneau web de votre serveur de jeux.

![](https://screensaver01.zap-hosting.com/index.php/s/SJ5L6APTFzyZKTC/preview)

Là, désactivez l’option "Map".

![](https://screensaver01.zap-hosting.com/index.php/s/kHSybw6rw5jMaE3/preview)

N’oubliez pas de sauvegarder en bas de la page.

#### Modifier la carte dans la config

Pour changer la carte dans la config, allez dans la section **Configs** de votre interface web.

![](https://screensaver01.zap-hosting.com/index.php/s/sBj4CFQ3yKmMy8d/preview)

Ouvrez le fichier `ServerConfig.toml` et cherchez la ligne :
`Map = "/levels/gridmap_v2/info.json"`

![](https://screensaver01.zap-hosting.com/index.php/s/JQg3EzkszXDrGFQ/preview)

Remplacez cette valeur par `Map = "/levels/[votre_nom_de_carte]/info.json"` en utilisant le nom de carte que vous avez trouvé, puis sauvegardez.

![](https://screensaver01.zap-hosting.com/index.php/s/oNKN34KTAxrSxYX/preview)

:::info
Dans de rares cas, une carte peut être formatée différemment. Si la carte ne fonctionne pas après avoir suivi toutes les étapes, il se peut que vous deviez utiliser ce chemin à la place : `Map = "/levels/[votre_nom_de_carte]/[votre_nom_de_carte].mis"`
:::

:::tip
À tout moment, vous pouvez revenir aux cartes par défaut du jeu en réactivant l’option dans les paramètres et en en choisissant une :
![](https://screensaver01.zap-hosting.com/index.php/s/8SSceQj373GQ3sw/preview)
:::

### Upload de la carte

Pour finir, vous devez uploader le fichier `.zip` de la carte que vous avez téléchargé sur votre serveur BeamMP via FTP. Encore une fois, utilisez notre guide [Accès via FTP](gameserver-ftpaccess.md) si besoin.

Dans votre client FTP, allez à ce chemin :
```
../beammp/Resources/Client
```

Glissez-déposez simplement le fichier `.zip` de la carte addon dans ce dossier pour l’uploader sur votre serveur. Avec la config modifiée et les fichiers de la carte uploadés, votre addon carte est prêt à être utilisé.

## Conclusion

Une fois toutes les étapes terminées, redémarrez votre serveur BeamMP. Vous avez installé avec succès une carte addon sur votre serveur de jeux BeamMP. Pour toute question ou aide, n’hésitez pas à contacter notre support, dispo tous les jours pour vous filer un coup de main ! 🙂

<InlineVoucher />