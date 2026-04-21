---
id: dedicated-ilo
title: "Serveur dédié : iLO"
description: "Découvrez comment gérer entièrement votre serveur dédié Enterprise avec iLO pour un contrôle et une surveillance sans accroc → En savoir plus maintenant"
sidebar_label: iLO
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Sur nos serveurs dédiés Enterprise, nous utilisons l’interface de gestion iLO, qui permet une gestion complète et sans restriction de votre serveur.  
Ses fonctionnalités incluent le démarrage/arrêt/redémarrage du serveur, la console de gestion via Java ou HTML5, le montage de médias de démarrage (ISOs).  
Modifiez les paramètres avec précaution, car une mauvaise manipulation peut causer de gros soucis.

## Accès iLO
Ouvre le tableau de bord de ton serveur dédié ZAP avec le navigateur de ton choix. Tu y trouveras déjà les infos les plus importantes sur ton iLO.  
Pour activer l’iLO, clique simplement sur "Activer iLO".  
![](https://screensaver01.zap-hosting.com/index.php/s/grj9PxttLKiZg6m/preview)

Note que ça peut prendre quelques secondes avant que ton iLO soit complètement dispo.  
Quand le système a démarré l’interface de gestion et qu’elle est accessible, tu verras les infos de connexion.  
Pour ouvrir l’iLO, clique sur l’adresse IP affichée et connecte-toi avec les identifiants.

![](https://screensaver01.zap-hosting.com/index.php/s/MJeEW2LLrjxsAGN/preview)

Après un court instant, tu es connecté à l’interface d’administration de ton serveur dédié.  
Tu y trouveras plein d’infos importantes :

![](https://screensaver01.zap-hosting.com/index.php/s/BGWGXDRgS9A74dB/preview)

### Vue d’ensemble
* **Santé du système**  
Doit généralement être verte. À chaque démarrage, le hardware de ton serveur s’auto-vérifie, et en cas de problème, le système le signale immédiatement.  
Les états possibles sont : vert (OK), jaune (Dégradé) et rouge (Critique). Il peut arriver que le serveur affiche ton SSD comme dégradé, ce n’est généralement pas un souci.  
Tu peux bien sûr contacter le support, on vérifiera si une action est nécessaire. Si le statut est rouge ("Critique"), contacte le support immédiatement.  
La première étape pour résoudre le problème est toujours un redémarrage complet du serveur.

* **Santé iLO**  
Affiche plus d’infos sur les paramètres iLO, il ne devrait pas y avoir de changements significatifs.  
Pas besoin de modifier quoi que ce soit dans cet onglet.

* **Alimentation du serveur**  
Montre le statut de ton serveur, par exemple "ON" signifie que ton serveur est allumé.

* **Console distante intégrée**  
Ici, tu peux visualiser ton serveur et exécuter des commandes.  
Les consoles distantes diffèrent sur deux points :  
HTML5 se lance directement dans ton navigateur, sans besoin de logiciel tiers.  
Java Web Start, comme son nom l’indique, utilise Java pour ouvrir la console de gestion.  
Tu peux ignorer en toute sécurité les avertissements de sécurité qui apparaissent.  
Pour un guide pas à pas sur la connexion à ton serveur via console distante, consulte les instructions détaillées.

* **Sessions actives**  
Tu peux voir tous les utilisateurs connectés à l’iLO en ce moment.

### Journal des événements iLO
Enregistre toutes les modifications faites via l’iLO, par exemple les connexions, démarrages/arrêts du serveur ainsi que les changements de paramètres.

### Journal de gestion intégré
Le journal de gestion intégré stocke toutes les infos hardware importantes, comme les résultats du POST (Power On Self Test) effectué à chaque démarrage.  
Si ton serveur dédié a un problème matériel, il sera affiché ici.

### Médias virtuels
L’intégration de médias de démarrage perso (ISOs) se fait via le sous-menu "Connect CD/DVD-ROM".  
L’ordre de démarrage du serveur est configuré pour booter par défaut sur un ISO enregistré en premier.  
Tu peux aussi modifier l’ordre dans le menu "Boot Order".

![](https://screensaver01.zap-hosting.com/index.php/s/6ezDgt2dsCMwEam/preview)

Dans "Scripted Media URL", entre le lien complet de l’ISO que tu veux monter, par exemple : http://mondomaine.com/bootimage.iso  
Ton lien doit pointer directement vers l’ISO, il doit donc finir par .iso.  
Clique ensuite sur "Insert Media" et redémarre ton serveur dans "Power Management".  
Le serveur chargera alors ton ISO inséré.

### Gestion de l’alimentation
Dans ce menu, tu peux tout faire concernant le démarrage & l’arrêt de ton serveur dédié ZAP.

![](https://screensaver01.zap-hosting.com/index.php/s/NHW8iafC3zjcsJG/preview)

* **Arrêt en douceur**  
Éteint ton serveur proprement, comme si tu appuyais une fois sur le bouton power de ton PC.  
Toutes les applis se ferment correctement et le serveur s’arrête de manière planifiée.  
Cela peut prendre un peu de temps selon les applis.

* **Arrêt forcé**  
Si tu dois couper ton serveur immédiatement sans attendre, c’est l’option à choisir. C’est comme débrancher la prise.  
Le système s’éteint instantanément, sans délai.

* **Réinitialisation forcée**  
Provoque un redémarrage immédiat du système.

### Compteur de puissance
Affiche la consommation moyenne d’énergie de ton système, plus la consommation est élevée, plus la charge est importante.

### Réseau
Affiche la configuration réseau de ton iLO, note que ces réglages ne concernent pas la configuration réseau de ton serveur lui-même.

:::info
Pour configurer ton serveur ou si l’accès réseau ne fonctionne pas, tu peux toujours regarder directement sur ton serveur.
:::

## Consoles distantes (Affichage)
L’iLO te propose par défaut deux types de consoles distantes :

![](https://screensaver01.zap-hosting.com/index.php/s/cozRqRt9KLTMCkd/preview)

### La console HTML5 {#the-html5-console}
D’un simple clic, tu es déjà sur ton serveur, pas besoin de logiciel tiers, elle se lance directement dans ton navigateur.  
Elle offre plein d’outils utiles :

![](https://screensaver01.zap-hosting.com/index.php/s/G8DjtHYnJosiQBy/preview)

* 1 - paramètres de gestion d’alimentation (démarrer, arrêter, redémarrer) du serveur  
* 2 - envoi de raccourcis clavier (exemple CTRL + ALT + DEL)  
* 3 - inclusion d’ISOs > CD/DVD > URL média scripté  
* 4 - santé du système  
* 5 - statut d’alimentation du serveur (ON / OFF)  

Si ton serveur a une interface graphique (GUI), tu peux utiliser ta souris normalement, les entrées clavier sont aussi transmises.

### La console Java
Pour utiliser la console Java, tu dois avoir Java installé. (Téléchargeable sur java.com)  
:::info
Tu peux ignorer les messages de sécurité qui apparaissent.
:::

Après avoir ouvert le fichier, tu obtiens ce message, confirme avec "Continuer".  
![](https://screensaver01.zap-hosting.com/index.php/s/nByYm3X8DXNHXmP/preview)

Accepte le risque et confirme avec "Exécuter".  

![](https://screensaver01.zap-hosting.com/index.php/s/eWzpyXgQPWWz4J4/preview)

La console Java s’ouvre alors.  
:::info
L’application change souvent la disposition du clavier en "EN".
:::

![](https://screensaver01.zap-hosting.com/index.php/s/kAp5rddEDjdLNwi/preview)

* 1 - paramètres de gestion d’alimentation (démarrer, arrêter, redémarrer) du serveur  
* 2 - inclusion d’ISOs > URL CD/DVD-ROM  
* 3 - envoi de combinaisons de touches (ex. CTRL + ALT + DEL)  
* 4 - santé du système  
* 5 - statut d’alimentation du serveur (ON / OFF)  

Si ton serveur a une interface graphique (GUI), tu peux utiliser ta souris normalement, les entrées clavier sont aussi transmises.

## Problèmes courants, astuces & conseils

* Le serveur reste bloqué au POST (Power On Self Test) et ne démarre plus.  
Connecte-toi à une console distante et vérifie où le serveur bloque exactement. Y a-t-il des erreurs affichées ?  
Éteins le serveur dans Power Management pendant quelques secondes (Arrêt forcé) puis redémarre-le (Appui momentané).  
Si ton serveur ne démarre toujours pas, contacte le support.

* L’ISO ne se charge pas.  
Vérifie que le lien vers ton ISO est correct, le test le plus simple est de coller le lien dans ton navigateur, si un téléchargement démarre, c’est bon.  
Assure-toi que le lien est bien entré dans Médias virtuels et que le serveur a été redémarré. Regarde aussi l’ordre de démarrage et vérifie que le lecteur CD/DVD est en premier.

* Mon serveur met longtemps à démarrer.  
Le hardware Enterprise utilisé met du temps à booter, c’est normal. Ça peut prendre jusqu’à 10-15 minutes.

* Je ne peux plus ouvrir l’iLO  
Vérifie que l’iLO est activé dans ton tableau de bord serveur, pour des raisons de sécurité l’interface de gestion se coupe automatiquement après un certain temps.  
Tu peux bien sûr désactiver puis réactiver l’iLO. (Attends au moins 5 minutes après activation)

## Conclusion

Ça devrait grandement faciliter ton administration une fois que tu as tout lu en détail. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂