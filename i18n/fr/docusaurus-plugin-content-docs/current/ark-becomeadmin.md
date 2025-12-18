---
id: ark-becomeadmin
title: "ARK : Deviens admin"
description: "Découvre comment gérer ton serveur de jeux avec un contrôle admin complet et améliore ton expérience de jeu → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
L’attribution des droits d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes nécessaires pour attribuer les droits d’administrateur à ton serveur sont décrites ci-dessous.  
<InlineVoucher />

## Configuration

Les droits d’administrateur te permettent de faire des modifications directement dans le jeu sur ton serveur sans avoir à les changer dans la Config. Pour t’attribuer ces droits ou les donner à d’autres joueurs, tu dois d’abord définir un mot de passe admin serveur. Ce mot de passe se configure dans les paramètres de notre interface web.

![](https://screensaver01.zap-hosting.com/index.php/s/kLEsKbT6RN6c7Na/preview)

Une fois le mot de passe défini, il faut redémarrer le serveur. Ensuite, tu peux te connecter à ton serveur et te logger en tant qu’admin via la console en jeu avec la commande suivante et ton mot de passe admin serveur :

```
enableCheats password
```

Après ça, tu peux exécuter toutes les commandes serveur en tant qu’admin. Voici un aperçu des commandes les plus utilisées.

## Commandes courantes

| Commande                                      | Description                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| setcheatplayer TRUE/FALSE                      | Active / désactive le menu de triche                         |
| admincheat AllowPlayerToJoinNoCheck SteamID    | Ajoute un joueur à la whitelist                              |
| admincheat DisallowPlayerToJoinNoCheck SteamID | Retire un joueur de la whitelist                             |
| admincheat SetMessageOfTheDay Nachricht        | Définit le message du jour (MOTD). Ce message apparaît quand un joueur se connecte au serveur de jeux |
| admincheat broadcast Nachricht                 | Envoie un message à tous les joueurs sur le serveur         |
| admincheat god                                 | Active l’immortalité pour ton propre joueur                  |
| admincheat fly                                 | Active le vol pour ton propre joueur                         |
| admincheat walk                                | Désactive le vol pour ton propre joueur                      |
| admincheat teleport                            | Téléporte ton joueur dans la direction où tu regardes       |
| admincheat slomo                               | Change la vitesse du serveur et la vitesse de déplacement de tous les joueurs |
| admincheat playersonly                         | Stoppe tous les mouvements des créatures et empêche la fabrication |
| admincheat ghost                               | Active le mode Noclip pour ton propre joueur                 |
| admincheat forcetame                           | Permet de dompter immédiatement les dinosaures et de monter sans selle |
| admincheat listplayers                         | Liste tous les joueurs avec leur SteamId64                   |
| admincheat banplayer SteamId64                 | Bannit un joueur via son SteamID64                           |
| admincheat unbanplayer SteamId64               | Débannit un joueur via son SteamID64                         |
| admincheat setplayerpos x y z                  | Téléporte ton joueur à la position souhaitée                 |
| admincheat saveworld                           | Sauvegarde l’état actuel du monde                            |
| admincheat addexperience Menge                 | Ajoute de l’expérience au joueur                             |
| admincheat settimeofday Zeit                   | Change l’heure du serveur de jeux. Exemple : "admincheat settimeofday 12:00" |

## Conclusion

Félicitations, tu as configuré avec succès les droits d’administrateur. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />