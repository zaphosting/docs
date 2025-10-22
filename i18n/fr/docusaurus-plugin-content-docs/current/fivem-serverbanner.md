---
id: fivem-serverbanner
title: "FiveM : Configure ta propre bannière de serveur"
description: "Découvre comment améliorer l’apparence de ton serveur FiveM avec une bannière personnalisée pour un look unique et pro → En savoir plus maintenant"
sidebar_label: Configurer la bannière du serveur
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une bannière de serveur personnalisée, c’est un moyen simple mais super efficace pour faire ressortir ton serveur FiveM. Ça donne un look unique à ton serveur dans la liste des serveurs et ça ajoute une touche pro quand les joueurs se connectent.

Que tu utilises une capture d’écran perso ou un visuel designé, configurer une bannière aide ta communauté à reconnaître ton serveur en un coup d’œil et fait une super première impression.

<InlineVoucher />

## Configuration

Pour configurer une bannière personnalisée sur ton serveur FiveM, il te faut d’abord une image adaptée. On te conseille de faire une capture d’écran en jeu qui représente bien ton serveur. Tu peux faire ça rapidement en appuyant sur la touche **F8** pendant que tu joues, puis en tapant la commande `screenshot`.

Une fois ta capture prête, héberge-la sur un service d’hébergement d’images qui fournit un **lien direct** vers le fichier image (par exemple, un lien qui finit par `.jpg` ou `.png`). Assure-toi que l’image est accessible via une URL directe.

![img](https://screensaver01.zap-hosting.com/index.php/s/4sCEeKkyGEm3EXd/preview) 

Pour ajouter la bannière, ouvre ton tableau de bord txAdmin et va dans les paramètres de configuration de ton serveur. Cherche le champ **URL de la bannière du serveur** et colle ton lien direct vers l’image. Sauvegarde les modifications. Ta bannière personnalisée apparaîtra maintenant dans les détails de ton serveur quand les joueurs le verront dans la liste.

```
# Définit une URL optionnelle pour la bannière d’info serveur et celle de connexion.
# La taille n’a pas d’importance, n’importe quelle image au format bannière fera l’affaire.
sets banner_detail "https://url.to/image.png"
sets banner_connecting "https://url.to/image.png"
```

Remplace les URLs d’exemple par le lien direct vers ton image hébergée. Sauvegarde le fichier dans l’éditeur CFG et redémarre ton serveur pour appliquer les changements.

## Conclusion

Ta bannière personnalisée apparaîtra désormais dans la liste des serveurs et pendant l’écran de connexion, rendant ton serveur plus unique et pro. Si tu as des questions ou besoin d’aide, n’hésite surtout pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />