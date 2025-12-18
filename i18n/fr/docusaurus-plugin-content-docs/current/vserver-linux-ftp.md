---
id: vserver-linux-ftp
title: "VPS : Service FTP indisponible (Interface GS/TS3)"
description: "Comprends comment dépanner et restaurer l'accès FTP sur ton VPS quand les serveurs de jeux ou Teamspeak sont inaccessibles → Découvre-le maintenant"
sidebar_label: Service FTP indisponible
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les services de serveur de jeux et Teamspeak 3 créés via l'interface GS/TS3 sont des services entièrement gérés. L'accès FTP est fourni via l'interface et l'infrastructure sous-jacente. Si l'accès FTP n'est pas possible, la cause est généralement liée à l'état du service, à la configuration interne ou à des problèmes côté infrastructure, plutôt qu'aux réglages locaux du client FTP.



:::warning Service FTP fourni par l'interface GS/TS3
Ce guide s'applique uniquement au service FTP qui est automatiquement installé et géré lorsque la fonctionnalité de l'interface GS/TS3 est utilisée. Si l'interface GS/TS3 n'est pas installée, aucun serveur FTP n'est configuré par défaut sur le système. Dans ce cas, l'accès FTP n'est pas disponible à moins qu'un service FTP ne soit installé manuellement.
:::

<InlineVoucher />



## Vérifier le statut de ProFTPD via SSH

Connecte-toi au serveur via SSH ou la console et vérifie le statut actuel du service FTP avec la commande suivante :

```
service proftpd status
```

Le résultat indique si le service ProFTPD est en cours d'exécution. Si le service est indiqué comme actif ou en fonctionnement, le service FTP est disponible et devrait accepter les connexions entrantes. Dans ce cas, la cause du problème n'est généralement pas le démon FTP lui-même, mais peut être liée aux données d'accès, aux règles du pare-feu ou à la configuration du client.

Si le statut est affiché comme inactif, arrêté ou mort, le service FTP ne tourne pas. Tant que le service est arrêté, aucune connexion FTP ne peut être établie.

## Redémarrer le service FTP

Si le service ProFTPD ne fonctionne pas, il peut être démarré manuellement. Pour cela, exécute la commande suivante :

```
service proftpd restart
```

Après avoir démarré ou redémarré le service, il faut toujours vérifier à nouveau le statut pour confirmer que ProFTPD fonctionne correctement. Si le service est affiché comme actif après le redémarrage, l'accès FTP devrait être de nouveau disponible.



## Causes courantes des problèmes FTP

Les problèmes d'accès FTP sont souvent causés par un service FTP qui ne tourne pas ou qui a été arrêté lors d'un redémarrage système ou d'une mise à jour. Des erreurs de configuration peuvent aussi empêcher ProFTPD de démarrer correctement. Parfois, un autre service utilise déjà le port 21, ce qui empêche le service FTP de se lier au port requis. Des problèmes temporaires au niveau système ou service peuvent aussi provoquer l'arrêt inattendu du service FTP.

Si ProFTPD ne peut pas être démarré ou s'arrête immédiatement après son lancement, une investigation plus poussée est nécessaire. Dans ce cas, il est recommandé de consulter les logs système ou de contacter le support.



## Conclusion



L'accès FTP pour les services de serveur de jeux GS/TS3 est géré exclusivement via l'interface GS/TS3. Si les vérifications standards ne résolvent pas le problème, il faut escalader vers le support. Fournir des informations complètes et précises aide à une résolution plus rapide. Pour toute question ou aide, n'hésite pas à contacter notre équipe support, disponible tous les jours pour t'assister ! 🙂



<InlineVoucher />