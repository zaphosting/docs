---
id: unturned-rocketmod-permissions
title: "Unturned : Ajuster les permissions du serveur"
description: "Comprends comment gérer et personnaliser efficacement les permissions du serveur pour un meilleur contrôle et une meilleure sécurité → Découvre tout maintenant"
sidebar_label: Ajuster les Permissions
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Préparatifs
Pour que les fichiers de config nécessaires soient générés par le serveur, il faut d'abord le démarrer.  
Si le serveur est en ligne, tu peux ensuite l’arrêter.  
Car tous les fichiers nécessaires, dont nous ou le serveur avions besoin, auront alors été créés.

## Ouvrir la Config
Les permissions sont stockées dans le fichier "Permissions.config.xml".  
Tu peux facilement consulter et modifier ce fichier via notre interface.  
Il suffit de cliquer sur l’onglet "Configs" dans l’interface de ton serveur :

![](https://screensaver01.zap-hosting.com/index.php/s/cGyn9Ry3jaekEdQ/preview)

La config s’appelle "Rocket Permissions" et peut être ouverte en cliquant sur le stylo bleu pour l’éditer :

![](https://screensaver01.zap-hosting.com/index.php/s/nLd2dHiPLn9eirH/preview)

## Comprendre la Config
La config peut paraître compliquée et complexe au premier abord.  
On t’aide à y voir plus clair !  
Le fichier est divisé en différents groupes.  
Les groupes sont tous affichés et listés dans la catégorie <groups> </groups>.  
Ça commence par "<groups>" et ça se termine par "</groups>" :

Début :

![](https://screensaver01.zap-hosting.com/index.php/s/jzKgXwCa3zkxNds/preview)

Fin :

![](https://screensaver01.zap-hosting.com/index.php/s/apkYpiJjosJ4FCJ/preview)

Les groupes sont affichés entre ces balises.  
Par exemple, tout ce bloc représente un groupe :

![](https://screensaver01.zap-hosting.com/index.php/s/ZKMeMb3twTBWrrx/preview)

Dans lequel tous les paramètres nécessaires sont ensuite attribués au groupe.

## Ajuster les permissions
Dans le groupe, tu trouveras aussi la catégorie "Permissions".  
Comme tu peux le voir sur cette capture :

![](https://screensaver01.zap-hosting.com/index.php/s/9cT46tzXYWp6Hrk/preview)

C’est ici qu’on peut modifier les permissions du groupe.  
Et aussi définir le temps d’attente avant de pouvoir réutiliser une commande.  
Supposons qu’on veuille donner au groupe le droit de bannir des joueurs.  
On peut alors entrer ceci :

![](https://screensaver01.zap-hosting.com/index.php/s/LDgWZxJ2YyCc6ac/preview)

Cela signifie que le groupe peut maintenant bannir des joueurs en jeu, et comme le "cool down" est réglé à 0 secondes, ça peut être fait sans limite.

Si on veut aussi donner au groupe le droit de se soigner, on peut entrer ceci :

![](https://screensaver01.zap-hosting.com/index.php/s/yjSDbMM9sn7236m/preview)

Mais l’utilisateur ne pourra utiliser cette commande qu’une fois toutes les 3600 secondes.  
La procédure est la même pour les autres droits.  
Par contre, certains plugins spécifiques sont nécessaires pour certaines permissions.

## Ajouter des utilisateurs au groupe
Les groupes sont maintenant créés avec les permissions souhaitées.  
Mais il faut assigner des utilisateurs au groupe.  
Pour ça, il faut le Steam64ID des utilisateurs.  
Tu peux le trouver en cliquant sur ce lien :  
https://steamid.io/

Une fois que tu as récupéré le Steam64ID, tu peux l’entrer dans la config.  
Ça se fait ici avec le paramètre Member :

![](https://screensaver01.zap-hosting.com/index.php/s/WX2CxgZoQBCa4Lr/preview)

Voici à quoi ça ressemble dans un exemple :

![](https://screensaver01.zap-hosting.com/index.php/s/RqkCrB5gM4jHT2t/preview)

Il faut donc toujours créer une nouvelle ligne pour chaque nouvel utilisateur à assigner au groupe.  
Quand tu as ajouté tous les utilisateurs souhaités, tu peux sauvegarder la config en cliquant sur "Save".  
Puis démarre le serveur et tu seras assigné au groupe en jeu !

<InlineVoucher />