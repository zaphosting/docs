---
id: soulmask-configuration
title: "Soulmask : Configuration du Serveur"
description: "Découvrez comment personnaliser les paramètres du serveur Soulmask et optimiser les configurations de jeu pour une expérience sur-mesure → En savoir plus maintenant"
sidebar_label: Configuration du Serveur
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs Soulmask offrent une large gamme de paramètres de configuration que tu peux personnaliser à ta guise. Dans ce guide, on va explorer tous les paramètres de configuration disponibles actuellement et expliquer chacun en détail.

<InlineVoucher />

## Accéder à ton Fichier de Configuration

Tout d’abord, tu devras accéder à tes fichiers de configuration pour pouvoir modifier les paramètres. Tu peux ajuster les réglages de ton serveur via le webinterface et les paramètres de gameplay via FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

La méthode principale pour accéder aux options de configuration de ton serveur est de te rendre dans la section **Paramètres** sur le webinterface de ton serveur de jeux et chercher les réglages appropriés, comme montré ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Le serveur doit être arrêté avant de pouvoir modifier la config, éditer la config puis redémarrer le serveur annulera toutes les modifications.
:::

La méthode principale pour accéder à ton fichier de configuration de gameplay est via FTP. Si tu n’es pas familier avec l’utilisation du FTP, on te recommande de jeter un œil au [guide Accès via FTP](gameserver-ftpaccess.md).

</TabItem>
</Tabs>

## Options de Configuration du Serveur
Dans les sections suivantes, on va voir comment accéder aux options de configuration ainsi qu’explorer certaines des options disponibles pour les réglages du serveur et du gameplay.

### Paramètres Importants du Serveur

Actuellement, la seule façon de modifier les paramètres du serveur est via la section **Paramètres** sur le webinterface de ton serveur de jeux. Dans cette section, tu pourras ajuster les éléments suivants :

| Nom du Paramètre     | Exemple               | Description                                             |
| -------------------- | --------------------- | ------------------------------------------------------- | 
| Nom du serveur       | ZAP-Hosting Docs Test | Définit le nom de ton serveur                           |
| Mot de passe serveur | iLoveZAP!2024         | Définit un mot de passe pour ton serveur, ou laisse vide pour aucun |
| Mot de passe Admin   | iLoveZAP!2024         | Définit un mot de passe pour l’accès Admin              |
| Mode de jeu          | PVE/PVP               | Choisis si tu veux que ton jeu soit en PVE ou PVP       |

Une fois que tu as fini, n’oublie pas d’utiliser le bouton sauvegarder en bas de la section et de redémarrer ton serveur.

### Paramètres de Configuration du Gameplay

Pour le moment, la seule option pour accéder au fichier de configuration est via FTP. Assure-toi d’arrêter ton serveur avant de modifier le fichier, sinon les changements risquent d’être annulés.

Rends-toi au chemin suivant et ouvre le fichier **GameXishu.json** :
```
../soulmask/WS/Saved/GameplaySettings
```

Ce fichier contient un grand nombre d’options de configuration de gameplay que tu peux ajuster selon tes préférences.

Après avoir effectué tes modifications, pense à sauvegarder le fichier au bon endroit et à redémarrer ton serveur. La prochaine fois que ton serveur démarrera, il utilisera les paramètres que tu as définis.

<InlineVoucher />