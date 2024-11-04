---
id: vserver-linux-proxy
title: "VPS: Einrichtung eines Reverse-Proxys"
description: Informationen zur Einrichtung eines Reverse-Proxys auf deinem VPS von ZAP-Hosting - ZAP-Hosting.com-Dokumentation
sidebar_label: Reverse-Proxy
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein Reverse-Proxy-Server ist ein Server, der als Vermittler zwischen den Endbenutzern und einem anderen Server fungiert. Websites und Spieleserver sind beliebte Gründe für die Implementierung eines Reverse-Proxys, die jeweils ihre eigenen verschiedenen Vorteile haben, darunter Sicherheit, einfacher Zugriff und Schutz.

In diesem Leitfaden werden wir den Prozess der Einrichtung eines universellen Reverse-Proxys für Websites sowie eines auf Spieleserver zugeschnittenen Reverse-Proxys untersuchen.

<InlineVoucher />

## Vorbereitung

Für die Einrichtung eines Reverse-Proxys benötigst du einen **Linux-Server** (z. B. einen VPS), der als Host für deinen Proxy-Server dient. In diesem Beispiel verwenden wir Ubuntu als Linux-Distribution, aber die Installationsschritte sollten bei den meisten Linux-Distributionen sehr ähnlich sein.

:::tip Empfohlene VPS-Spezifikationen
Für einen Reverse-Proxy, der auf Spieleserver zugeschnitten ist, empfehlen wir dringend, eine höhere Netzwerkgeschwindigkeit zu erwerben, insbesondere wenn dein Server viele Spieler hat. Das liegt daran, dass dein VPS rohes TCP/UDP direkt zwischen dem Client (Spieler) und dem Spieleserver streamen wird. Ansonsten sollte ein Server mit Basisspezifikationen und minimalen Upgrades für einen webbezogenen Proxy ausreichen. :)
:::

Wir empfehlen, den Proxy mit einer **Domain** einzurichten, die dir gehört. Für jede Subdomain, die du verwenden möchtest, solltest du einen `A`-DNS-Eintrag erstellen (z. B. `zapdocs.example.com`), der auf die IP-Adresse deines __Linux VPS__ verweist. Dies ist der Zugriff, den Benutzer verwenden, um auf deine Website oder deinen Spieleserver zuzugreifen.

### Zugriff auf VPS

Wenn dein Linux VPS bereit ist, musst du dich mit ihm verbinden. In unserer Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md) erfährst du mehr darüber, wie du das machst.

### Nginx installieren

Du wirst Nginx verwenden, um einen Reverse-Proxy-Server zu hosten, da es ein sehr leistungsfähiger und beliebter Open-Source-Webserver ist.

Nachdem du auf deinen VPS zugegriffen hast, verwende den folgenden Befehl, um Nginx zu installieren.
```
sudo apt install nginx
```

Nach der Installation musst du deine Firewall anpassen, um sicherzustellen, dass der Dienst über das Internet zugänglich ist. In diesem Leitfaden verwenden wir die **UFW Firewall**, da Nginx sich selbst als App registriert, wodurch sich die Einstellungen leicht anpassen lassen. Weitere Informationen zur UFW Firewall findest du in unserem Leitfaden [Linux Security Tips] (vserver-linux-security-tips.md).

:::note
Wenn du andere Firewalls (wie IPTables) verwendest, stelle bitte sicher, dass du Nginx den entsprechenden Firewall-Zugriff gewährst, insbesondere auf Port 80 und 443, wo der Nginx-Dienst ausgeführt wird.
:::

Du kannst Nginx-Profile überprüfen, indem du `sudo ufw app list` ausführst. In diesem Szenario würden wir die Option **Nginx Full** auswählen, die den Zugriff auf HTTP für Tests und HTTPS für die Produktion ermöglicht.
```
sudo ufw allow 'Nginx Full'
```

Nachdem Nginx nun eingerichtet ist, versuche, über einen Browser auf die Seite zuzugreifen, um sicherzustellen, dass sie wie erwartet funktioniert. Wenn die Testseite wie erwartet funktioniert, kannst du nun mit der Anleitung fortfahren.
```
http://[deine_serverip]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Für Websites

Ein Reverse-Proxy für Websites kann aus verschiedenen Gründen sehr nützlich sein, z. B. für die Umleitung zu internen Serverressourcen wie einer Vaultwarden-Instanz (ohne dass der Port in der URL angegeben werden muss) oder für die Weiterleitung des Benutzers an externe Inhalte, was für die Lastverteilung und den Schutz nützlich ist.

Einer der größten Vorteile besteht darin, dass Ihr Server Anfragen von beliebig vielen Quellen/Domains verarbeiten kann, im Gegensatz zu einem einzelnen Webserver, der auf Port 80/443 läuft.

### Nginx-Einrichtung

Erstelle zunächst einen Eintrag im Nginx-Verzeichnis für die zuvor ausgewählte Domain, bei der es sich in der Regel um eine Subdomain wie „zapdocs.example.com“ handelt, wie in unserem Beispiel.

:::important
Stelle sicher, dass du einen `A`-Eintrag einrichtest, der auf die IP-Adresse deines Proxyservers verweist, bevor du fortfährst. Ohne diesen Eintrag funktionieren die Domain und alle nachfolgenden Schritte nicht wie erwartet.
:::

Greife mit dem folgenden Befehl auf den Ordner „server block“ zu. Hier werden alle deine Proxy-Konfigurationen gespeichert.
```
cd /etc/nginx/sites-available/
```

Verwende nun den folgenden Befehl, um eine neue Konfigurationsdatei zu erstellen. Wir empfehlen, die verwendete Domain als Dateinamen zu verwenden, um die Identifizierung zu erleichtern (z. B. zapdocs.example.com). Ersetze `[your_filename]` durch den gewünschten Dateinamen.
```
sudo nano [deine_filename]
```

Dies sollte den nano-Editor öffnen, in dem du Inhalte eingeben kannst. Kopiere die folgende Vorlage in den Editor. Du musst `[your_domain]` durch die Domain ersetzen, die du als Proxy verwenden möchtest, gefolgt von `[your_target_server]` für den Zielserver, den du erreichen möchtest.

```
upstream targetServer {
    # Add the target server you aim to reach. This can be either:
    # Internal "localhost" redirect (e.g. 127.0.0.1:9090)
    # External server (e.g. 103.146.43.52:9000)
    server [deine_target_server];
}

server {
    listen 80;
    listen [::]:80;

    # Domain which should be handled (e.g. zapdocs.example.com)
    server_name [deine_domain];

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

Da nun alle Eingabewerte an deine Konfiguration angepasst sind, kannst du die Datei speichern und nano mit `STRG + X` beenden, gefolgt von `Y` zur Bestätigung und schließlich `ENTER`.

Jetzt musst du die Serverblockdatei aktivieren, indem du einen symbolischen Link zum aktiven Verzeichnis erstellst.
```
sudo ln -s /etc/nginx/sites-available/[deine_filename] /etc/nginx/sites-enabled/[deine_filename]
```

Um sicherzustellen, dass alles korrekt ist, insbesondere in Bezug auf die Syntax, kannst du mit `sudo nginx -t` überprüfen, ob Probleme auftreten. Wenn die Ausführung erfolgreich ist, besteht der letzte Schritt darin, Nginx neu zu starten, um den neuen Serverblock in Kraft zu setzen.
```
systemctl reload nginx.service
```

Nach dem Neustart des Dienstes solltest du nun testen, ob du in deinem Browser auf die Domain zugreifen kannst, die du für den Reverse-Proxy verwendet hast. Bei Erfolg sollte die Seite den gewünschten Inhalt laden, den du als Parameter `targetServer` festgelegt hast. Wenn du auf Probleme stößt, empfehlen wir, die Protokolle zur Fehlerbehebung mit `journalctl -f -u nginx.service` zu überprüfen, um mögliche Fehler zu identifizieren.

## Für Spieleserver

Ein Reverse-Proxy für Spieleserver kann aus verschiedenen Gründen sehr vorteilhaft sein, unter anderem, weil er eine zusätzliche Sicherheits- und Zuverlässigkeitsebene bietet, indem er die Schadensbegrenzung verbessert und den Zugriff auf den Haupt-Host einschränkt.

:::tip
Die meisten dedizierten Spieleserver sollten mit einem von dir eingerichteten Raw-TCP/UDP-Endpunkt-Proxy einwandfrei funktionieren. Bei einer kleinen Minderheit von Spielen wie BeamMP kann es jedoch sein, dass sie nicht gut mit VPNs und Proxys funktionieren, sodass du sie für jedes Spiel einzeln testen musst.
:::

### Nginx-Einrichtung

Für diese Einrichtung wird das **Nginx Stream**-Modul benötigt, das standardmäßig installiert sein sollte. Du fügst einen neuen `Stream`-Block zur Hauptdatei `nginx.conf` hinzu, in dem du den Upstream-Server und den Port definierst, über den er auf deinem Proxy aufgerufen werden soll.

Öffne die Datei einfach mit dem folgenden Befehl.
```
sudo nano /etc/nginx/nginx.conf
```

Kopiere nun die folgende Vorlage in diese Datei, um einen neuen `stream`-Block hinzuzufügen. Du musst `[deine_target_server]` durch den Server ersetzen, zu dem du streamen möchtest, einschließlich des entsprechenden Ports (z. B. `:30120` für FiveM). Ersetze auf ähnliche Weise `[deine_port_listener]` durch den Port, über den Personen über den Proxyserver auf deine Inhalte zugreifen sollen.

```
stream {
    upstream targetServer {
        # Add the target server you aim to reach (e.g. 103.146.43.52:30120)
        server [deine_target_server];
    }

    server {
        # Listener port which accepts and bridges connections (e.g. 30120)
        listen [deine_port_listener];
        proxy_pass targetServer;
    }
}
```

Im Wesentlichen lauscht Nginx an dem spezifischen Port auf eingehende Verbindungen und streamt alles an den von dir definierten Zielserver (von deinem Proxyserver zu deinem echten Spielserver).

Da nun alle Eingabewerte an deine Konfiguration angepasst sind, kannst du die Datei speichern und nano mit `STRG + X` beenden, gefolgt von `Y` zur Bestätigung und schließlich `ENTER`.

Um sicherzustellen, dass alles korrekt ist, insbesondere in Bezug auf die Syntax, kannst du mit `sudo nginx -t` überprüfen, ob Probleme auftreten. Wenn die Ausführung erfolgreich ist, besteht der letzte Schritt darin, Nginx neu zu starten, damit die neue Konfiguration wirksam wird.
```
systemctl reload nginx.service
```

Nach dem Neustart des Dienstes solltest du versuchen, dich über die Proxy-Domain mit deinem Spielserver zu verbinden. Bei Erfolg solltest du dich mit dem Spielserver verbinden können, insbesondere mit dem Server, den du als Parameter `targetServer` festgelegt hast. Wenn du auf Probleme stößt, empfehlen wir, die Protokolle mit `journalctl -f -u nginx.service` auf Fehler zu überprüfen, um mögliche Fehler zu identifizieren.

## SSL-Zertifikat

Nachdem der von dir gewählte Reverse-Proxy nun eingerichtet ist, empfehlen wir dringend, ein SSL-Zertifikat zu deinen verwendeten Domains hinzuzufügen, um sicherzustellen, dass die Website Daten sicher über HTTPS überträgt.

Bitte lies dir unsere Anleitung [Install Certbot](vserver-linux-certbot.md) durch, die den gesamten Prozess der Beantragung und automatischen Verlängerung von SSL-Zertifikaten für deine Domain(s) abdeckt.

## Abschluss

Du hast erfolgreich einen Reverse-Proxy für eine Website oder deinen Spieleserver (oder beides :) eingerichtet, der dir verschiedene Verbesserungen in Bezug auf Sicherheit, Zuverlässigkeit und Leistung bietet.