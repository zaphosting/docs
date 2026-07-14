---
id: palworld-change-day-night-speed
title: "Palworld : Modifier la vitesse du cycle jour/nuit"
description: "Apprenez à modifier la vitesse du cycle jour/nuit dans Palworld en éditant les paramètres du cycle jour sur votre serveur. -> En savoir plus maintenant"
sidebar_label: Palworld : Modifier la vitesse du cycle jour/nuit
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet d’ajuster la vitesse à laquelle le cycle jour/nuit s’écoule sur votre serveur. Dans ce guide, vous apprendrez à modifier cette vitesse en éditant le bon fichier de configuration dans l’administration de votre serveur de jeux ZAP-Hosting et à appliquer correctement les changements.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld via l’interface web ZAP-Hosting et la permission d’éditer les fichiers de configuration du serveur.

:::info Configuration manuelle requise
Cette configuration se fait manuellement via les fichiers de configuration du serveur. Vous devez modifier directement les paramètres Palworld au lieu d’utiliser des commandes automatisées en jeu.
:::

## Localiser le fichier de configuration

Pour modifier la vitesse du jour et de la nuit, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’administration de votre serveur de jeux ZAP-Hosting, vous pouvez accéder à ce fichier via la section **Configs**. Ouvrez votre serveur Palworld dans l’interface web et rendez-vous dans la gestion des fichiers de configuration.

Le fichier concerné est :

```ini
PalWorldSettings.ini
```

:::note Emplacement du fichier de configuration
Selon le template du serveur de jeux et la disposition du panneau, le fichier est accessible via la zone **Configs** dans l’administration ZAP-Hosting. Si le chemin complet interne est affiché dans votre interface, il s’agit généralement du fichier de paramètres du serveur Palworld utilisé pour la configuration du gameplay.
:::

## Modifier les paramètres de vitesse jour/nuit

Dans `PalWorldSettings.ini`, cherchez les entrées de configuration du gameplay concernant la vitesse du jour et de la nuit.

Vous devez ajuster les valeurs suivantes :

| Clé de config | Valeur par défaut | Description |
| --- | --- | --- |
| `DayTimeSpeedRate` | `1.000000` | Contrôle la vitesse à laquelle le jour passe |
| `NightTimeSpeedRate` | `1.000000` | Contrôle la vitesse à laquelle la nuit passe |

Des valeurs plus élevées accélèrent le temps, des valeurs plus basses le ralentissent.

### Exemple de configuration

Si vous voulez que le jour et la nuit passent plus vite, vous pouvez mettre des valeurs plus hautes comme ceci :

```ini
DayTimeSpeedRate=2.000000
NightTimeSpeedRate=2.000000
```

Si vous souhaitez un jour plus long mais une nuit plus rapide, vous pouvez utiliser des valeurs différentes, par exemple :

```ini
DayTimeSpeedRate=0.500000
NightTimeSpeedRate=2.000000
```

### Où placer les valeurs

Palworld stocke de nombreux paramètres de gameplay dans la section `OptionSettings` du fichier `PalWorldSettings.ini`. Vous devez modifier les entrées existantes `DayTimeSpeedRate` et `NightTimeSpeedRate` à cet endroit, plutôt que d’ajouter des clés en double ailleurs.

Une section typique ressemble à ceci :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

Après modification, cela peut ressembler à ceci :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=2.000000,NightTimeSpeedRate=1.500000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

:::caution Modifier les entrées existantes avec précaution
Veillez à ne changer que la valeur après `DayTimeSpeedRate=` et `NightTimeSpeedRate=`. Ne supprimez pas les virgules, crochets ou autres paramètres existants dans la ligne `OptionSettings`, car un formatage incorrect peut empêcher le serveur de charger correctement la configuration.
:::

## Sauvegarder et appliquer les modifications

Une fois les valeurs mises à jour dans `PalWorldSettings.ini`, sauvegardez le fichier dans l’éditeur de configuration ZAP-Hosting.

Après la sauvegarde, redémarrez votre serveur Palworld pour que les nouveaux paramètres du cycle jour/nuit soient pris en compte.

| Action | Requis |
| --- | --- |
| Sauvegarder `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Exécuter des commandes console supplémentaires | Non |

:::tip Redémarrage obligatoire
Les changements de configuration des paramètres du monde Palworld ne sont pas appliqués de manière fiable tant que le serveur n’a pas été redémarré. Redémarrez toujours le serveur après avoir modifié la vitesse du jour ou de la nuit.
:::

## Vérifier le nouveau cycle jour/nuit

Après le redémarrage, connectez-vous à votre serveur et observez la progression du temps en jeu.

Vous devriez maintenant remarquer que :

- le **jour** passe plus vite ou plus lentement selon `DayTimeSpeedRate`
- la **nuit** passe plus vite ou plus lentement selon `NightTimeSpeedRate`

Si la vitesse ne semble pas changer, rouvrez `PalWorldSettings.ini` et vérifiez que :

- les valeurs ont bien été sauvegardées
- le format de la ligne `OptionSettings` est toujours valide
- le serveur a bien été redémarré après la modification

## Référence de configuration

Utilisez ce tableau comme référence rapide si vous souhaitez modifier à nouveau la vitesse du jour plus tard.

| Paramètre | Exemple | Résultat |
| --- | --- | --- |
| `DayTimeSpeedRate=0.500000` | Jour plus lent | Le jour dure plus longtemps |
| `DayTimeSpeedRate=2.000000` | Jour plus rapide | Le jour passe plus vite |
| `NightTimeSpeedRate=0.500000` | Nuit plus lente | La nuit dure plus longtemps |
| `NightTimeSpeedRate=2.000000` | Nuit plus rapide | La nuit passe plus vite |

:::note Paramètres équilibrés
Pour une expérience de jeu plus naturelle, évitez les valeurs extrêmement élevées. Des changements très rapides du jour et de la nuit peuvent rendre la gestion de la ferme, l’exploration et la gestion de base plus difficiles à planifier.
:::

## Conclusion

Félicitations, vous avez réussi à modifier la vitesse du cycle jour/nuit sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂