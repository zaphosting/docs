---
id: starrupture-firststeps-dashboard
title: "StarRupture : Aperçu du Tableau de Bord"
description: "Découvrez comment gérer et optimiser efficacement votre serveur StarRupture pour une performance et un contrôle optimaux → En savoir plus maintenant"
sidebar_label: Tableau de Bord
services:
  - gameserver-starrupture
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous êtes intéressé par un **serveur StarRupture** ou vous en possédez déjà un, mais vous manquez encore d’une vue d’ensemble complète de l’administration et de la localisation de toutes les options nécessaires ? Surtout au début, cela peut être un vrai défi. Pas de panique, nous vous proposons ci-dessous une introduction détaillée à l’administration de votre service, pour que vous ayez la meilleure vue d’ensemble possible.

Après avoir parcouru ce guide, vous serez capable de gérer votre serveur efficacement et de trouver rapidement et facilement toutes les options et fonctionnalités nécessaires. Ici, vous obtiendrez un aperçu structuré qui vous aidera pas à pas à vous familiariser avec l’administration du serveur et à approfondir vos connaissances de manière ciblée. Ainsi, vous pourrez vous assurer que votre **serveur StarRupture** est parfaitement adapté à vos besoins et que vous tirez le meilleur parti des options disponibles.


<InlineVoucher />

## Administration du Produit

Dans la section **Administration du Produit**, vous trouverez toutes les pages nécessaires à la gestion de votre serveur. Les options pour gérer votre serveur sont listées en détail ci-dessous. 



### Tableau de Bord

Le **Tableau de Bord** de votre serveur est le cœur de l’administration. Toutes les informations de base et essentielles concernant votre service y sont présentées de manière claire. Cela inclut, par exemple, des infos sur l’emplacement, le statut, l’IP : Port, la mémoire utilisée, le jeu en cours, le nom du serveur, la map et le nombre de slots disponibles. En plus, l’utilisation du CPU, de la mémoire et de la RAM est aussi affichée.

![img](https://screensaver01.zap-hosting.com/index.php/s/x6DtKCaCaAoj6bF/preview)

Dans le tableau de bord, vous avez aussi la possibilité de démarrer, arrêter ou redémarrer votre service, pour garder un contrôle total sur son fonctionnement. De plus, vous pouvez accéder à la console en direct pour obtenir des infos en temps réel sur l’état du serveur et agir directement si besoin.




### Statistiques 

Dans la section **Statistiques**, vous obtenez une vue complète des valeurs de charge de votre serveur. Vous y trouverez des infos sur différents aspects comme la charge des slots disponibles, du CPU et de la mémoire. Vous pouvez consulter ces données pour différentes périodes, par exemple pour les dernières **60 minutes, 24 heures, 3 jours, 7 jours** ou **30 jours.**

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Grâce à ces infos, vous avez un bon aperçu de l’utilisation de votre serveur. En plus, ces statistiques sont souvent utiles pour identifier d’éventuels problèmes de performance et en cerner les causes. Par exemple, vous pouvez retracer quand l’utilisation a augmenté et si cela est lié à certains événements ou changements. C’est particulièrement important en cas de problèmes soudains, car cela vous permet de prendre des mesures ciblées pour dépanner et analyser systématiquement les causes possibles.



### Gestionnaire DDoS

Consultez les attaques DDoS passées pour mieux évaluer les menaces potentielles et les schémas récurrents. Activez les notifications pour les attaques DDoS en cours sur votre serveur afin de réagir rapidement en cas d’incident.

Selon l’emplacement du serveur et la protection DDoS disponible, vous pouvez aussi surveiller les attaques actives en temps réel. Cela inclut des analyses détaillées du trafic, montrant à la fois le trafic légitime et la quantité de trafic bloquée par les systèmes de mitigation. Ce niveau de transparence vous aide à comprendre le fonctionnement de la protection et vous permet d’identifier rapidement les risques potentiels.

:::info Accès au gestionnaire DDoS manquant ?
L’utilisation du Gestionnaire DDoS nécessite soit une adresse IP dédiée, soit l’option supplémentaire "Vue d’ensemble du Gestionnaire DDoS". Si votre forfait actuel ne comprend pas ces composants, vous pouvez les ajouter à tout moment en améliorant votre service.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)





:::warning
L’utilisation du Gestionnaire DDoS n’est possible que si une adresse IP propre ou l’option "Vue d’ensemble du Gestionnaire DDoS" a été réservée en option supplémentaire. Si ces composants manquent dans votre forfait actuel, vous pouvez les ajouter à tout moment en effectuant une mise à niveau.
:::



### Fichiers journaux

Un problème technique survient et vous ne savez pas d’où il vient ? Une première stratégie possible est de vérifier les **fichiers journaux**. Ces fichiers contiennent beaucoup d’informations sur le serveur, comme les événements actuels, des indices ou des messages d’erreur.

Les messages d’erreur en particulier peuvent aider à identifier et mieux comprendre la cause d’un problème. Souvent, les difficultés peuvent être découvertes et résolues en regardant de manière ciblée les fichiers journaux.

:::warning
Les infos trouvées ne vous aident pas ou vous ne les comprenez pas ? Pas de souci ! Dans ce cas, notre support est disponible tous les jours. Il vous suffit de créer un **[Ticket](https://zap-hosting.com/en/customer/support/)** et de nous expliquer votre problème. Nous le regarderons au plus vite et vous aiderons à résoudre le souci ! :)
:::


### Journal des événements

Le **Journal des événements** vous offre une vue complète de toutes les activités liées à l’administration du serveur. Vous pouvez y suivre à tout moment quand un serveur a démarré, arrêté ou planté, ainsi que quand des mises à jour, sauvegardes ou nouvelles installations ont été effectuées.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)



### Interruptions de service

Votre serveur a été temporairement hors ligne et vous ne comprenez pas pourquoi ? Un coup d’œil dans le journal des événements et les fichiers journaux n’a rien donné non plus ? Il se peut que la cause du problème ne vienne pas directement de votre serveur, mais du système hôte sur lequel votre serveur est exploité.

Si notre système de monitoring détecte une interruption générale, nos techniciens sont automatiquement alertés et prennent en charge le problème au plus vite.

Dans cette section, vous trouverez un historique des interruptions du système hôte sur lequel votre service de serveur de jeux fonctionne. Vous pouvez trouver plus d’infos et la dernière version de notre statut de service sur notre nouvelle [page de statut](https://status.zap-hosting.com/).












## Paramètres

Dans la section **Paramètres**, vous trouverez toutes les pages nécessaires à la configuration de votre serveur. Les options disponibles pour configurer votre serveur sont listées en détail ci-dessous.



### Paramètres

Dans les paramètres, vous trouverez un aperçu des options de réglage les plus courantes pour votre serveur. Elles incluent aussi une courte explication. L’utilisation de la page des paramètres est particulièrement recommandée aux débutants en administration de serveur.

Si vous êtes plus à l’aise et souhaitez faire des modifications plus précises, nous vous conseillons d’utiliser plutôt l’Éditeur de Config. Vous trouverez plus d’infos à ce sujet dans la catégorie **Configs**.



### Configs

L’éditeur de fichiers de config vous permet de modifier directement les fichiers de configuration depuis le site web, à l’ancienne, sans la vue simplifiée. Cette option vous permet de personnaliser les réglages de votre serveur et de les configurer selon vos préférences personnelles.

En utilisant l’éditeur, vous avez un accès direct à toutes les options disponibles et pouvez les ajuster précisément. C’est particulièrement utile pour les utilisateurs avancés qui veulent un contrôle total sur les réglages de leur serveur et savent exactement quelles modifications ils veulent faire.

:::warning
Vous avez remarqué que certaines de vos modifications sont partiellement écrasées ? Sachez que certaines valeurs d’options sont prises depuis la page des paramètres. Si vous souhaitez modifier ces options directement dans la config, vous devez d’abord désactiver les options concernées sur la page des paramètres.
:::


### Jeux

Sous **Jeux**, vous avez toujours la possibilité de changer la variante de jeu de votre jeu existant ou d’installer un autre jeu en général. Les jeux avec le même prix par slot peuvent être sélectionnés directement sous **Jeux disponibles**. Pour tous les autres jeux, un ajustement du prix par slot est nécessaire au préalable. Plus d’infos à ce sujet dans le guide [Changement de jeu](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)



### Versions

Sous **Versions**, vous pouvez consulter et gérer la version actuelle de votre serveur de jeux. Vous pouvez y mettre à jour vers la dernière version à tout moment ou activer les mises à jour automatiques pour garantir que votre serveur soit toujours à jour.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

De plus, vous pouvez aussi activer la notification par email pour les mises à jour automatiques afin de rester informé des mises à jour et vous assurer d’être toujours à jour.



### Tâches planifiées

Créez des tâches planifiées qui s’exécutent automatiquement à des moments définis pour automatiser divers processus sur votre serveur. Vous pouvez définir si une tâche doit s’exécuter une seule fois ou se répéter selon les besoins. Les types de tâches supportés incluent démarrer, arrêter ou redémarrer des services, redémarrer le serveur s’il est en ligne, créer des sauvegardes ou exécuter des commandes personnalisées. 

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Planificateur de redémarrage

Vous voulez programmer des redémarrages du serveur à des heures spécifiques ? Le Planificateur de redémarrage vous permet de configurer des redémarrages automatiques planifiés de votre serveur de jeux. Avec cette fonctionnalité, vous pouvez programmer des redémarrages à des heures précises ou à intervalles réguliers.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### Paramètres DNS
Avec les paramètres DNS ZAP, vous pouvez créer des adresses faciles à retenir pour votre service. Vous pouvez soit utiliser un sous-domaine de l’un de nos domaines, soit créer une entrée DNS sur vos propres domaines et ainsi avoir une adresse mieux associée à vous en tant que personne.
![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Outils

Dans la section **Outils** de votre panneau de navigation, vous trouverez plusieurs sous-éléments qui vous aideront à gérer votre serveur. Cela inclut **Navigateur FTP**, **Bases de données** et **Sauvegardes**. Vous recevrez ci-dessous une introduction détaillée à ces différents domaines.



### Navigateur FTP

Avec le **Navigateur FTP**, vous obtenez toutes les infos nécessaires pour établir une connexion à l’accès FTP. L’accès FTP vous permet un accès direct aux fichiers de votre serveur de jeux. Nous recommandons d’utiliser un programme FTP externe comme **Filezilla** ou **WinSCP** pour une utilisation optimale. Si vous ne connaissez pas l’utilisation du FTP, jeter un œil au guide [Accès via FTP](gameserver-ftpaccess.md) peut vous aider.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla :** FileZilla est probablement le client FTP le plus simple et le plus connu. Il suffit de l’installer, de le lancer et de saisir vos identifiants dans la barre en haut, que vous trouverez un peu plus haut sur cette page. Après un clic rapide sur "Connexion", vous êtes directement connecté au serveur et pouvez gérer les fichiers.

**WinSCP :** WinSCP est en fait conçu pour SCP et SFTP (les versions sécurisées du protocole FTP), mais il gère aussi très bien le FTP classique. Le programme est un peu plus complet que FileZilla et convient plutôt aux utilisateurs avancés.



### Bases de données

En plus de nos produits de serveur de jeux, nous proposons aussi 10 bases de données incluses. Ces bases sont nécessaires, par exemple, lorsque des données doivent être stockées dans une base. Sous **Bases de données**, vous pouvez créer une base et consulter les identifiants d’accès. Vous avez aussi la possibilité d’activer l’option de sauvegarde et d’importer des sauvegardes de bases existantes.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)



### Sauvegardes

Sous **Sauvegardes**, vous pouvez créer des sauvegardes manuelles et automatiques pour votre serveur et sa base de données associée. Cela facilite la récupération de vos données en cas de problème ou de perte de données.

Dans les paramètres, vous pouvez définir si les sauvegardes doivent être créées automatiquement et si cela doit être fait quotidiennement ou hebdomadairement. De plus, vous pouvez décider si les sauvegardes les plus anciennes doivent être supprimées si nécessaire, par exemple lorsque l’espace de stockage disponible devient limité.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Nous fournissons par défaut 10 Go d’espace de stockage sur le serveur de stockage pour les sauvegardes de nos produits de serveur de jeux. Si vous avez besoin de plus d’espace, il est possible de l’augmenter moyennant un supplément. Ainsi, vous vous assurez d’avoir toujours assez d’espace pour vos sauvegardes et pouvez accéder aux sauvegardes plus anciennes si besoin.

## Liens complémentaires
Dans la section **Liens complémentaires**, vous trouverez d’autres liens pertinents pour votre produit. 

### Questions fréquentes
La section **Questions fréquentes** offre un aperçu des questions les plus courantes posées par nos clients. Vous y trouverez des réponses utiles et des infos détaillées sur divers sujets pour vous aider rapidement et efficacement.

### Documentation ZAP-Hosting
Nous proposons une documentation complète pour nos produits, qui sert de base de connaissances pour les questions et préoccupations les plus fréquentes. Vous y trouverez divers guides et aides sur différents sujets qui vous assisteront dans l’utilisation et la gestion de votre produit.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Actualités
La section **Actualités** vous offre un aperçu complet de toutes les annonces et nouveautés liées à votre service. Vous y trouverez des infos importantes sur divers aspects tels que :

- Les changements du service, par exemple via des mises à jour ou nouvelles fonctionnalités
- Les annonces concernant d’éventuelles maintenances ou problèmes techniques
- Les offres spéciales et promotions qui vous donnent des avantages ou réductions exclusifs
- D’autres infos pertinentes pouvant impacter l’utilisation de votre service

En consultant régulièrement les **Actualités**, vous restez informé et pouvez ajuster votre service en conséquence pour tirer le meilleur parti de votre serveur.

<InlineVoucher />