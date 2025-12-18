---
id: gameserver-server-down-what-now
title: 'Serveur de jeux : Serveur en panne - Et maintenant ?'
description: "Apprends à diagnostiquer les plantages de serveur de jeux en analysant les fichiers logs pour identifier les erreurs et trouver des solutions efficaces → Découvre tout maintenant"
sidebar_label: Plantage serveur - Que faire ?
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Si ton serveur de jeux est en panne, ça peut venir de plein de raisons. **L’important, c’est de ne pas essayer de le redémarrer direct, mais de jeter un œil au fichier log d’abord. Il y a souvent des **messages d’erreur** qui expliquent exactement pourquoi le serveur a planté. **Si tu redémarres direct, le log est régénéré et l’ancien supprimé. Du coup, tu ne peux plus voir les erreurs précédentes.**

<InlineVoucher />

## Consulter le fichier log

Le fichier log est facile à trouver via le menu à gauche.

![](https://screensaver01.zap-hosting.com/index.php/s/rTMjGQPGoijMCXQ/preview)

Ensuite, tu peux le consulter en cliquant sur l’œil vert. **L’important, c’est d’ouvrir toujours le dernier log.  
Tu le reconnais à la date ou au nom.**

![](https://screensaver01.zap-hosting.com/index.php/s/Hc4cYQSj3c9Enpi/preview)

Une fois ouvert, il faut chercher les erreurs (**Les erreurs contiennent souvent des mots comme "Error", "Cant find", "Couldnt load"**)

Dans la capture d’écran suivante, j’ai un exemple d’un serveur Fivem avec une clé de licence serveur incorrecte.

![](https://screensaver01.zap-hosting.com/index.php/s/pAwzNkHZBTtHds9/preview)

Tu peux ensuite taper cette erreur sur Google par exemple pour voir si elle est connue. En général, tu trouves vite la cause de l’erreur.

Si tu ne trouves rien sur l’erreur, tu peux aller sur le Live Chat et envoyer l’erreur en texte ou en capture d’écran.

## Fichier log vide

Ça peut aussi arriver malheureusement. Si le fichier log est vide, c’est qu’il n’a pas pu être créé parce que le serveur est tombé direct ou a été supprimé suite à un redémarrage. Dans ce cas, tu peux juste essayer de redémarrer en espérant que l’erreur se génère à nouveau ou que le serveur tourne à nouveau.

## Pas de solution dans le live chat

Si tu n’as pas trouvé de solution sur Google ni dans le live chat, il y a 2 options. La première, c’est d’ouvrir un ticket et de laisser le serveur tel quel pour que le support puisse l’examiner de plus près.

La deuxième option, c’est de restaurer une sauvegarde ou de réinstaller le serveur.

### Variante 1 - Restaurer une sauvegarde

Pour restaurer une sauvegarde, va simplement dans Backups à gauche et importe la dernière sauvegarde avec la flèche verte. Après ça, ton serveur devrait tourner comme avant.

![](https://screensaver01.zap-hosting.com/index.php/s/j9C396QXtq8Pytx/preview)

### Variante 2 - Réinstaller le serveur

La réinstallation se lance dans "Paramètres" à gauche. Ensuite, le serveur sera complètement remis à zéro comme au premier jour (tu peux aussi réinitialiser les réglages avec "**Réinitialiser toutes les options**")

![](https://screensaver01.zap-hosting.com/index.php/s/2edwoTrn3We67SB/preview)

## Réinstallation sans succès

Malheureusement, c’est le pire scénario. Dans ce cas, il ne reste plus qu’à faire vérifier le serveur via le chat ou un ticket, car c’est un problème plus sérieux. On fera tout notre possible pour régler ça rapidement afin que tu puisses profiter de ton service comme d’habitude.

<InlineVoucher />