---
id: humanitz-whitelist
title: "HumanitZ : Gestion de la Whitelist"
description: "Apprends à gérer la whitelist et contrôler l’accès à ton serveur HumanitZ → Découvre tout maintenant"
sidebar_label: "Whitelist"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

La whitelist te permet de contrôler précisément qui peut rejoindre ton serveur HumanitZ. Quand elle est activée, seuls les joueurs dont les Steam IDs sont listés dans le fichier des joueurs autorisés pourront se connecter.

<InlineVoucher />

## Configuration

La fonctionnalité de whitelist se gère dans le fichier `GameServerSettings.ini`. Tu peux accéder à ce fichier dans ton panneau de contrôle sous **Configs**. Pour activer le mode whitelist, trouve et règle ce paramètre :

```
OnlyAllowedPlayers=1
```

- `OnlyAllowedPlayers=1` – Active le mode whitelist. Seuls les joueurs listés peuvent rejoindre.
- `OnlyAllowedPlayers=0` – Désactive le mode whitelist. Tous les joueurs peuvent rejoindre.

Après avoir activé le mode whitelist, tu dois créer manuellement le fichier de whitelist.

Connecte-toi à ton serveur via [FTP](gameserver-ftpaccess.md) avec ton client FTP préféré. Une fois connecté, va dans le répertoire principal du serveur et crée un nouveau fichier nommé `F_MVPAccess.txt`. Dans ce fichier, entre un **Steam ID unique par ligne** pour chaque joueur que tu souhaites autoriser.

```
76561198000000001
76561198000000002
```

Sauvegarde le fichier après avoir ajouté les Steam IDs.

## Suivi de l’activité des joueurs

HumanitZ fournit des fichiers supplémentaires pour suivre les connexions des joueurs. `F_ConnectedPlayers.txt` affiche les joueurs actuellement connectés et `PlayerConnectedLog.txt` enregistre toutes les connexions et déconnexions, avec le nom Steam, le Steam ID unique et les horodatages.

Ces fichiers sont pratiques pour identifier les Steam IDs et surveiller l’activité du serveur. Après toute modification des fichiers de whitelist ou de ban, sauvegarde-les et redémarre le serveur pour que les changements soient bien pris en compte.

## Conclusion

Bravo ! En activant le mode whitelist et en gérant les fichiers `F_MVPAccess.txt` et `F_BannedPlayers.txt`, tu as configuré avec succès le contrôle d’accès sur ton serveur HumanitZ.

Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />