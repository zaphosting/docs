---
id: vserver-vnc
title: "VPS : console VNC (Virtual Network Computing)"
description: "Découvrez comment accéder et contrôler votre serveur à distance, même pendant le démarrage ou en cas de problèmes réseau, pour une gestion sans accroc → En savoir plus maintenant"
sidebar_label: Console VNC
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

VNC (Virtual Network Computing) est un logiciel qui affiche le contenu de l’écran d’un ordinateur distant sur un ordinateur local et renvoie en retour les mouvements clavier et souris de l’ordinateur local vers l’ordinateur distant. Cela te permet d’accéder à ton serveur à distance même s’il ne fonctionne pas correctement.

En cas de problèmes de démarrage ou de réseau, tu as toujours la possibilité d’accéder au système et de prendre des mesures correctives.

<InlineVoucher />


## Utilisation de VNC
Le client web VNC se trouve dans le tableau de bord de ton VPS. Pour y accéder, clique sur l’option console série dans la section outils de l’administration, puis ouvre la connexion VNC via le bouton **Démarrer le tunnel VNC**.

![](https://screensaver01.zap-hosting.com/index.php/s/AgSL8QcynHSfXFA/preview)



Ensuite, le client web de la console VNC s’ouvrira. Ici, tu peux voir les informations que le serveur fournit à l’instant T. Cela peut être par exemple le processus de démarrage, l’écran de connexion ou l’interface graphique du système d’exploitation.

L’exemple suivant montre un VPS Windows. Ce serveur a démarré avec succès, donc la console VNC affiche l’écran de connexion à ce stade. Tu peux te connecter ici aussi, même si le serveur n’a pas de connexion internet active. Clique sur le bouton "Envoyer CtrlAltDel" et connecte-toi avec ton nom d’utilisateur et ton mot de passe.



![](https://screensaver01.zap-hosting.com/index.php/s/XTFS35AJBJaS86r/preview)

<InlineVoucher />