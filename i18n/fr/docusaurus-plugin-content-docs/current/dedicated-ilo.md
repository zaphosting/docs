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
Vous devez modifier les paramètres avec précaution, car une mauvaise manipulation peut causer de gros problèmes.

## Accès iLO
Ouvrez le tableau de bord de votre serveur dédié ZAP avec le navigateur de votre choix. Vous y trouverez déjà les informations les plus importantes concernant votre iLO.  
Pour activer l’iLO, cliquez simplement sur « Activer iLO ».  
![](https://screensaver01.zap-hosting.com/index.php/s/grj9PxttLKiZg6m/preview)

Notez qu’il peut falloir quelques secondes avant que votre iLO soit pleinement disponible.  
Une fois que le système a démarré l’interface de gestion et qu’elle est accessible, vous verrez les informations de connexion.  
Pour ouvrir l’iLO, cliquez sur l’adresse IP affichée et connectez-vous avec les identifiants fournis.

![](https://screensaver01.zap-hosting.com/index.php/s/MJeEW2LLrjxsAGN/preview)

Après un court instant, vous êtes connecté à l’interface d’administration de votre serveur dédié.  
Vous y trouverez plein d’infos importantes :

![](https://screensaver01.zap-hosting.com/index.php/s/BGWGXDRgS9A74dB/preview)

### Vue d’ensemble
* **État du système**  
Devrait généralement être vert. À chaque démarrage, le matériel de votre serveur s’auto-vérifie, et en cas de problème, le système le signale immédiatement.  
Les états possibles sont : vert (OK), jaune (Dégradé) et rouge (Critique). Il peut arriver que le serveur affiche votre SSD comme dégradé, ce qui n’est généralement pas un souci.  
Bien sûr, vous pouvez contacter le support, nous vérifierons si une action est nécessaire. Si le statut est rouge (« Critique »), le support doit être informé immédiatement.  
La première étape pour résoudre le problème est toujours un redémarrage complet du serveur.

* **État iLO**  
Affiche plus d’infos sur les paramètres iLO, il ne devrait pas y avoir de changements significatifs.  
Il n’est pas nécessaire de modifier quoi que ce soit dans cet onglet.

* **Alimentation du serveur**  
Indique le statut de votre serveur, par exemple « ON » signifie que votre serveur est allumé.

* **Console distante intégrée**  
Ici, vous pouvez visualiser votre serveur et y exécuter des commandes.  
Les consoles distantes diffèrent sur deux points :  
HTML5 se lance directement dans votre navigateur web, sans besoin de logiciel tiers.  
Java Web Start, comme son nom l’indique, utilise Java pour ouvrir la console de gestion.  
Les avertissements de sécurité qui apparaissent peuvent être ignorés sans souci.  
Pour savoir comment se connecter étape par étape à votre serveur via une console distante, consultez le guide détaillé.

* **Sessions actives**  
Vous voyez ici tous les utilisateurs actuellement connectés à l’iLO.

### Journal des événements iLO
Enregistre toutes les modifications faites via l’iLO, par exemple les connexions, démarrages/arrêts du serveur ainsi que les changements de paramètres.

### Journal de gestion intégré
Le journal de gestion intégré stocke toutes les infos matérielles importantes, comme les résultats du POST (Power on Self Test) effectué à chaque démarrage du serveur.  
S’il y a des problèmes matériels sur votre serveur dédié, ils seront affichés ici.

### Médias virtuels
L’intégration de vos propres médias de démarrage (ISOs) se fait via le sous-menu « Connect CD/DVD-ROM ».  
L’ordre de démarrage du serveur est configuré pour booter par défaut sur un ISO enregistré en premier.  
Cet ordre peut aussi être modifié dans le menu « Boot Order ».

![](https://screensaver01.zap-hosting.com/index.php/s/6ezDgt2dsCMwEam/preview)

Dans « Scripted Media URL », vous devez entrer le lien complet de l’ISO que vous souhaitez monter, par exemple : http://mon-domaine.com/bootimage.iso  
Votre lien doit pointer directement vers l’ISO, il doit donc se terminer par .iso.  
Cliquez ensuite sur « Insert Media » et redémarrez votre serveur dans « Power Management ».  
Le serveur chargera alors votre ISO insérée.

### Gestion de l’alimentation
Dans ce menu, vous pouvez tout faire concernant le démarrage et l’arrêt de votre serveur dédié ZAP.

![](https://screensaver01.zap-hosting.com/index.php/s/NHW8iafC3zjcsJG/preview)

* **Arrêt en douceur**  
Éteint votre serveur proprement, comme si vous appuyiez une fois sur le bouton d’alimentation de votre PC.  
Toutes les applications sont fermées correctement et le serveur s’arrête de manière planifiée.  
Cela peut prendre un peu de temps selon les applications.

* **Arrêt forcé**  
Si votre serveur doit être éteint immédiatement sans attendre, c’est l’option à choisir. C’est l’équivalent de débrancher la prise d’alimentation.  
Le système s’éteint immédiatement, sans délai.

* **Réinitialisation forcée**  
Provoque un redémarrage immédiat de votre système.

### Compteur de puissance
Affiche la consommation électrique moyenne de votre système, en gros plus la consommation est élevée, plus la charge sur votre système est importante.

### Réseau
Affiche la configuration réseau de votre iLO, notez que ces paramètres ne concernent pas la configuration réseau de votre serveur lui-même.

:::info
Pour configurer votre serveur ou si l’accès réseau ne fonctionne pas, vous pouvez toujours regarder directement sur votre serveur.
:::

## Consoles distantes (Affichage)
L’iLO vous propose par défaut deux types de consoles distantes :

![](https://screensaver01.zap-hosting.com/index.php/s/cozRqRt9KLTMCkd/preview)

### La console HTML5 {#the-html5-console}
D’un simple clic, vous êtes déjà sur votre serveur, sans besoin d’aucun logiciel tiers, elle se lance directement dans votre navigateur.  
Elle offre plein d’outils utiles :

![](https://screensaver01.zap-hosting.com/index.php/s/G8DjtHYnJosiQBy/preview)

* 1 - Paramètres de gestion d’alimentation (démarrer, arrêter, redémarrer) du serveur  
* 2 - Envoi de raccourcis clavier (exemple CTRL + ALT + DEL)  
* 3 - Inclusion d’ISOs > CD/DVD > Scripted Media URL  
* 4 - État du système  
* 5 - Statut d’alimentation du serveur (ON / OFF)

Si votre serveur a une interface graphique (GUI), vous pouvez utiliser votre souris normalement, les entrées clavier sont aussi transmises.

### La console Java
Pour utiliser la console Java, vous devez avoir Java installé. (Téléchargeable sur java.com)  
:::info
Les messages de sécurité qui apparaissent peuvent être ignorés.
:::

Après avoir ouvert le fichier, vous obtenez ce message, confirmez avec « Continuer ».  
![](https://screensaver01.zap-hosting.com/index.php/s/nByYm3X8DXNHXmP/preview)

Acceptez le risque et confirmez avec « Exécuter ».

![](https://screensaver01.zap-hosting.com/index.php/s/eWzpyXgQPWWz4J4/preview)

La console Java s’ouvre alors.  
:::info
L’application change souvent la disposition du clavier en « EN ».
:::

![](https://screensaver01.zap-hosting.com/index.php/s/kAp5rddEDjdLNwi/preview)

* 1 - Paramètres de gestion d’alimentation (démarrer, arrêter, redémarrer) du serveur  
* 2 - Inclusion d’ISOs > URL CD/DVD-ROM  
* 3 - Envoi de combinaisons de touches (ex. CTRL + ALT + DEL)  
* 4 - État du système  
* 5 - Statut d’alimentation du serveur (ON / OFF)

Si votre serveur a une interface graphique (GUI), vous pouvez utiliser votre souris normalement, les entrées clavier sont aussi transmises.

## Problèmes courants, astuces & conseils

* Le serveur reste bloqué au POST (Power on Self Test) et ne démarre plus.  
Connectez-vous à une console distante et vérifiez où le serveur bloque exactement. Y a-t-il des erreurs affichées ?  
Éteignez le serveur dans Gestion de l’alimentation pendant quelques secondes (Arrêt forcé) puis rallumez-le (Appui momentané).  
Si le serveur ne démarre toujours pas, contactez le support.

* L’ISO ne se charge pas.  
Vérifiez que le lien vers votre ISO est correct, le test le plus simple est de coller le lien dans votre navigateur : si un téléchargement démarre, tout est bon.  
Assurez-vous que le lien est bien entré dans Médias virtuels et que le serveur a été redémarré. Vérifiez aussi l’ordre de démarrage et que le lecteur CD/DVD est en tête.

* Mon serveur met longtemps à démarrer.  
Le matériel Enterprise utilisé met du temps à démarrer, c’est tout à fait normal. Cela peut prendre jusqu’à 10-15 minutes.

* Je ne peux plus ouvrir l’iLO  
Assurez-vous que l’iLO est activé dans votre tableau de bord serveur, pour des raisons de sécurité l’interface de gestion se ferme automatiquement au bout d’un certain temps.  
Vous pouvez bien sûr désactiver puis réactiver l’iLO. (Attendez au moins 5 minutes après activation)

## Conclusion

Ça devrait grandement faciliter votre administration une fois que vous aurez tout lu en détail. Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂
