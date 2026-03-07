---
id: 7d2d-crossplay
title: "7 Days to Die : Activer le Crossplay pour les joueurs Console et PC"
description: "Découvrez comment configurer votre serveur de jeux 7 Days to Die pour supporter le crossplay entre joueurs PC et console → En savoir plus maintenant"
sidebar_label: Activer le Crossplay
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Avec les versions récentes de **7 Days to Die**, le crossplay permet aux joueurs sur **PC et plateformes console supportées** de rejoindre le même serveur. Cela permet aux communautés de jouer ensemble, peu importe la plateforme utilisée.

Pour rendre le crossplay possible, certains réglages doivent être configurés sur le serveur. Ces paramètres garantissent que le serveur est compatible avec les connexions console et correctement enregistré via Epic Online Services.

<InlineVoucher />



## Configuration

La configuration du crossplay se trouve dans le fichier `serverconfig-zap.xml`. Pour modifier ce fichier, ouvrez votre **administration du serveur de jeux** et allez dans **Configs**. Trouvez et ouvrez le fichier de configuration `serverconfig-zap.xml`.

Dans ce fichier, assurez-vous que les valeurs de configuration suivantes sont correctement définies :

```
<property name="ServerMaxPlayerCount" value="8"/> 
<property name="ServerAllowCrossplay" value="true"/> 
<property name="EACEnabled" value="true"/> 
<property name="IgnoreEOSSanctions" value="false"/> 
```

Ces paramètres sont indispensables pour la compatibilité crossplay. Le `ServerMaxPlayerCount` ne doit pas dépasser **8 joueurs**, car le crossplay console supporte actuellement un maximum de huit participants. L’option `ServerAllowCrossplay` doit être activée pour permettre aux joueurs console de rejoindre le serveur.

De plus, `EACEnabled` doit rester activé car le crossplay repose sur **Epic Online Services et Easy Anti-Cheat** pour l’authentification et le matchmaking. La valeur `IgnoreEOSSanctions` doit rester à `false` pour que les restrictions EOS soient bien appliquées lors des sessions cross-plateformes.

Après avoir modifié ces valeurs, sauvegardez le fichier et **redémarrez votre serveur** pour appliquer les nouveaux réglages.



## Notes importantes

Le support du crossplay nécessite que tous les joueurs utilisent une version compatible du jeu. Les serveurs utilisant des mods non supportés ou des configurations très personnalisées peuvent empêcher les joueurs console de se connecter. Si les joueurs console ne trouvent pas ou ne peuvent pas rejoindre le serveur, vérifiez que les paramètres crossplay sont corrects et que le serveur tourne sur la dernière version supportée.



## Conclusion

Félicitations ! Vous avez configuré avec succès votre **serveur de jeux 7 Days to Die pour le crossplay**, permettant aux joueurs PC et console de partager le même monde. Avec les bons réglages serveur en place, votre communauté peut jouer ensemble sur différentes plateformes.

Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous assister ! 🙂

<InlineVoucher />