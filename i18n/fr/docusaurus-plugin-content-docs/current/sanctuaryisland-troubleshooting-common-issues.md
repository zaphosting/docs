---
id: sanctuaryisland-troubleshooting-common-issues
title: "Sanctuary Island : Problèmes courants"
description: "Découvrez comment dépanner et résoudre les problèmes courants des serveurs Sanctuary Island pour garder votre jeu fluide et profiter d’une expérience sans interruption → En savoir plus maintenant"
sidebar_label: Problèmes courants
services:
  - gameserver-sanctuaryisland
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## Introduction

Configurer et gérer votre propre serveur de jeux Sanctuary Island peut être super excitant et vraiment fun. C’est une super façon de créer un environnement de jeu personnalisé et une communauté, mais ça implique aussi de prendre la responsabilité quand ça coince. Les crashs, le lag, et les soucis de config sont des problèmes courants que tout propriétaire de serveur rencontre un jour ou l’autre.

Pour que vous passiez moins de temps à réparer et plus de temps à kiffer votre serveur, cette section met en avant les problèmes les plus fréquents rencontrés par les admins et vous donne des solutions pour les régler vite et bien.


<InlineVoucher />



## Problèmes et solutions

Les causes des problèmes serveur peuvent varier et ne sont souvent pas évidentes au premier abord. Apprenez à dépanner les soucis typiques étape par étape pour garder tout qui tourne nickel.

### Général
Les problèmes généraux regroupent toutes sortes de soucis inattendus qui ne rentrent pas dans une catégorie précise. Ils concernent souvent des réglages basiques, des fichiers manquants ou des erreurs de configuration simples. En général, ça se règle rapidement avec quelques vérifications et ajustements.

<details>
  <summary>Serveur non visible</summary>

Un serveur qui n’apparaît pas peut être dû à une initialisation incomplète. Ça peut venir d’une config foireuse ou de fichiers corrompus. Vous trouverez souvent plus d’infos dans la console serveur ou les fichiers logs. Aussi, vérifiez que vous n’avez pas de filtres incorrects dans la liste des serveurs qui empêcheraient l’affichage.

</details>


### Crashs

Rien ne gâche une session plus vite qu’un crash inattendu. Les crashs peuvent venir d’un logiciel serveur défectueux, d’extensions cassées ou incompatibles (plugins, mods, ressources, frameworks), d’une surcharge système ou d’erreurs de config.

<details>
  <summary>Garder votre serveur à jour</summary>

Faire tourner votre serveur de jeux sur la dernière version est crucial pour la stabilité, la sécurité et la compatibilité. Les mises à jour du jeu, les changements de framework ou les modifs d’outils tiers peuvent causer de gros soucis si votre serveur est obsolète.

Un serveur de jeux dépassé peut planter, avoir des comportements bizarres, ou même ne pas démarrer du tout.

![img](https://screensaver01.zap-hosting.com/index.php/s/JXLHyHeMJqErHLJ/preview)


</details>

<details>
  <summary>Extensions défectueuses/problématiques (Frameworks, Plugins, Mods, Ressources)</summary>

Les crashs sont souvent causés par des extensions défectueuses ou obsolètes. Que ce soit un framework, plugin, mod ou ressource, des problèmes peuvent survenir si l’extension n’est pas compatible avec la dernière version du jeu ou contient des bugs dans son code.

Ça peut provoquer des crashs, des freezes ou des erreurs, surtout quand plusieurs extensions problématiques interagissent. Si vous pensez qu’une extension est en cause, essayez de la désactiver temporairement et voyez si le serveur reste stable sans elle. C’est une méthode simple pour identifier l’extension qui pose problème.

Assurez-vous que toutes vos extensions sont à jour, maintenues activement et testées pour la compatibilité avec la version actuelle du jeu pour éviter crashs et downtime.

Pour isoler la cause d’un crash, il est souvent utile de désactiver temporairement du contenu additionnel. Commencez avec une config minimale et vérifiez si le problème persiste. Si le souci disparaît, réintroduisez les extensions, mods ou ressources une par une en testant à chaque étape. Cette approche progressive aide à identifier précisément l’élément qui pose problème. Cette méthode permet de cibler efficacement les coupables et de baser votre dépannage sur des preuves plutôt que des suppositions.

</details>

### Performance

Une bonne performance serveur est essentielle pour une expérience de jeu au top. Les problèmes comme le lag, les délais ou les crashs soudains arrivent souvent quand la config serveur n’est pas optimale, que le matos ne correspond pas aux besoins du jeu, ou que les extensions installées surchargent le système.

Les raisons typiques incluent une mauvaise config, des ressources manquantes ou des plugins/mods non optimisés. Vérifier et ajuster ces points règle la plupart des soucis de performance et garde votre jeu stable et réactif.

<details>
  <summary>Mauvaise configuration serveur</summary>

Des réglages serveur incorrects ou mal ajustés peuvent entraîner une consommation excessive de ressources et causer des problèmes de performance comme du lag ou des saccades. Assurez-vous que vos valeurs de config correspondent aux recommandations pour votre jeu et la taille de votre serveur. Passez-les en revue et ajustez-les si besoin pour que votre serveur tourne au max de son efficacité.

Vous pouvez modifier votre configuration via les paramètres disponibles dans la section **Settings** ou directement dans les fichiers de config sous **Configs** de votre interface web.

</details>

<details>
  <summary>Ne pas respecter les exigences du jeu</summary>

Pour que votre serveur de jeux tourne bien et de façon fiable, il faut choisir une config adaptée aux besoins de votre projet. Les exigences varient beaucoup selon le jeu, l’utilisation d’extensions comme mods, plugins ou ressources, et le nombre de joueurs attendu.

ZAP-Hosting propose une configuration minimale recommandée lors de la commande. Ces suggestions sont basées sur des cas d’usage typiques et visent à éviter les problèmes de performance courants comme le lag, les crashs ou les temps de chargement longs.

![img](https://screensaver01.zap-hosting.com/index.php/s/87ADJdwNAXxXxdk/preview)

Merci de suivre ces recommandations ou de monter en gamme si besoin pour garantir une stabilité optimale et la meilleure expérience possible pour vous et vos joueurs. C’est une recommandation minimale.

Selon l’ampleur de votre projet et la quantité de contenu additionnel, les ressources nécessaires peuvent déjà être plus élevées dès le départ ou augmenter avec le temps. Dans ce cas, upgrader votre package serveur de jeux est une solution simple pour assurer performance et stabilité sur la durée.

</details>

<details>
  <summary>Extensions non optimisées (Frameworks, Plugins, Mods, Ressources)</summary>

Toutes les extensions ne sont pas conçues avec la performance en tête. Que ce soit un framework, plugin, mod ou ressource, une mauvaise implémentation peut causer de gros soucis de performance sur votre serveur. Souvent, la fonctionnalité marche mais la façon dont c’est codé est inefficace, trop complexe ou génère une charge inutile sur les ressources serveur.

Ça peut entraîner une forte utilisation CPU, des fuites mémoire, du lag, voire des crashs, surtout quand plusieurs composants non optimisés interagissent. Veillez toujours à ce que vos extensions soient maintenues activement, bien documentées et testées pour la performance. En cas de doute, consultez les retours de la communauté ou surveillez la perf serveur pour repérer les éléments problématiques.

Pour isoler la cause des soucis de performance, il est souvent utile de désactiver temporairement du contenu additionnel. Commencez avec une config minimale et vérifiez si le problème persiste. Si le souci disparaît, réintroduisez les extensions, mods ou ressources une par une en testant à chaque étape. Cette approche progressive aide à identifier précisément l’élément qui pose problème, que ce soit un conflit, une fuite mémoire ou une consommation excessive de ressources.

Cette méthode permet de cibler efficacement les coupables et de baser votre dépannage sur des preuves plutôt que des suppositions.

</details>



### Réseau
Les problèmes réseau peuvent causer du lag, des délais ou des coupures de connexion. Ces soucis ont différentes causes mais se règlent souvent avec les bons réglages et mesures de sécurité.

<details>
  <summary>Pics de ping, lag et délais réseau</summary>

Les pics de ping, le lag et les délais réseau sont souvent dus à des ressources serveur limitées, comme un CPU, une RAM ou une bande passante insuffisants.

Ils peuvent aussi survenir quand le serveur est surchargé par un nombre élevé de joueurs ou des scripts/plugins gourmands. Des problèmes réseau comme un mauvais routage, une surcharge externe, ou un hébergement trop éloigné de la base de joueurs peuvent aussi augmenter la latence.

En plus, les processus en arrière-plan, une connexion internet instable, la perte de paquets, et un logiciel serveur obsolète ou mal configuré peuvent tous contribuer à des soucis de performance visibles en jeu.

Si vous avez du lag ou un ping élevé sur votre serveur, voici quelques étapes simples pour améliorer la perf. D’abord, assurez-vous que votre serveur respecte ou dépasse les specs recommandées pour votre jeu et projet. Choisir un emplacement serveur proche de vos joueurs aide aussi à réduire la latence.

Si vous pensez que des problèmes de routage ou des soucis réseau externes causent des délais, n’hésitez pas à contacter notre support. Ils vous aideront à analyser la situation et trouver la meilleure solution possible.


</details>

<details>
  <summary>Attaques DDoS et autres menaces réseau</summary>

Les serveurs de jeux peuvent parfois être la cible d’activités réseau malveillantes, notamment des attaques par déni de service distribué (DDoS). Ces attaques inondent le serveur avec un trafic excessif, provoquant du lag, des pertes de connexion, voire une indisponibilité totale. Parfois, les attaquants tentent d’exploiter des failles réseau ou de déstabiliser le serveur via des tentatives de connexion répétées ou des schémas de données inhabituels.

Même si la plupart de ces menaces échappent au contrôle de l’utilisateur lambda, ZAP-Hosting fournit des systèmes intégrés de protection et d’atténuation pour protéger votre serveur contre les attaques courantes et avancées. Si vous suspectez que votre serveur est ciblé et que ça cause des problèmes, contactez notre support pour de l’aide et des conseils.

</details>






## Mesures préventives

Faire des sauvegardes régulières évite beaucoup de stress et de galères. Créez des sauvegardes régulières pour être sûr qu’en cas de pépin vous ayez toujours une version antérieure fonctionnelle. On propose une [solution de sauvegarde](gameserver-backups.md) pour nos serveurs de jeux Sanctuary Island, que vous pouvez utiliser pour faire des backups manuels ou automatiques programmés.



<Button label="Accéder à ZAP-Storage" link="https://zap-hosting.com/en/customer/home/storage/" block/>






## Conclusion

Ces étapes devraient vous aider à résoudre le problème. Si vous trouvez votre souci listé ici, la solution correspondante devrait déjà vous orienter dans la bonne direction et vous aider à remettre tout en marche.

Sinon, n’hésitez pas à contacter notre support pour toute question ou assistance, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />