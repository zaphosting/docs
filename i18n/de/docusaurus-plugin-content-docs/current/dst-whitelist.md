---
id: dst-whitelist
title: "Don't Starve Together: Whitelist"
description: "Infos, wie du deinen Don't Starve Together Gameserver bei ZAP-Hosting auf die Whitelist setzt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine Whitelist ist eine Zugangsliste, die einschränkt, wer auf deinen Server joinen darf. Bei Don't Starve Together wird das als Allowlist basierend auf Klei User IDs umgesetzt. Üblicherweise besteht das aus einer `whitelist.txt` Datei plus `whitelist_slots` in der `cluster.ini`.

<InlineVoucher />


## Whitelist aktivieren

Verbinde dich per FTP mit deinem Server und finde deinen Cluster-Ordner, meist so ähnlich wie `DoNotStarveTogether/Cluster_1/` oder ein anbieter-spezifischer Pfad, der die `cluster.ini` enthält. Öffne die `cluster.ini` und setze im Abschnitt `[NETWORK]` den Wert für `whitelist_slots`.

Um den Server effektiv nur für die Whitelist zu öffnen, setze `whitelist_slots` auf den gleichen Wert wie `max_players`.

```ini
[NETWORK]
max_players = 6
whitelist_slots = 6
```

Im selben Cluster-Verzeichnis erstellst oder bearbeitest du die `whitelist.txt`. Füge pro Zeile eine Klei ID im KU_-Format hinzu.

```txt
KU_aaaaaaaa
KU_bbbbbbbb
```

Speichere die Dateien und starte den Server neu. Die Allowlist wird beim Start eingelesen.

## Whitelist-Spieler verwalten

Um einen Spieler hinzuzufügen, hängst du seine KU_-ID an die `whitelist.txt` an, speicherst und startest den Server neu.

Um einen Spieler zu entfernen, lösche seine KU_-ID aus der `whitelist.txt`, speichere und starte den Server neu.

Achte darauf, dass die Anzahl der IDs in `whitelist.txt` mindestens so hoch ist wie `whitelist_slots`, um Join-Probleme zu vermeiden, wenn mehr reservierte Slots als gelistete Nutzer vorhanden sind.

## Whitelist-Funktion prüfen

Nach dem Neustart versuchst du mit einem Account zu joinen, der nicht in der `whitelist.txt` steht. Wenn `whitelist_slots` gleich `max_players` ist, sollte der Join fehlschlagen. Dann teste mit einer gelisteten KU_-ID, ob der Zugang klappt.

Falls der Server trotzdem ungelistete Spieler reinlässt, überprüfe, ob du im aktiven Cluster-Ordner gearbeitet hast und ob im Abschnitt `[NETWORK]` die Zeile mit `whitelist_slots` drinsteht.

## Fazit

Wenn du alle Schritte korrekt befolgt hast, ist deine Whitelist jetzt aktiv und du kannst genau steuern, wer auf den Server darf. Falls der Zugang trotzdem nicht wie gewünscht funktioniert, starte den Server nochmal neu und prüfe die Dateien oder die Ausgabe, um sicherzugehen, dass die Änderung übernommen wurde.

<InlineVoucher />