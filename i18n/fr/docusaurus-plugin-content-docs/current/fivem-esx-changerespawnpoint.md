---
id: fivem-esx-changerespawnpoint
title: "FiveM : Modifier le point de réapparition"
description: "Découvrez comment mettre à jour les points de réapparition des ambulances dans ESX pour personnaliser le gameplay et améliorer la gestion du serveur → En savoir plus maintenant"
sidebar_label: Modifier le point de réapparition
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guide archivé
Ce document a été archivé. Les documents sont archivés lorsqu’ils ne sont plus pertinents, incorrects ou à jour. Il a été archivé pour les raisons suivantes :

**Raison** : La méthode décrite concerne une version obsolète d’ESX. Cette approche ne peut pas être utilisée pour la version actuelle d’ESX, car la structure a changé.
::::



:::info
ESX doit être installé
:::

<InlineVoucher />

📔 Préparatifs

Pour trouver les coordonnées, nous avons besoin d’un script Coords comme celui-ci :
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
Installe-le comme ceci : [Installer les ressources](fivem-installresources.md)
Une fois ce script installé, tape en jeu */coords*
Cela nous donnera les coordonnées.

📑 Modifier la config

Une fois que nous avons nos coordonnées, on va dans l’onglet Config

Ici, on appuie sur **CTRL + F** et on cherche **ambulance**
On ouvrira alors ce fichier.
On descend jusqu’à trouver **Config_RespawnPoint**.

![](https://screensaver01.zap-hosting.com/index.php/s/6FYfkgfPfEWK6sj/preview)

On va maintenant modifier ces coordonnées.
Ensuite, on clique simplement sur Enregistrer et voilà.

![](https://screensaver01.zap-hosting.com/index.php/s/ZEcfQt69SX5if3Q/preview)

:::info
Après un redémarrage du serveur, les changements prendront effet.
:::

<InlineVoucher />