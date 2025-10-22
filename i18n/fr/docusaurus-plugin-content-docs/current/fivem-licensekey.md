---
id: fivem-licensekey
title: "FiveM : Ajouter une clé de licence personnalisée"
description: "Découvrez comment créer et gérer votre propre clé de licence FiveM pour débloquer les avantages de l’abonnement et personnaliser la configuration de votre serveur → En savoir plus maintenant"
sidebar_label: Clé de licence perso
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Par défaut, votre serveur de jeux FiveM est livré avec une clé de licence générée automatiquement. Modifier cela et utiliser votre propre clé de licence FiveM peut être super utile pour plusieurs raisons, comme accéder aux avantages de votre abonnement FiveM Element Club tels que Onesync, changer le propriétaire du serveur à votre nom, et bien plus encore. Dans ce guide, on va voir comment créer et ajouter votre propre clé de licence à votre serveur de jeux FiveM.

<InlineVoucher />

## Préparation

Pour commencer la création de la clé, rendez-vous sur le site officiel **[Cfx.re Portal](https://portal.cfx.re/)** et connectez-vous avec votre compte du forum Cfx.re. Si vous n’avez pas encore de compte, vous pouvez choisir l’option d’inscription pour en créer un nouveau.

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info Nouveau portail Cfx.re
Le portail Cfx.re est le nouveau hub pour tout ce qui concerne FiveM, remplaçant l’ancien Keymaster et les solutions Patreon. Sur ce nouveau portail, vous pouvez gérer vos clés de licence serveur, accéder à tous les assets que vous avez achetés et gérer votre abonnement FiveM, le tout au même endroit.

On vous recommande vivement de lire le [post officiel](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/) pour tout savoir sur la migration des abonnements Patreon vers le nouveau portail Cfx.re afin de conserver vos avantages.
:::

## Génération de la clé de licence

Une fois connecté au portail, allez dans la section **Servers** via la barre de navigation en haut pour accéder à la gestion principale des clés. Cette interface remplace l’ancien site Keymaster FiveM dans un portail tout-en-un. Vous pouvez aussi rafraîchir une clé existante en utilisant l’option **Re-Activate** sur cette page.

Cliquez sur le bouton **Generate Key** pour ouvrir la fenêtre d’enregistrement.

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

Dans la fenêtre, entrez un nom utile pour la clé afin de la reconnaître facilement plus tard. Cliquez sur générer quand vous êtes prêt.

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

Vous devriez maintenant voir une nouvelle entrée dans le tableau avec la clé que vous venez de générer. Copiez la clé avec les boutons d’action à droite et gardez-la sous la main pour la suite.

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## Ajout de la clé au serveur

Avec la clé de licence prête, il faut maintenant remplacer la clé existante sur votre serveur de jeux FiveM par la nouvelle. Pour ça, vous devez accéder au panneau txAdmin de votre serveur FiveM via le tableau de bord web de votre serveur. Utilisez les identifiants affichés sur la page pour vous connecter au panneau.

Une fois dans l’interface txAdmin, allez dans **CFG Editor** à gauche pour ouvrir le fichier `server.cfg`. Dans l’éditeur, trouvez la ligne avec le paramètre `sv_licensekey` et remplacez-la par votre clé personnalisée. Cliquez sur sauvegarder quand c’est fait.

![](https://screensaver01.zap-hosting.com/index.php/s/2E8j9jtykcjwF7L/preview)

## Conclusion

Après avoir configuré votre clé de licence personnalisée, redémarrez votre serveur pour qu’elle soit prise en compte. Vous avez réussi à ajouter une clé de licence perso à votre serveur de jeux FiveM. Pour toute question ou aide, n’hésitez pas à contacter notre support, dispo tous les jours pour vous filer un coup de main ! 🙂

<InlineVoucher />