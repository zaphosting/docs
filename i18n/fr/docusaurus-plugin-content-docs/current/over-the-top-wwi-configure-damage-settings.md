---
id: over-the-top-wwi-configure-damage-settings
title: "Over the Top WWI : Configurer les paramètres de dégâts"
description: "Apprends à ajuster les dégâts et le comportement en combat sur ton serveur Over the Top WWI → Découvre tout maintenant"
sidebar_label: Paramètres de dégâts
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les paramètres de dégâts dans **Over the Top WWI** déterminent la létalité des combats et le comportement des armes pendant le jeu. Ajuster ces valeurs te permet de créer une expérience plus réaliste ou un environnement plus casual et indulgent.

En modifiant les multiplicateurs de dégâts et les mécaniques de combat, tu peux influencer significativement la rapidité avec laquelle les joueurs sont éliminés et la manière dont les affrontements se déroulent.

<InlineVoucher />

## Configuration

Les paramètres de dégâts se configurent dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous l’onglet **Configs**. Trouve et ouvre le fichier de configuration `ServerConfiguration.ini`. Dans ce fichier, repère les paramètres suivants :

```
ShootingDamageMulti = 100
MeleeDamageMulti = 300
ShootingVelocityMulti = 100
DragEffector = 30
WindEffector = 15
RandomEffectorr = 10
```

- `ShootingDamageMulti` contrôle les dégâts infligés par les armes à distance

- `MeleeDamageMulti` définit les dégâts des attaques au corps à corps

- `ShootingVelocityMulti` affecte la vitesse des projectiles et peut influencer la précision et la détection des impacts

- `DragEffector` influence la vitesse à laquelle les balles perdent de la vitesse sur la distance

- `WindEffector` détermine la force avec laquelle le vent affecte la trajectoire des balles

- `RandomEffectorr` ajoute un facteur aléatoire au comportement des balles, impactant la précision

Ajuster ces valeurs te permet de créer un comportement balistique plus réaliste ou de simplifier les mécaniques de combat selon le style de ton serveur.

Après avoir modifié le fichier `ServerConfiguration.ini`, sauvegarde-le et redémarre ton serveur. Les nouveaux paramètres de dégâts et de combat seront appliqués automatiquement.

## Conclusion

Félicitations ! Tu as configuré avec succès les paramètres de dégâts sur ton **serveur Over the Top WWI**. En ajustant ces paramètres, tu peux affiner le comportement des combats et créer une expérience de jeu qui colle parfaitement à ta communauté.

Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />