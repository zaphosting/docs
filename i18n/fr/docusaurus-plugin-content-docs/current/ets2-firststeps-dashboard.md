---
id: ets2-firststeps-dashboard
title: "Euro Truck Simulator 2 : Aperçu du Tableau de Bord"
description: "Découvrez comment gérer et optimiser efficacement votre serveur Euro Truck Simulator 2 pour une performance et un contrôle au top → En savoir plus maintenant"
sidebar_label: Tableau de Bord
services:
  - gameserver-ets2
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu es intéressé par un **serveur de jeux Euro Truck Simulator 2** ou tu en possèdes déjà un, mais tu manques encore d’une vue d’ensemble complète de l’administration et de la localisation de toutes les options nécessaires ? Surtout au début, ça peut être un vrai défi. Mais t’inquiète, on te propose ci-dessous une introduction détaillée à l’administration de ton service, pour que tu aies la meilleure vue d’ensemble possible.

Après avoir parcouru ce guide, tu pourras gérer ton serveur facilement et trouver toutes les options et fonctionnalités rapidement et sans prise de tête. Ici, tu auras un aperçu structuré qui t’aidera étape par étape à te familiariser avec l’administration du serveur et à approfondir tes connaissances de manière ciblée. Comme ça, tu pourras t’assurer que ton **serveur de jeux Euro Truck Simulator 2** est parfaitement adapté à tes besoins et que tu tires le max des options disponibles.

<YouTube videoId="7QyU6wXQyeo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/fEC5A2nDNfZFMNk/preview" title="Configure ton serveur ETS2 en juste une MINUTE !" description="Tu préfères comprendre en voyant les choses en action ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de la manière la plus cool possible !" />

<InlineVoucher />

## Administration du Produit

Dans la section **Administration du Produit**, tu trouveras toutes les pages nécessaires pour gérer ton serveur. Les options pour gérer ton serveur sont listées en détail ci-dessous.

### Tableau de Bord

Le **Tableau de Bord** de ton serveur est le cœur de l’administration. Toutes les infos de base et essentielles sur ton service y sont présentées clairement. Ça inclut par exemple des infos sur l’emplacement du serveur, le statut, l’adresse IP : port, la mémoire utilisée, le jeu en cours, le nom du serveur, la carte et le nombre de slots disponibles. En plus, l’utilisation du CPU, de la mémoire et de la RAM est aussi affichée.

![](https://screensaver01.zap-hosting.com/index.php/s/caGsmf5gn5eS4H4/preview)

Dans le tableau de bord, tu peux aussi démarrer, arrêter ou redémarrer ton service, pour garder un contrôle total sur son fonctionnement. En plus, tu as accès à la console live pour obtenir des infos en temps réel sur l’état du serveur et agir directement si besoin.

### Gestionnaire DDoS

Consulte les attaques DDoS passées pour mieux évaluer les menaces potentielles et les schémas. Active les notifications pour les attaques DDoS en cours sur ton serveur afin de réagir vite en cas d’incident.

Selon l’emplacement du serveur et la protection DDoS disponible, tu peux aussi surveiller les attaques actives en temps réel. Ça inclut des infos détaillées sur le trafic, montrant à la fois le trafic légitime et la quantité de trafic bloquée par les systèmes de mitigation. Ce niveau de transparence t’aide à comprendre comment la protection fonctionne et te permet d’identifier les risques potentiels rapidement.

:::info Accès au gestionnaire DDoS manquant ?
L’utilisation du Gestionnaire DDoS nécessite soit une adresse IP dédiée, soit l’option supplémentaire "Aperçu Gestionnaire DDoS". Si ton pack actuel ne comprend pas ces composants, tu peux les ajouter à tout moment en upgradeant ton service.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::warning
L’utilisation du Gestionnaire DDoS n’est possible que si une adresse IP propre ou l’option "Aperçu Gestionnaire DDoS" a été réservée en option supplémentaire. Si ces composants manquent dans ton pack actuel, tu peux les ajouter à tout moment via un upgrade.
:::

### Fichiers Logs

Un problème technique survient et tu ne sais pas d’où ça vient ? Une première stratégie possible est de vérifier les **fichiers logs**. Ces fichiers contiennent plein d’infos sur le serveur, comme les événements en cours, des indices ou des messages d’erreur.

Les messages d’erreur en particulier peuvent aider à identifier et mieux comprendre la cause d’un problème. Souvent, les difficultés peuvent être décelées et résolues en jetant un œil ciblé aux fichiers logs.

:::warning
Les infos trouvées ne t’aident pas ou tu ne comprends rien ? Pas de panique ! Dans ce cas, notre support est dispo tous les jours. Crée simplement un **[ticket](https://zap-hosting.com/en/customer/support/)** et explique-nous ton problème. On le regardera au plus vite et t’aidera à résoudre ça ! :)
:::

### Journal des Événements

Le **Journal des Événements** te donne une vue complète de toutes les activités liées à l’administration du serveur. Tu peux suivre à tout moment quand un serveur a démarré, arrêté ou crashé, ainsi que quand des mises à jour, sauvegardes ou nouvelles installations ont été faites.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Console Live

La **Console Live** t’offre une vue en temps réel de tous les événements actuels sur ton serveur. Tu peux y voir les activités des joueurs ainsi que d’éventuels messages d’erreur et messages système. Cette vue te permet d’avoir une idée claire de ce qui se passe sur ton serveur et de détecter les problèmes tôt.

![](https://screensaver01.zap-hosting.com/index.php/s/dktDADkq3bzG3F6/preview)

En plus de surveiller les événements, tu peux aussi envoyer des commandes directement au serveur via la **Console Live**. C’est super pratique pour ajuster les réglages, effectuer certaines actions ou réagir rapidement aux problèmes.

### Interruptions de Service

Ton serveur a été hors ligne temporairement et tu ne sais pas pourquoi ? Le journal des événements et les fichiers logs n’ont rien donné non plus ? Il se peut que la cause ne vienne pas directement de ton serveur, mais du système hôte sur lequel il tourne.

Si notre système de monitoring détecte une interruption générale, nos techniciens sont automatiquement alertés et s’occupent du problème au plus vite.

Dans cette section, tu trouveras un historique des interruptions du système hôte sur lequel ton serveur de jeux est hébergé. Plus d’infos et la dernière version de notre statut de service sont dispo sur notre nouvelle [page de statut](https://status.zap-hosting.com/).

## Paramètres

Dans la section **Paramètres**, tu trouveras toutes les pages nécessaires pour configurer ton serveur. Les options disponibles pour configurer ton serveur sont listées en détail ci-dessous.

### Paramètres

Dans les paramètres, tu as un aperçu des options de réglage les plus courantes pour ton serveur. Elles sont accompagnées d’une courte explication. La page des paramètres est particulièrement recommandée aux débutants en administration de serveur.

Si tu es plus à l’aise et que tu veux faire des modifications plus précises, on te conseille d’utiliser plutôt l’Éditeur de Config. Tu trouveras plus d’infos à ce sujet dans la catégorie **Configs**.

### Configs

L’éditeur de fichiers de config te permet d’éditer directement les fichiers de configuration depuis le site, à l’ancienne, sans la vue simplifiée. Cette option te permet de personnaliser les réglages de ton serveur selon tes préférences.

Avec l’éditeur, tu as un accès direct à toutes les options disponibles et tu peux les ajuster précisément. C’est parfait pour les utilisateurs avancés qui veulent un contrôle total sur les réglages de leur serveur et savent exactement ce qu’ils veulent modifier.

:::warning
Tu as remarqué que certaines de tes modifications sont partiellement écrasées ? Sache que certaines valeurs d’options sont prises depuis la page des paramètres. Si tu veux modifier ces options directement dans la config, il faut d’abord désactiver les options correspondantes dans la page des paramètres.
:::

### Jeux

Sous **Jeux**, tu peux toujours changer la variante de jeu de ton jeu existant ou installer un autre jeu en général. Les jeux avec le même prix par slot peuvent être sélectionnés directement sous **Jeux Disponibles**. Pour tous les autres jeux, un ajustement du prix par slot est nécessaire avant. Plus d’infos à ce sujet dans le guide [Changement de Jeu](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versions

Sous **Versions**, tu peux voir et gérer la version actuelle de ton serveur de jeux. Tu peux mettre à jour vers la dernière version à tout moment ou activer les mises à jour automatiques pour que ton serveur soit toujours à jour.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

En plus, tu peux activer la notification par email pour les mises à jour automatiques, histoire de rester informé et toujours à la page.

### Tâches Planifiées

Crée des tâches planifiées qui s’exécutent automatiquement à des horaires définis pour automatiser différents processus sur ton serveur. Tu peux choisir si une tâche doit s’exécuter une seule fois ou se répéter. Les types de tâches supportés incluent démarrer, arrêter ou redémarrer des services, redémarrer le serveur s’il est en ligne, créer des sauvegardes ou exécuter des commandes personnalisées.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Planificateur de Redémarrage

Tu veux programmer des redémarrages du serveur à des horaires précis ? Le Planificateur de Redémarrage te permet de configurer des redémarrages automatiques planifiés de ton serveur de jeux. Avec cette fonction, tu peux définir des redémarrages à des heures spécifiques ou à intervalles réguliers.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### Paramètres DNS

Avec les paramètres DNS ZAP, tu peux créer des adresses faciles à retenir pour ton service. Tu peux utiliser un sous-domaine de nos domaines ou créer une entrée DNS sur tes propres domaines pour avoir une adresse qui te correspond mieux.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Outils

Dans la section **Outils** de ton panneau de navigation, tu trouveras plusieurs sous-menus qui t’aideront à gérer ton serveur. Ça inclut **Navigateur FTP**, **Bases de données** et **Sauvegardes**. Voici une introduction détaillée à ces différentes zones.

### Navigateur FTP

Avec le **Navigateur FTP**, tu obtiens toutes les infos nécessaires pour te connecter à l’accès FTP. L’accès FTP te donne un accès direct aux fichiers de ton serveur de jeux. On recommande d’utiliser un programme FTP externe comme **Filezilla** ou **WinSCP** pour une utilisation optimale. Si tu ne connais pas encore FTP, jeter un œil au guide [Accès via FTP](gameserver-ftpaccess.md) peut t’aider.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla :** FileZilla est probablement le client FTP le plus simple et connu. Installe-le, lance-le, et entre tes identifiants en haut, que tu trouveras un peu plus haut sur cette page. Un clic rapide sur "Connecter" et tu es direct sur le serveur pour gérer tes fichiers.

**WinSCP :** WinSCP est à la base prévu pour SCP et SFTP (les versions sécurisées du protocole FTP), mais il gère aussi très bien le FTP classique. Le programme est un peu plus complet que FileZilla et est plutôt destiné aux utilisateurs avancés.

### Bases de données

En plus de nos produits serveurs de jeux, on propose aussi 10 bases de données incluses. Ces bases sont nécessaires par exemple quand des données doivent être stockées dans une base. Sous **Bases de données**, tu peux créer une base et voir les identifiants d’accès. Tu peux aussi activer l’option de sauvegarde et importer des sauvegardes de bases existantes.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Sauvegardes

Sous **Sauvegardes**, tu peux créer des sauvegardes manuelles et automatiques pour ton serveur et sa base de données associée. Ça facilite la récupération de tes données en cas de problème ou de perte.

Dans les paramètres, tu peux définir si les sauvegardes doivent être créées automatiquement et si ça doit être quotidien ou hebdomadaire. Tu peux aussi décider si les sauvegardes les plus anciennes doivent être supprimées si besoin, par exemple quand l’espace de stockage disponible devient limité.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

On fournit par défaut 10 Go d’espace de stockage sur le serveur de stockage pour les sauvegardes de nos produits serveurs de jeux. Si tu as besoin de plus d’espace, tu peux l’upgrader contre un supplément. Comme ça, tu t’assures d’avoir toujours assez de place pour tes sauvegardes et pouvoir accéder aux plus anciennes si besoin.

## Liens Utiles

Dans la section **Liens Utiles**, tu trouveras d’autres liens pertinents pour ton produit.

### Questions Fréquentes

La section **Questions Fréquentes** donne un aperçu des questions les plus posées par nos clients. Tu y trouveras des réponses utiles et des infos détaillées sur différents sujets pour t’aider rapidement et efficacement.

### Documentation ZAP-Hosting

On propose une documentation complète pour nos produits, qui sert de base de connaissances pour les questions et soucis les plus fréquents. Tu y trouveras divers guides et aides sur différents sujets pour t’accompagner dans l’utilisation et la gestion de ton produit.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News

La section **News** te donne un aperçu complet de toutes les annonces et nouveautés liées à ton service. Tu y trouveras des infos importantes sur différents aspects comme :

- Les changements du service, par exemple via des mises à jour ou nouvelles fonctionnalités
- Les annonces concernant des maintenances ou problèmes techniques éventuels
- Les offres spéciales et promotions qui te donnent des avantages ou réductions exclusives
- D’autres infos pertinentes pour l’utilisation de ton service

En consultant régulièrement les **News**, tu restes informé et peux ajuster ton service pour tirer le meilleur parti de ton serveur.

<InlineVoucher />