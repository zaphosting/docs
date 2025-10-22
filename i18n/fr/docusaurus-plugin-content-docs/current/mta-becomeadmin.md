---
id: mta-becomeadmin
title: "Multi Theft Auto : Deviens admin sur les serveurs MTA"
description: "Découvre comment attribuer les permissions d’administrateur pour un contrôle total du serveur et une gestion efficace du jeu → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-mta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer les permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes nécessaires pour attribuer les droits d’administrateur à ton serveur sont décrites ci-dessous.  
<InlineVoucher />

### Préparation

Tout d’abord, il faut créer un compte utilisateur qui recevra ensuite les droits admin. Pour cela, exécute la commande suivante dans la Console Live :

```
addaccount [options] <PASSWORD>
```

La Console Live se trouve dans le tableau de bord du serveur de jeux, dans l’interface, pendant que le serveur tourne. Ça ressemble à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/KHcBA5p5ZC4pJ4R/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/tKLHyoSandPpfx2/preview)




### Configuration

Une fois le compte créé, il faut l’ajouter au groupe Admin dans la config **acl.xml**. Pour ça, connecte-toi au serveur via FTP et ouvre le fichier. Il se trouve dans **gXXXX/gtamta/mods/deathmatch/**. Si tu ne sais pas encore ce qu’est un client FTP ni comment l’utiliser, jette un œil à ce guide : [Accès aux fichiers FTP](gameserver-ftpaccess.md)

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
</group>
```

Tu dois ajouter un objet utilisateur pour assigner l’utilisateur au groupe Admin :

```
<object name="user.BENUTZERNAME"></object>
```

Remplace "BENUTZERNAME" par ton propre nom d’utilisateur. Le résultat devrait ressembler à ça :

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
    <object name="user.Benutzername"></object>
</group>
```



### Connexion en tant qu’admin

Maintenant que tu as fini la config du fichier **acl.xml**, lance ton jeu/serveur et connecte-toi à ton serveur. Ensuite, connecte-toi avec la commande suivante :

```
login USERNAME PASSWORD
```

## Conclusion

Félicitations, tu as configuré avec succès les permissions d’administrateur. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂


<InlineVoucher />