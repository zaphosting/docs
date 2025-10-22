---
id: avorion-becomeadmin
title: "Avorion : Deviens admin sur ton propre serveur"
description: "Découvre comment attribuer les permissions d’administrateur pour un contrôle total du serveur et gérer efficacement les fonctions du jeu → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-avorion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer les permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes nécessaires pour attribuer les permissions d’administrateur à ton serveur sont décrites ci-dessous.  
<InlineVoucher />

## Configuration

Ajouter un admin se fait via la page des paramètres dans l’interface web. Clique dans la **Gestion du serveur de jeux** sur **Paramètres** et descends jusqu’à **Paramètres du serveur**.

![](https://screensaver01.zap-hosting.com/index.php/s/gzei7sWedJMrqzc/preview)



Là, tu trouveras un champ appelé **Admin SteamIDs**. Tu dois y entrer ton SteamID64. Pour trouver ton SteamID64, commence par ouvrir ton profil Steam puis fais un clic droit n’importe où dessus. Ensuite, clique sur **Copier l’URL Steam**. 



![](https://screensaver01.zap-hosting.com/index.php/s/q7E3qSd9GoLCswM/preview)



Ensuite, ouvre une des pages suivantes et colle l’URL de ton profil : 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Tu obtiendras des infos générales ainsi que le Steam ID de ton compte. Ici, on a juste besoin du SteamID64. Il faut le coller dans le champ prévu à cet effet. Ça devrait ressembler à ça :



![](https://screensaver01.zap-hosting.com/index.php/s/qakTq9iLW72jkyC/preview)



Clique sur **Enregistrer**. Une fois que tu as redémarré le serveur, tu peux exécuter les commandes admin dans le jeu. Pour ça, appuie sur Entrée pour ouvrir le chat puis lance les commandes avec un symbole /. 



## Commandes admin

Voici un aperçu des commandes courantes que tu peux utiliser en tant qu’admin. 



**Commandes générales**

| Commande                 | Description                                                  |
| :---------------------- | :----------------------------------------------------------- |
| /help                   | affiche le message d’aide                                    |
| /w [nom du joueur]      | envoie un message privé à un joueur                          |
| /save                   | sauvegarde l’état actuel                                    |
| /stop                   | arrête le serveur                                           |
| /seed                   | affiche la graine du serveur                                |
| /version                | affiche la version actuelle du serveur                      |
| /suicide                | détruit ton vaisseau actuel                                 |
| /player                 | affiche le nombre de joueurs                                |
| /status                 | affiche des infos sur l’état actuel du serveur              |
| /admin -a [nom du joueur] | ajoute un joueur en tant qu’admin                           |
| /admin -r [nom du joueur] | retire un joueur du statut admin                            |
| /kick [nom du joueur]   | expulse un joueur du serveur                                |
| /ban [nom du joueur]    | ajoute le joueur à la liste noire                           |
| /unban [nom du joueur]  | retire le joueur de la liste noire                          |
| /banip [IP du joueur]   | ajoute l’IP du joueur à la liste noire                      |
| /unbanip [IP du joueur] | retire l’IP du joueur de la liste noire                     |
| /blacklist              | affiche les options de la liste noire                       |
| /whitelist              | affiche les options de la liste blanche                     |



**Commandes cheat (en jeu) :**

| Commande                                | Description                                           |
| :------------------------------------- | :---------------------------------------------------- |
| /give [nom du joueur] [quantité] credits    | donne au joueur la quantité souhaitée de crédits     |
| /give [nom du joueur] [quantité] [nom du minerai] | donne au joueur la quantité souhaitée du minerai sélectionné |



**Commandes serveur (console) :**

| Commande                       | Description                                                  |
| :---------------------------- | :----------------------------------------------------------- |
| /max-logs [valeur]            | nombre de fichiers logs à conserver                          |
| /difficulty [valeur]          | difficulté du serveur, valeurs autorisées : -3, -2, -1, 0, 1, 2, 3 Défaut : 0 |
| /collision-damage [valeur]    | dégâts infligés à un objet lors d’une collision, de 0 à 1. 0 : pas de dégâts, 1 : dégâts complets. défaut : 1 |
| /exit-on-last-admin-logout    | arrêt du serveur quand le dernier admin se déconnecte        |
| /public [valeur]              | indique si le serveur doit autoriser d’autres joueurs à rejoindre |
| /infinite-resources [valeur]  | active les ressources infinies pour tous les joueurs         |
| /listed [valeur]              | indique si le serveur doit apparaître dans les listes publiques |
| /max-players [valeur]         | nombre max de joueurs en ligne Défaut : 10                   |
| /save-interval [valeur]       | intervalle entre les sauvegardes Défaut : 300                |
| /same-start-sector arg       | indique si tous les joueurs doivent commencer dans le même secteur |
| /server-name [valeur]         | nom du serveur, affiché lors des requêtes                    |
| /use-steam-networking [valeur] | utilise le réseau Steam et l’authentification des utilisateurs |
| /galaxy-name [valeur]         | nom de la galaxie, ajouté au chemin des données, chemin final : [datapath]/[galaxyname] |
| /datapath [valeur]            | dossier où les galaxies seront stockées, préfixé au nom de la galaxie |
| /admin [valeur]               | steam id(s) de l’administrateur(s) du serveur                |


## Conclusion

Félicitations, tu as configuré avec succès les permissions d’administrateur. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />