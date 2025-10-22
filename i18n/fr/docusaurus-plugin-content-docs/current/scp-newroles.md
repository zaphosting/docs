---
id: scp-newroles
title: "SCP Secret Laboratory : Ajouter de nouveaux rôles au serveur"
description: "Apprends à créer et personnaliser des rôles serveur avec des permissions spécifiques pour une gestion efficace de l’admin à distance → Découvre-le maintenant"
sidebar_label: Ajouter de nouveaux rôles
services:
  - gameserver-scp 
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Consulte la config
Les nouveaux rôles se saisissent dans le fichier "config_remoteadmin.txt".  
Tu peux trouver ce fichier de config en cliquant sur "Configs" dans l’interface de ton serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/7JEE5gLDyF29mZR/preview)

Ici, tu peux chercher la config mentionnée ci-dessus puis cliquer sur l’"œil" à droite pour l’ouvrir.

## Copier des rôles existants
Si tu as la config ouverte, tu peux chercher ces entrées dedans :

![](https://screensaver01.zap-hosting.com/index.php/s/tDBFmR5g44gxpp5/preview)

Ce sont des rôles exemples déjà enregistrés.  
On va insérer une nouvelle entrée en dessous.  
Pour ça, on copie le bloc d’un des rôles ci-dessus et on colle cette partie sous le dernier rôle.  
Dans notre exemple, on a copié le rôle "Moderator" et on l’a collé en dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/ELHDZCDcT6WDydJ/preview)

## Ajouter son propre rôle
On peut maintenant modifier le bloc qu’on vient d’insérer, basé sur un rôle existant, et y mettre nos propres valeurs.  
Dans notre exemple, on a utilisé le nom "ZAP" :

![](https://screensaver01.zap-hosting.com/index.php/s/6gtEmbeBjP5A8zy/preview)

Une fois fait, il faut encore ajouter ce rôle à la liste des rôles disponibles.  
Cette partie se trouve un peu plus bas dans la même config.

![](https://screensaver01.zap-hosting.com/index.php/s/qNNKnwYaYSjy2XK/preview)

On ajoute donc notre rôle juste en dessous du rôle "moderator".  
:::info
ATTENTION : Fais bien gaffe aux espaces avant et après le "-" !
:::

## Permissions
Tout en bas du fichier "config_remoteadmin.txt", on peut ajuster les permissions pour chaque rôle.  
Si tu veux attribuer une permission à ton rôle, tu peux entrer le nom du rôle entre crochets.  
Comme montré dans cet exemple :

![](https://screensaver01.zap-hosting.com/index.php/s/kRSiKjYyWsK2RD3/preview)


<InlineVoucher />