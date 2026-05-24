---
id: gameserver-subnautica-2-common-issues
title: "Serveur de jeux - Subnautica 2 - Problèmes courants"
description: "Découvrez les problèmes courants des serveurs de jeux Subnautica 2, les problèmes de connexion et les solutions de performance pour garder votre jeu en ligne et stable -> En savoir plus maintenant"
sidebar_label: Serveur de jeux - Subnautica 2 - Problèmes courants
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les problèmes de serveur Subnautica 2 peuvent aller des échecs de démarrage et plantages aux lags, problèmes de connexion et mauvaises performances en jeu. Dans ce guide, vous apprendrez à identifier les problèmes courants sur votre serveur de jeux Subnautica 2 et à appliquer des solutions pratiques pour remettre votre jeu en ligne et fluide.

:::info Changements en Accès Anticipé
Si le logiciel serveur Subnautica 2 évolue encore activement, certains comportements, fichiers de configuration ou fonctionnalités disponibles peuvent différer selon les versions. Si vous constatez des différences sur votre serveur, comparez-les toujours avec la version installée dans votre interface web ZAP-Hosting.
:::

<InlineVoucher />

## Problèmes et solutions

Les problèmes serveur ne sont pas toujours causés par une seule erreur. Souvent, le souci vient de fichiers obsolètes, de réglages incorrects, de ressources insuffisantes ou de conditions réseau temporaires. Les sections ci-dessous vous aident à dépanner les problèmes les plus fréquents étape par étape.

### Problèmes généraux

Les problèmes généraux affectent souvent la disponibilité basique du serveur, sa visibilité ou son comportement au démarrage. Ce sont généralement les premières vérifications à faire avant d’explorer des causes plus avancées.

<details>
  <summary>Serveur non visible dans le jeu</summary>

Si votre serveur Subnautica 2 n’est pas visible, il se peut qu’il ne soit pas démarré correctement ou que son processus d’initialisation ne soit pas terminé. Cela peut venir de valeurs de configuration invalides, de fichiers d’installation incomplets ou d’erreurs au démarrage.

Commencez par vérifier :

- Que le serveur est affiché comme en fonctionnement dans votre interface web ZAP-Hosting
- La console serveur pour détecter des erreurs au démarrage
- Les fichiers logs pour des fichiers manquants ou des étapes d’initialisation échouées
- Que vous utilisez les bons filtres de recherche dans le navigateur de serveurs en jeu
- Attendez quelques minutes après le démarrage, certains serveurs ont besoin de temps avant d’apparaître publiquement

Si le serveur n’apparaît toujours pas, redémarrez-le une fois et surveillez la console dès le début du processus de démarrage.

</details>

<details>
  <summary>Le serveur ne démarre pas</summary>

Si le serveur ne démarre pas du tout, la cause est souvent liée à des fichiers corrompus, une mise à jour incomplète ou une configuration invalide.

Vous devez vérifier ces points :

| Vérification | Pourquoi c’est important |
| --- | --- |
| Sortie console serveur | Affiche l’erreur exacte au démarrage si elle existe |
| Changements récents de configuration | Une seule valeur invalide peut empêcher le démarrage |
| Uploads ou modifications récentes de fichiers | Des fichiers modifiés manuellement peuvent être incomplets ou incompatibles |
| Version actuelle du jeu | Des fichiers serveur non compatibles peuvent causer un échec immédiat |

Si vous avez modifié récemment des fichiers de configuration, revenez aux derniers changements et essayez à nouveau. Si le problème est apparu après une mise à jour ou une modification manuelle, restaurer une sauvegarde peut vous faire gagner du temps.

:::tip Utilisez les sauvegardes avant les gros changements
Avant d’éditer des fichiers importants ou de mettre à jour votre serveur, créez une sauvegarde pour pouvoir revenir rapidement en arrière si un nouveau problème survient.
:::

</details>

<details>
  <summary>Le mot de passe ou les paramètres d’accès ne fonctionnent pas comme prévu</summary>

Si les joueurs ne peuvent pas rejoindre même si le serveur est en ligne, vérifiez attentivement vos réglages d’accès. Un mauvais mot de passe, des données client obsolètes ou un décalage entre les paramètres publics et privés peuvent bloquer l’accès.

Vous devez vérifier :

- Que le mot de passe saisi par les joueurs correspond exactement au mot de passe actuel du serveur
- Que le serveur a été redémarré après modification des paramètres d’accès
- Qu’aucune ancienne donnée de connexion côté client n’est réutilisée
- Que les réglages privés ou de type whitelist sont configurés comme prévu, si disponibles pour votre version serveur

Si vous doutez que la configuration soit en cause, simplifiez temporairement la configuration et testez avec un minimum de restrictions.

</details>

### Problèmes de plantage

Les plantages inattendus interrompent le jeu et peuvent entraîner une perte de données en cas de répétition. Les causes les plus fréquentes sont des fichiers serveur obsolètes, des mods incompatibles ou des ressources surchargées.

<details>
  <summary>Maintenir votre serveur à jour</summary>

Utiliser la dernière version serveur Subnautica 2 disponible est important pour la stabilité, la compatibilité et la sécurité. Les versions plus anciennes peuvent contenir des bugs corrigés ou ne plus fonctionner correctement avec le client de jeu actuel.

Un serveur obsolète peut causer :

- des échecs de démarrage
- des plantages aléatoires
- des erreurs de version incompatible
- un comportement instable en jeu

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Si votre serveur a commencé à planter après une mise à jour du jeu, vérifiez d’abord si une version serveur plus récente est disponible dans votre interface web. Après mise à jour, redémarrez le serveur et testez à nouveau.

</details>

<details>
  <summary>Mods ou contenus additionnels défectueux ou incompatibles</summary>

Si Subnautica 2 supporte des mods ou autres contenus additionnels côté serveur dans votre version, ceux-ci peuvent souvent être la source de plantages. Un contenu incompatible ou obsolète peut se charger partiellement mais provoquer des erreurs plus tard en jeu.

Signes typiques :

- le serveur plante après le démarrage
- le serveur plante quand un joueur rejoint
- le serveur se fige lors du chargement du monde
- des erreurs apparaissent après ajout de nouveau contenu

Pour isoler la cause, procédez ainsi :

1. Arrêtez le serveur
2. Supprimez ou désactivez le contenu ajouté récemment
3. Démarrez le serveur avec la configuration minimale possible
4. Testez la stabilité
5. Réactivez le contenu un par un

Cette méthode vous aide à identifier précisément quel fichier ou package pose problème.

:::caution Compatibilité des versions
N’utilisez que des mods, frameworks ou extensions confirmés compatibles avec votre version serveur Subnautica 2 actuelle. Même un seul composant obsolète peut causer des plantages répétés.
:::

</details>

<details>
  <summary>Données du monde ou sauvegarde corrompues</summary>

Si le serveur plante lors du chargement du monde ou peu après la connexion des joueurs, les données de sauvegarde peuvent être endommagées. Cela peut arriver après des arrêts forcés, des écritures interrompues ou des plantages répétés.

Indicateurs possibles :

- le serveur plante toujours au même stade de chargement
- un nouveau monde démarre correctement, mais pas l’existant
- la console affiche des erreurs de sauvegarde ou de chargement du monde

Si vous suspectez une corruption, testez avec une sauvegarde ou un monde neuf si disponible. Si un monde neuf démarre sans problème, le souci vient probablement des données de sauvegarde existantes.

:::danger Risque de perte de données
Ne supprimez pas immédiatement vos fichiers monde existants. Faites d’abord une copie de sauvegarde pour pouvoir tenter une récupération plus tard si besoin.
:::

</details>

### Problèmes de performance

Les problèmes de performance se manifestent souvent par du lag, des actions retardées, un chargement lent du monde ou un gameplay instable. Ces soucis sont souvent liés à la configuration, à des ressources matérielles insuffisantes ou à un contenu additionnel lourd.

<details>
  <summary>Mauvaise configuration serveur</summary>

Des valeurs de configuration incorrectes peuvent augmenter la charge CPU, mémoire ou stockage et réduire la performance globale du serveur. Si votre serveur Subnautica 2 semble lent ou instable, vérifiez vos réglages avec attention.

En particulier, vérifiez si :

- les limites liées aux joueurs sont réalistes pour votre offre
- les réglages liés au monde ne sont pas plus exigeants que nécessaire
- des paramètres expérimentaux ou non par défaut ont été modifiés récemment
- le serveur a été redémarré après les changements

Vous pouvez généralement gérer votre configuration dans la section **Settings** ou via les fichiers disponibles dans **Configs** de votre interface web ZAP-Hosting.

</details>

<details>
  <summary>Le package serveur ne correspond pas aux besoins du projet</summary>

Un serveur trop petit pour votre projet peut causer des saccades, des temps de chargement longs et de l’instabilité. Cela devient plus visible avec plus de joueurs, du contenu additionnel ou un monde large et actif.

ZAP-Hosting propose des configurations recommandées lors de la commande pour vous aider à choisir les ressources adaptées à votre jeu.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Utilisez ce tableau comme référence générale pour le dépannage :

| Symptôme | Cause possible | Action recommandée |
| --- | --- | --- |
| Pics de lag fréquents | Ressources CPU trop limitées | Réduire la charge ou upgrader votre offre |
| Temps de chargement lents | Goulot d’étranglement stockage ou mémoire | Vérifier l’usage et envisager plus de ressources |
| Plantages sous charge joueur | Capacité globale insuffisante | Réduire la charge ou scaler le serveur |
| Bonne performance à vide, mauvaise en charge | Offre trop petite pour usage actif | Monter en gamme selon activité prévue |

:::note Recommandations minimales
Les tailles de package recommandées sont un point de départ. Si votre serveur Subnautica 2 utilise un monde plus grand, plus de joueurs ou du contenu additionnel, vous aurez peut-être besoin de plus de ressources dès le départ.
:::

</details>

<details>
  <summary>Usage élevé des ressources par les mods ou contenu additionnel</summary>

Même si le contenu additionnel ne fait pas planter le serveur, il peut causer de sérieux problèmes de performance. Un contenu mal optimisé peut augmenter l’utilisation CPU, consommer trop de mémoire ou déclencher des traitements en arrière-plan répétés.

Une bonne méthode de dépannage est de comparer la performance avec et sans le contenu ajouté. Si le serveur fonctionne normalement en configuration minimale, réintroduisez le contenu progressivement jusqu’à ce que le problème réapparaisse.

Cette approche est particulièrement utile quand :

- le lag a commencé après l’installation de nouveau contenu
- le serveur devient instable avec le temps
- la performance chute seulement dans certaines zones ou situations
- l’usage augmente sans changement de configuration évident

</details>

<details>
  <summary>Monde large ou sauvegarde longue durée causant un ralentissement</summary>

À mesure que le monde serveur grandit et que l’activité des joueurs s’accumule, la performance peut décliner. C’est courant sur les serveurs qui tournent longtemps avec beaucoup de données sauvegardées.

Si vous remarquez que la performance était bonne au début mais s’est dégradée, considérez :

- tester si une sauvegarde plus récente fonctionne mieux
- vérifier si trop de joueurs sont actifs simultanément
- supprimer le contenu additionnel inutile
- vérifier si le problème se produit sur un seul monde spécifique

Si un monde test neuf fonctionne nettement mieux, le ralentissement est probablement lié à la taille du monde ou à la complexité de la sauvegarde.

</details>

### Problèmes réseau

Les problèmes liés au réseau affectent la connexion et l’interaction des joueurs avec votre serveur. Ils peuvent se manifester par un ping élevé, du rubberbanding, des déconnexions ou une inaccessibilité totale.

<details>
  <summary>Pics de ping, lag et délai réseau</summary>

Les pics de ping et délais réseau sont souvent causés par un mélange de charge serveur et conditions de routage. Même si le jeu est en ligne, un matériel surchargé ou une distance géographique longue peuvent dégrader l’expérience.

Causes courantes :

- l’emplacement du serveur est loin de la base de joueurs
- le serveur est sous forte charge CPU ou mémoire
- beaucoup de joueurs connectés simultanément
- tâches en arrière-plan ou autres processus consommant des ressources
- problèmes temporaires de routage ou perte de paquets entre joueurs et serveur

Pour améliorer la qualité réseau, vérifiez :

| Vérification | Résultat |
| --- | --- |
| Choisir un emplacement proche des joueurs | Latence moyenne plus basse |
| Réduire la charge serveur inutile | Moins de pics de lag en jeu |
| Garder le serveur à jour | Meilleure stabilité et compatibilité |
| Tester à différents moments | Aide à identifier les problèmes de routage temporaires |

Si le problème touche un seul joueur, la cause est probablement sa connexion. Si tous sont affectés, c’est plus souvent côté serveur ou sur la route réseau.

</details>

<details>
  <summary>Déconnexions aléatoires des joueurs</summary>

Les déconnexions aléatoires peuvent venir d’un routage instable, de ressources serveur surchargées ou d’une instabilité logicielle temporaire. Si les joueurs sont expulsés sans raison claire en jeu, comparez le timing des déconnexions avec les messages console et pics de performance.

Vous devez vérifier :

- si les déconnexions surviennent en période de forte charge
- si le serveur redémarre ou se fige brièvement
- si tous les joueurs se déconnectent en même temps ou seulement certains
- si le problème est apparu après une mise à jour ou un changement de configuration récent

Si tous les joueurs se déconnectent simultanément, le problème vient généralement du serveur ou du réseau. Si un seul joueur se déconnecte, la cause est souvent locale à ce joueur.

</details>

<details>
  <summary>Attaques DDoS et autres menaces réseau</summary>

Les serveurs de jeux peuvent parfois être ciblés par du trafic malveillant, notamment des attaques par déni de service distribué (DDoS). Ces attaques peuvent provoquer du lag, des échecs de connexion ou des interruptions temporaires.

ZAP-Hosting fournit une protection DDoS pour les services hébergés, ce qui aide à réduire l’impact des attaques courantes et avancées. Cependant, si vous pensez que votre serveur Subnautica 2 est ciblé, contactez le support en fournissant un maximum de détails, comme :

- quand le problème a commencé
- si tous les joueurs sont affectés
- si le serveur devient complètement inaccessible
- si le problème se répète à des moments précis

:::info Protection intégrée
L’atténuation DDoS est gérée côté infrastructure. Si vous suspectez un trafic malveillant, vous n’avez généralement pas besoin de modifier les réglages serveur d’abord. Rassemblez les symptômes et contactez le support.
:::

</details>

### Problèmes serveur liés au gameplay

Certains problèmes ne sont pas des plantages ou des pannes réseau directes, mais affectent quand même le bon fonctionnement du jeu pour les joueurs.

<details>
  <summary>Incompatibilité de version entre client et serveur</summary>

Si les joueurs ne peuvent pas rejoindre après une mise à jour, le serveur et le client de jeu peuvent tourner sur des versions différentes. C’est fréquent juste après des patchs.

Pour résoudre cela :

1. Confirmez que le serveur a été mis à jour
2. Redémarrez le serveur après la mise à jour
3. Assurez-vous que les joueurs ont mis à jour leur client de jeu
4. Testez la connexion à nouveau

Si seuls certains joueurs peuvent rejoindre, comparez d’abord leur version de jeu avec celle du serveur.

</details>

<details>
  <summary>Les changements ne s’appliquent pas après modification des réglages</summary>

Si vous avez modifié des valeurs de configuration mais que rien ne change en jeu, le serveur peut utiliser des données en cache ou non modifiées, ou le fichier édité n’est pas celui actif.

Vérifiez :

- que le bon fichier a été modifié
- que les valeurs ont bien été sauvegardées
- que le serveur a été complètement redémarré ensuite
- que le réglage modifié est supporté par votre version installée

Si le comportement exact de la configuration est flou pour votre version Subnautica 2, évitez de deviner et testez les changements un par un pour bien identifier ce qui s’applique.

</details>

## Mesures préventives

Prévenir les problèmes est souvent plus simple que les corriger une fois qu’ils affectent vos joueurs. Quelques étapes régulières de maintenance peuvent grandement améliorer la stabilité.

### Checklist de maintenance recommandée

Utilisez cette checklist pour réduire les risques de problèmes futurs :

| Tâche | Pourquoi la faire |
| --- | --- |
| Créer des sauvegardes régulières | Protège votre monde et configuration contre la perte de données |
| Mettre à jour le serveur avec soin | Réduit bugs et problèmes d’incompatibilité de version |
| Tester les changements un par un | Facilite le dépannage en cas de problème |
| Surveiller la performance après changements | Permet de détecter tôt une hausse d’usage CPU ou mémoire |
| Garder uniquement le contenu nécessaire installé | Réduit les risques de compatibilité et de performance |

### Utiliser les sauvegardes régulièrement

Les sauvegardes régulières peuvent vous faire gagner beaucoup de temps et éviter une perte de données définitive. Si un changement de configuration, une mise à jour ou un problème de monde cause des soucis, vous pouvez restaurer un état fonctionnel connu au lieu de tout reconstruire manuellement.

Vous pouvez utiliser la [solution de sauvegarde](gameserver-backups.md) disponible pour créer des sauvegardes manuelles ou planifiées de votre serveur de jeux.

:::tip Sauvegarde avant changements risqués
Faites une sauvegarde avant de mettre à jour le serveur, modifier des fichiers importants ou ajouter des mods et contenus. Cela vous donne un point de retour sûr si de nouveaux problèmes apparaissent.
:::

<InlineVoucher />

## Conclusion

Félicitations, vous avez réussi à dépanner les problèmes courants sur votre serveur de jeux Subnautica 2. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂