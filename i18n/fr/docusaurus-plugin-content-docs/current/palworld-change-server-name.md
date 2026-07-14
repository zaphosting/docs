---
id: palworld-change-server-name
title: "Palworld : Changer le nom du serveur"
description: "Apprenez à changer le nom de votre serveur Palworld et à mettre à jour le nom affiché dans le navigateur de serveurs en modifiant manuellement le fichier de configuration approprié. -> En savoir plus maintenant"
sidebar_label: Palworld : Changer le nom du serveur
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld utilise un fichier de configuration pour définir le nom du serveur affiché dans le navigateur de serveurs en jeu. Dans ce guide, vous apprendrez à modifier manuellement le nom affiché via l’interface web ZAP-Hosting et à appliquer correctement ce changement.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld dans l’interface web ZAP-Hosting et la permission de modifier ses fichiers de configuration.

:::info Configuration manuelle requise
Cette modification s’effectue en éditant manuellement la configuration du serveur Palworld. Le fichier concerné est accessible via l’administration de votre serveur de jeux dans la section `Configs`.
:::

## Ouvrir le fichier de configuration Palworld

Pour changer le nom du serveur, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’interface web ZAP-Hosting :

1. Ouvrez votre serveur de jeux **Palworld**.
2. Allez dans **Configs** dans l’administration du serveur.
3. Ouvrez le fichier `PalWorldSettings.ini`.

:::note Emplacement du fichier de configuration
Sur les serveurs dédiés Palworld, les paramètres concernés se trouvent généralement dans `PalWorldSettings.ini`. Dans l’interface ZAP-Hosting, vous devez modifier ce fichier via la section `Configs` plutôt que de changer les chemins de fichiers manuellement.
:::

## Modifier le nom du serveur

Dans `PalWorldSettings.ini`, cherchez la section `OptionSettings`. Le nom affiché dans le navigateur de serveurs est contrôlé par l’entrée `ServerName`.

Vous pouvez aussi définir une description du serveur avec `ServerDescription`.

### Exemple de configuration

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Description de votre serveur Palworld")
```

Si votre fichier contient déjà une ligne `OptionSettings=(...)` plus longue, vous n’avez qu’à modifier les valeurs existantes pour `ServerName` et éventuellement `ServerDescription`.

### Valeurs à modifier

| Clé de config | Description | Exemple de valeur |
| --- | --- | --- |
| `ServerName` | Nom affiché dans le navigateur de serveurs Palworld | `"zaphosting"` |
| `ServerDescription` | Texte de description optionnel affiché avec le serveur | `"Serveur survie public"` |

:::caution Ne modifiez pas les autres paramètres
`OptionSettings` contient souvent beaucoup d’autres réglages du serveur sur une seule ligne. Ne changez que les valeurs de `ServerName` et `ServerDescription` sauf si vous souhaitez modifier volontairement d’autres options.
:::

## Enregistrer les modifications

Après avoir modifié les valeurs :

1. Enregistrez le fichier `PalWorldSettings.ini` dans la section **Configs**.
2. Vérifiez que les guillemets et les virgules sont toujours correctement formatés.

### Exemple d’une ligne existante

Si votre fichier contient une ligne similaire à l’exemple ci-dessous, mettez à jour uniquement le texte concerné :

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="Serveur survie public",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

## Redémarrer le serveur

Après avoir enregistré la configuration, vous devez redémarrer votre serveur Palworld pour que le nouveau nom soit pris en compte.

### Appliquer la nouvelle configuration

Utilisez la fonction de redémarrage dans le panneau d’administration de votre serveur de jeux ZAP-Hosting.

| Action | Requis |
| --- | --- |
| Enregistrer `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Exécuter des commandes console supplémentaires | Non |

:::tip Délai de mise à jour du navigateur de serveurs
Après le redémarrage, le nouveau nom du serveur peut ne pas apparaître instantanément pour tous les joueurs dans le navigateur. Si besoin, patientez quelques minutes puis rafraîchissez la liste des serveurs.
:::

## Vérifier le nouveau nom du serveur

Une fois le serveur redémarré :

1. Lancez Palworld.
2. Ouvrez le navigateur de serveurs multijoueur.
3. Recherchez le nom que vous avez configuré dans `ServerName`.

Si l’ancien nom apparaît toujours, rouvrez `PalWorldSettings.ini` et vérifiez que :
- la valeur `ServerName` a bien été modifiée
- le fichier a été enregistré correctement
- le serveur a bien été redémarré après la modification

## Conclusion

Félicitations, vous avez changé avec succès le nom de votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂