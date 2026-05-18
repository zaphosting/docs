---
id: hytale-profiler-spark
title: "Hytale : Spark Profiler – Identifie les goulets d’étranglement de performance"
description: "Utilise le mod Spark pour diagnostiquer les problèmes de performance et identifier les causes de lag sur ton serveur Hytale → Découvre-en plus maintenant"
sidebar_label: Spark Profiler
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## Introduction

Les problèmes de performance comme un TPS (ticks par seconde) bas, des pics de lag ou des saccades peuvent vraiment gâcher l’expérience des joueurs sur un serveur Hytale. Trouver la cause de ces soucis à la main, c’est galère sans diagnostics détaillés.

![img](https://screensaver01.zap-hosting.com/index.php/s/E4o3SDSRr3RpBBA/preview)

Le mod **Spark** est un outil puissant pour les propriétaires de serveurs qui veulent analyser la performance de leur serveur. Une fois installé, Spark collecte des données sur l’utilisation du CPU, les temps de tick, les métriques de santé du serveur, et plus encore, puis génère des rapports détaillés qui aident à localiser précisément où les problèmes de performance se produisent. C’est un outil indispensable pour le dépannage et l’optimisation, surtout sur des mondes Hytale plus grands ou très fréquentés.

<InlineVoucher />

## Ce que fait Spark

Spark offre plusieurs fonctionnalités de profilage :

- **Profilage de performance** – enregistre l’activité du serveur et identifie les ticks lents ou une utilisation élevée du CPU  
- **Métriques de santé du serveur** – inclut la durée des ticks, le TPS, l’utilisation CPU et mémoire  
- **Rapports interactifs** – produit un rapport web consultable dans un navigateur  
- **Léger et simple à utiliser** – conçu pour avoir un impact minimal tout en collectant des données utiles  

## Installer Spark

Spark est distribué via CurseForge et s’installe comme un mod. Tu peux installer des mods soit via notre Mods Installer, soit via FTP. Plus d’infos dans notre [guide Installer des Mods](http://localhost:3000/guides/docs/hytale-mods). Après l’installation, redémarre ton serveur Hytale.

<Button label="Télécharger Spark" link="https://www.curseforge.com/hytale/mods/spark" block />

## Lancer le profiler

Après avoir installé Spark et démarré ton serveur, ouvre l’onglet **Console Live** dans le tableau de bord de ton serveur de jeux ou utilise le chat en jeu si tu as les permissions nécessaires. Pour commencer à collecter les données de performance, lance le profiler avec la commande suivante :

```
/spark profiler start
```

![](https://screensaver01.zap-hosting.com/index.php/s/4fwJk5wtkGK7Yqy/download)

Une fois lancé, Spark commence à enregistrer l’activité détaillée du serveur comme la durée des ticks, l’utilisation CPU, et l’exécution des threads. Le profiler doit tourner pendant que le serveur rencontre le problème que tu veux analyser, par exemple lors des pics d’activité des joueurs ou pendant les pics de lag. Laisser tourner le profiler au moins 30 à 60 secondes fournit généralement assez de données pour une analyse pertinente.

Pendant que le profiler tourne, tu peux déjà voir les résultats en direct en lançant :

```
/spark profiler open
```

Cette commande génère un lien web dans la console ou le chat. Ouvre ce lien dans ton navigateur pour voir une vue live des données de profilage, avec des graphiques de ticks et la répartition de la charge.

Quand tu as assez de données, arrête le profiler avec :

```
/spark profiler stop
```

Après l’arrêt, Spark génère un lien vers un rapport final. Ce rapport contient l’ensemble des données de la session de profilage et peut être ouvert dans un navigateur ou partagé pour une analyse plus poussée.

Si tu veux annuler la session de profilage en cours et recommencer, tu peux réinitialiser le profiler avec :

```
/spark profiler cancel
/spark profiler start
```

Cela efface les données existantes et lance immédiatement une nouvelle session de profilage.

## Analyser les résultats du profiler

Le rapport du profiler Spark donne une vue détaillée de l’utilisation des ressources du serveur. Une des zones les plus importantes à vérifier est la timeline des ticks, qui montre combien de temps chaque tick met à s’exécuter. Des ticks constamment longs indiquent souvent des charges lourdes qui impactent directement le TPS et la fluidité du gameplay.

![img](https://screensaver01.zap-hosting.com/index.php/s/zToJEdffQ75EgXH/preview)

Le rapport met aussi en avant les **points chauds**, montrant quelles fonctions ou systèmes consomment le plus de ressources. Ces infos facilitent la détermination si les problèmes de performance viennent de mods spécifiques, du comportement des joueurs, des mécaniques du monde, ou de la configuration du serveur.

Les rapports Spark sont conçus pour être facilement partageables. Quand tu demandes de l’aide au support ou à d’autres admins, fournir le lien du profiler permet aux autres de consulter directement les données et de donner des conseils ciblés.

## Conclusion

Le mod Spark profiler pour Hytale est un outil précieux pour diagnostiquer les problèmes de performance et identifier les causes racines du lag sur ton serveur. Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />