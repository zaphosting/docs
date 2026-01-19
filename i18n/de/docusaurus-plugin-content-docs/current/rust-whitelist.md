---
id: rust-whitelist
title: "Rust: Whitelist"
description: "Infos, wie du deinen Rust-Server bei ZAP-Hosting auf die Whitelist setzt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine Whitelist ist ein Zugriffsmechanismus, der einschränkt, wer auf deinen Server joinen darf. Rust Dedicated Server haben keine eingebaute Whitelist-Funktion, deshalb installieren Hosting-Anbieter meist uMod Oxide und ein Whitelist-Plugin, das Verbindungen blockiert, außer ein Spieler ist explizit erlaubt.

<InlineVoucher />


## Whitelist aktivieren

Verbinde dich per FTP mit deinem Server und installiere uMod Oxide, falls noch nicht vorhanden. Nachdem uMod installiert ist, lade die Whitelist-Plugin-Datei `Whitelist.cs` in den Plugins-Ordner hoch, meistens `oxide/plugins/Whitelist.cs`.

Sobald das Plugin drin ist, starte den Server neu oder lade die Plugins neu, damit es aktiviert wird. Das Whitelist-Plugin funktioniert normalerweise so, dass es eine bestimmte Berechtigung verlangt, bevor ein Spieler connecten darf.

## Whitelist-Spieler verwalten

Öffne die Live-Konsole im ZAP-Hosting Gameserver-Management und gib einem Spieler mit seiner SteamID64 die Whitelist-Berechtigung.

```text
oxide.grant user 76561198000000000 whitelist.allow
```

Um den Zugang zu entziehen, entferne die Berechtigung.

```text
oxide.revoke user 76561198000000000 whitelist.allow
```

Um zu prüfen, welche Berechtigungen ein Nutzer hat, kannst du seine Permissions abfragen.

```text
oxide.show user 76561198000000000
```

## Whitelist-Funktion prüfen

Versuche, dich mit einem Account zu verbinden, der keine Whitelist-Berechtigung hat. Das Plugin sollte die Verbindung ablehnen. Verbinde dich danach mit einem Account, dem du `whitelist.allow` gegeben hast, um den Zugang zu bestätigen.

Wenn trotzdem jeder joinen kann, check, ob das Plugin geladen ist und uMod läuft. Ein Server-Neustart nach dem Hochladen des Plugins ist der sicherste Weg, um sicherzugehen, dass es aktiv ist.

## Fazit

Wenn du alle Schritte oben befolgt hast, ist deine Whitelist jetzt aktiv und du kannst genau steuern, wer auf den Server darf. Falls der Zugang noch nicht wie gewünscht funktioniert, starte den Server einmal neu und überprüfe die Dateien oder Konsolenausgaben, um sicherzugehen, dass die Änderung übernommen wurde.

Bei weiteren Fragen oder wenn du Hilfe brauchst, melde dich gern bei unserem Support-Team – wir sind täglich für dich da! 🙂

<InlineVoucher />