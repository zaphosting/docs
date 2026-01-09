---
id: openmp-configuration
title: "Open.mp : Configuration du serveur Open.mp"
description: "Découvrez comment personnaliser les paramètres de votre serveur Open.mp pour optimiser votre expérience de jeu et les performances du serveur → En savoir plus maintenant"
sidebar_label: Configuration du serveur
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs Open.mp offrent une large gamme de paramètres de configuration que vous pouvez personnaliser à votre goût. Dans ce guide, nous allons explorer tous les paramètres de configuration actuellement disponibles et expliquer chacun en détail.

<InlineVoucher />

## Accéder à votre fichier de configuration

Tout d'abord, vous devrez accéder à votre fichier de configuration pour modifier les paramètres. Il existe plusieurs façons d’éditer ce fichier.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via l’interface web" default>

#### Via l’interface web

La méthode la plus simple pour modifier les paramètres de base est de vous rendre dans la section **Paramètres** de l’interface web de votre serveur de jeux et de chercher les réglages appropriés, comme montré ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Gardez en tête que toutes les options de configuration ne seront pas accessibles ici. Si vous souhaitez tout configurer, utilisez l’onglet **Fichier de config WI** pour éditer facilement le fichier nécessaire directement dans l’interface web.

</TabItem>

<TabItem value="configs" label="Via le fichier de config WI">

#### Via le fichier de config WI

:::note
Le serveur doit être arrêté avant de pouvoir modifier la config, modifier la config puis redémarrer le serveur annulera toutes les modifications.
:::

Pour les utilisateurs qui souhaitent éditer directement le fichier et toutes les options de configuration, vous pouvez y accéder en allant dans la section **Configs** de l’interface web de votre serveur de jeux et en cliquant sur le bouton bleu d’édition du fichier, comme montré ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Cela ouvrira un éditeur de texte directement sur le site pour vous permettre de modifier le fichier.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
Le serveur doit être arrêté avant de pouvoir modifier la config, modifier la config puis redémarrer le serveur annulera toutes les modifications.
:::

La dernière méthode pour accéder au fichier brut est via FTP. Si vous n’êtes pas familier avec l’utilisation du FTP, nous vous recommandons de consulter le [guide d’accès via FTP](gameserver-ftpaccess.md). Cependant, cette méthode est plus longue et si vous souhaitez modifier directement le contenu du fichier, nous recommandons simplement d’utiliser la section **Configs** de l’interface web de votre serveur de jeux comme mentionné.

Une fois connecté via votre client FTP, rendez-vous dans le répertoire suivant, en remplaçant `[zap_id]` par votre propre ID ZAP :
```
..g[zap_id]/gta-openmp/
```

À cet emplacement, trouvez le fichier `config.json` et ouvrez-le. C’est le fichier de configuration du serveur que vous devez modifier.

</TabItem>
</Tabs>

## Options de configuration du serveur

### Détails du serveur

Voici les options de configuration qui ajustent les informations de votre serveur dans le navigateur public des serveurs. Vous devrez trouver ces options dans votre fichier de configuration, ce qui peut être fait facilement en utilisant `CTRL+F` dans votre navigateur ou votre éditeur pour rechercher.

| Nom du paramètre              | Exemple                                | Description                                                                        |
| ----------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------- |
| name                          | ZAP-Hosting Docs Test                  | Définit le nom d’hôte de votre serveur                                            |
| language                      | English                              | Langue qui apparaîtra dans le navigateur de serveurs pour votre serveur           |
| website                       | zap-hosting.com/                     | Ajoutez un site web que les gens peuvent visiter pour obtenir plus d’infos sur votre serveur |
| discord.invite                | discord.gg/zaphosting                | Lien du serveur Discord qui apparaît dans le navigateur de serveurs               |
| banners.light                 | zap-hosting.com/lighticon.png        | Définit une URL pour la bannière thème clair qui apparaît dans le navigateur de serveurs |
| banners.dark                  | zap-hosting.com/darkicon.png         | Définit une URL pour la bannière thème sombre qui apparaît dans le navigateur de serveurs |
| game.map                      | ZAPtastic Stunt Map                   | Le nom de la carte qui doit apparaître dans le navigateur de serveurs             |
| game.mode                     | Survival                             | Le mode de jeu qui doit apparaître dans le navigateur de serveurs                 |
| announce                      | true                                | Active ou désactive l’affichage de votre serveur dans le navigateur public        |
| enable_query                  | true                                | Active ou désactive l’affichage des infos de votre serveur dans le navigateur     |

Après avoir effectué vos modifications, assurez-vous de sauvegarder le fichier et de redémarrer votre serveur. Au prochain démarrage, votre serveur utilisera les paramètres que vous avez fournis.

### Paramètres principaux du serveur

Voici des options de configuration plus importantes qui ajustent la fonctionnalité de votre serveur. Vous devrez trouver ces options dans votre fichier de configuration, ce qui peut être fait facilement en utilisant `CTRL+F` dans votre navigateur ou votre éditeur pour rechercher.

| Nom du paramètre              | Exemple                                | Description                                                                                     |
| ----------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------- | 
| max_players                   | 50 (par défaut)                       | Définit le nombre maximum de joueurs que le serveur peut accueillir simultanément               |
| max_bots                      | 0 (par défaut)                        | Définit le nombre maximum de PNJ que le serveur peut gérer. Cela compte dans le total max_players |
| password                     | iLoveZAP!2024                        | Définit un mot de passe que les joueurs doivent utiliser pour se connecter au serveur           |
| rcon.enable                  | true                                | Active ou désactive la fonctionnalité RCON                                                     |
| rcon.password                | ZAP-IS-AWESOME                      | Définit un mot de passe nécessaire pour accéder à RCON depuis les clients                       |
| logging.enable               | true                                | Active ou désactive la journalisation                                                          |
| logging.file                 | log.txt                             | Chemin et nom du fichier à utiliser pour la journalisation si activée                           |
| logging.log_chat             | true                                | Active ou désactive l’affichage du chat des joueurs dans la console du serveur                  |

Après avoir effectué vos modifications, assurez-vous de sauvegarder le fichier et de redémarrer votre serveur. Au prochain démarrage, votre serveur utilisera les paramètres que vous avez fournis.

## Paramètres de gameplay & réseau

Open.mp propose une large gamme d’options de gameplay et de réseau qui vous permettent d’ajuster votre serveur en profondeur. Ici, nous résumerons quelques-unes des options les plus importantes. Vous devrez trouver ces options dans votre fichier de configuration, ce qui peut être fait facilement en utilisant `CTRL+F` dans votre navigateur ou votre éditeur pour rechercher.

Si vous souhaitez ajuster tous les paramètres, nous vous recommandons de lire le [guide config.json d’open.mp](https://www.open.mp/docs/server/config.json) qui présente toutes les options de configuration actuellement disponibles.

:::tip
Nous ne recommandons pas de modifier les paramètres de Port ou d’IP, car ils sont automatiquement configurés par le serveur de jeux. Modifier les valeurs IP/Port peut potentiellement casser votre serveur de jeux !
:::

| Nom du paramètre              | Description                                                                                  | 
| ----------------------------- | -------------------------------------------------------------------------------------------- | 
| game.use_chat_radius          | Active ou désactive le rayon de chat                                                        |
| game.chat_radius              | Définit une limitation de rayon pour le chat                                               |
| game.time                    | Définit l’heure globale utilisée par le serveur                                            |
| game.use_nametags             | Active ou désactive l’affichage des noms, barres de vie et d’armure au-dessus des joueurs   |
| game.use_vehicle_friendly_fire| Active le tir ami pour les véhicules d’équipe                                              |
| game.vehicle_respawn_time     | Temps de réapparition des véhicules en millisecondes                                       |
| game.weather                 | Météo globale utilisée par le serveur                                                      |
| network.bind                 | L’adresse IP que le serveur doit utiliser (nous recommandons de ne pas modifier pour les serveurs de jeux) |
| network.port                 | Le port que le serveur doit utiliser (encore une fois, nous recommandons de ne pas modifier pour les serveurs de jeux) |
| network.messages_limit       | Nombre maximum de messages qu’un utilisateur peut envoyer par seconde                       |
| network.player_timeout       | Temps en millisecondes après lequel un joueur sera déconnecté s’il n’envoie plus de données au serveur |

Après avoir effectué vos modifications, assurez-vous de sauvegarder le fichier et de redémarrer votre serveur. Au prochain démarrage, votre serveur utilisera les paramètres que vous avez fournis.

<InlineVoucher />