---
id: vserver-ssh-default
title: "VPS : Gérer les clés SSH par défaut dans le profil"
description: "Découvrez comment automatiser la configuration des clés SSH pour un accès serveur plus rapide et des installations de produits simplifiées avec ZAP-Hosting → En savoir plus maintenant"
sidebar_label: Clés SSH par défaut
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Une des dernières nouveautés de notre interface web ZAP-Hosting est la possibilité d’ajouter des clés SSH par défaut à votre compte ZAP-Hosting via notre site. Le super avantage, c’est que les clés SSH configurées dans votre page Profil seront automatiquement utilisées par défaut lors de la première configuration du produit ou de la réinstallation du système d’exploitation. Ça vous fait gagner du temps car vous n’aurez plus à configurer manuellement vos clés SSH.

<InlineVoucher />

## Prérequis
Pour utiliser cette fonctionnalité, vous devez avoir une clé SSH générée. Si vous avez déjà une clé SSH prête, vous pouvez passer à la section suivante.

Pour générer une clé SSH, on vous recommande d’aller dans la section **Informations -> Accès & Sécurité** de l’interface web de votre vServer.

![](https://screensaver01.zap-hosting.com/index.php/s/N9FxTpdfibwCWSD/preview)

Vous verrez un bouton vert **Générer une clé SSH**. En cliquant dessus, votre clé privée SSH sera automatiquement téléchargée sur votre PC. C’est cette clé que vous utiliserez pour vous connecter à votre serveur une fois SSH configuré.

![](https://screensaver01.zap-hosting.com/index.php/s/tdYfxJYNBFC2R9k/preview)

Vous devez maintenant conserver la clé publique affichée dans la fenêtre, car c’est celle que vous devrez soumettre lors de la création de la clé SSH dans votre profil.

![](https://screensaver01.zap-hosting.com/index.php/s/Tc9MEGamAC9dDF3/preview)

Passez à la section suivante quand vous êtes prêt.

## Gérer la clé SSH dans le profil
Gérer vos clés SSH par défaut dans votre compte est simple. Rendez-vous sur votre **[page Profil ZAP-Hosting](https://zap-hosting.com/en/customer/home/profile/)** et descendez jusqu’à la section **Clés SSH standard**.

![](https://screensaver01.zap-hosting.com/index.php/s/QzefcYZWPGz3rJr/preview)

### Ajouter une nouvelle clé
Pour ajouter une clé, cliquez d’abord sur l’icône verte plus pour ouvrir la fenêtre de création. Dans cette fenêtre, commencez par choisir un nom approprié pour votre clé SSH.

Ensuite, collez votre clé publique SSH dans le deuxième champ. Votre clé SSH doit être au format OpenSSH, commençant par `ssh-rsa` et se terminant par un suffixe. Quand c’est prêt, cliquez sur le bouton vert **Enregistrer** pour ajouter la clé.

![](https://screensaver01.zap-hosting.com/index.php/s/CBTcDSiBLfNYi2R/preview)

:::tip
Assurez-vous de soumettre votre **clé publique SSH** et non la clé privée SSH. La clé privée SSH est utilisée lors de la connexion pour s’authentifier avec votre clé publique.
:::

Vous avez ajouté avec succès une clé SSH par défaut à votre compte ZAP-Hosting.

### Modifier ou supprimer une clé
Pour modifier une clé, cliquez simplement sur l’icône bleue en forme d’œil qui ouvrira une fenêtre. Dans cette fenêtre, vous pouvez voir les détails actuels et les modifier directement avant d’enregistrer.

De la même façon, pour supprimer une clé, cliquez sur l’icône rouge de la corbeille qui supprimera cette clé spécifique.

![](https://screensaver01.zap-hosting.com/index.php/s/56mPcDswpZBaHms/preview)

<InlineVoucher />