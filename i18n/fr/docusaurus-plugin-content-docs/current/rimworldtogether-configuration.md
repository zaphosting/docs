---
id: rimworldtogether-configuration
title: "RimWorld Together : Configuration du Serveur"
description: "Explore les paramètres du serveur RimWorld Together pour personnaliser le gameplay et gérer l’accès pour une expérience multijoueur sur-mesure → Découvre tout maintenant"
sidebar_label: Configuration du Serveur
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs RimWorld Together proposent une large gamme de paramètres de configuration que tu peux personnaliser à ta guise. Dans ce guide, on va explorer tous les paramètres disponibles actuellement et expliquer chacun en détail.

<InlineVoucher />

## Accéder à ton Fichier de Configuration

D’abord, tu devras accéder à ton fichier de configuration pour pouvoir modifier les paramètres. Pour l’instant, la seule façon d’éditer ces fichiers est via FTP. Si tu n’es pas familier avec l’utilisation du FTP, on te recommande de jeter un œil au [guide Accès via FTP](gameserver-ftpaccess.md).

:::note
Le serveur doit être arrêté avant de modifier les configs, sinon les changements seront annulés au redémarrage.
:::

Avec ton client FTP prêt, navigue vers ce répertoire :
```
../rimworld-together/Core
```

Ce dossier contient une variété de fichiers de configuration `.json` pour ton serveur RimWorld Together.

![](https://screensaver01.zap-hosting.com/index.php/s/76g3TcY9TCLyFsH/preview)

## Options de Configuration du Serveur

Dans les sections ci-dessous, on te présente comment ajuster quelques options populaires et courantes pour ton serveur RimWorld Together. Tu peux en apprendre plus sur chaque fichier en lisant le [guide officiel RimWorld Together](https://rimworldtogether.github.io/Guide/selfhosting/getting-started.html#core) qui couvre les options de configuration.

:::tip
On ne recommande pas de modifier le Port ou l’IP dans le fichier **ServerConfig.json**, car ils sont configurés automatiquement par le serveur de jeux. Changer ces valeurs pourrait casser ton serveur !
:::

#### Liste Blanche du Serveur

Activer ou désactiver la liste blanche du serveur est simple. Ouvre le fichier de configuration **Whitelist.json** et mets le paramètre `UseWhitelist` à true.

Ensuite, ajuste le paramètre `WhitelistedUsers` en ajoutant les pseudos en jeu des personnes que tu souhaites autoriser. Tous ceux qui ne sont pas sur cette liste ne pourront plus se connecter.

#### Paramètres de Gameplay

Tu peux modifier plein de paramètres de difficulté pour ton serveur RimWorld Together via le fichier **DifficultyValues.json**.

Tu peux aussi ajuster les paramètres de sauvegarde via le fichier **WorldConfig.json**. On te conseille de ne pas modifier ça en plein milieu de ta partie, ça pourrait gâcher l’expérience.

<InlineVoucher />