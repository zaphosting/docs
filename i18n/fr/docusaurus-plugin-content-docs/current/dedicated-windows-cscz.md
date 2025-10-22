---
id: dedicated-windows-cscz
title: "Serveur dédié : Installation d’un serveur dédié Counter-Strike: Condition Zero sous Windows"
description: "Apprends à installer rapidement et facilement un serveur dédié Counter-Strike: Condition Zero sur ton VPS ou serveur dédié → Découvre-le maintenant"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS ou un serveur dédié et tu veux y installer des serveurs de jeux ? Par exemple un serveur dédié Counter-Strike: Condition Zero ? Alors tu es au bon endroit ! Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur.

<InlineVoucher />

## Préparation

Pour installer un serveur Counter-Strike: Condition Zero, il te faut SteamCMD. SteamCMD est la **version en ligne de commande du client Steam**. Cet outil permet de télécharger rapidement et facilement les applications serveurs dédiés des jeux Steam populaires. Tu peux récupérer SteamCMD sur le site officiel des développeurs Valve : https://developer.valvesoftware.com/wiki/SteamCMD.

Ensuite, tu vas télécharger un fichier **steamcmd.zip** qu’il faudra décompresser. On te conseille de créer un dossier dédié pour extraire ce fichier. Tu devrais voir apparaître le fichier **steamcmd.exe**. Lance-le et attends que l’installation soit terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, c’est que tout est prêt et tu peux commencer l’installation du serveur Counter-Strike: Condition Zero.



## Installation

Une fois l’installation terminée, tu peux exécuter des commandes dans la **ligne de commande Steam (steamcmd.exe)**. Commence par te connecter avec l’utilisateur **anonymous** en tapant : `login anonymous`

L’étape suivante est l’installation du serveur avec la commande `app_update 90`. L’ID d’application **90** correspond au **serveur dédié Counter-Strike: Condition Zero**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera.

Pour que ton serveur soit visible et accessible depuis l’extérieur, il faut ouvrir/forwarder les ports utilisés dans le pare-feu Windows. Ouvre les paramètres du pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Ajoute des règles entrantes et sortantes pour les ports suivants : 27015-27020 en TCP/UDP.



## Configuration

À ce stade, ton serveur Counter-Strike: Condition Zero est installé. Tu peux configurer davantage ton serveur en éditant directement le fichier de lancement. Va dans ton répertoire racine, puis dans le dossier cfg et ouvre le fichier `server.cfg`. Tu pourras y modifier les options du serveur.

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```



## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier principal du jeu et exécute la commande suivante :

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

Tu devrais voir apparaître des logs dans ta console, signe que le serveur a démarré correctement. Note que le premier démarrage peut prendre un peu plus de temps le temps de tout configurer. Sinon, tu peux aussi te connecter directement en cherchant dans la barre de recherche en bas de la liste des serveurs : `[ton_adresse_ip]:2456`.


## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur Counter-Strike: Condition Zero sur ton VPS ! Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />