---
id: unturned-firstthirdperson
title: "Unturned : Configurer la vue à la 1re/3e personne pour le serveur"
description: "Découvrez comment personnaliser la perspective des joueurs sur votre serveur Unturned entre la première, la troisième personne ou les deux pour un gameplay amélioré → En savoir plus maintenant"
sidebar_label: 1re/3e Personne
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Perspective 1re / 3e personne

Unturned offre la possibilité de changer la perspective sur le serveur. Tu peux choisir entre la vue à la première ou à la troisième personne. Par défaut, le jeu se joue en vue à la première personne. Cependant, depuis la version 3.9.9.0, ça peut aussi être modifié. On t’explique ici comment faire ce changement pour ton serveur. 



## Configuration

Le changement se fait dans le fichier de config **Commands.dat**. Tu peux le trouver dans le **Webinterface sous Configs**. Selon la vue que tu souhaites, il faut ajouter la commande suivante dans la config :

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)



### Perspective 1re personne (par défaut) : 

Cette option est déjà active par défaut, même si la commande n’a pas encore été ajoutée dans la config. Mais pour être complet, tu peux quand même ajouter cette commande sans souci. La commande pour cette option est la suivante :

```
perspective first
```



### Perspective 3e personne :

Si tu préfères utiliser la vue à la 3e personne au lieu de la 1re, c’est aussi possible. La commande pour ça est la suivante :

```
perspective third
```



### Les deux perspectives :

Tu peux aussi activer les deux variantes en même temps. Dans ce cas, il suffit d’ajuster la valeur de la commande. La commande pour cette option est :

```
perspective both
```



Au prochain démarrage de ton serveur, l’option choisie sera activée !

<InlineVoucher />