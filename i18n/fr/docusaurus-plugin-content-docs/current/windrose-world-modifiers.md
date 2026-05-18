---
id: windrose-world-modifiers
title: "Windrose : Modificateurs du Monde"
description: "Configurez les modificateurs du monde Windrose avec une référence complète des paramètres float, des réglages de combat et un exemple de paramètres d’échelle coop -> En savoir plus maintenant"
sidebar_label: Modificateurs du monde
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les modificateurs personnalisés du monde Windrose vous permettent d’ajuster en détail le combat, le combat naval, l’exploration, les quêtes et l’échelle coopérative. Dans ce guide, vous apprendrez à modifier le fichier `WorldDescription.json`, comprendre chaque paramètre et appliquer des réglages personnalisés à votre serveur de jeux Windrose.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, assurez-vous d’avoir :

- Un serveur de jeux Windrose actif chez ZAP-Hosting
- L’accès à la gestion du serveur de jeux
- Votre serveur arrêté avant de modifier les fichiers
- L’accès à la section **Configs** ou **Gestionnaire de fichiers** dans la gestion du serveur de jeux

:::info Emplacement du fichier de configuration
Les modificateurs personnalisés du monde sont stockés dans le fichier `WorldDescription.json` sous le bloc `WorldSettings`.
:::

:::caution Arrêtez le serveur avant tout
Vous devez toujours arrêter votre serveur avant de modifier `WorldDescription.json`. Cela évite la corruption du fichier ou l’écrasement des modifications lors du démarrage ou des sauvegardes automatiques.
:::

## Comprendre les modificateurs du monde

Chaque réglage personnalisé est défini individuellement dans `WorldDescription.json` sous `WorldSettings`. Le jeu sépare les valeurs par type :

- `float` pour les multiplicateurs numériques comme la santé ou les dégâts
- `bool` pour les options vrai ou faux
- `tag` pour les valeurs de difficulté nommées comme la difficulté de combat

Cette structure est importante car chaque paramètre doit être placé dans la bonne section. Si vous placez une valeur `float` dans `bool`, ou utilisez un tag invalide, le réglage peut ne pas fonctionner comme prévu.

:::note Types de paramètres
Si vous ne connaissez pas le terme *paramètre*, cela signifie simplement une valeur configurable utilisée par le jeu. Dans ce guide, chaque paramètre contrôle une partie de la difficulté du monde ou du comportement du gameplay.
:::

## Ouvrir le fichier de configuration du monde

Pour appliquer des modificateurs personnalisés, vous devez modifier le bon fichier du monde.

1. Arrêtez votre serveur Windrose dans la gestion du serveur de jeux.
2. Ouvrez le **Gestionnaire de fichiers**.
3. Naviguez vers le chemin suivant :

```text
R5/Saved/SaveProfiles/Default/RocksDB/<game_version>/Worlds/<world_id>/WorldDescription.json
```

Remplacez les variables comme suit :

| Variable | Signification |
| --- | --- |
| `[your_game_version]` | Le dossier de la version actuelle de votre jeu Windrose |
| `[your_world_id]` | L’ID du monde que vous souhaitez modifier |

:::tip Trouver le bon monde
Si vous avez plusieurs mondes, assurez-vous de modifier le fichier `WorldDescription.json` dans le dossier `[your_world_id]` correct. Sinon, vos modifications affecteront une autre sauvegarde.
:::

## Modifier le bloc WorldSettings

Dans `WorldDescription.json`, localisez le bloc `WorldSettings`. Ajoutez ou ajustez vos valeurs personnalisées ici.

Utilisez la structure suivante :

```json
"WorldSettings": {
  "bool": {
    "CoopQuests": true,
    "EasyExplore": false
  },
  "float": {
    "MobHealthMultiplier": 1.5,
    "MobDamageMultiplier": 1.2,
    "ShipHealthMultiplier": 1.0,
    "ShipDamageMultiplier": 1.0,
    "BoardingDifficultyMultiplier": 1.0,
    "Coop_StatsCorrectionModifier": 1.0,
    "Coop_ShipStatsCorrectionModifier": 0.5
  },
  "tag": {
    "CombatDifficulty": {
      "TagName": "WDS.Parameter.CombatDifficulty.Hard"
    }
  }
}
```

Après avoir sauvegardé le fichier, redémarrez votre serveur.

:::info Comportement des presets
Si vous définissez une valeur personnalisée manuellement, `WorldPresetType` passe automatiquement à `Custom` au prochain démarrage du serveur. Si vous souhaitez utiliser un preset propre au lieu de valeurs personnalisées, utilisez la configuration de preset appropriée plutôt que de mélanger les deux méthodes.
:::

## Référence complète des paramètres

Les tableaux suivants fournissent une référence complète pour chaque modificateur personnalisé disponible.

### Paramètres de combat

| Paramètre | Section | Par défaut | Plage | Effet |
| --- | --- | --- | --- | --- |
| `MobHealthMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Multiplicateur de santé des ennemis |
| `MobDamageMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Multiplicateur de dégâts des ennemis |
| `CombatDifficulty` | `tag` | `Normal` | `Easy`, `Normal`, `Hard` | Agressivité des boss et difficulté des rencontres |

`CombatDifficulty` doit être écrit comme une valeur tag, par exemple :

```json
"tag": {
  "CombatDifficulty": {
    "TagName": "WDS.Parameter.CombatDifficulty.Hard"
  }
}
```

Valeurs disponibles :

| Difficulté | Valeur TagName |
| --- | --- |
| Easy | `WDS.Parameter.CombatDifficulty.Easy` |
| Normal | `WDS.Parameter.CombatDifficulty.Normal` |
| Hard | `WDS.Parameter.CombatDifficulty.Hard` |

### Paramètres de combat naval

| Paramètre | Section | Par défaut | Plage | Effet |
| --- | --- | --- | --- | --- |
| `ShipHealthMultiplier` | `float` | `1.0` | `0.4 - 5.0` | Multiplicateur de santé des navires ennemis |
| `ShipDamageMultiplier` | `float` | `1.0` | `0.2 - 2.5` | Multiplicateur de dégâts des navires ennemis |
| `BoardingDifficultyMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Nombre de marins ennemis à vaincre lors d’un abordage |

Ces réglages sont utiles si vous voulez rendre les batailles navales plus faciles pour les petites équipes ou beaucoup plus exigeantes pour les groupes expérimentés.

### Paramètres d’échelle coopérative

| Paramètre | Section | Par défaut | Plage | Effet |
| --- | --- | --- | --- | --- |
| `Coop_StatsCorrectionModifier` | `float` | `1.0` | `0.0 - 2.0` | Ajuste la santé ennemie et la perte de posture selon le nombre de joueurs |
| `Coop_ShipStatsCorrectionModifier` | `float` | `0.0` | `0.0 - 2.0` | Ajuste la santé des navires ennemis selon le nombre de joueurs |

Ces valeurs sont particulièrement utiles pour les grandes équipes. Elles permettent de garder un combat équilibré à mesure que plus de joueurs rejoignent le monde.

### Paramètres d’exploration

| Paramètre | Section | Par défaut | Effet |
| --- | --- | --- | --- |
| `EasyExplore` | `bool` | `false` | Désactive les marqueurs de carte pour les points d’intérêt |

:::note Nom EasyExplore
Malgré son nom, activer `EasyExplore` à `true` rend l’exploration plus difficile car cela désactive les marqueurs de carte pour les points d’intérêt. C’est en fait un mode d’exploration immersive.
:::

### Paramètres de quête

| Paramètre | Section | Par défaut | Effet |
| --- | --- | --- | --- |
| `CoopQuests` | `bool` | `true` | Quand un joueur termine une quête coop, elle se valide automatiquement pour tous les autres joueurs qui l’ont active |

Ce réglage est utile si vous voulez simplifier la progression en groupe ou exiger que chaque joueur termine les objectifs individuellement.

## Référence d’échelle des multiplicateurs

Si vous ne savez pas comment une valeur `float` modifie le gameplay, utilisez cette référence rapide.

| Valeur | Effet |
| --- | --- |
| `0.5` | `50%` - nettement plus facile |
| `1.0` | `100%` - par défaut ou normal |
| `2.0` | `200%` - nettement plus difficile |
| `5.0` | `500%` - extrêmement difficile |

Ce tableau est un exemple pratique pour équilibrer votre monde. Les valeurs plus basses réduisent la difficulté, tandis que les valeurs plus élevées l’augmentent fortement.

:::tip Commencez par de petits ajustements
Si vous testez des changements d’équilibre, augmentez ou diminuez un paramètre à la fois. Cela facilite la compréhension de l’impact de chaque réglage sur le gameplay.
:::

## Exemples de configurations

Les exemples suivants peuvent vous aider à construire votre propre configuration personnalisée.

### Équipage décontracté

Cette configuration réduit la pression du combat, garde le partage des quêtes activé et facilite les abordages.

```json
"float": {
  "MobHealthMultiplier": 0.6,
  "MobDamageMultiplier": 0.6,
  "BoardingDifficultyMultiplier": 0.5
}
```

### Mers hardcore

Cette configuration augmente la difficulté terrestre et navale, désactive la validation partagée des quêtes et active l’exploration immersive.

```json
"bool": {
  "CoopQuests": false,
  "EasyExplore": true
},
"float": {
  "MobHealthMultiplier": 2.0,
  "MobDamageMultiplier": 1.5,
  "ShipHealthMultiplier": 2.0,
  "ShipDamageMultiplier": 1.5
}
```

### Échelle pour grand groupe

Cette configuration est utile pour les grands groupes, par exemple 8 joueurs, où l’échelle par défaut peut sembler trop facile.

```json
"float": {
  "MobHealthMultiplier": 1.0,
  "MobDamageMultiplier": 1.0,
  "Coop_StatsCorrectionModifier": 2.0,
  "Coop_ShipStatsCorrectionModifier": 2.0
}
```

## Bonnes pratiques pour modifier les valeurs

### Utilisez des plages valides

Chaque paramètre `float` supporte uniquement une plage définie. Rester dans la plage documentée évite des comportements inattendus.

| Paramètre | Minimum | Maximum |
| --- | --- | --- |
| `MobHealthMultiplier` | `0.2` | `5.0` |
| `MobDamageMultiplier` | `0.2` | `5.0` |
| `ShipHealthMultiplier` | `0.4` | `5.0` |
| `ShipDamageMultiplier` | `0.2` | `2.5` |
| `BoardingDifficultyMultiplier` | `0.2` | `5.0` |
| `Coop_StatsCorrectionModifier` | `0.0` | `2.0` |
| `Coop_ShipStatsCorrectionModifier` | `0.0` | `2.0` |

:::caution Valeurs invalides
Si vous utilisez des valeurs non supportées, un format incorrect ou placez un paramètre dans la mauvaise section, le jeu peut ignorer le réglage ou ne pas l’appliquer correctement.
:::

### Respectez la syntaxe JSON

Quand vous modifiez `WorldDescription.json`, assurez-vous que :

- Toutes les clés restent entre guillemets doubles
- Les virgules sont placées correctement
- Les accolades `{}` et crochets sont bien fermés
- `true` et `false` sont en minuscules
- Les valeurs décimales utilisent un point, par exemple `1.5`

Un fichier JSON cassé peut empêcher le chargement correct de la configuration du monde.

### Redémarrez après sauvegarde

Après avoir fini la modification :

1. Sauvegardez `WorldDescription.json`
2. Redémarrez votre serveur
3. Rejoignez le serveur et testez les changements en jeu

Certaines valeurs sont plus faciles à vérifier en combat, abordage ou sessions coop qu’immédiatement au login.

## Gestion des configs dans la gestion du serveur de jeux

Vous pouvez gérer les fichiers de configuration Windrose directement dans la gestion du serveur de jeux ZAP-Hosting via les options de config et gestionnaire de fichiers disponibles. C’est la méthode recommandée pour modifier `WorldDescription.json` si vous ne souhaitez pas utiliser d’outils externes.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Si l’entrée de config exacte n’est pas listée directement, utilisez le **Gestionnaire de fichiers** et naviguez manuellement vers le chemin du fichier du monde indiqué plus haut dans ce guide.

:::info Gestion des configs
Selon l’interface actuelle du serveur de jeux et votre configuration de monde existante, la liste exacte des fichiers peut varier. Si une entrée de config spécifique n’est pas visible, utilisez directement le chemin du fichier au lieu de supposer une fonctionnalité manquante.
:::

## Dépannage

### Les modifications ne s’appliquent pas

Si vos modificateurs ne sont pas actifs après redémarrage, vérifiez :

- Que vous avez modifié le bon `WorldDescription.json`
- Que le serveur était arrêté avant la modification
- Que la syntaxe JSON est valide
- Que chaque paramètre est dans la bonne section : `float`, `bool` ou `tag`
- Que le serveur a bien été redémarré après sauvegarde

### La difficulté semble inchangée

Certains modificateurs sont plus visibles que d’autres. Par exemple :

- `MobHealthMultiplier` est le plus facile à remarquer en combat classique
- `ShipHealthMultiplier` est visible uniquement en combat naval
- `Coop_StatsCorrectionModifier` est le plus visible avec plusieurs joueurs
- `EasyExplore` affecte uniquement le comportement d’exploration et les marqueurs de carte

### Le preset est passé en Custom

C’est un comportement normal dès que vous définissez manuellement des valeurs personnalisées. Le jeu bascule automatiquement le type de preset du monde en `Custom` au prochain démarrage.

## Conclusion

Félicitations, vous avez configuré avec succès les modificateurs du monde Windrose. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂