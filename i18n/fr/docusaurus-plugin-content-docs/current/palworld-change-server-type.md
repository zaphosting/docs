---
id: palworld-change-server-type
title: "Palworld : Changer le type de serveur"
description: "Apprenez à changer le type de votre serveur Palworld entre Linux et Windows, à mettre à jour le bon chemin de configuration, et à appliquer correctement le changement pour la compatibilité des mods. -> En savoir plus maintenant"
sidebar_label: "Changer le type de serveur"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs Palworld peuvent fonctionner avec différents types de serveurs, généralement Linux ou Windows, selon votre configuration d’hébergement et vos besoins en modding. Dans ce guide, vous apprendrez à changer le type de serveur dans l’interface ZAP-Hosting, à identifier le bon chemin du fichier de configuration ensuite, et à appliquer correctement le changement.



## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld dans l’interface web ZAP-Hosting et la permission d’arrêter et redémarrer le serveur.

:::info Informations importantes sur le changement de type de serveur
Changer le type de serveur de Linux à Windows, ou de Windows à Linux, peut affecter les chemins des fichiers, la compatibilité des mods, et les emplacements des configurations existantes. Le type Windows est souvent requis pour certains mods basés sur UE4SS.
:::

:::caution Vérifiez si une réinstallation est nécessaire
Selon la manière dont le produit Palworld est déployé sur votre service, changer le type de serveur peut nécessiter une réinstallation ou un redéploiement logiciel. Si l’option exacte n’est pas disponible dans votre interface actuelle, contactez le support avant de continuer.
:::

## Comprendre ce qui change quand vous changez le type de serveur

Changer le type de serveur ne signifie généralement pas modifier une valeur dans la configuration de gameplay Palworld elle-même. Le changement principal concerne l’environnement logiciel serveur sous-jacent, qui modifie aussi l’emplacement des fichiers de configuration actifs.

Pour Palworld, le fichier de configuration principal est généralement :

- `PalWorldSettings.ini`

Le dossier contenant ce fichier dépend du type de serveur sélectionné.

| Type de serveur | Chemin du dossier config | Fichier config principal |
| --- | --- | --- |
| Linux | `Pal/Saved/Config/LinuxServer/` | `PalWorldSettings.ini` |
| Windows | `Pal/Saved/Config/WindowsServer/` | `PalWorldSettings.ini` |

:::note Pourquoi c’est important
Si vous modifiez le fichier de configuration Linux alors que votre serveur fonctionne actuellement en type Windows, vos changements risquent de ne pas être pris en compte car le serveur lira le fichier dans le chemin spécifique à Windows.
:::

## Arrêter le serveur

Avant de changer le type de serveur, vous devez arrêter le serveur pour éviter les conflits de fichiers et les changements incomplets.

1. Connectez-vous à l’interface web ZAP-Hosting de votre serveur de jeux.
2. Ouvrez l’administration de votre serveur Palworld.
3. Arrêtez le serveur via les options de contrôle.

:::tip Recommandé avant modification
Il est conseillé de faire une sauvegarde avant de changer le type de serveur, surtout si vous utilisez déjà des mods ou avez modifié manuellement des fichiers de configuration.
:::

## Changer le type de serveur dans l’interface ZAP-Hosting

Le changement de type de serveur se fait généralement via les paramètres du produit ou du logiciel dans l’interface ZAP-Hosting, pas en modifiant une ligne dans `PalWorldSettings.ini`.

1. Dans l’administration de votre serveur Palworld, cherchez la section des paramètres du logiciel serveur ou du jeu.
2. Trouvez l’option qui contrôle le type de serveur ou la variante logicielle installée.
3. Changez le paramètre de `Linux` à `Windows`, ou de `Windows` à `Linux`, selon votre configuration cible.
4. Enregistrez le changement.



:::info Si vous ne trouvez pas l’option de type de serveur
Le libellé exact et l’emplacement de ce paramètre peuvent varier selon l’interface ZAP-Hosting ou la génération du produit. Si aucun sélecteur de type de serveur n’est visible, le changement peut nécessiter une réinstallation ou l’aide du support.
:::

## Modifier le bon fichier de configuration

Après avoir changé le type de serveur, vous devez vérifier que vous modifiez le fichier de configuration actif dans le bon dossier.

### Ouvrir la section Configs

Dans l’administration du serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur Palworld.
2. Allez dans `Configs`.
3. Naviguez vers le dossier correspondant au type de serveur sélectionné.

Utilisez l’un des chemins suivants :

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

Puis ouvrez :

- `PalWorldSettings.ini`

### Vérifier ou réappliquer vos paramètres

Si vous avez modifié des paramètres en utilisant l’autre type de serveur auparavant, ces changements peuvent n’exister que dans l’ancien dossier. Vous devez comparer les deux versions de `PalWorldSettings.ini` et réappliquer les valeurs nécessaires dans le fichier actif.

| Ce qu’il faut vérifier | Pourquoi c’est important |
| --- | --- |
| Paramètres personnalisés existants | Ils peuvent n’exister que dans le dossier de l’ancien type de serveur |
| Paramètres liés aux mods | Le type Windows est souvent utilisé pour le support des mods UE4SS |
| Valeurs de gameplay | Le serveur ne lit que le fichier du chemin spécifique au système actif |

:::caution Ne supposez pas que les deux fichiers sont synchronisés
Les dossiers de configuration Linux et Windows sont séparés. Changer le type de serveur ne garantit pas que vos paramètres personnalisés sont copiés entre les deux emplacements.
:::

## Vérifier les entrées de configuration

Le type de serveur lui-même n’est normalement pas contrôlé par une ligne dans `PalWorldSettings.ini`. Cependant, après le changement, vous devez confirmer que votre fichier de configuration actif contient bien les paramètres attendus.

Une structure typique de `PalWorldSettings.ini` ressemble à ceci :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,EnablePlayerToPlayerDamage=False,EnableFriendlyFire=False,EnableInvaderEnemy=True,ActiveUNKO=False,EnableAimAssistPad=True,EnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,AutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,IsMultiplay=True,IsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,EnableNonLoginPenalty=True,EnableFastTravel=True,IsStartLocationSelectByMap=True,ExistPlayerAfterLogout=False,EnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="[your_server_name]",ServerDescription="",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Remplacez les placeholders comme :

- `[your_server_name]` par le nom réel de votre serveur
- `[your_admin_password]` par votre mot de passe admin
- `[your_server_password]` par votre mot de passe de connexion si utilisé
- `[your_server_ip]` par l’adresse IP publique de votre serveur si nécessaire

:::note Aucune commande spéciale requise dans le fichier
Il n’existe pas d’entrée connue dans `PalWorldSettings.ini` qui change le type de serveur sous-jacent de Linux à Windows ou inversement. Ce changement est géré par l’environnement serveur installé dans l’interface d’hébergement.
:::

## Appliquer le changement

Une fois que vous avez changé le type de serveur et confirmé le bon fichier de configuration, vous devez appliquer la nouvelle configuration.

### Redémarrer le serveur

Redémarrez le serveur depuis l’interface web ZAP-Hosting après avoir sauvegardé vos modifications.

Dans la plupart des cas, un redémarrage normal suffit si le type de logiciel serveur a déjà été changé avec succès.

### Réinstaller si l’interface l’exige

Certaines configurations peuvent nécessiter une réinstallation après le changement de type logiciel. Si votre interface propose cette option, suivez-la attentivement et vérifiez ensuite que :

- le bon type de serveur est actif
- le bon chemin de configuration est utilisé
- vos valeurs dans `PalWorldSettings.ini` sont toujours présentes

:::danger La réinstallation peut écraser des fichiers
Si une réinstallation est nécessaire, les fichiers personnalisés ou mods peuvent être supprimés à moins d’avoir fait une sauvegarde préalable. Vérifiez toujours vos données de sauvegarde, mods et fichiers de configuration avant de confirmer une réinstallation.
:::

## Vérifier que le nouveau type de serveur est actif

Après le redémarrage, confirmez que le changement a réussi.

### Confirmer via le chemin de config

Ouvrez à nouveau `Configs` et vérifiez si le chemin actif correspond maintenant au type de serveur sélectionné :

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

### Confirmer la compatibilité des mods

Si vous êtes passé à Windows spécifiquement pour le modding UE4SS, vérifiez que vos fichiers de mods et la configuration associée correspondent bien à l’environnement serveur Windows.

### Contrôler le comportement du serveur

Vérifiez que le serveur démarre normalement et que vos paramètres attendus sont bien chargés.

| Point de vérification | Résultat attendu |
| --- | --- |
| Démarrage du serveur réussi | Pas d’échec au démarrage après changement de type |
| Chemin de config correct | Correspond au type Linux ou Windows |
| Paramètres personnalisés chargés | Le serveur utilise votre `PalWorldSettings.ini` modifié |
| Support des mods | Les exigences des mods Windows sont désormais utilisables si applicable |

## Dépannage

### L’option de type de serveur n’est pas visible

Si vous ne trouvez pas de paramètre pour changer le type de serveur, cela peut signifier que l’option n’est pas exposée dans votre interface produit actuelle. Dans ce cas, contactez le support ZAP-Hosting pour savoir si votre service Palworld peut être basculé entre Linux et Windows.

### Mes paramètres ne se sont pas appliqués après le changement

Cela arrive généralement quand le mauvais chemin de configuration a été modifié. Vérifiez si vous avez édité :

- `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`

ou

- `Pal/Saved/Config/WindowsServer/PalWorldSettings.ini`

en fonction du type de serveur actif.

### Les mods ne fonctionnent toujours pas

Passer au type Windows seul ne suffit pas toujours pour compléter la configuration des mods. Certains mods demandent des fichiers supplémentaires, des loaders ou des étapes d’installation manuelles au-delà du simple changement de type de serveur.

## Conclusion

Félicitations, vous avez réussi à changer le type de votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂