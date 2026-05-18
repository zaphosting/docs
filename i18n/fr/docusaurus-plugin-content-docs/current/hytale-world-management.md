---
id: hytale-world-management
title: "Hytale : Gestion des Mondes"
description: "Découvrez comment sécuriser votre serveur Hytale en gérant l'accès des joueurs avec les fonctionnalités de whitelist et protégez votre expérience de jeu → En savoir plus maintenant"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

La gestion des mondes sur un serveur Hytale consiste à contrôler l’environnement de jeu persistant dans lequel les joueurs explorent, construisent et interagissent. Un monde comprend toutes les données du terrain, les structures, la progression des joueurs et les paramètres qui définissent l’expérience partagée. Pouvoir créer, renommer, réinitialiser ou organiser les mondes est essentiel pour maintenir un serveur, que ce soit pour des communautés privées ou publiques.

:::info Avis Early Access

Hytale est sorti le 13 janvier 2026 et est actuellement disponible en Early Access. Comme le jeu est encore en phase de développement active, les logiciels serveur, fichiers de configuration, support du modding et processus d’installation peuvent continuer à évoluer avec le temps.

:::

## Création d’un nouveau monde

Créer un nouveau monde offre à votre serveur un environnement frais pour générer terrain, structures et progression de jeu depuis zéro. Avec la console live, les mondes peuvent être créés ou changés en utilisant les commandes appropriées liées aux mondes.  
Quand un nouveau nom de monde est spécifié, le serveur charge soit un monde existant portant ce nom, soit génère un nouveau si aucune donnée correspondante n’est trouvée.

```
/world create <nomdumonde>
```

Cette commande crée un nouveau monde nommé `<nomdumonde>`. Si aucune donnée de monde existante n’est présente pour ce nom, le serveur génère un environnement de monde tout neuf.



## Définir un monde par défaut

Un monde spécifique peut être défini comme monde par défaut afin qu’il soit automatiquement chargé au démarrage du serveur. Définir un monde par défaut est utile lorsqu’il y a plusieurs mondes et qu’un seul doit toujours être utilisé comme environnement principal.

Avec la console live, le monde par défaut peut être modifié sans avoir à éditer manuellement les fichiers de configuration. Une fois défini, le serveur priorisera ce monde au prochain redémarrage.

```
/world setdefault <nomdumonde>
```

Cette commande définit le monde nommé `mainworld` comme monde par défaut. Après le redémarrage du serveur, ce monde sera chargé automatiquement.



## Supprimer un monde existant

En plus de créer et charger des mondes, la console live peut aussi être utilisée pour supprimer des mondes existants du serveur. C’est utile lorsque des mondes obsolètes, inutilisés ou de test ne sont plus nécessaires. Supprimer un monde efface ses données associées du serveur. Cette action est définitive et ne peut pas être annulée sauf si une sauvegarde existe.

```
/world remove <nomdumonde>
```

Cette commande supprime le monde nommé `nomdumonde` du serveur. Si le monde est actif, il doit être déchargé ou le serveur peut rejeter la commande selon son implémentation.



## Conclusion

Gérer les mondes via la console live offre un moyen rapide et flexible de contrôler l’environnement actif sur un serveur Hytale. Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous accompagner ! 🙂