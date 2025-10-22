---
id: domain-teamspeak-redirect
title: "Domaine : Configurer la redirection TeamSpeak 3"
description: "Découvrez comment simplifier la connexion à votre serveur TeamSpeak 3 en utilisant des domaines ou sous-domaines personnalisés pour un accès facile → En savoir plus maintenant"
sidebar_label: Redirection TeamSpeak 3
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Notez qu'il peut toujours falloir jusqu'à 24 heures avant que les modifications des entrées DNS ne soient actives !
:::

## Introduction

Vous pouvez soit rediriger l’intégralité de votre domaine, soit seulement un sous-domaine vers votre serveur TeamSpeak 3.  
Ainsi, personne n’a besoin de retenir l’adresse IP compliquée composée de chiffres et peut simplement se connecter à votre serveur TeamSpeak 3 via le domaine.

:::note
Par défaut, les **nouveaux** serveurs TeamSpeak 3 recevront désormais un alias `.zap.cloud` avec un préfixe aléatoire qui peut être utilisé pour se connecter.
:::

## Utilisation de la configuration rapide TSDNS

Nous avons mis en place un nouveau système TSDNS pour nos serveurs TeamSpeak 3, qui vous permet de configurer un sous-domaine pour votre serveur TeamSpeak 3 en quelques clics ! Si vous n’avez pas de domaine chez nous, passez à la section suivante pour configurer manuellement les enregistrements DNS.

Commencez simplement par vous rendre dans la section **Paramètres->TSDNS** sur l’interface web de votre TeamSpeak sur notre site. Là, vous pourrez choisir un sous-domaine (préfixe avant le domaine) ainsi que soit notre domaine `zap-ts3.com`, soit l’un de vos propres domaines que vous avez chez nous sur votre compte ZAP-Hosting.

:::info
Pour cette fonction de configuration rapide, vous devez [acheter un domaine parfait directement chez nous](https://zap-hosting.com/en/shop/product/domain/) ou transférer votre propre domaine sur votre compte ZAP-Hosting. Ces domaines apparaîtront dans la section TSDNS une fois configurés. Sinon, vous pouvez utiliser gratuitement le domaine classique `zap-ts3.com`.
:::

Dans notre exemple, vous pouvez voir que nous créons un nouveau sous-domaine utilisant le domaine `.zap.cloud`, qui nous mènera à notre serveur TeamSpeak 3 lorsqu’il est utilisé.

![](https://github.com/zaphosting/docs/assets/42719082/5b311ff1-625c-4f6d-82b8-6847d432beb9)

:::note
Notez qu’il peut falloir jusqu’à 3 heures pour que le domaine se propage et commence à fonctionner.
:::

## Configuration DNS classique

Pour rediriger l’adresse IP, créez soit un sous-domaine qui redirige vers l’adresse IP du serveur TeamSpeak 3, soit redirigez l’intégralité du domaine sans sous-domaine.  
Cela suffit si le serveur TeamSpeak 3 utilise le port par défaut **9987**.  
Cependant, si le serveur TeamSpeak 3 utilise un port différent du port par défaut, un **enregistrement SRV** supplémentaire sera nécessaire pour rediriger le domaine ou sous-domaine vers le bon port.

### Service SRV

Le nom du service commence toujours par un **underscore**.  
Pour un serveur TeamSpeak 3, le nom du service est toujours **_ts3**, sans exception.

### Protocole SRV

Le protocole spécifie le protocole Internet utilisé pour la connexion. Ici, **UDP** et **TCP** sont disponibles.  
La spécification du protocole commence aussi toujours par un **underscore** et est soit **_udp** soit **_tcp**.  
Pour un serveur TeamSpeak 3, **_udp** est toujours utilisé, sans exception.

## Redirection du domaine sans sous-domaine

Pour rediriger votre domaine vers un serveur de jeux sans créer de sous-domaine, ouvrez d’abord votre domaine dans  
le tableau de bord, puis ouvrez la gestion DNS depuis le menu à gauche.

![](https://puu.sh/Fuzfa/0927cbb177.png)

![](https://puu.sh/FuzhO/6f4694ab62.png)

Vous verrez alors toutes les entrées DNS existantes pour votre domaine.  
Si vous n’avez pas encore créé vos propres entrées, vous pouvez afficher toutes les entrées existantes en cliquant  
sur la poubelle rouge à droite.

![](https://puu.sh/Fuzm8/39f3c72fa6.png)

Cliquez ensuite sur **Nouvelle entrée** et vous serez dirigé vers la création d’un nouvel enregistrement DNS.  
Comme **Nom**, choisissez ici le nom du domaine, par exemple **teamspeak-server.de**, le **type est A** et la **valeur** est l’adresse IP de votre serveur TeamSpeak 3, ici **88.214.57.116**.  
Vous pouvez laisser le champ **TTL** tel quel.

![](https://screensaver01.zap-hosting.com/index.php/s/cTGTdBFrigs7HDG/preview)

Une fois tout renseigné, cliquez sur **Enregistrer**, l’entrée sera sauvegardée dans les paramètres DNS et sera visible sous  
24 heures.

:::info
Il peut toujours falloir jusqu’à 24 heures avant que les nouvelles entrées DNS deviennent actives. Malheureusement, personne n’a d’influence là-dessus.
:::

## Redirection du domaine avec sous-domaine

Si vous souhaitez créer un sous-domaine, par exemple ts.teamspeak-server.de, procédez comme dans l’exemple précédent,  
mais pour le **Nom**, ne saisissez pas le nom du domaine, mais le sous-domaine.  
Cela donne ceci :

![](https://screensaver01.zap-hosting.com/index.php/s/ocaqgX2DSdspGQ8/preview)

## Redirection du domaine avec port (SRV)

Si le port standard **9987** n’est pas utilisé, un **enregistrement SRV** supplémentaire doit être créé pour rediriger non seulement le domaine vers l’IP du serveur de jeux, mais aussi vers le port correct.

D’abord, créez soit un **sous-domaine** comme décrit ci-dessus, soit redirigez le domaine directement vers le serveur TeamSpeak 3, les deux sont possibles.

### Redirection sans sous-domaine

Après avoir redirigé votre domaine vers l’adresse IP de votre serveur TeamSpeak 3 comme décrit ci-dessus, cliquez sur **Nouvelle entrée**  
et créez une entrée qui ressemble à ceci :

![](https://screensaver01.zap-hosting.com/index.php/s/H3NGmYZHyJsCYnf/preview)

Le champ **Nom** contient le nom du service, ici notre serveur TeamSpeak 3, donc **_ts3**. Il contient aussi le type de protocole, ici **_udp**, ainsi que le **nom de domaine**.  
Le champ **Type** indique le type d’entrée, ici un enregistrement **SRV**.  
Le champ **Valeur** contient le port du jeu et le domaine, ici **0 1234 teamspeak-server.de**, où **1234** est le **port du jeu** et **teamspeak-server.de** est le domaine vers lequel la redirection est faite.  
La valeur **0** n’a plus d’importance et reste toujours la même. Les champs **TTL** et **Prio** ne sont pas affectés.

Ensuite, cliquez sur **Enregistrer**.

:::info
Il est important qu’un **point** soit placé à la fin du domaine dans le champ **valeur** !
:::

### Redirection avec sous-domaine

Avec un sous-domaine, c’est presque pareil. D’abord, créez un sous-domaine comme décrit ci-dessus et redirigez-le vers l’adresse IP de votre serveur TeamSpeak 3. Puis cliquez sur **Nouvelle entrée** et créez une entrée avec le contenu suivant :

![](https://screensaver01.zap-hosting.com/index.php/s/aEkro3z9WBgWf8g/preview)

Le champ **Nom** contient le nom du service, ici notre serveur TeamSpeak 3, donc **_ts3**. Il contient aussi le type de protocole, ici **_udp**, ainsi que le **nom de domaine** avec le **sous-domaine**, ici **ts.teamspeak-server.de**.  
Le champ **Type** indique le type d’entrée, ici un enregistrement **SRV**.  
Le champ **Valeur** contient le port et le domaine avec sous-domaine, ici **0 1234 ts.teamspeak-server.de**, où **1234** est le **port du serveur TeamSpeak 3** et **ts.teamspeak-server.de** est le domaine avec sous-domaine vers lequel la redirection est faite.  
La valeur **0** n’a plus d’importance et reste toujours la même. Les champs **TTL** et **Prio** ne sont pas affectés.

<InlineVoucher />