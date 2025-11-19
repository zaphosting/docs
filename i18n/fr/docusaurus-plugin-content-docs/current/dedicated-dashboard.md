---
id: dedicated-dashboard
title: "Serveur dédié : Vue d’ensemble du tableau de bord"
description: "Découvrez comment gérer et optimiser efficacement votre serveur dédié avec une vue claire des fonctionnalités clés et des outils d’administration → En savoir plus maintenant"
sidebar_label: Tableau de bord
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous êtes intéressé par un **serveur dédié** ou vous en possédez déjà un, mais il vous manque encore une vue d’ensemble complète de l’administration et de la localisation de toutes les options nécessaires ? Surtout au début, cela peut être un vrai défi. Pas de panique, on vous propose ci-dessous une introduction détaillée à l’administration de votre service, pour que vous ayez la meilleure vue d’ensemble possible.

Après avoir parcouru ce guide, vous serez capable de gérer facilement et efficacement votre serveur dédié et de trouver rapidement toutes les options et fonctionnalités nécessaires. Ici, vous aurez une vue structurée qui vous aidera pas à pas à vous familiariser avec l’administration du serveur dédié et à approfondir vos connaissances de manière ciblée. Ainsi, vous pourrez vous assurer que votre **serveur dédié** est configuré de manière optimale selon vos besoins et que vous tirez le meilleur parti des options disponibles.



## Administration du produit

Dans la section **Administration du produit**, vous trouverez toutes les pages nécessaires à la gestion de votre serveur dédié. Les options pour gérer votre serveur dédié sont listées en détail ci-dessous. 



### Tableau de bord

Le tableau de bord offre une vue centrale de toutes les informations importantes liées au serveur dédié. Il affiche le statut actuel, l’adresse du serveur, le nom d’hôte, le système d’exploitation installé, la charge système incluant l’utilisation du CPU et de la RAM, ainsi que le trafic réseau. Cette vue facilite la surveillance efficace et la gestion de l’environnement du serveur.

![img](https://screensaver01.zap-hosting.com/index.php/s/QEnaS6N7MqHejtk/preview)



### Journal des événements

Gardez un œil sur toutes les tâches d’administration et les événements système en un seul endroit. Le journal des événements collecte toutes les activités pertinentes, pour que vous sachiez toujours qui a fait des modifications, quand elles ont eu lieu et ce qui a été impacté.

![img](https://screensaver01.zap-hosting.com/index.php/s/akKpTx2XzDKy7qc/preview)



### Statistiques
Des chiffres détaillés sur le trafic vous montrent exactement combien de données votre serveur traite, en entrée comme en sortie. Les relevés actuels de température et les valeurs de vitesse des ventilateurs vous aident à garder votre matériel dans une plage de fonctionnement sûre en permanence.

![img](https://screensaver01.zap-hosting.com/index.php/s/B7yLamtJrdALpPb/preview)



### État du matériel

Suivez tous les détails essentiels du matériel en un seul endroit. Vérifiez quelles versions de firmware sont actuellement installées, incluant le System ROM, iLO et le contrôleur de stockage, et surveillez en temps réel l’état de votre CPU, RAM, interfaces réseau et disques connectés.

Des données matérielles détaillées vous aident à détecter les problèmes potentiels tôt et garantissent que votre serveur fonctionne de manière fiable. Vous avez aussi accès à un journal clair de tous les travaux de maintenance effectués, pour savoir à tout moment quelles mises à jour ou réparations ont été réalisées et quand.

![img](https://screensaver01.zap-hosting.com/index.php/s/9CsZGarzsdMP5Ea/preview)

## Paramètres

Dans la section **Paramètres**, vous trouverez toutes les pages nécessaires à la configuration de votre serveur dédié. Les options disponibles pour configurer votre serveur dédié sont listées en détail ci-dessous.

### Installation initiale
Avant de pouvoir utiliser votre serveur dédié de manière productive, une configuration initiale est nécessaire. Cela inclut l’activation de l’interface de gestion iLO, la sélection et le montage d’une image ISO, ainsi que l’installation du système d’exploitation souhaité. L’assistant de configuration vous guide pas à pas dans ce processus, garantissant un démarrage fluide même sans expérience préalable. Des instructions détaillées sont disponibles dans notre guide [Installation initiale](dedicated-setup.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/MnZKXAGGTqs9Xdp/download)

### Paramètres

Ajustez les options de configuration de votre serveur dédié. Ici, vous avez un contrôle total pour modifier des paramètres comme le mode d’alimentation, vous aidant à optimiser votre serveur selon vos besoins spécifiques.

![img](https://screensaver01.zap-hosting.com/index.php/s/WiHSELJNc5icsyQ/preview)



### Gestionnaire DDoS

Consultez les attaques DDoS passées pour mieux évaluer les menaces potentielles et les schémas. Activez les notifications pour les attaques DDoS en cours sur votre serveur afin de réagir rapidement en cas d’incident.

Selon l’emplacement du serveur et la protection DDoS disponible, vous pouvez aussi surveiller les attaques actives en temps réel. Cela inclut des analyses détaillées du trafic, montrant à la fois le trafic légitime et la quantité de trafic bloquée par les systèmes de mitigation. Ce niveau de transparence vous aide à comprendre comment fonctionne la protection et vous permet d’identifier rapidement les risques potentiels.

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)



### Gameserver / TS3

Avec cette fonctionnalité, vous pouvez facilement configurer et gérer des services de serveur de jeux et de serveur vocal en quelques clics. L’interface web gère tout le processus d’installation pour vous, donc pas besoin de connaissances techniques approfondies.

Vous pouvez créer de nouveaux serveurs de jeux ou serveurs vocaux quand vous en avez besoin, ajuster des paramètres comme les slots ou les ressources, et les contrôler confortablement depuis votre tableau de bord ZAP. Cela rend la gestion de plusieurs serveurs rapide, flexible et simple. Tout au même endroit.

:::warning Compatibilité du système d’exploitation 
Cette fonctionnalité est uniquement compatible avec certains systèmes Linux. Pour plus d’informations sur la configuration et l’utilisation de l’interface GS/TS3, veuillez consulter notre guide [Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/nd6YF93omGcApC8/preview)



### Modifier rDNS

Ajustez l’entrée DNS inverse (enregistrement PTR) pour l’adresse IP de votre serveur afin qu’elle pointe vers le nom d’hôte correct. Un rDNS correctement configuré aide à garantir que le nom de votre serveur dédié se résout correctement et est particulièrement important pour faire tourner un serveur mail. Sans un rDNS valide, les emails sortants peuvent être marqués comme spam ou ne pas être délivrés de manière fiable.

![img](https://screensaver01.zap-hosting.com/index.php/s/LpdMgD6T39tXiNK/preview)



### Adresses IP

Visualisez toutes les adresses IP attribuées à votre serveur en un coup d’œil. Cette vue montre les détails importants de configuration comme l’adresse IP, le masque de sous-réseau et la passerelle. Vous pouvez aussi vérifier si une IP est joignable ou non, ce qui vous aide à vérifier que vos paramètres réseau sont correctement configurés sur le système d’exploitation.

![img](https://screensaver01.zap-hosting.com/index.php/s/a64XRkWn2EA4Nef/preview)



## Outils

La section **Outils** contient tous les outils essentiels pour gérer le serveur dédié. Les options disponibles pour configurer le serveur sont décrites en détail ci-dessous et permettent une personnalisation précise selon les besoins spécifiques.



### Réinitialiser le trafic

Gardez un œil sur votre consommation mensuelle de trafic. Cette section montre combien de votre trafic inclus vous avez déjà utilisé. Si vous atteignez votre limite avant la fin du mois, vous avez aussi la possibilité de réinitialiser votre trafic à l’avance moyennant un coût supplémentaire.

![img](https://screensaver01.zap-hosting.com/index.php/s/5Z38eyRdntF6ict/preview)



### Gestion à distance iLO / ISO

Accédez à votre matériel serveur à distance en toute sécurité à tout moment. Ici, vous pouvez consulter vos identifiants de connexion iLO, activer les fonctionnalités de gestion à distance et utiliser l’interface iLO pour effectuer des tâches importantes.

![img](https://screensaver01.zap-hosting.com/index.php/s/9SZMtCPDJgNZSZ6/preview)

## Liens complémentaires
La section avec des liens complémentaires fournit des références supplémentaires pertinentes pour l’utilisation et la gestion du produit. Cela peut inclure de la documentation, des outils ou des ressources externes liées au service spécifique.

### Foire aux questions
La section **Foire aux questions** offre un aperçu des questions les plus fréquemment posées par nos clients. Vous y trouverez des réponses utiles et des informations détaillées sur divers sujets pour vous aider rapidement et efficacement.

### Documentation ZAP-Hosting
Nous proposons une documentation complète pour nos produits, qui sert de base de connaissances pour les questions et préoccupations les plus courantes. Vous y trouverez divers guides et aides sur différents sujets qui vous assisteront dans l’utilisation et la gestion de votre produit.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)



