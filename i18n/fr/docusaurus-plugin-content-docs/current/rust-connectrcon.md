---
id: rust-connectrcon
title: "Rust : Se connecter au serveur via RCON"
description: "Découvrez comment gérer votre serveur à distance avec RCON pour une exécution efficace des commandes et un contrôle optimal → En savoir plus maintenant"
sidebar_label: Connexion via RCON
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Qu’est-ce que RCON ?

RCON est un protocole permettant d’exécuter des commandes sur le serveur sans avoir un accès direct à la console.

<InlineVoucher />

### Activer WebRCON

Avant de pouvoir vous connecter, vous devez d’abord vous assurer que Web RCON est activé.
Pour l’activer, rendez-vous dans l’onglet **Paramètres**.

![](https://screensaver01.zap-hosting.com/index.php/s/RqpZcnBcEHY3gN2/preview)

Puis activez-le directement sur cette page.
![](https://screensaver01.zap-hosting.com/index.php/s/wJ5psnbAneZ6rMD/preview)

:::info
Un redémarrage du serveur est nécessaire pour que la modification soit prise en compte. 
:::

### Installer un programme RCON

Vous devrez vous connecter via un programme RCON. Plusieurs options sont disponibles.
Pour cet exemple, et en recommandation, vous pouvez télécharger [RustAdmin](https://www.rustadmin.com/).

Vous pouvez l’installer directement via le bouton sur leur site.
![](https://screensaver01.zap-hosting.com/index.php/s/zNtESocaQPFwzCg/preview)

## Connexion via RCON

Une fois WebAdmin ouvert, cliquez sur **Server** en haut. Puis cliquez sur **Connect**.

:::info
Votre serveur doit être entièrement EN LIGNE pour être accessible via RCON. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bHLwGDCqH52Bye8/preview)

Vous serez alors redirigé vers une page de configuration.
Ici, vous devez entrer les informations de votre serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/qmQFd7S79EpYWTE/preview)

:::info
ASTUCE : Le port RCON et le mot de passe RCON se trouvent dans l’onglet **Paramètres** où vous avez activé WebRCON. 
:::

Une fois vos données saisies, vous pouvez enregistrer la configuration.

![](https://screensaver01.zap-hosting.com/index.php/s/FDMqdsfAHrbiTpt/preview)

Puis cliquez sur Server -> Connect.

![](https://screensaver01.zap-hosting.com/index.php/s/4DLGZiQ5X6WJrzA/preview)

Si la connexion réussit, vous verrez **Connected** en vert en bas.

![](https://screensaver01.zap-hosting.com/index.php/s/qzq68ENHzXGK69T/preview)

Vous pouvez maintenant utiliser RCON pour gérer votre serveur ! :) 


<InlineVoucher />