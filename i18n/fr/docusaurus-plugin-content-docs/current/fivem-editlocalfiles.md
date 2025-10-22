---
id: fivem-editlocalfiles
title: "FiveM : Fichiers Locales (Variables de langue)"
description: "Apprends à personnaliser et ajouter des langues à ta ressource pour une expérience sur-mesure → Découvre tout maintenant"
sidebar_label: Fichiers Locales (Langue)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Tu veux modifier les variables de langue d’une ressource ou ajouter d’autres langues qui n’existent pas encore ? Les fichiers locales te permettent d’ajuster les variables de langue de la ressource que tu souhaites. 

<InlineVoucher />



## Trouver les fichiers Locales

Les fichiers locales doivent être modifiés via un client FTP. Si tu débutes avec le FTP, on te conseille de lire d’abord le [guide accès FTP](gameserver-ftpaccess.md). Une fois connecté, rends-toi dans le dossier de la ressource ESX que tu veux modifier. Ouvre ensuite le dossier locales dans le répertoire de la ressource. 

![img](https://screensaver01.zap-hosting.com/index.php/s/wZmADsGGNzEseH4/download)

Dans le dossier locales, tu trouveras tous les fichiers de langue existants pour cette ressource. À partir de là, tu peux soit modifier un fichier existant, soit copier un fichier avec un nouveau nom pour une nouvelle langue, que tu pourras ensuite éditer. 

![img](https://screensaver01.zap-hosting.com/index.php/s/5GxWeFRZSxRDn3w/preview)

## Modifier un fichier Locales

Tu peux maintenant ajuster le contenu des variables de langue dans le fichier locale ouvert. Le contenu des variables se trouve après le signe égal, entre guillemets. Modifie le contenu comme tu veux et n’oublie pas de sauvegarder tes changements à la fin. 

![img](https://screensaver01.zap-hosting.com/index.php/s/FBDP2rBKabx3NEF/preview)



## Définir la Locale (Langue)

La langue utilisée se définit via le fichier de configuration `config.lua` dans le dossier de la ressource. Pour ça, modifie la valeur de `Config.Locale = GetConvar('esx:locale', 'en')`. 

![img](https://screensaver01.zap-hosting.com/index.php/s/b3HkR9Qez5Pb7re/preview)



## Conclusion

Félicitations, si tu as suivi toutes les étapes, tu as réussi à modifier le fichier locale de ta ressource. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />