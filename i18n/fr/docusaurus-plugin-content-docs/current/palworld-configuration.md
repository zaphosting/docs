---
id: palworld-configuration
title: "Palworld : Configuration du serveur Palworld"
description: "Découvrez comment personnaliser les paramètres de votre serveur Palworld pour une expérience de jeu sur-mesure et optimiser votre gameplay → En savoir plus maintenant"
sidebar_label: Configuration du serveur
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Les serveurs Palworld offrent une large gamme de paramètres de configuration que vous pouvez personnaliser à votre goût. Dans ce guide, nous allons explorer tous les paramètres de configuration actuellement disponibles et expliquer chacun en détail.
<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/LsRSG5MHK9PyQZF/preview" title="Configure ton serveur Palworld en juste une MINUTE !" description="Tu comprends mieux en voyant les choses en action ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de manière super engageante !"/>

<InlineVoucher />

## Accéder à ton fichier de configuration

Tout d’abord, tu devras accéder à ton fichier de configuration pour modifier les paramètres. Il y a plusieurs façons d’éditer ce fichier.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via l’interface web" default>

#### Via l’interface web

La méthode la plus simple est de te rendre dans la section **Paramètres** sur le panneau de contrôle de ton serveur de jeux et de chercher les réglages appropriés, comme montré ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via le fichier de config WI">

#### Via le fichier de config WI

:::note
Le serveur doit être arrêté avant de pouvoir modifier la config, éditer la config puis redémarrer le serveur annulera toutes les modifications.
:::

Sinon, pour ceux qui veulent éditer directement le fichier brut, tu peux y accéder en allant dans la section **Configs** sur le panneau de contrôle de ton serveur de jeux et en cliquant sur le bouton bleu d’édition du fichier, comme montré ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

Cela ouvrira un éditeur de texte directement sur le site pour que tu puisses modifier le fichier.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
Le serveur doit être arrêté avant de pouvoir modifier la config, éditer la config puis redémarrer le serveur annulera toutes les modifications.
:::

La dernière méthode pour accéder au fichier brut est via FTP. Si tu n’es pas familier avec l’utilisation du FTP, on te recommande de jeter un œil au [guide Accès via FTP](gameserver-ftpaccess.md). Cependant, cette méthode est plus longue et si tu souhaites éditer directement le contenu du fichier, on te conseille d’utiliser simplement la section **Configs** sur le panneau de contrôle de ton serveur de jeux comme mentionné.

</TabItem>
</Tabs>

## Options de configuration du serveur

### Activer le support Crossplay

Les serveurs dédiés Palworld supportent l’utilisation de plusieurs plateformes, donc tu peux utiliser le crossplay. La plateforme Steam est activée par défaut. Si tu veux activer le support pour Xbox, PS5 et Mac, tu peux le faire dans l’administration du serveur de jeux sous les paramètres.

![img](https://screensaver01.zap-hosting.com/index.php/s/nD5kBoNH2JBfoxF/preview)

:::info
Le crossplay entre les versions Steam et Microsoft Store/Xbox n’est toujours pas possible. Ton serveur peut être configuré pour fonctionner soit avec Steam, soit avec Microsoft Store/Xbox.
:::

:::info
Sur les consoles Xbox, tu ne peux pas te connecter directement via l’adresse IP, donc si tu prévois de jouer sur Xbox, tu devras rendre ton serveur dédié public.

Tu devrais aussi définir un nom de serveur facile à trouver, consulte notre [guide Configuration du serveur](palworld-configuration.md) pour savoir comment faire.
:::

### Paramètres importants du serveur

Voici les options de configuration essentielles pour personnaliser l’affichage de ton serveur, le protéger par mot de passe et d’autres réglages internes.

:::tip
On ne recommande pas de modifier les paramètres de Port ou d’IP, car ils sont configurés automatiquement par le serveur de jeux. Modifier les valeurs IP/Port peut potentiellement casser ton serveur de jeux !
:::

| Nom du paramètre              | Exemple                                | Description                                               |
| ----------------------------- | ------------------------------------- | --------------------------------------------------------- | 
| ServerPlayerMaxNum            | 4                                     | Nombre max de joueurs pouvant rejoindre le serveur (max 32) |
| ServerName                   | ZAP-Hosting Docs Test                 | Le nom de ton serveur                                    |
| ServerDescription            | Ceci est un serveur de test           | La description de ton serveur                            |
| AdminPassword                | ctRQvhPAWVHq                         | Mot de passe admin utilisé pour les commandes admin      |
| ServerPassword               | iLoveZAP!2024                       | Verrouille le serveur avec un mot de passe (privé)       |
| PublicPort                   | 8211 (par défaut)                    | Le port public sur lequel tourne le serveur              |
| PublicIP                     | 123.123.123.123                     | L’adresse IP publique du serveur                          |
| RCONEnabled                  | true                                | Active ou désactive l’utilisation de RCON                |
| RCONPort                     | 8222                                | Numéro de port utilisé pour RCON                          |

Après avoir terminé tes modifications, pense bien à sauvegarder le fichier et à redémarrer ton serveur. La prochaine fois que ton serveur démarrera, il utilisera les paramètres que tu as fournis.

### Paramètres de configuration du gameplay

Ce sont des options de configuration moins importantes, principalement pour modifier le gameplay, la progression ainsi que la carte et le monde dans lequel tu joues.

| Nom du paramètre                | Description                                      | 
| ------------------------------- | ------------------------------------------------ | 
| DayTimeSpeedRate               | Vitesse du temps pendant la journée              |
| NightTimeSpeedRate             | Vitesse du temps pendant la nuit                  |
| ExpRate                      | Taux auquel tu gagnes de l’expérience (XP)        |
| PalCaptureRate               | Taux de capture des Pals                          |
| PalSpawnNumRate              | Taux d’apparition des Pals                        |
| PalDamageRateAttack          | Multiplicateur de dégâts infligés par les Pals   |
| PalDamageRateDefense         | Multiplicateur de dégâts subis par les Pals       |
| PlayerDamageRateAttack       | Multiplicateur de dégâts infligés par le joueur   |
| PlayerDamageRateDefense      | Multiplicateur de dégâts subis par le joueur       |
| PlayerStomachDecreaceRate    | Taux de diminution de la faim du joueur           |
| PlayerStaminaDecreaceRate    | Taux de réduction de la stamina du joueur          |
| PlayerAutoHPRegeneRate       | Taux de régénération automatique de HP du joueur  |
| PlayerAutoHpRegeneRateInSleep | Taux de régénération de HP du joueur en sommeil    |
| PalStomachDecreaceRate       | Taux de diminution de la faim des Pals             |
| PalStaminaDecreaceRate       | Taux de réduction de la stamina des Pals           |
| PalAutoHPRegeneRate          | Taux de régénération automatique de HP des Pals   |
| PalAutoHpRegeneRateInSleep   | Taux de régénération de santé des Pals en sommeil (dans Palbox) |
| BuildObjectDamageRate        | Multiplicateur de dégâts aux structures             |
| BuildObjectDeteriorationDamageRate | Taux de détérioration des structures               |
| CollectionDropRate           | Multiplicateur des objets récoltables                |
| CollectionObjectHpRate       | Multiplicateur des PV des objets récoltables         |
| CollectionObjectRespawnSpeedRate | Intervalle de réapparition des objets récoltables  |
| EnemyDropItemRate            | Multiplicateur des objets lâchés par les ennemis    |
| DeathPenalty                 | Pénalité de mort (Aucune/Objet)                      |
| GuildPlayerMaxNum            | Nombre max de joueurs dans une guilde                |
| PalEggDefaultHatchingTime    | Temps (h) d’incubation d’un œuf massif               |

Après avoir terminé tes modifications, pense bien à sauvegarder le fichier et à redémarrer ton serveur. La prochaine fois que ton serveur démarrera, il utilisera les paramètres que tu as fournis.

<InlineVoucher />