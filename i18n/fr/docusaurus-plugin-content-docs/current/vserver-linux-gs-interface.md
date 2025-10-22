---
id: vserver-linux-gs-interface
title: "VPS : Interface Gameserver/TS3"
description: "Découvrez comment configurer facilement des serveurs de jeux et vocaux sur VPS Linux sans connaissances préalables grâce à une interface automatisée → En savoir plus maintenant"
sidebar_label: Interface GS/TS3
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Si les produits serveur de jeux ne correspondent pas à vos goûts ou attentes, ou si vous avez besoin de votre service autrement, utiliser un VPS est souvent une meilleure option. Cependant, vous êtes souvent confronté au fait que tous les services ne sont pas automatisés ou préinstallés. La mise en place de services comme les serveurs de jeux, les serveurs Teamspeak 3, et les bots musicaux doit être faite de manière autonome.

Pour résoudre ce problème, nous avons développé une solution pratique pour nos VPS ou serveurs dédiés basés sur Linux. La fameuse interface Gameserver/Teamspeak 3 Server (interface GS/TS3) !

<YouTube videoId="V6qyQFPp_Ls" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/frWNEMQqcMxzRcM/preview" title="Configurer un serveur de jeux avec un VPS Linux SANS EXPÉRIENCE !" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière fun et efficace !"/>

<InlineVoucher />

## Cas d’utilisation

Avec l’interface GS/TS3 intuitive, vous pouvez installer Teamspeak 3 ou d’autres services serveur de jeux sélectionnés sur votre VPS ou serveur dédié Linux en quelques clics seulement. Aucune connaissance préalable n’est requise pour cette installation. La configuration de tous les paquets nécessaires, des fichiers serveur, et l’installation proprement dite sont entièrement automatisées, vous faisant gagner du temps et de l’énergie.

:::warning
La fonctionnalité interface GS/TS3 peut être utilisée avec les systèmes d’exploitation suivants :

- Debian : 10, 11, 12
- Ubuntu : 20.04, 22.04

(*) Nous travaillons déjà à rendre disponibles d’autres systèmes d’exploitation et versions plus récentes dans un futur proche.
:::



## Services / jeux disponibles

L’interface GS/TS3 supporte la mise en place de serveurs de jeux, serveurs vocaux, et bots musicaux. La plupart des jeux que nous proposons pour nos produits serveur de jeux sont aussi disponibles via l’option interface GS/TS3. Cela concerne tous les jeux que nous exploitons activement sous Linux. Tous les jeux fonctionnant sous Windows ne peuvent malheureusement pas être installés ici. Dans ce cas, seule une installation manuelle est possible, à condition que le jeu supporte une version serveur Linux.

| Services    | Supporté |
| ----------- | ---- |
| Serveur de jeux  | ✔️    |
| Serveur vocal | ✔️    |
| Musicbot (Sinuxbot)   | ✔️    |



## Installation et configuration

Pour installer l’interface GS/TS3, rendez-vous dans le panneau de navigation **Paramètres** dans l’administration de votre produit, puis cliquez sur le sous-élément **Gameserver / TS3**. 

La première fois que vous accédez à l’interface GS/TS3, vous serez guidé par un assistant d’installation convivial. Pour configurer l’interface et la lier à votre serveur, il est d’abord nécessaire de créer une clé SSH. Cette clé est indispensable pour que le site web établisse une connexion sécurisée avec le serveur. Cela permet de configurer, gérer et contrôler des services comme les serveurs de jeux et Teamspeak 3 directement via l’interface.

Une fois là, la clé SSH doit être créée. Pour cela, cliquez sur le bouton **Générer clé SSH** puis ajoutez la clé en cliquant sur le bouton **Ajouter clé**. 


![](https://screensaver01.zap-hosting.com/index.php/s/teZ87eGKRm6iJRa/preview)



Après avoir cliqué sur **Ajouter clé**, la clé SSH est stockée sur votre serveur. L’interface GS/TS3 peut alors être ajoutée à votre serveur.



![](https://screensaver01.zap-hosting.com/index.php/s/QqtCFmC3oxPErD9/preview)



:::info
**Note :** Si la clé SSH n’est pas reconnue immédiatement, redémarrer le serveur et rafraîchir la page peut résoudre le problème.
:::

Pendant l’installation, vous pouvez suivre la progression actuelle. Notez que l’installation et la configuration de l’interface et de ses paquets peuvent prendre un certain temps. Cela peut généralement durer entre 5 et 15 minutes.

![](https://screensaver01.zap-hosting.com/index.php/s/xkWQBEp74BqQdM6/preview)

:::info
**Attention** : Ne poursuivez pas le processus tant que l’interface n’est pas complètement installée. Vous reconnaîtrez la réussite de l’installation lorsque la barre de progression aura disparu et que "Installé" s’affichera à la place de "Manquant" pour chaque paquet requis.
:::



### Créer un serveur de jeux

Une fois la création et l’installation de l’interface GS/TS3 terminées avec succès, vous pouvez commencer à configurer les services. L’installation d’un serveur de jeux se fait via le bouton **Installer serveur de jeux** dans la catégorie **Serveur de jeux**.

![](https://screensaver01.zap-hosting.com/index.php/s/4TD3w3dpXrFYNcb/preview)



À l’étape suivante, vous pouvez choisir l’adresse IP du serveur de jeux souhaité (si votre serveur dispose de plusieurs IP). Vous pouvez aussi définir individuellement le port désiré, le nombre de slots et le boost de RAM.

![](https://screensaver01.zap-hosting.com/index.php/s/icfwifbTrmwZQ6q/preview)

Assurez-vous que toutes les informations sont correctes et correspondent à vos critères. Une fois tous les réglages effectués, cliquez sur "Installer serveur de jeux maintenant" pour lancer l’installation. Le serveur de jeux sera alors configuré selon vos spécifications et vous pourrez bientôt démarrer. Vous pouvez maintenant consulter et accéder à votre serveur de jeux fraîchement créé dans la liste.



![](https://screensaver01.zap-hosting.com/index.php/s/MTRmMwc9GyMFW5A/preview)



Vous êtes maintenant dans l’administration de votre serveur de jeux. Là, vous pouvez sélectionner et installer le jeu désiré pour votre serveur dans le panneau de navigation **Paramètres** sous **Jeux**.

![](https://screensaver01.zap-hosting.com/index.php/s/xqxLAAR6jbdmM3Z/preview)

Vous trouverez ici la liste de tous les jeux que vous pouvez installer sur votre serveur. Dans cet exemple, un serveur avec le jeu (package) Minecraft : Paperspigot sera installé. Sélectionnez votre jeu préféré et cliquez sur le bouton vert pour lancer l’installation.

![](https://screensaver01.zap-hosting.com/index.php/s/MtrsxLoYxssJLBt/preview)

Un aperçu avec toutes les conditions nécessaires s’affichera. Si toutes les conditions sont remplies, vous pouvez confirmer le processus avec le bouton **Accepter et installer**.

![](https://screensaver01.zap-hosting.com/index.php/s/GjijXaM3z9EgnYG/preview)

La mise en place du jeu peut prendre un certain temps selon le jeu. La progression est affichée dans le statut. Ensuite, vous pouvez démarrer votre serveur de jeux et vous y connecter en jeu !



### Créer un serveur vocal

L’installation d’un **serveur vocal (Teamspeak 3 Server)** est similaire à celle d’un serveur de jeux. Vous devez d’abord cliquer à nouveau sur "Gameserver / TS3". Dans cette section, vous trouverez l’option **Installer serveur vocal**, que vous pouvez cliquer pour lancer l’installation du serveur Teamspeak 3.

![](https://screensaver01.zap-hosting.com/index.php/s/xct5DPC57wWeABG/preview)

À l’étape suivante, vous pouvez définir les paramètres souhaités pour votre serveur Teamspeak 3, comme l’adresse IP, le port et le nombre de slots disponibles. Une fois toutes les informations saisies, vous pouvez finaliser l’installation en cliquant sur **Installer serveur vocal maintenant**.

![](https://screensaver01.zap-hosting.com/index.php/s/2XnJrDEDyLwBsHk/preview)

Assurez-vous que toutes les informations sont correctes et correspondent à vos critères. Une fois tous les réglages effectués, cliquez sur **Installer serveur Teamspeak 3/5 maintenant** pour lancer l’installation. Vous pouvez maintenant consulter et cliquer sur le serveur Teamspeak 3 installé dans la **Vue d’ensemble des serveurs vocaux**.

![](https://screensaver01.zap-hosting.com/index.php/s/bgpZJgPjz7Ybpke/preview)

:::info
**Attention** : C’est l’instance sur laquelle le serveur Teamspeak 3 sera installé par la suite.
:::

Vous êtes maintenant dans l’interface de l’instance de votre serveur Teamspeak 3 installé. Vous pouvez démarrer l’instance en cliquant sur le bouton **Démarrer**.

![](https://screensaver01.zap-hosting.com/index.php/s/G96RPrjEdm96CCj/preview)


Vous pouvez maintenant cliquer sur le menu **Serveurs virtuels**. Tous les serveurs Teamspeak 3 installés sur votre instance sont clairement listés ici. Pour accéder à l’interface du serveur Teamspeak 3 concerné, cliquez simplement sur l’icône "œil".

![](https://screensaver01.zap-hosting.com/index.php/s/awJdyTgJPSia5B2/preview)

Dans l’interface du serveur Teamspeak 3, vous trouverez toutes les informations et options nécessaires pour personnaliser et gérer votre serveur. Par exemple, sous l’onglet "Clé d’autorisation", vous pouvez créer un token qui vous donne les droits admin sur votre serveur. Cela vous donne un contrôle total sur la gestion des utilisateurs et l’accès au serveur.

Sous le menu **Paramètres**, vous avez d’autres options pour personnaliser votre serveur. Vous pouvez par exemple changer le nom du serveur, définir un mot de passe pour restreindre l’accès, ou enregistrer un message de bienvenue personnalisé que les utilisateurs recevront en entrant sur le serveur.

:::caution Informations sur les licences Teamspeak
Aucune licence n’est installée par défaut sur le serveur Teamspeak 3. Cela signifie que vous ne pouvez utiliser un serveur Teamspeak 3 qu’avec une capacité de 32 slots. Si vous souhaitez activer plus de slots ou des fonctionnalités supplémentaires pour votre serveur Teamspeak 3, vous pouvez acheter une licence correspondante directement auprès de Teamspeak.
:::


## Conclusion

Félicitations, vous avez installé et configuré avec succès notre interface GS/TS3 ! Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !

<InlineVoucher />