---
id: palworld-set-a-password
title: "Palworld : Définir un mot de passe"
description: "Apprenez à définir un mot de passe pour votre serveur Palworld en modifiant manuellement la configuration du jeu et en appliquant correctement le changement. -> En savoir plus maintenant"
sidebar_label: "Palworld : Définir un mot de passe"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet de protéger votre serveur avec un mot de passe afin que seuls les joueurs autorisés puissent rejoindre. Dans ce guide, vous apprendrez à définir ou modifier manuellement le mot de passe du serveur dans la configuration de votre serveur de jeux ZAP-Hosting et à appliquer correctement ce mot de passe.



## Preparation

Avant de commencer, assurez-vous que :

- votre serveur de jeux Palworld est en ligne dans l’interface web ZAP-Hosting
- vous avez accès à l’administration du serveur de jeux
- vous connaissez le mot de passe que vous souhaitez utiliser pour l’accès au serveur

:::info Configuration manuelle requise
Pour Palworld, le mot de passe peut être configuré manuellement via les fichiers de configuration du serveur. Dans l’interface ZAP-Hosting, vous pouvez accéder à ces fichiers via l’administration de votre serveur de jeux sous `Configs`.
:::

## Ouvrir le fichier de configuration Palworld

Pour définir un mot de passe sur votre serveur Palworld, vous devez modifier le fichier `PalWorldSettings.ini`.

### Trouver le fichier dans l’interface ZAP-Hosting

1. Connectez-vous à l’interface web ZAP-Hosting.
2. Ouvrez l’administration de votre serveur de jeux **Palworld**.
3. Allez dans **Configs**.
4. Ouvrez le fichier `PalWorldSettings.ini`.

Ce fichier contient les paramètres principaux du serveur Palworld, y compris l’entrée qui contrôle si un mot de passe est requis pour rejoindre.

:::note But du fichier de configuration
Le fichier `PalWorldSettings.ini` stocke les options du serveur dans une seule ligne de configuration, généralement dans la section `OptionSettings=(...)`. Vous devez modifier la valeur `ServerPassword` à cet endroit.
:::

## Modifier le mot de passe du serveur

Une fois que vous avez ouvert `PalWorldSettings.ini`, cherchez l’entrée `ServerPassword`.

### Entrée de configuration requise

Utilisez la valeur suivante :

```ini
ServerPassword="[your_password]"
```

Remplacez `[your_password]` par le mot de passe que vous souhaitez que les joueurs saisissent pour rejoindre votre serveur.

Si le mot de passe est actuellement désactivé, la valeur peut ressembler à ceci :

```ini
ServerPassword=""
```

Une valeur vide signifie qu’aucun mot de passe d’accès n’est défini.

### Exemple de configuration

Dans Palworld, ce paramètre fait généralement partie du bloc `OptionSettings=(...)`. Cela peut ressembler à ceci :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="[your_password]",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Ne modifiez que la valeur du mot de passe
Ne changez que la valeur à l’intérieur de `ServerPassword="..."`. Ne supprimez pas les virgules, guillemets, crochets ou autres entrées dans la ligne `OptionSettings=(...)`, car cela pourrait empêcher le serveur de charger correctement la configuration.
:::

## Référence de configuration

Le tableau suivant montre le paramètre pertinent pour ce changement de mot de passe :

| Paramètre | Exemple de valeur | But |
| --- | --- | --- |
| `ServerPassword` | `ServerPassword="[your_password]"` | Demande aux joueurs de saisir un mot de passe avant de rejoindre le serveur |

### Recommandations pour le mot de passe

Lors du choix d’un mot de passe, gardez ces points en tête :

| Recommandation | Explication |
| --- | --- |
| Utilisez un mot de passe unique | Évitez de réutiliser un mot de passe d’un autre compte ou service |
| Évitez les mots trop simples | Les mots de passe faciles sont plus faciles à deviner |
| Partagez-le uniquement avec des joueurs de confiance | Toute personne ayant le mot de passe peut tenter de rejoindre |
| Stockez-le en sécurité | Un gestionnaire de mots de passe peut vous aider à le garder en sécurité |

:::tip Choisissez un mot de passe fort
Si vous prévoyez de gérer un serveur Palworld privé pour des amis ou une communauté restreinte, utilisez un mot de passe fort plutôt qu’un mot simple ou le nom du serveur. Cela réduit les tentatives d’accès non désirées.
:::

## Enregistrez les modifications et redémarrez le serveur

Après avoir modifié le mot de passe, enregistrez le fichier dans la section `Configs`.

### Appliquer le nouveau mot de passe

Pour que le changement de mot de passe soit pris en compte :

1. Enregistrez les modifications dans `PalWorldSettings.ini`.
2. Redémarrez votre serveur de jeux Palworld.

Un redémarrage est nécessaire car Palworld lit les paramètres du serveur depuis le fichier de configuration au démarrage. Sans redémarrage, le nouveau mot de passe risque de ne pas être appliqué.

:::info Redémarrage obligatoire
Après avoir modifié `ServerPassword`, vous devez redémarrer manuellement le serveur depuis l’administration du serveur de jeux ZAP-Hosting pour que le nouveau paramètre soit chargé.
:::

## Vérifiez le mot de passe

Une fois le redémarrage terminé, testez la configuration en rejoignant le serveur depuis le jeu Palworld.

### Points à vérifier

Lors de la connexion, confirmez que :

- le serveur demande désormais un mot de passe avant de rejoindre
- le mot de passe configuré fonctionne correctement
- les joueurs sans mot de passe ne peuvent pas accéder au serveur

Si le serveur ne demande pas de mot de passe, rouvrez `PalWorldSettings.ini` et vérifiez que :

- `ServerPassword` est présent dans la section `OptionSettings=(...)`
- la valeur n’est pas vide
- le fichier a bien été enregistré
- le serveur a été redémarré après la modification

:::note Visibilité du mot de passe
Le mot de passe est stocké en clair dans le fichier de configuration. Assurez-vous de ne partager l’accès à votre administration serveur qu’avec des utilisateurs de confiance.
:::

## Conclusion

Félicitations, vous avez réussi à définir un mot de passe pour votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂