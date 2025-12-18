---
id: minecraft-timings-report
title: "Minecraft : Identifier les problèmes du serveur avec le rapport timings"
description: "Découvrez comment analyser les problèmes de performance du serveur grâce aux rapports timings pour identifier les lags et optimiser votre serveur → En savoir plus maintenant"
sidebar_label: Rapport Timings
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Explication

### Qu’est-ce qu’un rapport timings ?

Les rapports timings sont très similaires au gestionnaire des tâches de votre ordinateur, qui vous permet de trouver le problème, surtout en cas de lags. Un rapport timings enregistre toutes les activités du serveur et les affiche visuellement.

## Rapport timings

## Créer un rapport timings

Selon le logiciel serveur, le rapport timings se crée différemment. En gros, vous devez d’abord lancer l’enregistrement avec la commande suivante (sauf pour **Paper Spigot** (si les réglages n’ont pas été modifiés)

`/timings start`

Pendant l’enregistrement, utilisez le serveur comme d’habitude, afin que les problèmes respectifs soient enregistrés et puissent être analysés plus en détail ensuite. La durée de l’enregistrement doit durer **min. 10 minutes** ou plus si possible.

## Exporter le rapport timings

Pour créer et exporter le rapport Timings, vous devez utiliser la commande suivante :

`/timings paste`

Après quelques secondes, un message apparaît indiquant que l’export a réussi. Le rapport Timings peut être ouvert en cliquant sur le lien.

![](https://screensaver01.zap-hosting.com/index.php/s/wpmB2jr2XCibHtY/preview)

## Analyse

### ↔️ Affiner les valeurs

Une fois le rapport Timings exporté et ouvert comme décrit ci-dessus, une fenêtre similaire à celle-ci devrait apparaître :

![](https://screensaver01.zap-hosting.com/index.php/s/9xMMtpr2jePk7B5/preview)

Commencez par jeter un œil plus précis au graphique pour pouvoir vérifier les valeurs approximatives des points d’enregistrement individuels en passant la souris dessus.

Pour obtenir les valeurs les plus précises possibles, qui se réfèrent à un problème potentiel sur le serveur, la période problématique doit d’abord être affinée avec les curseurs en dessous, comme montré dans le graphique :

![](https://screensaver01.zap-hosting.com/index.php/s/yfkbfqJdcQwbsiB/preview)

### Examiner les valeurs du serveur

Il y a 3 colonnes au total. Comme vous pouvez le voir sur la capture d’écran ci-dessous, la case numéro 1 montre quel pourcentage d’un tick (20 ticks = une seconde) le processus principal utilise. Vous pouvez aussi voir combien de fois ce processus a été exécuté pendant l’enregistrement.

Dans la case numéro 2, vous voyez des valeurs plus précises en millisecondes, mais attention, le temps ne doit jamais dépasser 50 ms. Si c’est le cas, cela provoquerait un effet domino et tous les processus suivants s’accumuleraient un peu, ce qui finirait par causer des lags car le serveur ne peut gérer les processus qu’avec du retard.

:::info
Le **Full Server Tick** peut généralement être ignoré, car les valeurs sont toujours dans la zone rouge, mais ce n’est pas un gros problème.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/gLkFeTek6yR5tME/preview)

Dans tous les cas, vous devriez toujours examiner de plus près les valeurs mises en évidence en couleur.

Dans cet exemple, on regarde le processus pour toutes les entités (animaux, monstres, objets, etc.), car les valeurs sont déjà affichées en orange. Vous pouvez en déduire directement qu’il y a un problème avec trop d’entités sur le serveur.
Peut-être qu’il y a des fermes à mobs sur le serveur, ou des masses de nouveaux mobs sont générées. Si vous avez des problèmes avec trop d’entités, vous pouvez réduire le taux d’apparition dans les réglages ou installer des plugins qui limitent le nombre d’entités et les suppriment automatiquement si besoin.

Comme décrit plus haut, la liste montre toujours le processus principal. En cliquant sur un processus, on peut examiner plus en détail les processus individuels pour chaque type d’entité et les analyser. Faites aussi attention aux colonnes 2 et 3 comme mentionné précédemment.

Vous remarquerez que **Minecraft::tickEntity - nms.EntitySkeleton** a exécuté beaucoup de processus. Là encore, les fermes à mobs peuvent être la cause.

![](https://screensaver01.zap-hosting.com/index.php/s/fZzeemocpsNfxXL/preview)

Un autre processus avec des valeurs déjà en orange concerne les blocs en attente. Les blocs en attente peuvent être particulièrement inefficaces car le serveur doit vérifier l’état de chaque bloc en attente à chaque tick. Par exemple, cela peut être du sable, du gravier qui tombent, ou même de la lave et de l’eau.

Si beaucoup d’eau est utilisée, par exemple sur une grande ferme, cela peut causer pas mal de problèmes. Le problème peut aussi survenir si de nouveaux chunks sont générés et que des sources d’eau apparaissent dans ces chunks en montagne. Le serveur doit recalculer l’état à chaque fois pour que l’eau coule bien. En plus, le serveur doit créer et charger les chunks, ce qui est aussi un processus très intense.

![](https://screensaver01.zap-hosting.com/index.php/s/GWz98fTiknCkWZW)

Toutes les autres investigations peuvent aussi être faites de la même manière, car les étapes sont exactement les mêmes pour n’importe quel autre processus. Si vous avez encore besoin d’aide pour l’analyse, on est toujours là pour vous !

### Vérifier les plugins

Parfois, les problèmes viennent aussi des plugins. Pour déterminer si un plugin est possiblement la cause, vous pouvez temporairement retirer les plugins installés du serveur et vérifier à nouveau l’état actuel du système.

Si un problème vient des plugins, cela peut aussi être analysé dans la section "Plugins". Les valeurs sont aussi listées en trois colonnes, avec exactement la même structure que les valeurs normales du serveur ci-dessus. La différence, c’est qu’il n’y a plus de processus principal affiché. À la place, c’est le plugin lui-même qui est montré. Mais on peut toujours vérifier tous les processus en cliquant dessus et analyser les valeurs plus en détail.

![](https://screensaver01.zap-hosting.com/index.php/s/CzitKykWC2dzExD)

<InlineVoucher />