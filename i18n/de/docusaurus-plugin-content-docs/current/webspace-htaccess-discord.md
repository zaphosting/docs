---
id: webspace-htaccess-discord
title: "Webspace: Discord Weiterleitung via Domain einrichten"
description: Informationen, wie du eine Discord Weiterleitung via Domain bei deinem Webspace von ZAP-Hosting einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Discord Weiterleitung
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Domains können standardmäßig nicht direkt auf eine bestimmte URL weitergeleitet werden, sondern nur auf die Hauptadresse eines Servers oder einer Website. Um jedoch auf eine bestimmte URL zu verweisen, kannst du eine Umleitung über einen Webserver in Kombination mit einer `.htaccess`-Datei einrichten. Dadurch wird der Domainaufruf automatisch auf die gewünschte Ziel-URL umgeleitet.

<InlineVoucher />



## Vorbereitung

Um eine solche Weiterleitung zu realisieren, wird vorausgesetzt, dass du bereits eine eigene Domain (TLD) und ein Webspace Paket besitzt. Verknüpfe die Domain mit deinem Webspace Paket. Wenn du nicht genau weißt, wie man das macht, kannst du unsere einfach zu bedienende [EasyDNS](domain-easydns.md) Option verwenden. 

::: warning DNS-Änderungen benötigen Zeit
Änderungen an den DNS-Einstellungen können bis zu **24 Stunden** dauern, bis sie vollständig übernommen und weltweit wirksam werden. In einigen Fällen kann die Umsetzung schneller erfolgen, aber Verzögerungen sind aufgrund der Zwischenspeicherung auf verschiedenen Servern normal. 
:::

Sobald die Domain erfolgreich auf den Webspace verweist und erreicht werden kann, kannst du mit der Konfiguration der Discord-Weiterleitung beginnen. 



## Konfiguration

Eine `.htaccess`-Datei muss erstellt und konfiguriert werden, um die Weiterleitung zu konfigurieren. Navigiere dazu zum Dateimanager in der Plesk-Verwaltung deiner Domain. Klicke dort auf das Plussymbol, um einen neuen Ordner namens `discord` zu erstellen.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZAJAd7EXp7yJE64/download)

Navigiere zu dem Ordner `discord` und erstelle dort eine neue Datei mit dem Namen `.htaccess`. Öffne nun die neu erstellte Datei mit einem Texteditor. Die Regel für die Weiterleitung wird nun hinzugefügt. Kopiere den folgenden Inhalt und füge ihn ein:
```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?beispiel-example.de
RewriteRule (.*) https://discord.gg/A6e4jyg [R=301,L]
```

Damit die Regel und die Umleitung für deine Domain funktioniert, musst du den Namen der Domain ändern. Ersetze dazu die Beispiel-Domain `beispiel-example.de` durch deine eigene Domain und speichere die Datei. Ersetze auch die Discord-Einladungs-URL durch die deines Discord Servers. 

Du solltest nun in der Lage sein, die Weiterleitung mit deiner Domain und dem definierten Discord-Pfad aufzurufen. Die Struktur würde in unserem Beispiel wie folgt aussehen: `beispiel-example.de/discord`.

## Abschluss

Wenn du alle Schritte befolgt hast, solltest du die Weiterleitung zu deinem Discord Server erfolgreich konfiguriert haben. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

