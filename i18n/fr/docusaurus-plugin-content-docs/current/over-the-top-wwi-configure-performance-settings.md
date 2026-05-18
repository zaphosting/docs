---
id: over-the-top-wwi-configure-performance-settings
title: "Over the Top WWI : Optimise les performances du serveur"
description: "Apprends à optimiser les performances et le comportement de ton serveur Over the Top WWI → Découvre-le maintenant"
sidebar_label: Paramètres de performance
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les paramètres de performance dans **Over the Top WWI** influencent la fluidité de ton serveur, surtout avec beaucoup de joueurs ou une forte utilisation d’IA. Une bonne config peut améliorer la stabilité, réduire le lag et garantir une meilleure expérience de jeu pour tous.

En ajustant ces valeurs, tu peux équilibrer la simulation visuelle, les calculs d’IA et la charge du serveur.

<InlineVoucher />

## Configuration

Les paramètres de performance se configurent dans le fichier de config du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier `ServerConfiguration.ini`. Dans ce fichier, repère les paramètres suivants :

```
TargetFPS = 0
NavCalcsPerFrame = 2000
NavMeshFrames = 1
NavMeshAutoSeed = 5
ResetIfNoPlayers = 1
```

- `TargetFPS` définit le profil de performance du serveur

  - `0` → Par défaut
  - `1` → Optimisation pour un nombre élevé de joueurs
  - `2` → Optimisation pour un très grand nombre de joueurs

- `NavCalcsPerFrame` contrôle combien de calculs de navigation sont traités par frame
- `NavMeshFrames` définit la fréquence de mise à jour des maillages de navigation
- `NavMeshAutoSeed` influence la génération des chemins de navigation de l’IA
- `ResetIfNoPlayers` réinitialise automatiquement le serveur quand aucun joueur n’est connecté

  - `0` → Désactivé
  - `1` → Activé

Ajuster ces paramètres peut vraiment booster les performances du serveur, surtout si tu gères beaucoup de bots ou des batailles massives.

Après avoir modifié le `ServerConfiguration.ini`, sauvegarde le fichier et redémarre ton serveur. Les nouveaux réglages de performance seront appliqués automatiquement.

## Conclusion

Bravo ! Tu as optimisé avec succès les paramètres de performance de ton **serveur Over the Top WWI**. Un bon réglage de ces valeurs aide à garder la stabilité et assure un gameplay fluide même sous forte charge.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />