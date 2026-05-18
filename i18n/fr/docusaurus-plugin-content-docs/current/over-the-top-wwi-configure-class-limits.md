---
id: over-the-top-wwi-configure-class-limits
title: "Over the Top WWI : Configurer les limites de classes"
description: "Apprends à configurer les limites de classes sur ton serveur Over the Top WWI → Découvre vite comment faire"
sidebar_label: Limites de classes
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les limites de classes dans **Over the Top WWI** contrôlent combien de joueurs peuvent utiliser certains types d’unités comme les snipers, sapeurs ou unités lourdes. Ajuster ces limites aide à équilibrer le gameplay et évite que certaines classes soient surutilisées.

En configurant les limites de classes, tu peux garantir des compositions d’équipe équitables et créer une expérience de jeu plus structurée et tactique.

<InlineVoucher />

## Configuration

Les limites de classes se configurent dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier `ServerConfiguration.ini`. Dans ce fichier, repère les paramètres suivants :

```
EnableClassLimits = 1
PercentofCavPerTeam = 20
NumberOfSappers = 90
NumberOfSpecialists = 12
NumberofInfOfficers = 9
NumberOfSnipers = 10
NumberOfHeavys = 12
NumberofStormTroops = 25
MinimumNumOfPlayerForClassLimits = 15
```

- `EnableClassLimits` active ou désactive les restrictions de classes  
- `0` → Désactivé  
- `1` → Activé  

- `PercentofCavPerTeam` définit le pourcentage d’unités de cavalerie autorisées par équipe  

- `NumberOfSappers`, `NumberOfSpecialists`, `NumberOfSnipers`, `NumberOfHeavys`, `NumberofStormTroops` définissent combien de joueurs peuvent choisir chaque classe  

- `NumberofInfOfficers` contrôle le nombre de rôles d’officiers disponibles  

- `MinimumNumOfPlayerForClassLimits` définit combien de joueurs doivent être connectés pour que les limites de classes s’appliquent  

Ajuste ces valeurs pour contrôler combien de joueurs peuvent sélectionner chaque classe et équilibrer ton serveur selon ton style de jeu préféré.

Après avoir modifié le `ServerConfiguration.ini`, sauvegarde le fichier et redémarre ton serveur. Les nouvelles limites de classes seront appliquées automatiquement.

## Conclusion

Bravo ! Tu as configuré avec succès les limites de classes sur ton **serveur Over the Top WWI**. Ça te permet d’équilibrer les compositions d’équipe et d’améliorer l’expérience de jeu globale.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />