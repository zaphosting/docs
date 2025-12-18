---
id: dedicated-raid
title: "Serveur dédié : Configuration RAID"
description: "Découvrez comment les configurations RAID améliorent les performances et la redondance des données pour les serveurs dédiés avec SSD → En savoir plus maintenant"
sidebar_label: Configurer RAID
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RAID (Redundant Array of Independent Disks) est une technologie qui combine plusieurs disques durs en un seul lecteur logique afin d’obtenir une redondance des données et/ou une augmentation des performances. Il existe différents niveaux de RAID qui offrent diverses combinaisons de répartition des données et de tolérance aux pannes.

## Types de RAID disponibles
Nos serveurs dédiés proposent actuellement 2 baies SSD, ce qui signifie qu’il y a deux configurations possibles pour le RAID. La première est le RAID0, utilisé pour combiner les volumes en un seul grand volume, et le RAID1, utilisé pour dupliquer les volumes et assurer la redondance des données. Nous allons détailler les deux dans les sections suivantes.

:::info
Le RAID0 offre des vitesses de lecture et d’écriture légèrement plus rapides, grâce à la présence de deux disques.
:::

### RAID0
Dans cette configuration RAID, tous les volumes existants sont combinés en un seul grand volume, par exemple, à partir de 2 SSD de 1 To chacun. Une partition de 2 To serait créée et pourrait être utilisée entièrement.

Il n’y a aucune redondance des données, donc en cas de panne technique, la perte de données est souvent inévitable car les données sont écrites dans différents secteurs.

Si vous stockez des données sensibles sur votre système, le RAID0 ne doit pas être utilisé ou alors des sauvegardes régulières du système doivent être effectuées.

:::info
Si votre serveur dédié ne possède qu’un seul SSD, il s’agit automatiquement d’un RAID0.
:::

### RAID1
Cette configuration est très différente du RAID0, ici vos données sont redondantes, ce qui signifie que tout ce que vous stockez sur votre serveur est dupliqué.
Elles sont donc miroir sur les deux SSD et seraient disponibles même en cas de défaillance d’un disque, donc vos données sont sécurisées avec 1 SSD.

En cas de panne technique, seul le SSD affecté devra être remplacé et votre serveur reconstruira le RAID, c’est-à-dire qu’il dupliquera à nouveau les données.
Cette configuration est fortement recommandée pour les données sensibles, mais elle ne remplace pas les sauvegardes.

:::info
Des sauvegardes régulières de toutes les données importantes sont indispensables !
:::

## L’assistant de configuration

Au démarrage de votre serveur, l’outil de configuration RAID doit être lancé. Cela peut se faire en appuyant sur `F8` à l’étape de démarrage nécessaire.

![](https://screensaver01.zap-hosting.com/index.php/s/cYzj7L6dL5g7255/preview)

Appuyez sur F8 à ce moment pour ouvrir l’outil de configuration RAID

***

![](https://screensaver01.zap-hosting.com/index.php/s/L4Lw8oGjxbDR96N/preview)

Après quelques secondes, ce résumé de configuration apparaîtra.

***

Plusieurs options de menu sont maintenant disponibles :

* Créer un lecteur logique  
Permet de créer un nouveau volume.

* Voir le lecteur logique  
Affiche la configuration RAID actuelle.

***
RAID0

![](https://screensaver01.zap-hosting.com/index.php/s/6mtbrFXNPeqHnYi/preview)

RAID1

![](https://screensaver01.zap-hosting.com/index.php/s/749Kxjq6Mkzdc69/preview)
***

* Supprimer le lecteur logique  
Vous pouvez supprimer la configuration RAID actuelle, par exemple pour en créer une nouvelle.

* Sélectionner le volume de démarrage  
Vous pouvez démarrer depuis un autre support de stockage, ce qui n’est pas nécessaire dans notre cas.

* Gérer les clés de licence  
Aucun réglage n’est nécessaire ici, la licence est déjà préconfigurée.

* Paramètres du cache  
L’option cache peut être ajustée pour augmenter un peu les vitesses de lecture/écriture des SSD.  
En gros, les derniers blocs de données sont mis en cache à chaque écriture pour des raisons de sécurité, par exemple en cas de coupure de courant.  
Cela entraîne un léger impact sur les performances.

### Créer un nouveau RAID

Tout d’abord, vérifiez qu’il n’y a plus de volume, ouvrez `Supprimer le lecteur logique`

![](https://screensaver01.zap-hosting.com/index.php/s/EbPtmgFyZ3oN6jb/preview)

Appuyez sur `F8` pour supprimer le RAID existant.

***

![](https://screensaver01.zap-hosting.com/index.php/s/qmtAciacCLKJ9QG/preview)

Confirmez la suppression en appuyant sur `F3`.

***

Après la suppression réussie du RAID, ouvrez `Créer un lecteur logique`

![](https://screensaver01.zap-hosting.com/index.php/s/SjP6ZkcWXCKc4kT/preview)

Vous voyez ici tous vos SSD et pouvez choisir la configuration RAID.  
Bien sûr, toutes ces configurations RAID ne peuvent pas être mises en œuvre dans la configuration actuelle.

Dans notre exemple, nous choisissons RAID0 ou RAID1.

:::info
Vous pouvez naviguer entre les menus en appuyant sur `TAB`
:::

Une fois votre choix de configuration RAID fait, validez en appuyant sur `Entrée`.

:::info
Vous pouvez fermer l’assistant de configuration en appuyant sur `ESC`
:::

### Sélectionner le volume de démarrage

Si vous avez modifié votre RAID, il est nécessaire de sélectionner le volume de démarrage.  
Cela se fait facilement dans **Sélectionner le volume de démarrage**, choisissez le lecteur logique que vous avez créé, sinon votre serveur risque de rester bloqué en boucle de démarrage.

**Sélectionner le volume de démarrage**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2GDEYfjnkmaKF9F/preview)
***
**Stockage directement attaché**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2468ZCGkr2ninxM/preview)
***
**Lecteur logique 01**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tN6pRiJbZexbzmg/preview)
***
**Appuyez sur `F8` pour enregistrer comme volume de démarrage**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tqGFzGZGgeo4JjZ/preview)

Enfin, vous pouvez appuyer sur `F8` pour redémarrer directement votre système ou revenir au menu principal en appuyant sur `Entrée`.  
Notez que le volume de démarrage doit être défini **à chaque fois** que vous modifiez votre configuration RAID.

## Conclusion

Félicitations, vous avez configuré avec succès le RAID sur votre serveur dédié. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂