---
id: gameserver-subdomain
title: 'Serveur de jeux : Sous-domaine ZAP'
description: "Découvrez comment configurer et gérer les sous-domaines de votre serveur de jeux pour une meilleure accessibilité et personnalisation → En savoir plus maintenant"
sidebar_label: Sous-domaine Serveur de Jeux
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Nos serveurs de jeux offrent désormais la possibilité de configurer facilement et rapidement des sous-domaines pour votre serveur. Dans ce guide, vous découvrirez comment utiliser la fonctionnalité de sous-domaine DNS pour votre serveur afin de générer un sous-domaine ZAP Cloud ou configurer votre propre domaine.

<YouTube videoId="1fFagkzOvfo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/bbTYcXxCWXEYNrQ/preview" title="Domaine ZAP Cloud pour serveurs de jeux" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus immersive !"/>

![](https://screensaver01.zap-hosting.com/index.php/s/yJTBQ7oC926LfbT/preview)

<InlineVoucher />

## Disponibilité

La fonctionnalité de sous-domaine est disponible pour les nouveaux comme pour les clients existants. Les nouveaux clients auront un sous-domaine `xxx`**.zap.cloud** automatiquement configuré lors de l’installation. Les clients existants devront l’activer manuellement dans la section **Paramètres->Paramètres DNS** du panneau web de leur serveur de jeux. L’utilisation de cette section sera expliquée dans la partie suivante.

Tous les jeux ne sont pas encore supportés, mais nous sommes heureux de l’avoir déjà activé sur plusieurs jeux populaires comme FiveM, Minecraft et plus encore ! À long terme, nous souhaitons étendre cette fonctionnalité au maximum de jeux possible. Malheureusement, certains jeux rendent techniquement impossible l’ajout, et pour ces jeux, vous verrez simplement l’adresse IP comme d’habitude dans l’interface web.

:::tip
Si le jeu que vous avez installé n’est pas encore supporté, n’hésitez pas à [contacter notre équipe Support](https://zap-hosting.com/en/customer/support/) et nous verrons si nous pouvons l’ajouter :)
:::

## Gestion des sous-domaines (DNS)

Gérer la fonctionnalité de sous-domaine sur votre serveur de jeux est simple. Rendez-vous dans la section **Paramètres->Paramètres DNS** pour commencer.

Sur cette page, vous pourrez effectuer diverses tâches de gestion liées au sous-domaine gratuit ZAP Cloud ainsi qu’à l’utilisation de vos propres domaines configurés sur votre compte ZAP-Hosting.

![](https://screensaver01.zap-hosting.com/index.php/s/M6SMHKJcZ3GgXQd/preview)

:::info
Actuellement, vous pouvez avoir un maximum de 3 sous-domaines actifs par produit (sans compter le sous-domaine ZAP Cloud généré aléatoirement).
:::

### Sous-domaine ZAP Cloud aléatoire

Pour générer un sous-domaine ZAP Cloud aléatoire, vous devez utiliser le bouton **Résoudre les sous-domaines** situé sur cette page de paramètres.

:::info
Les clients existants doivent également utiliser ce bouton pour générer un sous-domaine ZAP Cloud aléatoire la première fois.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

### Sous-domaine ZAP Cloud personnalisé

Vous pouvez créer votre propre sous-domaine ZAP Cloud selon vos besoins, en saisissant simplement le sous-domaine que vous souhaitez utiliser et en sélectionnant **.zap.cloud** dans le menu déroulant (option par défaut).

:::note
Si vous recevez une erreur, il est possible que le sous-domaine soit déjà utilisé et/ou que vous ayez entré un mot ou caractère interdit pour protéger nos clients.
:::

Utilisez ensuite le bouton **Créer une entrée** et vous devriez voir le sous-domaine apparaître dans la liste. Il peut falloir quelques minutes avant qu’il soit pleinement fonctionnel.

![](https://screensaver01.zap-hosting.com/index.php/s/odqKSyzXRLi5zRx/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yWmt4j3nWEgbN6K/preview)

### Domaine personnel

:::info
Pour pouvoir utiliser votre propre domaine afin de créer un sous-domaine, assurez-vous qu’il est associé à votre compte ZAP-Hosting en [l’achetant sur notre site](https://zap-hosting.com/en/shop/product/domain/) ou en transférant le domaine depuis un autre fournisseur.
:::

Créer un sous-domaine avec votre propre domaine suit les mêmes étapes que pour un sous-domaine ZAP Cloud personnalisé. Saisissez le sous-domaine souhaité et sélectionnez votre domaine dans le menu déroulant.

:::note
Si vous recevez une erreur, il est possible que le sous-domaine soit déjà utilisé et/ou que vous ayez entré un mot ou caractère interdit pour protéger nos clients.
:::

Utilisez ensuite le bouton **Créer une entrée** et vous devriez voir le sous-domaine apparaître dans la liste. Il peut falloir quelques minutes avant qu’il soit pleinement fonctionnel.

![](https://screensaver01.zap-hosting.com/index.php/s/Xoe8c4T9TNpby27/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/AX9yFSb3nRNoKiF/preview)

## Résolution des problèmes

### Sous-domaine ZAP Cloud

Si vous rencontrez des problèmes avec les sous-domaines ZAP Cloud, vous pouvez essayer de résoudre cela vous-même en allant dans la section **Paramètres->Paramètres DNS** comme expliqué précédemment, et en utilisant le bouton **Résoudre les sous-domaines** en bas de page.

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

Patientez quelques minutes avant de vérifier à nouveau si tout fonctionne correctement.

### Domaine personnalisé

Si vous ne voyez pas votre propre domaine dans le menu déroulant lors de la création d’un sous-domaine, c’est probablement parce qu’il n’est pas associé à votre compte ZAP-Hosting.

Assurez-vous que le domaine est actif sur votre compte ZAP-Hosting, ce qui peut impliquer un transfert depuis un autre fournisseur.

Si vous avez toujours des soucis avec la fonctionnalité de sous-domaine, contactez notre équipe Support en [créant un ticket sur notre site](https://zap-hosting.com/en/customer/support/) et nous serons ravis de vous aider.

<InlineVoucher />