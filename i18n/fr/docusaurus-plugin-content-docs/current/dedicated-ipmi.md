---
id: dedicated-ipmi
title: "Serveur dédié : Gestion du serveur via IPMI"
description: "Découvrez comment gérer entièrement votre serveur dédié Enterprise avec IPMI pour un contrôle et une surveillance sans faille → En savoir plus maintenant"
sidebar_label: IPMI
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Nos serveurs dédiés AMD Ryzen sont gérés via **Supermicro IPMI**, une solution de gestion hors bande puissante et éprouvée, conçue pour les environnements serveurs professionnels. Contrairement à nos configurations basées sur Intel, qui utilisent HPE iLO, la plateforme AMD Ryzen utilise du matériel Supermicro et propose donc IPMI comme interface de gestion native.

Supermicro IPMI offre un contrôle total à distance sur votre serveur, indépendamment de l’état du système d’exploitation. Vous pouvez allumer ou éteindre le système, le redémarrer, surveiller la santé du matériel, accéder aux capteurs et utiliser la console distante pour travailler directement sur le serveur comme si vous étiez sur place. Cela garantit un contrôle maximal, des temps de réaction rapides et une administration fiable même dans les situations critiques.


## Accès IPMI
Ouvrez le tableau de bord de votre serveur dédié ZAP avec le navigateur de votre choix. Vous y trouverez déjà les informations les plus importantes concernant votre IPMI.
Pour activer l’IPMI, cliquez simplement sur **Activer IPMI**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dXjjzc65gCDsDdx/preview)

Notez qu’il peut falloir quelques secondes avant que votre IPMI soit pleinement disponible. 
Lorsque le système a démarré l’interface de gestion et qu’elle est accessible, vous verrez les informations de connexion.
Pour ouvrir l’IPMI, cliquez sur l’adresse IP affichée et utilisez les identifiants pour vous connecter.



## Aperçu

Curieux de savoir comment l’interface de gestion IPMI est structurée et à quoi sert chaque section ? Cet aperçu présente les différentes pages de l’interface et met en lumière la façon dont la surveillance, les informations matérielles et la gestion à distance sont organisées.

Il offre un point de départ guidé pour explorer l’environnement IPMI et comprendre comment les différentes vues fonctionnent ensemble pour offrir un contrôle total et une visibilité complète sur le serveur.

### Tableau de bord

Fournit une vue consolidée de l’état actuel du serveur et des fonctions clés de gestion. Les informations système telles que le modèle matériel, la version du BIOS, le firmware BMC et le statut opérationnel sont affichées pour une référence rapide.

La section alimentation montre l’état actuel de l’alimentation et les mesures de consommation électrique, permettant un contrôle direct des actions d’allumage, d’extinction et de redémarrage tout en offrant un aperçu de la consommation énergétique.

L’accès direct à la console distante est disponible depuis cette page, permettant un contrôle complet du clavier, de la vidéo et de la souris à distance pour des tâches telles que l’installation du système d’exploitation, le dépannage et la maintenance, indépendamment de l’état de fonctionnement du serveur.

![img](https://screensaver01.zap-hosting.com/index.php/s/MK8wE2HBmKSkafM/preview)

### Système

#### Infos Composants

Affiche un aperçu détaillé des composants matériels installés et de leur état actuel. Les informations concernent le CPU, les modules mémoire, les alimentations, la distribution électrique, le réseau AOC, les capteurs et les composants de refroidissement.

Chaque section présente des détails spécifiques au matériel tels que les informations sur le modèle, la configuration et l’état opérationnel. Les indicateurs de statut permettent d’identifier rapidement les composants en bon état ainsi que les avertissements ou défaillances.

![img](https://screensaver01.zap-hosting.com/index.php/s/SwNfo9DkCsLSZ7n/preview)

#### Journal des événements de santé

Liste les événements liés au système enregistrés par le contrôleur de gestion, fournissant un historique chronologique des activités matérielles et de santé. Les entrées incluent les événements d’alimentation, les processus de démarrage, les violations de seuils des capteurs, les avertissements de température, les irrégularités de tension et les erreurs matérielles.

![img](https://screensaver01.zap-hosting.com/index.php/s/GfKiZZRno6AY3Se/preview)

#### Surveillance du stockage

Fournit un aperçu des périphériques de stockage connectés et de leur état opérationnel actuel. Les informations incluent les disques détectés, le type d’interface, la capacité et les indicateurs de santé rapportés par le contrôleur et les capteurs disponibles.

![img](https://screensaver01.zap-hosting.com/index.php/s/wr5JCqGj7bmqizs/preview)



### Configuration

#### Services de compte

Affiche la liste des comptes utilisateurs existants avec leurs rôles et niveaux de permission assignés. La page est destinée à des fins d’information, permettant de voir quels comptes ont accès à l’interface de gestion. 

![img](https://screensaver01.zap-hosting.com/index.php/s/zic5k7yftMjBFD7/preview)

#### Notifications

Affiche la configuration actuelle des notifications système et de la gestion des alertes. Cette section montre quels types d’événements peuvent déclencher des notifications, comme les défaillances matérielles, les seuils de température, les problèmes d’alimentation ou les avertissements des capteurs.

![img](https://screensaver01.zap-hosting.com/index.php/s/X46mcTArtEda3ef/preview)

#### Réseau

Montre la configuration réseau de l’interface de gestion. Cela inclut l’adresse IP assignée, le masque de sous-réseau, la passerelle, l’adresse MAC et le statut actuel du lien du port réseau IPMI.

![img](https://screensaver01.zap-hosting.com/index.php/s/jHfKc9fxJXEzNJs/preview)

#### Média virtuel

Permet l’utilisation d’images médias distantes via l’interface de gestion. Cela montre le statut des médias virtuels montés tels que les images ISO ou les périphériques de stockage distants connectés au serveur.

Les médias virtuels peuvent être utilisés pour démarrer le système, installer un système d’exploitation ou effectuer des tâches de récupération et de maintenance sans accès physique au matériel.

![img](https://screensaver01.zap-hosting.com/index.php/s/bXYMP8xne8CyRLW/preview)

#### Paramètres BMC

Affiche les détails de configuration du contrôleur de gestion de la carte mère (Baseboard Management Controller). Cette section fournit des informations sur la version du firmware, les données d’identification du système et le comportement général du contrôleur.

![img](https://screensaver01.zap-hosting.com/index.php/s/9FcXmeyfiSQWJwx/preview)

### Contrôle à distance

Donne accès aux fonctions utilisées pour l’interaction directe à distance avec le serveur. Cette section inclut les options de contrôle d’alimentation telles que allumer, éteindre, réinitialiser et arrêt en douceur.

Elle sert également de point d’entrée aux fonctionnalités de gestion à distance qui permettent d’interagir avec le système indépendamment de l’état du système d’exploitation.

![img](https://screensaver01.zap-hosting.com/index.php/s/JWKfcCkAQSMHxFq/preview)


### Maintenance

#### Gestion du firmware

Offre un aperçu du niveau de firmware de l’environnement de gestion, incluant le firmware BMC actif et les composants associés. Les versions de firmware et leur état actuel peuvent être consultés pour confirmer la cohérence de la pile de gestion. Les actions de mise à jour ou de modification ne sont pas disponibles pour les clients.

![img](https://screensaver01.zap-hosting.com/index.php/s/DA2HJAK8twGqYYK/preview)



#### Journal des événements de maintenance

Enregistre les activités liées à la maintenance et les actions au niveau système effectuées via l’interface de gestion. Les entrées enregistrées incluent les changements de configuration, les opérations liées au firmware, les réinitialisations et les actions administratives.

![img](https://screensaver01.zap-hosting.com/index.php/s/FqC3EdagiiS5zAG/preview)



## Problèmes courants, astuces & conseils

- **Le serveur ne démarre pas ou reste bloqué pendant le POST :**
   Si le serveur ne termine pas le processus de démarrage ou semble bloqué pendant le POST, ouvrez la console distante pour identifier l’étape exacte où le processus s’arrête. Des messages d’initialisation du matériel ou des erreurs peuvent y être visibles.
   Effectuez un cycle d’alimentation en utilisant les options de contrôle d’alimentation en forçant une extinction pendant quelques secondes puis en redémarrant le serveur. Si le système ne démarre toujours pas, contactez le support.

- **La console distante ne s’ouvre pas ou reste noire :**
   Assurez-vous que la session de console distante n’est pas déjà utilisée par une autre connexion. Fermez toutes les sessions existantes et réessayez.
   Parfois, rafraîchir le navigateur ou rouvrir la console résout les problèmes de chargement. Si le problème persiste, vérifiez que le serveur est allumé et accessible.

- **Le média virtuel ISO n’est pas détecté :**
   Vérifiez que la source ISO est accessible et que le fichier peut être ouvert directement, par exemple en ouvrant le lien dans un navigateur.
   Confirmez que le média virtuel est correctement monté et redémarrez le serveur après avoir attaché l’ISO. Vérifiez également l’ordre de démarrage pour vous assurer que le média CD/DVD virtuel est prioritaire.

- **Le serveur met longtemps à démarrer :**
   Les temps de démarrage longs sont normaux pour du matériel de qualité entreprise. L’initialisation du matériel, les contrôles du contrôleur et l’entraînement de la mémoire peuvent prendre plusieurs minutes, surtout après un cycle complet d’alimentation.

- **L’interface IPMI est temporairement inaccessible :**
   Après des changements de configuration ou une longue période d’inactivité, l’interface de gestion peut être temporairement indisponible. Patientez quelques minutes et réessayez.
   Si l’accès ne revient pas, contactez le support pour vérifier le statut de l’interface de gestion.



## Conclusion

Cela devrait grandement faciliter votre administration une fois que vous aurez tout lu en détail. Pour toute question ou assistance supplémentaire, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂