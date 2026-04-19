---
id: windrose-password-protection
title: "Windrose : Protection par mot de passe"
description: "Définissez un mot de passe sur votre serveur de jeux Windrose pour protéger l’accès et gérez les paramètres de changement de mot de passe en toute sécurité dans la configuration du serveur -> Découvrez comment faire maintenant"
sidebar_label: Protection par mot de passe
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windrose prend en charge la protection par mot de passe, ce qui vous permet de restreindre l’accès à votre serveur dédié avec un mot de passe d’entrée. Dans ce guide, vous apprendrez comment activer, modifier ou supprimer le mot de passe sur votre serveur Windrose via la gestion de serveur de jeux ZAP-Hosting.

## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur Windrose dans l’interface web ZAP-Hosting et la permission d’éditer les fichiers du serveur.

:::info Accès requis
Vous devez avoir accès à votre tableau de bord serveur et à la gestion des fichiers pour pouvoir modifier le fichier `ServerDescription.json`.
:::

## Comprendre la protection par mot de passe Windrose

Définir un mot de passe permet d’empêcher les joueurs non autorisés de rejoindre votre serveur de jeux Windrose. Les joueurs peuvent toujours accéder au serveur via le code d’invitation, mais ils doivent saisir le mot de passe correct avant de pouvoir se connecter.

Cela est utile si vous souhaitez :
- limiter l’accès à vos amis, au staff ou à un groupe privé
- protéger un serveur de test contre l’accès public
- contrôler qui peut rejoindre sans dépendre d’un gestionnaire de mots de passe externe ou d’un système de mot de passe de compte

:::note Comportement du mot de passe
Windrose utilise le mot de passe configuré dans le fichier serveur lui-même. Cela est indépendant de votre mot de passe de compte ZAP-Hosting et n’est pas lié à des outils comme un gestionnaire de mots de passe, l’intégration Google Password Manager, ou toute liste de mots de passe.
:::

## Activer la protection par mot de passe

Pour appliquer un mot de passe, vous devez d’abord arrêter le serveur, modifier le fichier de configuration, puis redémarrer le serveur.

### Arrêter le serveur

Ouvrez votre tableau de bord serveur dans l’interface web ZAP-Hosting et arrêtez complètement le serveur avant de faire des modifications.

:::caution Arrêtez le serveur avant de modifier
Vous devez arrêter le serveur avant de modifier `ServerDescription.json` pour éviter des conflits de configuration ou que le fichier soit écrasé pendant que le serveur tourne.
:::

### Ouvrir le fichier de configuration

Dans la barre latérale du panneau, ouvrez `Fichiers`.

Puis localisez et ouvrez le fichier `ServerDescription.json` dans le répertoire racine de la liste des fichiers de votre serveur.

### Modifier les paramètres du mot de passe

Dans `ServerDescription.json`, définissez `IsPasswordProtected` sur `true` et indiquez votre mot de passe souhaité dans le champ `Password`.

```json
"IsPasswordProtected": true,
"Password": "VotreMotDePasseIci"
```

Remplacez `VotreMotDePasseIci` par votre propre mot de passe sécurisé.

:::tip Choisissez un mot de passe fort
Utilisez un mot de passe unique qui n’est pas réutilisé depuis votre mot de passe de compte ou d’un autre service. Cela aide à protéger votre serveur Windrose contre les accès non désirés.
:::

### Sauvegarder et redémarrer le serveur

Après avoir modifié le fichier, cliquez sur `Enregistrer le contenu`.

Une fois le fichier sauvegardé, redémarrez votre serveur depuis le tableau de bord. Votre serveur Windrose demandera désormais le mot de passe configuré lorsque les joueurs tenteront de rejoindre.

## Référence de configuration

Le tableau suivant explique les paramètres pertinents dans `ServerDescription.json` :

| Clé | Type | Exemple | Description |
| --- | --- | --- | --- |
| `IsPasswordProtected` | Booléen | `true` | Active ou désactive la protection par mot de passe |
| `Password` | Chaîne | `"VotreMotDePasseIci"` | Définit le mot de passe d’entrée utilisé lorsque la protection est activée |

## Modifier le mot de passe existant

Si vous souhaitez changer le mot de passe plus tard, la procédure est la même que pour la configuration initiale.

### Mettre à jour la valeur du mot de passe

Arrêtez le serveur, ouvrez `ServerDescription.json` et changez la valeur dans le champ `Password` par votre nouveau mot de passe.

Exemple :

```json
"IsPasswordProtected": true,
"Password": "[votre_nouveau_mot_de_passe]"
```

Le placeholder `[votre_nouveau_mot_de_passe]` représente le nouveau mot de passe que vous voulez que les joueurs utilisent pour rejoindre le serveur.

### Sauvegarder et redémarrer à nouveau

Sauvegardez le fichier et redémarrez le serveur pour que le changement de mot de passe prenne effet.

:::note Vérification du mot de passe
Si les joueurs ne peuvent pas rejoindre après un changement de mot de passe, demandez-leur de vérifier soigneusement la saisie du mot de passe, y compris les majuscules et minuscules si applicable.
:::

## Supprimer la protection par mot de passe

Si vous ne souhaitez plus protéger votre serveur Windrose par un mot de passe, vous pouvez désactiver cette fonction dans le même fichier de configuration.

### Désactiver le paramètre

Arrêtez le serveur et ouvrez à nouveau `ServerDescription.json`.

Définissez `IsPasswordProtected` sur `false`. La valeur `Password` est ignorée lorsque cette option est désactivée.

```json
"IsPasswordProtected": false,
"Password": ""
```

### Sauvegarder et redémarrer le serveur

Cliquez sur `Enregistrer le contenu` et redémarrez le serveur. Les joueurs pourront alors rejoindre sans saisir de mot de passe.

## Dépannage

Si la protection par mot de passe ne fonctionne pas comme prévu, vérifiez les points suivants.

| Problème | Cause possible | Solution |
| --- | --- | --- |
| Le serveur ne demande pas de mot de passe | `IsPasswordProtected` est toujours à `false` | Mettez-le à `true`, sauvegardez le fichier et redémarrez le serveur |
| Les joueurs ne peuvent pas rejoindre avec le bon mot de passe | Mot de passe mal saisi | Vérifiez la valeur configurée et demandez aux joueurs de bien vérifier la saisie du mot de passe |
| Les modifications ne sont pas prises en compte | Le serveur n’a pas été redémarré après modification | Redémarrez le serveur après avoir sauvegardé `ServerDescription.json` |
| Les modifications du fichier sont perdues | Le fichier a été modifié alors que le serveur tournait | Arrêtez d’abord le serveur, appliquez les modifications, puis sauvegardez et redémarrez |

:::danger Ne stockez pas de mots de passe sensibles publiquement
Ne partagez pas votre mot de passe serveur publiquement dans des posts communautaires, captures d’écran ou exports de fichiers. Évitez aussi d’utiliser des mots de passe issus de listes anciennes ou de réutiliser des identifiants d’autres services.
:::

## Conclusion

Félicitations, vous avez configuré avec succès la protection par mot de passe sur votre serveur Windrose. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂