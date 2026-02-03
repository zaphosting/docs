---
id: hytale-advanced-permissions-luckperms
title: "Hytale : Permissions avancées avec LuckPerms"
description: "Découvrez comment installer et configurer LuckPerms pour gérer les permissions avancées et les grades sur un serveur Hytale → En savoir plus maintenant"
sidebar_label: Permissions avancées
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Gérer les permissions sur un serveur Hytale devient super important dès que tu commences à bosser avec des rôles staff, des grades personnalisés ou des perks spéciaux pour les joueurs. Le système de permissions intégré au jeu est ok pour une admin basique, mais il montre vite ses limites quand tu veux un contrôle précis sur les commandes et fonctionnalités.

**LuckPerms** offre un système de permissions robuste et ultra personnalisable pour les serveurs Hytale. Il te permet de définir exactement quelles permissions et commandes chaque joueur ou groupe peut utiliser.

<InlineVoucher />



## Installer LuckPerms

Pour installer LuckPerms, commence par télécharger la dernière version du fichier `.jar` de LuckPerms.  
Une fois téléchargé, ouvre ton panneau de gestion serveur et arrête le serveur pour pouvoir uploader le mod en toute sécurité.

Va dans la section **Fichiers** de ton serveur et ouvre le dossier `mods`. Upload le fichier `.jar` de LuckPerms dans ce dossier. Pour une explication détaillée sur l’installation de mods, on te recommande de jeter un œil au [guide Installer des mods](hytale-mods).

Quand l’upload est terminé, redémarre le serveur. Après le démarrage, ouvre la console du serveur et vérifie que LuckPerms tourne bien. Si l’installation a réussi, LuckPerms affichera des messages de démarrage dans la console.



## Donner les permissions initiales

Après l’installation, LuckPerms doit être configuré avant de pouvoir être utilisé efficacement. Pour commencer à gérer les permissions, tu dois te donner la permission d’utiliser les commandes LuckPerms. Dans la console ou le chat en jeu, tape la commande suivante :

```
lp user <playername> permission set luckperms.* true
```

Ça donne au joueur sélectionné un accès complet aux commandes LuckPerms.



## Utiliser l’éditeur web LuckPerms

LuckPerms inclut un éditeur web qui offre une interface pratique pour créer des groupes et gérer les permissions. Pour générer une session éditeur, entre :

```
lp editor
```

LuckPerms affichera un lien d’éditeur généré dans la console. Ouvre ce lien dans ton navigateur pour accéder à l’éditeur web.

```
[LP] Preparing a new editor session, please wait...
[LP] Click the link below to open the editor:
https://luckperms.net/editor/XXXXXXXXXX
```

![img](https://screensaver01.zap-hosting.com/index.php/s/5Cx2sGY4axZ6TBo/preview)

Dans l’éditeur, copie le **lien de commande** affiché. Retourne dans la console de ton serveur et colle ce lien pour établir la confiance et connecter la session éditeur à ton serveur.

```
/lp trusteditor XXXX-XXXX
```

Une fois l’éditeur connecté, tu peux configurer les utilisateurs, groupes et permissions directement dans l’interface web. Après avoir fait tes modifications, clique sur **Apply** pour sauvegarder la config. Si LuckPerms fournit une commande apply, copie-la et colle-la dans la console du serveur pour finaliser les changements.



## Créer un groupe admin

Ouvre le lien de l’éditeur dans ton navigateur et va dans la section **Groups**. Crée un nouveau groupe avec l’icône plus et donne-lui le nom `admin`. Tu peux aussi configurer des détails supplémentaires comme le nom affiché, le poids, le groupe parent, et le préfixe/suffixe.

![img](https://screensaver01.zap-hosting.com/index.php/s/xEWHSBkxKy5q8qr/preview)

Après avoir créé le groupe, sélectionne le groupe `admin` dans l’éditeur et ajoute les permissions. Pour donner toutes les permissions Hytale au groupe, entre :

```
hytale.*
```

Cette permission donne un accès complet à toutes les permissions Hytale. Après avoir ajouté les permissions, assigne un joueur au groupe.  
Dans l’éditeur, ouvre la section **Users**, sélectionne l’utilisateur voulu, et ajoute le groupe `admin` sous **Parent groups**.

Enfin, clique sur **Apply** pour sauvegarder tes changements. Si demandé, colle la commande apply dans la console du serveur.



## Commandes LuckPerms courantes

LuckPerms peut être géré soit via l’éditeur web, soit directement avec des commandes. Voici les commandes les plus utilisées pour gérer les permissions :

| Commande                                                      | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `/lp user <playername> parent add <group>`                   | Ajoute le joueur au groupe de permissions.                   |
| `/lp user <playername> parent remove <group>`                | Retire le joueur du groupe de permissions.                   |
| `/lp user <playername> permission set <permission>`          | Donne la permission au joueur.                               |
| `lp user <playername> permission settemp <permission> true <duration>` | Donne une permission temporaire au joueur avec une durée comme `1h` pour 1 heure ou `1m` pour 1 minute. |
| `/lp user <playername> permission unset <permission>`        | Retire la permission au joueur.                              |
| `/lp group <group> permission set <permission>`              | Donne la permission au groupe.                               |
| `/lp group <group> permission unset <permission>`            | Retire la permission au groupe.                              |



## Conclusion

LuckPerms est une solution puissante pour gérer les permissions avancées sur les serveurs Hytale. En utilisant les groupes, permissions et l’éditeur web, tu peux créer un système de rôles structuré qui évolue avec ta communauté.

Une fois configuré, LuckPerms facilite la gestion des grades staff, des perks joueurs et du contrôle d’accès tout en gardant l’admin serveur propre, cohérente et performante.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />