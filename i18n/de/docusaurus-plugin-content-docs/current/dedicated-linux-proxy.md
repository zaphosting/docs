---
id: dedicated-linux-proxy
title: "Dedicated Server: Reverse Proxy mit nginx auf Linux einrichten"
description: "Entdecke, wie du einen sicheren und effizienten Reverse Proxy für Webseiten und Gameserver einrichtest, um Zugriff und Schutz zu verbessern → Jetzt mehr erfahren"
sidebar_label: Reverse Proxy
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein Reverse Proxy Server ist ein Server, der als Vermittler zwischen den Endnutzern und einem anderen Server fungiert. Webseiten und Gameserver sind beliebte Anwendungsfälle für einen Reverse Proxy, jeweils mit verschiedenen Vorteilen wie Sicherheit, einfacherem Zugriff und Schutz.

In dieser Anleitung zeigen wir dir, wie du einen allgemeinen Reverse Proxy für Webseiten einrichtest sowie einen speziell für Gameserver.

## Vorbereitung

Um einen Reverse Proxy einzurichten, benötigst du einen **Linux Server**, der deinen Proxy hostet. In diesem Beispiel verwenden wir Ubuntu als Linux-Distribution, aber die Installationsschritte sind bei den meisten Linux-Distributionen sehr ähnlich.

:::tip Empfohlene VPS-Spezifikationen
Für einen Reverse Proxy, der auf Gameserver zugeschnitten ist, empfehlen wir dringend, höhere Netzwerkgeschwindigkeiten zu wählen, vor allem wenn dein Server viele Spieler hat. Dein VPS streamt nämlich rohes TCP/UDP direkt zwischen Client (Spieler) und Gameserver. Für einen Web-Proxy reichen in der Regel Basis-Spezifikationen mit minimalen Upgrades. :)
:::

Wir empfehlen, den Proxy mit einer **Domain** einzurichten, die du besitzt. Für jede Subdomain, die du nutzen möchtest, solltest du einen `A` DNS-Eintrag anlegen (z.B. `zapdocs.example.com`), der auf die IP-Adresse deines __Linux VPS__ zeigt. Über diese Subdomain greifen Nutzer dann auf deine Webseite oder deinen Gameserver zu.

### Zugriff auf den VPS

Sobald dein Linux VPS bereit ist, musst du dich verbinden. Nutze dafür unsere [SSH Erste Schritte](vserver-linux-ssh.md) Anleitung, um zu lernen, wie das geht.

### Nginx installieren

Du nutzt Nginx, um den Reverse Proxy zu hosten, da es ein performanter und beliebter Open-Source-Webserver ist.

Nachdem du dich auf deinem VPS eingeloggt hast, installiere Nginx mit folgendem Befehl:

```
sudo apt install nginx
```

Nach der Installation musst du deine Firewall anpassen, damit der Dienst aus dem Internet erreichbar ist. Für diese Anleitung verwenden wir die **UFW Firewall**, da Nginx sich als App registriert und die Einstellungen so einfach sind. Mehr Infos zur UFW Firewall findest du in unserer [Linux Security Tipps](vserver-linux-security-tips.md) Anleitung.

:::note
Falls du andere Firewalls nutzt (z.B. Iptables), stelle sicher, dass Nginx die nötigen Zugriffe auf Port 80 und 443 bekommt, da der Dienst dort läuft.
:::

Du kannst die Nginx-Profile mit `sudo ufw app list` anzeigen lassen. Hier wählen wir die Option **Nginx Full**, die HTTP für Tests und HTTPS für den Produktivbetrieb freigibt.

```
sudo ufw allow 'Nginx Full'
```

Jetzt kannst du im Browser testen, ob Nginx läuft, indem du die IP-Adresse deines Servers aufrufst:

```
http://[deine_serverip]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Für Webseiten

Ein Reverse Proxy für Webseiten bringt viele Vorteile, z.B. Weiterleitung zu internen Server-Ressourcen wie einer Vaultwarden-Instanz (ohne Port in der URL) oder das Weiterleiten zu externen Inhalten, was für Lastverteilung und Schutz super ist.

Ein großer Vorteil ist, dass dein Server Anfragen von beliebig vielen Quellen/Domains verarbeiten kann, im Gegensatz zu einem einzelnen Webserver, der nur auf Port 80/443 läuft.

### Nginx Einrichtung

Erstelle zuerst einen Eintrag im Nginx-Verzeichnis für die Domain, die du vorher ausgewählt hast. Das ist meist eine Subdomain wie `zapdocs.example.com` in unserem Beispiel.

:::important
Stelle sicher, dass du vorher einen `A`-Eintrag angelegt hast, der auf die IP-Adresse deines Proxy Servers zeigt. Ohne diesen funktioniert die Domain und alles Weitere nicht richtig.
:::

Wechsle in den Server-Block-Ordner mit:

```
cd /etc/nginx/sites-available/
```

Erstelle nun eine neue Konfigurationsdatei. Wir empfehlen, den Domainnamen als Dateinamen zu verwenden, damit du sie leicht findest (z.B. zapdocs.example.com). Ersetze `[your_filename]` durch deinen gewünschten Dateinamen.

```
sudo nano [your_filename]
```

Der Nano-Editor öffnet sich. Kopiere die folgende Vorlage hinein. Ersetze `[your_domain]` durch deine Domain, die du proxien möchtest, und `[your_target_server]` durch den Zielserver, zu dem weitergeleitet werden soll.

```
upstream targetServer {
    # Zielserver, den du erreichen möchtest. Das kann sein:
    # Interne "localhost"-Weiterleitung (z.B. 127.0.0.1:9090)
    # Externer Server (z.B. 103.146.43.52:9000)
    server [your_target_server];
}

server {
    listen 80;
    listen [::]:80;

    # Domain, die bedient werden soll (z.B. zapdocs.example.com)
    server_name [your_domain];

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass_request_headers on;
        proxy_http_version 1.1;
        proxy_pass http://targetServer;
    }
}
```

Wenn du alles angepasst hast, speichere die Datei mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`.

Aktiviere nun den Server-Block, indem du einen Symlink zum aktiven Verzeichnis erstellst:

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Prüfe die Syntax mit:

```
sudo nginx -t
```

Wenn alles okay ist, lade Nginx neu, damit die Änderungen wirksam werden:

```
systemctl reload nginx.service
```

Teste jetzt im Browser, ob deine Domain den gewünschten Inhalt lädt, den du als `targetServer` definiert hast. Falls es Probleme gibt, check die Logs mit:

```
journalctl -f -u nginx.service
```

um Fehler zu finden.

## Für Gameserver

Ein Reverse Proxy für Gameserver bringt viele Vorteile, z.B. eine zusätzliche Sicherheitsschicht und mehr Zuverlässigkeit durch bessere Absicherung und Zugriffsbeschränkung auf den Hauptserver.

:::tip
Die meisten dedizierten Gameserver funktionieren super mit einem rohen TCP/UDP Endpoint Proxy, den du hier einrichtest. Eine kleine Minderheit von Spielen wie BeamMP kann Probleme mit VPNs und Proxies haben, das musst du also pro Spiel testen.
:::

### Nginx Einrichtung

Dafür brauchst du das **Nginx Stream** Modul, das nicht standardmäßig in Nginx enthalten ist.

#### Nginx Stream Modul installieren

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt install -y libnginx-mod-stream
```
</TabItem>

<TabItem value="centos-fedora" label="CentOS & Fedora">
```bash
sudo dnf -y install nginx-mod-stream 
```
</TabItem>

</Tabs>

#### Nginx Stream Konfiguration

Du fügst einen neuen `stream` Block in die Hauptdatei `nginx.conf` ein, in dem du den Upstream-Server und den Port definierst, über den der Proxy erreichbar sein soll.

Öffne die Datei mit:

```
sudo nano /etc/nginx/nginx.conf
```

Füge nun diese Vorlage ein. Ersetze `[your_target_server]` durch den Server, zu dem gestreamt werden soll, inklusive Port (z.B. `:30120` für FiveM). Ersetze `[your_port_listener]` durch den Port, über den Nutzer den Proxy erreichen sollen.

```
stream {
    upstream targetServer {
        # Zielserver, den du erreichen möchtest (z.B. 103.146.43.52:30120)
        server [your_target_server];
    }

    server {
        # Listener-Port, der Verbindungen annimmt und weiterleitet (z.B. 30120)
        listen [your_port_listener];
        proxy_pass targetServer;
    }
}
```

Nginx lauscht also auf dem definierten Port und streamt alle Verbindungen an den Zielserver weiter.

Speichere die Datei mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`.

Prüfe die Syntax mit:

```
sudo nginx -t
```

Wenn alles passt, lade Nginx neu:

```
systemctl reload nginx.service
```

Teste jetzt, ob du dich über die Proxy-Domain mit deinem Gameserver verbinden kannst. Wenn es Probleme gibt, check die Logs mit:

```
journalctl -f -u nginx.service
```

## SSL-Zertifikat

Wir empfehlen dringend, für deine Domains ein SSL-Zertifikat zu installieren, damit die Daten sicher per HTTPS übertragen werden. Schau dir dazu unsere [Certbot Installation](dedicated-linux-certbot.md) Anleitung an, die den kompletten Prozess für das Anfordern und automatische Erneuern von SSL-Zertifikaten erklärt.

## Abschluss

Glückwunsch, du hast erfolgreich einen Reverse Proxy für deine Webseite oder deinen Gameserver (oder beides :) eingerichtet und profitierst jetzt von mehr Sicherheit, Zuverlässigkeit und Performance. Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂