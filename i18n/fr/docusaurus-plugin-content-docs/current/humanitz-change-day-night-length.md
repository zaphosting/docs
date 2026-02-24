---
id: humanitz-change-day-night-length
title: "HumanitZ : Modifier la durée du jour et de la nuit"
description: "Découvrez comment ajuster la durée du jour et de la nuit sur votre serveur HumanitZ → En savoir plus maintenant"
sidebar_label: "Modifier la durée jour/nuit"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

Le cycle jour/nuit dans HumanitZ impacte directement le gameplay, la visibilité, la difficulté de survie et le rythme global. Des jours plus courts peuvent rendre l’expérience de survie plus intense, tandis que des périodes de lumière plus longues offrent aux joueurs plus de temps pour explorer, construire et récolter des ressources.

<InlineVoucher />

## Configuration

La durée du jour et de la nuit est contrôlée dans le fichier `GameServerSettings.ini`. Vous pouvez accéder à ce fichier depuis votre panneau de gestion de serveur sous **Configs**. Dans ce fichier de config, repérez les paramètres suivants :

```
;Durée du jour en minutes
DayDur=40
;Durée de la nuit en minutes
NightDur=20
```

Les valeurs sont définies en minutes :

- `DayDur` – Contrôle la durée du jour  
- `NightDur` – Contrôle la durée de la nuit  

Pour changer la longueur du cycle, il suffit d’ajuster les chiffres selon la durée souhaitée. Exemple pour des jours plus longs et des nuits plus courtes :

```
DayDur=60
NightDur=15
```

Après avoir modifié le fichier, sauvegardez les changements et redémarrez le serveur pour que les nouveaux réglages prennent effet.

## Conclusion

Félicitations ! En modifiant les valeurs `DayDur` et `NightDur` dans le fichier `GameServerSettings.ini`, vous avez ajusté avec succès le cycle jour/nuit sur votre serveur HumanitZ. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous assister ! 🙂

<InlineVoucher />