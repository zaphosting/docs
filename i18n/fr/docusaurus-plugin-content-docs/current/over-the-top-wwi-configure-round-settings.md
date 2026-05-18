---
id: over-the-top-wwi-configure-round-settings
title: "Over the Top WWI : Configurer les paramètres de la manche"
description: "Apprends à configurer la durée des manches et le déroulement des parties sur ton serveur Over the Top WWI → Découvre-le maintenant"
sidebar_label: Paramètres des manches
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les paramètres des manches dans **Over the Top WWI** définissent la durée des parties et le déroulement du gameplay. Ajuster ces valeurs te permet de contrôler le rythme des parties, la longueur des manches, et le flux global de la session.

C’est super important pour équilibrer entre des parties rapides et des batailles plus longues et stratégiques.

<InlineVoucher />

## Configuration

Les paramètres des manches se configurent dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier `ServerConfiguration.ini`. Dans ce fichier, repère les paramètres suivants :

```
MaxAmountofRounds = 3
MaxMapTime = 30
FinalRecapTimer2 = 3
PersistentMatch = 0
```

- `MaxAmountofRounds` définit combien de manches sont jouées par partie
- `MaxMapTime` fixe la durée max d’une map en minutes
- `FinalRecapTimer2` contrôle la durée d’affichage du récapitulatif de fin de manche

- `PersistentMatch` détermine si le temps et le score continuent entre les manches

  - `0` → Désactivé
  - `1` → Activé

Ajuste ces valeurs pour créer des parties plus courtes avec des rotations rapides ou des sessions plus longues avec un gameplay étendu.

Après avoir modifié le `ServerConfiguration.ini`, sauvegarde le fichier et redémarre ton serveur. Les nouveaux paramètres de manches seront appliqués automatiquement.

## Conclusion

Bravo ! Tu as configuré avec succès les paramètres des manches sur ton **serveur Over the Top WWI**. Ça te permet de gérer la durée des parties et d’améliorer le flow du gameplay sur ton serveur.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />