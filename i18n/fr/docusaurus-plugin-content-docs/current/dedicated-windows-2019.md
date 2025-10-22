---
id: dedicated-windows-2019
title: "Serveur dédié : Installation de Windows Server 2019"
description: "Découvrez comment installer et configurer Windows Server sur votre serveur dédié pour des performances et une sécurité optimales → En savoir plus maintenant"
sidebar_label: Windows Server 2019
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Ce guide vous explique étape par étape comment installer et configurer le système d’exploitation Windows Server sur votre serveur dédié. Suivez ces instructions attentivement pour garantir une installation réussie et une utilisation optimale.

:::info Windows Server 2019
Les étapes d’installation et la démonstration dans ce guide sont basées sur le système d’exploitation Windows Server 2019. Les versions plus anciennes peuvent différer en termes de structure et d’apparence. Cependant, la procédure reste similaire.
:::

:::warning Nouvelle version disponible / Détails EOL

La dernière version de Windows Server proposée par Microsoft est la version [2025](dedicated-windows.md). Nous recommandons d’utiliser la version la plus récente pour vos projets à long terme.

Le support des anciennes versions de Windows Server sera arrêté tôt ou tard. Voici les dates clés pour la version 2019 :

- Support actif : 09.01.2024
- Support de sécurité : 09.01.2029

:::

<InlineVoucher />

## Préparation
Pour l’installation et la configuration d’un système d’exploitation, il est d’abord important de monter l’ISO correspondant. Plusieurs méthodes sont possibles :

1. Montage via la configuration initiale
2. Montage via iLO (Média virtuel)
3. Montage via iLO (Console distante)

Si vous ne savez pas encore comment monter un fichier ISO, référez-vous à notre [guide de configuration initiale](dedicated-setup.md) ou au guide [ISO perso](dedicated-iso.md).



## Installation
Pour installer un Windows Server, vous aurez besoin d’un fichier ISO de votre choix. Vous pouvez sélectionner la version Windows souhaitée dans notre interface web. Sinon, vous pouvez utiliser un ISO perso, pour cela consultez notre guide [ISO perso](dedicated-iso.md).

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

Si cet écran apparaît dans la console distante que vous utilisez, cela signifie que l’ISO est chargé avec succès, on peut maintenant commencer l’installation.
Choisissez votre langue préférée et cliquez sur « Suivant » pour continuer.

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Cliquez sur « Installer maintenant » pour lancer le processus d’installation.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windows demande maintenant une clé produit. Saisissez-la si vous en avez une.

:::note
Nous ne vendons pas de licences Windows, il faut acheter une clé par vos propres moyens.
:::

Vous pouvez acheter des clés Windows dans plusieurs boutiques en ligne, vérifiez bien que la clé est valide pour votre version de Windows, car il existe différentes éditions.
Par exemple, Windows Server 2019 propose deux éditions : la classique et la Datacenter.
Si vous n’êtes pas sûr de ce dont vous avez besoin, cliquez sur « Je n’ai pas de clé produit », vous pourrez toujours en ajouter une plus tard.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Sélectionnez maintenant la version que vous souhaitez installer.
Assurez-vous de choisir la bonne version, il ne sera pas possible de la changer après.
Pensez aussi à choisir une version avec « (Desktop Experience) », sinon votre Windows sera en mode shell.
Une fois votre choix fait, sélectionnez la version et cliquez sur « Suivant ».

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

Acceptez les termes et continuez en cliquant sur « Suivant ».

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Choisissez « Personnalisée » si vous voulez faire une installation propre de Windows. Vous pouvez choisir « Mise à niveau » si vous souhaitez passer par exemple de 2016 à 2019.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

À l’étape suivante, vous devez créer des partitions sur votre serveur dédié. En général, il ne devrait pas y avoir de partitions créées. Si des entrées apparaissent, sélectionnez-les et supprimez-les.

Vous pouvez créer plusieurs petites partitions ou une grosse. Si vous créez des partitions plus petites, on recommande d’avoir au moins 50 Go pour la partition principale de Windows.
Cliquez sur « Nouveau » pour créer une partition.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

Vous pouvez simplement cliquer sur Appliquer si vous voulez une seule grosse partition. L’installation prendra automatiquement la taille maximale possible.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windows a besoin d’une petite partition système, acceptez en cliquant sur « OK ».

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

Si vos partitions vous conviennent, choisissez celle sur laquelle Windows doit être installé et cliquez sur « Suivant ».
L’installation de Windows se lance alors automatiquement, cela peut prendre plusieurs minutes.
Il n’y a rien d’autre à faire jusqu’à la fin de l’installation.

## Configuration

Une fois l’installation terminée, Windows vous demandera de définir un mot de passe.

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

Choisissez votre mot de passe.

:::info
On recommande de choisir un mot de passe fort avec des caractères spéciaux.

Si vous oubliez le mot de passe, il n’y a aucun moyen de le récupérer, alors pensez bien à le noter.
:::

Après avoir défini le mot de passe, vous arrivez sur l’écran de verrouillage de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

Pour vous connecter à Windows, appuyez sur la combinaison de touches `CTRL + ALT + DELETE`. Vous pouvez le faire facilement via votre console distante.
(Vous trouverez cette option dans la console Java sous « Clavier »)
Connectez-vous avec votre mot de passe.

À l’étape suivante, il faut activer le Bureau à distance, ainsi vous pourrez vous connecter facilement à votre serveur.
Ouvrez l’Explorateur Windows et faites un clic droit sur « Ce PC »

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Choisissez Propriétés.

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Ouvrez « Paramètres à distance »

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Acceptez les informations du pare-feu qui s’affichent avec « OK » puis cliquez sur « Appliquer »

Ouvrez maintenant le Bureau à distance sur votre ordinateur et entrez l’adresse IP de votre interface ZAP.
Le nom d’utilisateur est toujours Administrator et le mot de passe celui que vous avez défini précédemment.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

Vous pouvez ignorer l’avertissement de certificat, cochez la case « Ne plus m’avertir pour les connexions à cet ordinateur ».
Validez en cliquant sur « Oui ».

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

La connexion Bureau à distance s’établit maintenant avec votre serveur dédié et vous pouvez l’utiliser.
La configuration réseau est appliquée automatiquement via DHCP, aucune modification supplémentaire n’est nécessaire.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
Si vous avez d’autres questions ou problèmes, notre support est là pour vous aider !
:::


## Conclusion
Félicitations, vous avez installé avec succès Windows Server 2019 sur votre serveur dédié. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />