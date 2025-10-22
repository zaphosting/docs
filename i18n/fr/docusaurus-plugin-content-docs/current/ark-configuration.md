---
id: ark-configuration
title: "ARK : Configuration du serveur"
description: "Découvrez comment optimiser les paramètres de votre serveur de jeux ARK pour une meilleure expérience et personnalisation → En savoir plus maintenant"
sidebar_label: Configuration du serveur
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Configuration du serveur

La configuration d’un **serveur de jeux ARK** peut parfois sembler confuse et décourageante pour certains. Mais il y a une raison à cela. ARK offre énormément d’options de configuration pour le jeu. De plus, la configuration se fait dans différents fichiers, où il faut aussi faire attention à quels commandes vont dans quel fichier. Dans ce guide, on veut vous donner une meilleure vue d’ensemble sur comment fonctionne la configuration d’un serveur de jeux ARK.

![](https://screensaver01.zap-hosting.com/index.php/s/oQ5BbazkfD3PjgK/preview)

<InlineVoucher />

## Différences entre les fichiers de configuration

La configuration du **serveur de jeux ARK** se fait via les fichiers de configuration **GameUserSettings.ini** et **Game.ini**. Vous pouvez les modifier soit via notre **interface web** sous **Configs**, soit via **FTP**.

| Fichier de configuration | Interface web                                               | FTP                                     |
| ------------------------ | ----------------------------------------------------------- | --------------------------------------- |
| GameUserSettings.ini     | `Administration du serveur de jeux -> Configs -> GameUserSettings.ini` | `ShooterGame/Saved/Config/LinuxServer/` |
| Game.ini                 | `Administration du serveur de jeux -> Configs -> Game.ini`  | `ShooterGame/Saved/Config/LinuxServer/` |

Le fichier de configuration **GameUserSettings.ini** contient des options pour le client de jeu et pour le serveur. Les options pour le client ne sont pas utilisées par le serveur. Les options serveur sont spécifiées dans la section **[ServerSettings]**, généralement à la fin du fichier. Pour des modifications avancées, comme changer les points d’engramme ou l’XP gagnée par niveau, désactiver certains contenus ou personnaliser les préférences des joueurs, on utilise le fichier de configuration **Game.ini**.

## Configuration

On vous explique maintenant les deux fichiers de configuration. On va détailler les commandes les plus courantes et leur fonctionnement.

## Configuration : Carte

ARK propose différentes cartes sur lesquelles vous pouvez jouer sur le serveur. Vous pouvez choisir la carte que vous voulez dans l’interface web sous les paramètres.

| Cartes         | Date de sortie | Nom de commande     |
| -------------- | -------------- | ------------------- |
| The Island     | 02.06.2015     | `TheIsland`         |
| The Center     | 17.05.2016     | `TheCenter`         |
| Scorched Earth | 01.09.2016     | `ScorchedEarth_P`   |
| Ragnarok       | 12.06.2017     | `Ragnarok`          |
| Aberration     | 12.12.2017     | `Aberration_P`      |
| Extinction     | 06.11.2018     | `Extinction`        |
| Valguero       | 18.06.2019     | `Valguero_P`        |
| Genesis        | 25.02.2020     | `Genesis`           |
| Crystal Isles  | 11.06.2020     | `CrystalIsles`      |

Il suffit d’entrer le nom de commande de la carte dans le champ **Map** et elle sera chargée au prochain démarrage de votre serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/93JNW5Hbpf35RTJ/preview)

## Configuration : GameUserSettings.ini

### [ServerSettings]

**allowThirdPersonPlayer**

Cette commande définit si la perspective à la 3e personne doit être activée ou non.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     |        0          |       0/1        |

**AllowCaveBuildingPvE**

Cette commande définit si la construction dans les grottes est autorisée (en mode PVE) ou non.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     |        0          |       0/1        |

**alwaysNotifyPlayerJoined**

Cette commande définit si les joueurs reçoivent une notification quand un joueur rejoint le serveur.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     |        0          |       0/1        |

**alwaysNotifyPlayerLeft**

Cette commande définit si les joueurs reçoivent une notification quand un joueur quitte le serveur.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     |        0          |       0/1        |

**bAllowFlyerCarryPvE**

Cette commande définit si les joueurs peuvent porter des dinosaures avec un dinosaure volant ou non.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     |        0          |       0/1        |

**bDisableStructureDecayPvE**

Cette commande désactive la dégradation progressive des constructions des joueurs.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     |        0          |       0/1        |

**DayCycleSpeedScale**

Cette commande définit le facteur d’échelle pour le cycle jour/nuit dans ARK, contrôlant la fréquence à laquelle le jour devient nuit et vice versa. La valeur par défaut 1 correspond à la même vitesse que le mode solo (et les serveurs officiels). Une valeur inférieure à 1 ralentit le cycle, une valeur supérieure l’accélère. 1 minute réelle équivaut à environ 28 minutes en jeu. Pour un cycle jour/nuit d’environ 24 heures en jeu, utilisez la valeur 0.035.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**DayTimeSpeedScale**

Cette commande définit le facteur d’échelle pour le passage du temps durant la journée. Elle détermine la longueur relative du jour par rapport à la nuit (définie par NightTimeSpeedScale). Réduire cette valeur allonge la durée du jour.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**NightTimeSpeedScale**

Cette commande définit le facteur d’échelle pour le passage du temps durant la nuit. Elle détermine la longueur relative de la nuit par rapport au jour (défini par DayTimeSpeedScale). Réduire cette valeur allonge la durée de la nuit.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**DinoCharacterFoodDrainMultiplier**

Cette commande définit la consommation de nourriture d’un dinosaure. Une valeur plus élevée augmente la faim (les dinos deviennent plus affamés). Cela affecte aussi le temps de dressage.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**DinoCharacterHealthRecoveryMultiplier**

Cette commande définit la régénération de santé d’un dinosaure. Une valeur plus élevée accélère la régénération, une valeur plus basse la ralentit.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**DinoCharacterStaminaDrainMultiplier**

Cette commande définit la vitesse à laquelle un dinosaure se fatigue. Une valeur plus élevée accélère la fatigue, une valeur plus basse la ralentit.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**DinoCountMultiplier**

Cette commande définit combien de dinosaures doivent apparaître. Une valeur plus élevée augmente la probabilité d’apparition, une valeur plus basse la diminue.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**DinoDamageMultiplier**

Cette commande définit les dégâts infligés par un dinosaure. Une valeur plus élevée augmente les dégâts, une valeur plus basse les diminue.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**DinoResistanceMultiplier**

Cette commande définit la résistance d’un dinosaure. Une valeur plus élevée augmente sa résistance.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**globalVoiceChat**

Cette commande définit si le chat vocal global doit être activé sur le serveur ou non.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     |        0          |       0/1        |

**HarvestAmountMultiplier**

Cette commande définit la quantité de ressources récoltées. Une valeur plus élevée signifie plus de ressources, une valeur plus basse moins.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**HarvestHealthMultiplier**

Cette commande définit la santé des ressources récoltables. Une valeur plus élevée augmente la quantité de matériaux récoltés par coup.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**noTributeDownloads**

Cette commande interdit le téléchargement des personnages de jeu depuis le serveur.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**PreventDownloadSurvivors**

Cette commande empêche le téléchargement des personnages survivants depuis le serveur.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**PreventDownloadItems**

Cette commande empêche le téléchargement des objets depuis le serveur.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**PreventDownloadDinos**

Cette commande empêche le téléchargement des dinosaures depuis le serveur.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**PlayerCharacterFoodDrainMultiplier**

Cette commande définit la vitesse à laquelle un joueur a faim. Augmenter la valeur accélère la faim, la diminuer la ralentit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**PlayerCharacterHealthRecoveryMultiplier**

Cette commande définit la vitesse de régénération de santé d’un joueur. Augmenter la valeur accélère la guérison, la diminuer la ralentit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**PlayerCharacterStaminaDrainMultiplier**

Cette commande définit la vitesse à laquelle un joueur se fatigue. Augmenter la valeur accélère la fatigue, la diminuer la ralentit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**PlayerCharacterWaterDrainMultiplier**

Cette commande définit la vitesse à laquelle un joueur a soif. Augmenter la valeur accélère la soif, la diminuer la ralentit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**PlayerDamageMultiplier**

Cette commande définit les dégâts infligés par un joueur. Augmenter la valeur augmente les dégâts, la diminuer les réduit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**PlayerResistanceMultiplier**

Cette commande définit la résistance d’un joueur. Augmenter la valeur augmente la résistance, la diminuer la réduit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**proximityChat**

Cette commande définit si le chat local doit être activé sur le serveur ou non.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (désactivé)     |       0/1        |

**ResourceNoReplenishRadiusPlayers**

Cette commande définit la distance entre joueurs et ressources dans laquelle les ressources ne repoussent pas. Augmenter la valeur augmente le rayon, diminuer la réduit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**ResourceNoReplenishRadiusStructures**

Cette commande définit la distance entre structures et ressources dans laquelle les ressources ne repoussent pas. Augmenter la valeur augmente le rayon, diminuer la réduit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**ResourcesRespawnPeriodMultiplier**

Cette commande définit le multiplicateur pour la vitesse de réapparition des ressources. Augmenter la valeur accélère la réapparition, diminuer la la ralentit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**ServerAdminPassword**

Cette commande définit le mot de passe pour se connecter en tant qu’admin. Plus d’infos dans notre guide : [Devenir admin](ark-becomeadmin.md)

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     String     |       N/A         |    Libre        |

**ServerCrosshair**

Cette commande définit si une réticule doit être affichée au joueur ou non.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (désactivé)     |       0/1        |

**serverForceNoHud**

Cette commande définit si les contrôles en jeu doivent être affichés au joueur ou non.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (désactivé)     |       0/1        |

**serverHardcore**

Cette commande définit si le mode hardcore (quand un joueur meurt, il doit recommencer à zéro) doit être activé ou non.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (désactivé)     |       0/1        |

**ServerPassword**

Cette commande définit le mot de passe pour se connecter au serveur. Si l’accès doit être restreint, vous pouvez définir un mot de passe. Par défaut, l’option est désactivée et s’active en définissant un mot de passe.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     String     |       N/A         |    Libre        |

**serverPVE**

Cette commande définit si le PVP doit être activé sur le serveur ou non. Si le PVP est désactivé, seul le PVE est possible.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (désactivé)     |       0/1        |

**ShowMapPlayerLocation**

Cette commande définit si les joueurs doivent être affichés sur la carte via des marqueurs ou non. - [Exemple](https://screensaver01.zap-hosting.com/index.php/s/XgKByRZpzgqCZif/preview)

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (désactivé)     |       0/1        |

**StructureDamageMultiplier**

Cette commande définit la résistance aux dégâts d’une structure. Augmenter la valeur augmente la résistance, diminuer la la réduit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**StructureResistanceMultiplier**

Cette commande définit les dégâts reçus par une structure lorsqu’elle est attaquée. Augmenter la valeur augmente les dégâts, diminuer la les réduit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**TamedDinoDamageMultiplier**

Cette commande définit les dégâts infligés par un dinosaure apprivoisé. Augmenter la valeur augmente les dégâts, diminuer la les réduit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**TamedDinoResistanceMultiplier**

Cette commande définit la résistance d’un dinosaure apprivoisé. Augmenter la valeur augmente la résistance, diminuer la la réduit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**TamingSpeedMultiplier**

Cette commande définit la vitesse de dressage. Augmenter la valeur accélère le dressage, diminuer la le ralentit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**XPMultiplier**

Cette commande définit les points d’expérience reçus par un joueur. Augmenter la valeur donne plus d’XP, diminuer la en donne moins. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**EnablePVPGamma**

Cette commande définit si l’utilisation du gamma est autorisée sur un serveur PVP ou non.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (désactivé)     |       0/1        |

**EnablePVEGamma**

Cette commande définit si l’utilisation du gamma est autorisée sur un serveur PVE ou non.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (désactivé)     |       0/1        |

**SpectatorPassword**

Cette commande définit le mot de passe qu’un non-admin doit entrer pour accéder au mode spectateur.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     String     |       N/A         |    Libre        |

**DifficultyOffset**

Cette commande définit le niveau de difficulté du serveur. Pour calculer le niveau maximal des créatures selon la difficulté, multipliez par 30 (car le niveau max évolue linéairement avec la difficulté, et une difficulté de 1.0 donne un niveau max de 30). Pour calculer un offset de difficulté pour un niveau max donné, utilisez :

```
DifficultyOffset = (Maximum Creature Level / 30 - 0.5) / (Official Difficulty - 0.5)
```

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     String     |     0.50000       |    Libre        |

**PvEStructureDecayPeriodMultiplier**

Cette commande définit la durée avant que les bâtiments commencent à se dégrader. Augmenter la valeur allonge la durée, diminuer la la raccourcit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**PvEStructureDecayDestructionPeriod**

Cette commande définit quand les structures peuvent être détruites par d’autres joueurs sur un serveur PVE. Augmenter la valeur allonge le délai, diminuer la le raccourcit. 2.0 double la valeur par défaut, 0.5 la divise par deux.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**PvPStructureDecay**

Cette commande définit si la dégradation automatique des bâtiments est activée ou non sur un serveur PVP.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     |        0          |       0/1        |

**DisableDinoDecayPvE**

Cette commande désactive (true) ou active (false) la désaffectation automatique des dinos.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (désactivé)     |       0/1        |

**PvEDinoDecayPeriodMultiplier**

Cette commande définit le multiplicateur pour la vitesse de désaffectation d’un dino (plus élevé = plus rapide, plus bas = plus lent).

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**AdminLogging**

Cette commande active l’affichage des commandes cheat admin dans le chat quand un admin les utilise en jeu.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (désactivé)     |       0/1        |

**MaxTamedDinos**

Cette commande définit le nombre maximal de dinosaures apprivoisables sur l’île.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Integer     |      8300         |        ∞         |

**MaxNumbersofPlayersInTribe**

Cette commande définit le nombre maximal de joueurs par tribu.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Integer     |       2           |        ∞         |

**KickIdlePlayersPeriod**

Cette commande définit le temps avant qu’un joueur inactif soit expulsé du serveur.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Integer     | 1800 (secondes)   |        ∞         |

**PerPlatformMaxStructuresMultiplier**

Cette commande définit le multiplicateur pour les structures sur les plateformes de selle. À utiliser avec précaution - des valeurs trop élevées peuvent causer de gros problèmes de performance.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |      1.00000      |        ∞         |

**StructureDamageRepairCooldown**

Cette commande définit le délai avant qu’une structure endommagée puisse être réparée à nouveau. (0 permet la réparation sans délai)

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Integer     |       180         |        ∞         |

**bForceAllStructureLocking**

Cette commande définit si tous les types de conteneurs peuvent être verrouillés.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     |        1          |       0/1        |

**bUseVSync**

Cette commande définit si le VSync doit être activé ou non (peut minimiser les problèmes avec certaines cartes graphiques).

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     |        0          |       0/1        |

**MaxPlatformSaddleStructureLimit**

Cette commande définit le nombre maximal de structures sur la plateforme de selle.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Integer     |       100         |        ∞         |

**RCONPort**

Cette commande définit le port RCON utilisé pour se connecter via la console RCON.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Integer     |       100         |        ∞         |

**AutoSavePeriodMinutes**

Cette commande définit l’intervalle (en minutes) pour les sauvegardes automatiques du serveur.

:::info
Cette valeur est fixée à 30 minutes et ne peut pas être modifiée.
:::

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Integer     |       30          |        ∞         |

**RCONServerGameLogBuffer**

Cette commande définit combien de lignes de chat doivent être listées dans les outils RCON.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Integer     |       600         |        ∞         |

**PreventOfflinePvPInterval**

Cette commande définit combien de secondes un joueur doit être déconnecté pour être considéré comme réellement déconnecté.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Integer     | 60 (secondes)     |        ∞         |

**bPvPDinoDecay**

Cette commande définit si les dinosaures de la tribu/joueur sont aussi protégés lors de la protection contre les raids hors ligne activée.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     |        1          |       0/1        |

**bPvPStructureDecay**

Cette commande définit si les structures de la tribu/joueur sont protégées lors de la protection contre les raids hors ligne activée.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     |        1          |       0/1        |

**DisableImprintDinoBuff**

Cette commande définit si le bonus supplémentaire obtenu en élevant un bébé dinosaure soi-même doit être désactivé.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     |        1          |       0/1        |

**AllowAnyoneBabyImprintCuddle**

Cette commande définit si chaque joueur peut câliner les bébés dinosaures.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     |        1          |       0/1        |

**OverrideOfficialDifficulty**

Cette commande remplace le niveau de difficulté officiel.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Integer     |        1          |       0/1        |

**TheMaxStructuresInRange**

Cette commande définit le nombre maximal autorisé de structures à proximité.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Integer     |      10500        |        ∞         |

**PvEAllowStructuresAtSupplyDrops**

Cette commande définit si la construction près des caisses de ravitaillement est autorisée ou non.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (désactivé)     |       0/1        |

**AutoDestroyDecayedDinos**

Cette commande définit si les dinos doivent être détruits directement au lieu de devenir récupérables.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (désactivé)     |       0/1        |

**ClampItemSpoilingTimes**

Cette commande définit que tous les temps d’expiration des objets seront fixés au maximum.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (désactivé)     |       0/1        |

**AllowCrateSpawnsOnTopOfStructures**

Cette commande définit si les caisses de ravitaillement peuvent atterrir sur les structures.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (désactivé)     |       0/1        |

**PreventOfflinePvP**

Cette commande définit si la "Protection contre les raids hors ligne" doit être activée sur les serveurs PVE/PVP ou non.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 1 (activé)        |       0/1        |

**AllowMultipleAttachedC4**

Cette commande permet d’attacher plusieurs explosifs C4 aux dinosaures.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 1 (activé)        |       0/1        |

**bPvEDisableFriendlyFire**

Cette commande définit si le tir allié doit être désactivé en PVE ou non.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 1 (activé)        |       0/1        |

**ServerAutoForceRespawnWildDinosInterval**

Cette commande définit le temps en secondes avant qu’un respawn forcé de tous les dinos sauvages ait lieu. Par exemple, 86400 signifie un respawn forcé après un jour.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Integer     |      86400        |       0/1        |

**DisableWeatherFog**

Cette commande définit si le brouillard sur la carte doit être activé ou désactivé.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Boolean     | 0 (activé)        |       0/1        |

### **[/script/engine.gamesession]**

**MaxPlayers**

Cette commande définit combien de joueurs peuvent jouer simultanément sur le serveur.

| Type de donnée |                  Valeur par défaut                   | Plage de valeurs |
| :------------: | :-------------------------------------------------: | :--------------: |
|     Float      | Selon la sélection de slots lors de la commande (slots fixes) |     10-130      |

### **[SessionSettings]**

**SessionName**

Cette commande définit le nom du serveur affiché dans le navigateur de serveurs, le jeu, etc.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |    ARK #XXXXXX    |        ∞         |

### **[MessageOfTheDay]**

**Duration**

Cette commande définit la durée d’affichage du message de bienvenue après connexion.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|    Integer     |      1.00000      |       X-X        |

**Message**

Cette commande définit le message de bienvenue affiché à la connexion d’un joueur.

| Type de donnée | Valeur par défaut | Plage de valeurs |
| :------------: | :---------------: | :--------------: |
|     Float      |       "..."       |        /         |

## Configuration : Game.ini

Comme mentionné plus haut, des modifications plus poussées peuvent être faites via le Game.ini. Cela inclut par exemple changer les points d’engramme ou l’XP gagnée par niveau.

### Limite de niveau

Il est possible d’augmenter le niveau maximal des joueurs et dinosaures. Pour cela, on utilise la fonction `LevelExperienceRampOverrides`, introduite avec la version v194. Plus d’infos et exemples dans le forum Steam : [Extended Game Options: How to Configure your Custom ARK server](https://steamcommunity.com/app/346110/discussions/10/530646715633129364/).

La commande est appliquée deux fois : la première pour le niveau joueur, la deuxième pour le niveau dinosaure. La syntaxe est :

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=(
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>)
```

Les crochets définissent les niveaux (**LEVELVALUE**) et après le signe égal la quantité d’XP (**Points**) nécessaire pour atteindre ce niveau.

Par exemple, pour une limite de 500 niveaux :

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=( 
ExperiencePointsForLevel[0]=100, 
ExperiencePointsForLevel[1]=200, 
ExperiencePointsForLevel[2]=300, 
ExperiencePointsForLevel[3]=400, 
ExperiencePointsForLevel[4]=500, 
ExperiencePointsForLevel[5]=600,
... // Abrégé pour l’exemple
ExperiencePointsForLevel[499]=50000)
```

### Points d’engramme

À chaque montée de niveau, vous obtenez des **points d’engramme**. Le nombre de points d’engramme par niveau peut aussi être modifié depuis la version v193. La syntaxe est :

```
OverridePlayerLevelEngramPoints=
```

Pour chaque niveau, il faut ajouter une ligne de commande. Par exemple, pour 10 niveaux avec 5 points d’engramme supplémentaires par niveau :

```
OverridePlayerLevelEngramPoints=5
OverridePlayerLevelEngramPoints=10
OverridePlayerLevelEngramPoints=15
OverridePlayerLevelEngramPoints=20
OverridePlayerLevelEngramPoints=25
OverridePlayerLevelEngramPoints=30
OverridePlayerLevelEngramPoints=35
OverridePlayerLevelEngramPoints=40
OverridePlayerLevelEngramPoints=45
OverridePlayerLevelEngramPoints=50
```

Le nombre de lignes dépend généralement de la limite de niveau définie précédemment.

:::info
ARK est un jeu en constante évolution avec de nombreuses mises à jour régulières. Cela impacte aussi la configuration du serveur. On vous recommande donc de consulter la documentation officielle pour plus d’infos détaillées : https://ark.fandom.com/wiki/Server_configuration
:::

<InlineVoucher />