---
id: gameserver-restartplaner
title: 'Serveur de jeux : Planificateur de redémarrage - Effectuez des redémarrages automatiques'
description: "Découvrez comment automatiser les redémarrages quotidiens de votre serveur de jeux pour améliorer les performances et la disponibilité → En savoir plus maintenant"
sidebar_label: Planificateur de redémarrage
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Le planificateur de redémarrage est une fonctionnalité proposée pour les serveurs de jeux qui vous permet de créer un redémarrage automatique pour redémarrer le serveur à la même heure chaque jour.

<YouTube videoId="bcsAePevPnY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pNsgKBQQGEC3tPj/preview" title="Comment configurer un PLANIFICATEUR DE REDÉMARRAGE pour votre serveur !" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus fun et engageante !" />

:::info
Cette fonctionnalité est uniquement disponible pour les serveurs de jeux.
:::

Cette fonctionnalité se trouve dans l’interface du serveur de jeux.

![](https://screensaver01.zap-hosting.com/index.php/s/doBQoGw3kTj8o6r/preview)

<InlineVoucher />

## Créer de nouvelles entrées

:::info
***Note :*** Les modifications apportées au planificateur de redémarrage ne sont appliquées qu’après le redémarrage du serveur.
:::

Si vous souhaitez ajouter un redémarrage automatique, cliquez sur le bouton gris "**+**".

Dans la fenêtre suivante, vous pouvez choisir entre des redémarrages Hebdomadaires ou Quotidiens. Dans notre exemple, nous voulons quatre redémarrages par jour avec un intervalle de 6 heures. Nous sélectionnons donc "**Quotidien**" et réglons "**06:00**". Confirmez l’entrée avec "**Enregistrer**".

Cette procédure est répétée pour chaque redémarrage automatique souhaité. Si vous entrez "**24:00**", le système affichera un message d’erreur. Pour éviter cette erreur, utilisez plutôt "**00:00**".

![](https://screensaver01.zap-hosting.com/index.php/s/j4nyS4efsKTinBS/preview)

### Démarrer un serveur hors ligne

Si cette option est activée, un serveur arrêté sera automatiquement démarré à ce moment-là. Si cette option reste désactivée, le serveur de jeux ne sera redémarré par notre système que s’il était "**En ligne**" avant.

## Option commande

L’option commande parmi les redémarrages automatiques spécifiés sert à exécuter des commandes automatiquement juste avant que le redémarrage ait lieu. Le nombre de commandes disponibles dépend du jeu. Tous les jeux ne proposent pas cette option.

Si vous voulez prévenir les joueurs à l’avance, vous pouvez utiliser la commande *say* dans Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/bcRJQprM2BFeR75/preview)

### Délai

Le champ Délai définit l’intervalle entre l’exécution de la commande et le redémarrage du serveur. Ce délai est exprimé en **secondes**. Par exemple, pour un délai de 5 minutes, il faut saisir la valeur 300. 

<InlineVoucher />