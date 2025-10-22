---
id: spaceengineers-becomeadmin
title: "Space Engineers : Deviens admin serveur"
description: "Découvre comment attribuer les permissions d’administrateur pour un contrôle total du serveur et une gestion fluide en jeu → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer les permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes pour attribuer les permissions d’administrateur à ton serveur sont expliquées ci-dessous.  
<InlineVoucher />

Pour bien gérer ton propre serveur de jeux en jeu, il est important d’avoir le rang Admin.

### SteamID64 via site web

Tout d’abord, ouvre le profil Steam et fais un clic droit n’importe où dessus.  
Tu peux ensuite copier l’URL Steam du profil.

![](https://screensaver01.zap-hosting.com/index.php/s/pNMMAqQDRPSoo38/preview)

Une fois fait, tu peux entrer cette URL sur les sites suivants :

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/dBezeZQEoP3KYq5/preview)

### Entrer le SteamID dans la config

Ensuite, ouvre ton interface et ton serveur.  
Va dans l’onglet **Configs**

![](https://screensaver01.zap-hosting.com/index.php/s/NQffqKfjszY23HK/preview)

Puis ouvre le fichier **SpaceEngineers-Dedicated.cfg**

![](https://screensaver01.zap-hosting.com/index.php/s/yx2efZLYmW32BZH/preview)

Après ça, appuie sur **STR + F** et cherche *admin*

![](https://screensaver01.zap-hosting.com/index.php/s/eBgLRwe5Y3itnyt/preview)

Maintenant, écris ceci :
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
Le tout devrait ressembler à ça ensuite :

![](https://screensaver01.zap-hosting.com/index.php/s/r7tj3EF6trSiz5x/preview)

Il ne te reste plus qu’à **Enregistrer** le fichier Config et c’est tout !

## Conclusion

Félicitations, tu as configuré avec succès les permissions d’administrateur. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />