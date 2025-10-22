---
id: moe-server-savegames
title: "Myth of Empires : Gérer les Savegames"
description: "Découvrez comment gérer et sauvegarder en toute sécurité vos parties sauvegardées de Myth of Empires pour une continuité de jeu sans accroc → En savoir plus maintenant"
sidebar_label: Gérer les Savegames
services:
  - gameserver-moe
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans ce guide, tu vas découvrir comment gérer tes savegames de Myth of Empires sur ton serveur de jeux, y compris comment sauvegarder tes parties locales et celles sur le serveur, ainsi que comment les uploader sur ton serveur.

<InlineVoucher />

## Préparation

Pour accéder aux fichiers de ton serveur, tu auras besoin d’un client FTP comme [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), tous deux open-source et gratuits.

Tu devras te connecter à ton serveur via un client FTP en utilisant les identifiants que tu trouveras sous **Outils->FTP-Browser** dans le panneau de contrôle de ton serveur de jeux. N’hésite pas à consulter notre [guide Accès via FTP](gameserver-ftpaccess.md) pour t’aider à te connecter.

## Sauvegarder le Savegame

### Savegame local

Les savegames locaux sont ceux que tu as créés en hébergeant une partie multijoueur directement sur ton appareil. MOE les stocke dans un dossier à l’intérieur du répertoire d’installation du jeu.

Ouvre Steam sur ton système, fais un clic droit sur ton jeu **Myth of Empires** et sélectionne **Parcourir les fichiers locaux** en passant par la section **Gérer**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Navigue jusqu’au chemin suivant :
```
../WindowsPrivateServer/MOE/Saved/SaveGames/
```

Dans ce dossier, tu verras toutes tes parties locales existantes.

### Accéder au Savegame via FTP

Sauvegarder ton savegame depuis le serveur est simple. Une fois connecté à ton serveur de jeux via un client FTP, rends-toi à ce chemin :
```
../moe-dedicated/MOE/Saved/SaveGames/
```

Tu devrais voir des dossiers qui correspondent à tes savegames. Clique droit sur le dossier et utilise le bouton **Télécharger** pour le sauvegarder localement sur ton appareil.

![](https://screensaver01.zap-hosting.com/index.php/s/3yN723tY8eiBb2w/preview)

### Sauvegarde automatique

On propose aussi une option pour sauvegarder automatiquement ton savegame (et le fichier de config) directement via notre panneau de contrôle. Va dans la section **Outils->Sauvegardes** de ton interface web. Là, tu peux configurer plusieurs options pour programmer des sauvegardes automatiques de ton serveur. On te fournit 10 Go de stockage gratuit pour tes sauvegardes. Pour plus d’infos, jette un œil à notre guide dédié [Sauvegardes](gameserver-backups.md).

## Upload du Savegame

Comme pour la sauvegarde, uploader ton savegame est simple. Assure-toi d’abord d’être connecté à ton serveur via un client FTP. Ensuite, rends-toi à ce chemin :
```
../moe-dedicated/MOE/Saved/SaveGames/
```

![](https://screensaver01.zap-hosting.com/index.php/s/KLD26KTYZYpfoqP/preview)

Glisse-dépose simplement ton savegame dans ce dossier via ton client FTP, il sera uploadé sur ton serveur.

## Activer le Savegame

Pour utiliser ton savegame, il faut le sélectionner dans la config de ton serveur. Le plus simple est d’aller dans la section **Paramètres** de l’interface web de ton serveur de jeux. Pour plus d’infos, consulte notre [Configuration du serveur](moe-configuration.md).

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Dans cette section, trouve le paramètre **Nom de la carte** dans les paramètres de base, ton monde uploadé devrait apparaître ici. Si tu ne le vois pas, assure-toi de redémarrer ton serveur après l’upload.

Tu as maintenant ajouté un savegame à ton serveur de jeux avec succès.

<InlineVoucher />