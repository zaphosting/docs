---
id: palworld-increase-work-speed
title: "Palworld : Augmenter la vitesse de travail"
description: "Apprenez à augmenter la vitesse de travail dans Palworld en modifiant le paramètre WorkSpeedRate pour accélérer le travail des joueurs et des Pals sur votre serveur. -> En savoir plus maintenant"
sidebar_label: Palworld : Augmenter la vitesse de travail
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet d’ajuster la rapidité avec laquelle les joueurs et les Pals accomplissent les tâches liées à la base en modifiant une valeur de configuration serveur. Dans ce guide, vous apprendrez comment augmenter la vitesse de travail sur votre serveur Palworld ZAP-Hosting en éditant le bon fichier de configuration et en appliquant correctement les modifications.



## Preparation

Avant de commencer, assurez-vous d’avoir accès à l’administration de votre serveur de jeux Palworld via l’interface web ZAP-Hosting.

:::info Configuration manuelle requise
Cette configuration se fait manuellement via l’éditeur de configuration. Vous devez modifier vous-même le fichier de configuration du serveur Palworld dans la section `Configs` de l’administration de votre serveur de jeux.
:::

## Ouvrir le fichier de configuration Palworld

Pour modifier la vitesse de travail, vous devez éditer le fichier `PalWorldSettings.ini`.

### Où trouver le fichier

1. Connectez-vous au site ZAP-Hosting.
2. Ouvrez l’administration de votre serveur de jeux **Palworld**.
3. Allez dans **Configs**.
4. Ouvrez le fichier nommé `PalWorldSettings.ini`.

Ce fichier contient les paramètres de gameplay qui contrôlent les taux et multiplicateurs pour votre serveur Palworld.

:::note Emplacement du fichier de configuration
Chez ZAP-Hosting, le fichier concerné par cette modification est accessible directement via l’administration de votre serveur de jeux sous `Configs`. Si plusieurs fichiers de configuration sont affichés, assurez-vous d’éditer `PalWorldSettings.ini`.
:::

## Modifier le paramètre de vitesse de travail

Le paramètre utilisé pour augmenter la vitesse de travail est `WorkSpeedRate`.

### À quoi sert ce paramètre

`WorkSpeedRate` contrôle la rapidité avec laquelle les joueurs et les Pals effectuent les tâches liées à la base. La valeur par défaut est généralement `1.0`, ce qui correspond à la vitesse normale.

Des valeurs plus élevées augmentent le multiplicateur de vitesse :

| Clé de config | Valeur par défaut | Exemple de valeur | Effet |
| --- | --- | --- | --- |
| `WorkSpeedRate` | `1.0` | `2.0` | Vitesse de travail doublée |
| `WorkSpeedRate` | `1.0` | `10.0` | Vitesse de travail très rapide |

### Modifier la valeur

Cherchez la ligne `OptionSettings` dans `PalWorldSettings.ini`. L’entrée `WorkSpeedRate` se trouve dans ce bloc de paramètres.

Si l’entrée existe déjà, modifiez sa valeur. Par exemple :

```ini
WorkSpeedRate=1.000000
```

Changez-la pour une valeur plus élevée comme :

```ini
WorkSpeedRate=2.000000
```

Pour un résultat beaucoup plus rapide, vous pouvez utiliser un multiplicateur plus élevé comme :

```ini
WorkSpeedRate=10.000000
```

### Exemple d’extrait de configuration

Selon le contenu actuel de votre fichier, le paramètre peut apparaître dans une ligne `OptionSettings` plus longue similaire à ceci :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=2.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Modifier la syntaxe existante avec précaution
`PalWorldSettings.ini` utilise un format strict. Veillez à ne modifier que la valeur de `WorkSpeedRate` et à ne pas supprimer de virgules, crochets ou guillemets dans la ligne `OptionSettings` environnante.
:::

## Sauvegarder et redémarrer le serveur

Après avoir modifié le fichier, vous devez enregistrer les changements et redémarrer votre serveur Palworld.

### Appliquer les modifications

1. Enregistrez le fichier `PalWorldSettings.ini` mis à jour.
2. Redémarrez votre serveur de jeux Palworld depuis l’administration ZAP-Hosting.

Un redémarrage est nécessaire car Palworld lit ces paramètres de gameplay au démarrage du serveur. La nouvelle valeur de vitesse de travail ne sera pas prise en compte correctement tant que le serveur n’aura pas redémarré.

| Action | Requis |
| --- | --- |
| Sauvegarder `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Commande console supplémentaire | Non |

:::tip Test recommandé
Commencez avec une valeur modérée comme `2.0` et testez le résultat en jeu. Des valeurs très élevées peuvent accélérer la progression bien plus que prévu, ce qui peut déséquilibrer votre expérience de jeu.
:::

## Vérifier la nouvelle vitesse de travail

Une fois le serveur de nouveau en ligne, rejoignez votre serveur Palworld et testez les activités liées au travail à votre base.

Vous devriez constater que les joueurs et les Pals accomplissent les tâches plus rapidement qu’avant. Si vous ne voyez aucun changement, rouvrez `PalWorldSettings.ini` et vérifiez que :

- `WorkSpeedRate` est présent
- la valeur est correctement définie
- le fichier a bien été sauvegardé
- le serveur a été complètement redémarré après la modification

:::note Équilibre du gameplay
Augmenter la vitesse de travail peut modifier significativement la rapidité de développement de votre base. Pour une expérience équilibrée, augmentez la valeur progressivement plutôt que de définir une vitesse très élevée dès le départ.
:::

## Conclusion

Félicitations, vous avez augmenté avec succès la vitesse de travail sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂