---
id: brokeprotocol-troubleshooting-common-issues
title: "Broke Protocol : Problèmes courants"
description: "Découvrez comment dépanner et résoudre les problèmes courants des serveurs Broke Protocol pour garantir un gameplay fluide et un environnement de jeu stable → En savoir plus maintenant"
sidebar_label: Problèmes courants
services:
  - gameserver-brokeprotocol
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## Introduction

Mettre en place et gérer ton propre serveur de jeux Broke Protocol peut être super excitant et vraiment fun. Même si c’est un excellent moyen de créer un environnement de jeu personnalisé et une communauté, ça implique aussi de prendre la responsabilité quand ça coince. Les crashs, le lag, et les soucis de configuration sont des problèmes courants que tout propriétaire de serveur peut rencontrer à un moment donné.

Pour que tu passes moins de temps à réparer et plus à kiffer ton serveur, cette section met en avant les problèmes les plus fréquents rencontrés par les propriétaires de serveurs et propose des solutions pour t’aider à les résoudre rapidement et efficacement.


<InlineVoucher />



## Problèmes et solutions

Les causes des problèmes serveur peuvent varier et ne sont souvent pas évidentes au premier abord. Apprends à dépanner les soucis typiques étape par étape pour garder tout qui tourne nickel.

### Général
Les problèmes généraux peuvent inclure toutes sortes de soucis inattendus qui ne rentrent pas dans une catégorie précise. Ils concernent souvent des réglages basiques, des fichiers manquants ou des erreurs de configuration simples. En général, ils se règlent vite avec quelques vérifications et ajustements.

<details>
  <summary>Serveur non visible</summary>

Un serveur qui n’apparaît pas peut être dû à une initialisation incomplète. Ça peut venir d’une mauvaise configuration ou de fichiers corrompus. Tu peux souvent trouver plus d’infos dans la console du serveur ou les fichiers logs. Aussi, vérifie que tu n’as pas de filtres incorrects dans la liste des serveurs qui empêcheraient l’affichage de ton serveur.

</details>


### Crashs

Rien ne gâche une bonne session plus vite qu’un crash inattendu. Les crashs peuvent être causés par un logiciel serveur défectueux, des extensions cassées ou incompatibles (plugins, mods, ressources, frameworks), une surcharge système, ou des erreurs de configuration.

<details>
  <summary>Garder ton serveur à jour</summary>

Faire tourner ton serveur de jeux sur la dernière version est crucial pour la stabilité, la sécurité, et la compatibilité. Les mises à jour du jeu, les changements de framework, ou les modifications d’outils tiers peuvent causer de gros soucis si ton serveur est obsolète.

Un serveur de jeux dépassé peut planter, avoir des comportements bizarres, ou même ne pas démarrer du tout.

![img](https://screensaver01.zap-hosting.com/index.php/s/JXLHyHeMJqErHLJ/preview)


</details>

<details>
  <summary>Extensions défectueuses/problématiques (Frameworks, Plugins, Mods, Ressources)</summary>

Les crashs sont souvent causés par des extensions défectueuses ou obsolètes. Que ce soit un framework, plugin, mod ou ressource, des problèmes peuvent survenir si une extension n’est pas compatible avec la dernière version du jeu ou contient des bugs dans son code.

Ça peut provoquer des crashs, des freezes ou des erreurs, surtout quand plusieurs extensions problématiques interagissent. Si tu penses qu’une extension est en cause, essaie de la désactiver temporairement et vérifie si ton serveur reste stable sans elle. C’est une méthode simple pour identifier l’extension qui pose problème.

Assure-toi que toutes tes extensions sont à jour, maintenues activement et testées pour la compatibilité avec la version actuelle de ton jeu pour éviter crashs et interruptions.

Pour isoler la cause des crashs, il est souvent utile de désactiver temporairement le contenu additionnel. Commence avec une configuration minimale et vérifie si le problème persiste. Si le souci disparaît, réintroduis progressivement les extensions, mods ou ressources une par une en testant à chaque étape. Cette approche incrémentale aide à identifier précisément l’élément qui pose problème. Cette méthode permet non seulement de cibler efficacement les coupables potentiels, mais aussi de baser ton dépannage sur des preuves plutôt que des suppositions.

</details>

### Performance

Une bonne performance serveur est essentielle pour une expérience de jeu au top. Les problèmes comme le lag, les délais ou les crashs soudains arrivent souvent quand la config serveur n’est pas optimale, que le hardware ne correspond pas aux exigences du jeu, ou que les extensions installées surchargent le système.

Les raisons typiques incluent une mauvaise configuration, des ressources manquantes ou des plugins et mods non optimisés. Vérifier et ajuster ces points aide à résoudre la plupart des soucis de performance et à garder ton jeu stable et réactif.

<details>
  <summary>Mauvaise configuration serveur</summary>

Des réglages serveur incorrects ou mal ajustés peuvent entraîner une utilisation excessive des ressources et causer des problèmes de performance comme du lag ou des saccades. Assure-toi que tes valeurs de configuration correspondent aux paramètres recommandés pour ton jeu et la taille de ton serveur. Revois-les et ajuste-les si besoin pour que ton serveur tourne aussi efficacement que possible.

Tu peux modifier ta configuration via les paramètres disponibles dans la section **Settings** ou directement dans les fichiers de configuration sous **Configs** de ton interface web.

</details>

<details>
  <summary>Ne pas respecter les exigences du jeu</summary>

Pour que ton serveur de jeux tourne bien et de façon fiable, il est essentiel de choisir une configuration adaptée aux besoins de ton projet. Les exigences varient beaucoup selon le jeu, l’utilisation d’extensions comme mods, plugins ou ressources, et le nombre de joueurs attendu.

ZAP-Hosting propose une configuration minimale recommandée lors de la commande. Ces suggestions sont basées sur des cas d’usage typiques et visent à t’aider à éviter les problèmes de performance courants comme le lag, les crashs ou les temps de chargement longs.

![img](https://screensaver01.zap-hosting.com/index.php/s/87ADJdwNAXxXxdk/preview)

Merci de suivre ces recommandations ou de monter en gamme si besoin pour garantir une stabilité optimale et la meilleure expérience possible pour toi et tes joueurs. C’est une recommandation minimale.

Selon l’ampleur de ton projet et la quantité de contenu additionnel, les ressources nécessaires peuvent déjà être plus élevées dès le départ ou augmenter avec le temps. Dans ce cas, upgrader ton package serveur de jeux est une solution simple pour assurer performance et stabilité sur la durée.

</details>

<details>
  <summary>Extensions non optimisées (Frameworks, Plugins, Mods, Ressources)</summary>

Toutes les extensions ne sont pas conçues avec la performance en tête. Que ce soit un framework, plugin, mod ou ressource, une mauvaise implémentation peut causer de gros soucis de performance sur ton serveur. Souvent, la fonctionnalité prévue marche, mais la manière dont elle est exécutée est inefficace, trop complexe ou génère une charge inutile sur les ressources serveur.

Ça peut entraîner une forte utilisation CPU, des fuites de mémoire, du lag, voire des crashs, surtout quand plusieurs composants non optimisés interagissent. Assure-toi toujours que les extensions sont maintenues activement, bien documentées, et testées pour la performance. En cas de doute, consulte les retours de la communauté ou surveille la performance serveur pour identifier les éléments problématiques.

Pour isoler la cause des problèmes de performance, il est souvent utile de désactiver temporairement le contenu additionnel. Commence avec une configuration minimale et vérifie si le problème persiste. Si le souci disparaît, réintroduis progressivement les extensions, mods ou ressources une par une en testant à chaque étape. Cette approche incrémentale aide à identifier précisément l’élément qui pose problème, que ce soit un conflit, une fuite mémoire ou une utilisation excessive des ressources.

Cette méthode permet non seulement de cibler efficacement les coupables potentiels, mais aussi de baser ton dépannage sur des preuves plutôt que des suppositions.

</details>



### Réseau
Les problèmes réseau peuvent causer du lag, des délais ou des coupures de connexion. Ces soucis ont différentes causes mais se règlent souvent avec les bons réglages et mesures de sécurité.

<details>
  <summary>Pics de ping, lag et délais réseau</summary>

Les pics de ping, le lag et les délais réseau sont généralement dus à des ressources serveur limitées, comme un CPU, une RAM ou une bande passante insuffisants.

Ils peuvent aussi survenir quand le serveur est surchargé par un nombre élevé de joueurs ou des scripts et plugins gourmands en ressources. Des problèmes réseau comme un mauvais routage, une surcharge externe, ou un hébergement du serveur trop éloigné de la base de joueurs peuvent aussi augmenter la latence.

En plus, les processus en arrière-plan, les connexions internet instables, la perte de paquets, et un logiciel serveur obsolète ou mal configuré peuvent tous contribuer à des problèmes de performance visibles en jeu.

Si tu subis du lag ou un ping élevé sur ton serveur, voici quelques étapes simples pour améliorer la performance. D’abord, assure-toi que ton serveur respecte ou dépasse les spécifications recommandées pour ton jeu et ton projet. Choisir un emplacement du serveur proche de ta base de joueurs peut aussi aider à réduire la latence.

Si tu suspectes des problèmes de routage ou des soucis réseau externes, n’hésite pas à contacter notre support. Ils t’aideront à analyser la situation et trouver la meilleure solution possible.


</details>

<details>
  <summary>DDoS et autres menaces réseau</summary>

Les serveurs de jeux peuvent parfois être la cible d’activités réseau malveillantes, notamment des attaques par déni de service distribué (DDoS). Ces attaques inondent le serveur avec un trafic excessif, causant du lag, des pertes de connexion, voire une indisponibilité totale. Parfois, les attaquants tentent d’exploiter des vulnérabilités réseau ou de déstabiliser le serveur via des tentatives de connexion répétées ou des schémas de données inhabituels.

Même si la plupart de ces menaces échappent au contrôle de l’utilisateur moyen, ZAP-Hosting fournit des systèmes intégrés de protection et d’atténuation pour protéger ton serveur contre les attaques courantes et avancées. Si tu penses que ton serveur est ciblé et que ça cause des problèmes, contacte notre support pour de l’aide et des conseils.

</details>






## Mesures préventives 

Faire des sauvegardes régulières évite beaucoup de stress et de galères. Crée des sauvegardes régulières pour t’assurer qu’en cas de problème, tu as toujours une version antérieure fonctionnelle. On propose une [solution de sauvegarde](gameserver-backups.md) pour nos serveurs de jeux Broke Protocol, que tu peux utiliser pour faire des sauvegardes manuelles ou automatiques programmées.



<Button label="Accéder à ZAP-Storage" link="https://zap-hosting.com/en/customer/home/storage/" block/>






## Conclusion

Ces étapes devraient t’aider à résoudre ton problème. Si tu retrouves ton souci ici, la solution correspondante devrait déjà t’indiquer la bonne direction et t’aider à relancer ton serveur.

Sinon, n’hésite pas à contacter notre support pour toute question ou assistance, ils sont dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />