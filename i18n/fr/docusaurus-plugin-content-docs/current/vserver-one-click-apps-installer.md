---
id: vserver-one-click-apps-installer
title: "VPS : Installateur d’Apps en 1 Clic"
description: "Déployez des apps avec l’Installateur d’Apps en 1 Clic pour VPS, gérez vos projets via l’interface web, et utilisez Coolify pour une gestion avancée -> En savoir plus maintenant"
sidebar_label: Installateur d’Apps 1 Clic
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

L’Installateur d’Apps en 1 Clic te permet de parcourir un catalogue d’applications ultra complet et de déployer des apps directement depuis l’interface web de ton VPS. Dans ce guide, tu vas apprendre à préparer ton serveur, choisir le bon type d’installation, installer et gérer tes apps, et utiliser les réglages avancés ainsi que les outils de dépannage quand c’est nécessaire.

![img](https://screensaver01.zap-hosting.com/index.php/s/GDwkwA8Mi4gHS7D/preview)

<InlineVoucher />

## Préparation

Avant d’utiliser l’Installateur d’Apps en 1 Clic, ton VPS doit répondre aux exigences minimales et tourner sous un système d’exploitation supporté.

:::info Exigences minimales
La fonctionnalité apps nécessite que ton VPS soit en ligne et configuré avec suffisamment de ressources pour faire tourner à la fois les services de la plateforme et tes apps installées de manière fiable.
:::

| Exigence | Minimum | Recommandé |
| --- | --- | --- |
| État du serveur | En ligne | En ligne |
| Stockage | 30 Go | 50 Go |
| RAM | 2 Go | 4 Go |
| CPU | 2 cœurs | 4 cœurs |
| Système d’exploitation | Debian ou Ubuntu LTS | Debian 13 - FR - 64bit |

:::caution Système d’exploitation frais recommandé
On recommande vivement d’installer la fonctionnalité apps sur une installation fraîche du système d’exploitation. Ça évite les conflits avec des services existants, des ports occupés, des configurations Docker ou des réglages personnalisés déjà présents sur le serveur.
:::

Si tu dois réinstaller ton VPS avant de continuer, utilise une image fraîche supportée Debian ou Ubuntu LTS depuis ton interface de gestion VPS.

## Accéder à l’Installateur d’Apps en 1 Clic

Ouvre ton VPS dans l’interface web ZAP-Hosting et trouve la section One Click Apps. De là, tu peux lancer la configuration initiale et revenir plus tard pour gérer toutes les apps installées sur le serveur.

La première fois que tu ouvres cette fonctionnalité, tu dois choisir comment la plateforme doit être installée sur ton VPS.

## Choisir un type d’installation

Tu peux choisir entre une installation complète et une installation uniquement nœud. Le bon choix dépend si ce VPS doit héberger à la fois le panneau de gestion et les apps, ou seulement agir comme un nœud lié à un autre panneau.

### Installation complète

Choisis **Installation complète** si tu veux configurer le serveur avec le panneau et le serveur lui-même comme nœud. C’est l’option recommandée pour les débutants et la plupart des déploiements standards.

Avec cette méthode, tu peux :

- déployer des apps depuis le catalogue
- gérer projets et environnements
- organiser toutes les apps au même endroit
- utiliser les outils de gestion intégrés à l’interface web
- accéder au panneau avancé plus tard si besoin

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Recommandé pour la majorité des utilisateurs
Si c’est ta première fois avec la fonctionnalité apps, choisis l’installation complète. C’est la configuration la plus simple et elle te donne une gestion complète directement depuis l’interface web ZAP-Hosting.
:::

### Installation uniquement nœud

Choisis **Installation uniquement nœud** si tu veux que ce VPS serve uniquement de nœud. Tu pourras ensuite le lier à un autre serveur VPS ou à une instance de panneau externe.

Cette option est utile si tu souhaites :

- scaler sur plusieurs VPS
- centraliser la gestion sur un seul panneau
- lier ce serveur à un déploiement existant
- étendre une configuration multi-nœuds déjà en place

:::note Option avancée de déploiement
L’installation uniquement nœud est destinée aux utilisateurs qui ont déjà une autre instance de panneau disponible ou qui veulent connecter ce serveur à un environnement externe.
:::

## Installer la fonctionnalité Apps

Après avoir choisi le type d’installation, lance la configuration depuis l’interface web. L’installation initiale prend généralement quelques minutes.

Pendant ce processus, les services de la plateforme nécessaires à la fonctionnalité One Click Apps sont déployés sur ton VPS. Une fois terminé, le catalogue d’apps et les sections de gestion deviennent accessibles dans l’interface web.

:::info Comportement de l’installation
Les détails précis de la progression peuvent varier selon les performances de ton VPS, l’état du système d’exploitation et les conditions réseau. Si l’installation ne se termine pas correctement, consulte la section dépannage plus bas dans ce guide.
:::

## Parcourir le catalogue d’apps

Une fois l’installation terminée, tu peux ouvrir le catalogue d’apps et parcourir les applications disponibles. Le catalogue contient plus de 300 apps prêtes à être déployées et propose des filtres pour t’aider à trouver rapidement l’app qu’il te faut.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Rechercher et filtrer les apps

Dans le catalogue, tu peux chercher des apps par nom et filtrer par catégorie. Ça t’aide à réduire la liste dans cette interface façon store d’apps et à trouver la cible de déploiement idéale pour ton projet.

Actions typiques :

- chercher par nom d’app
- filtrer par catégorie
- consulter les fiches d’app disponibles
- sélectionner une app pour déploiement

Ce workflow est super utile si tu gères beaucoup de cibles de téléchargement d’apps ou si tu compares plusieurs services avant d’installer.

### Lancer une installation d’app

Après avoir choisi une app dans le catalogue, commence l’installation via l’interface web. Selon l’app, tu devras peut-être définir des valeurs comme :

- `[your_project_name]`
- `[your_environment_name]`
- `[your_domain]`
- `[your_app_name]`

Ces placeholders représentent des valeurs spécifiques à ton déploiement. Par exemple, `[your_domain]` doit être remplacé par le domaine que tu veux utiliser pour l’app.

:::tip Projets et environnements
Utilise projets et environnements pour garder ton déploiement organisé. C’est super pratique quand tu héberges plusieurs apps, testes des versions, ou sépares production et staging.
:::

## Gérer les apps installées

Après le déploiement, tes apps installées sont listées dans la section de gestion de l’interface web. De là, tu peux surveiller et contrôler tes services sans avoir à manipuler manuellement les conteneurs sous-jacents.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Actions de gestion disponibles

La section apps installées te permet d’effectuer les actions courantes du cycle de vie directement depuis l’interface web.

| Action | But |
| --- | --- |
| Démarrer | Démarre une app arrêtée |
| Arrêter | Arrête une app en cours |
| Consulter les logs | Ouvre les logs de l’app pour dépannage |
| Réinstaller | Redéploie l’app |

Ces outils facilitent la gestion de toutes tes apps au même endroit, surtout si tu préfères un contrôle simple via web plutôt que la ligne de commande.

### Organiser projets et environnements

Projets et environnements t’aident à structurer clairement tes déploiements. Tu peux les utiliser pour séparer :

- apps perso et production
- environnements test et live
- déploiements clients ou équipes multiples
- stacks différentes sur le même VPS

Cette organisation devient de plus en plus importante à mesure que ta collection d’apps store grandit et que tu gères plus de services sur un ou plusieurs nœuds.

## Domaines, accès Cloud et SSL

La fonctionnalité One Click Apps supporte les domaines personnalisés et l’intégration ZAP Cloud. Ça te permet d’exposer tes apps en toute sécurité et de provisionner des certificats SSL pour tes déploiements.

:::info Support domaine et SSL
Tu peux utiliser des domaines personnalisés pour tes apps et bénéficier du provisioning de certificats SSL là où la plateforme le supporte.
:::

Quand tu assignes un domaine, assure-toi que tes enregistrements DNS pointent vers `[your_server_ip]`. Si ton domaine n’est pas configuré correctement, l’app risque de ne pas être accessible depuis Internet.

| Valeur | Description |
| --- | --- |
| `[your_domain]` | Le domaine ou sous-domaine assigné à ton app |
| `[your_server_ip]` | L’adresse IP publique de ton VPS |

:::caution Le DNS doit pointer vers ton VPS
Si le DNS de `[your_domain]` ne pointe pas vers `[your_server_ip]`, la validation du domaine et l’accès à l’app peuvent échouer.
:::

## Utiliser les réglages avancés

Les utilisateurs avancés peuvent accéder à des fonctionnalités supplémentaires via le panneau externe disponible dans la section réglages avancés.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

C’est utile si tu as besoin d’une personnalisation plus poussée, d’un contrôle étendu du déploiement, ou d’un accès direct à des fonctionnalités au-delà de l’interface web standard.

### Limitation importante du support

:::caution Portée du support pour l’usage du panneau avancé
Les utilisateurs avancés sont libres d’utiliser le panneau externe Coolify pour plus de personnalisation et fonctionnalités. Cependant, le support est limité à l’interface web ZAP-Hosting. Si tu fais des modifications hors de l’interface web, l’assistance peut ne pas être disponible pour ces changements personnalisés.
:::

### Quand utiliser le panneau avancé

Tu peux vouloir utiliser le panneau avancé si tu as besoin de :

- personnalisation plus détaillée du déploiement
- workflows de liaison directe de nœuds
- configuration avancée d’apps
- gestion au niveau panneau au-delà de l’interface simplifiée

Si tu perds l’accès ou si l’intégration ne répond plus, utilise les outils de dépannage décrits ci-dessous avant de faire des modifications manuelles.

## Lier des nœuds

Si tu as choisi l’installation uniquement nœud, tu peux lier ce VPS à un autre serveur VPS ou à une instance de panneau externe. Ça te permet de scaler ton infrastructure et gérer plusieurs nœuds depuis un seul endroit.

La liaison de nœuds est utile quand tu veux :

- distribuer des apps sur plusieurs VPS
- centraliser la gestion
- étendre la capacité sans créer des déploiements isolés
- connecter à un environnement panneau externe

:::note Liaison panneau externe
Tu peux lier ton nœud à un autre VPS ou à une instance de panneau externe. Les détails exacts de la liaison dépendent de l’environnement cible déjà en place.
:::

## Dépannage du statut dégradé

Si l’interface web affiche un statut dégradé, cela signifie que la plateforme ne peut pas contacter ou récupérer les données de l’instance qui alimente la fonctionnalité One Click Apps. Suis les étapes de dépannage dans l’ordre chronologique.

### Indicateurs de statut

Le popup de dépannage peut afficher des indicateurs comme ceux-ci :

| Statut | Signification |
| --- | --- |
| Statut Coolify : Actif | Le service panneau semble fonctionner |
| Statut API : Accessible | L’API est actuellement joignable |
| Statut Service : En ligne | Ton VPS est bien en ligne |

Si une ou plusieurs parties ne fonctionnent pas correctement, continue avec les étapes ci-dessous.

### Étape 1 : Confirmer que le VPS est en ligne

D’abord, assure-toi que ton VPS est bien en ligne dans l’interface web ZAP-Hosting. Si le serveur est hors ligne, la plateforme apps ne peut pas fonctionner.

### Étape 2 : Rafraîchir le statut

Utilise l’action **Rafraîchir le statut** pour relancer la vérification de santé avec les données les plus récentes. Ça peut résoudre des problèmes temporaires intermittents.

:::tip Problèmes de connectivité temporaires
Un état dégradé peut parfois être causé par un souci de communication de courte durée. Rafraîchir le statut est la première vérification la plus rapide.
:::

### Étape 3 : Redémarrer Docker

Si le statut reste dégradé, utilise l’action **Redémarrer Docker**. Ça force le redémarrage de l’instance plateforme. Après une réponse réussie, attends `1-2 minutes` puis rafraîchis à nouveau le statut.

:::caution Redémarrage du service
Redémarrer Docker peut interrompre temporairement les apps en cours pendant que les services redémarrent.
:::

### Étape 4 : Rafraîchir les identifiants

En dernier recours, utilise **Rafraîchir les identifiants**. C’est particulièrement important si le statut semble en ligne mais que des fonctions de l’interface web comme l’installation d’apps ne fonctionnent pas.

Cette action :

- ne supprime **pas** tes données
- rafraîchit les identifiants utilisateur root
- rafraîchit le token API utilisé par l’interface web
- met à jour automatiquement les identifiants du panneau en cas de succès

:::info Rafraîchissement sécurisé des identifiants
Rafraîchir les identifiants ne supprime pas tes apps installées ni les données de déploiement. Ça renouvelle juste les identifiants nécessaires à l’accès et à la communication.
:::

### Quand contacter le support

Si le problème persiste après avoir suivi toutes les étapes de dépannage, crée un ticket de support via le site ZAP-Hosting.

## Bonnes pratiques

Pour garder l’Installateur d’Apps en 1 Clic stable et facile à gérer, suis ces recommandations :

| Bonne pratique | Raison |
| --- | --- |
| Utiliser une installation OS fraîche | Réduit les conflits avec services et ports existants |
| Respecter les ressources recommandées | Améliore performance et fiabilité |
| Organiser les apps en projets et environnements | Facilite la gestion des déploiements |
| Configurer le DNS avant d’assigner les domaines | Évite les problèmes d’accès et SSL |
| Utiliser les réglages avancés avec précaution | Évite les modifications personnalisées non supportées |

:::tip Garde tes déploiements organisés
Si tu prévois d’héberger beaucoup d’apps, crée un schéma de nommage clair pour `[your_project_name]`, `[your_environment_name]` et `[your_app_name]` avant de déployer tes premiers services.
:::

## Conclusion

Bravo, tu as réussi à configurer et utiliser l’Installateur d’Apps en 1 Clic pour VPS afin de déployer et gérer des apps sur ton serveur. Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’assister !

<InlineVoucher />