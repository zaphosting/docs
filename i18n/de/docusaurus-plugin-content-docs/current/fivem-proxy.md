---
id: fivem-proxy
title: "FiveM: Reverse Proxy einrichten"
description: "Entdecke, wie du die Sicherheit und Zuverlässigkeit deines FiveM Gameservers mit einem Reverse Proxy verbesserst – für besseren DDoS-Schutz und Performance → Jetzt mehr erfahren"
sidebar_label: Reverse Proxy
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein Reverse Proxy Server ist ein Server, der als Vermittler zwischen den Endnutzern (deinen Spielern) und deinem FiveM Gameserver fungiert. Das ist besonders nützlich für Server, die häufig DDoS-Angriffe erleben, da es eine zusätzliche Sicherheitsschicht und mehr Zuverlässigkeit bietet, indem die Sichtbarkeit des Haupt-Hosts reduziert und zusätzliche Schutzmaßnahmen bereitgestellt werden.

In dieser Anleitung zeigen wir dir, wie du einen Reverse Proxy für deinen FiveM Gameserver einrichtest. Es gibt zwei Arten von Reverse Proxies in diesem Szenario: den Connect Proxy, der für den Connect-Endpunkt genutzt wird, und den Server Proxy, der für den Server-Endpunkt verwendet wird, wo das reine TCP/UDP-Proxying stattfindet. Beide können unabhängig voneinander eingerichtet werden.

<InlineVoucher />

## Vorbereitung

Um einen Reverse Proxy einzurichten, benötigst du einen **Linux Server** (z.B. einen VPS), der deinen Proxy-Server hostet. In diesem Beispiel verwenden wir Ubuntu als Linux-Distribution, aber die Installationsschritte sind bei den meisten Linux-Distributionen sehr ähnlich.

:::tip Empfohlene VPS Specs
Wir empfehlen dir dringend, höhere Netzwerkgeschwindigkeiten zu wählen, wenn du einen Server Proxy einrichten möchtest, vor allem wenn dein Server viele Spieler hat. Denn dein VPS wird rohes TCP/UDP direkt zwischen dem Client (Spieler) und dem FiveM Gameserver streamen. Ansonsten reicht ein Server mit Basisspezifikationen und minimalen Upgrades völlig aus. :)
:::

Wir empfehlen außerdem, den Proxy mit einer **Domain** einzurichten, die du besitzt. Erstelle dafür einen `A`-Eintrag für die Domain, die du verwenden möchtest (z.B. `zapdocs.example.com`), und verweise ihn auf die IP-Adresse deines __Linux VPS__. Das ist die Adresse, die Spieler zum Verbinden nutzen werden – technisch könntest du aber auch die IP-Adresse deines Proxy-Servers direkt verwenden, wenn du möchtest.

### Zugriff auf den VPS

Sobald dein Linux VPS bereit ist, musst du dich mit ihm verbinden. Nutze dafür unsere [SSH Erste Schritte](vserver-linux-ssh.md) Anleitung, um zu erfahren, wie das funktioniert.

### Nginx installieren

Du wirst Nginx verwenden, um den Reverse Proxy zu hosten, da es ein sehr performanter und beliebter Open-Source-Webserver ist.

Nachdem du Zugriff auf deinen VPS hast, installiere Nginx mit folgendem Befehl:

```
sudo apt install nginx
```

Nach der Installation musst du deine Firewall anpassen, damit der Dienst aus dem Internet erreichbar ist. Für diese Anleitung verwenden wir die **UFW Firewall**, da Nginx sich als App registriert und die Einstellungen so einfach anzupassen sind. Mehr Infos zur UFW Firewall findest du in unserer [Linux Security Tipps](vserver-linux-security-tips.md) Anleitung.

:::note
Wenn du andere Firewalls nutzt (z.B. Iptables), stelle sicher, dass du Nginx den nötigen Zugriff gewährst, speziell auf den Ports 80 und 443, auf denen Nginx läuft.
:::

Du kannst die Nginx-Profile mit `sudo ufw app list` anzeigen lassen. In diesem Fall solltest du die Option **Nginx Full** auswählen, die Zugriff auf HTTP für Tests und HTTPS für den Produktivbetrieb erlaubt.

```
sudo ufw allow 'Nginx Full'
```

Jetzt, wo Nginx läuft, versuche die Seite über deinen Browser aufzurufen, um sicherzugehen, dass alles funktioniert. Wenn die Testseite angezeigt wird, kannst du mit der Anleitung weitermachen.

```
http://[deine_serverip]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Connect Proxy

Ein Connect Proxy wird genutzt, um den Connect-Endpunkt deines FiveM Gameservers zu proxien. Das bedeutet, dein Proxy-Server empfängt die Connect-Anfragen und leitet sie an deinen Haupt-FiveM Gameserver weiter. Das hat den großen Vorteil, dass die echte IP-Adresse deines FiveM Hosts in der Serverliste verborgen bleibt und somit weniger sichtbar ist.

### Nginx Einrichtung

Erstelle zunächst einen Eintrag im Nginx-Verzeichnis für den Host, den du bei der Domain-Einrichtung gewählt hast. In diesem Beispiel nutzen wir wieder `zapdocs.example.com`.

Erstelle den Server-Block für deine Domain mit folgendem Befehl, wobei du `[your_domain]` durch deine eigene Domain ersetzt:

```
sudo nano /etc/nginx/sites-available/[your-domain]
```

Kopiere nun die folgende Vorlage in den Editor und passe die Werte an deine Konfiguration an.

```
upstream backend {
    # FiveM Server IP-Adresse
    server [your_fivem_serverip]:30120;
}

proxy_cache_path /srv/cache levels=1:2 keys_zone=assets:48m max_size=20g inactive=2h;

server {
    listen 80;
    listen [::]:80;

    server_name [your_domain]; # Zum Beispiel: zapdocs.example.com

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        # Erforderlich, um Auth-Header korrekt weiterzuleiten
        proxy_pass_request_headers on;
        # Verhindert, dass Verbindungen sofort geschlossen werden
        proxy_http_version 1.1;
        proxy_pass http://backend;
    }

    # Zusätzlicher Block für einen Caching Proxy
    location /files/ {
        proxy_pass http://backend$request_uri;
        add_header X-Cache-Status $upstream_cache_status;
        proxy_cache_lock on;
        proxy_cache assets;
        proxy_cache_valid 1y;
        proxy_cache_key $request_uri$is_args$args;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 1;
    }
}
```

Wenn du alle Werte angepasst hast, speichere die Datei und beende nano mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`.

Aktiviere nun den Server-Block, indem du einen Symlink zum aktiven Verzeichnis erstellst:

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Um sicherzugehen, dass keine Syntaxfehler vorliegen, kannst du `sudo nginx -t` ausführen. Wenn alles erfolgreich ist, starte Nginx neu, damit die Änderungen wirksam werden:

```
systemctl reload nginx.service
```

Teste jetzt, ob du deine Domain im Browser erreichen kannst. Wenn alles klappt, sollte die Seite den Inhalt laden, den du als `targetServer` Parameter angegeben hast. Bei Problemen empfehlen wir, die Logs mit `journalctl -f -u nginx.service` zu checken, um Fehler zu finden.

### FiveM Konfiguration

Nachdem der Proxy eingerichtet ist, musst du einige Werte in der `server.cfg` deines FiveM Gameservers anpassen.

Füge folgende Zeilen ein und ersetze die Werte entsprechend:

```
# Verhindert, dass die Serverliste deinen Server mit der echten IP bewirbt
set sv_forceIndirectListing true

# Lässt die Serverliste deine Domain anfragen statt der Standard-IP (z.B. zapdocs.example.com)
set sv_listingHostOverride "[your_domain]"

# Liste von IPv4-Netzen in CIDR-Notation, die 'X-Real-IP' erlauben und den Rate Limiter umgehen
set sv_proxyIPRanges "[your_proxy_serverip]/32"

# Der eigentliche Endpunkt, auf dem dein Server läuft, oder ein oder mehrere Server Proxy Endpunkte
set sv_endpoints "[your_fivem_serverip]:30120"
```

Speichere die Datei und starte den Server neu. Beim nächsten Start sollte deine Domain nun auf deinen FiveM Gameserver auflösen und zum Verbinden genutzt werden können.

Du kannst testen, ob alles funktioniert, indem du versuchst, `https://[your_domain]/info.json` aufzurufen. Wenn die Datei geladen wird, funktioniert dein Connect Proxy.

## Server Proxy

Ein Server Proxy wird genutzt, um den Server-Endpunkt deines FiveM Gameservers zu proxien, also das reine TCP/UDP-Proxying und Streaming.

### Nginx Einrichtung

Dafür nutzt du das **stream** Modul von Nginx. Öffne die `nginx.conf` mit nano:

```
sudo nano /etc/nginx/nginx.conf
```

Füge nun folgenden Block im Root-Scope ein und passe die Werte an:

```
stream {
    upstream backend {
        server [your_fivem_serverip]:30120;
    }
    
    server {
		listen 30120;
		proxy_pass backend;
	}

	server {
		listen 30120 udp reuseport;
		proxy_pass backend;
	}
}
```

Speichere die Datei und beende nano mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`.

Prüfe die Syntax mit `sudo nginx -t`. Wenn alles passt, lade Nginx neu, damit die Konfiguration aktiv wird:

```
systemctl reload nginx.service
```

Versuche nun, dich über die Proxy-Domain mit deinem Gameserver zu verbinden. Wenn alles klappt, solltest du dich mit dem Server verbinden können, den du als `targetServer` angegeben hast. Bei Problemen checke die Logs mit `journalctl -f -u nginx.service`.

### FiveM Konfiguration

Nachdem der Proxy läuft, musst du eine Einstellung in der `server.cfg` anpassen.

:::tip
Wenn du den `set sv_endpoints` Parameter bereits beim Einrichten des Connect Proxies gesetzt hast, kannst du diesen Schritt überspringen.
:::

Füge folgende Zeile ein und ersetze den Wert:

```
# Der eigentliche Endpunkt, auf dem dein Server läuft, oder ein oder mehrere Server Proxy Endpunkte
set sv_endpoints "[your_fivem_serverip]:30120"
```

Speichere die Datei und starte den Server neu. Beim nächsten Start werden die rohen TCP/UDP-Endpunkte über deinen Reverse Proxy gestreamt.

Du kannst das überprüfen, indem du die IP-Adressen der Spieler analysierst – diese sollten alle die IP-Adresse deines Proxy-Servers mit zufällig zugewiesenen Ports anzeigen.

## SSL-Zertifikat

Nachdem dein FiveM Reverse Proxy läuft, empfehlen wir dringend, ein SSL-Zertifikat für deine Domains zu installieren, damit die Daten sicher via HTTPS übertragen werden.

Schau dir dazu unsere [Certbot Installation](dedicated-linux-certbot.md) Anleitung an, die den kompletten Prozess zum Anfordern und automatischen Erneuern von SSL-Zertifikaten für deine Domain(s) erklärt.

## Fazit

Glückwunsch, du hast erfolgreich einen Reverse Proxy für deinen FiveM Gameserver eingerichtet und profitierst jetzt von mehr Sicherheit, Zuverlässigkeit und besserer Performance. Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />