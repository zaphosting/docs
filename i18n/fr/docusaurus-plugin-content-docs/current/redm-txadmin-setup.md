---
id: redm-txadmin-setup
title: "RedM : Configuration de txAdmin"
description: "Découvrez comment gérer et surveiller efficacement votre serveur RedM avec le panneau web complet de txAdmin → En savoir plus maintenant"
sidebar_label: Configuration de txAdmin
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

txAdmin est un panneau web complet et totalement gratuit pour gérer et surveiller votre serveur RedM. Il offre une large gamme de fonctionnalités conçues pour rendre la gestion d’un serveur RedM super simple. La configuration de txAdmin est entièrement gratuite, commencez votre aventure avec le panneau web RedM le plus simple, mais ultra fonctionnel.

<InlineVoucher />

## Accès

Vous trouverez un lien et les données d’accès pour txAdmin dans la section txAdmin du tableau de bord de votre serveur de jeux. Cela vous donne toutes les infos nécessaires pour accéder facilement à l’interface txAdmin et commencer la configuration.

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

Copiez les infos pour le nom d’utilisateur et le mot de passe, puis cliquez sur le lien (adresse IP:port) pour accéder à l’interface txAdmin et vous connecter. L’interface txAdmin s’ouvrira alors dans une nouvelle fenêtre, où vous devrez vous connecter avec les identifiants fournis.

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## Configuration

Maintenant que vous êtes connecté avec succès, vous pouvez commencer à configurer txAdmin et votre serveur. Vous devriez voir la page d’accueil de txAdmin (tableau de bord). En haut à gauche, un message vous indique que votre serveur doit encore être configuré. Cliquez sur **Aller à la page de configuration** pour démarrer le processus.

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### Bienvenue et nom du serveur

Ensuite, définissez un nom de serveur que vous souhaitez utiliser pour votre projet. Ce nom n’est pas destiné à la liste des serveurs, mais uniquement pour l’interface txAdmin et les messages dans le chat/Discord.

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### Type de déploiement

Sous Type de déploiement, vous devez maintenant choisir comment vous souhaitez configurer votre serveur. Vous avez les options suivantes : **Recettes populaires**, Données de serveur existantes, **Modèle URL distant**, et **Modèle personnalisé**. Chaque option est expliquée plus en détail ci-dessous pour vous aider à choisir celle qui correspond le mieux à vos besoins.

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### Modèle populaire

Les modèles populaires sont des packages préfabriqués prêts à l’emploi, ce qui en fait la manière la plus simple de lancer votre serveur RedM. Si c’est votre premier serveur, cette option est fortement recommandée. Ces modèles incluent toutes les configurations et ressources nécessaires pour mettre en place rapidement un serveur fonctionnel, vous permettant de vous concentrer sur la personnalisation et le gameplay plutôt que sur la configuration initiale. Choisissez simplement un modèle qui correspond à vos besoins.

![](https://screensaver01.zap-hosting.com/index.php/s/rrw962gMMpn86fW/preview)



### Données de serveur existantes

Utilisez cette option si vous avez déjà exploité un serveur avec txAdmin et souhaitez maintenant l’héberger chez nous. Dans ce cas, vous pouvez simplement uploader les données du serveur via FTP et spécifier le chemin lors de la configuration. Si vous ne connaissez pas encore l’utilisation du FTP en général, n’hésitez pas à consulter notre [guide d’accès FTP](gameserver-ftpaccess.md). Ce guide vous expliquera les étapes pour assurer un transfert fluide de vos fichiers serveur, afin que vous puissiez rapidement remettre votre serveur en ligne sur notre plateforme.

![img](https://screensaver01.zap-hosting.com/index.php/s/jCZ4DffkkAHA6dj/preview)





### Modèle URL distant

Si vous souhaitez appliquer un modèle qui n’est pas lié directement dans txAdmin, cette fonctionnalité vous permet de spécifier une recette personnalisée via une URL distante. Cette recette sera récupérée et exécutée sur votre serveur. Cette option est particulièrement utile pour déployer des configurations personnalisées ou des setups spécifiques qui ne sont pas inclus dans les options par défaut de txAdmin. En fournissant l’URL, txAdmin téléchargera et appliquera automatiquement le modèle, garantissant que votre serveur est configuré selon vos besoins précis.

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### Modèle personnalisé

Cette option est destinée aux utilisateurs qui ont déjà créé leur propre recette et souhaitent la recharger. Elle vous permet d’appliquer rapidement et facilement vos configurations personnalisées sans avoir à tout refaire depuis zéro. Sélectionnez simplement votre recette existante, et txAdmin s’occupe du reste, assurant que votre serveur est configuré exactement comme vous le souhaitez.

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### Déployeur de recette

Après avoir choisi un Type de déploiement et suivi les étapes indiquées, vous pouvez terminer en cliquant sur **Aller au déployeur de recette**. Là, vous devrez compléter les étapes finales : **Revoir la recette**, **Saisir les paramètres**, **Exécuter la recette**, et **Configurer server.cfg**.

À la première étape, vous pouvez personnaliser davantage la recette sélectionnée ou ajoutée. Si aucune modification n’est nécessaire, passez à l’étape 2. Ici, vous pouvez entrer votre propre [clé de licence](redm-licensekey.md) et vérifier les infos de la base de données. Une fois tout en ordre, cliquez sur **Exécuter la recette**. Ce processus peut prendre un moment. Enfin, vous pouvez ajuster le fichier de configuration du serveur (`server.cfg`) selon vos besoins.

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

Pour finir, cliquez sur **Enregistrer & Démarrer le serveur**. La configuration de txAdmin est maintenant terminée, vous pouvez vous connecter à votre serveur.


## Support supplémentaire

Pour un support spécifique à txAdmin, contactez l’équipe txAdmin via leur [site officiel](https://txadm.in/) ou rejoignez la communauté sur [Discord](https://discord.gg/txAdmin/). La communauté et l’équipe de support sont là pour vous aider avec toutes vos questions ou problèmes liés à txAdmin, afin que vous profitiez au max de la gestion de votre serveur.

<InlineVoucher />