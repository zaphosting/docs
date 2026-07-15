---
id: palworld-max-players
title: "Palworld : Nombre max de joueurs"
description: "Apprenez à modifier le nombre max de joueurs sur votre serveur de jeux Palworld en éditant le bon fichier de config dans l’interface ZAP. -> En savoir plus maintenant"
sidebar_label: "Nombre max de joueurs"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet de contrôler combien de joueurs peuvent rejoindre votre serveur en même temps. Dans ce guide, vous apprendrez à modifier manuellement le nombre maximum de joueurs en éditant le fichier de configuration adéquat dans l’administration de votre serveur de jeux ZAP-Hosting.



## Preparation

Avant de commencer, assurez-vous d’avoir accès à l’administration de votre serveur de jeux Palworld via l’interface web ZAP-Hosting.

:::info Accès au fichier de configuration
Vous devez modifier la configuration du serveur manuellement via la section **Configs** de l’administration de votre serveur de jeux. Si vous ne savez pas encore comment accéder à votre serveur, ouvrez-le d’abord depuis l’interface web ZAP-Hosting.
:::

## Localiser le fichier de configuration Palworld

Pour changer le nombre maximum de joueurs, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’administration de votre serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur **Palworld**
2. Allez dans **Configs**
3. Ouvrez le fichier nommé `PalWorldSettings.ini`

Ce fichier contient les paramètres principaux du gameplay et du serveur, y compris le nombre maximum de joueurs autorisés.

:::note Fichier correct
Pour cette modification, vous devez uniquement éditer `PalWorldSettings.ini`. Si votre serveur contient d’autres fichiers, ne modifiez pas les valeurs non liées sauf si vous savez exactement ce que vous faites.
:::

## Modifier le nombre maximum de joueurs

Dans `PalWorldSettings.ini`, cherchez la section `OptionSettings` et trouvez l’entrée `ServerPlayerMaxNum`.

Le paramètre concerné est :

| Clé de config | Description | Valeur par défaut |
| --- | --- | --- |
| `ServerPlayerMaxNum` | Définit le nombre maximum de joueurs pouvant rejoindre le serveur | `32` |

Une entrée typique ressemble à ceci :

```ini
ServerPlayerMaxNum=32
```

Changez la valeur pour votre limite de joueurs préférée. Par exemple, pour autoriser 16 joueurs :

```ini
ServerPlayerMaxNum=16
```

Ou pour garder la configuration par défaut à 32 joueurs :

```ini
ServerPlayerMaxNum=32
```

:::caution Utilisez des valeurs supportées
Les serveurs dédiés Palworld utilisent généralement `32` comme maximum par défaut. Si vous mettez une valeur beaucoup plus élevée, cela peut affecter la stabilité ou les performances du serveur selon votre plan et la version actuelle du jeu. Si vous n’êtes pas sûr, commencez par une valeur plus basse et testez votre serveur.
:::

## Exemple de configuration

Selon la mise en forme de votre fichier, le paramètre peut apparaître dans une ligne `OptionSettings` plus longue. Dans ce cas, vous devez uniquement modifier la valeur de `ServerPlayerMaxNum`.

Exemple :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=16,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Si votre fichier utilise ce format, ne supprimez pas les virgules, crochets ou guillemets des autres entrées. Remplacez uniquement le nombre après `ServerPlayerMaxNum=`.

## Sauvegarder et appliquer les modifications

Après avoir changé la valeur :

1. Sauvegardez le fichier `PalWorldSettings.ini`
2. Redémarrez votre serveur Palworld

Un redémarrage est nécessaire pour que le nouveau nombre maximum de joueurs soit pris en compte.

| Action | Requis |
| --- | --- |
| Sauvegarder `PalWorldSettings.ini` | Oui |
| Exécuter des commandes console supplémentaires | Aucune commande supplémentaire vérifiée requise |
| Redémarrer le serveur | Oui |

:::tip Redémarrage obligatoire
Les modifications de configuration sur `ServerPlayerMaxNum` ne sont pas appliquées immédiatement pendant que le serveur tourne. Vous devez redémarrer le serveur pour que Palworld charge les paramètres mis à jour.
:::

## Vérifier la nouvelle limite de joueurs

Après le redémarrage, votre serveur doit utiliser la nouvelle limite maximale de joueurs.

Vous pouvez vérifier cela en :

- consultant les détails du serveur dans l’administration de votre serveur de jeux si affiché
- rejoignant le serveur avec plusieurs joueurs
- revérifiant la configuration actuelle dans `PalWorldSettings.ini`

Si le paramètre ne s’applique pas, ouvrez à nouveau le fichier et confirmez que :

- `ServerPlayerMaxNum=[votre_valeur]` est bien présent
- la mise en forme du fichier n’a pas été cassée
- le serveur a bien été redémarré après la sauvegarde

:::caution Syntaxe de configuration
Si vous supprimez accidentellement une virgule, un crochet ou une autre valeur dans la ligne `OptionSettings`, le serveur peut ignorer le paramètre ou ne pas charger correctement la configuration. Modifiez le fichier avec précaution et ne changez que la valeur requise.
:::

## Conclusion

Félicitations, vous avez modifié avec succès le nombre maximum de joueurs sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂