---
id: satisfactory-commands
title: "Satisfactory : Commandes Console"
description: "Découvre comment optimiser ton expérience de jeu sur Satisfactory avec les commandes console essentielles et des astuces de raccourcis → Apprends-en plus maintenant"
sidebar_label: Commandes Console
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Satisfactory propose une large gamme de commandes utiles pour que les joueurs puissent ajuster les paramètres du client. Sur cette page, on résume les commandes populaires et pratiques que les joueurs utilisent fréquemment dans Satisfactory.

<InlineVoucher />

## Accéder à la console
Utiliser la console dans Satisfactory est super simple, il suffit d’appuyer sur la touche `` ` `` (le backtick se trouve au-dessus de la touche TAB) pour basculer la visibilité de la console. La console sera soit fermée, soit ouverte avec une petite fenêtre de commande en bas, soit complètement déployée à chaque fois que tu la toggles.

:::info
Si la touche backtick ne fonctionne pas chez toi, suis les étapes dans la sous-section ci-dessous pour configurer et activer un nouveau raccourci clavier.
:::

### Impossible d’accéder à la console
Parfois, à cause des claviers régionaux, la touche par défaut pour ouvrir la console (backtick) peut ne pas marcher, il faut donc en configurer une nouvelle. Avant ça, ferme Satisfactory s’il est lancé.

Appuie sur `Touche Windows + R` ou cherche dans ton menu démarrer `Exécuter`. Ensuite, copie ce chemin dedans :

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor
:::

Ouvre le fichier `Input.ini` avec un éditeur de texte (comme le bloc-notes).

![Screenshot 2023-02-22 011634](https://screensaver01.zap-hosting.com/index.php/s/re9wfZLbCosj5K5/preview)

Copie-colle ensuite exactement cette ligne à la fin du fichier :

`[/script/engine.inputsettings] ConsoleKey=F6`

![Screenshot 2023-02-22 011758](https://screensaver01.zap-hosting.com/index.php/s/Qta7zsNA9ofo3dp/preview)

Enfin, sauvegarde et relance ton jeu, tu pourras maintenant ouvrir la console avec la touche `F6` comme raccourci.

## Commandes Console

Le tableau ci-dessous présente la commande elle-même, les valeurs acceptées (si applicable) et une description pour mieux comprendre.

Pour afficher la liste complète des commandes, tape `?` dans la console, ça affichera une liste flottante de toutes les commandes disponibles. Tu peux naviguer dans cette liste avec les flèches `HAUT` et `BAS`.

Voici un exemple d’utilisation de `?` pour voir toutes les commandes.

![Screenshot 2023-02-22 015435](https://screensaver01.zap-hosting.com/index.php/s/gS7bSwCFNngz8yx/preview)

:::info
Toutes les commandes mentionnées sur cette page concernent la version vanilla de Satisfactory.
:::

| Syntaxe de la commande         | Valeurs acceptées | Description | 
| ----------------------------- | ----------------- | ----------- | 
| ?                             | -                 | Affiche la liste complète des commandes         | 
| Stat FPS                      | -                 | Active/désactive le compteur FPS intégré en jeu         | 
| Stat UNIT                     | -                 | Affiche le temps de frame, données du jeu, temps de rendu et quelques autres stats         | 
| t.MaxFPS "maxfps"             | Entier (ex : 120) | Définit le FPS max du jeu         | 
| r.ScreenPercentage "valeur"   | Entier (par défaut 100) | Change l’échelle de résolution de l’écran (uniquement pour le rendu du monde, pas l’UI)         | 
| r.ViewDistanceScale "valeur"  | Entier (par défaut 1)   | Modifie la distance de rendu des objets comme les rochers ou arbres         | 
| Suicide                      | -                 | Tue ton propre joueur         | 
| FOV "valeur"                 | Entier (ex : 90)  | Définit le champ de vision (FOV) du jeu         | 
| r.Atmosphere "1 ou 0"        | vrai (1)/faux (0) | Active/désactive l’atmosphère dans le jeu        | 
| r.Fog "1 ou 0"               | vrai (1)/faux (0) | Active/désactive le brouillard dans le jeu         | 
| Gamma "valeur"               | Entier (par défaut 50) | Définit le niveau de luminosité du jeu         | 

Pour une liste plus complète des commandes, visite [le wiki Satisfactory](https://satisfactory.fandom.com/wiki/Console) qui couvre en détail une gamme de commandes plus techniques.

<InlineVoucher />