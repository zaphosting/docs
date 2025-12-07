---
id: barotrauma-becomeadmin
title: "Barotrauma: Bli admin på din egen server"
description: "Upptäck hur du ger administratörsrättigheter för full kontroll över din server och smidig hantering direkt i spelet → Läs mer nu"
sidebar_label: Bli admin
services:
  - gameserver-barotrauma
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och komplett administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver följa för att ge administratörsrättigheter på din server beskrivs nedan.  
<InlineVoucher />

## Konfiguration
Att lägga till en admin görs via **Clientpermissions.xml**-konfigurationen, som du hittar i gränssnittet under Konfigurationer.

![](https://screensaver01.zap-hosting.com/index.php/s/oJNTozXz9YW8sjG/preview)


En ny klientpost måste läggas till i konfigurationen för att lägga till en ny spelare. Syntaxen ser ut så här:

```xml
<Client
    name="<spelarens namn>"
    steamid="<steamid>"
    permissions="<behörighet(er)>">
    <command
      name="<kommandonamn>" />
  </Client>
```



Klientposten innehåller variablerna **Name, SteamID, Permissions och Command**. Dessa måste ändras. Namnet kan sättas som du vill, det är bara en platsmarkör för översikten. Därefter måste SteamID64 för ditt Steam-konto anges.

Du hittar det genom att gå till din Steam-profil och högerklicka var som helst på profilen. Där kan du kopiera Steam-profilens URL.



![](https://screensaver01.zap-hosting.com/index.php/s/C3nfdjemxkjZH5n/preview)



Sedan klistrar du in URL:en på någon av följande sajter:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/asnbFc4JDifdSHn/preview)



Då får du fram allmän kontoinformation samt Steam ID. Här behöver du **Steam ID 64**. Steam ID:t ska sedan läggas in i klientposten under **SteamID**. Resultatet ser ut så här: 

```xml
<Client
    name="Namn"
    steamid="123456789"
    permissions="<behörighet(er)>">
    <command
      name="<kommandonamn>" />
  </Client>
```



Nu är du redan admin, men inga specifika rättigheter har lagts till ditt konto än. Du kan lägga till dem genom att ange behörigheter och kommandon som ska kunna användas. Det kan göras exempelvis så här:

```xml
...
    permissions="<behörighet(er)>"> ---> permissions="ServerLog, ConsoleCommands">
...
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ClientPermissions> 
<Client
    name="Namn"
    steamid="123456789"
    permissions="ServerLog, ConsoleCommands">
    <command
      name="heal" />
    <command
      name="spawn" />
  </Client>
</ClientPermissions>
```



I det här exemplet har admin fått tillgång till serverloggar, konsol, heal- och spawn-kommandon. Nedan hittar du en översikt över de behörigheter du kan ställa in.



## Behörigheter

| Behörigheter     | Beskrivning                                                  |
| ---------------- | ------------------------------------------------------------ |
| ManageRound      | Kan starta/avsluta rundor.                                   |
| Kick             | Kan sparka andra spelare.                                    |
| Ban              | Kan banna andra spelare.                                     |
| Unban            | Kan ta bort ban från andra spelare.                         |
| SelectSub        | Kan välja ubåt.                                              |
| SelectMode       | Kan välja spelläge.                                          |
| ManageCampaign   | Kan välja destination, uppdrag och köpa förnödenheter i Campaign-butiken. |
| ConsoleCommands  | Kan använda konsolkommandon – tänk på att du även måste ge behörighet för enskilda konsolkommandon. |
| ServerLog        | Kan läsa serverloggar.                                       |
| ManageSettings   | Kan ändra serverinställningar.                              |
| ManagePermissions| Kan ändra behörigheter för andra klienter.                   |
| KarmaImmunity    | Är immun mot karma-systemets negativa effekter, tappar inte karma. |
| All              | Ger alla behörigheter.                                      |



## Slutsats

Grattis, du har nu konfigurerat administratörsrättigheterna! Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />