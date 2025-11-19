---
id: dedicated-linux-fivem
title: "Serveur dédié : Configuration d’un serveur dédié FiveM Linux (Interface GS/TS3)"
description: "Découvrez comment configurer et faire tourner votre propre serveur dédié FiveM avec txAdmin pour un jeu multijoueur fluide → En savoir plus maintenant"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introduction
Tu as un serveur dédié et tu veux installer et gérer ton propre serveur dédié FiveM avec txAdmin ? T’es au bon endroit ! On va t’expliquer toutes les étapes nécessaires pour l’installer, le configurer et ce à quoi tu dois faire gaffe.

:::warning  Système d’exploitation sélectionné et installé
On part du principe que tu as déjà choisi et installé un système d’exploitation sur ton serveur dédié. Si ce n’est pas encore fait, commence par suivre les étapes du [guide de configuration initiale](dedicated-setup.md) pour serveurs dédiés.
:::



## Préparation

Pour mettre en place un serveur FiveM, il y a quelques préparatifs à faire avant de pouvoir lancer l’installation proprement dite du serveur dédié FiveM.


### Configurer la base de données

Pour notre option interface GS/TS3, on fournit déjà nos propres bases de données incluses. Mais si tu préfères installer ta propre base de données et serveur de base, on te conseille de jeter un œil au [guide d’installation de base de données](dedicated-linux-databases.md).

:::warning
Si tu utilises ta propre base de données, il faudra remplacer les infos de base de données prédéfinies par les tiennes lors de la configuration de txAdmin.
:::



### Installer l’interface GS/TS3
Avec l’interface GS/TS3 super simple à utiliser, tu peux installer ton serveur dédié FiveM en quelques clics. Pas besoin de connaissances préalables pour cette installation. L’installation de tous les paquets nécessaires, des fichiers serveur et l’installation elle-même sont entièrement automatisées, ce qui te fait gagner du temps et de l’énergie.

:::warning
La fonctionnalité interface GS/TS3 est compatible avec les systèmes d’exploitation suivants :

- Debian : 10, 11
- Ubuntu : 20.04

(*) On bosse déjà pour rendre d’autres systèmes d’exploitation et versions plus récentes dispo très bientôt.
:::

Si tu ne connais pas encore l’interface GS/TS3, on te recommande de consulter notre [guide interface GS/TS3](dedicated-linux-gs-interface.md).

Une fois l’interface GS/TS3 installée, ouvre le service de serveur de jeux fraîchement créé. Là, il faut maintenant sélectionner le jeu. Pour ça, va sur la page **Jeux**. Clique sur les jeux disponibles, cherche txAdmin et clique sur le bouton d’installation.

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### Créer la clé de licence du serveur FiveM

Chaque serveur FiveM a besoin de sa propre clé de licence, gérée via le nouveau [Portail Cfx.re](http://portal.cfx.re/). La clé de licence est liée à ton compte Cfx.re. Connecte-toi sur le site, va dans la catégorie **Serveur** et clique sur le bouton **Générer une clé**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuration

Maintenant tu peux commencer à configurer ton serveur FiveM et txAdmin. Pour ça, ouvre le tableau de bord de ton serveur de jeux. Tu trouveras le lien et les identifiants de connexion pour l’instance txAdmin dans la section txAdmin. Ouvre-la et connecte-toi.

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### Configuration de txAdmin

Pendant la configuration de txAdmin, ton propre serveur FiveM est installé et configuré en cinq étapes. Suis les instructions dans l’interface txAdmin et commence par définir un **nom de serveur**. Ensuite, choisis le **type de serveur** souhaité. Cet exemple montre l’installation d’un serveur FiveM avec QBCore préinstallé.

Sélectionne l’option **Recettes populaires** dans l’étape **Type de déploiement**, puis choisis le **Modèle de framework QBCore**. Confirme le **répertoire de données** désiré et lance le **déployeur de recette** pour finaliser l’installation.

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### Configuration du pare-feu

Quand tu installes le serveur FiveM via l’interface GS/TS3, tous les redirections de ports nécessaires sont configurées **automatiquement** dans le pare-feu. En cas de souci, tu peux aussi configurer manuellement la redirection des ports via SSH avec la commande suivante :

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## Conclusion

Tu as réussi à installer et configurer un service de serveur dédié FiveM sur ton serveur dédié. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂



