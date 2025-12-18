---
id: pathoftitans-becomeadmin
title: Devenir admin
description: "Découvre comment attribuer et gérer les permissions d’administrateur pour un contrôle total de ton serveur de jeux → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-pathoftitans
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer des permissions d’administrateur te permet une gestion simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes nécessaires pour attribuer les permissions d’administrateur à ton serveur sont décrites ci-dessous.  
<InlineVoucher />

## Préparation

La configuration des permissions admin se fait via les fichiers de configuration de ton serveur. Pour cela, rends-toi dans le tableau de bord de ton serveur de jeux, clique sur **Configs** et ouvre le fichier de configuration Game.ini.



## Configuration

Dans la section [/Script/PathOfTitans.IGameSession], il faut entrer l’ID Alderon Games (AGID) de l’admin. L’entrée se fait avec `Server-Admins=` suivi de l’AGID. Si tu veux ajouter plusieurs admins, crée une ligne par admin. Par exemple, si tu veux attribuer les permissions admin à trois joueurs, la config ressemblera à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/TwZyRsEoeATM3By/preview)

```
[/Script/PathOfTitans.IGameSession]
ServerAdmins=XXX-XXX-XXX # 1. Enregistrement Admin
ServerAdmins=XXX-XXX-XXX # 2. Enregistrement Admin
ServerAdmins=XXX-XXX-XXX # 3. Enregistrement Admin
```

Clique sur Sauvegarder puis redémarre le serveur. Les permissions admin sont maintenant bien configurées. Une fois que tu as les droits admin, tu peux nommer d’autres joueurs admins via des commandes chat ou leur retirer ce statut. Ces fonctions sont dispos tant que ton serveur est actif. Tu trouveras plus d’infos sur les commandes dans le [Wiki officiel GitHub](https://github.com/Alderon-Games/pot-community-servers/wiki/Admin-Chat-Commands#admin-tools).


## Conclusion

Félicitations, tu as configuré avec succès les permissions d’administrateur. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂 

<InlineVoucher />