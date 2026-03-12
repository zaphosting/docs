---
id: starrupture-mods
title: "StarRupture : Installer des Mods"
description: "Apprends comment installer des mods sur ton serveur et client StarRupture pour améliorer le gameplay → Découvre tout maintenant"
sidebar_label: Installer des Mods
services:
- gameserver-starrupture
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les mods te permettent d’étendre le gameplay de StarRupture en ajoutant de nouvelles mécaniques, du contenu, des améliorations de qualité de vie ou des ajustements de gameplay créés par la communauté. Beaucoup de mods StarRupture sont distribués via des plateformes communautaires comme NexusMods et peuvent être installés à la fois sur le serveur et localement sur le client.

Installer des mods sur ton serveur garantit que l’environnement serveur charge le contenu modifié, tandis que les installer localement permet à ton client de jeu d’utiliser les mêmes fichiers quand tu te connectes à des serveurs moddés.

<InlineVoucher />

## Installer des mods sur le serveur

Pour installer des mods sur ton serveur StarRupture, commence par télécharger le fichier mod désiré depuis une source fiable comme **NexusMods**.

![img](https://screensaver01.zap-hosting.com/index.php/s/rM4WR4gW2KLyzxz/preview)

Avant d’uploader le mod, assure-toi que ton serveur est arrêté pour éviter les conflits de fichiers pendant l’installation. Ensuite, connecte-toi à ton serveur via [FTP](gameserver-ftpaccess.md) avec un client FTP. Une fois connecté, rends-toi dans le répertoire suivant sur ton serveur :

```
/home/container/StarRupture/Content/Paks
```
Upload le fichier mod `.zip` téléchargé dans ce dossier. Une fois l’upload terminé, extrait le contenu de l’archive directement dans le répertoire `Paks`. Une fois les fichiers extraits, retourne dans ton panneau de gestion serveur et redémarre le serveur.

Au démarrage, le serveur détectera et chargera automatiquement les mods installés.

## Installer des mods sur le client

Certains mods StarRupture doivent aussi être installés localement sur le client. La plupart des mods installés localement restent actifs lors de la connexion aux serveurs. Commence par télécharger le mod désiré depuis une source fiable comme NexusMods.

Ensuite, ouvre ta **Bibliothèque Steam**, fais un clic droit sur **StarRupture**, survole **Gérer**, puis sélectionne **Parcourir les fichiers locaux**. Dans le dossier d’installation du jeu, localise le chemin suivant :

```
StarRupture/StarRupture/Content/Paks
```

Transfère le fichier mod `.zip` téléchargé dans ce dossier. Après avoir copié le fichier, extrait l’archive directement dans le répertoire `Paks`. Une fois extrait, le mod sera chargé automatiquement au prochain lancement du jeu.

## Conclusion

Félicitations ! Tu as installé avec succès des mods pour StarRupture à la fois sur le serveur et sur le client. Avec les mods installés, tu peux étendre ton expérience de jeu avec de nouvelles fonctionnalités, mécaniques et améliorations créées par la communauté.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />