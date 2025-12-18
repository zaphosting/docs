---
id: assettocorsa-contentmanager
title: "Assetto Corsa : Configurer le serveur avec Content Manager"
description: "Découvrez comment configurer et gérer efficacement les paramètres de votre serveur de jeux pour des performances optimales et une personnalisation au top → En savoir plus maintenant"
sidebar_label: Configurer le serveur avec Content Manager
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
**Important** Pour gérer le serveur avec Content Manager, la version complète est requise, la version lite *ne peut pas* gérer les serveurs.
:::

<InlineVoucher />


## Préparation

D'abord, on ouvre notre Content Manager et on clique sur le menu sandwich en haut à droite, où on sélectionne "Server" :

![](https://screensaver01.zap-hosting.com/index.php/s/LGKdDPSCMCEMEZj/preview)

Ici, on crée un nouveau preset et on le sélectionne :

![](https://screensaver01.zap-hosting.com/index.php/s/XLTcJkwrAAwB65o/preview)

## Définir les slots du serveur

On doit d’abord définir la capacité de notre serveur, dans notre cas il n’a que 10 slots, donc on sélectionne '10' pour la Capacité :

![](https://screensaver01.zap-hosting.com/index.php/s/XreNRjbpSJJqEsQ/preview)

## Choisir la map

Par défaut, Imola est sélectionnée comme map, en cliquant dessus on peut choisir notre propre map :

![](https://screensaver01.zap-hosting.com/index.php/s/B87ywSwXHL6qzFD/preview)



## Choisir les voitures

Maintenant, on passe à l’onglet "Entry List", ici on peut ajouter de nouvelles voitures :


![](https://screensaver01.zap-hosting.com/index.php/s/bY5Q5WB7nDq7f8q/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/w6oxDfGJifFZbd7/preview)


:::info
Attention à bien remplir tous les slots voitures et ne pas dépasser le nombre de slots disponibles.

![](https://screensaver01.zap-hosting.com/index.php/s/tSZn2QJLzfDx4r9/preview)
:::

## Configurer l’upload FTP

Via le menu "Advanced", on peut configurer un uploader FTP pour que tu puisses uploader ta config serveur en un clic.

![](https://screensaver01.zap-hosting.com/index.php/s/7TmdJPGKAbAJnDP/preview)


Entre maintenant tes données FTP ici :

![](https://screensaver01.zap-hosting.com/index.php/s/7R9xNeEbDQpF4BD/preview)

:::info
Dans le champ "Folder", tu dois entrer l’ID de ton serveur de jeux tel que tu le vois dans l’URL de ton serveur, par exemple :

> https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/
:::

Chez nous, ça donne :

```
/g427814/assetto-corsa/
```

Pour AssettoServer : 

```
/g427814/assettoserver/
```

Après ça, tu peux cliquer sur "Upload Content", la config, la piste et les voitures configurées seront uploadées automatiquement, il ne te reste plus qu’à démarrer ton serveur !

<InlineVoucher />