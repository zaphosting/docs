---
id: palworld-max-workers
title: "Palworld : Nombre max de travailleurs"
description: "Apprenez à modifier le paramètre max workers de Palworld en éditant BaseCampWorkerMaxNum, incluant la limite max par défaut et les limites vanilla sûres pour les travailleurs par base. -> En savoir plus maintenant"
sidebar_label: "Nombre max de travailleurs"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet de modifier le nombre maximum de Pals travailleurs assignés à chaque camp de base sur votre serveur. Dans ce guide, vous apprendrez à éditer le fichier de configuration approprié dans l’interface web ZAP-Hosting, ajuster la valeur `BaseCampWorkerMaxNum` et appliquer correctement la modification.



## Préparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld via le panneau d’administration de serveur de jeux ZAP-Hosting.

:::info Accès à la configuration requis
Vous devez avoir accès à l’administration web de votre serveur pour pouvoir ouvrir la section **Configs** et éditer manuellement les fichiers de configuration Palworld.
:::

## Comprendre le paramètre Max Workers

Le paramètre Palworld responsable du nombre max de travailleurs est `BaseCampWorkerMaxNum`. Cette option contrôle combien de Pals peuvent travailler dans chaque camp de base individuel.

| Paramètre | Fichier de config | Fonction | Valeur par défaut | Maximum vanilla |
| --- | --- | --- | --- | --- |
| `BaseCampWorkerMaxNum` | `PalWorldSettings.ini` | Définit le nombre max de Pals travailleurs par camp de base | `15` | `50` |

:::note Limite Vanilla
La documentation publique actuelle indique que le maximum normal en jeu est `50`. Les valeurs supérieures à `50` nécessitent généralement des mods et ne font pas partie de la configuration vanilla standard.
:::

:::caution Impact sur les performances
Augmenter le nombre de travailleurs peut augmenter l’utilisation CPU et mémoire car plus de Pals seront actifs dans vos bases. Si vous utilisez une valeur élevée, surveillez les performances de votre serveur après le changement.
:::

## Ouvrir le fichier de configuration Palworld

Pour modifier le paramètre max workers, vous devez éditer le fichier `PalWorldSettings.ini`.

### Trouver le fichier dans l’interface ZAP-Hosting

Ouvrez l’administration de votre serveur de jeux Palworld et naviguez vers :

- `Configs`
- `PalWorldSettings.ini`

C’est le fichier de configuration où sont stockés les paramètres de gameplay de votre serveur Palworld.



## Modifier la valeur BaseCampWorkerMaxNum

Une fois que vous avez ouvert `PalWorldSettings.ini`, cherchez la ligne `OptionSettings`. Les paramètres du serveur Palworld sont généralement stockés sous forme de paires clé-valeur séparées par des virgules dans cette section.

### Modifier l’entrée de configuration

Trouvez la clé suivante :

```ini
BaseCampWorkerMaxNum=15
```

Changez la valeur par le nombre souhaité. Par exemple, pour autoriser `20` Pals travailleurs par base, utilisez :

```ini
BaseCampWorkerMaxNum=20
```

### Exemple de configuration

Selon votre fichier actuel, le paramètre apparaîtra généralement dans une entrée `OptionSettings` plus longue similaire à celle-ci :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=20,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,bHardcore=False,bPalLost=False,bRawData=False)
```

:::tip Modifier uniquement la valeur nécessaire
Ne changez que `BaseCampWorkerMaxNum` sauf si vous souhaitez intentionnellement ajuster d’autres paramètres de gameplay. Cela évite les erreurs de configuration accidentelles.
:::

## Valeurs recommandées

Vous pouvez choisir n’importe quelle valeur adaptée à votre style de jeu, tant qu’elle reste dans les limites vanilla supportées.

| Valeur | Résultat | Recommandation |
| --- | --- | --- |
| `15` | Limite par défaut des travailleurs Palworld | Idéal pour un gameplay standard |
| `20` à `30` | Automatisation accrue des bases | Bon équilibre pour la plupart des serveurs privés |
| `40` à `50` | Nombre très élevé de travailleurs | À utiliser uniquement si votre serveur a assez de ressources |
| Au-dessus de `50` | Comportement non standard vanilla | Nécessite généralement des mods et n’est pas recommandé sans tests |

## Sauvegarder et appliquer les modifications

Après avoir modifié la valeur, sauvegardez le fichier `PalWorldSettings.ini` dans l’éditeur de configuration ZAP-Hosting.

### Redémarrer le serveur

Une fois le fichier sauvegardé, redémarrez votre serveur Palworld pour que le nouveau paramètre max workers soit pris en compte.

:::info Redémarrage requis
Les modifications dans `PalWorldSettings.ini` ne sont pas appliquées immédiatement pendant que le serveur tourne. Vous devez redémarrer le serveur après avoir sauvegardé le fichier.
:::

## Vérifier la nouvelle limite de travailleurs

Après le redémarrage du serveur, connectez-vous à votre serveur Palworld et vérifiez un de vos camps de base. Vous devriez maintenant pouvoir assigner des Pals travailleurs jusqu’à la nouvelle limite configurée.

Si le changement ne semble pas fonctionner, vérifiez les points suivants :

| Vérification | À contrôler |
| --- | --- |
| Fichier correct | Vous avez bien édité `PalWorldSettings.ini` |
| Clé correcte | `BaseCampWorkerMaxNum` est présente et correctement orthographiée |
| Syntaxe valide | La ligne `OptionSettings` n’a pas été cassée |
| Redémarrage effectué | Le serveur a bien été redémarré après la sauvegarde |
| Plage de valeur | La valeur est dans la limite vanilla normale de `50` |

:::caution Syntaxe de configuration
Les entrées de configuration Palworld sont sensibles au formatage. Si vous supprimez accidentellement des virgules, crochets ou autres parties de la ligne `OptionSettings`, le serveur peut ignorer le paramètre ou ne pas le charger correctement.
:::

## Conclusion

Félicitations, vous avez modifié avec succès le nombre maximum de travailleurs par camp de base sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂