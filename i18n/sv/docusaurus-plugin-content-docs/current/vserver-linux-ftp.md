---
id: vserver-linux-ftp
title: "VPS: FTP-tjänst otillgänglig (GS/TS3-gränssnitt)"
description: "Lär dig hur du felsöker och återställer FTP-åtkomst på din VPS när spel- eller Teamspeak-servrar är otillgängliga → Läs mer nu"
sidebar_label: FTP-tjänst otillgänglig
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Gameserver- och Teamspeak 3-tjänster som skapas via GS/TS3-gränssnittet är fullt hanterade tjänster. FTP-åtkomst tillhandahålls via gränssnittet och den underliggande infrastrukturen. Om FTP-åtkomst inte är möjlig är orsaken oftast kopplad till tjänstens status, intern konfiguration eller problem på infrastrukturnivå snarare än lokala FTP-klientinställningar.



:::warning FTP-tjänst som tillhandahålls av GS/TS3-gränssnittet
Denna guide gäller endast FTP-tjänsten som automatiskt installeras och hanteras när GS/TS3-gränssnittets funktion används. Om GS/TS3-gränssnittet inte är installerat, sätts ingen FTP-server upp som standard på systemet. I det fallet är FTP-åtkomst inte tillgänglig om inte en FTP-tjänst installeras manuellt.
:::

<InlineVoucher />



## Kontrollera ProFTPD-status via SSH

Anslut till servern via SSH eller konsolen och kontrollera aktuell status för FTP-tjänsten med följande kommando:

```
service proftpd status
```

Utdata visar om ProFTPD-tjänsten för närvarande körs. Om tjänsten rapporteras som aktiv eller running är FTP-tjänsten tillgänglig och bör acceptera inkommande anslutningar. I det här fallet är problemet oftast inte FTP-daemonen i sig utan kan vara kopplat till åtkomstuppgifter, brandväggsregler eller klientkonfigurationen.

Om status visas som inactive, dead eller stopped körs inte FTP-tjänsten. Med tjänsten stoppad kan inga FTP-anslutningar upprättas.

## Starta om FTP-tjänsten

Om ProFTPD-tjänsten inte körs kan den startas manuellt. Kör följande kommando:

```
service proftpd restart
```

Efter att tjänsten startats eller startats om bör status alltid kontrolleras igen för att bekräfta att ProFTPD körs korrekt. Om tjänsten visas som aktiv efter omstart bör FTP-åtkomst vara tillgänglig igen.



## Vanliga orsaker till FTP-problem

FTP-åtkomstproblem orsakas ofta av att FTP-tjänsten inte körs eller har stoppats under en systemomstart eller uppdatering. Konfigurationsfel kan också hindra ProFTPD från att starta framgångsrikt. I vissa fall kan en annan tjänst redan använda port 21, vilket förhindrar FTP-tjänsten från att binda till den nödvändiga porten. Tillfälliga system- eller tjänstenivåproblem kan också leda till att FTP-tjänsten oväntat stannar.

Om ProFTPD inte kan startas eller stannar direkt efter att ha startats krävs vidare undersökning. I sådana fall rekommenderas att granska systemloggar eller kontakta support.



## Slutsats



FTP-åtkomst för GS/TS3 gameserver-tjänster hanteras exklusivt via GS/TS3-gränssnittet. Om standardkontroller inte löser problemet krävs eskalering till support. Att lämna komplett och korrekt information hjälper till att snabba på lösningen. Vid fler frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂



<InlineVoucher />