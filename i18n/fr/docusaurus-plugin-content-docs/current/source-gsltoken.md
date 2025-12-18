---
id: source-gsltoken
title: Utiliser les tokens de connexion pour serveurs de jeux
description: "Découvrez comment les tokens GSL sécurisent les serveurs Steam en liant les bans aux comptes, garantissant une location de serveurs plus sûre et conforme → En savoir plus maintenant"
sidebar_label: Token GSL
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ❓ C’est quoi un token GSL ?

Les Gameserver Login Tokens (GSLTs) sont une procédure mise en place par Steam comme mesure de sécurité. Pour faire tourner des serveurs de jeux de certains jeux Steam (principalement les jeux Source), il faut générer un token.

<InlineVoucher />

## ❓ À quoi sert un token GSL ?

Avant, Valve avait changé quelques règles pour la location de serveurs de jeux. Tous les opérateurs de serveurs ne respectaient pas ces règles. Du coup, les adresses IP des serveurs étaient bannies.

Mais cette méthode n’était pas efficace, car on pouvait facilement la contourner avec une nouvelle adresse IP, et ça posait aussi un gros problème aux fournisseurs de serveurs de jeux. En effet, en bannissant une adresse IP, d’autres clients étaient souvent impactés.

C’est pour ça que ce système a été mis en place : il bannit le token et bloque le compte Steam lié pour empêcher toute exploitation future du serveur de jeux.

## ➕ Créer un token

Pour créer un token de connexion pour serveur de jeux, il faut être connecté sur le site Steam. Le token peut être créé ici : [Gestion des comptes serveurs de jeux Steam](https://steamcommunity.com/dev/managegameservers)

![](https://screensaver01.zap-hosting.com/index.php/s/an5ySHwzSZmEwep/preview)

Une fois sur la page, on vous demandera l’App ID et un mémo (un nom que vous choisissez comme note). L’App ID dépend du jeu. Voici les App IDs les plus importants :

|              Jeu               | App ID |
| :------------------------------: | :----: |
| Counter-Strike: Global Offensive |  730   |
|      Counter-Strike: Source      |  240   |
|         Team Fortress 2          |  440   |
|            Garrys Mod            |  4000  |

Le token GSL peut être défini dans l’interface sous les paramètres.

![](https://screensaver01.zap-hosting.com/index.php/s/jqkbkXG2YQLatw2/preview)

Une fois cette étape terminée et le serveur redémarré, le serveur apparaîtra aussi dans la liste publique des serveurs.

## ⁉ Questions fréquentes

**Quelles sont les conditions pour un token GSL ?**

Le compte Steam ne doit pas avoir de restriction comme un ban communautaire. En plus, un numéro de téléphone valide doit être enregistré sur le compte Steam.

**Puis-je utiliser un token GSL pour plusieurs serveurs ?**

Un token unique est nécessaire pour chaque serveur de jeux.

**Y a-t-il des choses qui peuvent faire bannir mon token GSL ?**

Surtout pour les serveurs CS:GO, certains plugins ne sont pas autorisés. Il n’y a pas de liste officielle publiée. Mais ça inclut les plugins qui modifient les inventaires des joueurs (skins d’armes), les grades ou similaires.

**Que se passe-t-il si mon token GSL est banni ?**

Si un token est banni, alors le compte et tous les tokens associés sont aussi bannis. Ça veut dire que le serveur de jeux n’est plus accessible publiquement. De plus, le compte ne pourra plus être utilisé pour exploiter d’autres serveurs de jeux à l’avenir. Par contre, le compte Steam peut toujours servir pour jouer. Aucune autre sanction n’est à prévoir à ce niveau.

<InlineVoucher />