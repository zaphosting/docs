---
id: vintagestory-mods
title: "Vintage Story : Installer des Mods"
description: "Apprends comment installer des mods sur ton serveur de jeux Vintage Story pour ajouter de nouvelles fonctionnalités et mécaniques de jeu → Découvre tout maintenant"
sidebar_label: Installer des Mods
services:
- gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les mods sont un élément central de l’expérience Vintage Story et permettent aux propriétaires de serveurs d’étendre le jeu avec de nouvelles mécaniques, objets, fonctionnalités de génération du monde ou améliorations de qualité de vie. Installer des mods sur ton serveur garantit que tous les joueurs connectés bénéficient des mêmes améliorations de gameplay.

Vintage Story propose une grande bibliothèque communautaire de mods allant de petits ajustements à des refontes complètes du gameplay. Beaucoup de ces mods se trouvent sur la base de données officielle des mods Vintage Story ou sur les forums communautaires.

<InlineVoucher />

## Préparation

Avant d’installer des mods sur ton serveur Vintage Story, assure-toi d’avoir complété les étapes suivantes :

- Télécharge le mod désiré depuis une source fiable comme la base de données des mods Vintage Story  
- Vérifie que la version du mod correspond à la version du jeu de ton serveur  
- Arrête ton serveur avant d’uploader de nouveaux fichiers  

La plupart des mods Vintage Story sont distribués sous forme de fichiers `.zip` qu’il ne faut pas extraire avant l’installation.

## Installation

Les mods pour serveur Vintage Story doivent être uploadés directement dans le système de fichiers du serveur. Cela se fait en te connectant au serveur via [FTP](gameserver-ftpaccess.md). Connecte-toi d’abord à ton serveur avec un client FTP en utilisant les identifiants FTP de ton serveur.

Une fois connecté, rends-toi dans le répertoire suivant :

```
/gxxxxxx/VintagestoryData/
```

Dans ce dossier, tu dois créer deux dossiers s’ils n’existent pas déjà :

```
VintagestoryData
├── Mods
└── ModConfigs
```

- **Mods** – contient tous les mods installés sur le serveur  
- **ModConfigs** – stocke les fichiers de configuration générés par les mods installés  

Après avoir créé ces dossiers, upload tes fichiers de mods téléchargés dans le dossier **Mods**. Exemple de structure :

```
VintagestoryData
└── Mods
├── examplemod.zip
├── anothermod.zip
```

Vintage Story charge automatiquement tous les fichiers de mods placés dans ce dossier au démarrage du serveur.

## Vérification de l’installation

Une fois tous les fichiers de mods uploadés, retourne dans ton panneau de gestion et redémarre le serveur. Au démarrage, le serveur détectera les mods présents dans le dossier `Mods` et les chargera automatiquement. Si un mod nécessite une configuration, il pourra générer un nouveau fichier de configuration dans le dossier `ModConfigs` après le premier lancement.

Après que le serveur ait démarré avec succès, connecte-toi et vérifie que le mod est actif. Les mods devraient apparaître dans les logs du serveur au démarrage. Si un mod ne se charge pas, vérifie les points suivants :

- La version du mod correspond à la version du serveur  
- Toutes les dépendances requises sont installées  
- Le fichier `.zip` est bien placé dans le dossier `Mods` correct  

## Conclusion

Félicitations ! Tu as installé avec succès des mods sur ton serveur Vintage Story. Les mods te permettent d’étendre le gameplay, d’introduire de nouvelles mécaniques et de personnaliser l’expérience pour ta communauté.

Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />