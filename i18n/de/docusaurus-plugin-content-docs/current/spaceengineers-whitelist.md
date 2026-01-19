---
id: spaceengineers-whitelist
title: "Space Engineers: Whitelist"
description: Informationen darüber, wie du deinen Space Engineers Server bei ZAP-Hosting auf die Whitelist setzt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine Whitelist ist eine Zugangsliste, die einschränkt, wer auf deinen Server joinen darf. Space Engineers nutzt häufig eine Steam-Gruppen-Whitelist, bei der nur Mitglieder einer bestimmten Steam-Gruppe connecten können.

<InlineVoucher />

## Whitelist aktivieren

Erstelle eine Steam-Gruppe für deinen Server und füge die Spieler hinzu, die du erlauben möchtest. Verbinde dich dann per FTP mit deinem Server und öffne die Datei `SpaceEngineers-Dedicated.cfg`.

Stelle sicher, dass der Server auf den privaten Modus eingestellt ist und setze die Gruppen-ID am Ende der Konfiguration.

```xml
<ServerType>PRIVATE</ServerType>
<GroupID>XXXXXXXXXXXXXXXXXX</GroupID>
```

Ersetze die Gruppen-ID durch deine eigene Steam-Gruppen-ID. Speichere die Datei und starte den Server neu.

## Verwaltung der Whitelist-Spieler

Um jemanden zur Whitelist hinzuzufügen, lade ihn in die Steam-Gruppe ein und stelle sicher, dass er beigetreten ist. Sobald er Mitglied der Gruppe ist, kann er sich verbinden.

Um jemanden zu entfernen, entferne ihn aus der Steam-Gruppe. Sobald er kein Mitglied mehr ist, kann er sich nicht mehr verbinden. Wenn du die Whitelist auf eine andere Gruppe umstellen möchtest, ändere den Wert von `<GroupID>` und starte den Server neu.

## Whitelist-Funktion überprüfen

Nach dem Neustart versuche, dich mit einem Steam-Account zu verbinden, der nicht in der Steam-Gruppe ist. Der Server sollte die Verbindung ablehnen. Versuche es danach mit einem Gruppenmitglied.

Wenn der Zugang noch offen ist, überprüfe, ob der Server im privaten Modus läuft und der `<GroupID>`-Eintrag in der aktiven `SpaceEngineers-Dedicated.cfg` vorhanden ist.

## Fazit

Wenn alle Schritte korrekt befolgt wurden, ist deine Whitelist jetzt aktiv und du kannst genau steuern, wer auf den Server darf. Falls der Zugang trotzdem nicht wie erwartet funktioniert, starte den Server einmal neu und überprüfe die Datei oder die Konsolenausgabe, um sicherzugehen, dass die Änderung übernommen wurde.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne! 🙂

<InlineVoucher />