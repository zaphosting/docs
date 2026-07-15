---
id: palworld-performance-guide
title: "Palworld : Guide de Performance"
description: "Améliorez les performances de votre serveur Palworld, réduisez les baisses de performance et diminuez la charge serveur grâce à des modifications manuelles de configuration. -> Découvrez comment maintenant"
sidebar_label: "Palworld : Guide de Performance"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les performances du serveur Palworld peuvent diminuer avec le temps, surtout sur les serveurs actifs avec de nombreuses bases, travailleurs, objets au sol et Pals sauvages. Dans ce guide, vous apprendrez à optimiser le fichier `PalWorldSettings.ini` via l’interface web ZAP-Hosting pour réduire la charge serveur et améliorer les performances globales.

## Preparation

Avant de commencer, vous devez avoir accès à l’administration de votre serveur de jeux Palworld et la permission d’éditer les fichiers de configuration.

:::info Accès requis
Vous devez avoir accès à votre serveur Palworld dans le panneau d’administration des serveurs de jeux ZAP-Hosting. Le fichier de configuration nécessaire se trouve dans la section `Configs`.
:::

:::caution Créez une sauvegarde avant tout
L’optimisation des performances peut modifier significativement le comportement du jeu. Avant d’éditer votre configuration, il est recommandé de créer une sauvegarde pour pouvoir restaurer vos paramètres précédents si besoin.
:::

## Ouvrir le fichier de configuration Palworld

Pour optimiser votre serveur, vous devez modifier le fichier principal de configuration du serveur Palworld.

1. Connectez-vous à votre interface web ZAP-Hosting.
2. Ouvrez l’administration de votre serveur de jeux **Palworld**.
3. Allez dans **Configs**.
4. Ouvrez le fichier `PalWorldSettings.ini`.



:::note Où effectuer les modifications
Les paramètres liés aux performances sont stockés dans `PalWorldSettings.ini`. Vous devez modifier manuellement les valeurs des options existantes dans ce fichier.
:::

## Comprendre les paramètres importants

Plusieurs paramètres de Palworld impactent directement les performances du serveur. Certains réduisent la charge CPU, mémoire et simulation du monde, tandis que d’autres limitent l’accumulation liée aux joueurs inactifs ou aux entités excessives.

### Paramètres principaux de performance

Voici les réglages les plus pertinents pour réduire les baisses de performance sur un serveur chargé.

| Paramètre | Par défaut | Changement recommandé | Effet |
|---|---:|---|---|
| `BuildObjectDeteriorationDamageRate` | `1.0` | Garder à `0.1` ou plus | Une détérioration plus élevée aide à supprimer plus vite les structures abandonnées |
| `bAutoResetGuildNoOnlinePlayers` | `False` | Mettre à `True` si adapté | Supprime les bases de guildes inactives après la période de grâce configurée |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Ajuster selon besoin | Définit le temps d’inactivité en heures avant réinitialisation de la guilde |
| `PalSpawnNumRate` | `1.0` | Diminuer | Fait apparaître moins de Pals sauvages et réduit la charge de simulation |
| `DropItemMaxNum` | `3000` | Diminuer | Limite le nombre d’objets au sol dans le monde |
| `DropItemAliveMaxHours` | `1.0` | Diminuer | Supprime plus rapidement les objets au sol |
| `BaseCampMaxNumInGuild` | `4` | Diminuer | Réduit le nombre de bases par guilde |
| `ServerReplicatePawnCullDistance` | `15000.0` | Diminuer | Réduit la distance de synchronisation des Pals et la charge réseau/serveur |
| `BaseCampWorkerMaxNum` | `15` | Diminuer | Limite le nombre de Pals travailleurs par base |
| `MaxBuildingLimitNum` | `0` | Définir une valeur | Limite le nombre total de bâtiments par joueur |
| `bEnableInvaderEnemy` | `True` | Mettre à `False` | Désactive les ennemis envahisseurs de type raid et réduit la charge |
| `bEnableFastTravel` | `True` | Mettre à `False` si besoin | Peut réduire les freezes causés par les voyages rapides |
| `bIsPvP` | `False` | Garder à `False` sauf si nécessaire | Le PvP peut augmenter la charge serveur dans les environnements actifs |

### Paramètres secondaires de performance

Ces réglages peuvent aussi aider, surtout sur les serveurs publics plus grands.

| Paramètre | Par défaut | Changement recommandé | Effet |
|---|---:|---|---|
| `BaseCampMaxNum` | `128` | Diminuer | Réduit le nombre total de bases autorisées sur le serveur |
| `AutoSaveSpan` | `240` | Augmenter | Réduit la fréquence des sauvegardes automatiques du serveur |

:::tip Commencez par des changements conservateurs
Il est préférable de modifier seulement quelques valeurs à la fois, puis de tester le comportement du serveur. Cela facilite l’identification des réglages qui améliorent les performances et ceux qui impactent trop le gameplay.
:::

## Modifier la configuration

Palworld stocke les options serveur dans la section `OptionSettings` du fichier `PalWorldSettings.ini`. Vous devez ajuster manuellement les entrées concernées.

### Exemple de configuration optimisée

L’exemple suivant montre une configuration conservatrice axée sur la performance. Remplacez uniquement les valeurs que vous souhaitez appliquer à votre serveur.

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=0.800000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=False,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=2000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=64,BaseCampWorkerMaxNum=10,DropItemAliveMaxHours=0.500000,bAutoResetGuildNoOnlinePlayers=True,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=False,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,ServerReplicatePawnCullDistance=10000.000000,bEnableGuildPlayerSelect=False,BanListURL="https://api.palworldgame.com/api/banlist.txt",bAutoResetGuildNoOnlinePlayers=True,BaseCampMaxNumInGuild=3)
```

:::caution Vérifiez les entrées existantes
Le format de configuration Palworld peut changer entre les mises à jour. Avant de sauvegarder, assurez-vous d’éditer la ligne `OptionSettings` déjà présente dans votre fichier au lieu de créer des entrées dupliquées ou conflictuelles.
:::

### Ajustements recommandés des valeurs

Si vous ne souhaitez pas remplacer toute la ligne, vous pouvez modifier uniquement les valeurs pertinentes dans votre configuration existante.

| Entrée | Valeur exemple | Pourquoi la changer |
|---|---:|---|
| `PalSpawnNumRate` | `0.8` | Réduit les apparitions de Pals sauvages |
| `DropItemMaxNum` | `2000` | Diminue l’encombrement des objets |
| `DropItemAliveMaxHours` | `0.5` | Supprime plus vite les objets au sol |
| `BaseCampMaxNum` | `64` | Réduit le nombre total de bases |
| `BaseCampMaxNumInGuild` | `3` | Limite l’expansion des bases de guilde |
| `BaseCampWorkerMaxNum` | `10` | Réduit la charge des travailleurs IA |
| `ServerReplicatePawnCullDistance` | `10000.0` | Diminue la distance de réplication |
| `bEnableInvaderEnemy` | `False` | Désactive la charge liée aux raids |
| `bEnableFastTravel` | `False` | Évite les freezes liés aux voyages rapides |
| `bAutoResetGuildNoOnlinePlayers` | `True` | Nettoie les bases de guildes inactives |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Définit la période de grâce d’inactivité |
| `MaxBuildingLimitNum` | `[your_limit]` | Restreint la construction excessive |
| `bIsPvP` | `False` | Évite la surcharge liée au PvP |
| `AutoSaveSpan` | `[your_value]` | Réduit la fréquence des sauvegardes si supporté par votre config actuelle |

:::danger La réinitialisation des guildes inactives supprime les bases
Si vous activez `bAutoResetGuildNoOnlinePlayers=True`, les guildes inactives peuvent être dissoutes automatiquement après le délai défini dans `AutoResetGuildTimeNoOnlinePlayers`. Cela peut supprimer définitivement les bases et structures appartenant aux joueurs inactifs.
:::

## Sauvegarder et appliquer les modifications

Après avoir édité le fichier, vous devez sauvegarder la configuration et redémarrer le serveur pour que les nouveaux paramètres soient pris en compte.

1. Sauvegardez les modifications dans `PalWorldSettings.ini`.
2. Retournez à l’administration de votre serveur de jeux.
3. Redémarrez le serveur Palworld.



:::info Redémarrage obligatoire
Un redémarrage est nécessaire après modification de `PalWorldSettings.ini`. Sans redémarrage, le serveur continuera d’utiliser les paramètres précédents.
:::

## Bonnes pratiques pour la performance à long terme

Les modifications manuelles aident, mais ne sont qu’une partie de l’optimisation globale du serveur.

### Utilisez des redémarrages automatiques quotidiens

Un redémarrage quotidien est une bonne pratique courante pour les serveurs Palworld car l’utilisation des ressources peut s’accumuler avec le temps.

- Créez un planning de redémarrage automatique dans l’administration ZAP-Hosting
- Choisissez un horaire avec peu d’activité des joueurs
- Informez vos joueurs à l’avance si votre communauté est active

### Limitez la croissance du monde

La cause principale de la baisse de performance sur les serveurs Palworld de longue durée est généralement la complexité du monde.

Pour réduire cela :

- baissez les limites de bases
- réduisez le nombre de travailleurs
- diminuez l’accumulation d’objets au sol
- réduisez les apparitions de Pals sauvages
- nettoyez soigneusement les guildes inactives
- envisagez de définir une limite de construction avec `MaxBuildingLimitNum`

### Testez les changements progressivement

N’appliquez pas de réductions extrêmes immédiatement sauf si votre serveur est déjà instable.

Un bon processus est :

1. Baissez d’abord les valeurs d’apparition et d’objets
2. Réduisez ensuite les limites de bases et travailleurs
3. Désactivez les fonctionnalités optionnelles à forte charge si besoin
4. Redémarrez et surveillez les performances après chaque série de modifications

:::tip Trouvez l’équilibre entre performance et gameplay
Les meilleurs réglages dépendent du type de serveur. Un petit serveur privé peut généralement garder des valeurs plus élevées, tandis qu’un grand serveur communautaire public a souvent besoin de limites plus strictes pour éviter les baisses de performance.
:::

## Conclusion

Félicitations, vous avez optimisé avec succès les performances de votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂