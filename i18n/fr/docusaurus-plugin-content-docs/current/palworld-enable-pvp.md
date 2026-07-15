---
id: palworld-enable-pvp
title: "Palworld : Activer le PvP"
description: "Apprenez à activer le PvP dans Palworld, configurer le comportement de combat de base et appliquer les réglages PvP recommandés sur votre serveur. -> En savoir plus maintenant"
sidebar_label: "Activer le PvP"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld inclut un mode PvP qui permet aux joueurs de s’affronter et modifie le fonctionnement du combat de base et des interactions de guilde sur votre serveur. Dans ce guide, vous apprendrez à activer manuellement le PvP en éditant le fichier de configuration approprié dans l’administration de votre serveur de jeux ZAP-Hosting et à appliquer les réglages nécessaires.

:::caution Fonctionnalité en Test
Le PvP dans Palworld est considéré comme une fonctionnalité en test par le développeur du jeu. Les options de configuration et le comportement du gameplay peuvent évoluer lors des prochaines mises à jour.
:::

## Préparation

Avant de commencer, assurez-vous que :

- Vous avez accès à votre serveur de jeux Palworld via l’interface web ZAP-Hosting
- Votre serveur est arrêté ou peut être redémarré après les modifications
- Vous comprenez que le PvP modifie significativement le gameplay, notamment le combat entre joueurs, la défense des bases et la perte d’objets à la mort

:::info Accès à la Configuration
Pour les serveurs Palworld ZAP-Hosting, le fichier de configuration concerné est accessible via l’administration du serveur de jeux sous `Configs`.
:::

## Ouvrir le fichier de configuration Palworld

Pour activer le PvP, vous devez éditer le fichier `PalWorldSettings.ini`.

### Trouver le fichier dans l’interface ZAP-Hosting

1. Connectez-vous à l’interface web ZAP-Hosting.
2. Ouvrez votre serveur de jeux Palworld.
3. Allez dans `Configs` dans l’administration du serveur.
4. Ouvrez le fichier `PalWorldSettings.ini`.



:::note Format de Configuration
Les paramètres du serveur Palworld sont généralement stockés dans la section `OptionSettings=(...)` du fichier `PalWorldSettings.ini`. Vous devez ajouter ou modifier les clés nécessaires à l’intérieur de ce bloc de paramètres.
:::

## Activer les réglages PvP requis

Pour activer le PvP, assurez-vous que les trois paramètres suivants sont définis sur `True` dans `PalWorldSettings.ini`.

### Clés PvP requises

| Paramètre | Valeur requise | Description |
|---|---|---|
| `bIsPvP` | `True` | Active le mode PvP sur le serveur |
| `bEnablePlayerToPlayerDamage` | `True` | Permet les dégâts directs entre joueurs |
| `bEnableDefenseOtherGuildPlayer` | `True` | Autorise l’interaction défensive avec les joueurs d’autres guildes |

### Exemple de configuration

Ajoutez ces valeurs à votre ligne `OptionSettings=(...)`, ou modifiez les valeurs existantes si elles sont déjà présentes :

```ini
bIsPvP=True,
bEnablePlayerToPlayerDamage=True,
bEnableDefenseOtherGuildPlayer=True
```

:::tip Évitez les clés en double
Si un paramètre existe déjà dans `PalWorldSettings.ini`, modifiez la valeur existante au lieu d’ajouter la même clé une seconde fois. Les doublons peuvent provoquer des comportements inattendus ou compliquer le dépannage.
:::

## Réglages PvP recommandés

Une fois le PvP activé, vous pouvez aussi ajuster des paramètres supplémentaires pour une expérience PvP plus équilibrée. Les valeurs suivantes sont souvent recommandées pour les serveurs axés PvP.

### Valeurs suggérées

| Paramètre | Valeur recommandée | Description |
|---|---|---|
| `bAllowEnhanceStat_Health` | `False` | Empêche l’allocation de points de vie |
| `bAllowEnhanceStat_Attack` | `False` | Empêche l’allocation de points d’attaque |
| `bEnableFastTravel` | `True` | Maintient le voyage rapide activé |
| `bEnableFastTravelOnlyBaseCamp` | `True` | Limite le voyage rapide aux camps de base |
| `bExistPlayerAfterLogout` | `True` | Garde les joueurs dans le monde après déconnexion |
| `bEnableAimAssistPad` | `False` | Désactive l’aide à la visée pour manette |
| `DeathPenalty` | `All` | Fait tomber tous les objets et Pals à la mort |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `True` | Permet de récupérer les objets tombés d’autres joueurs |
| `bInvisibleOtherGuildBaseCampAreaFX` | `False` | Affiche les zones de base des autres guildes |
| `bBuildAreaLimit` | `True` | Aide à empêcher la construction dans les zones restreintes |
| `GuildPlayerMaxNum` | `4` | Limite la taille des guildes |
| `BaseCampMaxNumInGuild` | `2` | Limite le nombre de bases par guilde |
| `MaxBuildingLimitNum` | `1000` | Limite les structures par joueur |
| `GuildRejoinCooldownMinutes` | `60` | Définit le délai de réintégration en guilde |
| `BlockRespawnTime` | `5.0` | Définit le délai de réapparition de base |
| `RespawnPenaltyDurationThreshold` | `1800.0` | Temps avant réinitialisation de la pénalité de réapparition |
| `RespawnPenaltyTimeScale` | `2.0` | Multiplie la pénalité de réapparition après morts répétées |

### Exemple de bloc de réglages PvP

Pour utiliser les valeurs recommandées, incluez les entrées suivantes dans votre section `OptionSettings=(...)` :

```ini
bAllowEnhanceStat_Health=False,
bAllowEnhanceStat_Attack=False,
bEnableFastTravel=True,
bEnableFastTravelOnlyBaseCamp=True,
bExistPlayerAfterLogout=True,
bEnableAimAssistPad=False,
DeathPenalty=All,
bCanPickupOtherGuildDeathPenaltyDrop=True,
bInvisibleOtherGuildBaseCampAreaFX=False,
bBuildAreaLimit=True,
GuildPlayerMaxNum=4,
BaseCampMaxNumInGuild=2,
MaxBuildingLimitNum=1000,
GuildRejoinCooldownMinutes=60,
BlockRespawnTime=5.0,
RespawnPenaltyDurationThreshold=1800.0,
RespawnPenaltyTimeScale=2.0
```

## Restrictions et récompenses PvP optionnelles

Selon le niveau de compétition souhaité pour votre serveur PvP, vous pouvez aussi configurer des restrictions technologiques et des récompenses PvP.

### Restreindre les technologies de déplacement rapide

Vous pouvez restreindre certaines technologies liées au déplacement en configurant `DenyTechnologyList`.

| Paramètre | Exemple de valeur |
|---|---|
| `DenyTechnologyList` | `SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5` |

Exemple d’entrée :

```ini
DenyTechnologyList="SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5"
```

:::note Vérifiez la syntaxe existante
Le format de configuration Palworld peut varier selon la version du serveur et la structure actuelle de la ligne `OptionSettings=(...)`. Avant de sauvegarder, assurez-vous que votre entrée correspond au style syntaxique déjà utilisé dans votre fichier.
:::

### Configurer les récompenses PvP

Palworld inclut aussi des options de récompenses liées aux kills en PvP.

| Paramètre | Description |
|---|---|
| `bAdditionalDropItemWhenPlayerKillingInPvPMode` | Active les drops d’objets supplémentaires lors de kills PvP |
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Définit l’ID de l’objet à dropper |
| `AdditionalDropItemNumWhenPlayerKillingInPvPMode` | Définit la quantité d’objets à dropper |
| `bDisplayPvPItemNumOnWorldMap_BaseCamp` | Affiche le nombre d’objets PvP sur la carte mondiale pour les bases |
| `bDisplayPvPItemNumOnWorldMap_Player` | Affiche le nombre d’objets PvP sur la carte mondiale pour les joueurs |

Exemple de configuration :

```ini
bAdditionalDropItemWhenPlayerKillingInPvPMode=True,
AdditionalDropItemWhenPlayerKillingInPvPMode=PlayerDropItem,
AdditionalDropItemNumWhenPlayerKillingInPvPMode=1,
bDisplayPvPItemNumOnWorldMap_BaseCamp=True,
bDisplayPvPItemNumOnWorldMap_Player=True
```

:::caution Compatibilité des IDs d’objets
Si vous utilisez une valeur personnalisée pour `AdditionalDropItemWhenPlayerKillingInPvPMode`, assurez-vous que l’ID d’objet est valide pour votre version actuelle de Palworld. Un identifiant invalide peut empêcher la prise en compte du paramètre.
:::

## Ce qui change quand le PvP est activé

Après activation du PvP, le gameplay sur votre serveur change de plusieurs manières importantes. Selon les indications publiques actuelles sur le PvP dans Palworld, vous pouvez généralement vous attendre aux comportements suivants :

- Les joueurs peuvent s’infliger des dégâts mutuellement
- Entrer dans la base d’un autre joueur peut rendre ses Pals de base hostiles
- Les joueurs volant et les Pals montés peuvent subir plus de dégâts
- Les Pals invoqués et les Pals de base peuvent subir moins de dégâts
- Les joueurs peuvent accéder aux coffres appartenant à d’autres guildes
- Les dégâts des armes de mêlée contre les structures des autres joueurs peuvent être réduits
- Les Pals de base peuvent défendre une zone plus étendue
- La distance autorisée entre bases voisines peut augmenter
- Les joueurs peuvent recevoir des notifications lorsque leur base est attaquée
- La construction et la réparation peuvent être limitées pendant une attaque de base
- Certaines armes peuvent avoir une portée ou des dégâts modifiés en mode PvP

:::danger Avertissement sur l’impact du gameplay
Activer le PvP peut modifier significativement la progression, la sécurité des bases et la rétention des joueurs sur votre serveur. Si vous gérez un serveur public, il est recommandé d’informer vos joueurs avant d’appliquer ces changements.
:::

## Sauvegarder le fichier et redémarrer le serveur

Une fois l’édition de `PalWorldSettings.ini` terminée, sauvegardez le fichier dans la section `Configs` de ZAP-Hosting.

### Appliquer les modifications

Pour activer les nouveaux réglages PvP :

1. Sauvegardez les modifications dans `PalWorldSettings.ini`.
2. Redémarrez votre serveur Palworld depuis l’administration du serveur de jeux ZAP-Hosting.

Un redémarrage est nécessaire pour que les changements de configuration prennent effet.

:::info Aucune commande supplémentaire requise
Aucune commande supplémentaire en jeu ou dans la console n’est normalement nécessaire après l’édition de `PalWorldSettings.ini`. Un redémarrage complet du serveur est la seule étape requise pour appliquer la nouvelle configuration PvP.
:::

## Vérifier que le PvP est actif

Après le redémarrage du serveur, connectez-vous et testez le comportement en jeu.

### Vérifications de base

Vous pouvez vérifier la configuration en contrôlant que :

- Les joueurs peuvent s’infliger des dégâts
- Le comportement PvP lié aux bases est actif
- Les pénalités de mort et règles de loot correspondent à vos valeurs configurées
- Les restrictions optionnelles comme `DenyTechnologyList` fonctionnent comme prévu

Si les changements ne s’appliquent pas, rouvrez `PalWorldSettings.ini` et vérifiez :

- Les noms des paramètres mal orthographiés
- Les clés en double
- Les virgules ou format incorrects dans `OptionSettings=(...)`
- Les valeurs non sauvegardées correctement avant le redémarrage

## Conclusion

Félicitations, vous avez activé avec succès le PvP sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂