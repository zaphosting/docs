---
id: scp-newroles
title: "SCP Secret Laboratory: Server Nieuwe rollen toevoegen"
description: "Leer hoe je serverrollen maakt en aanpast met specifieke permissies voor effectieve remote admin beheer → Ontdek het nu"
sidebar_label: Nieuwe rollen toevoegen
services:
  - gameserver-scp 
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Bekijk de Config
Nieuwe rollen worden toegevoegd in het bestand "config_remoteadmin.txt".  
Je vindt dit configbestand door in de interface van je server op "Configs" te klikken.

![](https://screensaver01.zap-hosting.com/index.php/s/7JEE5gLDyF29mZR/preview)

Hier kun je vervolgens zoeken naar de bovenstaande Config en dan rechts op het "oog" icoon klikken om het te openen.

## Bestaande rollen kopiëren
Als je de Config open hebt, kun je hierin zoeken naar deze entries:

![](https://screensaver01.zap-hosting.com/index.php/s/tDBFmR5g44gxpp5/preview)

Dit zijn voorbeeldrollen die al zijn toegevoegd.  
We voegen een nieuwe entry onderaan toe.  
Hiervoor kopiëren we het blok van één van de bovenstaande rollen en plakken dit onder de laatste rol.  
In ons voorbeeld kopieerden we de rol "Moderator" en plakten deze eronder:

![](https://screensaver01.zap-hosting.com/index.php/s/ELHDZCDcT6WDydJ/preview)

## Eigen rol toevoegen
We kunnen nu het zojuist geplakte blok van de bestaande rol aanpassen en onze eigen gewenste waarden invullen.  
In ons voorbeeld gebruikten we de naam "ZAP":

![](https://screensaver01.zap-hosting.com/index.php/s/6gtEmbeBjP5A8zy/preview)

Als dit gedaan is, moeten we de rol nog toevoegen aan de lijst met beschikbare rollen.  
Dit staat iets verder naar beneden in dezelfde Config.

![](https://screensaver01.zap-hosting.com/index.php/s/qNNKnwYaYSjy2XK/preview)

We voegen onze rol dus toe onder de rol "moderator".  
:::info
LET OP: Let goed op de spaties vóór en na het "-" teken!
:::

## Permissies
Onderaan in het "config_remoteadmin.txt" configbestand kunnen we de permissies voor de respectievelijke rollen aanpassen.  
Wil je een permissie toewijzen aan jouw rol, dan vul je de naam van de rol in de haakjes in.  
Zoals in dit voorbeeld:

![](https://screensaver01.zap-hosting.com/index.php/s/kRSiKjYyWsK2RD3/preview)


<InlineVoucher />