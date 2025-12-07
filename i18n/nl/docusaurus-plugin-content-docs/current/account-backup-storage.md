---
id: account-backup-storage
title: Backupopslag
description: "Ontdek hoe je je backups veilig opslaat en beheert met schaalbare opslagopties voor makkelijke herstel en toegang → Leer nu meer"
sidebar_label: Backupopslag
---

## Wat is backupopslag?
Backupopslag biedt onze klanten de mogelijkheid om backups te maken via hun services. Elke klant heeft gratis 10GB ruimte op zijn backupopslag, die volledig gebruikt kan worden. Voor een kleine meerprijs kan de opslag uitgebreid worden tot 200GB.

## Hoe krijg ik toegang tot mijn backupbestanden?
Backupbestanden worden op de backupopslag geplaatst zodra er een backup wordt gemaakt via de webinterface. De bestanden kunnen daarna ofwel hersteld worden naar de betreffende service via de backupfunctie van die service, of gedownload worden van de backupopslag via een FTP-verbinding.

### Verbinden met de backupopslag via FTP
Om verbinding te maken met de Backupopslag via FTP, download en installeer je het programma [FileZilla](http://www.filezilla.de/download.htm) voor jouw besturingssysteem. Als de installatie klaar is, open je het programma.
Je ziet nu de FileZilla interface:

![2022-04-08_04-41](https://screensaver01.zap-hosting.com/index.php/s/XHa7gfPBKcGgYj4/preview)

Om verbinding te maken met je backupopslag, vul je de verbindingsgegevens in de tekstvelden bovenin in.
Je vindt deze gegevens op de pagina van je backupopslag in de webinterface.
Klik op dit icoon bovenaan de menubalk:

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

Op de Backupopslag-pagina vind je vervolgens je toeganggegevens voor de FTP-verbinding in het vak dat op de afbeelding gemarkeerd is:

![2022-04-08_04-39](https://screensaver01.zap-hosting.com/index.php/s/pziwNeT9jmFC5Ax/preview)

Vul het IP-adres in FileZilla in bij het veld **Server**, de gebruikersnaam bij **Gebruikersnaam** en het wachtwoord bij **Wachtwoord**. Je hoeft de poort niet in te vullen als deze gelijk is aan *21*. Klik nu op **Verbinden**.
Als de verbinding succesvol is, vind je de backups die door je services zijn gemaakt in de respectievelijke mappen.

![2022-04-08_04-41_1](https://screensaver01.zap-hosting.com/index.php/s/K9MZHf8napDMCjT/preview)

![2022-04-08_04-41_2](https://screensaver01.zap-hosting.com/index.php/s/ca7DkJ2T6DpxTFH/preview)

De backups zijn verpakt als **\*.tar.gz** bestanden in de respectievelijke mappen en kunnen uitgepakt worden met programma’s zoals WinRAR of 7-Zip.

## Foutmelding "Transfer connection interrupted"

Als tijdens de verbinding of overdracht de foutmelding "Transfer connection interrupted: ECCONABORTED - Connection aborted" verschijnt, kan de overdrachtmodus gewijzigd worden van "**Passief**" naar "**Actief**".
De volgende stappen laten zien hoe je dit kunt aanpassen in de FileZilla-instellingen.

Klik in je FileZilla-client op "**Bewerken**" en open direct "**Instellingen...**":

![2022-04-08_05-16](https://screensaver01.zap-hosting.com/index.php/s/AgrmP6i5aAEr2kr/preview)

Er opent nu een "**Instellingen**" venster. Klik daar op "**FTP**" om de FTP-instellingen te zien.
Bij "**FTP**" staat de standaard overdrachtmodus op "**Passief**", hier kun je de optie "**Actief**" selecteren en de wijziging bevestigen met "**OK**".

![2022-04-08_05-17](https://screensaver01.zap-hosting.com/index.php/s/REPQieY3Zbm8arM/preview)

Als dit gedaan is, kun je de FTP-verbinding opnieuw testen.

## Berichten
In de sidebar onder het submenu *Berichten* wordt het logboek weergegeven, waarin je kunt zien welke actie bij welke trigger/reden is uitgevoerd tijdens de backups voor welk pakket en wanneer.

![2022-04-08_04-42](https://screensaver01.zap-hosting.com/index.php/s/GwtGHoDL7d9r3Ds/preview)