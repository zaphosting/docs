---
id: over-the-top-wwi-configure-voice-chat
title: "Over the Top WWI : Configurer le chat vocal"
description: "Apprends à activer et configurer le chat vocal sur ton serveur Over the Top WWI → Découvre-le maintenant"
sidebar_label: Chat vocal
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le chat vocal permet aux joueurs de ton **serveur de jeux Over the Top WWI** de communiquer directement pendant la partie. Ça améliore la coordination, le travail d’équipe et l’immersion globale, surtout dans les scénarios tactiques.

En configurant les paramètres du chat vocal, tu peux contrôler si la communication est autorisée, ajuster la qualité, et définir comment le chat vocal fonctionne pendant les matchs.

<InlineVoucher />

## Configuration

Les paramètres du chat vocal se configurent dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier de configuration `ServerConfiguration.ini`. Dans ce fichier, repère les paramètres suivants :

```
VoipAllowed = 1
VoipQuality = 0
VoipDelay = 0
```

- `VoipAllowed` active ou désactive le chat vocal sur le serveur  
- `VoipQuality` contrôle le niveau de qualité vocale  
- `VoipDelay` ajoute un délai en secondes avant que les joueurs puissent utiliser le chat vocal après leur spawn  

Ajuste ces valeurs selon tes préférences serveur et les besoins en performance. Des réglages de qualité plus bas peuvent être utiles pour les serveurs avec beaucoup de joueurs ou une bande passante limitée.

Après avoir modifié le `ServerConfiguration.ini`, sauvegarde le fichier et redémarre ton serveur. Les paramètres du chat vocal seront alors appliqués automatiquement.

## Conclusion

Bravo ! Tu as configuré avec succès le chat vocal sur ton **serveur Over the Top WWI**. Ça permet aux joueurs de communiquer efficacement et booste le travail d’équipe pendant les matchs.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />