---
id: dedicated-windows-port
title: "Serveur dédié : Gérer les règles du pare-feu Windows Defender"
description: "Découvrez comment gérer efficacement les règles du pare-feu Windows Defender et optimiser le transfert de port pour une communication sécurisée du serveur → En savoir plus maintenant"
sidebar_label: Transfert de port (Pare-feu)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le système Windows intègre son propre pare-feu, Windows Defender Firewall, qui gère le trafic entrant et sortant entre le serveur et Internet. Dans ce guide, on va voir comment gérer les règles du pare-feu et quelques astuces générales pour le transfert de port.

## Accéder à Windows Defender Firewall

Windows inclut l’application **Windows Defender Firewall avec sécurité avancée** comme application système principale, qui te permet de gérer facilement les règles du pare-feu en un seul endroit.

Tu peux y accéder simplement en la recherchant dans la barre de recherche Windows ou en appuyant sur la touche/icône Windows et en utilisant la barre de recherche du menu démarrer.

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## Gérer les règles

La plupart des applications et processus, surtout ceux qui doivent être accessibles depuis Internet comme les serveurs de jeux ou serveurs web, nécessitent un transfert de port pour que les clients puissent communiquer avec ton serveur (l’hôte).

:::info
Par défaut, Windows n’ouvre le pare-feu que pour les applications qui en ont besoin, gardant tous les autres ports fermés. C’est pour éviter d’exposer inutilement des ports et réduire les risques. C’est aussi pour ça que tu peux voir des invites UAC apparaître quand tu lances un jeu pour la première fois, par exemple, pour confirmer une nouvelle règle de pare-feu.
:::

Sous Windows, gérer les règles se fait facilement de deux façons : en créant des règles pour des programmes ou en créant des règles qui couvrent des ports entiers (et donc tous les programmes ou processus qui les utilisent).

Il y a deux types de règles :
- Règle Entrante : contrôle la communication entrante (depuis Internet vers ton serveur).
- Règle Sortante : contrôle la communication sortante (depuis ton serveur vers Internet).

En général, pour le transfert de port, tu devras créer les deux types de règles pour autoriser la communication avec les clients. Mais ça dépend de ton cas d’usage et de ta configuration.

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### Règles pour programmes

Créer une règle pour un programme est souvent recommandé car ça limite la communication à un programme ou processus spécifique, plutôt qu’à un port entier où n’importe quel programme/service pourrait communiquer.

Tu vas maintenant créer deux règles pour programmes, une sortante et une entrante, qui acceptent toutes les deux la connexion.

Dans l’exemple ci-dessous, on va configurer uniquement la règle **Entrante**. Les étapes sont exactement les mêmes, donc tu devras répéter pour créer la règle Sortante toi-même.

Commence par un clic droit sur **Règles entrantes** dans la barre latérale et choisis l’option **Nouvelle règle...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Dans la première section, sélectionne l’option **Programme** comme type de règle.

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

Maintenant, tu dois sélectionner le programme pour lequel tu veux créer la règle de transfert, en utilisant le bouton parcourir. Dans cet exemple, on a choisi le navigateur Mozilla Firefox comme application exemple.

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

Dans la section action, sélectionne l’option **Autoriser la connexion**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Dans la section profil, garde toutes les options cochées et passe à la dernière section. Ici, donne un nom utile à ta règle pour t’en souvenir, tu peux aussi ajouter une description optionnelle si besoin.

Quand c’est prêt, clique enfin sur le bouton **Terminer** pour créer la règle.

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

Tu as créé ta propre règle pour programme sur ton serveur Windows. Tu dois maintenant refaire la même chose pour créer une **règle sortante**, en suivant les mêmes étapes, mais dans la section Règles sortantes.

### Règles pour ports

Créer une règle générale pour un port peut aussi être utile dans beaucoup de cas et suit des étapes similaires.

Tu vas maintenant créer deux règles pour ports, une sortante et une entrante, qui acceptent toutes les deux la connexion.

Dans l’exemple ci-dessous, on va configurer uniquement la règle **Entrante**. Les étapes sont exactement les mêmes, donc tu devras répéter pour créer la règle Sortante toi-même.

Commence par un clic droit sur **Règles entrantes** dans la barre latérale et choisis l’option **Nouvelle règle...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Dans la première section, sélectionne l’option **Port** comme type de règle.

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

Maintenant, tu dois définir le type de port (TCP ou UDP) et le(s) port(s) que tu souhaites transférer. Si tu dois transférer à la fois TCP et UDP, tu devras créer deux règles séparées, une pour chaque type de port.

Dans cet exemple, le port 25565 (TCP) est utilisé comme port exemple, c’est le port par défaut pour Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

Dans la section action, sélectionne l’option **Autoriser la connexion**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Dans la section profil, garde toutes les options cochées et passe à la dernière section. Ici, donne un nom utile à ta règle pour t’en souvenir, tu peux aussi ajouter une description optionnelle si besoin.

Quand c’est prêt, clique enfin sur le bouton **Terminer** pour créer la règle.

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

Tu as créé ta propre règle pour port sur ton serveur Windows. Tu dois maintenant refaire la même chose pour créer une **règle sortante**, en suivant les mêmes étapes, mais dans la section Règles sortantes.