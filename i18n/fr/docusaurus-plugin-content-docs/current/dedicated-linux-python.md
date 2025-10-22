---
id: dedicated-linux-python
title: "Serveur dédié : Installation de Python"
description: "Apprends à installer et mettre à jour l’environnement Python sur différentes distributions Linux pour garantir un environnement sécurisé et à jour → Découvre-le maintenant"
sidebar_label: Installer Python
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ce guide te donne les étapes pour installer l’environnement Python et venv. Ces commandes doivent être exécutées via SSH, si tu ne sais pas comment te connecter à ton serveur via SSH, utilise notre [guide d’accès initial (SSH)](vserver-linux-ssh.md) pour en savoir plus.

<InlineVoucher />

## Préparation

Avant d’installer quoi que ce soit sur un serveur, il est recommandé de lancer la commande de mise à jour correspondant à ton système d’exploitation pour garder ton serveur sécurisé.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Installation

La plupart des distributions Linux ont Python préinstallé, mais la version peut ne pas être à jour ou le système peut avoir été installé sans certains paquets. Tu peux vérifier si Python est installé (`python3 --version`) et lancer les commandes suivantes pour mettre à jour ou installer l’environnement.

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // Vérifier la version
  python3 --version

  // Mettre à jour / installer l’environnement
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // Vérifier la version
  python3 --version

  // Mettre à jour l’environnement
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // Vérifier la version
  python3 --version

  // Mettre à jour l’environnement
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // Vérifier la version
  python3 --version

  // Mettre à jour l’environnement
  sudo dnf install python3
```

</TabItem>
</Tabs>

## Exécuter du code

Maintenant que Python est installé sur ton serveur, tu peux commencer à lancer tes programmes Python.

### Mode interpréteur

La commande `python3` lance l’interpréteur Python. Tu peux écrire n’importe quel code Python valide après le préfixe `>>>` et il sera exécuté après avoir appuyé sur `Entrée`. Tu peux quitter l’interpréteur en tapant `exit()` dans la console.

### Exécuter des fichiers .py

Pour lancer des fichiers Python `.py`, utilise simplement la commande `python3 [nom_du_fichier].py`, en remplaçant `[nom_du_fichier]` par le chemin vers le fichier que tu souhaites exécuter.

:::tip
La plupart des programmes que tu trouves en ligne peuvent être lancés avec `python3 main.py` car `main.py` est le point de départ classique de la plupart des programmes Python.
:::

## Environnements virtuels

Quand tu écris un programme Python, tu peux avoir besoin d’installer des paquets externes via pip. Ces paquets peuvent être installés globalement et donc accessibles à tous les scripts `.py`, ou tu peux créer un environnement virtuel (venv).

### Créer le venv

D’abord, rends-toi dans le dossier où tu veux créer ton venv avec `cd`, puis lance `python3 -m venv .` pour installer les fichiers nécessaires à l’emplacement courant.

### Activation & désactivation

Pour lancer des commandes comme `pip install` dans ton venv, tu dois l’activer avec `source /bin/activate`. Maintenant, ta console fonctionnera uniquement dans le venv et les scripts n’auront accès qu’aux paquets installés localement.

Quand tu as fini de bosser dans le venv, tu peux revenir à l’environnement normal en lançant la commande `deactivate`.

<InlineVoucher />