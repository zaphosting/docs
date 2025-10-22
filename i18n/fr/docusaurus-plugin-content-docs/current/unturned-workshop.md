---
id: unturned-workshop
title: "Unturned : Installer du contenu Workshop sur le serveur"
description: "Découvre comment améliorer ton serveur Unturned avec du contenu personnalisé du Steam Workshop pour une expérience de jeu unique → En savoir plus maintenant"
sidebar_label: Contenu Workshop
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Le Steam Workshop te donne la possibilité de personnaliser encore plus ton serveur. Dans ce guide, on t’explique comment ajouter du contenu à ton serveur en utilisant le Steam Workshop.

### Préparation

Il existe plusieurs sources où tu peux télécharger des mods, maps, modèles, etc. La plus populaire est le Steam Workshop. Tu y trouveras plein de ressources à installer sur ton serveur. D’abord, il faut trouver les items Workshop que tu veux. Le Steam Workshop pour Unturned est dispo ici : [Unturned - Steam Workshop](https://steamcommunity.com/app/304930/workshop/)

Une fois que tu as choisi, copie l’ID de l’item Workshop et ajoute-le dans l’interface. Selon que tu navigues sur le Steam Workshop via ton navigateur ou le client Steam, voici comment copier l’ID :

- **Client Steam**

  Clique droit sur la page Steam Workshop de l’item, puis clique sur Copier l’URL de la page. Copie l’ID depuis l’URL.

  ![](https://screensaver01.zap-hosting.com/index.php/s/QD89esrFTQ8gZfb/preview)

- **Navigateur**

  Tu trouveras une suite de chiffres après **.../?id=** dans la barre d’URL. Copie-la.

  ![](https://screensaver01.zap-hosting.com/index.php/s/XzRRT98ess4dyFX/preview)

### Ajouter du contenu

Une fois que tu as rassemblé les contenus souhaités, il faut les ajouter au serveur. Les contenus seront spécifiés dans le fichier **WorkshopDownloadConfig.json**, que tu trouveras dans l’interface sous Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/T7gsio62gDH7DHb/preview)

On ajoute maintenant les IDs des items Steam Workshop dans 'FileIDs'. Le résultat final peut ressembler à ça :

```json
{
  "File_IDs": [
  	1567256534,
    1234567890, // Exemple (Placeholder)
    0987654321  // Exemple (Placeholder)
  
  ],
  "Ignore_Children_File_IDs": [],
  "Query_Cache_Max_Age_Seconds": 600,
  "Max_Query_Retries": 2,
  "Use_Cached_Downloads": true,
  "Should_Monitor_Updates": true,
  "Shutdown_Update_Detected_Timer": 600,
  "Shutdown_Update_Detected_Message": "Mise à jour du fichier Workshop détectée, arrêt dans : {0}",
  "Shutdown_Kick_Message": "Arrêt pour mise à jour du fichier Workshop."
}
```

Ensuite, il faut démarrer le serveur. Le contenu ajouté sera téléchargé automatiquement au démarrage. Tu peux suivre ça dans la console en direct. Le message devrait ressembler à ça :

```
1 item Workshop à télécharger...
Téléchargement de l’item Workshop 1567256534
Item Workshop téléchargé avec succès : 1567256534
```

Le contenu est maintenant téléchargé, installé et devrait être actif.

<InlineVoucher />