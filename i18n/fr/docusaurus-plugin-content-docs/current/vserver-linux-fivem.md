---
id: vserver-linux-fivem
title: "VPS : Configuration d’un serveur dédié FiveM sous Linux (Interface GS/TS3)"
description: "Découvre comment installer et gérer ton propre serveur dédié FiveM avec txAdmin pour un jeu multijoueur fluide → En savoir plus maintenant"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introduction
Tu as un VPS et tu veux installer et gérer ton propre serveur dédié FiveM avec txAdmin ? T’es au bon endroit ! On va t’expliquer toutes les étapes nécessaires pour l’installer, le configurer et ce qu’il faut prendre en compte.



## Préparation

Pour mettre en place un serveur FiveM, certaines étapes de préparation sont indispensables avant de pouvoir commencer l’installation proprement dite du serveur dédié FiveM.


### Configurer la base de données

Pour notre option interface GS/TS3, on fournit déjà nos propres bases de données incluses. Mais si tu préfères installer ton propre serveur de base de données et ta base, on te conseille de jeter un œil à notre [guide d’installation de base de données](vserver-linux-databases.md).

:::warning
Si tu utilises ta propre base de données, il faudra remplacer les infos de base de données préconfigurées par les tiennes lors de la configuration de txAdmin.
:::



### Installer l’interface GS/TS3
Avec l’interface GS/TS3 super simple à utiliser, tu peux installer ton serveur dédié FiveM en quelques clics. Pas besoin de connaissances préalables pour cette installation. L’installation de tous les paquets nécessaires, des fichiers serveur et l’installation elle-même sont entièrement automatisées, ce qui te fait gagner du temps et de l’énergie.

:::warning
La fonctionnalité interface GS/TS3 est compatible avec les systèmes d’exploitation suivants :

- Debian : 10, 11
- Ubuntu : 20.04

(*) On bosse déjà pour rendre d’autres systèmes et versions dispo très bientôt.
:::

Si tu ne connais pas encore l’interface GS/TS3, on te recommande de consulter notre [guide interface GS/TS3](dedicated-linux-gs-interface.md).

Une fois l’interface GS/TS3 installée, ouvre le service de serveur de jeux fraîchement créé. Là, il faut maintenant sélectionner le jeu. Pour ça, va dans la page **Jeux**. Clique sur les jeux disponibles, cherche txAdmin et clique sur le bouton d’installation.

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### Créer la clé de licence du serveur FiveM

Chaque serveur FiveM a besoin de sa propre clé de licence, gérée via le nouveau [Portail Cfx.re](http://portal.cfx.re/). La clé de licence est liée à ton compte Cfx.re. Connecte-toi sur le site, va dans la catégorie **Serveur** et clique sur le bouton **Générer une clé**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuration

Maintenant tu peux commencer à configurer ton serveur FiveM et txAdmin. Pour ça, ouvre le tableau de bord de ton serveur de jeux. Tu trouveras le lien et les identifiants de connexion pour l’instance txAdmin dans la section txAdmin. Ouvre-le puis connecte-toi.

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### Configuration de txAdmin

Pendant la configuration de txAdmin, ton propre serveur FiveM est installé et configuré en cinq étapes. Suis les instructions dans l’interface txAdmin et définis d’abord un **nom de serveur**. Ensuite, choisis le **type de serveur** souhaité. Cet exemple montre l’installation d’un serveur FiveM avec QBCore préinstallé.

Sélectionne l’option **Recettes populaires** dans l’étape **Type de déploiement** puis choisis le **Modèle de framework QBCore**. Confirme le **répertoire de données** désiré et lance le **déployeur de recette** pour finaliser l’installation.

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### Configuration du pare-feu

Lors de l’installation du serveur FiveM via l’interface GS/TS3, tous les redirections de ports nécessaires sont configurées **automatiquement** dans le pare-feu. En cas de souci, tu peux aussi configurer la redirection de ports manuellement via SSH avec la commande suivante :

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## Conclusion

Tu as installé et configuré avec succès un service de serveur dédié FiveM sur ton VPS. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂


<InlineVoucher />