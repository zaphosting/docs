---
id: voiceserver-configuration
title: "Serveur vocal : Configuration"
description: "Découvrez comment personnaliser les réglages de votre serveur Teamspeak pour une expérience sur-mesure et une gestion optimisée des utilisateurs → En savoir plus maintenant"
sidebar_label: Configuration du serveur
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le serveur Teamspeak peut être configuré individuellement. Dans ce qui suit, on vous explique comment configurer votre serveur. On vous montre comment personnaliser les réglages généraux comme le nom du serveur, l’icône, la bannière, les permissions utilisateurs, ainsi que les permissions des groupes de canaux et de serveurs.

<InlineVoucher />

## Général

**Interface web**

Si vous souhaitez faire la configuration générale de votre serveur via l’interface web, vous trouverez les options dans l’administration du serveur Teamspeak sous Paramètres. La page des réglages ressemble à ça :  

![](https://screensaver01.zap-hosting.com/index.php/s/fLYXn5sx38BBC92/preview)


**Client Teamspeak**

Si vous préférez configurer votre serveur directement via le client Teamspeak, faites un clic droit sur le canal principal **TeamSpeak ]I[ Server** puis cliquez sur **Modifier le serveur virtuel**.

![](https://screensaver01.zap-hosting.com/index.php/s/epQ2qzRiex9BmpE/preview)



Comme les réglages dans l’interface web doivent être les plus clairs possible et que tout ne peut pas y être ajusté, ce guide se concentre sur la configuration du serveur Teamspeak via le client Teamspeak. 



### Nom

Dans le champ **Nom du serveur**, vous pouvez définir le nom de votre serveur Teamspeak. Ce nom sera affiché dans la liste des serveurs, sur le site web et partout ailleurs. 



### Bannière

Si vous avez réservé l’option bannière personnalisée, vous pouvez ajouter votre propre bannière dans le champ **URL de la bannière Gfx**. Il est important de fournir le lien direct vers l’image, sinon elle ne sera pas reconnue. Dans le champ **URL**, vous pouvez définir où la bannière doit rediriger lorsqu’on clique dessus. 

:::info
Si aucune bannière personnalisée n’a été réservée, la bannière sera automatiquement remplacée par la bannière ZAP par défaut. 
:::



### Slots (slots réservés)

Les slots sont définis par nous et ne peuvent pas être modifiés. Cependant, vous pouvez définir des slots réservés. Cela signifie qu’ils sont réservés au cas où le serveur Teamspeak serait plein. Les utilisateurs avec les permissions appropriées peuvent alors toujours se connecter au serveur Teamspeak.



### Message de bienvenue

Vous pouvez ajouter un message de bienvenue personnalisé. Ce message s’affichera à la connexion. Par exemple, ça peut ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/AWFcf4HHJ7jesdc/preview)


### Niveau de sécurité

Le niveau de sécurité requis détermine combien de temps les utilisateurs doivent augmenter le niveau de sécurité de leur identité avant que celle-ci soit considérée comme suffisamment sécurisée. En gros, ça réduit le potentiel de spam et d’abus. Plus le niveau de sécurité est élevé, plus ça prend du temps. Voici un aperçu des durées :

- Niveau 0-23 - généré en quelques secondes
- Niveau 23-29 - généré en quelques minutes
- Niveau 29-34 - généré en quelques heures
- Niveau 35-39 - généré en quelques jours
- Niveau 40-43 - généré en quelques mois
- Niveau 44+ - généré en quelques années



### Gestion des utilisateurs (kick, ban, liste de bans, liste de plaintes)

Vous pouvez kicker ou bannir un utilisateur en faisant un clic droit dessus. En cas de ban, l’identité et l’adresse IP sont enregistrées dans la liste de bans. Vous trouverez cette liste dans la **barre de navigation -> extras**. Vous pouvez y supprimer des bans existants.

Vous y trouverez aussi la liste de plaintes. C’est une fonctionnalité de Teamspeak qui permet aux utilisateurs de se plaindre d’autres utilisateurs, du serveur lui-même, etc., si aucun admin n’est présent sur le serveur Teamspeak. 



## Personnaliser

Vous pouvez créer plus de canaux et de groupes de serveurs sur votre serveur Teamspeak pour le personnaliser davantage. Voici comment faire exactement.


### Canal

Pour créer plus de canaux, faites un **clic droit** en dessous des canaux existants puis cliquez sur **Créer un canal**. Une fenêtre popup s’ouvrira. Vous pourrez configurer le canal avec les options suivantes : Nom du canal, mot de passe, icône, description, type de canal, et plus encore. 



![](https://screensaver01.zap-hosting.com/index.php/s/Bkx2q69a5ceNiyD/preview)


### Groupes de serveurs

Pour créer des groupes de serveurs supplémentaires, cliquez sur **permissions** dans la **barre de navigation** puis allez dans **groupes de serveurs**. Vous y trouverez un aperçu des groupes existants, leurs permissions et les utilisateurs assignés. Dans la liste des groupes, cliquez sur le **symbole Plus** en bas pour créer un nouveau groupe. 



![](https://screensaver01.zap-hosting.com/index.php/s/QqcaaRse6kLNwPQ/preview)


## Permissions

Maintenant que vous savez comment ajuster les réglages généraux du serveur Teamspeak et personnaliser votre serveur en créant des canaux et groupes supplémentaires, on va voir comment modifier les permissions.



### Permissions : Utilisateur

Les permissions des utilisateurs dépendent des groupes de serveurs assignés. Par défaut, un utilisateur reçoit le groupe **Normal**. Si vous voulez ajouter plus de permissions à un utilisateur, faites un clic droit sur lui, cliquez sur Groupes de serveurs puis assignez le groupe souhaité. 

![](https://screensaver01.zap-hosting.com/index.php/s/sXG3qFXXJXc6Kjr/preview)

### Permissions : Canal

Les permissions peuvent être définies pour chaque canal. Par exemple, vous pouvez définir quels utilisateurs peuvent **entrer, s’abonner, décrire, voir, modifier, supprimer** le canal et **accéder au navigateur de fichiers du canal**. 


![](https://screensaver01.zap-hosting.com/index.php/s/9sCRd7NgMNHy9Do/preview)



La valeur de chaque champ dépend du groupe de serveurs. Par exemple, si vous créez un groupe supplémentaire nommé **Membre** et que seuls ceux-ci doivent avoir accès au canal, la valeur doit correspondre à celle du groupe. Si le groupe a une valeur de permission de 50, alors le **50** doit être mis dans les champs individuels.



### Permissions : Groupes de serveurs

Pour les permissions des groupes de serveurs, plusieurs catégories peuvent être personnalisées. Cela inclut :

- Options générales
- Gestion des groupes
- Ajouter, retirer des utilisateurs, gérer les clés de permission
- Gestion des utilisateurs (déplacer, kicker, bannir)
- Gestion des canaux
- Bases


![](https://screensaver01.zap-hosting.com/index.php/s/RxcYJCsar7C3KnM/preview)



Vous pouvez modifier ces permissions comme vous voulez. Pour des changements plus poussés, allez dans les options de votre client Teamspeak, puis dans Application et activez le **Système avancé de permissions**.


<InlineVoucher />