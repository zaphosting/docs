---
id: rust-becomeadmin
title: "Rust : Deviens admin sur ton propre serveur"
description: "Découvre comment attribuer les permissions d’administrateur pour un contrôle total de ton serveur et gérer ton jeu efficacement → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer les permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes pour attribuer les permissions d’administrateur à ton serveur sont décrites ci-dessous.  
<InlineVoucher />

## Devenir admin via RCON

Avec RCON, tu peux exécuter une commande directement pour te rendre admin.  
D’abord, tu dois [te connecter via RCON](rust-connectrcon.md).

Une fois connecté, rends-toi à l’endroit où tu peux lancer des commandes console. Dans notre exemple, on utilise RustAdmin.

![](https://screensaver01.zap-hosting.com/index.php/s/zpJH32AHCySP8qT/preview)

Ici, tu lanceras la commande suivante :  
`ownerid Steam64ID`

:::info
Remplace **Steam64ID** par ton vrai Steam64ID. Tu peux trouver ton Steam64ID avec cet [outil](https://steamid.io/)
:::

Tu seras alors directement promu admin.

:::info
Si tu es en jeu quand tu lances la commande, il suffit de te reconnecter au serveur.
:::

Et voilà, tu es maintenant administrateur ! :)

## Devenir admin via FTP

Sinon, tu peux aussi t’attribuer les droits d’admin directement via FTP.  
D’abord, connecte-toi via [accès FTP](gameserver-ftpaccess.md).

Une fois connecté, rends-toi dans ce dossier :

`/g#####/rust/server/<ton_sauvegarde_serveur>/cfg`

Dans ce dossier, tu dois **créer** un **nouveau fichier** nommé **users.cfg**

Dans ce fichier, ajoute tes entrées avec ce format :

`<rôle> <Steam64ID> <raison/utilisateur>`

:::info
Remplace **Steam64ID** par ton vrai Steam64ID. Tu peux trouver ton Steam64ID avec cet [outil](https://steamid.io/)
:::

Voici un exemple d’entrée :

```
ownerid 76561198114248380 "Tu peux écrire ce que tu veux ici pour référence"
moderatorid 76561198114248380 "Personne de test"
```
:::info
Tu devras redémarrer ton serveur pour que ça prenne effet.
:::

## Conclusion

Félicitations, tu as configuré avec succès les permissions d’administrateur. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />