---
id: palworld-spectate-mode
title: "Palworld : Mode Spectateur"
description: "Apprenez à utiliser le mode spectateur dans Palworld, à définir le mot de passe admin requis, et à entrer en mode spectateur sur votre serveur. -> En savoir plus maintenant"
sidebar_label: "Mode Spectateur"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le mode spectateur dans Palworld vous permet d’observer les joueurs sur votre serveur sans participer activement. Dans ce guide, vous apprendrez à préparer l’accès admin, où vérifier la configuration requise dans l’interface ZAP-Hosting, et comment entrer et sortir du mode spectateur en jeu.

## Preparation

Avant de pouvoir utiliser le mode spectateur, vous devez disposer d’un accès administrateur sur votre serveur Palworld. Cela nécessite un `AdminPassword` valide configuré dans la configuration de votre serveur.

Si vous ne l’avez pas encore configuré, assurez-vous d’abord de consulter les paramètres de votre serveur Palworld et la configuration admin.

:::info Accès Admin Obligatoire
Le mode spectateur est uniquement disponible pour les administrateurs. Si vous ne vous connectez pas d’abord en tant qu’admin, la commande spectateur ne fonctionnera pas.
:::

## Vérifier la configuration requise du serveur

Bien que le mode spectateur ne nécessite pas de paramètre dédié à activer, votre serveur doit avoir un mot de passe admin configuré pour que vous puissiez vous authentifier en tant qu’administrateur.

### Ouvrir le fichier de configuration dans l’interface ZAP

Dans l’interface web de votre serveur de jeux ZAP-Hosting, ouvrez la section **Configs**. La configuration Palworld pertinente se trouve dans le fichier :

`PalWorldSettings.ini`

Selon le template serveur et la version du jeu, ce fichier contient les options principales du serveur, y compris l’entrée du mot de passe admin.



### Vérifier l’entrée du mot de passe admin

Dans `PalWorldSettings.ini`, cherchez la section `OptionSettings` et vérifiez que la valeur `AdminPassword` est bien définie.

Un exemple typique ressemble à ceci :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AdminPassword="[your_admin_password]")
```

Si votre fichier contient déjà plusieurs options dans une seule ligne `OptionSettings=(...)`, vous devez juste vous assurer que l’entrée `AdminPassword` existe et contient le mot de passe choisi.

:::caution Préserver la Syntaxe Existante
Ne supprimez pas les autres valeurs existantes dans la ligne `OptionSettings`. Palworld stocke souvent plusieurs paramètres dans la même entrée, vous devez donc uniquement ajouter ou modifier la valeur `AdminPassword` avec précaution.
:::

### Référence de configuration

| Fichier | Emplacement dans l’interface ZAP | Clé requise | But |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` | `AdminPassword` | Permet de s’authentifier en admin et d’utiliser le mode spectateur |

## Sauvegarder les modifications et redémarrer le serveur

Si vous avez modifié le `AdminPassword` dans `PalWorldSettings.ini`, sauvegardez le fichier et redémarrez votre serveur Palworld depuis l’interface web ZAP-Hosting.

Un redémarrage est nécessaire pour que la configuration mise à jour soit prise en compte par le serveur.

:::note Nécessité de Redémarrage
Si vous n’avez fait aucune modification dans le fichier de configuration et que le mot de passe admin était déjà correctement défini, aucun redémarrage supplémentaire n’est nécessaire pour le mode spectateur lui-même.
:::

## Se connecter en tant qu’administrateur

Une fois le serveur en ligne, connectez-vous à votre serveur Palworld en jeu comme d’habitude. Pour utiliser le mode spectateur, vous devez vous authentifier avec le mot de passe admin configuré précédemment.

La commande exacte de connexion admin peut varier selon la version actuelle de Palworld et le comportement de l’interface. Si votre serveur demande une authentification admin manuelle après la connexion, utilisez le mot de passe admin configuré dans la commande admin appropriée ou l’invite de connexion admin prise en charge par votre version serveur.

:::info À propos de l’authentification admin
Les références tierces actuelles confirment que le mode spectateur nécessite des privilèges admin et que `AdminPassword` doit être configuré. Cependant, si votre build serveur utilise une commande de connexion admin spécifique, suivez le format de commande supporté par votre version Palworld installée.
:::

## Entrer en mode spectateur

Une fois connecté en tant qu’administrateur, vous pouvez activer le mode spectateur de l’une des manières suivantes.

### Utiliser le raccourci clavier

Appuyez sur la touche `\` pour entrer en mode spectateur.

### Utiliser la commande

Sinon, utilisez la commande en jeu suivante :

```text
/togglespectate
```

Cette commande active ou désactive le mode spectateur pour votre session de personnage actuelle, à condition que vous soyez authentifié en tant qu’admin.

### Référence des commandes du mode spectateur

| Action | Méthode | Condition |
| --- | --- | --- |
| Entrer en mode spectateur | Appuyer sur `\` | Privilèges admin |
| Basculer le mode spectateur | `/togglespectate` | Privilèges admin |
| Quitter le mode spectateur | Appuyer sur `Esc` | Mode spectateur actif |

:::tip Quand utiliser le mode spectateur
Le mode spectateur est utile si vous souhaitez surveiller les joueurs, enquêter sur des signalements, ou observer l’activité sur votre serveur sans interférer avec le gameplay.
:::

## Quitter le mode spectateur

Pour quitter le mode spectateur et revenir au gameplay normal, appuyez sur `Esc`.

Si besoin, vous pouvez aussi utiliser `/togglespectate` à nouveau pour désactiver le mode, selon le comportement actuel de votre serveur.

## Dépannage

Si le mode spectateur ne fonctionne pas, vérifiez les points suivants.

### Confirmer que le mot de passe admin est défini

Ouvrez à nouveau `PalWorldSettings.ini` via **Configs** et assurez-vous que `AdminPassword` est présent et non vide.

### Redémarrer après modification de la configuration

Si vous avez récemment modifié le fichier de config, redémarrez le serveur avant de retester.

### Assurez-vous d’être authentifié en admin

Avoir un `AdminPassword` configuré ne suffit pas toujours. Vous devez aussi être reconnu par le serveur comme administrateur actif durant votre session.

### Vérifier la touche utilisée

Sur certains claviers, la touche `\` peut être placée différemment. Si le raccourci ne répond pas, utilisez plutôt `/togglespectate`.

:::caution Différences de version
Palworld est encore sujet à des changements de gameplay et serveur. Si le mode spectateur ou le comportement admin diffèrent sur votre serveur, vérifiez que votre serveur est à jour et consultez si la version actuelle du jeu a modifié les commandes ou permissions associées.
:::

## Conclusion

Félicitations, vous avez utilisé avec succès le mode spectateur sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂