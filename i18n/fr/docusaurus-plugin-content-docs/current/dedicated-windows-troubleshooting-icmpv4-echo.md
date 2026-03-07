---
id: dedicated-windows-troubleshooting-icmpv4-echo
title: "Serveur dédié : Résolution réseau - ICMPv4 Echo manquant – Serveur affiché hors ligne"
description: "Découvrez comment autoriser les requêtes ICMPv4 Echo dans le pare-feu Windows pour que votre serveur soit correctement détecté par les systèmes de monitoring → En savoir plus maintenant"
sidebar_label: ICMPv4 Echo manquant
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans certaines situations, un serveur Windows peut apparaître **hors ligne dans le panneau de contrôle** alors que le système fonctionne normalement. Ce comportement est généralement lié aux réglages du pare-feu qui bloquent les **requêtes ICMPv4 Echo**. Ces requêtes sont utilisées par la célèbre commande `ping` et sont couramment exploitées par les systèmes de monitoring pour vérifier si un serveur ou une adresse IP est joignable.

Si le pare-feu Windows bloque les requêtes ICMP Echo, le système de monitoring ne peut pas recevoir de réponse du serveur. En conséquence, le panneau de contrôle peut afficher le serveur ou les adresses IP assignées comme hors ligne alors que le serveur fonctionne sans problème.

![img](https://screensaver01.zap-hosting.com/index.php/s/EBAybY5LRfk89kN/preview)



## Cause

La raison la plus fréquente de ce problème est l’absence d’une règle dans le **pare-feu Windows Defender** qui autorise les requêtes entrantes ICMPv4 Echo. Sans cette règle, le pare-feu bloque par défaut les requêtes ping.

Les systèmes de monitoring s’appuient sur ces réponses pour déterminer la disponibilité du serveur, c’est pourquoi le système peut apparaître hors ligne même si les services sur le serveur fonctionnent normalement.



## Solution

Pour résoudre ce problème, il faut créer une règle dans le pare-feu qui autorise les requêtes ICMPv4 Echo. Commencez par établir une connexion via la console HTML5 dans le tableau de bord iLO. Pour cela, cliquez sur **HTML5** dans le tableau de bord et connectez-vous avec vos identifiants habituels.

![img](https://screensaver01.zap-hosting.com/index.php/s/PE87d8gZSB7c9gk/download)

Une fois connecté, ouvrez l’interface **Pare-feu Windows Defender avec sécurité avancée**. Appuyez sur `Windows + R`, saisissez la commande suivante et validez avec Entrée :

```
wf.msc
```
La fenêtre de configuration avancée du pare-feu s’ouvre. Dans le menu de navigation à gauche, sélectionnez **Règles de trafic entrant**, car le serveur doit accepter les requêtes ICMP entrantes. Sur la droite, choisissez **Nouvelle règle** pour créer une nouvelle règle de pare-feu.

Lors de la création de la règle, choisissez **Personnalisée** comme type de règle. À l’étape suivante, sélectionnez le protocole **ICMPv4**. Après avoir choisi le protocole, ouvrez les paramètres **Personnaliser** et activez l’option **Requête Echo**, ce qui permet au serveur de répondre aux requêtes ping.

Poursuivez l’assistant et sélectionnez **Autoriser la connexion** comme action pour cette règle. Lors de la sélection du profil, vous pouvez généralement activer la règle pour tous les profils afin qu’elle fonctionne que le serveur soit dans un réseau public, privé ou de domaine.

Enfin, donnez un nom clair à la règle, par exemple `Autoriser les requêtes ICMPv4 Echo`. Une fois l’assistant terminé, la nouvelle règle autorisera immédiatement les requêtes ICMP Echo entrantes.

![img](https://screensaver01.zap-hosting.com/index.php/s/iciYwqAkYLTMkgC/download)



## Vérification

Une fois la règle créée, vous pouvez vérifier que le serveur répond aux requêtes ping. Depuis un autre système, lancez la commande suivante :
```
ping <VOTRE_IP_SERVEUR>
```
Si le serveur répond correctement, le système de monitoring pourra aussi le détecter à nouveau. Après un court instant, le statut du serveur dans le panneau devrait passer de hors ligne à en ligne.



## Conclusion

Félicitations ! En créant la règle ICMPv4 Echo dans le pare-feu Windows, vous avez assuré que votre serveur dédié Windows puisse à nouveau répondre aux requêtes ping.

Cela permet aux systèmes de monitoring de détecter correctement la disponibilité de votre serveur et évite qu’il apparaisse hors ligne dans le panneau de contrôle.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂