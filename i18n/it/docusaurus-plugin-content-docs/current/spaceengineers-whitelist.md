---
id: spaceengineers-whitelist
title: "Space Engineers: Whitelist"
description: Information about how to whitelist your Space Engineers server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Eine Whitelist ist eine Zugriffsliste, die einschränkt, wer auf deinen Server joinen darf. Bei Space Engineers wird oft eine Steam-Gruppen-Whitelist genutzt, bei der nur Mitglieder einer bestimmten Steam-Gruppe connecten können.

<InlineVoucher />

## Whitelist aktivieren

Erstelle eine Steam-Gruppe für deinen Server und füge die Spieler hinzu, die du erlauben möchtest. Verbinde dich dann per FTP mit deinem Server und öffne die Datei `SpaceEngineers-Dedicated.cfg`.

Stelle sicher, dass der Server auf den privaten Modus eingestellt ist und setze die Gruppen-ID am Ende der Konfiguration.

```xml
<ServerType>PRIVATE</ServerType>
<GroupID>XXXXXXXXXXXXXXXXXX</GroupID>
```

Ersetze die Gruppen-ID durch deine eigene Steam-Gruppen-ID. Speichere die Datei und starte den Server neu.

## Whitelist-Spieler verwalten

Um jemanden zur Whitelist hinzuzufügen, lade ihn in die Steam-Gruppe ein und stelle sicher, dass er beigetreten ist. Sobald er Mitglied ist, kann er connecten.

Um jemanden zu entfernen, entferne ihn aus der Steam-Gruppe. Sobald er kein Mitglied mehr ist, kann er nicht mehr connecten. Wenn du die Whitelist auf eine andere Gruppe umstellen möchtest, ändere den Wert von `<GroupID>` und starte den Server neu.

## Whitelist-Funktion prüfen

Nach dem Neustart versuche, dich mit einem Steam-Account zu verbinden, der nicht in der Steam-Gruppe ist. Der Server sollte die Verbindung ablehnen. Teste danach mit einem Gruppenmitglied.

Wenn der Zugriff noch offen ist, überprüfe, ob der Server wirklich im privaten Modus läuft und der Eintrag `<GroupID>` in der aktiven `SpaceEngineers-Dedicated.cfg` vorhanden ist.

## Fazit

Wenn du alle Schritte korrekt befolgt hast, ist deine Whitelist jetzt aktiv und du kannst genau steuern, wer auf den Server darf. Falls der Zugriff noch nicht wie gewünscht funktioniert, starte den Server nochmal neu und überprüfe die Datei oder die Konsolenausgabe, um sicherzugehen, dass die Änderung übernommen wurde.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />