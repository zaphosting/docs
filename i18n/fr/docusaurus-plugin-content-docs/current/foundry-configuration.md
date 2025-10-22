---
id: foundry-configuration
title: "Foundry : Configuration du Serveur"
description: "Découvrez comment personnaliser les paramètres de votre serveur Foundry pour un gameplay optimal et une gestion facile → En savoir plus maintenant"
sidebar_label: Configuration du Serveur
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs Foundry offrent une large gamme de paramètres de configuration que vous pouvez personnaliser à votre goût. Dans ce guide, nous allons explorer tous les paramètres de configuration disponibles actuellement et expliquer chacun en détail.

<InlineVoucher />

## Accéder à votre Fichier de Configuration

Tout d’abord, vous devez accéder à votre fichier de configuration pour pouvoir modifier les paramètres. Il existe plusieurs façons d’éditer ce fichier.

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
Le serveur doit être arrêté avant de pouvoir modifier la config, éditer la config puis redémarrer le serveur annulera toutes les modifications.
:::

Sinon, pour les utilisateurs qui souhaitent éditer directement le fichier brut, vous pouvez y accéder en allant dans la section **Configs** de l’interface web de votre serveur de jeux et en cliquant sur le bouton bleu d’édition du fichier, comme montré ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/64bAt9qCqHAdWXH/preview)

Cela ouvrira un éditeur de texte directement sur le site pour vous permettre de modifier le fichier.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Le serveur doit être arrêté avant de pouvoir modifier la config, éditer la config puis redémarrer le serveur annulera toutes les modifications.
:::

La dernière méthode pour accéder au fichier brut est via FTP. Si vous ne connaissez pas l’utilisation du FTP, nous vous recommandons de consulter le [guide Accès via FTP](gameserver-ftpaccess.md). Cependant, cette méthode est plus longue et si vous souhaitez modifier directement le contenu du fichier, nous vous conseillons d’utiliser simplement la section **Configs** de l’interface web de votre serveur de jeux comme mentionné précédemment.

</TabItem>
</Tabs>

## Options de Configuration du Serveur

Dans le tableau ci-dessous, nous présentons les options importantes de configuration du serveur actuellement disponibles sur les serveurs Foundry.

:::tip
Nous ne recommandons pas de modifier les paramètres de Port, car ils sont configurés automatiquement par le serveur de jeux. Modifier les valeurs de Port peut potentiellement casser votre serveur de jeux !
:::

### Paramètres Importants du Serveur

| Nom du Paramètre    | Exemple                   | Description                                                                          |
| ------------------- | ------------------------- | ------------------------------------------------------------------------------------ | 
| server_world_name   | ZAPDocsTest               | Définit le nom du monde, qui est aussi le dossier où les fichiers de sauvegarde seront stockés |
| server_name         | ZAP-Hosting Docs Test     | Nom qui apparaît dans la liste des serveurs pour votre serveur                       |
| server_password     | iLoveZAP!2024             | Définit un mot de passe requis pour rejoindre le serveur                            |
| server_is_public    | true/false                | Active ou désactive l’affichage du serveur dans le navigateur de serveurs           |
| server_port         | 3724 (par défaut)          | Définit le port réseau utilisé par le jeu                                           |
| server_query_port   | 27015 (par défaut)         | Définit le port de requête utilisé pour retourner des infos sur le serveur dans la liste |
| server_max_players  | 32                        | Définit le nombre maximum de joueurs pouvant être connectés simultanément           |

### Paramètres de Configuration du Gameplay

| Nom du Paramètre         | Exemple     | Description                                                                       |
| ------------------------ | ----------- | --------------------------------------------------------------------------------- | 
| pause_server_when_empty  | true/false  | Active ou désactive la mise en pause du serveur quand aucun joueur n’est en ligne |
| map_seed                 | 42938743982 | Définit une seed personnalisée pour la génération du monde                       |
| autosave_interval        | 300         | Définit la fréquence des sauvegardes automatiques en secondes                    |

Une fois vos modifications terminées, pensez bien à sauvegarder le fichier et à redémarrer votre serveur. Au prochain démarrage, votre serveur utilisera les paramètres que vous avez définis.

<InlineVoucher />