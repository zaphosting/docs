---
id: humanitz-change-pvp-mode
title: "HumanitZ : Modifier le mode PvP"
description: "Apprends comment activer ou désactiver le PvP sur ton serveur HumanitZ → Découvre-le maintenant"
sidebar_label: "Modifier le mode PvP"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

Le combat Joueur contre Joueur (PvP) est une mécanique centrale dans les jeux de survie comme HumanitZ. Activer ou désactiver le PvP change la façon dont les joueurs peuvent s’affronter, s’ils peuvent s’infliger des dégâts, et s’ils peuvent interagir avec les objets appartenant aux joueurs comme les véhicules ou les conteneurs.

<InlineVoucher />

## Configuration

Le mode PvP est contrôlé dans le fichier `GameServerSettings.ini`. Tu peux accéder à ce fichier dans ton panneau de gestion de serveur sous **Configs**. Dans le fichier de config, trouve le paramètre suivant :

```
;false/true=Off/On. This will also affect the ability to interact with player items such as cars and containers
PVP=true
```

- `PVP=true` – Active le combat Joueur contre Joueur  
- `PVP=false` – Désactive le combat Joueur contre Joueur

Pour changer le mode PvP, il suffit de définir la valeur sur `true` (Activé) ou `false` (Désactivé), selon comment tu veux que le PvP fonctionne sur ton serveur.

Exemple – PvP désactivé :

```
PVP=false
```

Après avoir modifié le fichier, sauvegarde tes changements et redémarre le serveur pour que la nouvelle configuration soit prise en compte.

## Conclusion

Félicitations ! En modifiant la valeur `PVP` dans le fichier `GameServerSettings.ini`, tu as réussi à changer le mode PvP sur ton serveur HumanitZ. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />