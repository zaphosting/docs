---
id: dedicated-windows-2016
title: "Serveur dédié : Installation de Windows Server 2016"
description: "Découvrez comment installer et configurer Windows Server sur votre serveur dédié pour des performances et une sécurité optimales → En savoir plus maintenant"
sidebar_label: Windows Server 2016
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Voici un guide étape par étape pour installer et configurer le système d’exploitation Windows Server sur votre serveur dédié. Suivez ces instructions attentivement pour réussir l’installation et exploiter au mieux votre système.

:::info Windows Server 2016
Les étapes d’installation et la démonstration dans ce guide sont basées sur Windows Server 2016 (design 2019 - même apparence). Les versions plus anciennes peuvent différer en structure et en apparence, mais la procédure reste similaire.
:::

:::warning Nouvelle version disponible / Détails EOL

La dernière version de Windows Server chez Microsoft est la version [2025](dedicated-windows.md). On recommande d’utiliser la version la plus récente pour vos projets longue durée.

Le support des anciennes versions de Windows Server sera arrêté tôt ou tard. Voici les dates clés pour la version 2016 :

- Support actif : 11.01.2022
- Support de sécurité : 12.01.2027

:::

## Préparation
Pour installer et configurer un système d’exploitation, il faut d’abord monter l’ISO correspondant. Plusieurs méthodes sont possibles :

1. Montage via la configuration initiale
2. Montage via iLO (Média virtuel)
3. Montage via iLO (Console distante)

Si tu ne connais pas encore le montage d’un fichier ISO, consulte notre [guide Configuration initiale](dedicated-setup.md) ou [ISO perso](dedicated-iso.md).

## Installation
Pour installer Windows Server, il te faut un fichier ISO. Tu peux choisir la version Windows souhaitée directement dans notre interface web. Sinon, tu peux utiliser un ISO perso, pour ça on a un [guide ISO perso](dedicated-iso.md).

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

Si cet écran apparaît dans ta console distante, c’est que l’ISO est bien chargé, on peut commencer l’installation.
Choisis ta langue préférée et clique sur "Suivant" pour continuer.

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Clique sur "Installer maintenant" pour lancer l’installation.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windows demande maintenant une clé produit. Entre-la si tu en as une.

:::note
On ne vend pas de licences Windows, il faut acheter ta clé toi-même.
:::

Tu peux acheter des clés Windows dans plusieurs boutiques en ligne, vérifie bien que la clé est valide pour ta version de Windows, car il y a différentes éditions.
Par exemple, Windows Server 2019 propose deux éditions : standard et datacenter.
Si tu n’es pas sûr, clique sur "Je n’ai pas de clé produit", tu pourras en ajouter une plus tard.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Sélectionne maintenant la version que tu souhaites installer.
Assure-toi de choisir la bonne version, car tu ne pourras pas la changer après.
Pense aussi à choisir une version avec "(Desktop Experience)", sinon Windows sera en mode shell.
Une fois ta sélection faite, marque la version et clique sur "Suivant".

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

Accepte les termes et continue en cliquant sur "Suivant".

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Choisis "Personnalisée" pour une installation propre de Windows. Tu peux choisir "Mise à niveau" si tu veux passer de 2016 à 2019 par exemple.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

À l’étape suivante, crée les partitions sur ton serveur dédié. En général, il n’y a pas encore de partitions. Si tu en vois, sélectionne-les et supprime-les.

Tu peux créer plusieurs petites partitions ou une grosse. Si tu fais plusieurs partitions, on recommande au moins 50 Go pour la partition principale Windows.
Clique sur "Nouveau" pour créer une partition.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

Tu peux aussi juste cliquer sur Appliquer pour une grosse partition. L’installation prendra automatiquement la taille maximale possible.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windows crée une petite partition système, accepte en cliquant sur "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

Si tes partitions te conviennent, choisis celle où installer Windows et clique sur "Suivant".
L’installation se lance et peut prendre plusieurs minutes.
Tu n’as rien à faire d’autre jusqu’à la fin.

## Configuration

Une fois l’installation terminée, Windows te demande de définir un mot de passe.

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

Choisis ton mot de passe.

:::info
On recommande un mot de passe fort avec des caractères spéciaux.

Si tu oublies ton mot de passe, il n’y a aucun moyen de le récupérer, alors note-le bien.
:::

Après avoir défini le mot de passe, tu arrives sur l’écran de verrouillage Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

Pour te connecter à Windows, appuie sur la combinaison `CTRL + ALT + DELETE`. Tu peux le faire facilement via ta console distante.
(Tu trouveras ça dans la console Java sous "Clavier")
Connecte-toi avec ton mot de passe.

Ensuite, il faut activer le Bureau à distance pour te connecter facilement à ton serveur.
Ouvre l’Explorateur Windows et fais un clic droit sur "Ce PC".

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Choisis Propriétés.

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Ouvre "Paramètres à distance".

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Accepte l’alerte du pare-feu avec "OK" et clique sur "Appliquer".

Ouvre maintenant le Bureau à distance sur ton PC et entre l’adresse IP de ton interface ZAP.
Le nom d’utilisateur est toujours Administrator et le mot de passe celui que tu as défini.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

Tu peux ignorer l’avertissement de certificat, coche "Ne plus m’avertir pour les connexions à cet ordinateur".
Valide en cliquant sur "Oui".

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

La connexion Bureau à distance s’établit et tu peux utiliser ton serveur dédié.
La configuration réseau est appliquée automatiquement via DHCP, aucune autre modification n’est nécessaire.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
Si tu as d’autres questions ou soucis, notre support est là pour t’aider !
:::

## Conclusion
Félicitations, tu as installé avec succès Windows Server 2016 sur ton serveur dédié. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’assister ! 🙂