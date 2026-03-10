---
id: rust-custom-map
title: "Rust : Utilise une carte personnalisée sur ton serveur"
description: "Apprends à configurer et lancer une carte personnalisée sur ton serveur Rust via le paramètre Level URL → Découvre-le maintenant"
sidebar_label: Carte personnalisée
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les cartes personnalisées permettent aux propriétaires de serveurs Rust de créer des expériences de jeu uniques, bien au-delà des cartes procédurales par défaut. Beaucoup de communautés utilisent des cartes personnalisées pour introduire de nouveaux monuments, des terrains modifiés, des événements spéciaux ou des environnements totalement repensés.

Ces cartes sont généralement créées avec des outils comme **RustEdit** et distribuées via des plateformes telles que **Lone Design**, **Codefling**, ou des dépôts communautaires de cartes. Une fois que tu as un fichier de carte ou un lien de téléchargement, tu peux le configurer directement dans les paramètres de ton serveur.

<InlineVoucher />

## Préparation

Avant de configurer une carte personnalisée, tu as besoin d’une **URL de téléchargement de carte** valide. Les cartes personnalisées sont souvent hébergées sur des plateformes de distribution de cartes ou fournies par les créateurs.

L’URL pointe généralement vers un fichier `.map` ou un package de carte téléchargeable. Assure-toi que le lien est accessible publiquement pour que le serveur Rust puisse le télécharger au démarrage. Exemple d’URL de carte :

```
https://example-map-host.com/maps/custommap.map
```

## Configuration

Pour configurer une carte personnalisée sur ton serveur Rust, ouvre ton **panneau de gestion du serveur de jeux** et va dans **Paramètres**.

Trouve le champ de configuration nommé **Level URL**. Ce paramètre permet au serveur de télécharger et charger une carte Rust personnalisée au démarrage. Colle ton URL de carte personnalisée dans le champ **Level URL**. Par exemple :

```
https://example-map-host.com/maps/custommap.map
```

Une fois l’URL saisie, sauvegarde les paramètres dans le panneau. Au démarrage, le serveur Rust téléchargera automatiquement la carte depuis l’URL fournie et la chargera à la place d’une carte procédurale.

Si ta carte personnalisée nécessite des paramètres de configuration supplémentaires (comme des seeds spécifiques ou des tailles de monde), ils sont généralement fournis par le créateur de la carte et doivent être ajoutés dans la configuration du serveur.

Après avoir sauvegardé la configuration, **redémarre le serveur** pour que la carte personnalisée soit téléchargée et chargée.

## Notes importantes

Les cartes personnalisées doivent être compatibles avec la version du serveur Rust que tu utilises. Si le fichier de la carte est obsolète ou corrompu, le serveur risque de ne pas démarrer ou de revenir à une carte procédurale.

Les grandes cartes personnalisées peuvent aussi rallonger le temps de démarrage du serveur, car il doit télécharger et préparer la carte avant qu’elle soit disponible pour les joueurs.

Si les joueurs ne peuvent pas se connecter après le changement de carte, vérifie que l’URL de la carte est correcte et accessible depuis internet.

## Conclusion

Félicitations ! Tu as configuré avec succès une carte personnalisée pour ton serveur Rust. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />