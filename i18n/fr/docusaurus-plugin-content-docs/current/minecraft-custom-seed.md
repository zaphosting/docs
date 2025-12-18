---
id: minecraft-custom-seed
title: "Minecraft : Seed personnalisée pour le monde"
description: "Découvrez comment créer des mondes Minecraft uniques en définissant des seeds personnalisées pour de nouvelles aventures et la génération du monde → En savoir plus maintenant"
sidebar_label: Seed personnalisée
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une seed dans Minecraft est un code spécifique composé de chiffres ou de lettres qui détermine comment votre monde de jeu est généré. Elle façonne le terrain, les biomes, les structures et les ressources que vous découvrirez dans votre monde. Utiliser la même seed avec la même version du jeu et les mêmes paramètres crée toujours la même configuration de monde, ce qui facilite le partage de mondes uniques avec d’autres.

Gardez en tête que vous ne pouvez pas changer la seed d’un monde existant. La seed n’affecte que la génération d’un nouveau monde. Pour utiliser une seed différente, vous devez toujours créer un nouveau monde après l’avoir définie.

<InlineVoucher />

## Configuration

Pour configurer une seed personnalisée, commencez par arrêter votre serveur pour éviter tout conflit de données. Ensuite, ouvrez votre fichier `server.properties`. Vous pouvez trouver ce fichier de configuration dans le panneau d’administration de votre serveur sous **Configs**.

![img](https://screensaver01.zap-hosting.com/index.php/s/XBKN9r3CAweP9RG/download)

Cherchez la ligne qui commence par `level-seed=`. C’est ici que vous pouvez entrer la valeur de seed souhaitée. Par exemple :

```
level-seed=12345
```

Remplacez `12345` par votre propre code seed. Cela peut être n’importe quel nombre ou chaîne de texte que vous voulez. Une fois votre seed personnalisée définie, vous devez générer un nouveau monde pour qu’elle prenne effet.

La façon la plus simple de faire cela est de changer le `level-name` dans les **Paramètres** par un nouveau nom non utilisé, par exemple `world1`. Cela garantit que Minecraft crée un nouveau dossier de monde avec votre nouvelle seed.

Si vous voulez en savoir plus sur comment recréer un monde existant, vous pouvez consulter notre [guide Recréer un Monde](minecraft-worlds.md) pour des instructions détaillées. Enfin, redémarrez votre serveur. Minecraft générera maintenant un nouveau monde avec votre seed personnalisée.

## Conclusion

Avec ces étapes, vous avez réussi à définir une nouvelle seed pour votre nouveau monde. Redémarrez votre serveur, explorez votre monde fraîchement généré et profitez de votre propre aventure Minecraft unique. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />