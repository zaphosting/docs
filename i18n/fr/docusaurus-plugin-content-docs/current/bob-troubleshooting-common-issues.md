---
id: bob-troubleshooting-common-issues
title: "Beasts of Bermuda : Problèmes courants"
description: "Découvrez comment dépanner et résoudre les problèmes courants des serveurs Beasts of Bermuda pour une expérience de jeu fluide → En savoir plus maintenant"
sidebar_label: Problèmes courants
services:
  - gameserver-bob
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## Introduction

Configurer et gérer votre propre serveur de jeux Beasts of Bermuda peut être super excitant et vraiment fun. Même si c’est un excellent moyen de créer un environnement de jeu personnalisé et une communauté, ça implique aussi de prendre la responsabilité quand ça coince. Les crashs, le lag, et les soucis de config sont des problèmes classiques que tout propriétaire de serveur rencontre un jour ou l’autre.

Pour que vous passiez moins de temps à réparer et plus à kiffer votre serveur, cette section met en avant les problèmes les plus fréquents rencontrés par les propriétaires de serveurs et vous donne des solutions pour les résoudre rapidement et efficacement.


<InlineVoucher />



## Problèmes et solutions

Les causes des problèmes serveur peuvent varier et ne sont souvent pas évidentes au premier abord. Apprenez à dépanner les soucis typiques étape par étape pour garder tout qui tourne nickel.

### Général
Les problèmes généraux peuvent inclure toutes sortes de soucis inattendus qui ne rentrent pas dans une catégorie précise. Ils concernent souvent des réglages basiques, des fichiers manquants ou des erreurs de configuration simples. En général, ils se règlent vite avec quelques vérifications et ajustements.

<details>
  <summary>Serveur non visible</summary>

Un serveur qui n’apparaît pas peut être dû à une initialisation incomplète. Ça peut venir d’une config foireuse ou de fichiers corrompus. Vous trouverez souvent plus d’infos dans la console du serveur ou les fichiers logs. Aussi, vérifiez que vous n’avez pas de filtres incorrects dans la liste des serveurs qui empêcheraient son affichage.

</details>


### Crashs

Rien ne gâche une bonne session plus vite qu’un crash inattendu. Les crashs peuvent venir d’un logiciel serveur défectueux, d’extensions cassées ou incompatibles (plugins, mods, ressources, frameworks), d’une surcharge système ou d’erreurs de config.

<details>
  <summary>Garder votre serveur à jour</summary>

Faire tourner votre serveur de jeux sur la dernière version est crucial pour la stabilité, la sécurité et la compatibilité. Les mises à jour du jeu, les changements de framework ou les modifs d’outils tiers peuvent causer de gros soucis si votre version serveur est obsolète.

Un serveur de jeux dépassé peut planter, avoir des comportements bizarres ou même ne pas démarrer du tout.

![img](https://screensaver01.zap-hosting.com/index.php/s/JXLHyHeMJqErHLJ/preview)


</details>

<details>
  <summary>Extensions défectueuses/problématiques (Frameworks, Plugins, Mods, Ressources)</summary>

Les crashs sont souvent causés par des extensions défectueuses ou obsolètes. Que ce soit un framework, plugin, mod ou ressource, des problèmes peuvent survenir si l’extension n’est pas compatible avec la dernière version du jeu ou contient des bugs.

Ça peut provoquer des crashs, freezes ou erreurs, surtout si plusieurs extensions problématiques interagissent. Si vous pensez qu’une extension est en cause, désactivez-la temporairement et voyez si le serveur reste stable sans. C’est une méthode simple pour identifier l’extension qui pose problème.

Assurez-vous que toutes vos extensions sont à jour, maintenues activement et testées pour la compatibilité avec la version actuelle du jeu pour éviter crashs et downtime.

Pour isoler la cause des crashs, il est souvent utile de désactiver temporairement du contenu additionnel. Commencez avec une config minimale et vérifiez si le problème persiste. Si le souci disparaît, réintroduisez les extensions, mods ou ressources une par une en testant à chaque étape. Cette approche progressive permet d’identifier précisément l’élément problématique. Cette méthode vous fait gagner du temps et évite de partir sur des suppositions.

</details>

### Performance

Une bonne perf serveur est essentielle pour une expérience de jeu au top. Les soucis comme le lag, les délais ou crashs soudains arrivent souvent quand la config serveur n’est pas optimale, que le matos ne suit pas ou que les extensions surchargent le système.

Les raisons typiques sont une mauvaise config, des ressources manquantes ou des plugins/mods non optimisés. Vérifier et ajuster ces points règle la plupart des problèmes de perf et garde votre jeu fluide et réactif.

<details>
  <summary>Mauvaise configuration serveur</summary>

Des réglages serveur incorrects ou mal adaptés peuvent augmenter la consommation de ressources et causer des soucis de perf comme du lag ou du stuttering. Assurez-vous que vos valeurs de config correspondent aux recommandations pour votre jeu et la taille de votre serveur. Revoyez et ajustez si besoin pour que votre serveur tourne au max de son efficacité.

Vous pouvez modifier votre config via les paramètres disponibles dans la section **Settings** ou directement dans les fichiers de config sous **Configs** de votre interface web.

</details>

<details>
  <summary>Ne pas respecter les exigences du jeu</summary>

Pour que votre serveur de jeux tourne bien et sans accroc, il faut choisir une config adaptée aux besoins de votre projet. Les exigences varient beaucoup selon le jeu, l’utilisation d’extensions (mods, plugins, ressources) et le nombre de joueurs attendu.

ZAP-Hosting propose une config minimale recommandée lors de la commande. Ces suggestions sont basées sur des cas d’usage typiques et vous aident à éviter les problèmes de perf comme le lag, les crashs ou les temps de chargement longs.

![img](https://screensaver01.zap-hosting.com/index.php/s/87ADJdwNAXxXxdk/preview)

Merci de suivre ces recommandations ou de monter en gamme si besoin pour garantir stabilité optimale et meilleure expérience possible pour vous et vos joueurs. C’est une recommandation minimale.

Selon l’ampleur de votre projet et la quantité de contenu additionnel, les ressources nécessaires peuvent être plus élevées dès le départ ou augmenter avec le temps. Dans ce cas, upgrader votre package serveur de jeux est une solution simple pour assurer la perf et la stabilité sur la durée.

</details>

<details>
  <summary>Extensions non optimisées (Frameworks, Plugins, Mods, Ressources)</summary>

Toutes les extensions ne sont pas conçues pour la perf. Que ce soit un framework, plugin, mod ou ressource, une mauvaise implémentation peut causer de gros soucis de perf sur votre serveur. Souvent, la fonctionnalité marche mais la manière dont c’est codé est inefficace, trop complexe ou génère une charge inutile.

Ça peut entraîner une forte utilisation CPU, des fuites mémoire, du lag ou même des crashs, surtout quand plusieurs composants non optimisés interagissent. Vérifiez toujours que les extensions sont maintenues activement, bien documentées et testées pour la perf. En cas de doute, consultez les retours de la communauté ou surveillez la perf serveur pour repérer les éléments problématiques.

Pour isoler la cause des soucis de perf, désactivez temporairement du contenu additionnel. Commencez avec une config minimale et voyez si le problème persiste. Si ça disparaît, réintroduisez les extensions, mods ou ressources une par une en testant à chaque étape. Cette méthode progressive permet d’identifier précisément l’élément qui pose problème, que ce soit un conflit, une fuite mémoire ou une consommation excessive.

Cette approche vous fait gagner du temps et évite de partir sur des suppositions.

</details>



### Réseau
Les problèmes réseau peuvent causer du lag, des délais ou des déconnexions. Ces soucis ont différentes causes mais se règlent souvent avec les bons réglages et mesures de sécurité.

<details>
  <summary>Pics de ping, lag et délais réseau</summary>

Les pics de ping, le lag et les délais réseau viennent souvent d’un manque de ressources serveur, comme un CPU, une RAM ou une bande passante insuffisants.

Ils peuvent aussi survenir quand le serveur est surchargé par trop de joueurs ou des scripts/plugins gourmands. Des soucis réseau comme un mauvais routage, une surcharge externe ou un hébergement trop éloigné des joueurs augmentent encore la latence.

En plus, les processus en arrière-plan, une connexion internet instable, la perte de paquets, ou un logiciel serveur obsolète ou mal configuré peuvent tous causer des problèmes de perf visibles en jeu.

Si vous avez du lag ou un ping élevé sur votre serveur, voici quelques étapes simples pour améliorer la perf. D’abord, assurez-vous que votre serveur respecte ou dépasse les specs recommandées pour votre jeu et projet. Choisir un emplacement serveur proche de vos joueurs aide aussi à réduire la latence.

Si vous pensez que des problèmes de routage ou réseau externe causent des délais, n’hésitez pas à contacter notre support. Ils vous aideront à analyser la situation et trouver la meilleure solution.


</details>

<details>
  <summary>DDoS et autres menaces réseau</summary>

Les serveurs de jeux peuvent parfois être la cible d’activités réseau malveillantes, notamment des attaques par Déni de Service Distribué (DDoS). Ces attaques inondent le serveur avec un trafic excessif, provoquant lag, perte de connexion ou même downtime complet. Parfois, les attaquants cherchent à exploiter des failles réseau ou déstabiliser le serveur via des tentatives de connexion répétées ou des schémas de données inhabituels.

Même si la plupart de ces menaces échappent au contrôle de l’utilisateur lambda, ZAP-Hosting fournit des systèmes intégrés de protection et de mitigation pour protéger votre serveur contre les attaques courantes et avancées. Si vous suspectez que votre serveur est ciblé et que ça cause des soucis, contactez notre support pour de l’aide et des conseils.

</details>






## Mesures préventives 

Faire des sauvegardes régulières évite beaucoup de stress et de galères. Créez des sauvegardes régulières pour être sûr qu’en cas de pépin, vous avez toujours une version plus ancienne fonctionnelle. On propose une [solution de sauvegarde](gameserver-backups.md) pour nos serveurs de jeux Beasts of Bermuda, que vous pouvez utiliser pour faire des backups manuels ou automatiques programmés.



<Button label="Accéder à ZAP-Storage" link="https://zap-hosting.com/en/customer/home/storage/" block/>






## Conclusion

Ces étapes devraient vous aider à résoudre le problème. Si vous trouvez votre souci listé ici, la solution correspondante vous mettra déjà sur la bonne voie pour remettre tout en marche.

Sinon, n’hésitez pas à contacter notre support pour toute question ou aide supplémentaire, ils sont dispo tous les jours pour vous filer un coup de main ! 🙂

<InlineVoucher />