---
id: terraria-tmodloader-installmod
title: "Terraria : Installation des mods (tModLoader)"
description: "Découvre comment installer et activer facilement les mods tModLoader pour Terraria afin d'améliorer ton expérience de jeu → En savoir plus maintenant"
sidebar_label: Installer des mods (tModLoader)
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Installation de mods via tModLoader

Le tModLoader pour Terraria est une modification essentielle qui permet de charger des mods sur ton serveur de jeux Terraria. L'installation se fait par glisser-déposer avec un seul réglage à faire sur ton serveur, donc c’est super simple et ça prend juste quelques minutes.


## Installation de tModLoader sur ton PC

Si tu n’as pas encore installé tModLoader, tu peux le télécharger gratuitement directement depuis Steam. Cherche simplement tModLoader dans le Steam Store ou utilise ce lien : [tModLoader sur Steam Store](https://store.steampowered.com/app/1281930/tModLoader/)

Après le téléchargement et l’installation, tu peux lancer ton tModLoader directement depuis Steam.

## Ajout de mods sur ton PC

Une fois dans le menu principal, ouvre ton dossier de mods en cliquant sur **Mods**, puis sur **Manage Mods** et enfin sur **Open Mod Folder** :

![](https://screensaver01.zap-hosting.com/index.php/s/KYXqfC3oaFeti3t/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/sPbWCz9KiY6n9dN/preview)

Dans le dossier qui s’ouvre (par défaut situé sous **C:\Users\UserName\Documents\My Games\Terraria\ModLoader\Mods**), tu peux maintenant déposer les mods que tu souhaites.
Ici, on installe par exemple le Calamity-Mod.

![](https://screensaver01.zap-hosting.com/index.php/s/bbXjf6JpMKC6jzq/preview)

:::info
Un mod doit toujours avoir l’extension **.tmod**, sinon il ne pourra pas être chargé par le serveur !
:::

Tu peux ensuite fermer le dossier, cliquer sur **Back** dans le jeu, puis sur **Mods** :

![](https://screensaver01.zap-hosting.com/index.php/s/95y5k6AfobCJJed/preview)

Tu verras alors ton mod ajouté, que tu peux activer en cliquant sur **Disabled** :

![](https://screensaver01.zap-hosting.com/index.php/s/dCbgnKbeWkr2JeY/preview)

Pour activer le mod, clique sur **Reload Mods**, puis tu peux fermer le jeu et commencer l’installation du mod sur ton serveur.


## Installation des mods sur ton serveur

Pour pouvoir installer le mod sur ton serveur, connecte-toi à ton serveur via FTP, tu peux voir comment faire ici : [Accès via FTP](gameserver-ftpaccess.md)

Navigue ensuite vers le répertoire suivant : /g******/terraria/mods/ où tu colleras le fichier **.tmod** que tu as utilisé précédemment :

![](https://screensaver01.zap-hosting.com/index.php/s/7NtFqes4g9JfQLW/preview)

:::info
S’il n’y a pas de fichier nommé **enabled.json**, tu dois d’abord démarrer le serveur, il devrait alors apparaître. Sinon, tu peux créer ce fichier toi-même.
:::

Ouvre ensuite le fichier **enabled.json** via **Clic droit > Modifier** et ajoute le nom de ton mod, cela doit ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/FECRXyNGsNNwadd/preview)

Si tu veux ajouter plusieurs mods, fais-le comme ceci :

![](https://screensaver01.zap-hosting.com/index.php/s/dtSqazRiH6zBRqD/preview)

:::info
Attention, il faut mettre une virgule après chaque nom de mod, sauf pour le dernier !
:::

Tu peux maintenant fermer la connexion FTP, démarrer ton serveur et te connecter avec le tModLoader que tu as téléchargé depuis Steam.

En appuyant sur **ESC**, puis en cliquant sur **Settings** et enfin sur **Mod Configuration**, tu verras les mods chargés sur le serveur :

<InlineVoucher />