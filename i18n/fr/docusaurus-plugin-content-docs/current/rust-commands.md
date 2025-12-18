---
id: rust-commands
title: "Rust : Commandes Admin"
description: "Découvre les commandes Rust essentielles pour la gestion de serveur et le contrôle des joueurs afin d’optimiser le gameplay et l’administration → En savoir plus maintenant"
sidebar_label: Commandes Admin
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Rust propose une large gamme de commandes différentes disponibles pour les propriétaires de serveurs et les joueurs. Sur cette page, on résume les plus utiles et populaires, utilisées pour les réglages du serveur, l’administration des joueurs et le contrôle des joueurs.

:::info
Certaines commandes nécessitent l’utilisation de l’ID Steam64 d’un joueur. Utilise le petit tutoriel ci-dessous pour comprendre comment obtenir l’ID Steam d’un joueur.
:::

<InlineVoucher />

## Obtenir ton Steam ID
D’abord, utilise un outil comme le [Steam ID Finder](https://steamidfinder.com/) pour récupérer ton Steam64 ID.

Ici, tu entres ton URL Steam :

![](https://screensaver01.zap-hosting.com/index.php/s/wscaNkzWSjzAktf/preview)

Puis clique sur `Find Steam ID`. Tu devrais maintenant voir ton profil Steam, copie ici ton "Steam64ID (Dec)".

Et voilà, tu as maintenant le Steam64 ID et tu peux l’utiliser pour les commandes qui en ont besoin ci-dessous.

## Catégories de Commandes

Utilise les onglets ci-dessous pour naviguer entre chaque catégorie. Les tableaux contiennent la commande elle-même, les valeurs acceptées (si applicable) et une description pour faciliter la compréhension.

:::info
Toutes les commandes mentionnées sur cette page concernent Rust vanilla.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ServerSettings" label="Paramètres du Serveur" default>

| Syntaxe de la Commande                  | Valeurs Acceptées | Description | 
| ----------------------- | ---------- | --------- | 
| server.globalchat      | true/false          | Si activé, tout message de chat sera visible par tous les joueurs         | 
| server.stop      | -          | Arrête le serveur         | 
| server.save      | -          | Sauvegarde le serveur         | 
| server.saveinterval "valeur"      | Entier (par défaut 60)          | Définit l’intervalle d’auto-sauvegarde du serveur (en secondes)         | 
| server.secure      | true/false          | Si activé, Easy Anti Cheat (EAC) refuse la connexion aux joueurs non enregistrés ou bannis avant qu’ils ne se connectent         | 
| server.seed "valeur"     | Entier (ex. 123456)          | Définit la seed du monde du serveur         | 
| server.stability      | true/false          | Si activé, la stabilité des structures des bâtiments est activée         | 
| server.tickrate "taux"      | Entier (par défaut 30)          | Définit le tickrate du serveur         | 
| server.writecfg      | -          | Sauvegarde les modifications de configuration précédemment définies via d’autres commandes serveur         | 
| chat.serverlog      | true/false          | Si activé, le chat est toujours enregistré dans la console du serveur         | 
| commands.echo "texte"      | Chaîne (ex. "Hello World!")          | Affiche le message spécifié dans la console du serveur         | 
| global.say "message"      | Chaîne (ex. "Bienvenue !")          | Envoie un message à tous les joueurs du serveur         | 
| env.time      | Entier (ex. 16)          | Définit l’heure du monde en jeu à la valeur spécifiée (en heures)         | 
| server.events      | -          | Si activé, active les événements serveur comme les largages aériens         | 
| commands.find "commande"      | Chaîne (ex. "quit")          | Recherche une commande ou utilise "." pour lister toutes les commandes disponibles         | 
| global.quit      | -          | Sauvegarde le serveur puis l’arrête         | 
| global.init      | -          | Charge les fichiers de configuration         | 

</TabItem>
<TabItem value="PlayerAdmin" label="Admin Joueur">

| Syntaxe de la Commande                  | Valeurs Acceptées | Description | 
| ----------------------- | ---------- | --------- | 
| global.ban "nomdujoueur" "raison"      | Chaîne (ex. "Jacob"), Chaîne (ex. "Était méchant !")          | Bannit un utilisateur du serveur (raison optionnelle)         | 
| global.banid "steam64"      | Entier          | Bannit un utilisateur via son Steam64 ID         | 
| global.banlistex      | -          | Affiche la liste des utilisateurs bannis avec leur nom de joueur et raison du ban         | 
| global.banlist      | -          | Affiche la liste des joueurs bannis dans le chat         | 
| global.unban "steam64"      | Entier          | Débannit un utilisateur via son Steam64 ID         | 
| global.kickall      | -          | Expulse tous les joueurs du serveur         | 
| global.kick "steam64 / nomdujoueur" "raison"      | Entier/Chaîne (ex. "Jacob"), Chaîne (ex. "Était méchant !")         | Expulse un utilisateur via son Steam64 ID ou son nom de joueur (raison optionnelle)         | 
| global.ownerid "steam64 / nomdujoueur"      | Entier/Chaîne (ex. "Jacob")          | Définit le joueur spécifié comme admin serveur via son Steam64 ID ou son nom de joueur (niveau d’auth 2)         | 
| global.removeowner "steam64"      | Entier         | Retire les privilèges d’admin à l’utilisateur via le Steam64 ID spécifié         | 
| global.moderatorid "steam64 / nomdujoueur"      | Entier/Chaîne (ex. "Jacob")          | Définit le joueur spécifié comme modérateur serveur via son Steam64 ID ou son nom de joueur (niveau d’auth 1)         | 
| global.removemoderator "steam64"      | Entier          | Retire les privilèges de modérateur à l’utilisateur via le Steam64 ID spécifié         | 
| global.listid      | -          | Affiche la liste des utilisateurs bannis via Steam64 ID          | 

</TabItem>
<TabItem value="Player Controls" label="Contrôles Joueur">

| Syntaxe de la Commande                  | Valeurs Acceptées | Description | 
| ----------------------- | ---------- | --------- | 
| kill      | -          | Tue ton propre joueur         | 
| global.quit      | -          | Sauvegarde et quitte le jeu         | 
| global.god      | true/false          | Active/désactive le mode Dieu pour que le joueur ne prenne aucun dégât (admins uniquement)          | 
| global.noclip      | true/false          | Active/désactive le mode Noclip pour que le joueur puisse voler librement (admins uniquement)          | 
| global.debugcamera      | true/false          | Active/désactive le mode caméra debug pour que le joueur puisse utiliser une caméra libre (admins uniquement)          | 
| player.sleep      | -          | Force ton joueur à dormir         | 
| commands.find "commande"      | Chaîne (ex. "quit")          | Recherche une commande disponible pour le joueur
| chat.say "texte"     | Chaîne (ex. "Hello World!")          | Envoie un message à tous les joueurs du serveur         | 
| inventory.give "itemID" "quantité"     | Entier (itemID), Entier (ex. 5)          | Donne un objet à ton inventaire         | 
| inventory.giveto "nomdujoueur" "itemID" "quantité"      | Chaîne (ex. "Jacob"), Entier (itemID), Entier (ex. 5)          | Donne un objet à l’inventaire de l’utilisateur spécifié         | 

</TabItem>
</Tabs>

<InlineVoucher />