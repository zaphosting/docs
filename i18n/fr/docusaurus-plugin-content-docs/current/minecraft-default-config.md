---
id: minecraft-default-config
title: "Minecraft : Paramètres de configuration du serveur"
description: "Découvrez comment optimiser les paramètres du serveur Minecraft pour la performance et la stabilité tout en personnalisant l'expérience de jeu → En savoir plus maintenant"
sidebar_label: Config Serveur
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Que puis-je configurer dans ce fichier ?

Minecraft est déjà livré avec une petite config appelée *server.properties*.  
Le serveur peut être configuré fondamentalement ici. Nous expliquons ce que chaque point fait et ce qu’il faut prendre en compte lors des modifications. Certaines options sont **à manipuler avec précaution**, car elles peuvent parfois impacter drastiquement la performance du serveur, ce qui peut entraîner, entre autres, une instabilité du serveur.

<InlineVoucher />

### view-distance

Avec ce paramètre, la *visibilité maximale* peut être définie par le serveur. Peu importe la visibilité réglée côté client, le serveur n’enverra jamais de données de chunks au client au-delà de cette valeur. Vous pouvez aussi baisser cette valeur pour protéger la performance du serveur. L’expérience de jeu n’est pas affectée même avec une valeur de 5. Des valeurs inférieures à 5 ne sont pas recommandées et peuvent, dans de rares cas, causer des problèmes.  
**IMPORTANT :** La valeur ne doit en aucun cas (sauf nécessité absolue) être augmentée, car cela pourrait causer de graves problèmes de performance.

:::info
Ce paramètre s’applique uniquement aux serveurs Vanilla ou Forge.

Pour Bukkit, Spigot et Paper Spigot, la valeur doit être définie dans leur propre config.
:::

### max-build-height

Détermine jusqu’à quelle hauteur (coordonnée Y) il est possible de construire ou détruire. Les valeurs supérieures à 256 sont **interdites** et ignorées par le serveur. Ce paramètre est donc très utile si vous souhaitez réduire la hauteur maximale.

### server-ip

Si vous avez réservé plusieurs IPs pour votre serveur dédié ou VPS, vous pouvez ici spécifier laquelle doit être utilisée. Si vous n’avez qu’une seule IP, ce champ peut rester vide – c’est pareil pour un serveur de jeux.

### level-seed

Par défaut, le générateur de monde crée toujours une [seed](https://minecraft.fandom.com/wiki/Seed_(level_generation)) aléatoire, donc un monde complètement aléatoire.  
Cependant, vous pouvez définir votre propre seed composée de **lettres ou chiffres**, et le serveur générera alors le monde correspondant. La longueur maximale est de **32 caractères**.

:::info
Il existe des générateurs de seed où vous pouvez configurer un monde selon vos idées.

[Celui-ci](https://minecraft.tools/en/custom.php) est l’un des meilleurs et peut faire presque tout.
:::

### gamemode

Cette option permet de définir le mode de jeu par défaut sur votre serveur. Ce mode est attribué à chaque joueur lors de sa première connexion et peut ensuite être modifié à tout moment via la commande [/gamemode](https://minecraft.fandom.com/wiki/Gameplay).

Si vous ne connaissez pas les IDs des modes de jeu, voici la liste :

| valeur | Mode de jeu |
|--|--|
| 0 | Survie |
| 1 | Créatif |
| 2 | Aventure |
| 3 | Spectateur |

### server-port

Vous pouvez attribuer un port fixe à votre serveur via lequel il sera accessible en combinaison avec l’IP. Si vous voulez faire tourner plusieurs serveurs sur votre machine, chaque serveur doit avoir un port différent. Cette option peut généralement rester inchangée et est surtout utile pour un réseau BungeeCord.

### enable-command-block

Active les [blocs de commande](https://minecraft.fandom.com/wiki/Command_Block) sur le serveur. Si vous n’en avez pas besoin, il est conseillé de mettre cette valeur à *false* car il existe des méthodes qui peuvent détruire ou endommager le serveur via les blocs de commande.

### allow-nether

Cette option active ou désactive le Nether. Si désactivé, le Nether ne sera plus accessible via un portail. L’accès reste cependant possible via un plugin comme [Multiverse Core](https://www.spigotmc.org/resources/multiverse-core.390/).

### enable-rcon

Permet d’exécuter des commandes depuis n’importe où via la console avec RCON. Un mot de passe et un port séparé sont nécessaires. Ces paramètres sont aussi configurés ici dans la config. On recommande de désactiver RCON pour éviter les intrusions non autorisées.

### op-permission-level

Définit le niveau OP standard attribué à un nouvel opérateur. Le niveau et la gestion individuelle par joueur sont expliqués plus en détail [ici](minecraft-addop.md).

### enable-query

La query fournit à des services externes, comme un site web, des données séparées telles que le nombre actuel de joueurs ou une liste précise des joueurs connectés. Par exemple, vous pouvez afficher ces données sur un site via PHP. Certaines listes de serveurs utilisent cette fonction pour afficher correctement le serveur.

### prevent-proxy-connections

Ce paramètre détermine si les joueurs peuvent se connecter via un VPN/proxy. Un VPN est souvent utilisé pour contourner un ban IP, donc cette option peut être très utile. Parfois, il y a des restrictions qui bloquent même des connexions normales par erreur.

:::info
Pour un contrôle poussé des connexions VPN/proxy, il vaut la peine d’installer un plugin dédié.

Beaucoup de plugins gratuits existent, mais ce [plugin](https://www.spigotmc.org/resources/antibotdeluxe-%E2%80%BA-the-most-advanced-antibot-spigot-bungee-1500-purchases-1-7-1-15.31700/updates) (payant) nous a le plus convaincus et protège votre serveur contre toutes attaques de bots.
:::

### generator-settings

Comme en mode solo, le serveur peut créer un monde selon des spécifications précises. À la différence d’une seed, le monde est configuré à l’avance, mais reste aléatoire et donc unique.

Un code de génération pour une map plate ressemblerait à ceci :

`{"biome":"minecraft:plains","layers":[{"block":"minecraft:bedrock","height":1},{"block":"minecraft:dirt","height":2},{"block":"minecraft:grass_block","height":1}],structures:{"village":{}}}`

### resource-pack

Si un pack de textures spécial doit être utilisé sur le serveur, vous pouvez spécifier le **lien direct de téléchargement** ici.  
Le pack sera alors chargé et activé automatiquement après confirmation du joueur.

### player-idle-timeout

Les joueurs inactifs peuvent être automatiquement expulsés après le nombre de secondes spécifié. Cette option est très utile quand les slots du serveur sont très demandés et que vous voulez libérer de la place pour des joueurs actifs.

### level-name

Par défaut, le monde s’appelle "world". Avec cette option, vous pouvez définir un autre nom. Si un monde existe déjà et que vous changez ce nom, un nouveau monde avec ce nom sera créé automatiquement. L’ancien monde reste dans son dossier d’origine.

### motd

Vous pouvez définir un message qui s’affiche dans la liste des serveurs, si ajouté. Ce message n’apparaît pas lors d’une connexion directe sauf si des mods spéciaux sont installés côté client. Le message peut contenir toutes les couleurs et formats que Minecraft propose.

:::info
Le MOTD peut être créé rapidement et facilement avec cet [outil](https://minecraft.tools/en/motd.php).
:::

### force-gamemode

Détermine si le joueur doit toujours être mis dans le mode de jeu standard décrit plus haut à chaque connexion. Peu importe le mode dans lequel il était avant, le mode standard sera toujours appliqué.

### hardcore

Le mode hardcore fait que les joueurs sont bannis ou mis en mode spectateur à leur mort. Si vous souhaitez l’activer, un nouveau monde **doit être** créé car ce mode impacte la génération du monde.

### white-list

Active la [Whitelist](https://minecraft.fandom.com/wiki/Commands/whitelist), où seuls les joueurs sur la liste ont accès. Les commandes pour ajouter, retirer des joueurs de la whitelist, etc. sont expliquées sur cette page.

### broadcast-console-to-ops

Détermine si les opérateurs reçoivent une notification dans le chat quand des commandes sont exécutées en jeu.

### pvp

Active ou désactive le PVP sur le serveur. Si désactivé, les joueurs ne peuvent plus se faire de dégâts. Cette option n’empêche pas par exemple la pose volontaire de lave, donc les attaques détournées restent possibles.

### spawn-npcs

Active ou désactive la présence de villageois dans les villages. Si désactivé, il n’y aura aucun villageois sur tout le serveur. Très utile si vous voulez limiter le commerce aux joueurs et renforcer l’économie d’un serveur économique.

### generate-structures

Impacte le générateur de monde. Permet de définir si des structures comme villages ou temples doivent être générées.

### spawn-animals

Détermine si des animaux doivent apparaître sur le serveur. La liste complète des animaux est [ici](https://minecraft.fandom.com/wiki/Animal).

### snooper-enabled

Si activé, le serveur envoie des données anonymes à Mojang pour aider au développement et à l’optimisation. Cette option n’impacte pas la performance du serveur.

### difficulty

Permet de définir la difficulté générale du serveur. Par exemple, les mobs infligent plus ou moins de dégâts. Plus d’infos et les options possibles sont [ici](https://minecraft.fandom.com/wiki/Difficulty).

### network-compression-threshold

Cette valeur définit la taille à partir de laquelle les données sont compressées entre client et serveur. Une petite valeur comme la valeur standard 256 signifie que les données sont échangées environ 20 fois par seconde. Une valeur de 512 est recommandée pour soulager la performance du serveur sans effets négatifs. La valeur ne doit **jamais dépasser** 1024.

**Ce paramètre est à manipuler avec précaution, car des valeurs incorrectes peuvent causer de gros problèmes aux joueurs et des dégâts irréparables au monde.**

### level-type

Détermine le type de monde que le générateur crée. Après modification, un **nouveau monde** doit être **créé**. Sinon, il y aura des coupures indésirables où de nouveaux chunks seront générés.

| Valeur | Signification |
|--|--|
| DEFAULT | Monde normal avec montagnes, vallées, villages, etc. |
| FLAT | Monde complètement plat avec uniquement des villages |
| LARGEBIOMES | Comme un monde normal, mais avec des biomes plus grands |
| AMPLIFIED | Comme un monde normal, mais très accidenté avec de grandes différences de hauteur |
| BUFFET | Monde buffet, où les paramètres sont définis via *generator-settings* |

### spawn-monsters

Détermine si des monstres doivent apparaître sur le serveur. La liste complète des monstres est [ici](https://minecraft.fandom.com/wiki/Mob).

### max-tick-time

Régule la durée maximale d’un tick. Différentes tâches du serveur sont assignées à un tick. Si un tick dure plus de 60 secondes par défaut, le serveur s’arrête automatiquement.

Pour les serveurs Forge, cela peut être gênant car les mods demandent souvent plus de temps. Dans ce cas, la valeur peut être mise à *-1* pour désactiver l’arrêt automatique.

### max-players

Définit le nombre de slots disponibles et le nombre maximum de joueurs sur le serveur.

### enforce-whitelist

Cette option fait que la whitelist accepte directement toutes les modifications. Normalement, la whitelist doit être rechargée avant d’être activée.

### online-mode

Détermine si les joueurs peuvent accéder au serveur sans compte premium. Sur un serveur public, cela peut poser problème car un joueur peut choisir le nom d’un opérateur et obtenir des droits non autorisés. Pour éviter ça, il est fortement conseillé d’installer un plugin de mot de passe sur un serveur compatible plugin comme Spigot.

### allow-flight

Active ou désactive l’AntiCheat intégré de Minecraft concernant le vol. Les hack clients permettent souvent aux joueurs de voler sans permission.

:::info
On recommande toujours d’installer un AntiCheat sous forme de plugin !
:::

### function-permission-level

Définit le niveau OP requis pour exécuter certaines commandes. Au niveau 4, par exemple, on peut arrêter le serveur ou kicker/ban des joueurs.

<InlineVoucher />