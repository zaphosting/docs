---
id: hytale-advanced-permissions-luckperms
title: "Hytale: Erweiterte Permissions mit LuckPerms"
description: "Entdecke, wie du LuckPerms installierst und konfigurierst, um erweiterte Permissions und Ränge auf deinem Hytale Gameserver zu verwalten → Jetzt mehr erfahren"
sidebar_label: Erweiterte Permissions
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das Verwalten von Permissions auf einem Hytale Gameserver wird immer wichtiger, sobald du mit Staff-Rollen, individuellen Rängen oder speziellen Spieler-Perks arbeitest. Das standardmäßige Ingame-Permissionsystem eignet sich zwar für einfache Administration, stößt aber schnell an seine Grenzen, wenn du feingranulare Kontrolle über Befehle und Features brauchst.

**LuckPerms** bietet ein robustes und hochgradig anpassbares Permissionsystem für Hytale Gameserver. Damit kannst du genau festlegen, welche Permissions und Befehle verschiedene Spieler oder Gruppen nutzen dürfen.

<InlineVoucher />



## LuckPerms installieren

Um LuckPerms zu installieren, lade dir zuerst die aktuellste LuckPerms `.jar` Datei herunter.  
Nach dem Download öffnest du dein Servermanagement-Panel und stoppst den Gameserver, um die Mod sicher hochzuladen.

Wechsle in den **Dateien**-Bereich deines Servers und öffne den `mods`-Ordner. Lade die LuckPerms `.jar` Datei in diesen Ordner hoch. Für eine ausführliche Erklärung, wie Mods installiert werden, empfehlen wir dir einen Blick in die [Mods installieren](hytale-mods) Anleitung.

Sobald der Upload abgeschlossen ist, starte den Server wieder. Nach dem Start öffnest du die Serverkonsole und prüfst, ob LuckPerms korrekt läuft. Bei erfolgreicher Installation zeigt LuckPerms Startmeldungen in der Konsole an.



## Erste Permissions vergeben

Nach der Installation muss LuckPerms konfiguriert werden, bevor du es effektiv nutzen kannst. Um mit der Verwaltung von Permissions zu starten, musst du dir selbst die Rechte geben, LuckPerms-Befehle zu verwenden. Führe dazu in der Konsole oder im Ingame-Chat folgenden Befehl aus:

```
lp user <spielername> permission set luckperms.* true
```

Damit erhält der ausgewählte Spieler vollen Zugriff auf alle LuckPerms-Befehle.



## Den LuckPerms Web-Editor nutzen

LuckPerms bietet einen Web-Editor, der eine praktische Oberfläche zum Erstellen von Gruppen und Verwalten von Permissions bereitstellt. Um eine Editor-Session zu starten, gib ein:

```
lp editor
```

LuckPerms gibt in der Konsole einen Link zum Editor aus. Öffne diesen Link in deinem Browser, um den Web-Editor zu nutzen.

```
[LP] Preparing a new editor session, please wait...
[LP] Click the link below to open the editor:
https://luckperms.net/editor/XXXXXXXXXX
```

![img](https://screensaver01.zap-hosting.com/index.php/s/5Cx2sGY4axZ6TBo/preview)

Im Editor kopierst du den angezeigten **Befehlslink**. Zurück in der Serverkonsole fügst du diesen Link ein, um Vertrauen herzustellen und die Editor-Session mit deinem Server zu verbinden.

```
/lp trusteditor XXXX-XXXX
```

Sobald der Editor verbunden ist, kannst du Nutzer, Gruppen und Permissions direkt im Webinterface konfigurieren. Nach Änderungen klickst du auf **Apply**, um die Konfiguration zu speichern. Falls LuckPerms einen Apply-Befehl ausgibt, kopiere ihn und füge ihn in die Serverkonsole ein, um die Änderungen abzuschließen.



## Eine Admin-Gruppe erstellen

Öffne den Editor-Link in deinem Browser und navigiere zum Bereich **Groups**. Erstelle eine neue Gruppe über das Plus-Symbol und gib ihr den Namen `admin`. Optional kannst du weitere Details wie Anzeigenamen, Gewichtung, übergeordnete Gruppe sowie Prefix/Suffix einstellen.

![img](https://screensaver01.zap-hosting.com/index.php/s/xEWHSBkxKy5q8qr/preview)

Nachdem du die Gruppe erstellt hast, wähle die `admin` Gruppe im Editor aus und füge Permissions hinzu. Um der Gruppe volle Hytale-Rechte zu geben, trage folgendes ein:

```
hytale.*
```

Diese Permission gewährt vollen Zugriff auf alle Hytale-Berechtigungen. Nach dem Hinzufügen der Permissions weist du einen Spieler der Gruppe zu.  
Im Editor öffnest du den Bereich **Users**, wählst den gewünschten Nutzer aus und fügst unter **Parent groups** die `admin` Gruppe hinzu.

Zum Schluss klickst du auf **Apply**, um deine Änderungen zu speichern. Falls du dazu aufgefordert wirst, füge den Apply-Befehl in die Serverkonsole ein.



## Häufig genutzte LuckPerms-Befehle

LuckPerms kannst du entweder über den Web-Editor oder direkt per Befehle verwalten. Die folgenden Befehle werden häufig für die Permission-Verwaltung genutzt:

| Befehl                                                      | Beschreibung                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `/lp user <spielername> parent add <gruppe>`                 | Fügt den Spieler der Gruppen-Permission hinzu.               |
| `/lp user <spielername> parent remove <gruppe>`              | Entfernt den Spieler aus der Gruppen-Permission.             |
| `/lp user <spielername> permission set <permission>`         | Vergibt die Permission an den Spieler.                        |
| `lp user <spielername> permission settemp <permission> true <dauer>` | Vergibt eine temporäre Permission an den Spieler, z.B. `1h` für 1 Stunde oder `1m` für 1 Minute. |
| `/lp user <spielername> permission unset <permission>`       | Entfernt die Permission vom Spieler.                          |
| `/lp group <gruppe> permission set <permission>`             | Vergibt die Permission an die Gruppe.                         |
| `/lp group <gruppe> permission unset <permission>`           | Entfernt die Permission von der Gruppe.                       |



## Fazit

LuckPerms ist eine mächtige Lösung für erweiterte Permission-Verwaltung auf Hytale Gameservern. Mit Gruppen, Permissions und dem Web-Editor kannst du ein strukturiertes Rollensystem schaffen, das mit deiner Community mitwächst.

Ist LuckPerms einmal eingerichtet, kannst du Staff-Ränge, Spieler-Perks und Zugriffsrechte einfach pflegen und behältst dabei eine saubere, konsistente und performante Serveradministration.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />