---
id: palworld-server-savegames
title: "Palworld : Gérer les sauvegardes Palworld"
description: "Découvrez comment gérer et sauvegarder en toute sécurité vos sauvegardes Palworld pour une continuité de jeu sans accroc → En savoir plus maintenant"
sidebar_label: Gérer les sauvegardes
services:
  - gameserver-palworld
---

import InlineVoucher from '@site/src/components/InlineVoucher';

Dans ce guide, on va voir comment gérer vos sauvegardes Palworld sur votre serveur de jeux, y compris comment sauvegarder vos parties locales et celles sur le serveur, ainsi que comment les uploader sur votre serveur.

## Préparation

Pour accéder aux fichiers de votre serveur, vous aurez besoin d’un client FTP comme [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), tous deux open-source et gratuits.

Vous devrez vous connecter à votre serveur via un client FTP en utilisant les identifiants que vous trouverez sous **Outils->FTP-Browser** dans le panneau de contrôle de votre serveur de jeux. Pour plus d’aide, utilisez notre [guide d’accès via FTP](gameserver-ftpaccess.md).

## Sauvegarder la partie

### Sauvegarde locale

Les sauvegardes locales sont celles que vous avez créées en hébergeant une partie multijoueur directement sur votre appareil. Elles se trouvent dans le dossier AppData de Windows, précisément ici :
```
../AppData/Local/Pal/Saved/SaveGames
```

:::tip
Vous pouvez accéder facilement à ce chemin en appuyant simultanément sur `CTRL` + `R` et en collant ce chemin dans la fenêtre d’exécution : `%localappdata%/Pal/Saved/SaveGames/`. Cliquez sur **OK** et vous serez directement dans le dossier.

![](https://screensaver01.zap-hosting.com/index.php/s/gWL9gtAZ8JE2ENP/preview)
:::

Dans ce dossier, vous verrez un dossier nommé avec votre SteamID. Ouvrez-le pour retrouver toutes vos sauvegardes locales au même endroit.

![](https://screensaver01.zap-hosting.com/index.php/s/aaeRXfs5cFjA6fN/preview)

### Accéder à la sauvegarde via FTP

Sauvegarder votre partie depuis le serveur est simple. Une fois connecté à votre serveur de jeux via un client FTP, rendez-vous à ce chemin :
```
../palworld/Pal/Saved/SaveGames/0
```

Vous devriez voir un dossier avec une série de caractères aléatoires, c’est votre sauvegarde. Faites un clic droit dessus et choisissez **Télécharger** pour la sauvegarder localement.

![](https://screensaver01.zap-hosting.com/index.php/s/pmrmNHS5NAfXpY3/preview)

### Sauvegarde automatique

On propose aussi une option pour sauvegarder automatiquement votre partie (et le fichier de config) directement via notre panneau de contrôle. Allez dans la section **Outils->Sauvegardes** de votre interface web. Vous pourrez configurer plusieurs options pour planifier des sauvegardes automatiques. On vous offre 10 Go de stockage gratuit pour vos sauvegardes. Pour plus d’infos, consultez notre guide dédié aux [Sauvegardes](gameserver-backups.md).

## Uploader une sauvegarde

Comme pour la sauvegarde, uploader votre partie est simple. Connectez-vous d’abord à votre serveur via un client FTP. Ensuite, allez dans ce dossier :
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/tadxngnRCJDbtTe/preview)

Glissez-déposez simplement votre sauvegarde dans ce dossier via votre client FTP, elle sera uploadée sur votre serveur.

:::tip
Pensez à copier le nom du dossier de la sauvegarde que vous avez uploadée, vous en aurez besoin pour l’activer dans la section suivante.
:::

## Activer une sauvegarde

Pour utiliser une sauvegarde spécifique, il faut modifier un fichier de configuration. Rendez-vous dans ce dossier et trouvez le fichier **GameUserSettings.ini** :
```
../Pal/Saved/Config/WindowsServer/ # Pour Windows
../Pal/Saved/Config/LinuxServer/ # Pour Linux
```

Ouvrez ce fichier et cherchez la ligne avec le paramètre `DedicatedServerName`.

Modifiez cette ligne en remplaçant la valeur par le nom du dossier de la sauvegarde que vous voulez activer sur votre serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/qLG2jtzFkYM6WB7/preview)

N’oubliez pas de sauvegarder le fichier et de redémarrer votre serveur pour que ça prenne effet. Voilà, votre sauvegarde est maintenant active sur votre serveur de jeux.

## Ma sauvegarde a disparu

Dans de rares cas, le serveur peut créer une nouvelle sauvegarde au démarrage au lieu de charger celle existante.

D’abord, vérifiez vos fichiers de sauvegarde via votre client FTP en allant ici :
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/wYQ42Aein5y6Z6j/preview)

Vous devriez voir l’ancienne sauvegarde et une nouvelle qui a été générée. Pour régler ça, modifiez le fichier de config comme expliqué dans la section Activer une sauvegarde en mettant le bon nom de dossier.

La sauvegarde devrait être de nouveau active après avoir sauvegardé et redémarré le serveur.

:::info
On recommande vivement d’activer les sauvegardes automatiques comme expliqué dans la section Sauvegarde automatique, car Palworld est encore en Early Access et il est possible que des sauvegardes soient perdues ou corrompues lors des mises à jour.
:::

<InlineVoucher />