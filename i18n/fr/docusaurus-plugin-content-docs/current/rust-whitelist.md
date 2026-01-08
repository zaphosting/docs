---
id: rust-whitelist
title: "Rust : Whitelist"
description: "Infos sur comment whitelist ton serveur Rust chez ZAP-Hosting → Découvre tout maintenant"
sidebar_label: Whitelist
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une whitelist est un mécanisme de contrôle d’accès qui limite qui peut rejoindre ton serveur. Les serveurs dédiés Rust n’ont pas de fonction whitelist intégrée, donc la méthode la plus courante chez les hébergeurs est d’installer uMod Oxide avec un plugin whitelist qui bloque les connexions sauf si un joueur est explicitement autorisé.

<InlineVoucher />


## Activer la Whitelist

Connecte-toi à ton serveur via FTP et installe uMod Oxide si ce n’est pas déjà fait. Une fois uMod installé, upload le fichier du plugin whitelist `Whitelist.cs` dans le dossier plugins, généralement `oxide/plugins/Whitelist.cs`.

Quand le plugin est en place, redémarre le serveur ou recharge les plugins pour qu’il soit pris en compte. Le plugin whitelist fonctionne généralement en demandant une permission spécifique avant qu’un joueur puisse se connecter.

## Gérer les joueurs whitelistés

Ouvre la console live dans la gestion de ton serveur de jeux ZAP-Hosting et donne la permission whitelist à un joueur via son SteamID64.

```text
oxide.grant user 76561198000000000 whitelist.allow
```

Pour retirer l’accès, enlève la permission.

```text
oxide.revoke user 76561198000000000 whitelist.allow
```

Pour vérifier les permissions d’un utilisateur, consulte ses permissions.

```text
oxide.show user 76561198000000000
```

## Vérifier que la Whitelist fonctionne

Essaie de te connecter avec un compte qui n’a pas la permission whitelist. Le plugin doit refuser la connexion. Puis connecte-toi avec un compte auquel tu as donné `whitelist.allow` pour confirmer l’accès.

Si tout le monde peut encore rejoindre, vérifie que le plugin est bien chargé et que uMod tourne. Un redémarrage du serveur après l’upload du plugin est la méthode la plus fiable pour s’assurer qu’il est actif.

## Conclusion

Si tu as suivi toutes les étapes ci-dessus, ta whitelist est maintenant active et tu peux contrôler précisément qui peut rejoindre le serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarre une fois le serveur et vérifie les fichiers ou la sortie des commandes pour confirmer que le changement a bien été appliqué.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />