---
id: account-backup-storage
title: "Backup Storage: Spara, Återställ och Ladda Ner Backuper"
description: "Upptäck hur du säkert lagrar och hanterar dina backuper med skalbara lagringsalternativ för enkel återställning och åtkomst → Lär dig mer nu"
sidebar_label: Backup Storage
---

## Introduktion

Backup Storage ger en central plats för att lagra backuper skapade från dina tjänster. Det låter dig säkert behålla backupfiler, återställa dem direkt till tjänster eller ladda ner dem för lokal lagring.

Varje konto inkluderar 10 GB gratis Backup Storage-utrymme. Om du behöver mer kapacitet kan lagringen utökas upp till 200 GB mot en extra kostnad.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZBy57k2pbTcteKg/preview)



## Backup Storage-funktionalitet

Backuper skapas direkt via webbgränssnittet för respektive tjänst. När en backup är genererad sparas den automatiskt i Backup Storage. Sparade backuper kan användas på två sätt:

- Återställas direkt till motsvarande tjänst via dess backupfunktion
- Laddas ner från Backup Storage för lokal användning



## Åtkomst till backupfiler

Backupfiler blir tillgängliga i Backup Storage direkt efter skapandet. Förutom att återställa backuper via tjänstens gränssnitt kan filer även nås via en FTP-anslutning.



## Ansluta till Backup Storage via FTP

För att komma åt Backup Storage via FTP, installera en FTP-klient som FileZilla för ditt operativsystem och öppna programmet efter installation. När det är öppnat visas FileZilla-gränssnittet:

![img](https://screensaver01.zap-hosting.com/index.php/s/4CrofjFEe7TxYCR/preview)

För att etablera en anslutning, fyll i FTP-inloggningsuppgifterna i fälten högst upp i FileZilla. De nödvändiga anslutningsuppgifterna hittar du i webbgränssnittet på sidan för Backup Storage. Öppna Backup Storage-sektionen och klicka på ikonen längst upp i menyraden.

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

På Backup Storage-sidan visas FTP-inloggningsuppgifterna i den markerade sektionen nedan. Fyll i följande information i FileZilla:

- **Server**: IP-adress
- **Användarnamn**: FTP-användarnamn
- **Lösenord**: FTP-lösenord

Porten behöver inte anges om den är satt till **21**. Klicka på **Anslut** för att etablera anslutningen. Efter en lyckad anslutning kommer backuperna skapade av dina tjänster att synas i respektive kataloger.

Fyll i IP-adressen i FileZilla i fältet **Server**, användarnamnet i fältet **Användarnamn** och lösenordet i fältet **Lösenord**. Du behöver inte ange porten om den är *21*. Klicka sedan på **Anslut**. 
Om anslutningen lyckas hittar du backuperna skapade av dina tjänster i respektive mappar.

![img](https://screensaver01.zap-hosting.com/index.php/s/9PAFpxWHiJx9LnT/preview)



## Backup-meddelanden och loggar

Sektionen **Meddelanden** i sidomenyn visar en logg över backuprelaterade åtgärder. Den visar vilka backup-händelser som utlösts, för vilken tjänst eller paket, och vid vilken tidpunkt.

![img](https://screensaver01.zap-hosting.com/index.php/s/nFfDMfQBNeE4Jt4/preview)
