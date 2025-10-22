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

Si les produits serveur de jeux ne correspondent pas à tes attentes ou si tu as besoin de ton service autrement, utiliser un VPS ou un serveur dédié est souvent une meilleure option. Par contre, tu fais souvent face au fait que tous les services ne sont pas automatisés ou préinstallés. La mise en place de services comme les serveurs de jeux, serveurs Teamspeak 3, et bots musicaux doit être faite de manière autonome.

Pour résoudre ce problème, on a développé une solution pratique pour nos VPS ou serveurs dédiés sous Linux. L’interface dite Gameserver/Teamspeak 3 Server (interface GS/TS3) !

<InlineVoucher />

## Cas d’utilisation

Avec l’interface GS/TS3 super simple à utiliser, tu peux installer Teamspeak 3 ou d’autres services de serveur de jeux sélectionnés sur ton VPS ou serveur dédié Linux en quelques clics. Aucune connaissance préalable n’est requise pour cette installation. La configuration de tous les paquets nécessaires, fichiers serveur, et l’installation proprement dite sont entièrement automatisées, ce qui te fait gagner du temps et de l’énergie.

:::warning
La fonctionnalité interface GS/TS3 peut être utilisée avec les systèmes d’exploitation suivants :

- Debian : 10, 11, 12
- Ubuntu : 20.04, 22.04

(*) On travaille déjà à rendre disponibles d’autres systèmes et versions plus récentes très bientôt.
:::

## Services & jeux disponibles

L’interface GS/TS3 supporte la mise en place de serveurs de jeux, serveurs vocaux, et bots musicaux. La plupart des jeux qu’on propose pour nos produits serveur de jeux sont aussi dispos via l’option interface GS/TS3. Ça concerne tous les jeux qu’on fait tourner activement sous Linux. Tous les jeux qui tournent sous Windows ne peuvent malheureusement pas être installés ici. Là, seule une installation manuelle est possible, à condition que le jeu supporte une version serveur Linux.

| Services    | Supporté |
| ----------- | -------- |
| Serveur de jeux  | ✔️       |
| Serveur vocal    | ✔️       |
| Bot musical (Sinusbot)  | ✔️       |

## Installation et configuration

Pour installer l’interface GS/TS3, rends-toi dans le panneau de navigation **Paramètres** dans l’administration de ton produit, puis clique sur le sous-onglet **Gameserver / TS3**.

La première fois que tu ouvres l’interface GS/TS3, tu seras redirigé vers un assistant d’installation super simple. Pour configurer l’interface et la lier avec ton serveur, tu dois choisir un système d’exploitation supporté et fournir les identifiants de connexion du compte root.

![](https://screensaver01.zap-hosting.com/index.php/s/dLeLDKdmdiZ74CP/download)

Une fois le serveur et le site web liés avec succès, l’interface GS/TS3 peut être créée.

![](https://screensaver01.zap-hosting.com/index.php/s/FK9mP3BgzrPmH7S/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/JL7jyTKbCEx8FBZ/preview)

:::info
**Attention** : Ne continue pas le processus tant que l’interface n’est pas complètement installée. Tu peux reconnaître la réussite de l’installation quand la barre de progression a disparu et que "Installé" s’affiche à la place de "Manquant" pour chaque paquet requis.
:::

### Créer un serveur de jeux

Une fois la création et l’installation de l’interface GS/TS3 terminées avec succès, tu peux commencer à configurer les services. L’installation d’un serveur de jeux se fait via le bouton **Installer serveur de jeux** dans la catégorie **Serveur de jeux**.

![](https://screensaver01.zap-hosting.com/index.php/s/QinM7KtFwcAp5pE/preview)

À l’étape suivante, tu peux choisir l’adresse IP du serveur de jeux souhaité (si ton serveur a plusieurs IP). Tu peux aussi définir le port désiré, le nombre de slots et le boost de RAM individuellement.

![](https://screensaver01.zap-hosting.com/index.php/s/cqWwZbXT77okeDa/preview)

Vérifie que toutes les infos sont correctes et correspondent à tes besoins. Dès que tu as tout configuré, clique sur "Installer serveur de jeux maintenant" pour lancer l’installation. Le serveur de jeux sera alors configuré selon tes spécifications et tu pourras bientôt démarrer. Tu peux maintenant voir et accéder à ton serveur de jeux fraîchement créé dans la liste.

![](https://screensaver01.zap-hosting.com/index.php/s/9WkJnxzkaEHmri7/preview)

Tu es maintenant dans l’administration de ton serveur de jeux. Là, tu peux sélectionner et installer le jeu souhaité pour ton serveur dans le panneau de navigation **Paramètres** sous **Jeux**.

![](https://screensaver01.zap-hosting.com/index.php/s/6pxEbWttos6HAYt/preview)

Tu trouveras ici la liste de tous les jeux que tu peux installer sur ton serveur. Dans cet exemple, un serveur avec le jeu (package) Minecraft : Paperspigot sera installé. Choisis ton jeu préféré et clique sur le bouton vert pour lancer l’installation.

![](https://screensaver01.zap-hosting.com/index.php/s/gazW2itexCJd7cY/preview)

Un aperçu avec toutes les conditions nécessaires s’affiche. Si tout est OK, tu peux confirmer avec le bouton **Accepter et installer**.

![](https://screensaver01.zap-hosting.com/index.php/s/jeQC7dp6zpe3ny4/preview)

La mise en place du jeu peut prendre un peu de temps selon le jeu. La progression est affichée dans le statut. Ensuite, tu peux démarrer ton serveur de jeux et te connecter en jeu !

### Créer un serveur vocal

L’installation d’un **serveur vocal (Teamspeak 3 Server)** est similaire à celle d’un serveur de jeux. Tu dois d’abord cliquer à nouveau sur "Gameserver / TS3". Dans cette section, tu trouveras l’option **Installer serveur vocal**, que tu peux cliquer pour lancer l’installation du serveur Teamspeak 3.

![](https://screensaver01.zap-hosting.com/index.php/s/mi8p3NTfwBBExsD/preview)

À l’étape suivante, tu peux définir les paramètres souhaités pour ton serveur Teamspeak 3, comme l’adresse IP, le port et le nombre de slots disponibles. Une fois toutes les infos saisies, tu peux finaliser l’installation en cliquant sur **Installer serveur vocal maintenant**.

![](https://screensaver01.zap-hosting.com/index.php/s/ajfzxsJfCFdfBac/preview)

Vérifie que toutes les infos sont correctes et correspondent à tes besoins. Dès que tu as tout configuré, clique sur **Installer serveur Teamspeak 3/5 maintenant** pour lancer l’installation. Tu peux maintenant voir et cliquer sur le serveur Teamspeak 3 installé dans la **Vue d’ensemble Serveur vocal**.

![](https://screensaver01.zap-hosting.com/index.php/s/YaEYorRG7TJGpmB/preview)

:::info
**Attention** : C’est l’instance sur laquelle le serveur Teamspeak 3 sera installé ensuite.
:::

Tu es maintenant dans l’interface de l’instance de ton serveur Teamspeak 3 installé. Tu peux démarrer l’instance en cliquant sur le bouton **Démarrer**.

![](https://screensaver01.zap-hosting.com/index.php/s/SmqHB24ozJimBY9/preview)

Tu peux maintenant cliquer sur le menu **Serveurs virtuels**. Tous les serveurs Teamspeak 3 installés sur ton instance sont listés clairement ici. Pour accéder à l’interface du serveur Teamspeak 3 concerné, clique simplement sur l’icône "œil".

![](https://screensaver01.zap-hosting.com/index.php/s/E3ZqxC9rPjWwC5F/preview)

Dans l’interface du serveur Teamspeak 3, tu trouveras toutes les infos et options nécessaires pour personnaliser et gérer ton serveur. Par exemple, sous l’onglet "Clé d’autorisation", tu peux créer un token qui te donne les droits admin sur ton serveur. Ça te donne un contrôle total sur la gestion des utilisateurs et l’accès au serveur.

Sous le menu "Paramètres", tu as d’autres options pour personnaliser ton serveur. Tu peux par exemple changer le nom du serveur, définir un mot de passe pour restreindre l’accès, ou enregistrer un message de bienvenue perso que les utilisateurs reçoivent en entrant sur le serveur.

:::caution Infos sur les licences Teamspeak
Aucune licence n’est installée par défaut sur le serveur Teamspeak 3. Ça veut dire que tu peux utiliser un serveur Teamspeak 3 avec une capacité de 32 slots seulement. Si tu veux activer plus de slots ou des fonctions supplémentaires, tu peux acheter une licence correspondante directement chez Teamspeak.
:::

## Conclusion
Félicitations, tu as installé et configuré avec succès notre interface GS/TS3 ! Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !

<InlineVoucher />