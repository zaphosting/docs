---
id: discordbot-setup
title: Configure ton Bot Discord
description: "Découvre comment faire tourner et gérer des bots Discord pour la modération, la musique, les giveaways, et plus encore avec une location de serveurs fluide → En savoir plus maintenant"
sidebar_label: Configuration
services:
  - discord-bot
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

Un **serveur de bot Discord** te permet de faire tourner tes bots Discord de manière fluide et continue. Ces bots peuvent accomplir plein de tâches, comme modérer automatiquement ton canal Discord, jouer de la musique, organiser des giveaways et des sondages, et bien plus encore.

<YouTube videoId="OoKA8UJ_N5A" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ffjmn3snRrkoeoK/preview" title="Comment configurer un serveur de bot Discord et uploader les fichiers du bot !" description="Tu préfères comprendre en voyant les choses en action ? On a ce qu’il te faut ! Plonge dans notre vidéo qui t’explique tout. Que tu sois pressé ou que tu préfères apprendre de façon super engageante !"/>

<InlineVoucher />



## Langages supportés

Les bots Discord peuvent être programmés dans différents langages. Notre produit supporte les bots Discord écrits dans l’un des langages de programmation suivants :

- Java
- Python
- NodeJS

  
  

## Préparation



### Obtenir le Bot

Pour commencer, tu auras besoin d’un bot Discord fonctionnel. Tu peux soit en créer un toi-même, soit télécharger un bot déjà prêt sur internet. Sauvegarde-le sur ton ordinateur pour pouvoir facilement l’uploader sur ton service ensuite.

### Upload des fichiers

Les fichiers de ton bot Discord doivent être uploadés. Tu peux faire ça via FTP. Si tu ne sais pas comment utiliser FTP, on te conseille de jeter un œil au [guide Accès via FTP](gameserver-ftpaccess.md) pour des instructions détaillées.

![](https://screensaver01.zap-hosting.com/index.php/s/x4WPiNS6xQcWQrp/preview)


Une fois que tu as ouvert le dossier, tu peux simplement uploader les fichiers du bot dans le dossier vide :

![](https://screensaver01.zap-hosting.com/index.php/s/t7DDaF684PZkXjn/preview)



## Configuration

Pour pouvoir lancer ton bot via le Tableau de bord, il faut configurer le bot dans le Tableau de bord Discord Bot sous la page **Paramètres**.

![](https://screensaver01.zap-hosting.com/index.php/s/HoPpfJKsTC6ozNy/preview)

Là, tu dois configurer le langage de programmation utilisé par le bot, ainsi que le nom de son fichier principal. Dans cet exemple, Python 3 est utilisé et le nom du fichier du bot Discord à exécuter est précisé. Le nom du fichier est `main.py`.

![](https://screensaver01.zap-hosting.com/index.php/s/ixfz2xKYCepS9Ek/preview)



:::danger Dépendances
Les bots Discord contiennent souvent des dépendances supplémentaires pour leur fonctionnement. Assure-toi que toutes sont présentes et correctement configurées dans le bot Discord. Elles sont définies dans les fichiers suivants :

- Python : Dépendances dans `requirements.txt`.
- Node.js : Dépendances dans `package.json`.
- Java : Dépendances dans `pom.xml` (Maven) ou `build.gradle` (Gradle).

:::



## Tester la fonctionnalité

Après avoir sauvegardé les Paramètres, tu peux simplement démarrer le bot avec le bouton vert de démarrage en haut de la page. Dans la console live, tu peux vérifier si le bot a bien démarré.



## Conclusion

Félicitations, tu as installé et configuré ton Bot Discord avec succès. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂






<InlineVoucher />