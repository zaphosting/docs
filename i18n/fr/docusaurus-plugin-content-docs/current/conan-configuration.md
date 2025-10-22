---
id: conan-configuration
title: "Conan Exiles : Configure ton propre serveur"
description: "Découvre comment personnaliser les paramètres de ton serveur Conan Exiles pour un gameplay optimal et une sécurité renforcée → En savoir plus maintenant"
sidebar_label: Configuration du serveur
services:
  - gameserver-conan
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Configuration du serveur

Les serveurs Conan Exiles peuvent être configurés de manière très poussée. La configuration du serveur se fait via les fichiers de config. Tu peux les trouver dans l’interface web dans l’administration du serveur de jeux sous Configs. Pour cela, ouvre le fichier de config **ServerSettings.ini**.



![](https://screensaver01.zap-hosting.com/index.php/s/HSqXbCnS62s9mEx/preview)



Tu trouveras ci-dessous un aperçu catégorisé de toutes les commandes importantes, que tu peux utiliser pour configurer librement ton serveur selon tes envies. Certaines commandes peuvent ne pas être présentes dans la config par défaut. Ces commandes peuvent simplement être ajoutées après coup.

<InlineVoucher />

## Général

Dans les paramètres généraux, tu trouveras toutes les commandes importantes pour personnaliser le nom du serveur, les mots de passe, l’anti-triche, etc.

| Option                             | Description                                                  | Commande de config             |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| Nom du serveur                    | Nom de ton serveur.                                          | ServerName="..."               |
| Nombre de joueurs                 | Nombre maximum de joueurs                                    | Dépend du package              |
| Message du jour                  | Message du jour                                             |                                |
| Mot de passe du serveur          | Le mot de passe du serveur peut être modifié ici            | ServerMessageOfTheDay="..."    |
| Mot de passe admin               | Accès pour devenir admin. Plus d’infos dans le guide Devenir admin | AdminPassword="..."            |
| BattlEye activé                 | Active la protection anti-triche BattlEye                   | IsBattlEyeEnabled=             |
| PVP activé                      | Active ou désactive le PVP. 1 = activé, 0 = désactivé       | PVPEnabled=                    |
| Restriction horaire PvP          | Si activé, les combats entre joueurs ne sont possibles que durant les plages horaires spécifiées | RestrictPVPTime=               |
| PVP Blitz activé                | Active ou désactive le PVP Blitz. 1 = activé, 0 = désactivé (par défaut) | PVPBlitzServer=                |
| Restriction horaire dégâts PvP sur bâtiments | Si activé, les joueurs ne peuvent attaquer/détruire les structures des autres que durant les plages horaires spécifiées | RestrictPVPBuildingDamageTime= |
| Communauté                      | Définit le style de communauté : 0=Aucune 1=Puriste 2=Détendu 3=Hardcore 4=Roleplay 5=Expérimental | ServerCommunity=               |
| Région du serveur              | Choisir une région de serveur affecte le filtrage dans la liste. Choisis ta région pour que les joueurs de la même région trouvent ton serveur. 0 = Europe, 1 = Amérique du Nord, 2 = Asie, 3 = Australie, 4 = Amérique du Sud, 5 = Japon | serverRegion=                  |
| Pas de propriété               | Si activé, aucune règle de propriété sur le serveur. Tous les joueurs peuvent piller tous les coffres, utiliser toutes les machines, miner tous les bâtiments, etc. 1 = activé, 0 = désactivé (par défaut) | NoOwnership=                   |
| Conteneurs ignorent la propriété | Si activé, tous les conteneurs sont ouverts aux autres joueurs. 1 = activé, 0 = désactivé | ContainersIgnoreOwnership=     |
| Peut endommager les structures possédées par les joueurs | Si activé, les joueurs peuvent attaquer et détruire les structures des autres. 1 = activé, 0 = désactivé | CanDamagePlayerOwnedStructures= |
| Peut endommager les joueurs    | Si activé, les joueurs peuvent être blessés par d’autres joueurs. 1 = activé, 0 = désactivé | bCanBeDamaged=                 |
| Activer tempête de sable       | Active les tempêtes de sable qui balayent périodiquement les Terres Exilées | EnableSandStorm=               |
| Taille max du clan             | Définit la taille maximale des clans autorisés sur le serveur. Une fois la limite atteinte, aucun nouveau membre ne peut rejoindre. | clanMaxSize=                   |
| Nudité maximale               | Définit la nudité maximale sur le serveur. Cela remplace l’option client. Si le serveur est en "Pas de nudité", même si un joueur met son client en "Nudité totale", il ne verra aucune nudité sur ce serveur. Si le serveur autorise la nudité totale et que le joueur met son client en nudité partielle, seule la nudité partielle sera affichée. 0 = aucune, 1 = partielle, 2 = totale | MaxNudity=                     |
| Chat vocal serveur            | Détermine si le chat vocal doit être activé dans le jeu ou non. 1 = activé, 0 = désactivé | serverVoiceChat=               |



## Progression

Dans les paramètres de progression, tu trouveras toutes les commandes importantes pour personnaliser l’expérience XP que les joueurs peuvent recevoir.

| Option                       | Description                                                  | Commande de config          |
| ---------------------------- | ------------------------------------------------------------ | --------------------------- |
| Multiplicateur XP joueur     | Ce multiplicateur affecte tous les types d’XP reçus par les joueurs. Permet d’ajuster la progression pour toutes les activités. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPRateMultiplier=     |
| Multiplicateur XP temps joueur | Conan Exiles donne passivement de l’XP aux joueurs avec le temps, juste pour survivre. Ce multiplicateur ajuste la vitesse à laquelle ils reçoivent cet XP. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPTimeMultiplier=     |
| Multiplicateur XP tuerie joueur | Multiplie l’XP reçue pour tuer monstres et joueurs. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPKillMultiplier=     |
| Multiplicateur XP récolte joueur | Multiplie l’XP reçue pour la récolte. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPHarvestMultiplier=  |
| Multiplicateur XP craft joueur | Multiplie l’XP reçue pour le craft. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPCraftMultiplier=    |



## Temps

Dans les paramètres de temps, tu trouveras toutes les commandes importantes pour ajuster le temps. Tu peux configurer la durée des jours et des nuits comme tu veux.

| Option               | Description                                                  | Commande de config       |
| -------------------- | ------------------------------------------------------------ | ------------------------ |
| Vitesse du cycle jour | Multiplie la vitesse du cycle complet de 24h. Les parties individuelles du jour peuvent être ajustées ci-dessous. Le multiplicateur s’applique en plus des options listées. | DayCycleSpeedScale=      |
| Vitesse du jour       | Les heures de jour sont entre 7h00 et 16h59 heure jeu. Ce multiplicateur augmente la durée de cette période. | DayTimeSpeedScale=       |
| Vitesse de la nuit    | Les heures de nuit sont entre 19h00 et 4h59 heure jeu. Ce multiplicateur augmente la durée de cette période. | NightTimeSpeedScale=     |
| Vitesse de l’aube/du crépuscule | L’aube est entre 5h00 et 6h59, le crépuscule entre 17h00 et 18h59. Ce multiplicateur multiplie la durée de ces périodes. | DawnDuskSpeedScale=      |
| Utiliser temps de rattrapage | Active ou désactive la mécanique de rattrapage du temps côté client. true = activé, false = désactivé. | UseClientCatchUpTime=    |
| Temps de rattrapage    | Pour aider les nouveaux joueurs, Conan Exiles peut forcer un client à démarrer à une heure précise, indépendamment de l’heure serveur. Les nouveaux persos commencent alors à cette heure et jouent jusqu’à ce que le serveur les rattrape. On recommande de ne pas mettre la nuit. | ClientCatchUpTime=       |



## Survie

Dans les paramètres de survie, tu trouveras toutes les commandes importantes pour personnaliser la survie. Par exemple, la vie max d’un joueur, sa régénération, etc.

| Option                                | Description                                                  | Commande de config                |
| ------------------------------------- | ------------------------------------------------------------ | --------------------------------- |
| Multiplicateur vie joueur             | Multiplie directement la valeur de vie du joueur. 0.5 = 50 HP, 1.0 = 100 HP (standard), 1.5 = 150 HP | PlayerHealthMultiplier=           |
| Vitesse régénération vie joueur       | Multiplie la vitesse passive de régénération de vie. 0.5 = 2.5 HP/s, 1.0 = 5.0 HP/s (par défaut), 1.5 = 7.5 HP/s | PlayerHealthRegenSpeedScale=      |
| Multiplicateur endurance joueur       | Multiplie la quantité d’endurance du joueur. 0.5 = 50 endurance, 1.0 = 100 endurance (par défaut), 1.5 = 150 endurance | PlayerStaminaMultiplier=          |
| Vitesse sprint joueur                 | Définit la vitesse de sprint du joueur. 0.5 = 1 m/s, 1.0 = 2 m/s (par défaut), 1.5 = 3 m/s | PlayerSprintSpeedScale=           |
| Multiplicateur coût endurance joueur  | Augmente ou diminue la quantité d’endurance utilisée par activité | PlayerStaminaCostMultiplier=      |
| Multiplicateur coût sprint endurance  | Augmente ou diminue la quantité d’endurance utilisée au sprint | PlayerStaminaCostSprintMultiplier= |
| Vitesse régénération endurance joueur | Multiplie la vitesse passive de régénération d’endurance. 0 = pas de perte, 0.5 = 1.0 perte d’eau/s, 1.0 = 2.0 perte d’eau/s (par défaut), 1.5 = 3.0 perte d’eau/s | PlayerStaminaRegenSpeedScale=     |
| Multiplicateur soif active joueur      | Modifie la vitesse à laquelle un joueur perd ou gagne de l’eau activement. 0 = pas de perte, 0.5 = 1.0 perte d’eau/s, 1.0 = 2.0 perte d’eau/s (par défaut), 1.5 = 3.0 perte d’eau/s | PlayerActiveThirstMultiplier=     |
| Multiplicateur soif inactive joueur    | Modifie la vitesse à laquelle un joueur perd ou gagne de l’eau passivement. 0 = pas de perte, 0.5 = 1.0 perte d’eau/s, 1.0 = 2.0 perte d’eau/s (par défaut), 1.5 = 3.0 perte d’eau/s | PlayerIdleThirstMultiplier=       |
| Multiplicateur soif hors ligne joueur  | Modifie la vitesse à laquelle un joueur perd ou gagne de l’eau hors ligne. 0 = pas de perte, 0.5 = 1.0 perte d’eau/s, 1.0 = 2.0 perte d’eau/s (par défaut), 1.5 = 3.0 perte d’eau/s | PlayerOfflineThirstMultiplier=    |
| Multiplicateur faim active joueur      | Modifie la vitesse à laquelle un joueur perd ou gagne de la nourriture activement. 0 = pas de perte, 0.5 = 1.0 perte d’eau/s, 1.0 = 2.0 perte d’eau/s (par défaut), 1.5 = 3.0 perte d’eau/s | PlayerActiveHungerMultiplier=     |
| Multiplicateur faim inactive joueur    | Modifie la vitesse à laquelle un joueur perd ou gagne de la nourriture passivement. 0 = pas de perte, 0.5 = 1.0 perte d’eau/s, 1.0 = 2.0 perte d’eau/s (par défaut), 1.5 = 3.0 perte d’eau/s | PlayerIdleHungerMultiplier=       |
| Multiplicateur faim hors ligne joueur  | Modifie la vitesse à laquelle un joueur perd ou gagne de la nourriture hors ligne. 0 = pas de perte, 0.5 = 1.0 perte d’eau/s, 1.0 = 2.0 perte d’eau/s (par défaut), 1.5 = 3.0 perte d’eau/s | PlayerOfflineHungerMultiplier=    |
| Les persos déconnectés restent dans le monde | Si True, les corps des joueurs restent dans le monde en état inconscient, sinon ils sont supprimés hors ligne. (Par défaut : True) | LogoutCharactersRemainInTheWorld= |
| Lâcher équipement à la mort          | Si True, les joueurs tués lâchent leur équipement à la réapparition. Sinon, ils réapparaissent avec tout leur équipement. (Par défaut : True) | DropEquipmentOnDeath=             |
| Lâcher barre de raccourcis à la mort | Si True, les joueurs tués perdent les objets de leurs barres rapides à la réapparition. Sinon, ils les conservent. (Par défaut : True) | DropShortcutbarOnDeath=           |
| Lâcher sac à dos à la mort           | Si True, les joueurs tués perdent le contenu de leur sac à dos à la réapparition. Sinon, ils le conservent. (Par défaut : True) | DropBackpackOnDeath=              |
| Tout le monde peut piller le cadavre | Si True, n’importe qui peut piller le cadavre d’un joueur mort. Sinon, seul le joueur peut piller son propre cadavre. (Par défaut : True) | EverybodyCanLootCorpse=           |
| Multiplicateur suppression corruption thrall | Augmente la vitesse à laquelle les thralls enlèvent la corruption du joueur. | ThrallCorruptionRemovalMultiplier= |
| Multiplicateur gain corruption joueur | Multiplie la corruption reçue par les joueurs.              | PlayerCorruptionGainMultiplier=   |



## Combat

Dans les paramètres de combat, tu trouveras toutes les commandes importantes pour ajuster les dégâts. Cela inclut combien un joueur peut infliger, absorber, etc.

| Option                          | Description                                                  | Commande de config            |
| ------------------------------- | ------------------------------------------------------------ | ----------------------------- |
| Multiplicateur dégâts joueur    | Multiplie les dégâts infligés par un joueur. 0 = aucun dégât, 0.5 = 10 dégâts, 1.0 = 20 dégâts (par défaut), 1.5 = 30 dégâts | PlayerDamageMultiplier=       |
| Multiplicateur dégâts reçus joueur | Multiplie les dégâts reçus par un joueur. 0 = aucun dégât, 0.5 = 10 dégâts, 1.0 = 20 dégâts (par défaut), 1.5 = 30 dégâts | PlayerDamageTakenMultiplier=  |
| Multiplicateur dégâts sbires    | Multiplie les dégâts infligés par thralls et animaux de compagnie. 0 = aucun dégât, 0.5 = 10 dégâts, 1.0 = 20 dégâts (par défaut), 1.5 = 30 dégâts | MinionDamageMultiplier=       |
| Multiplicateur dégâts reçus sbires | Multiplie les dégâts reçus par thralls et animaux de compagnie. 0 = aucun dégât, 0.5 = 10 dégâts, 1.0 = 20 dégâts (par défaut), 1.5 = 30 dégâts | MinionDamageTakenMultiplier=  |
| Multiplicateur dégâts PNJ       | Multiplie les dégâts infligés par les PNJ et monstres. 0 = aucun dégât, 0.5 = 10 dégâts, 1.0 = 20 dégâts (par défaut), 1.5 = 30 dégâts | NPCDamageMultiplier=          |
| Multiplicateur dégâts reçus PNJ | Multiplie les dégâts reçus par les PNJ et monstres.          | NPCDamageTakenMultiplier=     |
| Multiplicateur vie PNJ          | Augmente la vie de tous les PNJ.                             | NPCHealthMultiplier=          |
| Multiplicateur réapparition PNJ | Multiplie la vitesse de réapparition des PNJ après mort. Note : beaucoup de PNJ ne respectent pas encore cette valeur. 0 = jamais (non testé), 0.5 = 15 secondes, 1.0 = 30 secondes (par défaut), 1.5 = 45 secondes | NPCRespawnMultiplier=         |
| Multiplicateur dégâts durabilité | Modifie les dégâts de durabilité subis par un objet à l’usage. Affecte la durée de vie des armes, outils et armures. 0 = invulnérable, 0.5 = 5 pertes de durabilité par coup, 1.0 = 10 pertes (par défaut), 1.5 = 15 pertes | DurabilityMultiplier=         |
| Multiplicateur durabilité bouclier | Modifie les dégâts de durabilité subis par un bouclier en blocage. 0 = invulnérable, 0.5 = 5 pertes par coup, 1.0 = 10 pertes (par défaut), 1.5 = 15 pertes | ShieldDurabilityMultiplier=   |
| Temps réveil thrall            | Durée pendant laquelle un thrall reste inconscient. 0 = réveil immédiat (non testé), 300 = 5 minutes, 600 = 10 minutes (par défaut), 900 = 15 minutes | UnconsciousTimeSeconds=       |
| Dégâts thrall inconscient      | Multiplie les dégâts reçus par un thrall inconscient.        | ConciousnessDamageMultiplier= |
| Durée de vie avatar            | Durée pendant laquelle un Avatar peut rester vivant dans le monde. | AvatarLifetime=               |
| Désactiver avatars            | True : les avatars ne peuvent pas être invoqués sur ce serveur, False : ils peuvent l’être. | AvatarsDisabled=              |
| Temps d’invocation avatar      | Temps nécessaire pour invoquer un Avatar.                    | AvatarSummonTime=             |
| Multiplicateur durée dôme avatar | Durée de vie des dômes d’avatar.                             | AvatarDomeDurationMultiplier= |
| Désactiver notification de revendication | Désactive les notifications de revendication de terrain. True : désactive, False : active | DisableLandclaimNotifications= |



## Récolte

Dans les paramètres de récolte, tu trouveras toutes les commandes importantes pour personnaliser la récolte. Cela inclut la vitesse de récolte, la fréquence de réapparition des ressources, etc.

| Option                            | Description                                                  | Commande de config           |
| --------------------------------- | ------------------------------------------------------------ | ---------------------------- |
| Vitesse de pourrissement des objets | Affecte la durée de conservation des aliments (valeurs plus petites = durée plus longue). 0 = jamais pourri, 0.5 = 4 minutes, 1.0 = 2 minutes (par défaut), 1.5 = 1 minute | ItemSpoilRateScale=          |
| Multiplicateur quantité récolte   | Multiplie la quantité de ressources récoltées. 1.0 = 1 ressource (par défaut), 2.0 = 2 ressources | HarvestAmountMultiplier=     |
| Multiplicateur vitesse réapparition ressources | Multiplie la vitesse de réapparition des ressources après récolte. 0.5 = 7,5 minutes, 1.0 = 15 minutes (par défaut), 1.5 = 30 minutes | ResourceRespawnSpeedMultiplier= |
| Multiplicateur rayon revendication terrain | Augmente ou diminue le rayon de revendication de terrain. Affecte la réapparition des ressources et PNJ ainsi que la capacité des autres joueurs à revendiquer les terrains proches. 0.5 = 10 mètres, 1.0 = 20 mètres (standard), 1.5 = 30 mètres | LandClaimRadiusMultiplier=   |



## Craft

Dans les paramètres de craft, tu trouveras toutes les commandes importantes pour personnaliser le craft. Cela inclut la vitesse de fabrication.

| Option                                | Description                                                  | Commande de config             |
| ------------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| Multiplicateur temps de craft         | Augmente ou diminue la durée nécessaire pour fabriquer des objets. | CraftingTimeMultiplier=        |
| Multiplicateur temps d’entraînement thrall | Augmente ou diminue le temps nécessaire pour entraîner un thrall. | ThrallCraftingTimeMultiplier=  |
| Multiplicateur temps de combustion carburant | Augmente ou diminue la durée de combustion des unités de carburant. | FuelBurnTimeMultiplier=        |
| Multiplicateur vitesse de craft       | Multiplie la vitesse à laquelle les objets peuvent être fabriqués. Utiliser une roue de douleur pour convertir des thralls est considéré comme du craft. 0 ou moins = immédiat, 0.5 = 10 secondes, 1.0 = 20 secondes (par défaut), 1.5 = 30 secondes | ItemConvertionMultiplier=      |
| Multiplicateur dégâts structures      | Multiplie les dégâts infligés par une structure défensive (ex : palissade). 0 = aucun dégât (non testé), 0.5 = 10 dégâts, 1.0 = 20 dégâts (par défaut), 1.5 = 30 dégâts | StructureDamageMultiplier=     |
| Multiplicateur dégâts reçus structures | Multiplie les dégâts reçus par une structure lors d’une attaque (murs/stations de craft inclus). 0 = aucun dégât (non testé), 0.5 = 10 dégâts, 1.0 = 20 dégâts (par défaut), 1.5 = 30 dégâts | StructureDamageTakenMultiplier= |
| Multiplicateur vie structures        | Multiplie la vie des structures. 0.5 = 500 HP, 1.0 = 1000 HP (par défaut), 1.5 = 1500 HP | StructureHealthMultiplier=     |
| Multiplicateur encombrement joueur   | Multiplie l’encombrement que les objets ajoutent au joueur. (0 ne désactive pas) 0.5 = 2.5 poids ajouté, 1.0 = 5.0 poids ajouté (par défaut), 1.5 = 7.5 poids ajouté | PlayerEncumbranceMultiplier=   |
| Multiplicateur pénalité encombrement joueur | Multiplie les pénalités subies quand le joueur est encombré. (0 ne désactive pas) 0.5 = 35 pénalité de mouvement à 99%, 1.0 = 70 pénalité (par défaut), 1.5 = 125 pénalité | PlayerEncumbrancePenaltyMultiplier= |



## Abandon

Dans les paramètres d’abandon, tu trouveras toutes les commandes importantes pour ajuster l’abandon des bâtiments.

| Option                         | Description                                                  | Commande de config          |
| ------------------------------ | ------------------------------------------------------------ | --------------------------- |
| Désactiver abandon des bâtiments | Si activé, désactive la dégradation des bâtiments avec le temps. | DisableBuildingAbandonment= |
| Multiplicateur temps dégradation bâtiments | Augmente ou diminue le temps nécessaire pour que les pièces et structures se dégradent. | BuildingDecayTimeMultiplier= |



## Chat

Dans les paramètres de chat, tu trouveras toutes les commandes importantes pour personnaliser le chat. Cela inclut l’activation, le rayon et la longueur max des messages.

| Option             | Description                                                  | Commande de config       |
| ------------------ | ------------------------------------------------------------ | ------------------------ |
| Rayon chat local   | Définit le rayon en centimètres dans lequel le chat local est diffusé autour d’un joueur | ChatLocalRadius=         |
| Longueur max message | Définit le nombre max de caractères dans un message de chat. | ChatMaxMessageLength=    |
| Chat global activé | Autorise ou non le chat global. Le chat en jeu a un canal global où tous les joueurs peuvent parler. | ChatHasGlobal=           |



## Purge

Dans les paramètres de purge, tu trouveras toutes les commandes importantes pour ajuster la purge, ses étapes, etc.

| Option                           | Description                                                  | Commande de config                                               |
| -------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------- |
| Activer la purge                 | Désactiver cette option désactive complètement les événements de purge | EnablePurge=                                                    |
| Niveau de purge                 | Augmenter cette valeur augmente la difficulté de la purge. Exemple : 0 désactive les purges | PurgeLevel=                                                     |
| -                                | Augmenter cette valeur augmente le nombre de purges par jour. Le nombre réel dépend aussi des options ci-dessous | PurgePeriodicity=                                               |
| -                                | Si activé, les purges sont limitées à certaines plages horaires | RestrictPurgeTime=                                              |
| -                                | La valeur 0000 signifie que 00:00 est l’heure de fin en semaine | PurgeTimeWeekdayEnd=                                            |
| -                                | La valeur 0000 signifie que 00:00 est l’heure de début en semaine | PurgeTimeWeekdayStart=                                          |
| -                                | La valeur 0000 signifie que 00:00 est l’heure de fin le weekend | PurgeTimeWeekendEnd=                                            |
| -                                | La valeur 0000 signifie que 00:00 est l’heure de début le weekend | PurgeTimeWeekendStart=                                          |
| -                                | La valeur 0830 signifie que 08:30 est l’heure de début en semaine | PurgeRestrictionWeekdayEnd=                                     |
| -                                | La valeur 2200 signifie que 22:00 est l’heure de fin le weekend | PurgeRestrictionWeekdayStart=                                   |
| -                                | La valeur 1800 signifie que 18:00 est l’heure de début le weekend | PurgeRestrictionWeekendStart=                                   |
| Temps préparation purge          | Augmenter cette valeur augmente le temps en minutes entre l’avertissement de purge et le début de la purge. | PurgePreparationTime=                                           |
| Durée de la purge               | Augmenter cette valeur augmente la durée max de la purge. Si toutes les vagues sont tuées, la purge peut se terminer plus tôt | PurgeDuration=                                                  |
| Nombre minimum de joueurs en ligne | Augmenter cette valeur fait que les purges n’arrivent que si ce nombre de joueurs est en ligne. Si 0, la purge attaque tout clan au-dessus du seuil (purges hors ligne). | MinPurgeOnlinePlayers=                                          |
| Autoriser construction          | Si activé, la construction est autorisée pendant les purges. | AllowBuilding=                                                  |
| Seuil déclencheur purge clan    | Augmenter cette valeur augmente le nombre d’actions sélectionnées que les clans ou joueurs doivent faire pour déclencher la purge. Plus le nombre est élevé, plus le clan doit être actif longtemps. | ClanPurgeTrigger=                                               |
| Intervalle mise à jour compteur purge | Intervalle auquel les événements de purge de clan sont agrégés et ajoutés au compteur. Des valeurs plus basses augmentent plus vite le compteur. | ClanScoreUpateFrenquency=                                       |
| -                                | Augmenter cette valeur augmente les dégâts infligés par les PNJ pendant une purge. Exemples : 5.000000, 10.000000, 15.000000, 20.000000, 25.000000 | PurgeNPCBuildingDamageMultiplier=                               |



## Animaux de compagnie et faim

Dans les paramètres Animaux de compagnie et faim, tu trouveras toutes les commandes importantes concernant la consommation de nourriture des animaux. Par exemple, combien et à quelle vitesse ils consomment.

| Option                              | Description                                                  | Commande de config            |
| ----------------------------------- | ------------------------------------------------------------ | ----------------------------- |
| Activer système de faim : thralls   | Active ou désactive le système de faim pour les thralls.    | ToggleHungerSystemThralls=    |
| Activer système de faim : animaux   | Active ou désactive le système de faim pour les animaux.    | ToggleHungerSystemPets=       |
| Valeur nutrition nourriture         | Quantité de nutrition que le compagnon gagne en mangeant.   | FoodNutritionValue=           |
| Temps avant famine en minutes       | Nombre de minutes pour que la jauge de faim passe de 100 à 0. Par défaut = 10080 | StarvationTimeInMinutes=      |
| Plafond pénalité dégâts famine       | Quand la jauge de faim atteint 0, le compagnon subit des dégâts. Cette valeur détermine la santé maximale pouvant être perdue, en pourcentage (1 = 100%). | StarvationDamagePenaltyCap=   |
| Multiplicateur temps craft en enclos | Multiplie la vitesse de craft dans les enclos pour animaux. | AnimalPenCraftingTimeMultiplier= |
| Multiplicateur portée conteneur nourriture | Multiplie la distance à laquelle les conteneurs nourrissent les compagnons. | FeedBoxRangeMultiplier=       |
| Régime exclusif                    | Détermine si les compagnons mangent uniquement les items listés dans leur régime. Désactivé = ils mangent tout aliment en plus de leur régime. | ExclusiveDiet=                |

<InlineVoucher />