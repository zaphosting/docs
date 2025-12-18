---
id: dedicated-linux-ftp
title: "Serveur dédié : Le service FTP ne fonctionne pas - Dépannage"
description: "Comprends comment résoudre les problèmes d’accès FTP sur ton VPS pour restaurer la connectivité du serveur et gérer efficacement ton serveur de jeux ou Teamspeak → En savoir plus no"
sidebar_label: Le service FTP ne fonctionne pas
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Que faire si le serveur de jeux ou le serveur Teamspeak n’est pas accessible via FTP ?

:::info
Attention : Les étapes suivantes ne fonctionnent que sur ton propre VPS si l’interface web ZAP a été installée !
:::

Si le serveur créé n’est pas accessible via FTP, le service FTP (ProFTPD) n’est généralement pas actif. Dans de rares cas, cela peut aussi venir d’une mauvaise config ou d’un port occupé, c’est-à-dire que le port FTP 21 est utilisé / bloqué par un autre programme.



## Vérifie le problème FTP de plus près :

### Vérifie la disponibilité
Tu peux facilement le faire via le navigateur FTP dans l’interface web. Clique sur "FTP browser" dans le menu sous Outils du serveur concerné

![](https://screensaver01.zap-hosting.com/index.php/s/G394GJkDc9WXEzs/preview)

Puis appuie une fois sur le bouton "Connexion directe". 

![](https://screensaver01.zap-hosting.com/index.php/s/KLCmb8A4xSjWmy9/preview)

Tu devrais alors voir l’image suivante :

![](https://screensaver01.zap-hosting.com/index.php/s/FFJo8XeEJcX7RTM/preview)

Puisqu’il est clair qu’une connexion via WebFTP ou un outil FTP n’est pas possible, il faut examiner de plus près le service FTP sur le VPS.

### Vérifie le statut de ProFTPD

Pour ça, connecte-toi à ton serveur via SSH / Console et tape la commande "service proftpd status". Le statut s’affiche alors :

![](https://screensaver01.zap-hosting.com/index.php/s/zsg8qwFJsWEAZkA/preview)


Tu vois ici que le statut indique "dead", en clair le service est hors ligne et donc inaccessible.


### Redémarre le service FTP
Le service FTP peut être redémarré avec la commande suivante :

```
service proftpd start
```

Si aucune réponse n’apparaît après l’exécution, le service est généralement de nouveau en ligne/disponible.

Tu peux vérifier ça avec la commande "service proftpd status". Ça devrait ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/8QNNnoMFYG4rt2D/preview)

Puisque le statut est maintenant "active" et plus "dead", tu peux retenter la connexion FTP via l’outil FTP ou WebFTP.

### Vérifie la connexion à nouveau
Tu devrais maintenant pouvoir te connecter et voir tes données.

### Problème résolu
✅ Le service FTP (ProFTPD) est maintenant démarré/actif et rien ne bloque plus l’échange de données !