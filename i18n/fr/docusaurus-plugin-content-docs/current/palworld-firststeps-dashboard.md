---
id: palworld-firststeps-dashboard
title: "Palworld : Aperçu du Tableau de Bord"
description: "Découvrez comment gérer et optimiser efficacement votre serveur Palworld pour une performance et une expérience utilisateur optimales → En savoir plus maintenant"
sidebar_label: Tableau de Bord
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous êtes intéressé par un **serveur Palworld** ou en possédez déjà un, mais il vous manque encore une vue d’ensemble complète de l’administration et de la localisation de toutes les options nécessaires ? Surtout au début, cela peut être un vrai défi. Mais pas de panique, on vous propose ci-dessous une introduction détaillée à l’administration de votre service, pour que vous ayez la meilleure vue d’ensemble possible.

Après avoir parcouru ce guide, vous serez capable de gérer votre serveur efficacement et de trouver rapidement et facilement toutes les options et fonctionnalités nécessaires. Ici, vous aurez un aperçu structuré qui vous aidera étape par étape à vous familiariser avec l’administration du serveur et à approfondir vos connaissances de manière ciblée. Ainsi, vous pourrez vous assurer que votre **serveur Palworld** est parfaitement adapté à vos besoins et que vous tirez le meilleur parti des options disponibles.

:::tip
Nous proposons désormais une version de jeu **Palworld (Xbox)** disponible sur nos serveurs de jeux, qui vous permet de jouer sur les versions Xbox/Microsoft Store. Consultez notre [Changement de Jeu](gameserver-gameswitch.md) pour apprendre comment changer facilement votre jeu. N’oubliez pas de toujours faire une sauvegarde de vos parties.
:::

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5nkkN7JxgoigmSd/preview" title="Configurez votre serveur Palworld en seulement UNE MINUTE !" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière super engageante !"/>

<InlineVoucher />

## Administration du Produit

Dans la section **Administration du Produit**, vous trouverez toutes les pages nécessaires à la gestion de votre serveur. Les options pour gérer votre serveur sont listées en détail ci-dessous.

### Tableau de Bord

Le **Tableau de Bord** de votre serveur est le cœur de l’administration. Toutes les informations de base et essentielles sur votre service y sont présentées clairement. Cela inclut, par exemple, des infos sur l’emplacement, le statut, l’adresse IP : port, la mémoire utilisée, le jeu en cours, le nom du serveur, la map et le nombre de slots disponibles. En plus, l’utilisation du CPU, de la mémoire et de la RAM est aussi affichée.

![](https://github.com/zaphosting/docs/assets/42719082/d0090c65-ec60-4963-a483-69235ba24a6c)

Dans le tableau de bord, vous avez aussi la possibilité de démarrer, arrêter ou redémarrer votre service, pour garder un contrôle total sur son fonctionnement. En plus, vous pouvez accéder à la console live pour obtenir des infos en temps réel sur l’état du serveur et agir directement si besoin.

### Gestionnaire DDoS

Consultez les attaques DDoS passées pour mieux évaluer les menaces potentielles et les schémas. Activez les notifications pour les attaques DDoS en cours sur votre serveur afin de réagir rapidement en cas d’incident.

Selon l’emplacement du serveur et la protection DDoS disponible, vous pouvez aussi surveiller les attaques actives en temps réel. Cela inclut des analyses détaillées du trafic, montrant à la fois le trafic légitime et la quantité de trafic bloquée par les systèmes de mitigation. Ce niveau de transparence vous aide à comprendre comment la protection fonctionne et vous permet d’identifier rapidement les risques potentiels.

:::info Accès au gestionnaire DDoS manquant ?
L’utilisation du Gestionnaire DDoS nécessite soit une adresse IP dédiée, soit l’option supplémentaire "Vue d’ensemble du Gestionnaire DDoS". Si votre pack actuel ne comprend pas ces composants, vous pouvez les ajouter à tout moment en upgradeant votre service.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

### Fichiers de Logs

Un problème technique survient et vous ne savez pas d’où ça vient ? Une première stratégie possible est de vérifier les **fichiers de logs**. Ces fichiers contiennent plein d’infos sur le serveur, comme les événements en cours, des indices ou des messages d’erreur.

Les messages d’erreur en particulier peuvent aider à identifier et mieux comprendre la cause d’un problème. Souvent, les difficultés peuvent être décelées et résolues en jetant un œil ciblé aux fichiers de logs.

:::info
Les infos trouvées ne vous aident pas ou vous ne les comprenez pas ? Pas de souci ! Dans ce cas, notre support est dispo tous les jours. Créez simplement un **[ticket](https://zap-hosting.com/en/customer/support/)** et expliquez-nous votre problème. On le regarde au plus vite et on vous aide à le résoudre ! :)
:::

### Journal des Événements

Le **Journal des Événements** vous offre une vue complète de toutes les activités liées à l’administration du serveur. Vous pouvez y suivre à tout moment quand un serveur a démarré, arrêté ou crashé, ainsi que quand des mises à jour, sauvegardes ou nouvelles installations ont été effectuées.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Console Live

La **Console Live** vous propose une vue en temps réel de tous les événements actuels sur votre serveur. Vous y voyez les activités des joueurs ainsi que d’éventuels messages d’erreur et messages système. Cette vue vous permet d’avoir une compréhension complète de ce qui se passe sur votre serveur et de détecter les problèmes potentiels rapidement.

![](https://screensaver01.zap-hosting.com/index.php/s/dktDADkq3bzG3F6/preview)

En plus de surveiller les événements, vous pouvez aussi envoyer des commandes directement au serveur via la **Console Live**. C’est super pratique pour ajuster des réglages, effectuer certaines actions ou réagir vite à un problème.

### Interruptions de Service

Votre serveur a été temporairement hors ligne et vous ne comprenez pas pourquoi ? Un coup d’œil dans le journal des événements et les fichiers de logs n’a rien donné non plus ? Il se peut que la cause ne vienne pas directement de votre serveur, mais du système hôte sur lequel il tourne.

Si notre système de monitoring détecte une interruption générale, nos techniciens sont automatiquement alertés et s’occupent du problème au plus vite.

Dans cette section, vous trouverez un historique des interruptions du système hôte sur lequel votre service de serveur de jeux est hébergé. Pour plus d’infos et la dernière version de notre statut de service, rendez-vous sur notre nouvelle [page de statut](https://status.zap-hosting.com/).

## Paramètres

Dans la section **Paramètres**, vous trouverez toutes les pages nécessaires à la configuration de votre serveur. Les options disponibles pour configurer votre serveur sont listées en détail ci-dessous.

### Paramètres

Dans les paramètres, vous avez un aperçu des options de réglages les plus courantes pour votre serveur. Elles sont accompagnées d’une courte explication. L’utilisation de cette page est particulièrement recommandée aux débutants en administration de serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/Y3e6G2io6KaPBZe/preview)

Vous pouvez par exemple faire les ajustements suivants :

- Paramètres de base : nom du jeu, nom du serveur, description du serveur, mot de passe admin

Si vous êtes plus à l’aise et souhaitez faire des modifications plus précises, on vous conseille d’utiliser plutôt l’éditeur de config. Vous trouverez plus d’infos à ce sujet dans la catégorie **Configs**.

### Configs

L’éditeur de fichiers de config vous permet de modifier directement les fichiers de configuration depuis le site, à la manière classique, sans la vue simplifiée. Cette option vous permet de personnaliser les réglages de votre serveur selon vos préférences.

Avec l’éditeur, vous avez un accès direct à toutes les options disponibles et pouvez les ajuster précisément. C’est particulièrement utile pour les utilisateurs avancés qui veulent un contrôle total sur les réglages de leur serveur et savent exactement ce qu’ils veulent modifier.

:::info
Vous avez remarqué que certains de vos changements sont partiellement écrasés ? Sachez que certaines valeurs d’options sont prises depuis la page des paramètres. Si vous voulez modifier ces options directement dans la config, vous devez d’abord désactiver les options correspondantes dans la page des paramètres.
:::

### Jeux

Sous **Jeux**, vous pouvez toujours changer la variante de jeu de votre jeu existant ou installer un autre jeu en général. Les jeux avec le même prix de slot peuvent être sélectionnés directement sous **Jeux Disponibles**. Pour tous les autres jeux, un ajustement du prix des slots est nécessaire au préalable. Plus d’infos à ce sujet dans le guide [Changement de Jeu](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/QB82f3CSKmJgwqk/preview)

### Versions

Sous **Versions**, vous pouvez voir et gérer la version actuelle de votre serveur de jeux. Vous pouvez mettre à jour vers la dernière version à tout moment ou activer les mises à jour automatiques pour que votre serveur soit toujours à jour.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

En plus, vous pouvez activer la notification par email pour les mises à jour automatiques afin de rester informé et toujours à la page.

### Tâches Planifiées

Créez des tâches planifiées qui s’exécutent automatiquement à des moments définis pour automatiser différents processus sur votre serveur. Vous pouvez définir si une tâche doit s’exécuter une seule fois ou se répéter selon vos besoins. Les types de tâches supportées incluent démarrer, arrêter ou redémarrer des services, redémarrer le serveur s’il est en ligne, créer des sauvegardes ou exécuter des commandes personnalisées.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Planificateur de Redémarrage

Vous voulez programmer des redémarrages du serveur à des heures précises ? Le Planificateur de Redémarrage vous permet de configurer des redémarrages automatiques planifiés de votre serveur de jeux. Avec cette fonction, vous pouvez définir des redémarrages à des heures spécifiques ou à intervalles réguliers.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### Paramètres DNS

Avec les paramètres DNS ZAP, vous pouvez créer des adresses faciles à retenir pour votre service. Vous pouvez utiliser un sous-domaine de l’un de nos domaines ou créer une entrée DNS sur vos propres domaines pour avoir une adresse mieux associée à vous en tant que personne.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Outils

Dans la section **Outils** de votre panneau de navigation, vous trouverez plusieurs sous-items qui vous aideront à gérer votre serveur. Cela inclut **Navigateur FTP**, **Bases de données** et **Sauvegardes**. Vous aurez ci-dessous une introduction détaillée à ces différents domaines.

### Navigateur FTP

Avec le **Navigateur FTP**, vous obtenez toutes les infos nécessaires pour établir une connexion à l’accès FTP. L’accès FTP vous permet un accès direct aux fichiers de votre serveur de jeux. On recommande d’utiliser un programme FTP externe comme **Filezilla** ou **WinSCP** pour une utilisation optimale. Si vous ne connaissez pas encore FTP, jeter un œil au guide [Accès via FTP](gameserver-ftpaccess.md) peut vous aider.

![](https://screensaver01.zap-hosting.com/index.php/s/fZSYpSi4KwPos5P/preview)

**FileZilla :** FileZilla est le client FTP le plus simple et le plus connu. Installez-le, lancez-le et entrez vos données d’accès dans la barre du haut, que vous trouverez un peu plus haut sur cette page. Après un clic rapide sur "Connecter", vous êtes directement connecté au serveur et pouvez gérer les fichiers.

**WinSCP :** WinSCP est en fait prévu pour SCP et SFTP (les versions chiffrées du protocole FTP) mais peut aussi gérer le FTP. Le programme est plus complet que FileZilla et convient aux utilisateurs avancés.

### Bases de données

En plus de nos produits serveurs de jeux, nous proposons aussi 10 bases de données incluses. Ces bases sont nécessaires, par exemple, quand des données doivent être stockées dans une base. Sous **Bases de données**, vous pouvez créer une base et voir les identifiants d’accès. Vous avez aussi la possibilité d’activer l’option de sauvegarde et d’importer des sauvegardes de bases existantes.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Sauvegardes

Sous **Sauvegardes**, vous pouvez créer des sauvegardes manuelles et automatiques pour votre serveur et sa base de données associée. Cela facilite la récupération de vos données en cas de problème ou de perte.

Dans les paramètres, vous pouvez définir si les sauvegardes doivent être créées automatiquement et si cela doit être fait quotidiennement ou hebdomadairement. Vous pouvez aussi décider si les sauvegardes les plus anciennes doivent être supprimées si nécessaire, par exemple quand l’espace de stockage disponible devient limité.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Nous fournissons par défaut 10 Go d’espace de stockage sur le serveur de stockage pour les sauvegardes de nos produits serveurs de jeux. Si vous avez besoin de plus d’espace, vous pouvez l’upgrader contre supplément. Ainsi, vous vous assurez d’avoir toujours assez de place pour vos sauvegardes et d’accéder aux plus anciennes si besoin.

## Liens Utiles

Dans la section **Liens Utiles**, vous trouverez d’autres liens pertinents pour votre produit.

### Questions Fréquentes

La section **Questions Fréquentes** offre un aperçu des questions les plus posées par nos clients. Vous y trouverez des réponses utiles et des infos détaillées sur divers sujets pour vous aider rapidement et efficacement.

### Documentation ZAP-Hosting

Nous proposons une documentation complète pour nos produits, qui sert de base de connaissances pour les questions et préoccupations les plus fréquentes. Vous y trouverez différents guides et aides sur plusieurs sujets pour vous accompagner dans l’utilisation et la gestion de votre produit.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Actualités

La section **Actualités** vous donne un aperçu complet de toutes les annonces et nouveautés liées à votre service. Vous y trouverez des infos importantes sur différents aspects comme :

- Les changements du service, par exemple via des mises à jour ou nouvelles fonctionnalités
- Les annonces concernant des maintenances ou problèmes techniques
- Les offres spéciales et promotions qui vous donnent des avantages ou réductions exclusifs
- D’autres infos pertinentes pour l’utilisation de votre service

En consultant régulièrement les **Actualités**, vous restez informé et pouvez ajuster votre service pour tirer le meilleur parti de votre serveur.

<InlineVoucher />