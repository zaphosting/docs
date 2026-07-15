---
id: palworld-troubleshooting
title: "Palworld : Dépannage"
description: "Résolvez les problèmes courants des serveurs Palworld tels que les soucis de mise à jour Steam, les délais de connexion et les erreurs Steam sur votre serveur de jeux. -> En savoir plus maintenant"
sidebar_label: "Dépannage"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs dédiés Palworld peuvent parfois rencontrer des problèmes de mise à jour, de démarrage ou de connexion, notamment après une mise à jour Steam de Palworld ou lors de l’installation de mods tiers. Dans ce guide, vous apprendrez à identifier les problèmes courants, quels fichiers ou paramètres vérifier dans l’administration de votre serveur de jeux ZAP-Hosting, et quelles actions entreprendre pour rétablir un fonctionnement normal.



## Preparation

Avant de commencer le dépannage, assurez-vous d’avoir accès à l’administration de votre serveur de jeux Palworld et de pouvoir ouvrir la console serveur ainsi que la section `Configs`.

:::info Accès requis
Vous devez avoir accès à l’interface web ZAP-Hosting de votre serveur Palworld pour pouvoir arrêter, démarrer, réinstaller et modifier les fichiers de configuration si nécessaire.
:::

:::note À propos des fichiers de configuration
La plupart des problèmes abordés dans ce guide ne se résolvent pas uniquement en modifiant les paramètres de jeu. Cependant, si vous devez vérifier ou ajuster manuellement les paramètres du serveur Palworld, le fichier concerné se trouve généralement dans la section `Configs` de votre administration serveur.
:::

## Trouver le fichier de configuration pertinent

Pour les serveurs dédiés Palworld, les paramètres principaux du serveur sont généralement stockés dans ce fichier :

```ini
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Dans l’administration serveur ZAP-Hosting, vous pouvez généralement accéder à ce fichier via la section `Configs`.

### À quoi sert ce fichier

`PalWorldSettings.ini` contient la ligne principale `OptionSettings` avec des valeurs serveur telles que :

- nom du serveur
- mot de passe
- mot de passe admin
- limites de joueurs
- multiplicateurs de gameplay
- paramètres PvP et raids

Une structure typique ressemble à ceci :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="[your_server_name]",ServerDescription="[your_server_description]",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]")
```

:::caution Modifier la syntaxe avec précaution
Palworld utilise une seule structure `OptionSettings=(...)` pour de nombreux paramètres. Si vous supprimez par erreur une virgule, une guillemet ou un crochet, votre serveur risque de ne pas démarrer correctement.
:::

### Quand devez-vous le modifier

Vous ne devez modifier `PalWorldSettings.ini` que si :

- vous devez corriger un mot de passe serveur ou admin erroné
- vous souhaitez supprimer des valeurs invalides après une modification manuelle ratée
- vous testez si un problème de démarrage est causé par une entrée de configuration corrompue

Après avoir enregistré les modifications, redémarrez le serveur pour appliquer les nouveaux paramètres.

## Résoudre les erreurs de mise à jour

Un des problèmes les plus fréquents sur les serveurs Palworld est l’échec de mise à jour via Steam.

### Erreur : `app '2394010' state is 0x6 after update job`

Cette erreur indique généralement que les fichiers du jeu n’ont pas été mis à jour correctement via Steam.

### Comment corriger cette erreur

1. Arrêtez complètement votre serveur Palworld.
2. Ouvrez l’administration de votre serveur dans l’interface web ZAP-Hosting.
3. Allez dans la section où les actions de réinstallation ou de réparation sont disponibles.
4. Lancez une réinstallation ou une vérification d’intégrité des fichiers serveur.
5. Attendez la fin complète du processus.
6. Redémarrez le serveur.

:::info Pourquoi ça marche
La vérification des fichiers ou la réinstallation force le serveur à retélécharger les fichiers Steam Palworld manquants ou corrompus. C’est la solution la plus fiable pour l’erreur d’état `0x6`.
:::

### Faut-il modifier un fichier de config ?

Aucune modification de configuration n’est normalement nécessaire pour cette erreur.

| Problème | Fichier de config requis | Action supplémentaire |
| --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | Non | Arrêter le serveur, vérifier ou réinstaller les fichiers, puis redémarrer le serveur |

## Résoudre les délais de connexion (timeouts)

Si les joueurs voient `Connection timed out`, la cause est souvent un échec de démarrage, une mauvaise configuration de mod, ou un problème de méthode de connexion.

### Vérifiez si le serveur est réellement en ligne

Commencez par confirmer que le serveur a bien démarré.

Vous pouvez vérifier cela en :

- consultant le statut serveur dans l’interface web ZAP-Hosting
- ouvrant la console et cherchant un affichage normal du démarrage
- testant si le serveur répond aux commandes console si disponible

Si le serveur montre très peu d’activité et ne répond pas normalement, il a peut-être planté au démarrage.

### Passez en revue les modifications récentes de configuration

Si vous avez modifié `PalWorldSettings.ini` juste avant le problème, ouvrez à nouveau ce fichier dans `Configs` et vérifiez :

- virgules manquantes
- guillemets cassés
- valeurs dupliquées
- IP ou mots de passe invalides

Exemples d’entrées à vérifier :

```ini
ServerName="[your_server_name]"
ServerPassword="[your_server_password]"
AdminPassword="[your_admin_password]"
PublicPort=8211
PublicIP="[your_server_ip]"
```

Si vous doutez que la config soit la cause, revenez aux dernières modifications et redémarrez le serveur.

### Vérifiez les problèmes liés aux mods ou UE4SS

Si Palworld vient d’être mis à jour et que vous utilisez des mods ou `UE4SS`, le serveur peut ne plus être compatible.

Dans ce cas, vous devez :

1. Arrêter le serveur.
2. Faire une sauvegarde si disponible dans la gestion produit.
3. Supprimer ou mettre à jour les mods installés.
4. Redémarrer le serveur et tester la connexion.

:::caution Compatibilité des mods après mise à jour
Les mises à jour Steam de Palworld peuvent casser les modifications côté serveur. Si le problème est apparu juste après une mise à jour, les mods sont une des premières choses à vérifier.
:::

### Utilisez l’IP directe au lieu des serveurs récents

Les clients Palworld peuvent échouer à se connecter correctement via la liste `Recent Servers` en jeu.

Connectez-vous plutôt directement avec l’IP et le port de votre serveur.

Utilisez ce format :

```text
[your_server_ip]:8211
```

Remplacez `[your_server_ip]` par l’adresse IP réelle de votre serveur de jeux.

### Problèmes liés aux guildes dans le monde

Un timeout peut aussi survenir dans certaines situations d’état du monde, par exemple si un membre de guilde part alors que d’autres sont hors ligne.

Les solutions possibles sont :

- que le joueur affecté rejoigne à nouveau la guilde
- redémarrer le monde
- restaurer une sauvegarde si le monde reste inutilisable

:::danger Risque de corruption des données du monde
Si vous suspectez une corruption du monde ou de la sauvegarde, évitez les modifications manuelles répétées sans sauvegarde. Créez ou restaurez une sauvegarde avant toute modification destructive.
:::

## Résoudre les erreurs de connexion Steam

Les problèmes de connexion liés à Steam peuvent empêcher votre serveur Palworld de se mettre à jour ou d’être accessible.

### Erreur : `Connecting anonymously to Steam Public...Retrying`

Ce message est souvent lié à un problème temporaire du service Steam plutôt qu’à une mauvaise configuration Palworld.

### Que faire

- attendez `5` à `10` minutes puis réessayez
- vérifiez si Steam subit une maintenance ou une panne
- évitez les redémarrages répétés pendant une panne Steam temporaire

Les maintenances Steam ont souvent lieu le mardi, donc des interruptions courtes sont possibles.

### Mises à jour automatiques pendant les pannes Steam

Si votre serveur tente plusieurs fois de se mettre à jour pendant une panne Steam, il peut rester indisponible jusqu’à ce que Steam réponde normalement.

Si votre produit inclut un paramètre de mise à jour automatique dans l’interface d’administration, vous pouvez le désactiver temporairement jusqu’à la fin de la panne.

:::tip Gestion temporaire des pannes Steam
Si le serveur fonctionnait avant et affiche soudainement des tentatives de connexion Steam, il est souvent préférable d’attendre un peu plutôt que de modifier immédiatement les fichiers de configuration.
:::

### Faut-il modifier un fichier de config ?

Aucune modification de fichier de configuration n’est normalement nécessaire pour ce problème.

| Problème | Fichier de config requis | Action supplémentaire |
| --- | --- | --- |
| `Connecting anonymously to Steam Public...Retrying` | Non | Attendre, vérifier le statut Steam, désactiver éventuellement les mises à jour automatiques temporairement |

## Résoudre les erreurs de version incompatible

Si vous voyez un message indiquant que la partie utilise une version incompatible du jeu, cela signifie que la version serveur et la version client ne correspondent pas.

### Comment corriger cela

1. Redémarrez le serveur Palworld.
2. Attendez que le serveur ait fini de démarrer.
3. Mettez à jour votre client Palworld local via Steam si nécessaire.
4. Essayez de vous reconnecter.

Si le serveur indique toujours une version incompatible, la mise à jour n’a peut-être pas été appliquée correctement. Dans ce cas, répétez la vérification ou la réinstallation des fichiers décrite plus haut.

### Vérifiez les paramètres serveur après une mise à jour

Un problème de version incompatible n’est généralement pas causé par `PalWorldSettings.ini`, mais si le serveur plante après une mise à jour, il est utile de confirmer que le fichier de configuration est valide et inchangé.

## Comprendre les messages normaux au démarrage Steam

Certains messages au démarrage peuvent sembler critiques alors qu’ils sont attendus.

### Message : `steamclient.so: cannot open shared object file: No such file or directory`

Ce message est souvent affiché au démarrage et est généralement sans danger pour les serveurs dédiés Palworld dans ce contexte.

Vous n’avez normalement pas besoin de modifier un fichier ni d’exécuter une commande supplémentaire pour ce message seul.

:::note Sans danger dans la plupart des cas
Si le serveur démarre normalement et que les joueurs peuvent se connecter, ce message de la bibliothèque Steam peut être ignoré.
:::

## Référence de configuration

Le tableau ci-dessous résume les vérifications de dépannage les plus pertinentes pour Palworld.

| Problème | Fichier à vérifier | Chemin dans les fichiers serveur | Modifications manuelles requises | Redémarrage requis |
| --- | --- | --- | --- | --- |
| Erreur de mise à jour `0x6` | Aucun normalement | Non requis | Non | Oui |
| Timeout après modification config | `PalWorldSettings.ini` | `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini` | Oui, vérifier les valeurs `OptionSettings` | Oui |
| Timeout après mise à jour mod | Fichiers mod, pas config standard | Variable | Supprimer ou mettre à jour les mods incompatibles | Oui |
| Boucle de retry Steam | Aucun normalement | Non requis | Non | Parfois, mais attendre est recommandé d’abord |
| Version de jeu incompatible | Aucun normalement | Non requis | Non | Oui |
| Avertissement `steamclient.so` | Aucun | Non requis | Non | Non, si le serveur fonctionne normalement |

## Ordre recommandé pour le dépannage

Si vous ne savez pas par où commencer, suivez cet ordre :

1. Confirmez que le serveur est en ligne.
2. Essayez de vous connecter avec l’IP directe au lieu des `Recent Servers`.
3. Vérifiez si Palworld ou Steam ont eu une mise à jour récente.
4. Supprimez ou mettez à jour les mods si vous en utilisez.
5. Passez en revue `PalWorldSettings.ini` dans `Configs` pour détecter une syntaxe invalide.
6. Redémarrez le serveur.
7. Vérifiez ou réinstallez les fichiers du jeu si les erreurs de mise à jour persistent.

Cette méthode vous aide à éliminer les causes les plus courantes sans faire de modifications inutiles.

## Conclusion

Félicitations, vous avez réussi à dépanner les problèmes courants du serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂