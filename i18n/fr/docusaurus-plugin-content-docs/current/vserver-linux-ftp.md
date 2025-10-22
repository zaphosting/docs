---
id: vserver-linux-ftp
title: "VPS : Le service FTP ne fonctionne pas - Dépannage"
description: "Comprends comment dépanner et restaurer l’accès FTP sur ton VPS quand les serveurs de jeux ou Teamspeak sont inaccessibles → Découvre-le maintenant"
sidebar_label: Le service FTP ne fonctionne pas
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Que faire si le serveur de jeux ou le serveur Teamspeak n’est pas accessible via FTP ?

:::info
Attention : Les étapes suivantes fonctionnent uniquement sur ton propre VPS si l’interface web ZAP a été installée !
:::

Si le serveur créé n’est pas accessible via FTP, c’est souvent parce que le service FTP (ProFTPD) n’est pas actif. Dans de rares cas, cela peut aussi venir d’une mauvaise config ou d’un port occupé, c’est-à-dire que le port FTP 21 est utilisé / bloqué par un autre programme.

## Vérifie le problème FTP de plus près :

### Vérifie la disponibilité
Tu peux facilement faire ça avec le navigateur FTP dans l’interface web. Clique sur « FTP browser » dans le menu sous Outils du serveur concerné.

![](https://screensaver01.zap-hosting.com/index.php/s/GiqyC6G5cLsbSqp/preview)

Ensuite, appuie une fois sur le bouton « Direct Connection ».

![](https://screensaver01.zap-hosting.com/index.php/s/ZSbrF5raYzdMgzZ/preview)

Tu devrais probablement voir ça :

![](https://screensaver01.zap-hosting.com/index.php/s/GtcCWfqadKGJoY7/preview)

Puisqu’il est clair qu’une connexion via WebFTP ou un outil FTP n’est pas possible, il faut jeter un œil au service FTP sur le VPS.

### Vérifie le statut de ProFTPD

Pour ça, connecte-toi à ton serveur via SSH / Console et tape la commande « service proftpd status ». Le statut s’affiche alors :

![](https://screensaver01.zap-hosting.com/index.php/s/TWqySPM3D5RmgYL/preview)

Ici, tu vois que le statut indique « dead », en gros le service est hors ligne et donc inaccessible.

### Redémarre le service FTP
Tu peux redémarrer le service FTP avec la commande suivante :

```
service proftpd start
```

Si aucune réponse ne s’affiche après l’exécution, c’est que le service est généralement de nouveau en ligne/disponible.

Tu peux vérifier ça avec la commande « service proftpd status ». Ça devrait ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/iYxKMLJ2QfgzBKD/preview)

Puisque le statut est maintenant « active » et plus « dead », tu peux retenter la connexion FTP via l’outil FTP ou WebFTP.

### Vérifie la connexion à nouveau
Tu devrais maintenant pouvoir te connecter et accéder à tes données.

### Problème résolu
✅ Le service FTP (ProFTPD) est maintenant démarré/actif et rien ne bloque plus l’échange de données !

<InlineVoucher />