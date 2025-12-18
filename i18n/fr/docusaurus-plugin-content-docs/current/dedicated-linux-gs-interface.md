---
id: dedicated-linux-gs-interface
title: "Serveur dédié : Interface Gameserver/TS3"
description: "Découvrez comment configurer facilement des serveurs de jeux, serveurs vocaux et bots musicaux sur VPS Linux ou serveurs dédiés → En savoir plus maintenant"
sidebar_label: Interface GS/TS3
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Si les produits de serveurs de jeux ne correspondent pas à vos goûts ou attentes, ou si vous avez besoin de votre service d’une autre manière, utiliser un VPS ou un serveur dédié est souvent une meilleure option. Cependant, vous faites souvent face au défi que tous les services ne sont pas automatisés ou préinstallés. La mise en place de services tels que serveurs de jeux, serveurs Teamspeak 3 et bots musicaux doit être réalisée de manière autonome.

Pour résoudre ce problème, nous avons développé une solution pratique pour nos VPS ou serveurs dédiés basés sur Linux. La fameuse interface Gameserver/Teamspeak 3 Server (interface GS/TS3) !



## Cas d’utilisation

Avec l’interface GS/TS3 conviviale, vous pouvez installer Teamspeak 3 ou d’autres services de serveurs de jeux sélectionnés sur votre VPS ou serveur dédié Linux en seulement quelques clics. Aucune connaissance préalable n’est requise pour cette installation. La configuration de tous les paquets nécessaires, des fichiers serveur et l’installation proprement dite sont entièrement automatisées, vous faisant gagner du temps et des efforts.

:::warning
La fonctionnalité interface GS/TS3 peut être utilisée avec les systèmes d’exploitation suivants :

- Debian : 10, 11, 12
- Ubuntu : 20.04, 22.04

(*) Nous travaillons déjà à rendre disponibles d’autres systèmes d’exploitation et versions plus récentes dans un futur proche.
:::



## Services & jeux disponibles

L’interface GS/TS3 supporte la mise en place de serveurs de jeux, serveurs vocaux et bots musicaux. La plupart des jeux que nous proposons pour nos produits de serveurs de jeux sont également disponibles dans l’option interface GS/TS3. Cela s’applique à tous les jeux que nous exploitons activement sous Linux. Tous les jeux fonctionnant sous systèmes d’exploitation Windows ne peuvent malheureusement pas être installés. Là, seule une installation manuelle est possible, à condition que le jeu supporte une version serveur Linux.

| Services    | Supporté |
| ----------- | -------- |
| Serveur de jeux  | ✔️       |
| Serveur vocal    | ✔️       |
| Bot musical (Sinusbot)  | ✔️       |



## Installation et configuration

Pour installer l’interface GS/TS3, vous devez naviguer dans le panneau de navigation **Paramètres** dans l’administration de votre produit et cliquer sur le sous-élément **Gameserver / TS3**. 

Lors du premier accès à l’interface GS/TS3, vous serez redirigé vers l’assistant d’installation convivial. Pour configurer l’interface et la lier au serveur, vous devez sélectionner un système d’exploitation supporté et fournir les identifiants de connexion de l’utilisateur root. 

![](https://screensaver01.zap-hosting.com/index.php/s/dLeLDKdmdiZ74CP/download)



Une fois le serveur et le site web liés avec succès, l’interface GS/TS3 peut être créée. 



![](https://screensaver01.zap-hosting.com/index.php/s/FK9mP3BgzrPmH7S/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/JL7jyTKbCEx8FBZ/preview)

:::info
**Attention** : Merci de ne pas poursuivre le processus tant que l’interface n’est pas complètement installée. Vous pouvez reconnaître l’installation réussie au fait que la barre de progression a disparu et que "Installé" est affiché à la place de "Manquant" pour chaque paquet requis.
:::



### Créer un serveur de jeux

À condition que la création et l’installation de l’interface GS/TS3 aient été réalisées avec succès, vous pouvez maintenant commencer à configurer les services. L’installation d’un serveur de jeux se fait via le bouton **Installer serveur de jeux** dans la catégorie **Serveur de jeux**.

![](https://screensaver01.zap-hosting.com/index.php/s/QinM7KtFwcAp5pE/preview)



À l’étape suivante, vous avez la possibilité de sélectionner l’adresse IP du serveur de jeux souhaité (à condition que votre serveur dispose de plusieurs IP). Vous pouvez aussi spécifier individuellement le port désiré, le nombre de slots et le boost de RAM.

![](https://screensaver01.zap-hosting.com/index.php/s/cqWwZbXT77okeDa/preview)

Assurez-vous que toutes les informations sont correctes et correspondent à vos prérequis. Dès que vous avez effectué tous les réglages, cliquez sur "Installer serveur de jeux maintenant" pour lancer l’installation. Le serveur de jeux sera alors configuré selon vos spécifications et vous pourrez bientôt commencer. Vous pouvez maintenant consulter et accéder à votre serveur de jeux fraîchement créé dans la liste.



![](https://screensaver01.zap-hosting.com/index.php/s/9WkJnxzkaEHmri7/preview)



Vous êtes maintenant dans l’administration de votre serveur de jeux. Là, vous pouvez sélectionner et installer le jeu désiré pour votre serveur dans le panneau de navigation **Paramètres** sous **Jeux**.

![](https://screensaver01.zap-hosting.com/index.php/s/6pxEbWttos6HAYt/preview)

Vous trouverez ici une liste de tous les jeux que vous pouvez installer sur votre serveur. Dans cet exemple, un serveur avec le jeu (package) Minecraft : Paperspigot sera installé. Sélectionnez votre jeu désiré et cliquez sur le bouton vert pour lancer l’installation.

![](https://screensaver01.zap-hosting.com/index.php/s/gazW2itexCJd7cY/preview)

Un aperçu avec toutes les conditions nécessaires s’affichera. Si toutes les conditions sont remplies, vous pouvez confirmer le processus avec le bouton **Accepter et installer**.

![](https://screensaver01.zap-hosting.com/index.php/s/jeQC7dp6zpe3ny4/preview)

La mise en place du jeu peut prendre un certain temps selon le jeu. La progression est affichée dans le statut. Ensuite, vous pouvez démarrer votre serveur de jeux et vous y connecter dans le jeu !



### Créer un serveur vocal

L’installation d’un **serveur vocal (serveur Teamspeak 3)** est similaire à celle d’un serveur de jeux. Vous devez d’abord cliquer à nouveau sur "Gameserver / TS3". Dans cette section, vous trouverez l’option **Installer serveur vocal**, sur laquelle vous pouvez cliquer pour lancer l’installation du serveur Teamspeak 3.

![](https://screensaver01.zap-hosting.com/index.php/s/mi8p3NTfwBBExsD/preview)

À l’étape suivante, vous pouvez spécifier les réglages souhaités pour votre serveur Teamspeak 3, comme l’adresse IP, le port et le nombre de slots disponibles. Une fois toutes les informations nécessaires saisies, vous pouvez finaliser l’installation en cliquant sur **Installer serveur vocal maintenant**.

![](https://screensaver01.zap-hosting.com/index.php/s/ajfzxsJfCFdfBac/preview)

Assurez-vous que toutes les informations sont correctes et correspondent à vos prérequis. Dès que vous avez effectué tous les réglages, cliquez sur **Installer serveur Teamspeak 3/5 maintenant** pour lancer l’installation. Vous pouvez maintenant consulter et cliquer sur le serveur Teamspeak 3 installé dans la **Vue d’ensemble Serveur vocal**.

![](https://screensaver01.zap-hosting.com/index.php/s/YaEYorRG7TJGpmB/preview)

:::info
**Attention** : C’est l’instance sur laquelle le serveur Teamspeak 3 sera installé par la suite.
:::

Vous êtes maintenant dans l’interface de l’instance de votre serveur Teamspeak 3 installé. Vous pouvez démarrer l’instance en cliquant sur le bouton **Démarrer**.

![](https://screensaver01.zap-hosting.com/index.php/s/SmqHB24ozJimBY9/preview)


Vous pouvez maintenant cliquer sur le menu **Serveurs virtuels**. Tous les serveurs Teamspeak 3 installés sur votre instance sont clairement listés dans cette zone. Pour accéder à l’interface du serveur Teamspeak 3 respectif, cliquez simplement sur l’icône "œil".

![](https://screensaver01.zap-hosting.com/index.php/s/E3ZqxC9rPjWwC5F/preview)

Dans l’interface du serveur Teamspeak 3, vous trouverez toutes les informations nécessaires et options de réglage pour personnaliser et gérer votre serveur individuellement. Par exemple, sous l’onglet "Clé d’autorisation", vous pouvez créer un token qui vous donne les droits admin sur votre serveur. Cela vous donne un contrôle total sur l’administration des utilisateurs et l’accès au serveur.

Sous le menu "Paramètres", vous avez d’autres options pour personnaliser votre serveur. Ici, vous pouvez par exemple changer le nom de votre serveur, définir un mot de passe pour restreindre l’accès, ou enregistrer un message de bienvenue personnel que les utilisateurs reçoivent en entrant sur le serveur.

:::caution Informations sur les licences Teamspeak
Aucune licence n’est installée par défaut sur le serveur Teamspeak 3. Cela signifie que vous ne pouvez utiliser un serveur Teamspeak 3 qu’avec une capacité de 32 slots. Cependant, si vous souhaitez activer plus de capacité ou des fonctions supplémentaires pour votre serveur Teamspeak 3, vous pouvez acheter une licence correspondante auprès de Teamspeak.
:::





## Conclusion
Félicitations, vous avez installé et configuré avec succès notre interface GS/TS3 ! Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible pour vous aider tous les jours !