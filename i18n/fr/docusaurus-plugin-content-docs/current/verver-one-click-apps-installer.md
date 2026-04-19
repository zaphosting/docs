---
id: verver-one-click-apps-installer
title: "VPS : Installateur d’Apps en Un Clic"
description: "Déployez des apps avec l’installateur d’apps en un clic pour VPS, gérez vos projets via l’interface web, et utilisez Coolify pour une gestion avancée -> Découvrez tout ça maintenant"
sidebar_label: Installateur d’Apps en Un Clic
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

L’installateur d’apps en un clic vous permet de parcourir un catalogue d’applications complet et de déployer des apps directement depuis l’interface web de votre VPS. Dans ce guide, vous apprendrez à préparer votre serveur, choisir le type d’installation adapté, installer et gérer vos apps, et utiliser les réglages avancés ainsi que les outils de dépannage si besoin.

<InlineVoucher />

## Preparation

Avant d’utiliser l’installateur d’apps en un clic, votre VPS doit répondre aux exigences minimales et utiliser un système d’exploitation supporté.

:::info Exigences minimales
La fonctionnalité apps nécessite que votre VPS soit en ligne et configuré avec suffisamment de ressources pour faire tourner à la fois les services de la plateforme et vos apps installées de manière fiable.
:::

| Exigence | Minimum | Recommandé |
| --- | --- | --- |
| Statut du serveur | En ligne | En ligne |
| Stockage | 30 Go | 50 Go |
| RAM | 2 Go | 4 Go |
| CPU | 2 cœurs | 4 cœurs |
| Système d’exploitation | Debian ou Ubuntu LTS | Debian 13 - EN - 64bit |

:::caution Système d’exploitation frais recommandé
Il est fortement conseillé d’installer la fonctionnalité apps sur une installation fraîche du système d’exploitation. Cela évite les conflits avec des services existants, des ports occupés, des configurations Docker ou personnalisées déjà présentes sur le serveur.
:::

Si vous devez réinstaller votre VPS avant de continuer, utilisez une image Debian ou Ubuntu LTS fraîche et supportée depuis votre interface de gestion VPS.

## Accéder à l’Installateur d’Apps en Un Clic

Ouvrez votre VPS dans l’interface web ZAP-Hosting et localisez la section One Click Apps. Vous pouvez lancer la configuration initiale depuis là, puis revenir gérer toutes les apps installées sur le serveur.

La première fois que vous ouvrez cette fonctionnalité, vous devez choisir comment la plateforme doit être installée sur votre VPS.

## Choisir un Type d’Installation

Vous pouvez choisir entre une installation complète et une installation en mode nœud uniquement. Le choix dépend si ce VPS doit héberger à la fois le panneau de gestion et les apps, ou seulement agir comme un nœud lié à un autre panneau.

### Installation complète

Choisissez **Installation complète** si vous souhaitez configurer le serveur avec le panneau et le serveur lui-même comme nœud. C’est l’option recommandée pour les débutants et la plupart des déploiements standards.

Avec cette méthode, vous pouvez :

- déployer des apps depuis le catalogue
- gérer projets et environnements
- organiser toutes les apps au même endroit
- utiliser les outils de gestion intégrés à l’interface web
- accéder au panneau avancé plus tard si besoin

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Recommandé pour la plupart des utilisateurs
Si c’est votre première utilisation de la fonctionnalité apps, sélectionnez l’installation complète. Elle offre la configuration la plus simple et vous donne une gestion complète directement depuis l’interface web ZAP-Hosting.
:::

### Installation en mode nœud uniquement

Choisissez **Installation en mode nœud uniquement** si vous voulez que ce VPS agisse uniquement comme un nœud. Vous pourrez alors le lier à un autre serveur VPS ou à une instance de panneau externe.

Cette option est utile si vous souhaitez :

- scaler sur plusieurs VPS
- centraliser la gestion sur un seul panneau
- lier ce serveur à un déploiement existant
- étendre une configuration multi-nœuds déjà en place

:::note Option de déploiement avancée
L’installation en mode nœud uniquement est destinée aux utilisateurs qui ont déjà un autre panneau disponible ou qui veulent connecter ce serveur à un environnement externe.
:::

## Installer la Fonctionnalité Apps

Après avoir choisi le type d’installation, lancez la configuration depuis l’interface web. L’installation initiale prend généralement quelques minutes.

Pendant ce processus, les services de la plateforme nécessaires à la fonctionnalité One Click Apps sont déployés sur votre VPS. Une fois terminé, le catalogue d’apps et les sections de gestion deviennent accessibles dans l’interface web.

:::info Comportement de l’installation
Les détails précis de la progression peuvent varier selon les performances de votre VPS, l’état du système d’exploitation et les conditions réseau. Si l’installation ne se termine pas correctement, consultez la section dépannage plus bas dans ce guide.
:::

## Parcourir le Catalogue d’Apps

Une fois l’installation terminée, vous pouvez ouvrir le catalogue d’apps et parcourir les applications disponibles. Le catalogue contient plus de 300 apps prêtes à être déployées et propose des filtres pour vous aider à trouver rapidement l’app adaptée.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Rechercher et filtrer les apps

Dans le catalogue, vous pouvez chercher des apps par nom et filtrer par catégorie. Cela vous aide à réduire la liste dans cette interface façon store et à trouver la cible de déploiement idéale pour votre projet.

Actions typiques :

- rechercher par nom d’app
- filtrer par catégorie
- consulter les entrées disponibles
- sélectionner une app pour le déploiement

Ce workflow est particulièrement utile si vous gérez beaucoup de cibles de téléchargement ou comparez plusieurs services avant installation.

### Lancer une installation d’app

Après avoir sélectionné une app dans le catalogue, commencez l’installation via l’interface web. Selon l’app, vous devrez peut-être définir des valeurs telles que :

- `[your_project_name]`
- `[your_environment_name]`
- `[your_domain]`
- `[your_app_name]`

Ces placeholders représentent des valeurs spécifiques à votre déploiement. Par exemple, `[your_domain]` doit être remplacé par le domaine que vous souhaitez utiliser pour l’app.

:::tip Projets et environnements
Utilisez projets et environnements pour garder votre déploiement organisé. C’est particulièrement utile si vous hébergez plusieurs apps, testez des versions ou séparez production et staging.
:::

## Gérer les Apps Installées

Après déploiement, vos apps installées sont listées dans la section de gestion de l’interface web. Vous pouvez y surveiller et contrôler vos services sans manipuler manuellement les conteneurs sous-jacents.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Actions de gestion disponibles

La section apps installées vous permet d’effectuer des actions courantes directement depuis l’interface web.

| Action | But |
| --- | --- |
| Démarrer | Démarre une app arrêtée |
| Arrêter | Arrête une app en cours |
| Consulter les logs | Ouvre les logs de l’app pour dépannage |
| Réinstaller | Redéploie l’app |

Ces outils facilitent la gestion de toutes vos apps au même endroit, surtout si vous préférez un contrôle simple via web plutôt qu’une administration en ligne de commande.

### Organiser projets et environnements

Projets et environnements vous aident à structurer clairement vos déploiements. Vous pouvez les utiliser pour séparer :

- apps perso et production
- environnements test et live
- déploiements clients ou équipes multiples
- stacks différents sur un même VPS

Cette organisation devient de plus en plus importante à mesure que votre collection d’apps store grandit et que vous gérez plus de services sur un ou plusieurs nœuds.

## Domaines, Accès Cloud et SSL

La fonctionnalité One Click Apps supporte les domaines personnalisés et l’intégration ZAP Cloud. Cela vous permet d’exposer vos apps en toute sécurité et de provisionner des certificats SSL pour vos déploiements.

:::info Support domaines et SSL
Vous pouvez utiliser des domaines personnalisés pour vos apps et bénéficier du provisioning de certificats SSL lorsque la plateforme le supporte.
:::

Lors de l’attribution d’un domaine, assurez-vous que vos enregistrements DNS pointent vers `[your_server_ip]`. Si votre domaine n’est pas configuré correctement, l’app risque de ne pas être accessible depuis Internet.

| Valeur | Description |
| --- | --- |
| `[your_domain]` | Le domaine ou sous-domaine assigné à votre app |
| `[your_server_ip]` | L’adresse IP publique de votre VPS |

:::caution Le DNS doit pointer vers votre VPS
Si le DNS de `[your_domain]` ne pointe pas vers `[your_server_ip]`, la validation du domaine et l’accès à l’app peuvent échouer.
:::

## Utiliser les Paramètres Avancés

Les utilisateurs avancés peuvent accéder à des fonctionnalités supplémentaires via le panneau externe disponible dans la section paramètres avancés.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

Cela peut être utile si vous avez besoin d’une personnalisation plus poussée, d’un contrôle étendu du déploiement ou d’un accès direct à des fonctionnalités au-delà de l’interface web standard.

### Limitation importante du support

:::caution Portée du support pour l’usage du panneau avancé
Les utilisateurs avancés sont libres d’utiliser le panneau externe Coolify pour plus de personnalisation et fonctionnalités. Cependant, le support est limité à l’interface web ZAP-Hosting. Si vous effectuez des modifications hors interface web, l’assistance peut ne pas être disponible pour ces changements personnalisés.
:::

### Quand utiliser le panneau avancé

Vous pouvez vouloir utiliser le panneau avancé si vous avez besoin de :

- personnalisation détaillée du déploiement
- workflows de liaison de nœuds directs
- configuration avancée des apps
- gestion au niveau panneau au-delà de l’interface simplifiée

Si vous perdez l’accès ou que l’intégration ne répond plus, utilisez d’abord les outils de dépannage décrits ci-dessous avant de faire des modifications manuelles.

## Lier des Nœuds

Si vous avez choisi l’installation en mode nœud uniquement, vous pouvez lier ce VPS à un autre serveur VPS ou à une instance de panneau externe. Cela vous permet de scaler votre infrastructure et gérer plusieurs nœuds depuis un seul endroit.

La liaison de nœuds est utile quand vous voulez :

- distribuer les apps sur plusieurs VPS
- centraliser la gestion
- étendre la capacité sans créer de déploiements isolés
- connecter à un environnement de panneau externe

:::note Liaison à un panneau externe
Vous pouvez lier votre nœud à un autre VPS ou à une instance de panneau externe. Les détails exacts de la liaison dépendent de l’environnement cible déjà en place.
:::

## Dépannage du Statut Dégradé

Si l’interface web affiche un statut dégradé, cela signifie que la plateforme ne peut pas contacter ou récupérer les données de l’instance qui alimente la fonctionnalité One Click Apps. Suivez les étapes de dépannage dans l’ordre chronologique.

### Indicateurs de statut

Le popup de dépannage peut afficher des indicateurs comme ceux-ci :

| Statut | Signification |
| --- | --- |
| Statut Coolify : Actif | Le service panneau semble fonctionner |
| Statut API : Accessible | L’API est actuellement joignable |
| Statut Service : En ligne | Votre VPS est lui-même en ligne |

Si une ou plusieurs parties ne fonctionnent pas correctement, continuez avec les étapes ci-dessous.

### Étape 1 : Confirmer que le VPS est en ligne

Assurez-vous d’abord que votre VPS est en ligne dans l’interface web ZAP-Hosting. Si le serveur est hors ligne, la plateforme apps ne peut pas fonctionner.

### Étape 2 : Rafraîchir le statut

Utilisez l’action **Rafraîchir le statut** pour relancer la vérification de santé avec les données les plus récentes. Cela peut résoudre des problèmes intermittents temporaires.

:::tip Problèmes de connectivité temporaires
Un état dégradé peut parfois être causé par un souci de communication de courte durée. Rafraîchir le statut est la première vérification la plus rapide.
:::

### Étape 3 : Redémarrer Docker

Si le statut reste dégradé, utilisez l’action **Redémarrer Docker**. Cela force le redémarrage de l’instance plateforme. Après une réponse réussie, attendez `1-2 minutes` puis rafraîchissez à nouveau le statut.

:::caution Redémarrage du service
Redémarrer Docker peut interrompre temporairement les apps en cours pendant que les services redémarrent.
:::

### Étape 4 : Rafraîchir les identifiants

En dernier recours, utilisez **Rafraîchir les identifiants**. C’est particulièrement important si le statut semble en ligne mais que des fonctions de l’interface web comme l’installation d’apps ne fonctionnent pas.

Cette action :

- ne supprime **pas** vos données
- rafraîchit les identifiants utilisateur root
- rafraîchit le token API utilisé par l’interface web
- met à jour automatiquement les identifiants du panneau en cas de succès

:::info Rafraîchissement sécurisé des identifiants
Rafraîchir les identifiants ne supprime pas vos apps installées ni les données de déploiement. Cela renouvelle uniquement les identifiants nécessaires à l’accès et à la communication.
:::

### Quand contacter le support

Si le problème persiste après avoir suivi toutes les étapes de dépannage, créez un ticket de support via le site ZAP-Hosting.

## Bonnes Pratiques

Pour garder l’installateur d’apps en un clic stable et facile à gérer, suivez ces recommandations :

| Bonne pratique | Raison |
| --- | --- |
| Utiliser une installation OS fraîche | Réduit les conflits avec services et ports existants |
| Respecter les ressources recommandées | Améliore performance et fiabilité |
| Organiser les apps en projets et environnements | Facilite la gestion des déploiements |
| Configurer le DNS avant d’assigner les domaines | Évite les problèmes d’accès et SSL |
| Utiliser les paramètres avancés avec précaution | Évite les modifications personnalisées non supportées |

:::tip Gardez vos déploiements organisés
Si vous prévoyez d’héberger beaucoup d’apps, créez un schéma de nommage clair pour `[your_project_name]`, `[your_environment_name]` et `[your_app_name]` avant de déployer vos premiers services.
:::

## Conclusion

Félicitations, vous avez configuré et utilisé avec succès l’installateur d’apps en un clic pour VPS afin de déployer et gérer des apps sur votre serveur. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !

<InlineVoucher />