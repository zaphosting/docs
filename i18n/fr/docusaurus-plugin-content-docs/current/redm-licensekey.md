---
id: redm-licensekey
title: "RedM : Ajouter une clé de licence personnalisée"
description: "Découvrez comment créer et gérer votre propre clé de licence RedM pour débloquer les avantages d’abonnement et personnaliser la configuration de votre serveur → En savoir plus maintenant"
sidebar_label: Clé de licence perso
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Par défaut, votre serveur de jeux RedM est livré avec une clé de licence générée automatiquement. Modifier cela et utiliser votre propre clé de licence RedM peut être utile pour plusieurs raisons, notamment pour accéder aux avantages de votre abonnement RedM Element Club comme Onesync, changer le propriétaire du serveur à votre nom, et bien plus encore. Dans ce guide, on va voir comment créer et ajouter votre propre clé de licence à votre serveur de jeux RedM.

<InlineVoucher />

## Préparation

Pour commencer le processus de création de clé, rendez-vous sur le site officiel **[Cfx.re Portal](https://portal.cfx.re/)** et connectez-vous avec votre compte du forum Cfx.re. Si vous n’avez pas encore de compte, vous pouvez choisir l’option d’inscription pour en créer un nouveau.

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info Nouveau portail Cfx.re
Le portail Cfx.re est le nouveau hub pour tout ce qui concerne RedM, remplaçant l’ancien RedM Keymaster et les solutions Patreon. Sur ce nouveau portail, vous pouvez gérer vos clés de licence serveur, accéder à tous les assets que vous avez achetés et gérer votre abonnement RedM, le tout au même endroit.

On vous recommande vivement de lire le [post officiel sur le blog](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/) pour tout savoir sur la migration des abonnements Patreon vers le nouveau portail Cfx.re afin de conserver vos avantages.
:::

## Génération de la clé de licence

Une fois connecté au portail, allez dans la section **Servers** via la barre de navigation en haut pour accéder à la gestion principale des clés. Cette section remplace l’ancien site RedM Keymaster dans un portail tout-en-un super pratique. Vous pouvez aussi rafraîchir n’importe quelle clé de licence en utilisant l’option **Re-Activate** sur cette page.

Cliquez sur le bouton **Generate Key** pour ouvrir la fenêtre d’enregistrement.

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

Dans la fenêtre, entrez un nom utile pour la clé afin de la reconnaître facilement plus tard. Cliquez sur générer quand vous êtes prêt.

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

Vous devriez maintenant voir une nouvelle entrée dans le tableau avec la clé que vous venez de générer. Copiez la clé avec les boutons d’action à droite et gardez-la sous la main pour la suite.

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## Ajouter la clé au serveur

Avec la clé de licence prête, il faut maintenant remplacer la clé existante sur votre serveur de jeux RedM par la nouvelle clé personnalisée. Pour ça, vous devez accéder au panneau txAdmin de votre serveur RedM. Vous le trouverez dans le tableau de bord de l’interface web de votre serveur de jeux. Utilisez les identifiants affichés sur la page pour vous connecter au panneau.

Une fois dans l’interface txAdmin, allez dans l’**Éditeur CFG** à gauche pour accéder au fichier `server.cfg`. Dans l’éditeur, trouvez la ligne avec le paramètre `sv_licensekey` et remplacez-la par votre clé de licence personnalisée. Cliquez sur sauvegarder une fois que c’est fait.

![img](https://screensaver01.zap-hosting.com/index.php/s/KKQ8aRBKo9246yR/preview)

## Conclusion

Après avoir configuré la clé de licence personnalisée, redémarrez votre serveur pour commencer à l’utiliser. Vous avez réussi à ajouter une clé de licence personnalisée à votre serveur de jeux RedM. Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />