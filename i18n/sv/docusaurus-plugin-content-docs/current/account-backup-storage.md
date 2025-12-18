---
id: account-backup-storage
title: Backup-lagring
description: "Upptäck hur du säkert lagrar och hanterar dina backups med skalbara lagringsalternativ för enkel återställning och åtkomst → Lär dig mer nu"
sidebar_label: Backup-lagring
---

## Vad är backup-lagring?
Backup-lagring ger våra kunder möjlighet att skapa backups via sina tjänster. Varje kund har 10 GB gratis utrymme på sin backup-lagring som kan användas fullt ut. För en liten extra kostnad kan lagringen utökas upp till 200 GB.

## Hur får jag åtkomst till mina backup-filer?
Backup-filer placeras på backup-lagringen så fort en backup skapas via webbgränssnittet. Filerna kan sedan antingen återställas till respektive tjänst med hjälp av backup-funktionen i den tjänsten eller laddas ner från backup-lagringen via FTP-anslutning.

### Anslut till backup-lagringen via FTP
För att ansluta till Backup-lagringen via FTP, ladda ner och installera programmet [FileZilla](http://www.filezilla.de/download.htm) för ditt operativsystem. När installationen är klar, öppna programmet.
Du bör nu se FileZilla-gränssnittet:

![2022-04-08_04-41](https://screensaver01.zap-hosting.com/index.php/s/XHa7gfPBKcGgYj4/preview)

För att ansluta till din backup-lagring, fyll i anslutningsuppgifterna i textfälten ovan.
Du hittar uppgifterna när du går till sidan för din backup-lagring i webbgränssnittet.
Klicka på den här ikonen högst upp i menyraden:

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

På Backup-lagringssidan hittar du sedan dina inloggningsuppgifter för FTP-anslutningen i rutan som är markerad på bilden:

![2022-04-08_04-39](https://screensaver01.zap-hosting.com/index.php/s/pziwNeT9jmFC5Ax/preview)

Fyll i IP-adressen i FileZilla i fältet **Server**, användarnamnet i fältet **Användarnamn** och lösenordet i fältet **Lösenord**. Du behöver inte ange porten om den är *21*. Klicka nu på **Anslut**.
Om anslutningen lyckas hittar du de backups som skapats av dina tjänster i respektive mappar.

![2022-04-08_04-41_1](https://screensaver01.zap-hosting.com/index.php/s/K9MZHf8napDMCjT/preview)

![2022-04-08_04-41_2](https://screensaver01.zap-hosting.com/index.php/s/ca7DkJ2T6DpxTFH/preview)

Backuperna är paketerade som **\*.tar.gz**-filer i respektive mappar och kan packas upp med program som WinRAR eller 7-Zip.

## Felmeddelandet "Transfer connection interrupted"

Om felmeddelandet "Transfer connection interrupted: ECCONABORTED - Connection aborted" dyker upp under anslutning eller överföring kan överföringsläget ändras från "**Passivt**" till "**Aktivt**".
Följande steg visar hur du ändrar detta i FileZillas inställningar.

Klicka på "**Redigera**" i din FileZilla-klient och öppna sedan "**Inställningar...**":

![2022-04-08_05-16](https://screensaver01.zap-hosting.com/index.php/s/AgrmP6i5aAEr2kr/preview)

Då öppnas fönstret "**Inställningar**". Där klickar du på "**FTP**" för att se inställningarna för FTP-anslutningen.
Under "**FTP**" är standardöverföringsläget satt till "**Passivt**", där kan du välja radioknappen "**Aktivt**" och bekräfta ändringen med "**OK**".

![2022-04-08_05-17](https://screensaver01.zap-hosting.com/index.php/s/REPQieY3Zbm8arM/preview)

När detta är gjort kan FTP-anslutningen testas igen.

## Meddelanden
I sidomenyn under underpunkten *Meddelanden* visas loggen som visar vilken trigger/orsak som utförde vilken åtgärd under backuperna för vilken paket och när.

![2022-04-08_04-42](https://screensaver01.zap-hosting.com/index.php/s/GwtGHoDL7d9r3Ds/preview)