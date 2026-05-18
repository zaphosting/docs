---
id: windrose-firststeps-dashboard
title: "Windrose : Aperçu du Tableau de Bord"
description: "Découvrez le tableau de bord Windrose de ZAP-Hosting et apprenez à gérer votre serveur de jeux, surveiller les performances et utiliser efficacement les principales fonctionnalités de contrôle -> En savoir plus maintenant"
sidebar_label: Tableau de bord
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le tableau de bord **Windrose** est l’espace central pour gérer votre serveur de jeux dans l’interface web ZAP-Hosting. Dans ce guide, vous aurez une vue d’ensemble structurée des sections disponibles du tableau de bord et apprendrez à utiliser efficacement les outils d’administration, de surveillance et d’hébergement essentiels.

<InlineVoucher />

## Administration du produit

Dans la section **Administration du produit**, vous trouverez les pages les plus importantes pour contrôler et surveiller votre serveur **Windrose**. Ces pages vous aident à gérer l’état actuel du serveur, à consulter les événements techniques et à accéder rapidement aux informations essentielles du service.

### Tableau de bord

Le **Tableau de bord** est la page principale de vue d’ensemble de votre serveur **Windrose**. Vous y trouverez généralement les informations clés du service en un coup d’œil, telles que le statut actuel du serveur, son emplacement, l’adresse de connexion et l’utilisation des ressources.

![img](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

Selon la configuration actuelle du serveur et l’intégration du jeu, le tableau de bord peut aussi afficher des informations supplémentaires comme la carte active, le nom du serveur, la mémoire utilisée ou l’utilisation des slots joueurs. C’est aussi l’endroit où vous pouvez directement démarrer, arrêter ou redémarrer votre service.

Le tableau de bord est particulièrement utile car il combine contrôle et surveillance du serveur en un seul endroit. Cela vous permet de vérifier rapidement si votre service est en ligne et de réagir immédiatement si des changements sont nécessaires.

### Statistiques

Dans **Statistiques**, vous pouvez consulter les données historiques d’utilisation de votre serveur. Cela vous aide à mieux comprendre les performances de votre hébergement **Windrose** au fil du temps.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Les graphiques disponibles incluent généralement des valeurs telles que l’utilisation du CPU, la consommation de mémoire et l’utilisation des slots. Vous pouvez souvent changer la plage temporelle pour analyser des pics à court terme ou des tendances à long terme.

| Indicateur | Objectif |
| --- | --- |
| Utilisation CPU | Permet d’identifier la charge de traitement et d’éventuels goulets d’étranglement |
| Utilisation mémoire | Montre la quantité de RAM utilisée par votre serveur |
| Utilisation des slots | Indique combien de slots joueurs disponibles sont activement utilisés |

:::tip Analyse des performances
Si vous constatez des lags, des plantages ou des temps de réponse lents, la page des statistiques est un excellent point de départ pour le dépannage. Elle peut vous aider à déterminer si le problème est lié à l’utilisation des ressources ou s’il est survenu à un moment précis.
:::

### Gestionnaire DDoS

Le **Gestionnaire DDoS** vous permet de consulter les informations relatives aux attaques DDoS détectées et atténuées contre votre service. Cela peut être utile pour comprendre des schémas de trafic inhabituels ou enquêter sur des interruptions causées par du trafic malveillant.

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

Selon vos options réservées et la protection disponible à l’emplacement choisi, vous pouvez aussi voir en temps réel les informations sur les attaques actives et les détails du trafic.

:::info Disponibilité du Gestionnaire DDoS
Le Gestionnaire DDoS est disponible uniquement si votre service inclut une adresse IP dédiée ou l’option supplémentaire **Aperçu Gestionnaire DDoS**. Si ce n’est pas inclus dans votre forfait actuel, vous devez d’abord effectuer une mise à niveau.
:::

### Fichiers journaux

Si votre serveur **Windrose** affiche des erreurs ou se comporte de manière inattendue, la section **Fichiers journaux** est l’un des endroits les plus importants à vérifier. Les fichiers journaux contiennent les sorties techniques du serveur et peuvent inclure des avertissements, messages de démarrage et détails d’erreurs.

Ces fichiers sont particulièrement utiles pour identifier la cause de plantages, d’échecs de démarrage ou de problèmes de configuration.

:::caution Limites de l’analyse des journaux
Si les sorties des journaux ne sont pas claires ou ne vous aident pas à identifier le problème, vous devez contacter le support via la [page officielle de support](https://zap-hosting.com/en/customer/support/). Fournissez une description claire du problème ainsi que les messages de journal pertinents pour accélérer le dépannage.
:::

### Journal des événements

Le **Journal des événements** vous donne un aperçu des actions et événements liés à votre service. Cela peut inclure les démarrages, arrêts, plantages, installations, mises à jour et activités de sauvegarde du serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

Cette section est particulièrement utile si vous souhaitez vérifier quand un changement a eu lieu ou si une tâche automatisée a été exécutée avec succès.

### Console en direct

La **Console en direct** affiche la sortie en temps réel du serveur pendant que votre serveur **Windrose** fonctionne. Elle vous permet de surveiller ce qui se passe actuellement sur le serveur et peut vous aider à détecter immédiatement les problèmes.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Si le logiciel serveur le supporte, vous pouvez aussi envoyer des commandes directement via la console en direct. Cela est utile pour des actions administratives à effectuer sans redémarrer le service.

| Fonction | Description |
| --- | --- |
| Sortie en temps réel | Affiche les événements et messages actuels du serveur |
| Visibilité des erreurs | Vous aide à identifier les problèmes au moment où ils surviennent |
| Saisie de commandes | Permet d’envoyer directement des commandes serveur supportées |

### Interruptions de service

Si votre serveur a été temporairement indisponible sans cause évidente dans le journal des événements ou les fichiers journaux, le problème peut être lié au système hôte sous-jacent plutôt qu’à votre service individuel.

Dans la section **Interruptions de service**, vous pouvez consulter l’historique des interruptions liées à l’environnement hôte de votre serveur de jeux. Pour des informations plus larges sur l’état de la plateforme, vous pouvez aussi consulter la [page de statut officielle](https://status.zap-hosting.com/).

## Paramètres

La section **Paramètres** contient les pages principales de configuration de votre serveur **Windrose**. Ici, vous pouvez ajuster le comportement du service, changer les jeux installés si supporté, gérer les mises à jour et configurer les fonctionnalités d’automatisation.

### Paramètres

La page **Paramètres** offre une vue simplifiée des options courantes du serveur. Cela est particulièrement utile si vous débutez dans la location de serveurs de jeux et souhaitez effectuer des modifications sans éditer directement les fichiers de configuration.

Si disponible pour **Windrose**, ces options peuvent inclure des réglages liés au gameplay ou d’autres paramètres courants du service. Les options exactes varient selon l’intégration du jeu.

### Configurations

La section **Configurations** vous permet d’éditer les fichiers de configuration directement via l’interface web. Cela vous donne un contrôle plus précis que la page simplifiée des paramètres et convient généralement mieux aux utilisateurs avancés.

:::caution Valeurs écrasées
Certaines valeurs peuvent être gérées par la page simplifiée **Paramètres**. Si vous remarquez que certaines modifications manuelles dans l’éditeur de configuration sont écrasées, vérifiez si la même option est toujours contrôlée là-bas.
:::

### Jeux

Dans **Jeux**, vous pouvez changer pour un autre jeu ou une autre variante disponible si votre service le permet. Les jeux avec le même tarif de slots peuvent généralement être sélectionnés directement, tandis que d’autres nécessitent d’abord un ajustement de forfait.

Si vous souhaitez en savoir plus sur le changement de jeu installé sur votre service, consultez le [guide Changement de jeu](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versions

La page **Versions** vous permet de gérer la version serveur installée pour votre service **Windrose**, si la gestion des versions est supportée. Vous pouvez généralement mettre à jour vers la dernière version disponible et activer les mises à jour automatiques.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Les mises à jour automatiques aident à maintenir votre environnement d’hébergement à jour, mais vous devez toujours vérifier la compatibilité après des changements majeurs de version.

### Tâches planifiées

Avec **Tâches planifiées**, vous pouvez automatiser des actions récurrentes pour votre serveur. Cela est utile si vous souhaitez réduire le travail d’administration manuel et garder votre service stable.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Les actions automatisées courantes peuvent inclure :

| Type de tâche | Exemple d’utilisation |
| --- | --- |
| Démarrer le service | Démarrer automatiquement le serveur à une heure précise |
| Arrêter le service | Éteindre le serveur pendant les fenêtres de maintenance |
| Redémarrer le service | Effectuer des redémarrages réguliers pour la stabilité |
| Création de sauvegardes | Créer des sauvegardes régulières sans intervention manuelle |
| Commandes personnalisées | Exécuter automatiquement des commandes supportées |

### Planificateur de redémarrage

Le **Planificateur de redémarrage** est conçu spécifiquement pour programmer des redémarrages automatiques du serveur. Cela peut être utile si vous souhaitez redémarrer régulièrement votre serveur **Windrose**, par exemple pendant les heures creuses.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### Paramètres DNS

Avec **Paramètres DNS**, vous pouvez attribuer une adresse plus conviviale à votre service. Cela rend votre serveur plus facile à retenir et à partager avec d’autres joueurs.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

Vous pouvez utiliser soit un sous-domaine fourni par ZAP, soit votre propre domaine, selon votre configuration et les options réservées.

## Outils

La section **Outils** contient des fonctionnalités supplémentaires de gestion du service qui prennent en charge l’accès aux fichiers, la gestion des bases de données et la gestion des sauvegardes.

### Navigateur FTP

Dans le **Navigateur FTP**, vous trouverez les détails de connexion nécessaires pour accéder aux fichiers de votre serveur. L’accès FTP est utile si vous devez uploader, télécharger ou modifier des fichiers directement.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

Pour une gestion plus facile des fichiers, il est recommandé d’utiliser un client FTP externe comme [FileZilla](https://filezilla-project.org/) ou [WinSCP](https://winscp.net/). Si vous avez besoin d’aide pour la connexion, consultez le guide [Accès via FTP](gameserver-ftpaccess.md).

### Bases de données

Sous **Bases de données**, vous pouvez créer et gérer les bases de données incluses avec votre produit serveur de jeux, si votre configuration l’exige. Cela est utile pour les services, mods ou outils nécessitant un stockage structuré des données.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

Vous pouvez généralement consulter les identifiants d’accès, créer de nouvelles bases et importer des sauvegardes existantes depuis cette section.

### Sauvegardes

La section **Sauvegardes** vous permet de créer et gérer des sauvegardes pour votre serveur et, si supporté, ses données de base de données associées.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Les sauvegardes régulières sont fortement recommandées car elles vous permettent de restaurer votre service après des erreurs de configuration, une corruption de fichiers ou des problèmes inattendus.

:::tip Bonne pratique de sauvegarde
Créez une sauvegarde manuelle avant d’effectuer des changements majeurs comme modifier des fichiers de configuration, changer de version ou changer le jeu installé. Cela vous donne un point de restauration sûr en cas de problème.
:::

## Liens complémentaires

La section **Liens complémentaires** fournit des ressources supplémentaires liées à votre service et à l’utilisation générale de la plateforme ZAP-Hosting.

### Foire aux questions

La section **Foire aux questions** contient des réponses aux sujets courants liés à votre service. Cela peut vous aider à résoudre plus rapidement des problèmes typiques sans avoir à contacter le support.

### Documentation ZAP-Hosting

La **Documentation ZAP-Hosting** vous donne accès à une base de connaissances étendue couvrant l’administration serveur, la configuration d’hébergement, le dépannage et les sujets associés. Si vous cherchez des guides plus avancés au-delà de cette vue d’ensemble du tableau de bord **Windrose**, c’est l’endroit idéal pour continuer.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Actualités

La section **Actualités** contient des annonces importantes concernant votre service. Cela peut inclure des avis techniques, des informations de maintenance, des changements de fonctionnalités et d’autres mises à jour importantes.

Consulter cette section régulièrement vous aide à rester informé des changements pouvant affecter votre environnement d’hébergement **Windrose**.

<InlineVoucher />

## Conclusion

Vous disposez maintenant d’une vue complète des zones les plus importantes du tableau de bord **Windrose** dans le panneau ZAP-Hosting, de la surveillance serveur et des journaux aux paramètres, outils et fonctionnalités d’automatisation. Cette connaissance vous aide à naviguer plus efficacement dans votre service d’hébergement et à gérer votre serveur avec plus de confiance.

Félicitations, vous avez réussi à apprendre à utiliser le tableau de bord Windrose. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂