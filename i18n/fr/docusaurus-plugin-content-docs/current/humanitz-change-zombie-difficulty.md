---
id: humanitz-change-zombie-difficulty
title: "HumanitZ : Modifier la difficulté des zombies"
description: "Apprends à ajuster les paramètres de difficulté des zombies et de l’IA sur ton serveur HumanitZ → Découvre-en plus maintenant"
sidebar_label: "Modifier la difficulté des zombies"
services:
  - gameserver-humanitz

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

La difficulté des zombies joue un rôle clé dans l’expérience de survie sur HumanitZ. De la force et la vitesse des zombies aux multiplicateurs d’apparition et aux événements de raids IA, ces réglages déterminent à quel point le monde devient dangereux.

Toutes les options de difficulté liées aux zombies et à l’IA se configurent dans le fichier `GameServerSettings.ini` et te permettent de contrôler à fond l’intensité des rencontres PvE sur ton serveur.

<InlineVoucher />

## Configuration

Les paramètres de difficulté des zombies se gèrent dans le fichier `GameServerSettings.ini`. Tu peux accéder à ce fichier depuis ton panneau de gestion serveur, sous **Configs**. Dans ce fichier de config, repère les paramètres suivants :

```
;Health difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffHealth=1

;Speed difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffSpeed=2

;Damage difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffDamage=3

;Zombie amount multiplier 2 for example would mean twice as many zombies. 0.5 would mean half as many zombies.
ZombieAmountMulti=1

;Human bandit amount multiplier 2 for example would mean twice as many human bandits. 0.5 would mean half as many human bandits.
HumanAmountMulti=1

;Zombie dog mainly appear at night. 2 for example would mean twice as many zombie dogs. 0.5 would mean half as many zombie dogs.
ZombieDogMulti=1

;The time in minutes it takes for zombies to respawn, set to 0 to disable zombie respawning.
ZombieRespawnTimer=90

;The game will sometimes spawn AI events such as zombies or humans raiding your location. 0 = Disabled, 1 = Low, 2 = Default, 3 = High, 4 = Insane
AIEvent=2
```

Voici ce que contrôle chaque paramètre :

- `ZombieDiffHealth` – Gère la difficulté de la santé des zombies  
- `ZombieDiffSpeed` – Gère la vitesse de déplacement des zombies  
- `ZombieDiffDamage` – Gère les dégâts infligés par les zombies  
- `ZombieAmountMulti` – Multiplie le nombre total de zombies qui apparaissent  
- `HumanAmountMulti` – Multiplie le nombre de bandits humains qui apparaissent  
- `ZombieDogMulti` – Multiplie le nombre de chiens zombies qui apparaissent  
- `ZombieRespawnTimer` – Définit le temps en minutes avant que les zombies réapparaissent (0 désactive la réapparition)  
- `AIEvent` – Contrôle la fréquence des événements de raids IA  

Après avoir modifié, sauvegarde le fichier et redémarre le serveur pour appliquer les nouveaux réglages.



## Exemples de presets de difficulté

### Configuration Zombie Facile

Cette config crée une expérience PvE plus cool avec moins d’ennemis et un niveau de menace réduit.

```
ZombieDiffHealth=1
ZombieDiffSpeed=1
ZombieDiffDamage=1
ZombieAmountMulti=0.75
HumanAmountMulti=0.75
ZombieDogMulti=0.5
ZombieRespawnTimer=180
AIEvent=1
```



### Configuration Zombie Difficile

Cette config augmente la force ennemie, les taux d’apparition et la fréquence des événements pour un monde bien plus dangereux.

```
ZombieDiffHealth=4
ZombieDiffSpeed=4
ZombieDiffDamage=4
ZombieAmountMulti=1.5
HumanAmountMulti=1.5
ZombieDogMulti=2
ZombieRespawnTimer=60
AIEvent=3
```



## Conclusion

Bravo ! En ajustant les valeurs liées aux zombies dans le `GameServerSettings.ini`, tu as personnalisé avec succès la difficulté des zombies sur ton serveur HumanitZ. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />