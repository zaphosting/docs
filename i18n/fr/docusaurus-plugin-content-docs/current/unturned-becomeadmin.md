---
id: unturned-becomeadmin
title: "Unturned : Deviens admin sur ton serveur"
description: "Découvre comment attribuer les permissions d’administrateur pour un contrôle total du serveur et une gestion améliorée en jeu → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer les permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes nécessaires pour attribuer les permissions d’administrateur sur ton serveur sont expliquées ci-dessous.  
<InlineVoucher />

## Préparatifs

Pour pouvoir ajouter des admins sur un serveur, il faut modifier un fichier de config. Pour éviter tout souci lors de l’application des changements, assure-toi que ton serveur est arrêté avant !

De plus, l’ID Steam (64) du joueur est nécessaire pour que le serveur puisse l’identifier. Tu peux utiliser cet [outil](https://steamidfinder.com/) par exemple.  
Une fois sur le site, tu peux généralement trouver l’info en entrant le nom du joueur.

![](https://screensaver01.zap-hosting.com/index.php/s/72YkRLBXE77NJQ5/preview)

## Ouvrir les fichiers de config

Il y a deux façons d’éditer les fichiers sur un serveur.  
La première, c’est via [l’accès FTP](gameserver-ftpaccess.md).

La deuxième, c’est avec l’éditeur de config intégré dans l’interface web.  
Ici, on utilise l’éditeur intégré à l’interface web. Pour ça, ouvre le menu "Configs" dans la barre latérale gauche du serveur, sous l’onglet "Paramètres".  
![](https://screensaver01.zap-hosting.com/index.php/s/x872MGFpMLbTBj2/preview)

Le système charge alors toutes les configs disponibles et les liste. Patience, ça prend généralement quelques secondes. Une fois tous les fichiers chargés, il faut éditer le fichier "commands.dat". Clique simplement sur le bouton bleu "Ouvrir le fichier" pour l’ouvrir dans l’éditeur web.

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)

## Ajouter des admins

Tu peux maintenant désigner un admin ou un owner dans la config. Attention, le rang owner ne peut être attribué qu’une seule fois !

Pour ça, ajoute la ligne suivante pour attribuer le rang owner :

`owner Steam64IDReplacedHere //<-- Remplace par ton propre Steam64-ID`

Pour ajouter un administrateur, remplace simplement "owner" par "admin" :

`admin Steam64IDReplacedHere //<-- Remplace par ton propre Steam64-ID`

![](https://screensaver01.zap-hosting.com/index.php/s/i6PpdsfK6spBECj/preview)

Une fois tous les rangs ajoutés dans la config, clique sur "Enregistrer". Tu peux ensuite redémarrer le serveur, et tous les joueurs listés dans la config recevront automatiquement leur rang.

## Conclusion

Félicitations, tu as configuré avec succès les permissions d’administrateur. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />