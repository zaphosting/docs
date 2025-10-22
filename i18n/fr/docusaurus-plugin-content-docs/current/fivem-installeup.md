---
id: fivem-installeup
title: "FiveM : Installer EUP (Emergency Uniform Pack)"
description: "Découvrez comment configurer Emergency Uniform Pack pour les personnages en mode libre avec un abonnement Element Club requis → En savoir plus maintenant"
sidebar_label: Installer EUP
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

**EUP**, aussi appelé Emergency Uniform Pack, te permet d’avoir des uniformes des services d’urgence sur un personnage en mode libre. Voici un guide détaillé pour t’expliquer comment l’installer exactement. 

:::warning Abonnement Element Club requis
Pour installer et utiliser EUP, un abonnement Element Club est obligatoire. Obtiens ton abonnement sur le [Portail Cfx.re](https://portal.cfx.re/subscriptions/element-club) ! 
:::

<InlineVoucher />



## Préparation

Avant de commencer l’installation de **EUP**, quelques préparatifs sont nécessaires. Tu dois télécharger et décompresser sur ton PC [EUP](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) et [NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip). Une fois les fichiers téléchargés, tu devrais avoir ces archives ZIP :

- `eup-ui.7z`
- `eup-stream.7z` 
- `NativeUI-master.zip`

Décompresse-les maintenant localement sur ton ordinateur. Tu dois obtenir un dossier contenant un fichier `__resource.lua` ou `fxmanifest.lua` ainsi que des fichiers/dossiers de scripts.

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
Pour NativeUI, ouvre d’abord le dossier "NativeUI-master", tu y trouveras les scripts corrects. Sinon, ils peuvent être dans un sous-dossier, souvent avec le même nom.
:::

## Installation
Tu es prêt à lancer l’installation. Connecte-toi à ton serveur via [FTP](gameserver-ftpaccess.md) et upload les fichiers. Les fichiers/dossiers doivent être placés dans le répertoire `resources`. Tu trouveras ce répertoire sous la structure suivante : 

```
/gxxxxxx/fivem/YourFramework/resources/
```

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)



## Configuration

Pour que les ressources installées soient chargées, il faut les déclarer dans le fichier de configuration du serveur. Connecte-toi à l’interface txAdmin et va dans l’éditeur CFG. 

![img](https://screensaver01.zap-hosting.com/index.php/s/xQgkC5npHji4ArM/download)



## Conclusion

Tu as installé avec succès EUP sur ton serveur FiveM. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’assister ! 🙂


<InlineVoucher />