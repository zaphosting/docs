---
id: vserver_linux_jitsi
title: vServer: Jitsi Meet auf Server installieren
descriptin: Informationen, wie du die Videokonferenzsoftware Jitsi Meet auf deinen vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Jitsi Meet
---

## Was ist Jitsi Meet?


Jitsi Meet ist eine Open Source Videokonferenzsoftware mit der ihr eigene Videokonferenzen auf eurem Server einrichten könnt. Ein großer Vorteil von Jitsi Meet ist die einfache Handhabung: Es wird nur ein Browser benötigt (bei Verwendung von Handys die Jitsi App) und es ist keine Anmeldung bei fremden Diensten möglich. Jede Videokonferenz erhält eine eigene URL, mit der der Videokonferenz beigetreten werden kann. Jitsi Meet eigent sich perfekt, um Videokonferenzen auch mit technisch wenig versierten Menschen durchzuführen.
Achtung: Ohne weitere Einstellungen hat jeder, der den Jitsi-Meet-Server aufruft, die Möglichkeit, eigene Videokonferenzen auf dem Server zu starten.




## Jitsi Meet auf einem Debian Server installieren

Im Folgenden zeigen wir, wie ihr einen Jitsi Meet Server auf einem Debian Server installiert. Grundsätzlich funktioniert Jitsi Meet auch auf anderen Linux-Servern, z. B. mit Ubuntu, und die Installation ist sehr ähnlich.

### Vorbereitungen

Um Jitsi Meet vernünftig nutzen zu können, solltet ihr eine eigene Domain verwenden, über die ihr den Jitsi-Server aufrufen könnt. Es ist sinnvoll eine eigene Subdomain für den Jitsi Meet-Server zu erstellen. Als Beispiel verwenden wir die Domain meet.zap-testdomain.de.
Bei Domains von ZAP-Hosting erstellt ihr dafür unter DNS-Verwaltung einen neuen Eintrag, in dem ihr im Feld "Name" den Namen der Subdomain angebt, und im Feld Wert die IP-Adresse eures Server. In unserem Beispiel wird unter Name "meet" angegeben und unter Wert die IP-Adresse des ZAP-Testservers auf den wir Jitsi Meet installieren werden: 185.239.239.49 (trage die IP deines Server ein, nicht diese Beispiel-IP)


Eine eigene Domain ist nicht zwingend notwendig, um Jitsi Meet zu verwenden. Ihr könnt euch über die IP-Adresse auf einen Jitsi Meet-Server verbinden. Für das SSL-Zertifikat wird jedoch eine Domain benötigt. Ohne Domain gibt der Browser dann eine Sicherheitswarnung aus.

Ist die Subdomain eingestellt (es kann bis zu 24h dauern, bis Änderungen aktiv werden), könnt ihr euren Server für die Installation vorbereiten.
Verbindet euch über Putty oder WinSCP mit eurem Server.
Bevor ihr fortfahrt stellt sicher, dass der Server geupdated ist. Ggf. muss jeder Befehl zusätzlich mit Superuser-Rechten gestartet werden. Fügt vor dem Befehl dann "sudo" hinzu (z. B. "sudo apt-get update")
```
$	apt-get update
```
```
$	apt-get upgrade
```

Wenn keine Firewall auf dem Server installiert ist, könnt ihr eine Firewall, z. B. UFW installieren:
```
$	apt install ufw
```

Nehmt folgende Einstellungen an der Firewall vor:

```
$	ufw allow OpenSSH
$	ufw allow 80/tcp
$	ufw allow 443/tcp
$	ufw allow 4443/tcp
$	ufw allow 10000/udp
```

Aktiviert die Firewall:
```
$	ufw enable
```

Überprüft den Status:
```
$	ufw status
```

### Installation von Jitsi Meet

Um Jitsi Meet zu installieren, wird als erstes das gnupg-Paket benötigt:
```
$	apt install gnupg
```

Nach der Paketinstallation wird der Jitsi-GPG-Schlüssel heruntergeladen sowie der GPG-Schlüssel hinzugefügt:
```
$	wget https://download.jitsi.org/jitsi-key.gpg.key
```
```
$	apt-key add jitsi-key.gpg.key
```

Um Jitsi Meet installieren zu können muss noch das Jitsi-Repository hinzugefügt werden:
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

Im Editor wird folgende Zeile hinzugefügt. Danach kann die Änderung gespeichert und der Editor wieder geschlossen werden:
```
$	deb https://download.jitsi.org stable/
```

Jetzt kann Jitsi Meet installiert werden. Es wird empfohlen, sämtliche installierten Pakete noch einmal upzudaten:
```
$	apt update
```
```
$	apt install jitsi-meet
```

Während der Installation werdet ihr aufgefordert einen Hostnamen einzugeben. Gebt hier die Subdomain ein, die ihr für euren Jitsi Meet-Server erstellt habt. Im Beispiel unseres Testservers, ist das: meet.zap-testdomain.de

![image](https://user-images.githubusercontent.com/13604413/172061367-4edb06c0-46ff-4c50-a913-77e9f72e5955.png)

Bestätigt die Eingabe mit "Ok". Es öffnet sich ein neues Fenster, in dem ihr gefragt werden, ob ein selbstsigniertes TLS-Zertifikat erstellt werden soll oder ein bestehendes verwendet werden soll. Wählt die Option "Generate a new self-signed certificate" aus:

![image](https://user-images.githubusercontent.com/13604413/172061376-1a4489b5-eb67-4d67-b8a8-143e704d9e39.png)

Die Installation von Jitsi Meet ist damit abgeschlossen und jetzt muss nur noch TLS-Zertifikat abgerufen werden.
Installiere hierzu das Paket Certbot:
```
$	apt install certbot
```

Führe das Script für das Installationsprogramm für TLS-Zertifikate aus:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

Während der Ausführung wirst du aufgefordert, eine Email-Adresse, die an letsenrypt.org übermittelt wird, anzugeben. Gebe eine Email-Addresse an und bestätige mit Eingabe.


Danach sollte Jitsi Meet auf deinem Server vollständig installiert und aktiv sein. Um zu Testen, ob Jitsi Meet richtig installiert wurde, gebe einfach die eingerichtete Subdomain in die URL-Bar deines Browser ein. Im diesem Tutorial ist das:
```
https://meet.zap-testdomain.de
```

Lädt die Seite mit Jitsi Meet, kannst du direkt deine 1. Videokonferenz starten.
