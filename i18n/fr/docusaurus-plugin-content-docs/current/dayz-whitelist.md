---
id: dayz-whitelist
title: "DayZ : Whitelist"
description: "Infos sur comment whitelist ton serveur DayZ chez ZAP-Hosting → Découvre tout maintenant"
sidebar_label: Whitelist
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une whitelist est une liste d’accès qui limite qui peut rejoindre ton serveur. DayZ propose un mode whitelist intégré que tu peux activer puis gérer joueur par joueur.

<InlineVoucher />


## Activation de la Whitelist

Connecte-toi à ton serveur via FTP et ouvre le fichier de config principal `serverDZ.cfg`. Trouve le paramètre whitelist et active-le.

```cfg
enableWhitelist = 1;
```

Ensuite, localise ou crée le fichier whitelist que ton hébergeur met à disposition, souvent nommé `whitelist.txt` et placé avec les fichiers de config du serveur. Ajoute un SteamID64 par ligne.

```txt
XXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXX
```

Sauvegarde tous les fichiers et redémarre le serveur pour appliquer la whitelist.

## Gestion des joueurs whitelistés

Pour ajouter un joueur, ajoute son SteamID64 dans `whitelist.txt`, sauvegarde, puis redémarre le serveur. Pour retirer un joueur, supprime sa ligne dans `whitelist.txt`, sauvegarde, et redémarre le serveur.

Garde le fichier propre avec un ID par ligne. Les commentaires ne sont pas toujours supportés, évite donc d’ajouter du texte sur la même ligne à moins d’être sûr que ton serveur l’accepte.

## Vérification du fonctionnement de la Whitelist

Après le redémarrage, essaie de te connecter avec un compte qui n’est pas dans `whitelist.txt`. L’accès doit être refusé. Puis connecte-toi avec un compte whitelisté pour confirmer que ça marche.

Si les joueurs whitelistés ne peuvent pas rejoindre, vérifie que tu as bien utilisé des SteamID64 et que le serveur charge bien le même `whitelist.txt` que celui que tu as modifié.

## Conclusion

Si tu as suivi toutes les étapes ci-dessus, ta whitelist est maintenant active et tu peux contrôler précisément qui peut rejoindre ton serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarre une fois de plus le serveur et vérifie le fichier ou les logs pour confirmer que le changement a bien été pris en compte.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />