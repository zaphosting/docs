---
id: fivem-esx-changejobgarages
title: "FiveM : Garages de métier - Ajouter des voitures"
description: "Découvrez comment personnaliser et étendre les garages de métier avec des voitures supplémentaires pour améliorer votre expérience de jeu → En savoir plus maintenant"
sidebar_label: Ajouter des voitures aux garages de métier
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu veux changer ou ajouter des voitures dans tes garages de métier ? On t’explique ici comment faire et quelles étapes suivre !

<InlineVoucher />



## Configuration

Les voitures supplémentaires se rajoutent dans les garages de métier via FTP. Pour ça, connecte-toi à ton serveur de jeux via FTP. Si tu ne sais pas encore comment utiliser le FTP, jette un œil à notre [guide accès FTP](gameserver-ftpaccess.md).

Une fois connecté en FTP, va dans le dossier de la ressource ESX et ouvre le dossier esx_addons. La structure des dossiers devrait ressembler à ça : `/gXXXXXX/fivem/ESXLegacy_XXXXXX.base/resources/[esx_addons]`

Choisis ensuite un métier, par exemple Ambulance ou Police, et ouvre le fichier de configuration `config.lua` dans les ressources.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQYbzYs2xAkb5fp/preview)



Dans le fichier de config, il faut modifier la section `Config.AuthorizedVehicles`. Tu peux la chercher avec la fonction recherche, puis l’ajuster ou l’étendre selon tes envies :

![img](https://screensaver01.zap-hosting.com/index.php/s/eyK7q78aewrpJtx/preview)

:::warning 
Fais bien gaffe à mettre une virgule à la fin de la ligne précédente quand tu ajoutes de nouveaux véhicules, sinon ça peut poser problème.
:::



## Conclusion

Si tu as suivi toutes les étapes, ton garage de métier est maintenant personnalisé ou étendu avec les voitures que tu voulais. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />