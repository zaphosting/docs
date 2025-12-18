---
id: vrising-configuration
title: "V Rising : Configuration du Serveur"
description: "Découvrez comment personnaliser les paramètres de votre serveur V Rising pour un gameplay optimal et contrôler votre environnement serveur → En savoir plus maintenant"
sidebar_label: Configuration du Serveur
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs V Rising offrent une large gamme de paramètres de configuration que vous pouvez personnaliser à votre goût. Dans ce guide, nous allons explorer tous les paramètres de configuration disponibles actuellement et expliquer chacun en détail.

<InlineVoucher />

## Accéder à votre Fichier de Configuration

Tout d'abord, vous devrez accéder à votre fichier de configuration pour modifier les paramètres. Il existe plusieurs façons d’éditer ce fichier.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via l’interface Web" default>

#### Via l’interface Web

La méthode la plus simple est de vous rendre dans la section **Paramètres** de l’interface web de votre serveur de jeux et de chercher les réglages appropriés, comme montré ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via le fichier de config WI">

#### Via le fichier de config WI

:::note
Le serveur doit être arrêté avant de pouvoir modifier la config, modifier la config puis redémarrer le serveur annulera toutes les modifications.
:::

Sinon, pour les utilisateurs qui souhaitent éditer directement le fichier brut, vous pouvez y accéder en allant dans la section **Configs** de l’interface web de votre serveur de jeux et en cliquant sur le bouton bleu d’édition du fichier, comme montré ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/3Dg6NCtN9akx8bg/preview)

Cela ouvrira un éditeur de texte directement sur le site pour vous permettre de modifier le fichier.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Le serveur doit être arrêté avant de pouvoir modifier la config, modifier la config puis redémarrer le serveur annulera toutes les modifications.
:::

La dernière méthode pour accéder au fichier brut est via FTP. Si vous n’êtes pas familier avec l’utilisation du FTP, nous vous recommandons de consulter le [guide Accès via FTP](gameserver-ftpaccess.md). Cependant, cette méthode est plus longue et si vous souhaitez modifier directement le contenu du fichier, nous vous conseillons simplement d’utiliser la section **Configs** de l’interface web de votre serveur de jeux comme mentionné plus haut.

</TabItem>
</Tabs>

## Options de Configuration du Serveur

Dans les sections ci-dessous, nous présentons des tableaux contenant des informations sur les options de configuration disponibles, à la fois pour le serveur lui-même et pour les options de gameplay.

:::tip
Nous ne recommandons pas de modifier les paramètres de Port, car ils sont automatiquement configurés par le serveur de jeux. Modifier les valeurs de Port peut potentiellement casser votre serveur de jeux !
:::

### Paramètres Serveur Importants

Cette section résume les paramètres serveur les plus importants, que l’on trouve dans le fichier de configuration **ServerHostSettings.json**. Pour la liste complète des options de configuration, consultez le [guide officiel GitHub du jeu](https://github.com/StunlockStudios/vrising-dedicated-server-instructions/blob/master/1.0.x/INSTRUCTIONS.md).

| Nom du Paramètre    | Exemple                  | Description                                                                |
| ------------------- | ------------------------ | -------------------------------------------------------------------------- | 
| Name                | ZAP-Hosting Docs Test    | Définit le nom de votre serveur                                            |
| Description         | ZAP is the best!         | Définit la description de votre serveur                                   |
| Port                | 9876 (par défaut)        | Définit le port réseau utilisé par le jeu                                 |
| QueryPort           | 9877 (par défaut)        | Définit le port de requête utilisé pour retourner les infos du serveur dans la liste des serveurs |
| MaxConnectedUsers   | 10                       | Définit le nombre maximum de joueurs pouvant être connectés simultanément |
| MaxConnectedAdmins  | 4                        | Définit le nombre d’admins pouvant rejoindre un serveur plein             |
| ServerFps           | 30 (par défaut recommandé) | Définit le taux de rafraîchissement (FPS) du serveur, on recommande de laisser par défaut |
| SaveName            | ZAPDocsTest              | Définit le nom de la sauvegarde du monde                                  |
| Password            | iLoveZAP!2024            | Définit un mot de passe pour votre serveur, ou laissez vide pour aucun    |
| ListOnMasterServer  | true/false               | Active ou désactive l’affichage de votre serveur dans la liste des serveurs |
| AutoSaveCount       | 15                       | Définit combien de sauvegardes anciennes doivent être conservées          |
| AutoSaveInterval    | 600                      | Définit l’intervalle entre chaque sauvegarde automatique                  |
| RCON Enabled        | true/false               | Active ou désactive le RCON                                               |
| RCON Port           | 25575                    | Définit le port RCON                                                      |
| RCON Password       | iLoveZAP!2024            | Définit le mot de passe pour la connexion RCON                            |

Après avoir effectué vos modifications, assurez-vous de sauvegarder le fichier et de redémarrer votre serveur. Au prochain démarrage, votre serveur utilisera les paramètres que vous avez définis.

### Paramètres Clés de Configuration du Gameplay

V Rising propose une quantité importante de paramètres et d’options de configuration pour ajuster le gameplay. Dans cette section, nous résumons les plus importants, que l’on trouve dans le fichier **ServerGameSettings.json**.

| Nom du Paramètre         | Exemple                       | Description                                                                                          |
| ------------------------ | ----------------------------- | -------------------------------------------------------------------------------------------------- | 
| GameDifficulty           | Normal                        | Définit la difficulté du jeu pour votre monde                                                     |
| GameModeType             | PvP, PvE                      | Définit le type de mode de jeu pour votre monde                                                   |
| CastleDamageMode         | Always, Never, TimeRestricted | Définit quand les châteaux peuvent être endommagés, en utilisant le paramètre VSCastle pour choisir l’heure pour "TimeRestricted" |
| PlayerDamageMode         | Always, TimeRestricted        | Définit si les autres joueurs peuvent être endommagés, en utilisant le paramètre VSPlayer pour choisir l’heure pour "TimeRestricted" |
| PvPProtectionMode        | Short, Medium, Long           | Définit la durée d’invincibilité des nouveaux joueurs                                             |
| DeathContainerPermission | Anyone, ClanMembers           | Définit qui peut piller les objets tombés quand un joueur meurt                                   |
| CanLootEnemyContainers   | true/false                    | Définit si un joueur peut piller le coffre d’un autre joueur qui n’est pas dans son clan          |
| BloodBoundEquipment      | true/false                    | Définit si vous gardez votre équipement après la mort                                             |
| TeleportBoundItems       | true/false                    | Définit si des objets peuvent vous bloquer la téléportation via les Portails de Vampire          |
| AllowGlobalChat          | true/false                    | Active ou désactive le chat global                                                                |

Après avoir effectué vos modifications, assurez-vous de sauvegarder le fichier et de redémarrer votre serveur. Au prochain démarrage, votre serveur utilisera les paramètres que vous avez définis.

<InlineVoucher />