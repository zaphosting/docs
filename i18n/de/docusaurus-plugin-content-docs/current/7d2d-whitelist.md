---
id: 7d2d-whitelist
title: "7 Days To Die: Whitelist"
description: Informationen dazu, wie du deinen 7 Days To Die Server bei ZAP-Hosting auf die Whitelist setzt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine Whitelist ist eine Zugangsliste, die einschränkt, wer auf deinen Server joinen darf. In 7 Days To Die wird das üblicherweise in der Datei serveradmin.xml verwaltet, die die whitelisted Steam-Accounts speichert. Sobald aktiviert, können nur Spieler, die dort eingetragen sind, connecten.

<InlineVoucher />


## Whitelist aktivieren

Verbinde dich per FTP mit deinem Server und suche die Datei `serveradmin.xml`. Bei den meisten gehosteten Installationen liegt sie im Save-Verzeichnis, meist unter einem Pfad wie `7-days-to-die/Saves/<WorldName>/<SaveName>/serveradmin.xml` oder direkt in `7-days-to-die/Saves/serveradmin.xml` – je nach Provider-Layout. Öffne die Datei und suche den Abschnitt `<whitelist>` innerhalb von `<adminTools>`.

Füge mindestens eine SteamID64 zur Whitelist hinzu. Das Format unten folgt der Standardstruktur, die vom Spiel verwendet wird.

```xml
<whitelist>
  <user steamID="76561198021925107" name="PlayerName" permission_level="1000" />
</whitelist>
```

Speichere die Datei und starte den Server neu, damit die neue Whitelist geladen wird. Wenn deine Datei nur aus auskommentierten Beispielen besteht, achte darauf, dass deine `<user ... />`-Zeile nicht innerhalb eines XML-Kommentars steht.

## Whitelisted Spieler verwalten

Um einen weiteren Spieler hinzuzufügen, wiederhole die Änderung in der `serveradmin.xml`, indem du einen weiteren `<user ... />`-Eintrag innerhalb von `<whitelist>` ergänzt. Verwende dafür die SteamID64 des Spielers als `steamID`.

Um einen Spieler zu entfernen, lösche die entsprechende `<user ... />`-Zeile aus dem `<whitelist>`-Abschnitt, speichere und starte den Server neu.

Wenn du lieber per Kommando arbeitest, öffne die Live-Konsole im ZAP-Hosting Gameserver-Management und nutze die eingebauten Whitelist-Befehle, um Spieler hinzuzufügen oder zu entfernen. Änderungen über Befehle werden beim Neustart im selben Whitelist-Datensatz gespeichert, den der Server nutzt.

## Whitelist-Funktion überprüfen

Nach dem Neustart versuche, dich mit einem Account zu verbinden, der nicht auf der Whitelist steht. Der Verbindungsversuch sollte abgelehnt werden. Teste danach mit einem whitelisted Account, um zu bestätigen, dass der Zugang funktioniert.

Wenn der Server trotzdem nicht whitelisted Spieler blockiert, überprüfe nochmal, ob deine Whitelist-Einträge nicht auskommentiert sind und ob du die richtige `serveradmin.xml` für den aktiven Save bearbeitet hast.

## Fazit

Wenn du alle Schritte oben korrekt befolgt hast, ist deine Whitelist jetzt aktiv und du kannst genau steuern, wer auf den Server darf. Falls der Zugang trotzdem nicht wie erwartet funktioniert, starte den Server nochmal neu und überprüfe die Datei oder die Konsolenausgabe, um sicherzugehen, dass die Änderung übernommen wurde.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />