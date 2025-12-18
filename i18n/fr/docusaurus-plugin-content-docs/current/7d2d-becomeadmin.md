---
id: 7d2d-becomeadmin
title: "7 Days to Die : Comment devenir admin pour 7 Days to Die"
description: "Découvre comment attribuer et gérer les permissions d’administrateur pour un contrôle total du serveur et des rôles admin personnalisés → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer des permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes nécessaires pour attribuer les permissions d’administrateur à ton serveur sont expliquées ci-dessous.  
<InlineVoucher />

## Configuration
Ajouter un admin se fait via la config **serveradmin.xml**, que tu peux trouver dans l’interface web sous Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/wXpLL2qyZE2zCYa/preview)

Tu peux trouver ton SteamID64 en allant sur ton profil Steam et en faisant un clic droit n’importe où dessus. Clique ensuite sur **Copier l’URL Steam**. 

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)

Ensuite, ouvre une des pages suivantes et colle l’URL de ton profil : 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Tu obtiendras des infos générales ainsi que le Steam ID de ton compte. Ici, on a juste besoin du SteamID64. Le SteamID64 est ensuite indiqué sous ``<admins>...</admins>``. Ça ressemble à ça :

```
 <users>
    <user steamID="76561198021925107" name="Indice sur qui est cet utilisateur" permission_level="0" />
  </users>
```

:::danger  L’enregistrement admin n’est pas reconnu ? 
Assure-toi de retirer les caractères de commentaire `<!--` et `-->` pour que la ligne soit valide. Sinon, la ligne reste un simple commentaire et ne sera pas prise en compte. Supprime simplement ces caractères au début et à la fin de la ligne pour l’activer.
:::

Le jeu permet de définir différents niveaux de permissions pour les admins. Ça veut dire qu’on peut créer plusieurs groupes d’admins avec des permissions différentes. Le niveau est défini par l’option ``permission_level``. Elle peut être réglée de 0 à 1000. Selon cette configuration, les admins ont accès aux permissions attribuées. Une fois fait, les permissions admin sont bien assignées. 

## Permissions

Les permissions pour toutes les commandes admin peuvent être définies sous ``permissions``. Pour ça, il faut ajuster le ``permission_level``, comme quand tu ajoutes des admins. Ça ressemble à ça :

```
<permissions>
	<permission cmd="dm" permission_level="0" ></permission>
	<permission cmd="kick" permission_level="1" ></permission>
	<permission cmd="say" permission_level="1000" ></permission>
    <permission cmd="chunkcache" permission_level="1000" ></permission>
    <permission cmd="debugshot" permission_level="1000" ></permission>
    <permission cmd="debugweather" permission_level="1000" ></permission>
    <permission cmd="getgamepref" permission_level="1000" ></permission>
</permissions>
```

Un niveau de permission est une valeur entre 0 et 1000 qui détermine les droits d’un joueur. 1000 est le plus bas (pas de permissions) et 0 le plus haut (permissions admin complètes). Selon ce que tu veux comme permissions, ajuste ça en conséquence. 

## Conclusion

Félicitations, tu as configuré avec succès les permissions d’administrateur. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />