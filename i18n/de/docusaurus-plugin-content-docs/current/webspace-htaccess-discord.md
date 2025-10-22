---
id: webspace-htaccess-discord
title: "Webspace: Discord-Weiterleitung über Domain einrichten"
description: "Erfahre, wie du deine Domain per Webserver-Konfiguration auf eine bestimmte URL weiterleitest für nahtloses Forwarding → Jetzt mehr erfahren"
sidebar_label: Discord-Weiterleitung
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Domains können standardmäßig nicht direkt auf eine bestimmte URL weitergeleitet werden, sondern nur auf die Hauptadresse eines Servers oder einer Website. Um jedoch auf eine spezifische URL zu zeigen, kannst du eine Weiterleitung über den Webserver in Kombination mit einer `.htaccess`-Datei einrichten. Diese leitet den Domainaufruf automatisch auf die gewünschte Ziel-URL weiter.

<InlineVoucher />

## Vorbereitung

Um so eine Weiterleitung umzusetzen, solltest du bereits eine eigene Domain (TLD) und ein Webspace-Paket besitzen. Verbinde die Domain mit deinem Webspace-Paket. Falls du nicht genau weißt, wie das geht, kannst du unsere einfach zu bedienende [EasyDNS](domain-easydns.md) Option nutzen.

:::warning DNS-Änderungen brauchen Zeit

Änderungen an den DNS-Einstellungen können bis zu **24 Stunden** dauern, bis sie weltweit vollständig übernommen und aktiv sind. In manchen Fällen geht es schneller, aber Verzögerungen sind normal wegen Caching auf verschiedenen Servern.

:::

Sobald die Domain erfolgreich auf den Webspace zeigt und erreichbar ist, kannst du mit der Konfiguration der Discord-Weiterleitung starten.

## Konfiguration

Eine `.htaccess`-Datei muss erstellt und konfiguriert werden, um die Weiterleitung einzurichten. Navigiere dazu im Plesk Control Panel für deine Domain zum Dateimanager. Klicke dort auf das Plus-Symbol, um einen neuen Ordner namens `discord` anzulegen.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZAJAd7EXp7yJE64/download)

Wechsle in den `discord`-Ordner und erstelle dort eine neue Datei mit dem Namen `.htaccess`. Öffne die neu erstellte Datei im Texteditor. Nun wird die Regel für die Weiterleitung eingefügt. Kopiere und füge folgenden Inhalt ein:
```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?beispiel-example.de
RewriteRule (.*) https://discord.gg/A6e4jyg [R=301,L]
```

Damit die Regel und Weiterleitung für deine Domain funktioniert, musst du den Domainnamen anpassen. Ersetze dazu die Beispiel-Domain `example-example.de` durch deine eigene und speichere die Datei. Tausche außerdem die Discord-Invite-URL gegen die deines Servers aus.

Du solltest die Weiterleitung jetzt über deine Domain und den definierten Discord-Pfad aufrufen können. Die Struktur sieht in unserem Beispiel so aus: `beispiel-example.de/discord`.

## Fazit

Wenn du alle Schritte befolgt hast, hast du die Domain-Weiterleitung zu deinem Discord-Server erfolgreich eingerichtet. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />