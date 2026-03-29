---
id: over-the-top-wwi-configure-map-rotation-rules
title: "Over the Top WWI : Configurer les règles de rotation des maps"
description: "Apprends à configurer le comportement de rotation des maps sur ton serveur Over the Top WWI → Découvre-le maintenant"
sidebar_label: Rotation des maps
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les règles de rotation des maps dans **Over the Top WWI** déterminent comment les maps sont sélectionnées et jouées en fonction du nombre de joueurs. Ça permet de garantir que les maps restent équilibrées et adaptées au nombre de joueurs actifs.

En configurant ces paramètres, tu peux éviter que des grandes maps soient jouées avec trop peu de joueurs ou que des petites maps deviennent surchargées.

<InlineVoucher />

## Configuration

Les règles de rotation des maps se configurent dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier de configuration `ServerConfiguration.ini`. Dans ce fichier, repère le paramètre suivant :


EnableMinMaxPlayersPerMapCheck = False


- `EnableMinMaxPlayersPerMapCheck` active ou désactive la sélection automatique des maps selon le nombre de joueurs

  - `False` → Désactivé
  - `True` → Activé


Quand c’est activé, le serveur vérifie le nombre actuel de joueurs et ajuste la sélection des maps en conséquence. Ça garantit que les maps choisies sont dans une plage adaptée, pour maintenir un gameplay équilibré.

Le système utilise des seuils internes pour déterminer si une map est appropriée, évitant ainsi que de grandes maps soient sous-peuplées ou que de petites maps soient surchargées.

Après avoir modifié le `ServerConfiguration.ini`, sauvegarde le fichier et redémarre ton serveur. Le nouveau comportement de rotation des maps sera appliqué automatiquement.

## Conclusion

Bravo ! Tu as configuré avec succès les règles de rotation des maps sur ton **serveur Over the Top WWI**. Ça aide à garantir un gameplay équilibré en adaptant la taille des maps au nombre de joueurs.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />