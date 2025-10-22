---
id: valheim-plus
title: "Valheim : Serveur Valheim Plus"
description: "Découvre comment améliorer ton expérience Valheim avec Valheim Plus pour des fonctionnalités boostées et des upgrades serveur → En savoir plus maintenant"
sidebar_label: Valheim Plus
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

:::info
Valheim Plus est une modification côté client. Elle te permet de modifier le jeu de base.
:::

<InlineVoucher />

## Installation de Valheim Plus côté Client

D'abord, ouvre le dossier Valheim sur ton PC.  
Pour ça, fais un clic droit sur Valheim dans ta bibliothèque Steam, sélectionne "***Gérer***" dans les options puis "***Parcourir les fichiers locaux***".

![](https://screensaver01.zap-hosting.com/index.php/s/oXaiLGR55Z9fH92/preview)

Une fois le dossier ouvert, télécharge le fichier "***WindowsClient.zip***".  
Le "***WindowsClient.zip***" est dispo [ici](https://github.com/valheimPlus/ValheimPlus/releases) (va dans "Assets").

![](https://screensaver01.zap-hosting.com/index.php/s/ZDsabTk4eMfQcFM/preview)

Ensuite, décompresse le contenu de "***WindowsClient.zip***" dans le dossier serveur Valheim que tu viens d’ouvrir.

![](https://screensaver01.zap-hosting.com/index.php/s/wiTfFmLetr9TmJX/preview)

Lance ensuite Valheim, et la config côté client est terminée.

## Installation de Valheim Plus côté Serveur

Pour modifier le jeu, commence par ouvrir l’onglet jeux sur ton serveur :

![](https://screensaver01.zap-hosting.com/index.php/s/YE2xKnqfrZfWE4J/preview)

Cherche maintenant Valheim Plus dans la section "Jeux disponibles" et clique sur le bouton de téléchargement :

![](https://screensaver01.zap-hosting.com/index.php/s/GF6Na4EPGiNQSDZ/preview)

Le serveur sera alors réinstallé. Une fois la réinstallation terminée, tu peux enlever le mot de passe dans "**Configs**" et tu peux maintenant upgrader le nombre de slots.

## Upgrade des Slots

Pour faire un upgrade des slots, ouvre la fonction "**UP and Downgrade**" dans le tableau de bord du serveur de jeux.

![](https://screensaver01.zap-hosting.com/index.php/s/SpAxfojkxY5wmsE/preview)

Choisis le nombre de slots souhaité sur la page UP and Downgrade.

:::info
Tu ne payes que la "**surcharge**", calculée au prorata du temps restant.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/jyZGRaKAZ7n5GkR/preview)

Pour finaliser l’upgrade, choisis un moyen de paiement en bas de la page.  
Une fois sélectionné, clique sur "***Effectuer l’upgrade***" et c’est parti.

![](https://screensaver01.zap-hosting.com/index.php/s/3eB9FtgLzxBpPgB/preview)

## Config Valheim Plus

Pour ouvrir le fichier de config, va sur la page "**Configs**" dans l’interface du serveur de jeux, où tu verras "*ValheimPlus: valheim_plus.cfg*".  
Tu peux l’ouvrir via l’icône bleue à côté du fichier de config.

![](https://screensaver01.zap-hosting.com/index.php/s/grjGPr64RSs69xN/preview)

Voici la liste des commandes utilisables dans le fichier de config :

### [Player]

| Commande | Valeurs | Fonction |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | active ou désactive les modifications joueur |
| baseMegingjordBuff | 150 (float) | augmente la capacité de portage de 150 |
| baseMaximumWeight | 300 (float) | fixe le poids max à 300 |
| baseAutoPickUpRange | 2 (float) | définit la portée de ramassage automatique à 2 |
| disableCameraShake | true / false | active ou désactive le tremblement de caméra |
| experienceGainedNotifications | true / false | active ou désactive l’affichage des points d’expérience gagnés en haut à gauche |

### [Food]

| Commande | Valeurs | Fonction |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | active ou désactive les modifications de la nourriture |
| foodDuration | 0-100% | modifie la durée de la nourriture en pourcentage |

### [Fermenter]

| Commande | Valeurs | Fonction |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | active ou désactive les modifications du fermentateur |
| fermenterDuration | 2400 (float) équivaut à 48 heures en jeu | définit le temps de production dans le fermentateur, plus bas = plus rapide |
| fermenterItemsProduced | 6 (entier) | définit les objets produits dans le fermentateur |

### [Furnace]

| Commande | Valeurs | Fonction |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | active ou désactive les modifications du four |
| maximumOre | 10 (entier) | fixe le nombre max de minerais dans le four |
| maximumCoal | 20 (entier) | fixe le nombre max de charbon dans le four |
| productionSpeed | 30 (float) | définit le temps de production dans le four, plus bas = plus rapide |
| coalUsedPerProduct | 2 (entier) | définit la quantité de charbon utilisée par produit |

### [Kiln]

| Commande | Valeurs | Fonction |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | active ou désactive les modifications du four à chaux |
| productionSpeed | 15 (float) | définit le temps de production dans le four à chaux, plus bas = plus rapide |
| maximumWood | 25 (entier) | fixe la quantité max de bois dans le four à chaux |

### [Items]

| Commande | Valeurs | Fonction |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | active ou désactive les modifications des objets |
| noTeleportPrevention | true / false | empêche l’utilisation du téléport |
| baseItemWeight | 0 (float) | modifie le poids des objets, -50% = moins lourd, +50% = plus lourd |
| itemStackMultiplier | 0 (float) | modifie le nombre max d’objets empilables, uniquement valeurs positives. 50 = 50% d’objets empilables en plus. *attention* si tu réduis, tout ce qui dépasse sera supprimé |

### [Building]

| Commande | Valeurs | Fonction |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | active ou désactive les modifications du bâtiment |
| noInvalidPlacementRestriction | true / false | supprime la restriction de *placement invalide* |
| noWeatherDamage | true / false | supprime les dégâts aux bâtiments causés par la météo (ex : pluie) |
| maximumPlacementDistance | 5 (float) | fixe la distance max de placement |

### [Beehive]

| Commande | Valeurs | Fonction |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | active ou désactive les modifications de la ruche |
| maximumHoneyPerBeehive | 4 (entier) | fixe la quantité max de miel par ruche |
| honeyProductionSpeed | 1200 (float) équivaut à 24 heures en jeu | définit le temps de production du miel, plus bas = plus rapide |

### [Server]

| Commande | Valeurs | Fonction |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | active ou désactive les modifications du serveur |
| maxPlayers | 10 (int) | fixe le nombre de slots, sera défini par la valeur commandée lors des UP- et Downgrades |
| disableServerPassword | true / false | supprime le mot de passe du serveur |
| enforceConfiguration | true / false | si activé, seuls les joueurs avec la même config peuvent rejoindre le serveur |
| enforceMod | true / false | si activé, seuls les joueurs avec le même mod peuvent rejoindre le serveur |

### [Map]

| Commande | Valeurs | Fonction |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | active ou désactive les modifications de la carte |
| exploreRadius | 100 (float) | fixe le rayon autour de chaque joueur où la carte est dévoilée |
| shareMapProgression | true / false | si activé, la découverte de la carte est partagée entre tous les joueurs, seuls les joueurs visibles contribuent |

### [Hotkeys]

Une liste des contrôles possibles est [ici](https://docs.unity3d.com/ScriptReference/KeyCode.html).

| Commande | Valeurs | Fonction |
| :--------: | :--------------------------: | :---------------------------------:  |
| rollForwards | F9 | rouler vers l’avant |
| rollBackwards | F10 | rouler vers l’arrière |
| enterAdvancedBuildingMode | F1 | fige les objets et active le contrôle avancé |
| exitAdvancedBuildingMode | F3 | désactive le mode avancé et libère les objets |
| enterAdvancedEditingMode | Keypad0 | sélectionne et modifie l’objet affiché avec AEM |
| confirmPlacementOfAdvancedEditingMode | KeypadEnter | confirme les modifications de tous les objets sélectionnés |
| resetAdvancedEditingMode | F7 | réinitialise position et rotation des objets sélectionnés avec AEM |
| abortAndExitAdvancedEditingMode | F8 | réinitialise position et rotation des objets sélectionnés avec AEM et quitte le mode AEM |

### [AdvancedBuildingMode]

| Commande | Valeurs | Fonction |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | active ou désactive les modifications du mode construction avancé |

### [AdvancedEditingMode]

| commande | valeurs | fonction |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | active ou désactive les modifications du mode édition avancé |

### [Stamina]

| commande | valeurs | fonction |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | active ou désactive les modifications de l’endurance |
| dodgeStaminaUsage | 10 (float) | définit la dépense d’endurance pour esquiver |
| encumberedStaminaDrain | 10 (float) | définit la dépense d’endurance quand chargé |
| sneakStaminaDrain | 5 (float) | définit la dépense d’endurance pour se faufiler |
| runStaminaDrain | 10 (float) | définit la dépense d’endurance pour courir |
| staminaRainDelay | 1 (float) | définit le délai de régénération d’endurance |
| staminaRain | 5 (float) | définit la quantité d’endurance régénérée |
| swimStaminaDrain | 5 (float) | définit la dépense d’endurance en nageant |
| jumpStaminaUsage | 10 (float) | définit la dépense d’endurance pour sauter |


<InlineVoucher />