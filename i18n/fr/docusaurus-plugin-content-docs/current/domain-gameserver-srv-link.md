---
id: domain-gameserver-srv-link
title: "Domaine : Configurer la redirection vers un serveur de jeux"
description: "Découvre comment rediriger ton domaine ou sous-domaine vers un serveur de jeux pour un accès simplifié et une meilleure connectivité → En savoir plus maintenant"
sidebar_label: Redirection serveur de jeux
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu peux soit rediriger entièrement ton domaine, soit seulement un sous-domaine vers ton serveur de jeux. C’est super pratique parce que ça permet aux gens de se connecter à ton serveur via un domaine, au lieu de devoir retenir des adresses IP compliquées composées uniquement de chiffres. Dans ce guide, on va voir comment configurer un domaine pour qu’il redirige vers ton serveur de jeux via des enregistrements DNS.

<InlineVoucher />

:::info
Note bien que les modifications des entrées DNS peuvent prendre jusqu’à 24 heures avant d’être actives !
:::

## Fonctionnalité

Pour rediriger l’adresse IP, soit tu crées un sous-domaine qui pointe vers l’adresse IP du serveur de jeux, soit tu rediriges le domaine entier sans sous-domaine. Ça suffit si ton serveur de jeux utilise le port par défaut du jeu. Si ton serveur utilise un port différent du port par défaut, tu auras besoin d’un **enregistrement SRV** supplémentaire pour rediriger le sous-domaine vers le serveur de jeux.

:::info
Tous les jeux ne supportent pas la redirection d’un domaine vers le port du jeu via un enregistrement SRV, alors renseigne-toi avant pour savoir si ton jeu supporte les enregistrements SRV.
:::

### Service SRV

Le nom du service dépend du jeu et commence toujours par un **underscore**. Par exemple, pour un serveur Minecraft, le nom du service est toujours **_minecraft** et pour un serveur FiveM c’est **_cfx**.

### Protocole SRV

Le protocole spécifie le protocole internet utilisé pour la connexion. Ici, on peut choisir entre **UDP** et **TCP**. Le protocole utilisé dépend aussi du jeu, et la spécification commence toujours par un **underscore**, soit **_udp** soit **_tcp**.

## Préparation

Pour rediriger ton domaine vers un serveur de jeux sans créer de sous-domaine, commence par ouvrir ton domaine dans le tableau de bord, puis ouvre la gestion DNS depuis le menu à gauche.

![](https://screensaver01.zap-hosting.com/index.php/s/X8q3jdigEdZrRaB/preview)

Tu verras alors tous les enregistrements DNS existants pour ton domaine.

![](https://screensaver01.zap-hosting.com/index.php/s/zRzCnwbqYxaeSiJ/preview)

## Redirection de domaine (Minecraft)

D’abord, il faut récupérer l’IP et le port du serveur Minecraft vers lequel tu veux rediriger. Avec ces infos, tu peux suivre les étapes suivantes.

Dans notre exemple, on utilise `testserver-domain.de` comme nom de domaine, `123.123.123.123` comme IP du serveur et `25500` comme PORT.

### Créer un enregistrement A

Pour créer un nouvel enregistrement, clique sur le bouton **Nouvelle entrée**.

Une fenêtre avec quatre champs à remplir s’ouvre :

![](https://screensaver01.zap-hosting.com/index.php/s/BYNiFMMwdwjEHwZ/preview)

Le **Nom** correspond au domaine principal ou sous-domaine qui sera redirigé vers l’IP, ce nom est librement choisissable. Le **Type** reste sur **A** à cette étape. Dans le champ **Valeur**, il faut entrer uniquement l’IP du serveur Minecraft que tu as récupérée. Dans notre exemple, ça donne ça :

![](https://screensaver01.zap-hosting.com/index.php/s/aRYpxgrySQqzton/preview)

Une fois sauvegardé, cet enregistrement s’affiche correctement :

![](https://screensaver01.zap-hosting.com/index.php/s/eFLm8oqbo4cLtn8/preview)

### Créer un enregistrement SRV

Maintenant, il faut créer un enregistrement SRV, qui sert à la redirection de port, nécessaire si tu n’as pas le port par défaut. Clique à nouveau sur **Nouvelle entrée**.

Dans **Nom**, tu dois entrer le protocole et le domaine de connexion. Le nom de domaine que tu mets ici sera utilisé plus tard pour la connexion au serveur. Pour le **Type**, choisis **SRV** dans le menu déroulant :

![](https://screensaver01.zap-hosting.com/index.php/s/pH9F5kZins8wHn4/preview)

Dans **Valeur**, tu dois entrer trois valeurs : d’abord la priorité (par défaut 0), ensuite le port du serveur de jeux (dans notre exemple `25500`), et enfin le nom de domaine de l’enregistrement **A** que tu viens de créer.

Dans notre exemple, ça donne ça :

![](https://screensaver01.zap-hosting.com/index.php/s/Gf8kkc5srHEbC2N/preview)

### Résolution de problèmes & Résultat

:::important
À la fin de l’entrée, il faut impérativement mettre un point. Sans ce point, le système essaiera d’ajouter le domaine automatiquement.
:::

Si tu ne respectes pas cette règle, le système redirigera `minecraft.testserver-domain.de` vers `minecraft.testserver-domain.de.testserver-domain.de` et la redirection échouera.

## Redirection de domaine (FiveM)

D’abord, récupère l’IP et le port du serveur FiveM vers lequel tu veux rediriger. Avec ces infos, tu peux suivre les étapes suivantes.

Dans notre exemple, on utilise `testserver-domain.de` comme nom de domaine, `123.123.123.123` comme IP du serveur et `30300` comme PORT.

### Créer un enregistrement A

Pour créer un nouvel enregistrement, clique sur le bouton **Nouvelle entrée**.

Une fenêtre avec quatre champs à remplir s’ouvre :

![](https://screensaver01.zap-hosting.com/index.php/s/FigmCXEc3eJYz78/preview)

Le **Nom** correspond au domaine principal ou sous-domaine qui sera redirigé vers l’IP, ce nom est librement choisissable. Le **Type** reste sur **A** à cette étape. Dans le champ **Valeur**, il faut entrer uniquement l’IP du serveur FiveM que tu as récupérée. Dans notre exemple, ça donne ça :

![](https://screensaver01.zap-hosting.com/index.php/s/7dBKaJ4xomTiS9C/preview)

Une fois sauvegardé, cet enregistrement s’affiche correctement :

![](https://screensaver01.zap-hosting.com/index.php/s/5DppfyXsADTT85t/preview)

### Créer un enregistrement SRV

Maintenant, il faut créer un enregistrement SRV, qui sert à la redirection de port, nécessaire si tu n’as pas le port par défaut. Clique à nouveau sur **Nouvelle entrée**.

Dans **Nom**, tu dois entrer le protocole et le domaine de connexion. Le nom de domaine que tu mets ici sera utilisé plus tard pour la connexion au serveur. Pour le **Type**, choisis **SRV** dans le menu déroulant :

![](https://screensaver01.zap-hosting.com/index.php/s/Yab6ksJNJFTLAeB/preview)

Dans **Valeur**, tu dois entrer trois valeurs : d’abord la priorité (par défaut 0), ensuite le port du serveur de jeux (dans notre exemple `30300`), et enfin le nom de domaine de l’enregistrement **A** que tu viens de créer.

Dans notre exemple, ça donne ça :

![](https://screensaver01.zap-hosting.com/index.php/s/te4LJ3yKRpTSi5W/preview)

### Résolution de problèmes & Résultat

:::important
À la fin de l’entrée, il faut impérativement mettre un point. Sans ce point, le système essaiera d’ajouter le domaine automatiquement.
:::

Si tu ne respectes pas cette règle, le système redirigera `fivem.testserver-domain.de` vers `fivem.testserver-domain.de.testserver-domain.de` et la redirection échouera.

<InlineVoucher />