---
id: satisfactory-connect
title: "Satisfactory : Se connecter au serveur"
description: "Découvrez comment vous connecter et gérer efficacement votre serveur de jeux Satisfactory pour une expérience de jeu fluide → En savoir plus maintenant"
sidebar_label: Se connecter au serveur
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/2tJwRJe9dbfgLBE/preview" title="Comment créer un serveur Satisfactory chez ZAP et uploader votre propre sauvegarde" description="Vous préférez comprendre en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous aimiez simplement apprendre de la manière la plus cool possible !" />

:::info
Si vous utilisez déjà une disposition de clavier QWERTY, ne faites pas ces étapes, appuyez simplement sur CTRL + SHIFT + L et ouvrez la console avec ~
:::

Pour vous connecter à votre serveur de jeux Satisfactory, il faut ouvrir la console du jeu, il y a deux façons de faire ça.

<InlineVoucher />

## Ouvrir la console

### Changer la disposition du clavier
Vous pouvez facilement changer la disposition de votre clavier en quelques étapes.
Lancez votre jeu Satisfactory jusqu’au menu principal.
Appuyez maintenant sur `CTRL + Shift`, la disposition de votre clavier devrait passer en `EN`.
Vous pouvez vérifier si ça a marché en allant sur votre bureau et en regardant si `EN` apparaît en bas à droite dans la barre des tâches.

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

Si le changement a réussi, retournez dans le jeu, appuyez maintenant sur `CTRL + SHIFT + L`
Appuyez ensuite sur `^` sur votre clavier, cela devrait ouvrir la console.

### Modifier la touche qui ouvre la console
Appuyez sur `Touche Windows + R` ou cherchez dans votre menu démarrer `Exécuter`
Copiez ce chemin dedans :

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 
:::

et appuyez sur Entrée.

Ouvrez maintenant le fichier Input.ini avec l’éditeur de votre choix (par exemple Notepad)

:::info
Si le fichier n’existe pas encore, créez-le simplement.
:::

Ajoutez ce texte dans votre fichier :

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

Sauvegardez et relancez le jeu - vous pouvez maintenant ouvrir la console avec `F6`

## Connectez-vous à votre serveur de jeux Satisfactory
Copiez l’adresse IP depuis le tableau de bord de votre serveur :

![](https://screensaver01.zap-hosting.com/index.php/s/7KJPTHTx4NJ8B3M/preview)

Ouvrez la console dans le jeu, comme expliqué dans les étapes précédentes

Tapez maintenant `open Adresse-IP-de-votre-serveur` dedans.

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

et appuyez sur Entrée.

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

Vous êtes maintenant connecté à votre serveur Satisfactory !

## Le HUB
Le HUB est déjà placé dans le monde, vous pouvez le détruire si vous voulez en appuyant sur `F` et le replacer ailleurs.
Vous trouverez facilement le HUB en suivant le marqueur.

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## Sauvegarde automatique
Le serveur sauvegarde votre progression toutes les 5 minutes, vous pouvez les voir dans le gestionnaire de sauvegardes dans le tableau de bord de votre serveur.
Il garde toujours les 6 dernières sauvegardes (30 minutes) de progression.

<InlineVoucher />