---
id: vserver-windows-rdp-port
title: "VPS : Changer le port RDP Windows"
description: "Découvrez comment changer le port RDP Windows → En savoir plus maintenant"
sidebar_label: Changer le port RDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Le protocole Remote Desktop utilise par défaut le port 3389. Ce port est largement connu et souvent ciblé par des scans automatisés. Changer le port RDP peut réduire les tentatives de connexion indésirables et améliorer la sécurité basique.

<InlineVoucher />



## Changer le port RDP dans le registre

Connectez-vous au serveur localement ou via une connexion Remote Desktop existante. Ouvrez la fenêtre Exécuter avec **Win + R**, tapez `regedit` et validez pour ouvrir l’Éditeur du Registre. Naviguez jusqu’au chemin suivant dans le registre :

```
HKEY_LOCAL_MACHINE
 └─ SYSTEM
    └─ CurrentControlSet
       └─ Control
          └─ Terminal Server
             └─ WinStations
                └─ RDP-Tcp
```

Repérez l’entrée du registre nommée **PortNumber**. Changez le format de la valeur en **Décimal** et saisissez le nouveau numéro de port souhaité. Il est recommandé de choisir un port supérieur à 1024 qui n’est pas déjà utilisé par un autre service. Après avoir appliqué la modification, fermez l’Éditeur du Registre.

## Ajuster les règles du pare-feu Windows

Le nouveau port RDP doit être autorisé dans le pare-feu Windows. Ouvrez **Pare-feu Windows Defender avec fonctions avancées de sécurité** et allez dans la section des règles entrantes.

Modifiez la règle Remote Desktop existante ou créez une nouvelle règle entrante qui autorise le trafic TCP sur le port nouvellement configuré. Assurez-vous que la règle autorise la connexion et s’applique aux profils réseau nécessaires.

## Redémarrer le service pour appliquer les changements

Le changement de port ne prend effet qu’après le redémarrage des services Remote Desktop ou le redémarrage complet du système. Un redémarrage complet du serveur est recommandé pour garantir que la configuration est bien appliquée.

## Se connecter avec le nouveau port

Lors de la création d’une nouvelle connexion Remote Desktop, le port doit être spécifié explicitement en le suffixant à l’adresse IP ou au nom d’hôte. Exemple :

```
203.0.113.10:3390
```

## Conclusion

Changer le port RDP Windows réduit l’exposition aux scans automatisés et aux tentatives de connexion non autorisées. Le processus consiste à mettre à jour le registre Windows, autoriser le nouveau port dans le pare-feu, puis redémarrer le système ou les services.

Après la modification, vérifiez immédiatement l’accès et documentez le port configuré pour éviter tout problème de connexion futur. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />