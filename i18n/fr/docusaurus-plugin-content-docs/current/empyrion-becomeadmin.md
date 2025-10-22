---
id: empyrion-becomeadmin
title: "Empyrion : Deviens Admin"
description: "Apprends à attribuer les permissions d’administrateur pour un contrôle total de ton serveur et gérer efficacement les fonctions du jeu → Découvre tout maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer les permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes pour attribuer les permissions d’administrateur à ton serveur sont expliquées ci-dessous.  
<InlineVoucher />

## Trouver ton Steam64ID

La première étape est de trouver ton Steam64ID.  
Tu peux utiliser cet outil : [SteamID Lookup](https://steamid.io/lookup).  
L’ID sera ensuite à insérer dans le fichier de configuration.

Voici un exemple de comment récupérer ton steamid en entrant le lien de ton profil :

![](https://screensaver01.zap-hosting.com/index.php/s/3LQXKFg58qXCCHw/preview)

## Configurer adminconfig

Le fichier "**adminconfig.yaml**" à modifier se trouve dans le dossier "**Saves**".  
Pour ouvrir ce dossier, suis les instructions du [Guide d’accès via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/XtfdjdgoxcqXsWx/preview)

Voici les valeurs par défaut :

![](https://screensaver01.zap-hosting.com/index.php/s/Tpf23riFnGfZAsP/preview)

Il faut maintenant remplacer la valeur après "**Id:**" par le Steam64ID que tu as récupéré.

![](https://screensaver01.zap-hosting.com/index.php/s/RHEr44CGsaLQWyY/preview)

Avec "**Permission**", tu définis le rang à attribuer à l’utilisateur.  
Les rangs sont attribués comme suit :

Permission | Rang
-----|-------
3 | gamemaster
6 | modérateur
9 | admin


## Conclusion

Félicitations, tu as configuré avec succès les permissions d’administrateur. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />