---
id: arma3-serverconfig
title: "Arma 3: Serverconfiguratiebestand bewerken"
description: "Ontdek hoe je jouw Arma 3-serverinstellingen aanpast voor optimale gameplay en performance → Leer het nu"
sidebar_label: Server.cfg
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Server.cfg parameters en configuratie

De Server.cfg van Arma 3 is essentieel voor het draaien van elke Arma 3-server en biedt allerlei mogelijkheden om je Arma 3-server helemaal naar wens in te stellen.

De Server.cfg bewerk je direct via FTP op een vooraf geïnstalleerde game server of VPS.  
Bij een game server vind je ook in het menu aan de linkerkant in de game server interface de optie Configs, waar je met een paar klikken de Server.cfg kunt aanpassen.

<InlineVoucher />

## Server.cfg bewerken via de ZAP editor

Om de server.cfg van je Arma 3-server in de ZAP editor te bewerken, klik je eerst op je server in de interface en selecteer je vervolgens "Configs" in het menu aan de linkerkant onder "Instellingen".

![](https://puu.sh/Fo5i6/183ee65ef3.png)

Daar zie je een lijst met configuratiebestanden die beschikbaar zijn voor Arma 3, wij bewerken nu alleen de Server.cfg.  
Met een klik op de blauwe knop "Bestand openen" kom je in de ZAP editor.

![](https://puu.sh/Fk7Ez/b0f32d8c61.png)

Hier kun je je Arma 3-server helemaal naar wens instellen, zoals de servernaam en het aantal slots. Pas de instellingen aan zoals jij wilt en klik daarna op "Opslaan".

![](https://puu.sh/Fk7I1/407a039e38.png)

Let bij het opgeven van de servernaam op dat je de naam tussen aanhalingstekens zet, anders kan de server het niet lezen. Ook is het belangrijk dat elke regel eindigt met een puntkomma (;), anders kan de server de volgende instellingen niet lezen. Een uitzondering is de optie "motd[]", daar moet elke regel eindigen met een komma, behalve de laatste regel, waar je de komma juist weglaat.

## Goed:

Hier zijn aanhalingstekens, puntkomma’s en komma’s correct geplaatst.

![](https://puu.sh/Fk7Mq/e2542b12f7.png)

## Fout:

Hier ontbreken aanhalingstekens, puntkomma’s en komma’s, zo zou de server niet starten.

![](https://puu.sh/Fk7NK/f96a31199d.png)

## Server.cfg bewerken via FTP

In plaats van de ZAP editor kun je de Server.cfg ook direct via FTP bewerken. In dit voorbeeld gebruiken we **FileZilla** om een FTP-verbinding te maken met je game server en de mappen van je game server te openen.

Hier leer je hoe je verbinding maakt met je game server via FTP: [Toegang via FTP](gameserver-ftpaccess.md).

## Verbinding maken en navigeren naar het pad van de server.cfg

:::info
Zorg dat je game server gestopt is terwijl je via FTP aanpassingen maakt.
:::

Nadat je via FTP verbonden bent met je game server zoals hierboven uitgelegd, navigeer je in FileZilla in het rechterondervenster naar de map van je server.cfg, die je vindt onder: **/g198376/arma3/config**

![](https://puu.sh/Fo5eC/4d222f5a99.png)

:::info
De naam van de eerste map (g198376) is de ID van jouw server, zo kun je makkelijk mappen uit elkaar houden als je meerdere game servers hebt.
:::

![](https://puu.sh/Fo4Tw/06f7a53914.png)

In deze map vind je de Server.cfg van je Arma 3-server en andere configuratiebestanden.  
Klik met de **rechtermuisknop** op de server.cfg en kies **Bekijken/Bewerken**.

![](https://puu.sh/Fo5fM/f3519a8936.png)

Er opent nu een standaard editor waarin je je Server.cfg kunt aanpassen zoals hierboven beschreven.  
Na het bewerken sla je het bestand op met **CTRL+S**. Sluit daarna de editor, je server is nu klaar om weer te starten.

<InlineVoucher />