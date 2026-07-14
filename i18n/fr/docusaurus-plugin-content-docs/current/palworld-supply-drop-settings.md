---
id: palworld-supply-drop-settings
title: "Palworld : Paramètres des Supply Drops"
description: "Apprenez à modifier la fréquence des supply drops dans Palworld sur votre serveur de jeux Palworld en éditant manuellement le paramètre SupplyDropSpan. -> En savoir plus maintenant"
sidebar_label: Palworld : Paramètres des Supply Drops
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld inclut des supply drops qui apparaissent à intervalles réguliers et peuvent contenir des ressources utiles. Dans ce guide, vous apprendrez à modifier manuellement la fréquence des supply drops sur votre serveur de jeux Palworld ZAP-Hosting en éditant le fichier de configuration approprié et en appliquant correctement les changements.

## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld via l’interface web ZAP-Hosting et que le serveur est bien disponible dans votre administration serveur de jeux.

:::info Configuration manuelle requise
Cette configuration s’effectue en éditant manuellement la configuration du serveur Palworld. Vous devrez ouvrir le fichier de configuration via la section **Configs** dans votre administration serveur de jeux.
:::

## Localiser le fichier de configuration

Pour modifier l’intervalle des supply drops, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans votre administration serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur Palworld.
2. Allez dans **Configs**.
3. Ouvrez le fichier `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Emplacement du fichier de configuration
Chez ZAP-Hosting, les paramètres Palworld liés au gameplay sont généralement gérés via le fichier `PalWorldSettings.ini` dans la zone **Configs** de votre administration serveur. Si votre interface diffère légèrement, utilisez la liste des fichiers de config disponibles et cherchez spécifiquement `PalWorldSettings.ini`.
:::

## Modifier le paramètre des supply drops

Le paramètre utilisé pour la fréquence des supply drops est `SupplyDropSpan`.

Cette valeur définit l’intervalle entre les supply drops en **minutes**.

### Trouver la section correcte

Dans `PalWorldSettings.ini`, les paramètres du serveur Palworld sont généralement stockés dans la ligne `OptionSettings`. Vous devez localiser le bloc de paramètres existant et vérifier si `SupplyDropSpan` est déjà présent.

S’il existe déjà, modifiez sa valeur.

S’il n’existe pas, ajoutez-le à l’intérieur de la section `OptionSettings=(...)` avec les autres paramètres séparés par des virgules.

### Entrée de configuration

Utilisez le format suivant :

```ini
SupplyDropSpan=[votre_valeur]
```

Remplacez `[votre_valeur]` par le nombre de minutes que vous souhaitez utiliser.

### Exemples de valeurs

| Paramètre | Signification |
| --- | --- |
| `SupplyDropSpan=180` | Intervalle par défaut de 3 heures |
| `SupplyDropSpan=60` | Supply drops toutes les 1 heure |
| `SupplyDropSpan=360` | Supply drops toutes les 6 heures |
| `SupplyDropSpan=30` | Supply drops très fréquents |

Voici un exemple de comment le paramètre peut apparaître dans le bloc complet `OptionSettings` :

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",SupplyDropSpan=60)
```

:::caution Ne modifiez pas la syntaxe existante
Ne supprimez pas les virgules, crochets ou autres valeurs existantes dans la ligne `OptionSettings`. Une erreur de formatage dans cette ligne peut empêcher le serveur de charger correctement la configuration.
:::

## Sauvegarder et appliquer les modifications

Après avoir modifié la valeur :

1. Sauvegardez les changements dans `PalWorldSettings.ini`.
2. Redémarrez votre serveur Palworld depuis l’administration serveur de jeux ZAP-Hosting.

Un redémarrage est nécessaire car Palworld n’applique pas ce paramètre de gameplay en direct lorsque le serveur est déjà en fonctionnement.

### Une commande supplémentaire est-elle nécessaire ?

Aucune commande supplémentaire en jeu ou console n’est normalement requise pour ce changement spécifique. Le redémarrage du serveur est l’étape nécessaire pour charger la nouvelle valeur `SupplyDropSpan`.

| Action | Requis |
| --- | --- |
| Modifier `PalWorldSettings.ini` | Oui |
| Ajouter ou modifier `SupplyDropSpan` | Oui |
| Exécuter une commande console supplémentaire | Non |
| Redémarrer le serveur après sauvegarde | Oui |

## Vérifier le paramètre

Une fois le serveur redémarré, le nouvel intervalle des supply drops devrait être actif.

Comme ce paramètre contrôle des événements mondiaux temporisés, vous devrez peut-être attendre le prochain cycle d’apparition pour confirmer pleinement le changement en jeu. Si vous avez choisi un intervalle plus court comme `60` ou `30`, la vérification sera plus rapide.

:::tip Tester les changements plus rapidement
Si vous voulez vérifier que le paramètre fonctionne sans attendre plusieurs heures, définissez temporairement `SupplyDropSpan=30`. Après test, vous pourrez le remettre à la valeur longue durée souhaitée.
:::

## Dépannage

### Le paramètre ne s’applique pas

Si la fréquence des supply drops ne semble pas changer, vérifiez les points suivants :

- Assurez-vous que `SupplyDropSpan` est écrit exactement comme indiqué
- Confirmez que la valeur est bien dans la section `OptionSettings=(...)`
- Vérifiez qu’il n’y a pas de virgules cassées ou de crochets manquants
- Redémarrez le serveur après avoir sauvegardé le fichier

### Le serveur a des erreurs de configuration

Si le serveur ne démarre plus après modification, restaurez la configuration précédente et vérifiez soigneusement la syntaxe.

:::danger Mauvais formatage INI
Palworld stocke de nombreux paramètres de gameplay dans une seule ligne `OptionSettings`. Même un seul caractère mal placé peut casser la config. Relisez toujours vos modifications avant de sauvegarder.
:::

## Conclusion

Félicitations, vous avez modifié avec succès les paramètres des supply drops dans Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂