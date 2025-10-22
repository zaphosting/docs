---
id: minecraft-pregenerate-world
title: "Minecraft : Prégénérer le Monde (Chunks)"
description: "Découvrez comment prégénérer efficacement vos mondes Minecraft avec des plugins ou mods pour un gameplay plus fluide et une performance serveur optimisée → En savoir plus maintenant"
sidebar_label: Prégénérer le Monde (Chunks)
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu veux générer ton monde rapidement, efficacement et en toute sécurité à l’avance, plutôt que pendant le jeu ? Minecraft ne propose pas cette fonction intégrée par défaut. Cependant, c’est possible grâce à des plugins ou mods spécialement conçus. Comment les utiliser et quels aspects prendre en compte sont expliqués plus en détail ci-dessous.



## Préparation

Avant tout, tu dois t’assurer que ton serveur est configuré pour utiliser des plugins ou mods. L’utilisation d’une des variantes Minecraft suivantes est requise : 

- Minecraft : Forge, Minecraft Fabric (mods)
- Minecraft : Spigot, Minecraft Bukkit, Minecraft : Paper Spigot (plugins) 

Si tu n’utilises pas encore l’une de ces variantes Minecraft, tu peux utiliser l’[option de changement de jeu](gameserver-gameswitch.md) pour sélectionner le jeu souhaité.


## Installation
La méthode la plus courante pour prégénérer des chunks est d’utiliser [Chunky](https://github.com/pop4959/Chunky), disponible pour de nombreuses implémentations serveur, à la fois en plugin et en version mod. Dans cet exemple, la génération des chunks est expliquée et démontrée avec Chunky.

| Variante | Téléchargement |
| -------- | ------------------------------------------------------------ |
| Mod | [Forge](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator-forge) [Fabric](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator) |
| Plugin | [Spigot/Bukkit](https://www.spigotmc.org/resources/chunky.81534/) |

Télécharge **Chunky** en version plugin ou mod et installe-le sur ton serveur. Si tu ne sais pas exactement comment installer des [Plugins](minecraft-pluginuploader.md) ou des [Mods](minecraft-forge-fabric-add-mods-modpacks), les guides correspondants te guideront.



## Utilisation 

Une fois **Chunky** installé avec succès, tu peux commencer à générer les chunks. Le processus se lance avec la commande `chunky start`.

Si tu veux interrompre temporairement la génération et la reprendre plus tard, tu peux utiliser les commandes `chunky pause` et `chunky continue`. Pour arrêter complètement le processus, utilise `chunky cancel`. Tu peux exécuter ces commandes via la console live ou en tant qu’opérateur directement en jeu sur ton serveur.

:::warning Charge excessive
Un dépassement permanent des limites de ressources sur une longue période peut entraîner une suspension temporaire. Pour éviter cela, la génération des chunks doit se faire à un rythme et une ampleur équilibrés afin que la charge système reste dans une plage acceptable.

Plus d’infos sur les limites de ressources et les mesures possibles sont disponibles dans notre [guide sur les limites de ressources](gameserver-resourcelimit.md). 
:::



## Commandes

Cette section liste toutes les commandes que Chunky utilise pour générer et gérer les chunks. 

#### Gestion des tâches

| Commande         | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| chunky start    | Démarre une nouvelle tâche de génération de chunks à partir de la sélection actuelle |
| chunky pause    | Met en pause la tâche de génération de chunks en cours et sauvegarde la progression |
| chunky continue | Reprend la tâche de génération de chunks en cours ou sauvegardée |
| chunky cancel   | Arrête la tâche de génération de chunks en cours et annule la progression |



#### Sélection

| Commande                                    | Description                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| chunky world [world]                       | Définit le monde actuellement sélectionné                   |
| chunky shape `<shape>`                     | Définit la forme à générer                                   |
| chunky center [`<x>` `<z>`]                | Définit la position centrale actuelle                        |
| chunky radius `<radius>`                   | Définit le rayon actuel                                      |
| chunky worldborder                         | Définit le centre et le rayon pour correspondre à la bordure du monde sélectionné |
| chunky spawn                               | Définit le centre au point de spawn                          |
| chunky corners `<x1>` `<z1>` `<x2>` `<z2>` | Définit la sélection par coordonnées des coins               |
| chunky pattern `<pattern>`                 | Définit le motif de génération préféré                       |
| chunky slection                            | Affiche la sélection actuelle                                |





#### Divers

| Commande                   | Description                                           |
| ------------------------- | ----------------------------------------------------- |
| chunky silent             | Active/désactive l’affichage des messages de mise à jour |
| chunky quiet `<interval>` | Définit l’intervalle silencieux en secondes pour les messages de mise à jour |
| chunky progress           | Affiche la progression de la prégénération en jeu pour toutes les tâches |
| chunky reload             | Recharge la configuration                             |
| chunky trim               | Supprime les chunks en dehors de la sélection        |



## Conclusion

En suivant ces étapes, tu as installé Chunky avec succès et tu peux maintenant prégénérer ton monde (chunks). Félicitations, si tu as bien suivi tout ça, tu as établi une connexion réussie avec le serveur. Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />