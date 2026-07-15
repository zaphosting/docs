---
id: palworld-equipment-durability-rate
title: "Palworld : Taux de Durabilité de l’Équipement"
description: "Apprenez à modifier la durabilité de l’équipement et ajuster le taux de durabilité sur votre serveur Palworld en éditant la bonne valeur de configuration. -> En savoir plus maintenant"
sidebar_label: "Palworld : Taux de Durabilité de l’Équipement"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans Palworld, le taux de durabilité de l’équipement contrôle la vitesse à laquelle vos outils, armes et armures perdent de la durabilité lors de leur utilisation. Dans ce guide, vous apprendrez à modifier manuellement le paramètre `EquipmentDurabilityDamageRate` dans la configuration de votre serveur Palworld ZAP-Hosting et à appliquer correctement ce changement.



## Préparation

Avant de commencer, assurez-vous d’avoir accès à l’administration de votre serveur de jeux Palworld dans l’interface web ZAP-Hosting. Vous devez également avoir la permission d’éditer les fichiers de configuration de votre serveur sous **Configs**.

:::info Configuration manuelle requise
Ce paramètre doit être modifié manuellement dans le fichier de configuration Palworld. Il n’existe pas de commande spécifique à exécuter en jeu pour ce changement.
:::

## Comprendre le paramètre de durabilité

Palworld stocke de nombreux paramètres de gameplay dans le fichier de configuration `PalWorldSettings.ini`. Le paramètre pertinent pour la durabilité de l’équipement est :

- `EquipmentDurabilityDamageRate`

Cette valeur agit comme un multiplicateur pour la perte de durabilité :

| Clé de config | Description | Valeur par défaut |
| --- | --- | --- |
| `EquipmentDurabilityDamageRate` | Contrôle la vitesse de perte de durabilité de l’équipement | `1.000000` |

Des valeurs plus basses réduisent la perte de durabilité, ce qui signifie que votre équipement dure plus longtemps. Une valeur de `0.000000` désactive complètement la perte de durabilité pour l’équipement.

:::note Ce que ce paramètre affecte
Ce paramètre modifie le taux de perte de durabilité pour l’équipement tel que les outils, armes et armures. Il n’augmente pas les dégâts des objets, la vitesse de réparation ou la qualité des objets.
:::

## Ouvrir le fichier de configuration Palworld

Pour modifier ce paramètre, vous devez éditer le fichier principal de configuration du serveur Palworld depuis l’administration de votre serveur de jeux ZAP-Hosting.

### Trouver le fichier dans l’interface ZAP-Hosting

1. Connectez-vous au site ZAP-Hosting.
2. Ouvrez l’administration de votre serveur de jeux **Palworld**.
3. Allez dans **Configs**.
4. Ouvrez le fichier `PalWorldSettings.ini`.

C’est dans ce fichier que sont stockées les valeurs de gameplay de Palworld telles que la durabilité, l’endurance, les dégâts et d’autres paramètres du monde.

## Modifier le taux de durabilité de l’équipement

Une fois que vous avez ouvert `PalWorldSettings.ini`, cherchez la ligne `OptionSettings`. Palworld stocke généralement les paramètres de gameplay sous forme d’entrées séparées par des virgules dans cette section.

### Ajouter ou modifier l’entrée de config

Vous devez vous assurer que l’entrée suivante existe dans `OptionSettings` :

```ini
EquipmentDurabilityDamageRate=1.000000
```

Si la clé est déjà présente, remplacez sa valeur actuelle par celle que vous préférez. Si elle est absente, ajoutez-la dans le bloc `OptionSettings=(...)` existant.

### Valeurs d’exemple

Vous pouvez utiliser les valeurs suivantes selon le résultat souhaité :

| Valeur | Effet |
| --- | --- |
| `1.000000` | Perte de durabilité par défaut |
| `0.500000` | L’équipement dure environ deux fois plus longtemps |
| `0.250000` | L’équipement dure environ quatre fois plus longtemps |
| `0.000000` | L’équipement devient indestructible |

### Exemple de snippet de configuration

Le contenu exact de votre ligne `OptionSettings` peut varier selon la configuration de votre serveur, mais le paramètre de durabilité doit apparaître dans la même liste séparée par des virgules, par exemple :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,EquipmentDurabilityDamageRate=0.500000)
```

:::caution Conserver le format existant
Ne supprimez pas d’autres valeurs dans la ligne `OptionSettings` lors de l’édition du fichier. Palworld attend que ces paramètres restent dans le format correct séparé par des virgules.
:::

## Enregistrer et appliquer les modifications

Après avoir édité le fichier de configuration, enregistrez vos modifications dans l’interface ZAP-Hosting.

### Redémarrer le serveur

Pour appliquer le nouveau paramètre de durabilité, redémarrez votre serveur Palworld depuis l’administration du serveur de jeux.

Sans redémarrage, la configuration mise à jour ne sera généralement pas prise en compte par le serveur.

| Action | Requis |
| --- | --- |
| Enregistrer `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Exécuter une commande en jeu | Non |
| Réinstaller le serveur | Non |

:::tip Testez d’abord avec un petit ajustement
Si vous ne savez pas quelle valeur de durabilité correspond à votre style de jeu, commencez par `0.500000`. Cela offre une amélioration notable de la durabilité sans désactiver complètement la mécanique.
:::

## Dépannage

Si le nouveau comportement de durabilité de l’équipement ne s’applique pas après le redémarrage, vérifiez les points suivants.

### Vérifier la clé de config

Assurez-vous que la clé est écrite exactement comme suit :

```ini
EquipmentDurabilityDamageRate
```

Les clés de configuration Palworld sont sensibles à la casse pour une administration fiable, donc copiez le nom exactement comme indiqué.

### Vérifier la position dans `OptionSettings`

La valeur doit être à l’intérieur de la section `OptionSettings=(...)` dans `PalWorldSettings.ini`. Si elle est placée en dehors de ce bloc, le serveur peut l’ignorer.

### Confirmer que le fichier a été enregistré

Après l’édition dans **Configs**, vérifiez que vos modifications sont toujours présentes en rouvrant `PalWorldSettings.ini`. Sinon, le fichier n’a peut-être pas été enregistré correctement.

### Redémarrer à nouveau si nécessaire

Si des joueurs étaient connectés pendant la modification ou si le serveur n’a pas redémarré proprement, effectuez un redémarrage complet depuis le panneau d’administration du serveur.

## Conclusion

Félicitations, vous avez modifié avec succès le taux de durabilité de l’équipement sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂