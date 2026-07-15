---
id: palworld-faster-egg-hatching
title: "Palworld : Accélérer l’éclosion des œufs"
description: "Apprenez à réduire le temps d’éclosion des œufs dans Palworld en modifiant le paramètre d’éclosion du serveur Palworld pour des résultats plus rapides. -> En savoir plus maintenant"
sidebar_label: "Accélérer l’éclosion des œufs"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans Palworld, le temps d’éclosion des œufs est contrôlé par une valeur de configuration serveur. Dans ce guide, vous apprendrez à réduire ce temps d’éclosion sur votre serveur de jeux Palworld ZAP-Hosting en modifiant le bon fichier de config et en appliquant correctement le changement.



## Préparation

Avant de commencer, assurez-vous que :

- vous avez accès à l’interface web de votre serveur de jeux ZAP-Hosting
- votre serveur Palworld est disponible dans l’administration du serveur de jeux
- vous pouvez modifier les fichiers dans la section **Configs**

:::info Accès au fichier de configuration
Pour Palworld chez ZAP-Hosting, les paramètres serveur pertinents peuvent être modifiés via l’administration du serveur de jeux dans la section **Configs**. Pour cette tâche, vous devez modifier le fichier `PalWorldSettings.ini`.
:::

## Comprendre le paramètre d’éclosion des œufs

Palworld utilise le paramètre `PalEggDefaultHatchingTime` pour définir le temps de base d’éclosion des œufs en heures. Une valeur plus basse signifie que les œufs éclosent plus vite.

Selon les références actuelles de configuration serveur Palworld, la valeur par défaut est `72`, ce qui représente 72 heures pour un œuf énorme. Les autres types d’œufs sont aussi basés sur cette valeur.

| Clé de config | Valeur par défaut | Description |
| --- | --- | --- |
| `PalEggDefaultHatchingTime` | `72.000000` | Temps de base d’éclosion des œufs en heures |

:::note Fonctionnement du paramètre
Cette valeur impacte le processus général d’éclosion des œufs sur votre serveur. Si vous la réduisez, l’éclosion sera plus rapide pour tous les joueurs utilisant des incubateurs.
:::

## Ouvrir le fichier de configuration Palworld

Commencez par accéder au bon fichier de configuration dans l’interface ZAP-Hosting.

### Naviguer vers la section Configs

Ouvrez l’administration de votre serveur de jeux Palworld et allez dans la section **Configs**. Là, localisez et ouvrez le fichier nommé :

```ini
PalWorldSettings.ini
```

C’est le fichier qui contient les entrées de configuration gameplay pour votre serveur Palworld, y compris le paramètre du temps d’éclosion des œufs.



## Modifier le temps d’éclosion des œufs

Une fois que vous avez ouvert `PalWorldSettings.ini`, cherchez la ligne `OptionSettings`. Palworld stocke de nombreux paramètres gameplay dans cette section.

### Modifier la clé de config requise

Trouvez l’entrée suivante :

```ini
PalEggDefaultHatchingTime=72.000000
```

Changez la valeur pour un nombre plus bas afin d’accélérer l’éclosion des œufs.

Par exemple :

```ini
PalEggDefaultHatchingTime=24.000000
```

Cela réduirait le temps de base d’éclosion des œufs de 72 heures à 24 heures.

### Valeurs d’exemple

Vous pouvez utiliser différentes valeurs selon la rapidité souhaitée pour l’éclosion sur votre serveur.

| Valeur | Résultat |
| --- | --- |
| `72.000000` | Temps d’éclosion par défaut |
| `48.000000` | Réduction plus lente, gameplay plus équilibré |
| `24.000000` | Éclosion beaucoup plus rapide |
| `12.000000` | Éclosion très rapide |
| `1.000000` | Éclosion extrêmement rapide |

:::caution Utilisez des valeurs réalistes
Des valeurs très basses peuvent modifier fortement l’équilibre du gameplay. Pour une progression plus naturelle, commencez avec une valeur modérée comme `24.000000` ou `48.000000`.
:::

### Exemple de snippet de configuration

Selon votre configuration actuelle, le paramètre apparaîtra dans le bloc `OptionSettings`. Un exemple typique ressemble à ceci :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=24.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,BaseCampMaxNumInGuild=4)
```

:::tip Modifier la bonne entrée
Si la clé `PalEggDefaultHatchingTime` existe déjà, modifiez la valeur existante au lieu d’ajouter une entrée en double. Des valeurs dupliquées dans le même bloc `OptionSettings` peuvent entraîner l’ignorance ou l’écrasement des paramètres.
:::

## Sauvegarder et appliquer les modifications

Après avoir modifié la valeur, sauvegardez le fichier `PalWorldSettings.ini` dans l’interface ZAP-Hosting.

### Redémarrer le serveur

Une fois le fichier sauvegardé, redémarrez votre serveur Palworld pour que le nouveau temps d’éclosion soit pris en compte.

:::info Redémarrage requis
La configuration mise à jour ne sera appliquée qu’après le redémarrage du serveur.
:::

## Comportement important pour les œufs déjà en incubation

Si des œufs sont déjà en incubation, la nouvelle valeur d’éclosion ne s’applique pas de manière fiable à ces timers actifs. En pratique, vous devez retirer et relancer le processus d’incubation des œufs concernés pour appliquer le nouveau taux.

| Situation | Action requise |
| --- | --- |
| Nouveaux œufs placés après le changement | Aucune action supplémentaire après redémarrage |
| Œufs déjà en incubation avant le changement | Redémarrer l’incubation pour ces œufs |

:::note Timers d’incubation existants
Si vous modifiez le temps d’éclosion et ne voyez pas le résultat attendu, vérifiez si l’œuf était déjà en incubation avant le changement de configuration.
:::

## Conclusion

Félicitations, vous avez réussi à réduire le temps d’éclosion des œufs sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂