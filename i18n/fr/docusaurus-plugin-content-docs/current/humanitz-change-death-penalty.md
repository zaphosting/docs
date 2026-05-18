---
id: humanitz-change-death-penalty
title: "HumanitZ : Modifier la pénalité de mort"
description: "Découvrez comment ajuster les paramètres de la pénalité de mort sur votre serveur HumanitZ → En savoir plus maintenant"
sidebar_label: Modifier la pénalité de mort
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';



## Introduction

La pénalité de mort dans HumanitZ détermine ce qu’un joueur perd après sa mort. Selon le style de jeu de votre serveur, vous pouvez préférer une expérience de survie plus indulgente ou un système plus dur qui augmente la tension et le risque.

<InlineVoucher />



## Configuration

La pénalité de mort est contrôlée dans le fichier `GameServerSettings.ini`. Vous pouvez accéder à ce fichier dans votre panneau de gestion du serveur sous **Configs**. Dans le fichier de config, localisez le paramètre suivant :

```
;0=Ne rien perdre, 1=Perdre le sac à dos et l’arme en main, 2=Précédent + poches et contenu du sac à dos, 3=Tout ce qui précède + équipement
OnDeath=2
```

La valeur après `OnDeath=` détermine la quantité d’inventaire perdue par un joueur à sa mort :

- `0` – Les joueurs ne perdent rien  
- `1` – Les joueurs perdent leur sac à dos et l’arme qu’ils tiennent en main  
- `2` – Pertes précédentes + poches et contenu du sac à dos  
- `3` – Tout ce qui précède + équipement porté  

Pour ajuster la pénalité, il suffit de changer le chiffre selon votre préférence. Après avoir modifié le fichier, sauvegardez les changements et redémarrez le serveur pour que la nouvelle configuration soit prise en compte.



## Conclusion

Félicitations ! En modifiant la valeur `OnDeath` dans le fichier `GameServerSettings.ini`, vous avez configuré avec succès la pénalité de mort sur votre serveur HumanitZ. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂



<InlineVoucher />