---
id: abioticfactor-configuration
title: "Abiotic Factor : Configuration du Serveur"
description: "Découvrez comment personnaliser les paramètres de votre serveur Abiotic Factor pour optimiser votre expérience de jeu et les performances du serveur → En savoir plus maintenant"
sidebar_label: Configuration du Serveur
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs Abiotic Factor offrent une large gamme de paramètres de configuration que vous pouvez personnaliser à votre goût. Dans ce guide, nous allons explorer tous les paramètres de configuration actuellement disponibles et expliquer chacun en détail.

<InlineVoucher />

## Accéder à votre Fichier de Configuration

Tout d'abord, vous devrez accéder à votre fichier de configuration pour modifier les paramètres. Il existe plusieurs façons d’éditer ce fichier.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via l’interface Web" default>

#### Via l’interface Web

La méthode la plus simple est de vous rendre dans la section **Paramètres** sur l’interface web de votre serveur de jeux et de chercher les réglages appropriés, comme montré ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via le fichier de config WI">

#### Via le fichier de config WI

:::note
Le serveur doit être arrêté avant de pouvoir modifier la config, éditer la config puis redémarrer le serveur annulera toutes les modifications.
:::

Sinon, pour les utilisateurs qui souhaitent éditer directement le fichier brut, vous pouvez y accéder en allant dans la section **Configs** sur l’interface web de votre serveur de jeux et en cliquant sur le bouton bleu d’édition du fichier, comme montré ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/dPZLs4YMQopCpfd/preview)

Cela ouvrira un éditeur de texte directement sur le site pour vous permettre de modifier le fichier.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Le serveur doit être arrêté avant de pouvoir modifier la config, éditer la config puis redémarrer le serveur annulera toutes les modifications.
:::

La dernière méthode pour accéder au fichier brut est via FTP. Si vous n’êtes pas familier avec l’utilisation du FTP, nous vous recommandons de consulter le [guide Accès via FTP](gameserver-ftpaccess.md). Cependant, cette méthode est plus longue et si vous souhaitez modifier directement le contenu du fichier, nous vous conseillons simplement d’utiliser la section **Configs** sur l’interface web de votre serveur de jeux comme mentionné.

</TabItem>
</Tabs>

## Options de Configuration du Serveur

Dans les sections ci-dessous, nous présentons des tableaux contenant des informations sur une large gamme d’options de configuration disponibles pour les serveurs dédiés Abiotic Factor.

### Paramètres Importants du Serveur

Ces paramètres ne peuvent être définis que directement via le panneau de votre serveur de jeux dans la section **Paramètres**.

| Nom du Paramètre   | Exemple                  | Description                                                                |
| ------------------ | ------------------------ | -------------------------------------------------------------------------- | 
| Nom du Serveur     | ZAP-Hosting Docs Test    | Définit le nom de votre serveur                                           |
| Mot de Passe       | iLoveZAP!2024            | Définit un mot de passe pour votre serveur, ou laissez vide pour aucun    |

Après avoir effectué vos modifications, assurez-vous de sauvegarder le fichier si nécessaire et de redémarrer votre serveur. Lors du prochain démarrage, votre serveur utilisera les paramètres que vous avez fournis.

### Paramètres de Configuration du Gameplay

Abiotic Factor contient une large gamme d’options de configuration du gameplay appelées **Sandbox Settings**. Un fichier nommé **SandboxSettings.ini** devrait être présent dans le dossier principal `world` lorsque vous accédez à votre serveur via FTP.

Si vous ne voyez pas ce fichier, créez-le localement sur votre système et copiez-y le contenu suivant : [Abiotic Factor Default SandboxSettings.ini GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

Vous pouvez maintenant ajuster les valeurs comme vous le souhaitez. Une fois prêt, téléversez ce fichier dans le dossier principal `world` via FTP, au chemin suivant :
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

Dans le tableau ci-dessous, nous résumons quelques paramètres clés du gameplay que l’on trouve dans le fichier **SandboxSettings.ini**. Pour voir toutes les options disponibles, consultez la [page officielle GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

| Nom du Paramètre             | Exemple    | Description                                                             |
| ---------------------------- | ---------- | ----------------------------------------------------------------------- | 
| LootRespawnEnabled           | true/false | Active ou désactive l’apparition de butin autour de la carte           |
| PowerSocketsOffAtNight       | true/false | Active ou désactive la coupure de courant pendant la nuit              |
| DayNightCycleSpeedMultiplier | 1.0        | Définit le multiplicateur de vitesse du cycle jour/nuit                |
| EnemySpawnRate               | 1.0        | Définit la fréquence d’apparition des ennemis                          |
| EnemyHealthMultiplier        | 1.0        | Définit un multiplicateur pour la santé des ennemis                     |
| EnemyPlayerDamageMultiplier  | 1.0        | Définit un multiplicateur pour les dégâts que les ennemis infligent aux joueurs |
| DetectionSpeedMultiplier     | 1.0        | Définit un multiplicateur pour la vitesse à laquelle les ennemis détectent les joueurs |
| PlayerXPGainMultiplier       | 1.0        | Définit un multiplicateur pour l’XP gagnée par les joueurs              |
| ItemStackSizeMultiplier      | 1.0        | Définit un multiplicateur pour la taille des piles d’objets en inventaire |
| ItemDurabilityMultiplier     | 1.0        | Définit un multiplicateur pour la durabilité des objets                 |
| ShowDeathMessages            | true/false | Active ou désactive l’affichage des messages de mort des entités        |
| AllowRecipeSharing           | true/false | Active ou désactive le partage des recettes d’objets entre joueurs     |

Après avoir effectué vos modifications, assurez-vous de sauvegarder le fichier si nécessaire et de redémarrer votre serveur. Lors du prochain démarrage, votre serveur utilisera les paramètres que vous avez fournis.

<InlineVoucher />