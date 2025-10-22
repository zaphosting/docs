---
id: openmp-server-commands
title: "Open.mp : Commandes du serveur Open.mp"
description: "Découvrez comment gérer les commandes du serveur Open.mp en toute sécurité avec l'accès RCON et améliorez le contrôle de votre serveur → En savoir plus maintenant"
sidebar_label: Commandes du Serveur
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs Open.mp disposent tous d’un ensemble de commandes serveur intégrées super utiles, utilisables en jeu et via la console de votre serveur. Dans ce guide, on va explorer pas mal de ces commandes avec descriptions et exemples d’utilisation pour chacune.

<InlineVoucher />

## Configuration de l’accès (RCON)

Pour pouvoir lancer des commandes serveur en jeu, il faut activer la fonctionnalité RCON. Vous devrez accéder à votre fichier de configuration `config.json` et ajuster les paramètres nécessaires pour activer la fonction et définir un mot de passe. Utilisez notre [guide de Configuration du Serveur](openmp-configuration.md) pour accéder à votre fichier de config.

Une fois le fichier prêt, trouvez les paramètres ci-dessous ; activez la fonction et définissez un mot de passe RCON.

| Nom du Paramètre              | Exemple                                | Description                                                                                   |
| ----------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------- | 
| rcon.enable                   | true                                  | Active ou désactive la fonctionnalité RCON                                                   |
| rcon.password                 | ZAP-IS-AWESOME                        | Définit un mot de passe nécessaire pour accéder à RCON depuis les clients                    |

:::info
Assurez-vous d’avoir configuré un mot de passe RCON dans votre configuration. Sinon, vous risquez des problèmes et RCON sera accessible par n’importe qui, ce qui est super risqué.
:::

Après avoir fait vos modifications, sauvegardez le fichier au bon endroit et redémarrez votre serveur. Au prochain démarrage, RCON devrait être accessible et prêt à l’emploi.

:::tip
Si vous voulez en savoir plus sur RCON, n’hésitez pas à consulter notre [guide RCON](openmp-rcon.md) qui détaille tout ça en profondeur.
:::

## Commandes Disponibles

Le tableau ci-dessous liste plusieurs commandes serveur importantes pour Open.mp, avec exemples d’utilisation et descriptions. Elles peuvent être utilisées en jeu, via la console serveur ou un programme RCON. Pour voir toutes les commandes actuelles, on vous recommande de lire le [guide de contrôle d’un serveur open.mp](https://www.open.mp/docs/server/ControllingServer) qui présente toutes les commandes disponibles.

:::tip
Quand vous lancez des commandes directement via la console ou un programme RCON, vous n’avez pas besoin du préfixe `/rcon`. Ce préfixe est uniquement nécessaire **en jeu**.
:::

:::note
Assurez-vous que RCON est activé, sinon ces commandes ne fonctionneront ni en jeu ni via un programme RCON.
:::

### Commandes Générales

| Syntaxe de la Commande        | Valeurs Acceptées | Description                                                        | 
| ----------------------------- | ----------------- | ------------------------------------------------------------------ | 
| /rcon cmdlist                 | -                 | Affiche la liste de toutes les commandes serveur                   | 
| /rcon varlist                 | -                 | Affiche la liste de toutes les variables serveur actuelles         | 
| /rcon exit                    | -                 | Éteint le serveur                                                  | 
| /rcon echo [texte]            | Chaîne de caractères | Envoie un message à la console serveur (non visible en jeu)        | 
| /rcon say [texte]             | Chaîne de caractères | Envoie un message à tous les joueurs en jeu (affiché comme "Admin : [texte]") | 
| /rcon players                 | -                 | Donne des infos sur tous les joueurs actuellement connectés        |
| /rcon reloadlog               | -                 | Recharge le fichier de log du serveur                              |

### Commandes de Modération

| Syntaxe de la Commande        | Valeurs Acceptées | Description                                                        | 
| ----------------------------- | ----------------- | ------------------------------------------------------------------ | 
| /rcon kick [id]               | Entier            | Expulse le joueur ciblé du serveur                                | 
| /rcon ban [id]                | Entier            | Bannit le joueur ciblé du serveur                                 | 
| /rcon banip [ip]              | Chaîne de caractères | Bannit une adresse IP du serveur                                   | 
| /rcon unbanip [ip]            | Chaîne de caractères | Débannit une adresse IP du serveur                                 | 
| /rcon reloadbans              | -                 | Recharge le fichier des bans                                       |

<InlineVoucher />