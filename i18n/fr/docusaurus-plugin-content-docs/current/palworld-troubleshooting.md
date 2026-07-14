---
id: palworld-troubleshooting
title: "Palworld : Dépannage"
description: "Résolvez les problèmes courants des serveurs Palworld, les soucis de mise à jour Steam Palworld et les erreurs de connexion Steam sur votre serveur de jeux. -> En savoir plus maintenant"
sidebar_label: Palworld : Dépannage
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs dédiés Palworld peuvent rencontrer plusieurs problèmes, notamment des mises à jour Steam échouées, des incompatibilités de version, des conflits de mods et des problèmes temporaires de connexion à Steam. Dans ce guide, vous apprendrez à identifier les problèmes courants des serveurs Palworld sur ZAP-Hosting et à appliquer la bonne solution, que ce soit en modifiant des fichiers de configuration, en vérifiant les fichiers ou en redémarrant votre serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer le dépannage, assurez-vous d’avoir accès à l’administration et à la console de votre serveur de jeux Palworld dans l’interface web ZAP-Hosting.

Vous devez également disposer des éléments suivants :

| Exigence | Pourquoi c’est nécessaire |
| --- | --- |
| Accès au panneau de contrôle de votre serveur de jeux ZAP-Hosting | Nécessaire pour arrêter, démarrer, réinstaller et modifier les fichiers de configuration |
| Accès à la console du serveur | Utile pour vérifier si le serveur répond |
| Une sauvegarde récente | Recommandée avant de modifier des fichiers ou de supprimer des mods |
| Adresse IP directe du serveur et port | Nécessaire car la liste des serveurs récents en jeu peut être peu fiable |

:::caution Créez une sauvegarde d’abord
Si vous prévoyez de supprimer des mods, réinstaller des fichiers ou réinitialiser une partie de votre configuration Palworld, créez d’abord une sauvegarde pour éviter toute perte de données accidentelle.
:::

## Accéder aux fichiers de configuration Palworld

Certaines étapes de dépannage nécessitent des modifications manuelles des fichiers de configuration Palworld. Sur ZAP-Hosting, vous pouvez accéder à ces fichiers via l’administration de votre serveur de jeux dans la section `Configs`.

Pour les serveurs dédiés Palworld, les paramètres principaux du serveur se trouvent généralement dans ce fichier :

```text
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Si votre serveur utilise un autre template de plateforme, le nom exact du dossier peut varier, mais sur les serveurs Palworld hébergés sous Linux, le chemin `LinuxServer` est l’emplacement standard.

### Ouvrir le fichier de config dans l’interface ZAP

Pour accéder au fichier :

1. Ouvrez votre serveur Palworld dans l’interface web ZAP-Hosting.
2. Allez dans la section `Configs`.
3. Ouvrez `PalWorldSettings.ini`.
4. Consultez la ligne `OptionSettings=(...)` qui contient la plupart des paramètres liés au gameplay et à la connexion.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Fichier de configuration principal
La plupart des options du serveur Palworld sont stockées dans `PalWorldSettings.ini`, généralement dans la section `OptionSettings=(...)`. Si vous devez ajuster les paramètres de jeu, mots de passe, limites de joueurs ou valeurs réseau, c’est normalement ce fichier que vous modifierez.
:::

### Sauvegarder et redémarrer après modification

Après avoir modifié des valeurs de configuration :

1. Sauvegardez le fichier dans la section `Configs`.
2. Redémarrez le serveur Palworld depuis l’interface ZAP-Hosting.

Palworld n’applique pas toujours les changements de configuration à chaud, un redémarrage est donc nécessaire après modification de `PalWorldSettings.ini`.

## Résoudre les échecs de mise à jour Steam

Un problème de mise à jour connu peut afficher ce message :

```text
Error! app '2394010' state is 0x6 after update job
```

Cela indique généralement que les fichiers du serveur Steam Palworld n’ont pas été mis à jour correctement.

### Solution recommandée

Pour résoudre ce problème :

1. Arrêtez votre serveur Palworld.
2. Ouvrez la gestion du serveur dans l’interface ZAP-Hosting.
3. Utilisez la fonction de réinstallation ou de vérification des fichiers.
4. Sélectionnez l’option de vérification d’intégrité pour que les fichiers du serveur soient contrôlés et retéléchargés si nécessaire.
5. Redémarrez le serveur.

:::tip Vérifiez l’intégrité pour les fichiers corrompus
La vérification des fichiers est généralement la première étape la plus sûre car elle répare les fichiers manquants ou endommagés du serveur de jeux Palworld sans que vous ayez à uploader quoi que ce soit manuellement.
:::

### Faut-il modifier un fichier de config ?

Aucune modification manuelle de fichier de configuration n’est normalement nécessaire pour cette erreur spécifique. Le problème vient plutôt de fichiers de jeu corrompus ou incomplets que d’un mauvais paramètre dans `PalWorldSettings.ini`.

## Résoudre l’erreur "Connection Timed Out"

Si vous recevez une erreur `Connection timed out` en rejoignant votre serveur Palworld, plusieurs causes sont possibles.

## Vérifiez si le serveur est bien lancé

Commencez par confirmer que le serveur a démarré correctement.

### Utilisez la console

Ouvrez la console du serveur dans l’interface ZAP-Hosting et vérifiez l’activité normale au démarrage. Si la console est accessible, essayez une commande simple comme :

```text
info
```

Si le serveur répond normalement, il est probablement en fonctionnement. En cas d’absence de réponse utile ou d’arrêt répété du processus, le serveur peut planter au démarrage.

### Vérifiez l’utilisation des ressources

Si l’utilisation CPU reste très faible au démarrage et que le serveur ne répond pas dans la console, cela peut indiquer que le processus Palworld a planté ou n’a pas réussi à s’initialiser.

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| Pas de réponse console | Plantage au démarrage ou processus bloqué | Redémarrez le serveur et vérifiez les changements récents |
| Utilisation CPU très faible au démarrage | Serveur ne s’initialise pas correctement | Vérifiez les mods, mises à jour récentes et les logs |
| Serveur démarre mais les joueurs subissent un timeout | Problème de méthode de connexion ou de version | Utilisez l’IP directe et vérifiez les versions |

## Connectez-vous via l’IP directe plutôt que les serveurs récents

Un problème fréquent de Palworld est que la connexion via l’onglet `Recent Servers` en jeu peut échouer même si le serveur est en ligne.

Utilisez une connexion directe :

1. Copiez l’IP et le port de votre serveur depuis l’interface ZAP-Hosting.
2. Connectez-vous directement avec cette adresse dans Palworld.
3. Évitez de vous fier à la liste `Recent Servers` pour vos tests.

:::note La connexion directe est plus fiable
Si le navigateur de serveurs Steam Palworld ou la liste des serveurs récents est instable, la connexion via IP directe est la meilleure méthode pour vérifier si votre serveur est accessible.
:::

## Vérifiez les problèmes liés aux mods ou à UE4SS

Si Palworld a récemment reçu une mise à jour et que votre serveur utilise des mods ou `UE4SS`, le serveur peut cesser de fonctionner tant que ces modifications ne sont pas mises à jour.

### Ce qu’il faut vérifier

Vérifiez si vous avez récemment installé :

- des mods de gameplay
- des modifications personnalisées du serveur
- `UE4SS`
- d’autres fichiers tiers qui interfèrent avec le serveur Palworld

Si le problème est apparu juste après une mise à jour Steam Palworld, ces fichiers sont probablement en cause.

### Solution recommandée

1. Arrêtez le serveur.
2. Faites une sauvegarde.
3. Supprimez ou désactivez les mods ou `UE4SS` ajoutés récemment.
4. Redémarrez le serveur.
5. Testez la connexion via IP directe.

:::caution Compatibilité des mods après mise à jour
Les mises à jour Palworld peuvent casser les mods sans avertissement. Si votre serveur fonctionnait avant une mise à jour et plus après, testez toujours sans mods avant de modifier d’autres paramètres.
:::

### Faut-il modifier la config ?

En général non. Les timeouts liés aux mods sont causés par des fichiers incompatibles, pas par des valeurs dans `PalWorldSettings.ini`.

## Résoudre les erreurs de connexion Steam

Vous pouvez voir ce message au démarrage :

```text
Connecting anonymously to Steam Public...Retrying
```

Cela est souvent lié à des problèmes temporaires de connexion à Steam plutôt qu’à une mauvaise configuration Palworld.

### Ce que cela signifie

Le serveur dédié Palworld dépend des services Steam pour certaines étapes de démarrage et de mise à jour. Si Steam subit des pannes, une forte charge ou une maintenance programmée, le serveur peut temporairement ne pas réussir à se connecter.

Cela arrive surtout lors des pics de trafic ou des maintenances Steam, souvent le mardi.

### Solution recommandée

Essayez ceci :

1. Attendez `5` à `10` minutes.
2. Redémarrez le serveur.
3. Testez à nouveau.

Si le problème survient pendant une panne Steam plus large, il faudra patienter jusqu’au rétablissement des services Steam.

### Considération sur les mises à jour automatiques

Si votre serveur rencontre souvent des problèmes de mise à jour au démarrage pendant les pannes Steam, vous pouvez envisager de désactiver les mises à jour automatiques dans les paramètres du serveur jusqu’à ce que Steam soit stable.

:::tip Évitez les mises à jour pendant la maintenance Steam
Si possible, évitez de forcer une mise à jour Steam Palworld pendant les périodes de maintenance Steam connues. Cela réduit les échecs de démarrage et les dépannages inutiles.
:::

### Faut-il modifier la config ?

Non. Ce problème ne se résout normalement pas via `PalWorldSettings.ini` ou un autre fichier de config manuel.

## Résoudre l’erreur "Version incompatible du jeu"

Si Palworld affiche un message indiquant que la partie utilise une version incompatible du jeu, cela signifie que la version client et la version serveur ne correspondent pas.

## Mettez à jour la version du serveur

Commencez par redémarrer le serveur depuis l’interface ZAP-Hosting. Dans beaucoup de cas, cela applique la dernière mise à jour du serveur Palworld.

Si la version ne correspond toujours pas, suivez votre procédure habituelle de mise à jour serveur. Si vous avez besoin d’un guide dédié, consultez la documentation Palworld correspondante dans ZAP-Docs si elle est disponible.

### Vérifiez la version client

Assurez-vous que votre installation locale de Palworld est aussi à jour via Steam.

| Composant | À vérifier |
| --- | --- |
| Serveur Palworld | Redémarré et mis à jour sur ZAP-Hosting |
| Jeu Palworld local | Mis à jour dans Steam |
| Mods | Mis à jour ou supprimés s’ils sont incompatibles |

:::info Les incompatibilités de version concernent les deux côtés
Cette erreur ne signifie pas toujours que le serveur est obsolète. Votre client Palworld local peut aussi être en version plus ancienne, vérifiez toujours les deux avant de modifier quoi que ce soit.
:::

### Faut-il modifier la config ?

Non, aucune modification de fichier de configuration n’est normalement nécessaire pour un problème de version.

## Comprendre les messages de démarrage `steamclient.so`

Au démarrage, vous pouvez voir des messages comme :

```text
steamclient.so: cannot open shared object file: No such file or directory
```

Dans beaucoup d’environnements d’hébergement Palworld, ces messages liés à Steam apparaissent même si le serveur démarre normalement.

### Que faire ?

Si le serveur continue de démarrer et devient accessible, vous pouvez généralement ignorer ce message.

### Quand cela devient un problème

N’enquêtez plus loin que si le serveur ne démarre pas du tout et que ce message apparaît avec d’autres erreurs fatales.

:::note Toutes les erreurs Steam ne sont pas critiques
Les logs de démarrage contiennent souvent des avertissements non fatals. Concentrez-vous sur le fait que le serveur termine son démarrage et accepte les connexions, pas seulement sur la présence d’un avertissement dans la console.
:::

## Dépannage des problèmes de connexion liés au monde ou à la guilde

Parfois, les joueurs rencontrent des problèmes de connexion liés à l’état du monde ou de la guilde plutôt qu’au processus serveur lui-même.

Un exemple rapporté est lorsqu’un membre quitte une guilde alors que d’autres données liées à la guilde restent attachées à des joueurs hors ligne. Cela peut parfois causer des problèmes de connexion.

### Solutions possibles

Essayez dans cet ordre :

1. Demandez au joueur affecté de rejoindre à nouveau la guilde si possible.
2. Redémarrez le serveur Palworld.
3. Si le problème persiste, restaurez une sauvegarde ou examinez attentivement les données de sauvegarde concernées.

:::danger Modifier les données de sauvegarde est risqué
Si vous suspectez une corruption du monde ou des sauvegardes, évitez les modifications manuelles aléatoires sans sauvegarde récente. Une mauvaise modification peut endommager définitivement vos données Palworld.
:::

## Valeurs de configuration à vérifier

Même si la plupart des problèmes de ce guide ne sont pas causés directement par des mauvais réglages, certaines valeurs dans `PalWorldSettings.ini` méritent d’être vérifiées si les joueurs ne peuvent pas rejoindre comme prévu.

Ces valeurs se trouvent généralement dans la section `OptionSettings=(...)`.

| Clé de config | But | À vérifier |
| --- | --- | --- |
| `ServerName` | Nom public du serveur | Vérifiez qu’il est bien défini comme voulu |
| `ServerDescription` | Description du serveur | Optionnel, mais utile pour l’identification |
| `AdminPassword` | Mot de passe admin | Assurez-vous qu’il est correct si vous utilisez les commandes admin |
| `ServerPassword` | Mot de passe de connexion | Supprimez ou corrigez si les joueurs ne peuvent pas s’authentifier |
| `PublicPort` | Port de connexion au jeu | Vérifiez qu’il correspond au port attribué à votre service |
| `PublicIP` | IP publique annoncée | Laissez généralement vide sauf besoin spécifique |
| `bIsMultiplay` | Mode multijoueur | Doit rester activé pour un serveur dédié normal |
| `bIsDedicated` | Mode serveur dédié | Doit rester activé pour les serveurs dédiés hébergés |

### Exemple de structure

Le contenu exact peut varier, mais les paramètres pertinents sont souvent dans une ligne comme celle-ci :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Palworld Server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="",bIsMultiplay=True,bIsDedicated=True)
```

Remplacez les placeholders comme `[your_admin_password]` et `[your_server_password]` par vos propres valeurs.

:::caution Ne modifiez pas les valeurs inconnues au hasard
Palworld stocke beaucoup de paramètres dans une seule ligne `OptionSettings`. Si vous supprimez par erreur des virgules, guillemets ou crochets, le serveur peut ne plus lire correctement la configuration.
:::

## Appliquer les modifications de configuration en toute sécurité

Si vous devez modifier `PalWorldSettings.ini`, procédez ainsi :

1. Arrêtez le serveur pour éviter les conflits pendant l’édition.
2. Ouvrez `Configs` dans l’interface ZAP-Hosting.
3. Modifiez `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`.
4. Sauvegardez vos modifications.
5. Démarrez ou redémarrez le serveur.
6. Testez le serveur avec une connexion IP directe.

### Pas de commande supplémentaire nécessaire

Pour les modifications standard de configuration Palworld, aucune commande console supplémentaire n’est normalement requise après la sauvegarde. Le redémarrage est l’étape finale importante.

## Référence rapide

| Problème | Modification fichier config nécessaire | Redémarrage requis | Action supplémentaire |
| --- | --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | Non | Oui | Vérifier l’intégrité ou réinstaller les fichiers |
| `Connection timed out` | Généralement non | Souvent oui | Utiliser IP directe, vérifier mods, tester console |
| `Connecting anonymously to Steam Public...Retrying` | Non | Oui | Attendre la reprise de Steam |
| `Incompatible version of the game` | Non | Oui | Mettre à jour serveur et client |
| Avertissement `steamclient.so` | Non | Non, si le serveur démarre normalement | Généralement sans danger à ignorer |
| Problèmes de connexion après changements de guilde | Non | Oui | Rejoindre la guilde ou restaurer sauvegarde si besoin |

## Conclusion

Félicitations, vous avez réussi à dépanner les problèmes courants des serveurs Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂