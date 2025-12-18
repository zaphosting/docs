---
id: minecraft-bedrock-addons
title: "Minecraft Bedrock : Installer des Addons"
description: "Découvrez comment améliorer votre serveur de jeux Minecraft Bedrock avec des addons pour étendre le gameplay et personnaliser votre monde → En savoir plus maintenant"
sidebar_label: Installer des Addons
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction
Minecraft Bedrock Edition supporte nativement le modding et bénéficie d’une énorme communauté, ce qui vous permet d’étendre et d’améliorer le gameplay avec vos amis. Dans ce guide, nous allons couvrir le processus d’installation et d’activation d’un addon sur votre serveur de jeux Minecraft Bedrock.

<InlineVoucher />

## Préparation

Pour installer une map addon sur votre serveur Minecraft : Bedrock, vous devez vous connecter via FTP. Si vous ne connaissez pas cette méthode, nous vous recommandons de jeter un œil au [guide d’accès FTP](gameserver-ftpaccess.md).

Avant de procéder à l’installation, vous devrez aussi trouver les addons que vous souhaitez installer sur votre serveur. Nous vous conseillons de parcourir [CurseForge](https://www.curseforge.com/minecraft-bedrock) qui propose une énorme bibliothèque d’addons et de packs de ressources créés par la communauté.

## Installation

Il y a deux façons d’installer un addon dans Minecraft Bedrock. Vous pouvez soit installer les addons dans un nouveau monde, ce qui rend le processus très simple, soit les installer dans un monde existant, ce qui est plus compliqué.

## Utiliser un nouveau Monde (facile)

Pour créer un nouveau monde avec des addons, il vous suffit d’ouvrir le fichier `.mcaddon` ou `.mcpack` téléchargé.  
Cela ouvrira Minecraft Bedrock et importera l’addon dans le jeu.

### Créer un Monde

Pour créer un monde et y installer les addons, cliquez sur `Jouer` puis sur `Créer un nouveau monde`.  
Vous pouvez ensuite choisir tous les réglages habituels du monde que vous souhaitez :

![](https://screensaver01.zap-hosting.com/index.php/s/jtK2szxRNSSiea5/preview)

### Installer les Addons

Avant de cliquer sur `Créer`, vous devez aller dans `Packs de ressources` ou `Packs de comportements`.  
Là, cliquez sur `Activer` à côté du nom de l’addon :

![](https://screensaver01.zap-hosting.com/index.php/s/ARnp4YFq5iZjxYZ/preview)

Certains addons ont à la fois un pack de ressources et un pack de comportements, vous devez donc activer les deux. Une fois tous les addons désirés activés, vous pouvez cliquer sur `Créer`.

Pour exporter le monde et le téléverser sur votre serveur, vous pouvez utiliser le guide [Importer son propre Monde](minecraft-bedrock-add-world.md).

## Utiliser un Monde existant (difficile)

Installer l’addon dans un monde existant est plus compliqué, mais vous permet de jouer avec l’addon tout en conservant votre progression.

### Installer 7-zip

Pour installer l’addon dans un monde Minecraft existant, vous devez installer 7-zip afin de pouvoir ouvrir le fichier addon.  
Le processus d’installation est très simple, il suffit de visiter la [page de téléchargement de 7-zip](https://www.7-zip.org/) pour récupérer la dernière version du setup :

![](https://screensaver01.zap-hosting.com/index.php/s/iRxwB5yTpbTYpbt/preview)

Une fois téléchargé, ouvrez le fichier et cliquez sur **Installer**.

### Extraire l’Addon

Dès que vous avez téléchargé l’addon souhaité, vous pouvez l’extraire avec 7-zip en faisant un clic droit sur le fichier `.mcaddon`, en survolant `7-zip` puis en cliquant sur `Extraire vers NOM_DU_DOSSIER` :

![](https://screensaver01.zap-hosting.com/index.php/s/ZCPPNTLtErtEQWr/preview)

Si l’addon contient à la fois un pack de ressources et un pack de comportements, vous devez faire la même chose pour le contenu du dossier, car ce sont aussi des fichiers `.mcpack` :

![](https://screensaver01.zap-hosting.com/index.php/s/tpz8iJ4wymBo6ZF/preview)

La différence entre les packs de ressources et les packs de comportements se voit dans le nom du dossier. Les dossiers de packs de ressources contiennent `RP` dans leur nom, les packs de comportements ont `BP`.

<Tabs>
  <TabItem value="resource-pack" label="Pack de Ressources" default>

### Téléverser le Pack de Ressources

Pour téléverser le pack de ressources, rendez-vous dans ce dossier via votre client FTP :

```
/gXXXXXX/minecraft-bedrock/resource_packs
```

Ensuite, vous pouvez glisser-déposer le répertoire RP dans le client FTP :

![](https://screensaver01.zap-hosting.com/index.php/s/5c3X4S9fNaXrJFs/preview)

:::caution
Assurez-vous de téléverser le dossier correct qui contient directement le pack de ressources, pas seulement un sous-dossier.  
Le contenu du dossier que vous téléversez doit ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/sRxmePLtSSsqmF3/preview)
:::

### Activer le Pack de Ressources

Pour activer le pack de ressources, vous devez ouvrir le fichier `manifest.json` à l’intérieur du dossier RP. Ensuite, rendez-vous dans le dossier du monde via votre client FTP :

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Une fois là, ouvrez le fichier `world_resource_packs.json`.  
Si vous n’avez jamais installé d’addons, vous devez créer ce fichier. Collez le texte suivant dans le fichier :

```
[
  {
    "pack_id" : "UUID ICI",
    "version" : [version, numéro, ici]
  }
]
```

Remplacez les valeurs de `pack_id` et `version` par celles du fichier manifest.json que vous avez ouvert précédemment :

![](https://screensaver01.zap-hosting.com/index.php/s/ymXPZRT6jxtN77X/preview)

:::info
Si vous souhaitez installer plusieurs packs, vous pouvez ajouter plusieurs entrées.  
Il est important de séparer les entrées par une virgule `,` mais il ne faut pas en mettre une à la fin :

```
[
  {
    "pack_id" : "UUID ICI",
    "version" : [version, numéro, ici]
  },
  {
    "pack_id" : "UUID ICI",
    "version" : [version, numéro, ici]
  },
  {
    "pack_id" : "UUID ICI",
    "version" : [version, numéro, ici]
  }
]
```
:::

</TabItem>
<TabItem value="behavior-pack" label="Pack de Comportements">

### Téléverser le Pack de Comportements

Pour téléverser le pack de comportements, rendez-vous dans ce dossier via votre client FTP :

```
/gXXXXXX/minecraft-bedrock/behavior_packs
```

Ensuite, vous pouvez glisser-déposer le répertoire BP dans le client FTP :

![](https://screensaver01.zap-hosting.com/index.php/s/rT5s9ML82d3daeM/preview)

:::caution
Assurez-vous de téléverser le dossier correct qui contient directement le pack de comportements, pas seulement un sous-dossier.  
Le contenu du dossier que vous téléversez doit ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/3mAGW56C9TYNnmk/preview)
:::

### Activer le Pack de Comportements

Pour activer le pack de comportements, vous devez ouvrir le fichier `manifest.json` à l’intérieur du dossier BP. Ensuite, rendez-vous dans le dossier du monde via votre client FTP :

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Une fois là, ouvrez le fichier `world_behavior_packs.json`.  
Si vous n’avez jamais installé d’addons, vous devez créer ce fichier. Collez le texte suivant dans le fichier :

```
[
  {
    "pack_id" : "UUID ICI",
    "version" : [version, numéro, ici]
  }
]
```

Remplacez les valeurs de `pack_id` et `version` par celles du fichier manifest.json que vous avez ouvert précédemment :

![](https://screensaver01.zap-hosting.com/index.php/s/wLmeAwaE2D76N9N/preview)

:::info
Si vous souhaitez installer plusieurs packs, vous pouvez ajouter plusieurs entrées.  
Il est important de séparer les entrées par une virgule `,` mais il ne faut pas en mettre une à la fin :

```
[
  {
    "pack_id" : "UUID ICI",
    "version" : [version, numéro, ici]
  },
  {
    "pack_id" : "UUID ICI",
    "version" : [version, numéro, ici]
  },
  {
    "pack_id" : "UUID ICI",
    "version" : [version, numéro, ici]
  }
]
```
:::
</TabItem>
</Tabs>

### Vérifier les modifications

Démarrez votre serveur, connectez-vous et vérifiez que les addons ont bien été installés. Testez les nouvelles fonctionnalités ou ressources pour vous assurer que tout fonctionne comme prévu. Si quelque chose ne se passe pas comme prévu, revérifiez les étapes, assurez-vous que les fichiers ont été correctement téléversés et cherchez d’éventuelles erreurs dans la console du serveur.

## Conclusion

Installer des addons sur votre serveur de jeux Minecraft Bedrock est un super moyen d’étendre l’expérience de jeu et d’ajouter du contenu neuf. Avec ce guide, vous pouvez facilement installer des addons et personnaliser votre serveur. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />