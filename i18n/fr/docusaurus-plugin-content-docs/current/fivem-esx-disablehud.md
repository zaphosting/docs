---
id: fivem-esx-disablehud
title: "FiveM : Désactiver/activer le HUD"
description: "Comprends comment mettre à jour la configuration de ton serveur ESX pour une meilleure gestion du HUD et des performances serveur → Découvre-le maintenant"
sidebar_label: Désactiver le HUD
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guide archivé
Ce document a été archivé. Les documents sont archivés lorsqu'ils ne sont plus pertinents, incorrects ou à jour. Il a été archivé pour les raisons suivantes :

**Raison** : La méthode décrite concerne une version obsolète d’ESX. Cette approche ne peut pas être utilisée pour la version actuelle d’ESX, car la structure a changé. 
::::



<InlineVoucher />

## 📑 Trouve et modifie la Config

Une fois que c’est fait, on ouvre la page Config et on cherche es_extended.  
Appuie simplement sur CTRL + F et cherche es_extended.  
Tu devrais le trouver rapidement.  
On va bosser dessus.

![](https://screensaver01.zap-hosting.com/index.php/s/FfjdwPMGYgz2k3k/preview)

Regardons maintenant : Config.EnableHUD.

![](https://screensaver01.zap-hosting.com/index.php/s/F6w582EoXgbPjeC/preview)

On met ça sur false et on sauvegarde le fichier.

Ensuite, on va dans le Server.cfg.  
Tu peux aussi le trouver sur la page Config.  
Là, on refait une recherche avec STR + F pour es_  
On cherche ensuite es_ui et on supprime complètement cette ligne.  
On sauvegarde à nouveau.

Une fois que c’est fait, il ne te reste plus qu’à redémarrer le serveur et voilà.

<InlineVoucher />