---
id: webspace-external-domain
title: "Hébergement web : Lier un domaine hébergé ailleurs"
description: "Apprends comment connecter ton domaine externe à ton hébergement web ZAP-Hosting pour un site web et des mails qui fonctionnent nickel → Découvre tout maintenant"
sidebar_label: Lier un domaine externe
services:
  - webspace
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Tu as déjà un domaine enregistré chez un autre fournisseur et tu veux le connecter à ton produit d’hébergement web ZAP-Hosting ? Pas de souci ! Pour ça, il faut ajuster les paramètres DNS chez ton fournisseur de domaine. Dans ce guide, on te montre exactement quels enregistrements DNS créer pour que ton domaine pointe correctement vers ton hébergement web.

:::info Transfère ton domaine
Transfère ton domaine chez ZAP-Hosting et profite d’une gestion simplifiée. Connecte ton domaine à ton hébergement web en quelques clics et bénéficie de plein de fonctionnalités en plus. Découvre comment transférer ton domaine dans notre [guide Transfert de domaine](domain-transfer.md).
:::

<InlineVoucher />



## Lier le domaine dans Plesk

Avant de pouvoir lier ton domaine externe à ton hébergement web, il faut d’abord ajouter le domaine dans **Plesk**. Pour ça, ajoute ton domaine dans la section **Paramètres d’hébergement**. Si tu ne sais pas encore comment faire, tu trouveras des instructions détaillées dans notre [guide Ajouter un domaine](https://zap-hosting.com/guides/docs/webspace-adddomain).

![img](https://screensaver01.zap-hosting.com/index.php/s/Kx7KDPEk3t6Tcbd/download)



## Configurer les paramètres DNS

Pour connecter ton domaine externe à ton hébergement web ZAP-Hosting, tu dois d’abord modifier les paramètres DNS chez le fournisseur où ton domaine est enregistré. Pour que ton site web et tes mails fonctionnent correctement, ton domaine doit savoir vers quel serveur diriger les visiteurs et le trafic mail. Ça se fait en créant les enregistrements DNS nécessaires.

Tu auras besoin de l’adresse IP de ton instance d’hébergement web pour configurer les enregistrements A. Tu peux trouver cette info directement dans ton tableau de bord ZAP hébergement web.

![img](https://screensaver01.zap-hosting.com/index.php/s/DzpqenW4FwP6fbf/download)

Une fois que tu as l’adresse IP, tu peux ajouter les enregistrements DNS nécessaires chez ton fournisseur de domaine. Cela inclut les enregistrements A pour pointer ton domaine vers ton hébergement web, ainsi que les enregistrements MX et TXT pour gérer la livraison des mails et la vérification du domaine.

Pour plus d’infos détaillées sur le fonctionnement des différents types d’enregistrements DNS et leur utilité, on te recommande de jeter un œil à notre [guide Enregistrements de domaine](domain-records.md).

Voici un tableau listant tous les enregistrements DNS requis pour ta config :

| Nom                            | Type | Valeur                          | TTL  | Prio |
| ------------------------------ | ---- | ------------------------------- | ---- | ---- |
| *                              | A    | Adresse IP de l’instance web    | 3600 | 0    |
| mail                           | A    | Adresse IP de l’instance web    | 3600 | 0    |
| www                            | A    | Adresse IP de l’instance web    | 3600 | 0    |
| domain.tld.                    | A    | Adresse IP de l’instance web    | 3600 | 0    |
| domain.tld.                    | MX   | v=DKIM1;k=rsa;p=MIIBIjA......   | 3600 | 10   |
| default._domainkey.domain.tld. | TXT  | plesk-steve.zap.cloud.          | 3600 | 0    |
| domain.tld.                    | TXT  | v=spf1 a mx ~all                | 3600 | 0    |
| _dmarc.domain.tld.             | TXT  | v=DMARC1; p=none                | 3600 | 0    |

:::warning Les modifications DNS peuvent prendre du temps

Les changements dans tes paramètres DNS peuvent mettre jusqu’à 24 heures pour se propager complètement dans le monde entier. Pendant ce temps, ton domaine ne pointera peut-être pas immédiatement vers ton nouvel hébergement web ou tes services mail, alors sois patient pendant que les changements prennent effet.
:::




## Conclusion
En suivant ces étapes, tu configureras et lieras ton domaine à ton hébergement web. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂


<InlineVoucher />