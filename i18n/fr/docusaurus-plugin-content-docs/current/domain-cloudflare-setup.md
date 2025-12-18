---
id: domain-cloudflare-setup
title: "Domaine : Configurer un domaine avec Cloudflare"
description: "Découvrez comment améliorer la sécurité et les performances de votre site web grâce à Cloudflare avec les domaines ZAP-Hosting → En savoir plus maintenant"
sidebar_label: Configuration Cloudflare
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Cloudflare est un fournisseur CDN (Content Delivery Network) très populaire qui améliore vos sites web avec une meilleure protection de sécurité, une atténuation des attaques DDoS et offre une gestion facile via leur tableau de bord. Ce guide vous expliquera comment configurer votre domaine ZAP-Hosting pour l’utiliser avec Cloudflare grâce à ExpertDNS et en ajustant les serveurs de noms.

<InlineVoucher />

## Préparation
Pour suivre ce guide, vous aurez besoin de :
- Un domaine sur votre compte ZAP-Hosting
- Un compte Cloudflare
  
## Étape 1 : Activer l’option ExpertDNS

Commencez par accéder au panneau web de votre domaine sélectionné sur votre compte ZAP-Hosting. Trouvez l’option **ExpertDNS** et activez-la en cochant la case puis en appuyant sur le bouton de sauvegarde.

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## Étape 2 : Configurer votre domaine sur Cloudflare

Les prochaines étapes se feront sur Cloudflare, donc commencez par vous connecter à votre compte Cloudflare. Une fois connecté, ajoutez votre site web au tableau de bord en suivant les étapes de configuration fournies directement par Cloudflare.

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

Lorsque vous arrivez à l’étape 4 du processus, Cloudflare vous fournira des serveurs de noms que vous devrez configurer.

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

Retournez dans le panneau web de votre domaine et accédez à la section **ExpertDNS**. Dans cette section, supprimez les serveurs de noms par défaut de ZAP-Hosting et remplacez-les par ceux fournis par Cloudflare.

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

N’oubliez pas de sauvegarder vos modifications une fois terminé.

## Étape 3 : Finaliser la configuration sur Cloudflare

Retournez sur votre tableau de bord Cloudflare. Sur la page de configuration précédente pour votre domaine, vous devriez voir un bouton pour forcer Cloudflare à vérifier à nouveau vos serveurs de noms.

:::info
La reconnaissance des modifications des serveurs de noms peut prendre jusqu’à 24 heures, mais cela se fait généralement beaucoup plus rapidement.
:::

Une fois que Cloudflare aura reconnu vos modifications, vous recevrez un email vous informant que votre configuration est prête. Vous pouvez aussi vérifier sur votre tableau de bord Cloudflare. Une configuration réussie affichera **Active** sous le domaine que vous avez configuré.

Vous avez intégré avec succès votre domaine à Cloudflare, débloquant ainsi des performances, une sécurité et une gestion améliorées pour votre site web.

<InlineVoucher />