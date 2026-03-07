---
id: rust-server-wipe
title: "Rust : Wipe de Serveur - Garde Ton Serveur Équilibré et Propre"
description: "Découvre ce qu’est un wipe de serveur Rust, pourquoi c’est nécessaire, et comment effectuer un wipe sur ton serveur Rust → En savoir plus maintenant"
sidebar_label: Wipe de Serveur
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Dans **Rust**, un wipe de serveur réinitialise certaines parties du monde du jeu pour offrir un nouveau départ à tous les joueurs. Avec le temps, les maps Rust se remplissent de grandes bases, de ressources accumulées et de groupes de joueurs bien installés. Ça peut déséquilibrer le serveur et impacter ses performances.

Un wipe de serveur supprime les progrès existants et remet un environnement propre pour que les joueurs puissent repartir de zéro. Beaucoup de communautés Rust font des wipes régulièrement pour garder le gameplay juste et excitant, surtout quand de nouvelles mises à jour ou maps sortent.

Selon le type de wipe, ce sont soit la **map**, les **blueprints joueurs** ou **les deux** qui sont réinitialisés.

<InlineVoucher />



## Ce que fait un Wipe de Serveur

Un wipe de serveur Rust supprime les données de progression du monde ou des joueurs. Ça peut inclure :

- Les structures et bases construites par les joueurs  
- Les inventaires et objets stockés des joueurs  
- Les données d’exploration de la map  
- Les blueprints appris (selon le type de wipe)

Après un wipe, le serveur se comporte comme un monde tout neuf où les joueurs doivent récolter des ressources, reconstruire leurs bases et réapprendre la progression.



## Types de Wipes Rust

Rust propose plusieurs types de wipes, selon ce que tu veux réinitialiser. Voici les types de wipes disponibles expliqués en détail.

### Wipe de map

Un **wipe de map** supprime entièrement le fichier de sauvegarde du monde. Toutes les bases, structures et progrès sur la map sont effacés. Quand le serveur redémarre, une nouvelle map est générée ou téléchargée. La progression des blueprints reste inchangée sauf si un wipe de blueprints est aussi fait.

### Wipe de blueprints

Un **wipe de blueprints** réinitialise tous les blueprints de craft appris. Les joueurs doivent à nouveau rechercher les objets avant de pouvoir les fabriquer. Ce type de wipe affecte uniquement la progression et ne réinitialise pas la map elle-même.

### Wipe complet

Un **wipe complet** réinitialise à la fois la map et tous les blueprints joueurs. Ça crée un environnement serveur totalement neuf, souvent utilisé pour les resets saisonniers ou les grosses mises à jour.



## Pourquoi les Wipes de Serveur sont Importants

Les wipes de serveur aident à maintenir un environnement Rust sain. Avec le temps, les serveurs accumulent beaucoup de structures, conteneurs de stockage et entités du monde. Ça peut nuire aux performances du serveur et à l’équilibre du gameplay. Les wipes réguliers offrent plusieurs avantages :

- Restaurent les performances du serveur  
- Offrent un nouveau départ à tous les joueurs  
- Empêchent les clans dominants de contrôler la map indéfiniment  
- Permettent aux serveurs d’utiliser de nouvelles maps ou seeds

Beaucoup de communautés Rust font des wipes programmés chaque semaine, toutes les deux semaines ou chaque mois selon le style du serveur.



## Comment Effectuer un Wipe de Serveur

Pour faire un wipe sur ton serveur Rust, accède aux fichiers de ton serveur via le [accès FTP](gameserver-ftpaccess.md). Ensuite, localise les fichiers de sauvegarde dans le répertoire du serveur Rust. Ces fichiers incluent généralement :

```
proceduralmap.*
player.blueprints.*
player.deaths.*
player.identities.*
player.states.*
```
Supprimer certains fichiers détermine le type de wipe effectué. Supprimer les fichiers `proceduralmap.*` réalise un **wipe de map**, supprimant le monde existant. Supprimer les fichiers `player.blueprints.*` réalise un **wipe de blueprints**.

![img](https://screensaver01.zap-hosting.com/index.php/s/QdeoFWbaaQz7Yaf/preview)

Supprimer les deux entraînera un **wipe complet**. Après avoir supprimé les fichiers souhaités, redémarre le serveur. Il générera automatiquement un nouveau monde et permettra aux joueurs de repartir à zéro.



## Conclusion

Félicitations ! Tu sais maintenant comment fonctionnent les wipes de serveur Rust et comment les réaliser. Pour toute question ou aide, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />