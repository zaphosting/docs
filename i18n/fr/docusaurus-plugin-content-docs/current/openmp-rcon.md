---
id: openmp-rcon
title: "Open.mp : Serveur utilisant RCON"
description: "Découvrez comment gérer à distance vos serveurs de jeux avec RCON pour un contrôle efficace et sécurisé → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Qu’est-ce que RCON ?

RCON est une interface présente dans plusieurs programmes, comme les serveurs de jeux, qui permet la maintenance et l’administration à distance. Cette interface sert à gérer des serveurs déjà en fonctionnement et accessibles. On peut y accéder via un programme spécifique de maintenance à distance pour administrer le serveur.

<InlineVoucher />

## Accéder à votre fichier de configuration

Pour utiliser RCON, il faut d’abord accéder à la configuration de votre serveur et activer cette fonctionnalité. Vous pouvez modifier le fichier de configuration soit via le webinterface de votre serveur, soit directement via FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="configs" label="Via fichier de config WI">

#### Via le fichier de config Webinterface

On recommande cette méthode car c’est la plus simple.

:::note
Le serveur doit être arrêté avant de modifier la config, sinon les changements seront annulés au redémarrage.
:::

Rendez-vous simplement dans la section **Configs** du webinterface de votre serveur de jeux et cliquez sur le bouton bleu d’édition du fichier, comme ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Un éditeur de texte s’ouvre pour modifier directement le fichier. Cherchez la section `rcon`. Là, mettez le paramètre `enable` à `true`, par exemple : `"enable":true`. On conseille d’utiliser `CTRL+F` pour ouvrir la recherche dans votre navigateur.

Dans cette même section, configurez aussi un mot de passe pour l’accès à l’interface RCON en modifiant le paramètre `password`. Cela évite tout accès non autorisé et doit rester secret.

![](https://screensaver01.zap-hosting.com/index.php/s/WPPbd6C7k6m5Ja7/preview)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Le serveur doit être arrêté avant de modifier la config, sinon les changements seront annulés au redémarrage.
:::

Une autre méthode pour modifier votre fichier de configuration est via FTP. Si vous ne connaissez pas FTP, on vous conseille de jeter un œil au [guide Accès via FTP](gameserver-ftpaccess.md). Cela dit, cette méthode est plus longue et si vous voulez modifier directement le contenu du fichier, mieux vaut utiliser la section **Configs** du webinterface comme expliqué plus haut.

Une fois connecté en FTP à votre serveur, allez dans ce répertoire :
```
..g[zap_id]/gta-openmp/
```

Dans ce chemin, trouvez le fichier `config.json` et ouvrez-le. C’est le fichier de configuration du serveur à modifier.

Dans ce fichier, cherchez la section `rcon`. Mettez le paramètre `enable` à `true` et définissez un mot de passe pour l’interface RCON via le paramètre `password`.

</TabItem>
</Tabs>

:::info
N’oubliez pas de redémarrer votre serveur après avoir modifié la configuration.
:::

## Utiliser RCON

Maintenant que vous avez activé RCON dans la config de votre serveur, vous pouvez accéder à l’interface RCON d’Open.mp via le port défini dans le fichier.

Il vous faudra un programme RCON pour vous connecter. On recommande [RCON Console](https://sourceforge.net/projects/rconconsole/) car c’est open-source.

Dans le programme RCON de votre choix, entrez l’adresse IP et le port de votre serveur. Assurez-vous que votre serveur de jeux est en ligne et actif.

Si la connexion marche, vous pourrez envoyer des commandes à votre serveur Palworld via le programme RCON Console que vous avez choisi.

:::tip
Jetez un œil à notre [Commandes Serveur](openmp-server-commands.md) pour voir toutes les commandes disponibles à lancer via RCON.
:::

Vous avez activé RCON avec succès sur votre serveur Palworld.

<InlineVoucher />