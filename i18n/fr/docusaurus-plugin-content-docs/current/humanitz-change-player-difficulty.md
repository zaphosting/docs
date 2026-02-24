---
id: humanitz-change-player-difficulty
title: "HumanitZ : Modifier la difficulté des joueurs"
description: "Apprends à ajuster la difficulté des joueurs et les paramètres de survie sur ton serveur HumanitZ → Découvre tout maintenant"
sidebar_label: "Modifier la difficulté des joueurs"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

La difficulté des joueurs dans HumanitZ détermine à quel point l’expérience de survie est punitive. De la mort permanente à la vitesse de déperdition des signes vitaux en passant par la force des bandits, ces réglages impactent directement le niveau de challenge de ton serveur.

<InlineVoucher />

## Configuration

Les paramètres de difficulté des joueurs se gèrent dans le fichier `GameServerSettings.ini`. Tu peux accéder à ce fichier depuis ton panneau de gestion de serveur sous **Configs**. Dans ce fichier de config, repère les paramètres suivants :

````
;Quand activé à true, le joueur qui meurt perd son personnage et doit en créer un nouveau
PermaDeath=false

;0=Ne rien perdre, 1=Perdre sac à dos et arme en main, 2=Précédent + poches et sac à dos, 3=Tout ce qui précède + équipement
OnDeath=2

;Effet de privation de sommeil false=Désactivé true=Activé
Sleep=true

;Vitesse de déperdition des signes vitaux 0=Lent, 1=Normal, 2=Rapide
VitalDrain=1

;Santé du compagnon chien 0=Faible 1=Par défaut 2=Élevée
CompanionHealth=1

;Dégâts du compagnon chien 0=Faible 1=Par défaut 2=Élevé
CompanionDmg=1

;Temps en minutes avant le respawn des bandits humains, mettre à 0 pour désactiver le respawn des bandits humains.
HumanRespawnTimer=90

;Difficulté santé des bandits humains 0=Très facile, 1=Facile, 2=Par défaut, 3=Difficile, 4=Très difficile, 5=Cauchemar
HumanHealth=2

;Difficulté vitesse des bandits humains 0=Très facile, 1=Facile, 2=Par défaut, 3=Difficile, 4=Très difficile, 5=Cauchemar
HumanSpeed=2

;Difficulté dégâts des bandits humains 0=Très facile, 1=Facile, 2=Par défaut, 3=Difficile, 4=Très difficile, 5=Cauchemar
HumanDamage=2
````

Voici ce que chaque paramètre contrôle :

- `PermaDeath` – Si activé (`true`), les joueurs perdent définitivement leur personnage à la mort et doivent en créer un nouveau  
- `OnDeath` – Définit la quantité d’inventaire perdue à la mort  
- `Sleep` – Active ou désactive les effets de privation de sommeil  
- `VitalDrain` – Contrôle la vitesse à laquelle la faim, la soif et autres signes vitaux diminuent  
- `CompanionHealth` – Définit la santé du chien compagnon  
- `CompanionDmg` – Définit les dégâts du chien compagnon  
- `HumanRespawnTimer` – Temps avant le respawn des bandits humains (0 désactive le respawn)  
- `HumanHealth` – Ajuste la difficulté de la santé des bandits  
- `HumanSpeed` – Ajuste la difficulté de la vitesse des bandits  
- `HumanDamage` – Ajuste la difficulté des dégâts des bandits  

Modifie les valeurs selon le niveau de difficulté souhaité. Après avoir édité le fichier, sauvegarde tes changements et redémarre le serveur pour appliquer les nouveaux réglages.



## Exemples de presets de difficulté

### Configuration survie facile

Cette config offre une expérience plus détendue avec une déperdition vitale lente, des ennemis plus faibles et pas de mort permanente.

```
PermaDeath=false
OnDeath=1
Sleep=false
VitalDrain=0
CompanionHealth=2
CompanionDmg=2
HumanRespawnTimer=180
HumanHealth=1
HumanSpeed=1
HumanDamage=1
```



### Configuration survie difficile

Cette config augmente la pression de survie avec mort permanente, déperdition vitale rapide et bandits plus costauds.

```
PermaDeath=true
OnDeath=3
Sleep=true
VitalDrain=2
CompanionHealth=0
CompanionDmg=0
HumanRespawnTimer=60
HumanHealth=4
HumanSpeed=4
HumanDamage=4
```



## Conclusion

Bravo ! En ajustant les valeurs liées à la difficulté dans le fichier `GameServerSettings.ini`, tu as personnalisé avec succès la difficulté des joueurs sur ton serveur HumanitZ. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />