---
id: abioticfactor-becomeadmin
title: "Abiotic Factor : Devenir admin"
description: "Découvrez comment attribuer les droits admin aux joueurs pour un contrôle total du serveur et une gestion de jeu améliorée → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans **Abiotic Factor**, les administrateurs du serveur ont besoin de permissions élevées pour gérer les joueurs, exécuter des commandes serveur ou modifier les paramètres pendant le jeu.

<InlineVoucher />

## Configuration

La configuration se fait via le fichier `admin.ini`. Pour y accéder, ouvrez la section **Configs** dans l’administration du serveur de jeux et localisez le fichier `admin.ini`. Par défaut, ce fichier contient l’entrée suivante, où vous pouvez définir les administrateurs. Remplacez les valeurs `ExampleID` par les **SteamID64** des joueurs à qui vous souhaitez donner les droits admin.

```
[Moderators]
Moderator=ExampleID1
Moderator=ExampleID2
```

## Conclusion

Une fois les informations correctement ajoutées et le serveur redémarré, le joueur spécifié disposera d’un accès admin complet en jeu. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous assister ! 🙂


<InlineVoucher />