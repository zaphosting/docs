---
id: fivem-useprofiler
title: "FiveM : Utiliser le Profiler pour identifier les problèmes du serveur"
description: "Découvrez comment analyser les performances du serveur et identifier les problèmes de ressources avec le Profiler FiveM pour un gameplay plus fluide → En savoir plus maintenant"
sidebar_label: Utiliser le Profiler
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

Le Profiler est un outil de jeu super utile et facile à utiliser pour mesurer les performances du serveur. Il permet de vérifier les codes et threads qui peuvent causer des problèmes de performance. Cela peut par exemple venir de ressources mal développées ou similaires. Le profiler est directement intégré dans le logiciel du serveur.

<InlineVoucher />

## Utilisation du Profiler
La procédure pour utiliser le Profiler FiveM est assez simple. Pour cela, exécutez les commandes `profiler record 100` et `profiler view` dans la console live. Un profil avec 100 frames sera créé, auquel vous pourrez accéder via le lien fourni dans la console. ![img](https://screensaver01.zap-hosting.com/index.php/s/ZGFEaFFmgyKn8PK/preview)




## Identifier les problèmes
Le profiler contient des infos sur les différentes activités (ticks) qu’il faut examiner de plus près. Sélectionnez une zone de tick et zoomez dessus. En fonction du tick, vous pouvez voir quels processus ont été exécutés et combien de temps ils ont pris.

![](https://screensaver01.zap-hosting.com/index.php/s/6BJozz7abRSHSj5/preview)

De cette façon, vous pouvez aussi repérer quelles ressources prennent beaucoup de temps. Les ressources qui consomment plus de 6 ms au total peuvent causer des problèmes potentiels.
:::



## Conclusion

Félicitations, vous avez créé avec succès un profil FiveM qui vous permet d’identifier les problèmes potentiels. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />