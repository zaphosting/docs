---
id: vintagestory-mods
title: "Vintage Story : Installer des Mods"
description: "Apprenez à installer des mods sur votre serveur de jeux Vintage Story pour ajouter de nouvelles fonctionnalités et mécaniques de jeu → En savoir plus maintenant"
sidebar_label: Installer des Mods
services:
- gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les mods sont une partie centrale de l’expérience Vintage Story et permettent aux propriétaires de serveurs d’étendre le jeu avec de nouvelles mécaniques, objets, fonctionnalités de génération du monde ou améliorations de qualité de vie. Installer des mods sur votre serveur garantit que tous les joueurs connectés bénéficient des mêmes améliorations de gameplay.

Vintage Story propose une grande bibliothèque communautaire de mods allant de petits ajustements à des refontes complètes du gameplay. Beaucoup de ces mods se trouvent sur la base de données officielle des mods Vintage Story ou sur les forums communautaires.

<InlineVoucher />

## Préparation

Avant d’installer des mods sur votre serveur de jeux Vintage Story, assurez-vous d’avoir complété les étapes suivantes :

- Téléchargez le mod désiré depuis une source fiable comme la base de données des mods Vintage Story  
- Vérifiez que la version du mod correspond à la version du jeu de votre serveur  
- Arrêtez votre serveur avant de téléverser de nouveaux fichiers  

La plupart des mods Vintage Story sont distribués sous forme de fichiers `.zip` qu’il ne faut pas extraire avant l’installation.

## Installation

Les mods pour serveur Vintage Story doivent être téléversés directement dans le système de fichiers du serveur. Cela se fait en se connectant au serveur via [FTP](gameserver-ftpaccess.md). Connectez-vous d’abord à votre serveur avec un client FTP en utilisant vos identifiants FTP.

Une fois connecté, naviguez jusqu’au répertoire suivant :

```
/gxxxxxx/VintagestoryData/
```

Dans ce répertoire, vous devez créer deux dossiers s’ils n’existent pas déjà :

```
VintagestoryData
├── Mods
└── ModConfigs
```

- **Mods** – contient tous les mods installés sur le serveur  
- **ModConfigs** – stocke les fichiers de configuration créés par les mods installés  

Après avoir créé ces dossiers, téléversez vos fichiers de mods téléchargés dans le dossier **Mods**. Exemple de structure :

```
VintagestoryData
└── Mods
├── examplemod.zip
├── anothermod.zip
```

Vintage Story charge automatiquement tous les fichiers de mods placés dans ce dossier au démarrage du serveur.

## Vérification de l’installation

Une fois tous les fichiers de mods téléversés, retournez dans votre panneau de gestion de serveur et redémarrez le serveur. Au démarrage, le serveur détectera les mods présents dans le dossier `Mods` et les chargera automatiquement. Si un mod nécessite une configuration, il peut générer un nouveau fichier de configuration dans le dossier `ModConfigs` après le premier lancement.

Après que le serveur ait démarré avec succès, connectez-vous et vérifiez que le mod est actif. Les mods devraient apparaître dans les logs du serveur au démarrage. Si un mod ne se charge pas, vérifiez les points suivants :

- La version du mod correspond à la version du serveur  
- Toutes les dépendances requises sont installées  
- Le fichier `.zip` est bien placé dans le dossier `Mods` correct  

## Conclusion

Félicitations ! Vous avez installé avec succès des mods sur votre serveur de jeux Vintage Story. Les mods vous permettent d’étendre le gameplay, d’introduire de nouvelles mécaniques et de personnaliser l’expérience pour votre communauté. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />