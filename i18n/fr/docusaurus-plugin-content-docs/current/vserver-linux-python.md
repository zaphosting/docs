---
id: vserver-linux-python
title: "Installer Python sur un serveur Linux - Active le dev et l’automatisation"
description: "Apprends à installer et mettre à jour l’environnement Python sur différentes distrib Linux pour garantir un environnement sécurisé et à jour → Découvre ça maintenant"
sidebar_label: Installer Python
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ce guide te montre comment installer l’environnement Python et venv. Ces commandes doivent être lancées via SSH, si tu ne sais pas comment te connecter à ton serveur en SSH, utilise notre [Guide d’accès initial (SSH)](vserver-linux-ssh.md) pour en savoir plus.

<InlineVoucher />

## Préparation

Avant d’installer quoi que ce soit sur un serveur, il est recommandé de lancer la commande de mise à jour adaptée à ton système d’exploitation pour garder ton serveur sécurisé.

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

La plupart des distrib Linux ont Python préinstallé, mais la version peut ne pas être à jour ou le système peut avoir été installé sans certains paquets. Tu peux vérifier si Python est installé (`python3 --version`) et lancer les commandes suivantes pour mettre à jour ou installer l’environnement.

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // Vérifie la version
  python3 --version

  // Mets à jour / installe l’environnement
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // Vérifie la version
  python3 --version

  // Mets à jour l’environnement
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // Vérifie la version
  python3 --version

  // Mets à jour l’environnement
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // Vérifie la version
  python3 --version

  // Mets à jour l’environnement
  sudo dnf install python3
```

</TabItem>
</Tabs>

## Exécuter du code

Maintenant que Python est installé sur ton serveur, tu peux commencer à lancer tes programmes Python.

### Mode interpréteur

La commande `python3` lance l’interpréteur Python. Tu peux écrire n’importe quel code Python valide après le prompt `>>>` et il sera exécuté quand tu appuieras sur `Entrée`. Pour quitter l’interpréteur, tape `exit()` dans la console.

### Lancer des fichiers .py

Pour lancer des fichiers Python `.py`, utilise simplement la commande `python3 [nomdufichier].py`, en remplaçant `[nomdufichier]` par le chemin vers le fichier que tu veux exécuter.

:::tip
La plupart des programmes que tu trouves en ligne se lancent avec `python3 main.py` car `main.py` est souvent le point de départ des programmes Python.
:::

## Environnements virtuels

Quand tu écris un programme Python, tu peux avoir besoin d’installer des paquets externes via pip. Ces paquets peuvent être installés globalement et accessibles à tous les scripts `.py`, ou tu peux créer un environnement virtuel (venv).

### Créer le venv

D’abord, va dans le dossier où tu veux créer ton venv avec `cd`, puis lance `python3 -m venv .` pour installer les fichiers nécessaires à l’emplacement courant.

### Activation & désactivation

Pour lancer des commandes comme `pip install` dans ton venv, tu dois l’activer avec `source /bin/activate`. Ton terminal fonctionnera alors uniquement dans le venv et les scripts n’auront accès qu’aux paquets installés localement.

Quand tu as fini de bosser dans le venv, tu peux revenir à l’environnement normal avec la commande `deactivate`.


## Conclusion

Bravo, tu as installé et configuré Python avec succès ! Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !

<InlineVoucher />