---
id: dedicated-windows-python
title: 'Serveur dédié : Installation de Python'
description: "Apprends à installer et configurer l’environnement Python sur des serveurs Windows pour faire tourner tes programmes Python efficacement → Découvre-le maintenant"
sidebar_label: Installer Python
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ce guide te montre les étapes pour installer l’environnement Python sur Windows. Les étapes ci-dessous doivent être réalisées via RDP. Si tu ne sais pas comment te connecter à ton serveur via RDP, jette un œil à notre [guide d’accès initial (RDP)](vserver-windows-userdp.md).

<InlineVoucher />

## Installation

### Étape 1 : Télécharger les fichiers
Ouvre le navigateur de ton choix (je vais utiliser Chrome pour ce guide) et rends-toi sur [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

Clique ensuite sur le bouton `Download Python [version]` et attends que le téléchargement soit terminé.

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### Étape 2 : Installer Python
Lance l’installateur en cliquant dessus. Tu vas devoir configurer quelques options pour l’installation. Assure-toi que la case `Add python.exe to PATH` en bas est cochée (ça facilitera l’exécution des fichiers Python plus tard) puis clique sur le bouton `Install Now`.

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### Étape 3 : Finaliser l’installation
Patiente pendant que tous les fichiers s’installent. Ça peut prendre un peu de temps, sois patient. :)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

Une fois terminé, clique simplement sur `Close` et tu peux commencer à utiliser Python sur ton serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## Exécuter du code

Maintenant que Python est installé sur ton serveur, tu peux lancer tes programmes Python.

### Mode interpréteur

Lancer la commande `python` dans une fenêtre Command Prompt ou PowerShell ouvrira l’interpréteur Python. Tu peux écrire n’importe quel code Python valide après le prompt `>>>` et il sera exécuté dès que tu appuieras sur `Entrée`. Pour quitter l’interpréteur, tape `exit()` ou ferme simplement la fenêtre.

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### Exécuter des fichiers .py

Pour lancer des fichiers Python `.py`, utilise la commande `python3 [nomdufichier].py`, en remplaçant `[nomdufichier]` par le chemin vers le fichier que tu veux exécuter. Ça se fait aussi via Command Prompt ou PowerShell.

:::tip
La plupart des programmes que tu trouves en ligne peuvent être lancés avec `python3 main.py` car `main.py` est souvent le point de départ des programmes Python.
:::

Tu peux aussi lancer des fichiers Python (.py) en les ouvrant directement ou en faisant un clic droit et en sélectionnant Python via Windows.

## Environnements virtuels

Quand tu écris un programme Python, tu peux avoir besoin d’installer des paquets externes via pip. Ces paquets peuvent être installés globalement (disponibles pour tous les scripts `.py`) ou dans un environnement virtuel (venv).

### Créer le venv

D’abord, navigue dans le dossier où tu veux créer ton venv avec l’explorateur de fichiers, puis lance la commande `python -m venv .` pour installer les fichiers nécessaires à cet emplacement.

### Activer & désactiver

Pour utiliser des commandes comme `pip install` dans ton venv, tu dois l’activer avec `.\Scripts\activate`. Ton terminal fonctionnera alors uniquement dans le venv et les scripts n’auront accès qu’aux paquets installés localement.

Quand tu as fini de bosser dans le venv, tu peux revenir à l’environnement normal en lançant la commande `deactivate`.

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)

## Conclusion

Félicitations, tu as installé Python avec succès ! Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />