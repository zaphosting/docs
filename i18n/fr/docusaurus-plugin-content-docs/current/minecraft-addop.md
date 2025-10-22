---
id: minecraft-addop
title: "Minecraft : Attribution des droits OP sur le serveur"
description: "Découvrez comment attribuer les droits OP aux joueurs et gérer efficacement les permissions du serveur pour un meilleur contrôle du jeu → En savoir plus maintenant"
sidebar_label: Permissions OP
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Attribuer les droits OP

Pour pouvoir s’attribuer des droits OP à soi-même ou à d’autres joueurs, il faut d’abord ouvrir la console, à condition qu’aucun autre joueur ne dispose encore de droits OP suffisants, afin que l’attribution soit possible directement dans le jeu.

Pour ouvrir la console, il faut d’abord accéder au serveur via le **tableau de bord**. Dans l’interface du serveur, vous trouverez l’entrée "Console en direct" sur la gauche de la liste sous l’onglet "INFORMATIONS".

![](https://screensaver01.zap-hosting.com/index.php/s/PAaZQPXF75aW4Bi/preview)

Vous devriez maintenant voir une fenêtre sombre représentant la console du serveur. En dessous, un champ de saisie permet d’envoyer des commandes à la console. Pour attribuer les droits OP, il faut taper la commande "op player" (sans "/") dans ce champ, puis cliquer sur le bouton vert "Envoyer la commande" pour l’exécuter.

![](https://screensaver01.zap-hosting.com/index.php/s/myba237CL5XMfKi/preview)

Après quelques secondes, la commande envoyée devrait apparaître dans la console, suivie du message "Made player a server operator", indiquant que l’opération a réussi. Le joueur concerné dispose désormais de tous les droits OP et peut par exemple changer le mode de jeu.

:::info
La distribution des droits OP est désormais aussi possible directement dans le jeu, donc vous devriez ajuster le niveau des droits comme expliqué à l’étape suivante, si vous le souhaitez.
:::

## Niveau des droits

Les droits OP sont divisés en quatre niveaux, le niveau 4 étant toujours attribué par défaut. Chaque niveau contient des droits différents, ce qui permet de répartir les permissions selon le type de joueur. Voici les droits associés à chaque niveau :

| Niveau | Description | Permissions |
| :-----: |:-------------:| :-----:|
| 1 | Modérateur | Peut effectuer des modifications dans la zone protégée du spawn. |
| 2 | Maître de jeu | Peut placer et modifier des blocs de commande, et exécuter diverses commandes de triche (ex : /gamemode). |
| 3 | Admin | Peut expulser et bannir des joueurs, ainsi que d’autres commandes liées à l’administration générale du serveur. Peut aussi nommer d’autres opérateurs. |
| 4 | Propriétaire | Aucune restriction, tous les droits sont accordés. |

:::info
En installant un plugin de permissions comme LuckPerms sur votre serveur Bukkit/Spigot, vous pouvez gérer les permissions de façon beaucoup plus précise et détaillée. Il est aussi possible de créer plusieurs groupes, ce qui facilite la répartition des droits.
:::

## Modifier le niveau des droits

Pour ajuster le niveau d’un joueur, il faut d’abord le nommer opérateur, comme expliqué dans la section "Attribuer les droits OP". Pour modifier le niveau, il faut éditer le fichier "ops.json" via une connexion FTP.

Une fois connecté au serveur via FTP, naviguez jusqu’au répertoire du serveur. Dans notre cas avec FileZilla, faites un clic droit sur le fichier et sélectionnez "Afficher/Éditer" dans le menu.

![](https://screensaver01.zap-hosting.com/index.php/s/TTeL8WqnQfrdEDq/preview)

Modifiez ensuite la valeur "level" pour le joueur souhaité en mettant le niveau désiré, puis sauvegardez le fichier avec **CTRL+S**.

![](https://screensaver01.zap-hosting.com/index.php/s/WKQkAR3oALsSNAc/preview)

Pour que les modifications prennent effet, il faut redémarrer le serveur, ce qui est possible en maintenant le bouton rouge Stop dans l’interface du serveur.

<InlineVoucher />