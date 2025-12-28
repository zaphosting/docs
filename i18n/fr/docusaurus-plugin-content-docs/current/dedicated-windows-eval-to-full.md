---
id: dedicated-windows-eval-to-full
title: "Serveur dédié : Convertir Windows Server Évaluation en Version Complète"
description: "Découvrez comment convertir Windows Server Évaluation en Version Complète → En savoir plus maintenant"
sidebar_label: Convertir Éval en Complet
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les éditions Windows Server Évaluation sont conçues pour des tests et sont limitées dans le temps. Pour continuer à utiliser la même installation en production, l’édition d’évaluation peut être convertie en version entièrement licenciée sans réinstaller le système d’exploitation.

Microsoft prend en charge cette conversion sur place via l’outil DISM, à condition de disposer d’une clé produit valide pour l’édition cible.

<InlineVoucher />



## Prérequis

Avant de commencer la conversion, assure-toi d’avoir une clé produit valide pour l’édition Windows Server vers laquelle tu souhaites basculer, comme Standard ou Datacenter. La clé produit doit correspondre exactement à l’édition cible.



## Obtenir l’édition actuelle

Pour vérifier quelle édition est installée, ouvre une invite de commandes ou PowerShell en mode administrateur et exécute la commande suivante :

```powershell
DISM /Online /Get-CurrentEdition
```

Le résultat affichera l’identifiant de l’édition active. Les installations d’évaluation apparaissent généralement comme `ServerStandardEval` ou `ServerDatacenterEval`.



## Vérifier les éditions cibles supportées

Toutes les éditions ne peuvent pas être converties en toutes les autres éditions. Pour voir quelles éditions sous licence sont supportées pour ton installation actuelle, lance la commande suivante :

```
DISM /Online /Get-TargetEditions
```

Les éditions listées représentent les cibles valides pour la conversion.



## Passer de l’Évaluation à la Version Complète

Une fois l’édition cible connue et la clé produit valide en main, tu peux lancer la mise à niveau. La valeur `<TargetEdition>` doit correspondre à l’une des éditions supportées retournées par la commande DISM.

Les éditions cibles courantes incluent :
- `ServerStandard`
- `ServerDatacenter`

Utilise la commande suivante pour démarrer la conversion. Remplace `<TargetEdition>` par l’édition désirée et `<ProductKey>` par ta clé produit Windows Server de 25 caractères :


```
DISM /Online /Set-Edition:<TargetEdition> /ProductKey:<ProductKey> /AcceptEula
```

| Édition du système d’exploitation | Clé de licence Volume Générique    |
| --------------------------------- | --------------------------------- |
| Windows Server 2025 Standard       | TVRH6-WHNXV-R9WG3-9XRFY-MY832    |
| Windows Server 2025 Datacenter     | D764K-2NDRG-47T6Q-P8T8W-YP6DF    |
| Windows Server 2022 Standard       | VDYBN-27WPP-V4HQT-9VMD4-VMK7H    |
| Windows Server 2022 Datacenter     | WX4NM-KYWYW-QJJR4-XV3QB-6VM33    |

Pendant le processus, la progression peut sembler se figer un moment. C’est tout à fait normal. Une fois la conversion terminée, un redémarrage est nécessaire pour finaliser le changement d’édition.



## Vérifier la version de Windows Server

Après le redémarrage du serveur, ouvre une invite de commandes ou PowerShell en mode administrateur et exécute :

```powershell
DISM /Online /Get-CurrentEdition
```

Le résultat doit maintenant afficher l’édition sous licence, comme `ServerStandard` ou `ServerDatacenter`, confirmant que la conversion de l’édition d’évaluation a réussi.

À ce stade, tu verras le filigrane **Activer Windows** en bas à droite de l’écran. Tu peux maintenant utiliser ta licence Windows Server achetée pour activer l’édition Windows Server Standard ou Datacenter.



## Conclusion

Félicitations ! Tu as maintenant réussi à passer ta version Windows Server de l’Évaluation à la Version Complète. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂



<InlineVoucher />