---
id: subnautica-2-connect-to-server
title: "Subnautica 2: Anslut till server"
description: "Lär dig hur du ansluter till din Subnautica 2-server med rätt serveruppgifter och etablerar en smidig anslutning utan vanliga problem -> Lär dig mer nu"
sidebar_label: "Subnautica 2: Anslut till server"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Osäker på hur du ansluter till din **Subnautica 2**-server eller vilken information du behöver för att komma igång? Den här guiden visar hur du hämtar nödvändiga serveruppgifter, etablerar anslutningen och felsöker vanliga anslutningsproblem.

:::info Tidig Access-Information
Subnautica 2 kan fortfarande vara under aktiv utveckling beroende på aktuell releasefas. Därför kan multiplayerfunktioner, serverbläddrare och anslutningsflöden ändras över tid.
:::

<InlineVoucher />

## Hämta serveruppgifter

Du behöver all relevant information för att ansluta till din server. Du hittar uppgifterna för din server i kontrollpanelen för din gameserver på webbgränssnittet. Viktig information inkluderar följande:

- IP-adress och port
- Servernamn
- Serverlösenord

Med informationen ovan kan du identifiera din server och säkerställa att du ansluter till rätt server.

| Uppgift | Beskrivning |
| --- | --- |
| `IP-adress` | Den publika adressen till din Subnautica 2-server |
| `Port` | Spelporten som används för anslutningen |
| `Servernamn` | Namnet som visas i spelet om en serverlista eller sessionsbläddrare finns |
| `Serverlösenord` | Krävs endast om din server är lösenordsskyddad |

![img](https://screensaver01.zap-hosting.com/index.php/s/tSHRbW66eDXBxJn/preview)

## Etablera serveranslutning

Hur du exakt ansluter till en **Subnautica 2**-server beror på vilka multiplayeralternativ som finns i den spelversion du använder. Generellt behöver du serverns **IP-adress** och **Port**, och i vissa fall även **serverlösenordet**.

### Anslut via spelets multiplayermeny

Starta **Subnautica 2** och öppna multiplayer- eller serveranslutningssektionen från huvudmenyn. Om spelet har ett direktanslutningsalternativ, skriv in din servers `IP-adress` och `Port` exakt som de visas i ditt ZAP-Hosting webbgränssnitt. Om ett lösenord är konfigurerat, ange `serverlösenordet` när du blir ombedd.

Efter att du bekräftat uppgifterna bör spelet försöka etablera anslutningen till din server.

:::note Direktanslutningens Tillgänglighet
Exakt ordval i menyer och knappar kan variera beroende på aktuell spelversion. Om du inte ser något direktanslutningsalternativ, kontrollera om spelet kräver att du ansluter via en serverlista, inbjudningssystem eller sessionsbläddrare istället.
:::

### Anslut via serverlista eller sessionsbläddrare

Om **Subnautica 2** använder en inbyggd serverbläddrare istället för ett manuellt direktanslutningsfält, sök efter din server med det konfigurerade `servernamnet`. Därför är det viktigt att kontrollera servernamnet i ditt webbgränssnitt innan du försöker ansluta.

När du hittar rätt server i listan:

1. Välj servern
2. Kontrollera att det visade namnet stämmer överens med din server
3. Anslut till servern
4. Ange lösenordet om det efterfrågas

:::tip Använd Unika Servernamn
Om din server är svår att identifiera i en lista, ge den ett tydligt och unikt servernamn i serverkonfigurationen. Det gör det enklare att hitta rätt server och undvika att ansluta till fel server.
:::

### Om servern inte syns direkt

Om din server inte visas i spelets bläddrare betyder det inte alltid att servern är offline. Ibland tar det tid för serverlistor att uppdateras, eller så visar spelet bara servrar efter att de har initierats korrekt.

Du bör kontrollera följande:

- Servern är online i ZAP-Hosting webbgränssnitt
- Rätt spelport används
- Servern har startat helt
- Servernamnet är korrekt konfigurerat
- Lösenord anges om det krävs

![img](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vanliga problem och lösningar

Anslutningen till en gameserver kan ofta påverkas av flera faktorer. De vanligaste problemen och lösningarna beskrivs nedan.

### Servern syns inte

Att servern inte syns kan bero på att initieringen inte slutfördes korrekt. Det kan till exempel bero på felaktig konfiguration eller korrupta filer. Mer information finns ofta i serverkonsolen eller loggfilerna.

:::caution Servern Måste Vara Startad
Försök inte ansluta innan servern har slutfört sin startprocess. Om servern fortfarande laddar eller startar om kan spelare inte ansluta eller servern visas inte i någon lista.
:::

### Fel anslutningsuppgifter

Om du inte kan ansluta, kontrollera att du använder rätt `IP-adress`, `Port` och `serverlösenord`. Även ett litet skrivfel kan hindra en lyckad anslutning.

| Kontroll | Vad du ska verifiera |
| --- | --- |
| `IP-adress` | Stämmer överens med adressen i din serverpanel |
| `Port` | Stämmer överens med den tilldelade spelporten |
| `Lösenord` | Anges exakt som konfigurerat, inklusive stora och små bokstäver |
| `Servernamn` | Stämmer överens med det konfigurerade servernamnet om du söker i en bläddrare |

### Servern är online men anslutningen misslyckas

Om servern verkar vara online men du ändå inte kan ansluta, kontrollera serverkonsolen och loggarna i ditt webbgränssnitt. Fel där kan visa om servern inte laddade korrekt eller om en konfigurationsmiss hindrar spelare från att ansluta.

:::tip Kontrollera Loggar Först
Serverkonsolen och loggfiler är oftast det snabbaste sättet att ta reda på varför en anslutning misslyckas. De kan hjälpa dig att bekräfta om servern lyssnar korrekt och om anslutningsförsök når servern.
:::

### Saknas lösning eller inget hjälpsamt

Har du fortfarande problem efter felsökning? Vårt supportteam finns tillgängligt dagligen för att hjälpa dig. Skapa enkelt ett **[Ticket](https://zap-hosting.com/en/customer/support/)** på vår webbplats och beskriv ditt problem så detaljerat som möjligt. Inkludera din server-IP, port och en kort beskrivning av vad som händer när du försöker ansluta.

## Conclusion

Grattis, du har nu lyckats ansluta till din Subnautica 2-server. För fler frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂