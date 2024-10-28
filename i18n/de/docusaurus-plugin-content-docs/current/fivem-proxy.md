---
id: fivem-proxy
title: "FiveM: Einen Reverse Proxy einrichten"
description: Informationen, wie du einen Reverse Proxy für deinen FiveM-Server von ZAP-Hosting einrichtest - ZAP-Hosting.com Dokumentation
sidebar_label: Reverse Proxy
services:
  - Gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein Reverse-Proxy-Server ist ein Server, der als Vermittler zwischen den Endnutzern (deinen Spielern) und deinem FiveM-Server fungiert. Dies kann für Server, die häufig DDoS-Angriffen ausgesetzt sind, sehr vorteilhaft sein, da er eine zusätzliche Sicherheits- und Zuverlässigkeitsschicht bietet, indem er die Sichtbarkeit des Haupthosts verringert und zusätzliche Schutzmaßnahmen bietet.

In diesem Leitfaden werden wir uns mit der Einrichtung eines Reverse-Proxys für deinen FiveM-Server befassen. In diesem Szenario gibt es zwei Arten von Reverse-Proxys: den Connect-Proxy, der für den Connect-Endpunkt verwendet wird, und einen Server-Proxy, der für den Server-Endpunkt verwendet wird, an dem das rohe TCP/UDP-Proxying stattfindet. Beide können unabhängig voneinander eingerichtet werden.

<InlineVoucher />

## Vorbereitung

Um einen Reverse Proxy einzurichten, benötigst du einen **Linux Server** (z. B. einen VPS), auf dem dein Proxy-Server läuft. In diesem Beispiel verwenden wir Ubuntu als Linux-Distribution, aber die Installationsschritte sollten für die meisten Linux-Distributionen sehr ähnlich sein.

:::tip Empfohlene VPS-Specs
Wir empfehlen dir, eine höhere Netzwerkgeschwindigkeit zu wählen, wenn du einen Server-Proxy einrichten willst, vor allem, wenn dein Server viele Spieler hat. Das liegt daran, dass dein VPS rohes TCP/UDP direkt zwischen dem Client (Spieler) und dem FiveM Server überträgt. Ansonsten sollte ein Server mit den Basisspezifikationen und minimalen Upgrades ausreichen :)
:::

Wir empfehlen außerdem, den Proxy mit einer **Domain** einzurichten, die du besitzt. Du solltest einen `A`- oder `CNAME`-Eintrag für die Domain erstellen, die du verwenden möchtest (zum Beispiel `zapdocs.example.com`), der auf die IP-Adresse deines __Linux VPS__ zeigt. Diese Adresse wird von den Spielern verwendet, um sich mit dem Server zu verbinden, obwohl du stattdessen auch die IP-Adresse deines Proxy-Servers verwenden könntest, wenn du möchtest.

### Zugriff auf VPS

Wenn dein Linux VPS bereit ist, musst du dich mit ihm verbinden. In unserer Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md) erfährst du mehr darüber, wie du das machst.

### Nginx installieren

Du wirst Nginx als Reverse-Proxy-Server verwenden, da es sich um einen sehr leistungsstarken und beliebten Open-Source-Webserver handelt.

Nachdem du auf deinen VPS zugegriffen hast, installierst du Nginx mit folgendem Befehl:
```
sudo apt install nginx
```

Jetzt musst du die Firewall des Servers anpassen. Du kannst die Nginx-Profile überprüfen, indem du `sudo ufw app list` ausführst.

In diesem Szenario würden wir die Option **Nginx Full** wählen, die den Zugriff auf HTTP für Tests (und wenn du keine Domain verwendest) und HTTPS für den Produktionsbetrieb ermöglicht.
```
sudo ufw allow 'Nginx Full'
```

Wenn Nginx nun eingerichtet ist, versuche, die Seite über einen Browser aufzurufen, um sicherzustellen, dass sie wie erwartet funktioniert.
```
http://[deine_serverip]
```

Wenn die Testseite wie erwartet funktioniert, kannst du jetzt mit den Hauptschritten der Proxy-Einrichtung in den folgenden Abschnitten fortfahren.

## Proxy verbinden

Ein Verbindungsproxy wird verwendet, um den Verbindungsendpunkt für deinen FiveM Server zu vermitteln. Das bedeutet, dass dein Proxy-Server für den Empfang von Verbindungsanfragen zuständig ist und diese an deinen FiveM-Hauptserver weiterleitet. Das hat den großen Vorteil, dass die wahre IP-Adresse des FiveM-Hosts in der Serverliste verborgen bleibt und somit weniger sichtbar ist.

### Nginx-Einrichtung

Beginne damit, einen Eintrag im Nginx-Verzeichnis für den Host zu erstellen, den du zuvor bei der Einrichtung der Domain ausgewählt hast. In diesem Beispiel verwenden wir wie bisher `zapdocs.example.com`.

Verwende den folgenden Befehl, um den Server-Block für deine Domain zu erstellen, und ersetze dabei `[deine_domain]` durch deine eigene.
```
sudo nano /etc/nginx/sites-available/[deine_domain]
```

Kopiere nun die folgende Vorlage in deinen Editor und passe sie mit deinen Werten an.

```
Upstream Backend {
    # FiveM Server IP Adresse
    server [deine_fivem_serverip]:30120;
}

proxy_cache_path /srv/cache levels=1:2 keys_zone=assets:48m max_size=20g inactive=2h;

Server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    server_name [deine_domain]; # Zum Beispiel: zapdocs.example.com

    ssl_certificate /path/to/certificate.pem;
    ssl_certificate_key /path/to/privkey.pem;

    Standort / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        # erforderlich, um Auth-Header korrekt zu übergeben
        proxy_pass_request_headers on;
        # erforderlich, um die Verbindung nicht sofort zu schließen
        proxy_http_version 1.1;
        proxy_pass http://backend;
    }

    # zusätzlicher Block für einen Caching-Proxy
    location /files/ {
        proxy_pass http://backend$request_uri;
        add_header X-Cache-Status $upstream_cache_status;
        proxy_cache_lock on;
        proxy_cache assets;
        proxy_cache_valid 1y;
        proxy_cache_key $request_uri$is_args$args;
        proxy_cache_revalidate ein;
        proxy_cache_min_uses 1;
    }
}
```

Wenn alle Eingabewerte an deine Einstellungen angepasst sind, kannst du die Datei speichern und nano mit `CTRL + X` beenden, gefolgt von `Y` zur Bestätigung und schließlich `ENTER`.

### FiveM Konfiguration

Nachdem der Proxy nun eingerichtet ist, musst du einige Werte in der Konfigurationsdatei `server.cfg` auf deinem FiveM-Server anpassen.

Füge die folgenden Inhalte in die Konfiguration ein und ersetze die Werte durch deine Einstellungen.
```
# Verhindert, dass die Serverliste deinen Server mit seiner tatsächlichen IP anzeigt
setze sv_forceIndirectListing true

# Lässt das Serverlisten-Backend deine Domäne statt der Standarddomäne anfordern (Beispiel: zapdocs.example.com)
set sv_listingHostOverride "[deine_domain]"

# Eine durch Leerzeichen getrennte Liste von IPv4-Netzwerken in CIDR-Notation, von denen 'X-Real-IP' zugelassen und der Ratenbegrenzer umgangen werden soll
set sv_proxyIPRanges "[deine_proxy_serverip]/32"

# Der tatsächliche Endpunkt, auf dem dein Server gehostet wird, oder ein oder mehrere Server-Endpunkt-Proxys
set sv_endpoints "[deine_fivem_serverip]:30120"
```

Speichere nun die Datei und starte den Server neu. Beim nächsten Start deines Servers sollte deine Domain nun auf deinen FiveM-Server aufgelöst werden, d. h., sie kann für die Verbindung verwendet werden.

Du kannst überprüfen, ob alles funktioniert, indem du versuchst, auf `https://[your_domain]/info.json` zuzugreifen. Wenn es korrekt geladen wird, funktioniert dein Verbindungsproxy.

## Server Proxy

Ein Server-Proxy wird verwendet, um den Server-Endpunkt an deinen FiveM-Server weiterzuleiten, der die rohen TCP/UDP-Endpunkte und Streams direkt weiterleitet.

### Nginx Einrichtung

Dazu verwendest du das Modul **stream**, das Teil von Nginx ist. Öffne die Datei `nginx.conf` mit nano.
```
sudo nano /etc/nginx/nginx.conf
```

Kopiere nun den folgenden Inhalt in den Root-Bereich und ersetze die Werte durch deine Einstellungen.
```
Stream {
    upstream backend {
        server [deine_fivem_serverip]:30120;
    }
    Server {
		listen 30120;
		proxy_pass backend;
	}
	server {
		listen 30120 udp reuseport;
		proxy_pass backend;
	}
}
```

Wenn alle Eingabewerte an deine Einstellungen angepasst sind, kannst du die Datei speichern und nano mit `CTRL + X` beenden, gefolgt von `Y` zur Bestätigung und schließlich `ENTER`.

### FiveM Konfiguration

Wenn der Proxy nun eingerichtet ist, musst du einen Wert in der Konfigurationsdatei `server.cfg` auf deinem FiveM-Server anpassen.

:::tip
Wenn du den Parameter `set sv_endpoints` bereits eingerichtet hast, indem du einen Connect Proxy eingerichtet hast, kannst du dies überspringen.
:::

Füge die folgende Zeile in die Konfiguration ein und ersetze den Wert durch deine Einstellungen.
```
# Der tatsächliche Endpunkt, an dem dein Server gehostet wird, oder ein oder mehrere Server-Endpunkt-Proxys
set sv_endpoints "[deine_fivem_serverip]:30120"
```

Speichere nun die Datei und starte den Server neu. Beim nächsten Start des Servers sollten die rohen TCP/UDP-Endpunkte nun über deinen Reverse-Proxy gestreamt werden.

Du kannst dies überprüfen, indem du die IP-Adressen der Spieler analysierst, die alle die IP-Adresse deines Proxy-Servers gefolgt von zufällig zugewiesenen Ports sein sollten.

## Abschluss

Du hast erfolgreich einen Reverse Proxy für deinen FiveM-Server eingerichtet, der dir verschiedene Verbesserungen in Bezug auf Sicherheit, Zuverlässigkeit und Leistung bietet.