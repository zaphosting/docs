---
id: rust-decay
title: "Rust : Modifier la dégradation"
description: "Découvrez comment ajuster les taux de dégradation sur votre serveur Rust et sauvegarder les configurations pour un meilleur contrôle du gameplay → En savoir plus maintenant"
sidebar_label: Dégradation
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Avec RCON, tu peux lancer une commande directement pour te donner les droits admin. D'abord, il faut [se connecter via RCON](rust-connectrcon.md).

:::info
Le serveur doit être complètement démarré pour pouvoir se connecter via RCON.
:::

Une fois connecté, va dans la section Console, où tu peux exécuter des commandes. Dans notre exemple, on utilise **RustAdmin**.

Tu peux modifier le taux de dégradation comme suit :

`decay.scale 1.0` est le taux de dégradation normal<br/>
`decay.scale 0.5` réduit le taux de dégradation de 50%<br/>
`decay.scale 0` désactive complètement la dégradation<br/>

Par exemple, si tu veux désactiver complètement la dégradation, il faut exécuter la commande

```decay.scale 0``` puis appuie sur Entrée après avoir tapé la commande.

Tu peux vérifier dans l’onglet console si la commande a bien été envoyée.

![](https://screensaver01.zap-hosting.com/index.php/s/J4HPW5Dee93BDJP/preview)

Pour sauvegarder tes modifications, il faut envoyer

```server.writecfg``` une fois et valider avec Entrée.

![](https://screensaver01.zap-hosting.com/index.php/s/kEbCodqYTf8tqKp/preview)

Si ta console affiche maintenant `Config Saved`, le serveur a bien pris en compte tes changements.


<InlineVoucher />