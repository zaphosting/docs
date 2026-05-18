---
id: vserver-linux-openclaw
title: "VPS : Installer OpenClaw sur Linux - Crée ton assistant IA perso !"
description: "Découvre comment installer et configurer OpenClaw en auto-hébergement pour créer un assistant IA open-source puissant et personnel → En savoir plus maintenant"
sidebar_label: Installer OpenClaw
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

[OpenClaw](https://openclaw.ai/) est une plateforme d’automatisation et de contrôle pilotée par IA qui te permet d’interagir avec des logiciels via une interface web. Plutôt que de cliquer manuellement dans des menus, naviguer dans des interfaces ou répéter sans cesse les mêmes workflows, OpenClaw peut exécuter des tâches de façon programmée et offrir un contrôle à distance via son tableau de bord web.

![img](https://screensaver01.zap-hosting.com/index.php/s/XQkk46EnKzxxWrK/preview)

Ce qui rend OpenClaw vraiment révolutionnaire, c’est qu’il crée une couche de contrôle moderne pour les applications et systèmes. Plutôt que d’être lié à une session locale sur un bureau, OpenClaw peut tourner sur une machine distante comme un VPS et rester totalement gérable depuis n’importe où. C’est un outil puissant pour ceux qui veulent une automatisation fiable, un contrôle à distance et une gestion centralisée sans devoir garder un PC allumé localement.

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

<InlineVoucher />


## Cas d’usage d’OpenClaw

OpenClaw peut être utilisé dans plein de scénarios du quotidien et convient à tous ceux qui veulent automatiser des tâches, centraliser l’usage de l’IA, ou faire tourner un assistant persistant toujours dispo.

Un cas courant est de regrouper les interactions IA sur plusieurs plateformes. Plutôt que d’utiliser des outils séparés pour chaque appli de messagerie, OpenClaw peut faire office d’assistant unique avec un contexte et une config cohérents, peu importe d’où tu y accèdes.

OpenClaw est aussi top pour l’automatisation. Il aide à réduire le boulot manuel répétitif en gérant les tâches récurrentes, en organisant l’info, en résumant du contenu, et en fournissant des réponses structurées.

Un autre usage important est l’automatisation web. En contrôlant des sessions navigateur via des instances dédiées de Chrome ou Chromium, OpenClaw peut interagir avec des interfaces web même sans intégration API directe.

Pour supporter tout ça, OpenClaw offre plein de fonctionnalités : support multi-canaux (WhatsApp, Telegram, Slack, Discord), architecture basée sur une passerelle pour gérer sessions et canaux, options vocales, interface canvas interactive, plateforme de skills extensible, support de plusieurs fournisseurs IA (OpenAI, Anthropic…), nœuds pour actions mobiles, authentification par clé API, gestion persistante des espaces de travail et configurations.

![img](https://screensaver01.zap-hosting.com/index.php/s/7A5eiaMSE8FFQRs/download)


## Prérequis

Selon ton usage d’**OpenClaw**, la consommation de ressources peut vite grimper. Les setups basiques (par exemple juste l’interface web avec peu d’automatisation) tournent bien sur des VPS plus petits, mais les cas avancés comme plusieurs canaux, beaucoup de skills activés, ou l’automatisation navigateur demandent beaucoup plus de ressources.

Pour garantir une perf stable, on recommande un VPS avec assez de CPU et de RAM, surtout si OpenClaw tourne en continu en arrière-plan.

| Matériel  | Minimum      | Recommandation ZAP-Hosting |
| --------- | ------------ | -------------------------- |
| CPU       | 1 vCPU       | 8 vCPU                    |
| RAM       | 4 Go         | 16 Go                     |
| Espace disque | 25 Go     | 50 Go                     |




## Installation
L’installation commence par lancer le script officiel d’OpenClaw sur ton VPS Linux. Connecte-toi en SSH et exécute la commande suivante :

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Après avoir lancé la commande, un script d’installation interactif démarre automatiquement et te guide dans la configuration. Le script vérifie ton environnement, installe les dépendances manquantes, puis lance le processus d’onboarding OpenClaw.

![img](https://screensaver01.zap-hosting.com/index.php/s/DJcT4NrJ7ts8Gqn/download)



### Détection de la plateforme et vérification des dépendances

Le script détecte automatiquement ton système d’exploitation et installe les dépendances nécessaires si besoin.  
Par exemple, si Node.js manque, il sera installé automatiquement. Aucune action manuelle requise.



### Installation des paquets requis

OpenClaw installe les paquets nécessaires via le gestionnaire de paquets système. Pas besoin d’intervenir. Une fois tous les paquets installés, l’installation continue automatiquement.

### Installation d’OpenClaw

Quand les dépendances sont prêtes, le script télécharge et installe la version d’OpenClaw. Dès que c’est fini, tu devrais voir une confirmation comme celle-ci :

![img](https://screensaver01.zap-hosting.com/index.php/s/NwTqC997KQ23Htr/preview)



### Onboarding OpenClaw

Après l’installation, l’assistant d’onboarding démarre automatiquement. Cette étape est obligatoire pour finaliser la config initiale et rendre OpenClaw utilisable.



Commence par lire l’avertissement de sécurité affiché et confirme pour continuer. Ensuite, choisis le mode d’onboarding. Pour la plupart, **QuickStart** est l’option recommandée.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZQXSmmwQ29yk374/preview)

Puis, choisis ton modèle/fournisseur d’authentification. Ici, **OpenAI** est sélectionné. Entre ta clé API OpenAI. OpenClaw la stocke localement dans sa config pour les sessions futures. Une fois la clé sauvegardée, choisis le modèle par défaut à utiliser.

![img](https://screensaver01.zap-hosting.com/index.php/s/HQ5MNqCxdd5EY8Q/preview)

Dans les dernières étapes, tu peux configurer optionnellement des canaux (Telegram, Discord, Slack…), des skills, et des hooks. Si tu préfères, tu peux sauter ces étapes et les configurer plus tard.

![img](https://screensaver01.zap-hosting.com/index.php/s/xFnb3GNSiSZBPnD/preview)

Pour utiliser OpenClaw via Telegram, il faut d’abord créer un bot Telegram et récupérer son token API. Ça se fait directement dans Telegram avec le compte officiel **BotFather**.

Ouvre la conversation avec **BotFather**, lance la création avec `/newbot` et suis les instructions.  
BotFather te demandera un nom d’affichage, puis un nom d’utilisateur. Le nom d’utilisateur doit finir par `bot`.

La conversation ressemble à ça :

```
Utilisateur : /newbot 

BotFather : Ok, un nouveau bot. Comment veux-tu l’appeler ? Choisis un nom pour ton bot.  

Utilisateur : ZAP DOCS EXAMPLE

BotFather : Bien. Maintenant choisis un nom d’utilisateur pour ton bot. Il doit finir par `bot`. Par exemple : TetrisBot ou tetris_bot. 

Utilisateur : ZAP_DOCS_EXAMPLE_BOT 

BotFather : Fait ! Félicitations pour ton nouveau bot. Tu le trouveras sur t.me/ZAP_DOCS_EXAMPLE_BOT. Tu peux maintenant ajouter une description, une section à propos et une photo de profil, vois /help pour la liste des commandes. Quand tu auras fini de créer ton super bot, contacte notre support Bot si tu veux un meilleur nom d’utilisateur. Assure-toi que le bot fonctionne bien avant.

Utilise ce token pour accéder à l’API HTTP :
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Garde ton token secret et en lieu sûr, il permet à quiconque de contrôler ton bot.

Pour la doc de l’API Bot, consulte : https://core.telegram.org/bots/api
```

Quand BotFather confirme la création, copie le **token** affiché et garde-le précieusement. Tu en auras besoin plus tard pour connecter Telegram comme canal dans l’onboarding ou la config OpenClaw. Ce token donne le contrôle total du bot, ne le partage jamais publiquement.

![img](https://screensaver01.zap-hosting.com/index.php/s/JHTxW7Pi4SRsoe7/preview)

Après avoir créé le bot Telegram et sauvegardé le token, continue l’onboarding OpenClaw. Ensuite, tu peux installer des **skills** et activer des **hooks**. Ces options sont recommandées mais peuvent être sautées et configurées plus tard.

Une fois l’onboarding terminé, OpenClaw installe automatiquement le **service Gateway**. Enfin, choisis l’option **Web UI** pour que OpenClaw affiche le lien vers le tableau de bord. Ça te permet d’accéder à l’interface de contrôle OpenClaw et de gérer ta config via navigateur.

L’onboarding sera alors marqué comme terminé. À la fin, OpenClaw propose aussi d’installer le **script de complétion shell**. C’est optionnel mais conseillé, ça améliore l’usage en ligne de commande avec l’auto-complétion des commandes OpenClaw. Suis les instructions.

![img](https://screensaver01.zap-hosting.com/index.php/s/xWNpjYj2XeKgK4J/preview)





## Configuration

Nos VPS sont livrés sans interface graphique par défaut. Du coup, OpenClaw tourne en mode headless et expose son UI de contrôle uniquement localement sur le serveur, sur le port `18789`.

Une fois l’installation et l’onboarding terminés, OpenClaw affiche les infos du tableau de bord dans la console :

```
Lien du tableau de bord (avec token) :
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Copie/colle cette URL dans un navigateur sur cette machine pour contrôler OpenClaw.
Pas d’interface graphique détectée. Ouvre depuis ton PC :
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111

Puis ouvre :
http://localhost:18789/
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Comme l’interface web est liée à `127.0.0.1`, elle n’est pas accessible directement depuis Internet. Pour y accéder en toute sécurité depuis ton PC, crée un tunnel SSH qui redirige le port OpenClaw du VPS vers ta machine locale.

Sur ton PC, ouvre un terminal et lance :

```bash
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111
```

Tant que cette session SSH est ouverte, tu peux accéder à l’UI OpenClaw dans ton navigateur avec :

```
http://localhost:18789/
```

Si OpenClaw demande une authentification, ouvre le lien avec token affiché dans la sortie OpenClaw :

```
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```



:::tip Utiliser une interface graphique (environnement de bureau)

Si tu préfères utiliser OpenClaw avec une interface graphique, tu peux installer un environnement de bureau sur ton VPS, par exemple **XFCE**. Après avoir installé une GUI (et une solution de bureau à distance comme RDP ou VNC), tu pourras accéder et contrôler OpenClaw directement depuis le bureau du VPS au lieu de passer par un tunnel SSH.

:::



![img](https://screensaver01.zap-hosting.com/index.php/s/FscTYx36eWeHHca/download)



### Installer des skills

Les skills ajoutent des fonctionnalités et intégrations à OpenClaw.  
OpenClaw propose plus de 50 skills. Tu peux les installer directement dans le tableau de bord en ouvrant la section **Skills** et en sélectionnant ceux que tu veux activer.

![img](https://screensaver01.zap-hosting.com/index.php/s/gXxs6j9WHtxPYAQ/preview)



### Activer les hooks

Les hooks permettent à OpenClaw d’exécuter automatiquement des actions quand certains événements surviennent ou quand des commandes spécifiques sont utilisées.  
C’est pratique pour automatiser des tâches récurrentes, sauvegarder du contexte, ou déclencher des workflows sans intervention manuelle.

![img](https://screensaver01.zap-hosting.com/index.php/s/KYSWM4cFcDp45F6/preview)



### Configurer les canaux

Les canaux te permettent d’utiliser OpenClaw via des plateformes de messagerie.  
Dans le tableau de bord, tu peux configurer et connecter les canaux supportés comme Telegram, Discord, Slack, etc.

![img](https://screensaver01.zap-hosting.com/index.php/s/Le38gZXf2BDintr/preview)

Selon la plateforme choisie, tu devras fournir des tokens ou identifiants supplémentaires (comme expliqué dans l’installation pour le token du bot Telegram créé via BotFather). 



Une fois un canal connecté avec succès, OpenClaw peut recevoir et répondre aux messages via cette plateforme. Une conversation avec l’assistant IA via Telegram pourrait ressembler à ça :

![img](https://screensaver01.zap-hosting.com/index.php/s/oFRZCEPFyyMmsG4/preview)



## Sécurité

OpenClaw est un outil puissant et doit toujours être utilisé avec les bonnes précautions de sécurité. Le tableau de bord Gateway est protégé par un token, qui fonctionne comme un mot de passe et donne accès à ton instance OpenClaw. Ne partage jamais ce token publiquement (captures d’écran, tickets, logs de chat…), car quiconque le possède peut contrôler ton tableau de bord.

On recommande de garder OpenClaw derrière un pare-feu et d’éviter d’exposer directement l’interface Gateway sur Internet. Par défaut, OpenClaw lie le service Gateway à `127.0.0.1`, ce qui bloque l’accès externe et est l’option la plus sûre pour la plupart des usages. Pour accéder au tableau de bord à distance, utilise un tunnel SSH et limite l’accès aux utilisateurs de confiance.



## Conclusion et ressources supplémentaires

Bravo ! Tu as maintenant installé et configuré OpenClaw sur ton VPS avec succès. On te conseille aussi de jeter un œil aux ressources suivantes, qui peuvent t’aider et te guider dans ta configuration serveur :

- [openclaw.ai](https://https://openclaw.ai/) - Site officiel  
- [docs.openclaw.ai](https://docs.openclaw.ai/start/getting-started) - Documentation OpenClaw  
- [clawhub.com](https://clawhub.com/) - ClawHub - Skills créés par la communauté  

Tu as des questions spécifiques non couvertes ici ? Pour toute demande ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />