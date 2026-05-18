---
id: dedicated-linux-java
title: "Configurer Java sur un serveur Linux - Exécutez des applications et services basés sur Java"
description: "Apprenez à installer Java sur différents systèmes Linux pour faire tourner vos applications Java sans accroc et assurez-vous que votre environnement est bien configuré → Découvrez-le maintenant"
sidebar_label: Installer Java
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Java est un langage de programmation super populaire utilisé partout dans le monde pour plein de programmes et services. Pour faire tourner ces programmes basés sur Java, il est absolument nécessaire que Java soit installé sur le système. Dans ce guide, tu vas apprendre comment installer Java sur ton système pour les systèmes Linux proposés.

## Préparation

Avant de lancer l’installation de Java, il faut s’assurer que ton système est à jour. Pour ça, on se connecte au serveur via SSH. Si tu ne sais pas ce qu’est SSH ni comment l’utiliser, jette un œil à ce guide : [Accès initial (SSH)](vserver-linux-ssh.md)

Une fois connecté, tu peux mettre à jour le système avec la commande adaptée à ton système d’exploitation :

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## Installation

Après la préparation, tu peux lancer l’installation de Java. Selon ton système d’exploitation, exécute la commande correspondante :

**Debian**

```
sudo apt-get install default-jdk
```

**Ubuntu**

```
sudo apt install default-jdk
```

**CentOS**

```
sudo yum install java-11-openjdk
```

**Fedora**

```
sudo dnf install java-11-openjdk
```

## Vérification de la version

Tu peux vérifier si l’installation a réussi avec la commande **java --version**. Le résultat devrait ressembler à ça :

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

Ici, Java 11 a été installé avec succès sur ton système. Tu peux maintenant lancer tes applications Java facilement sur ton serveur.