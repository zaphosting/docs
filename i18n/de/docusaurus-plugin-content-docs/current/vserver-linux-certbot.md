---
id: vserver-linux-certbot
title: "VPS: Installation von Certbot"
description: Informationen zur Einrichtung von Certbot auf deinem Linux VPS von ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Certbot installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

SSL-Zertifikate sind ein wesentlicher Bestandteil des Internets und stellen sicher, dass Daten sicher zwischen Client und Host übertragen werden können. In diesem Leitfaden werden wir den Prozess der Einrichtung des Open-Source-Tools [**Certbot**](https://certbot.eff.org/) zur Beantragung kostenloser SSL-Zertifikate bei der gemeinnützigen Zertifizierungsstelle **Let's Encrypt** untersuchen.

<InlineVoucher />

## Vorbereitung

Du musst einen Linux VPS vorbereiten, auf dem ein Webserver wie Nginx oder Apache installiert und eingerichtet ist. In unserem Beispiel verwenden wir Nginx, da es sich um einen leistungsstarken und beliebten Open-Source-Webserver handelt. In unserem [Linux Proxy](vserver-linux-proxy.md)-Leitfaden findest du Hilfe bei der Einrichtung.

Um Certbot nutzen zu können, benötigst du eine **Domain**, die dir gehört. Für jede Subdomain, die du verwenden möchtest, solltest du einen `A`-DNS-Eintrag erstellen (z. B. `zapdocs.example.com`), der auf die IP-Adresse deines __Linux VPS__ verweist. Dies ist der Weg, über den Benutzer auf deine Website oder deinen Spieleserver zugreifen.

## Installation

Wenn dein Nginx-Webserver und deine Domain bereit sind, kannst du mit der Installation von Certbot auf deinem Server fortfahren.

:::wichtig Deaktiviere den permanenten DDoS-Schutzmodus
Bitte stelle sicher, dass der DDoS-Schutz auf deinem VPS über den Abschnitt **DDoS-Manager** auf der Weboberfläche deines Produkts auf **Sentry-Modus** eingestellt ist. Verwende nicht den permanenten Modus, da es sonst wahrscheinlich zu Problemen beim Abschließen von ACME-Herausforderungen von Certbot kommt, da echte Anfragen blockiert werden.
:::

### Einrichtung von Certbot

Beginne mit der Installation des Open-Source-Pakets [**Certbot**](https://certbot.eff.org/), das du verwenden wirst, um kostenlose SSL-Zertifikate von **Let's Encrypt** anzufordern.
```
sudo apt install certbot python3-certbot-nginx
```

Nachdem Certbot nun installiert ist, kannst du Zertifikate für deine Domain(s) anfordern. Wir empfehlen die Verwendung der standardmäßigen **ACME Challenge**-Methode, bei der die Einrichtung mit einem Klick erfolgt und die Domain automatisch überprüft und der Nginx-Serverblock für dich bearbeitet wird. Wenn du jedoch Probleme damit hast, kannst du alternativ die **TXT**-DNS-Eintragsmethode verwenden, die eine manuellere Einrichtung erfordert.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="acme" label="ACME Challenge (recommended)" default>

#### Verifizierung über ACME Challenge

Nachdem Certbot nun installiert ist, kannst du mit dem folgenden Befehl Zertifikate für deine Domain anfordern. Wenn du eine Root-Domain (z. B. `example.com`) verwendest, empfehlen wir dir, ein Zertifikat sowohl für die `www.`- als auch für die Nicht-`www.`-Version anzufordern. In unserem Beispiel werden wir ein Zertifikat für die Subdomain `zapdocs.example.com` anfordern.
```
# For Root Domains
certbot --nginx -d [deine_root_domain] -d www.[deine_root_domain]

# For Sub-Domains
certbot --nginx -d [deine_domain]
```

Nach Ausführung des Befehls folge der interaktiven Einrichtung, bei der du aufgefordert wirst, eine E-Mail-Adresse für die Zertifikatskommunikation einzugeben, gefolgt von einer optionalen Mailingliste und den Allgemeinen Geschäftsbedingungen, die du akzeptieren musst.

Certbot sollte nun eine ACME-Challenge erstellen und die angeforderten Domains automatisch verifizieren. Bei Erfolg gibt Certbot Zertifikate für die angeforderten Domains zurück und bearbeitet automatisch den Nginx-Serverblock, um Port 443 (HTTPS) zu akzeptieren und Pfade zu den Zertifikaten hinzuzufügen.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

</TabItem>

<TabItem value="txtrecord" label="TXT DNS Record">

#### Verifizierung über TXT-DNS-Eintrag

Wenn du Schwierigkeiten oder Probleme bei der Verifizierung deiner Domain über die ACME-Challenge-Methode (Standardmethode) hast, kannst du stattdessen versuchen, eine DNS-Challenge zu verwenden, bei der du einen **TXT**-DNS-Eintrag mit dem von Let's Encrypt bereitgestellten Wert erstellen musst.

Bei dieser Methode müssen Sie Ihren Serverblock mit den Zertifikatpfaden manuell bearbeiten. Daher empfehlen wir die Verwendung der ACME-Methode als Hauptmethode, die dies automatisch mithilfe des Parameter-Add-ons `--nginx` erledigt. Ebenso können Sie die Zertifikate mit dieser Methode nicht einfach automatisch erneuern.

Führen Sie einfach den folgenden Befehl aus und ersetzen Sie dabei `[deine_domain]` durch die von Ihnen verwendete Domain.
```
certbot certonly -d [deine_domain] --preferred-challenges dns-01 --manual -m [deine_domain]
```

Nach der Ausführung des Befehls musst du einen neuen **TXT**-Eintrag mit dem in der Konsole zurückgegebenen Wert einrichten (der mit dem Präfix `_acme-challenge.` vor deiner Domain versehen sein sollte). In unserem Beispiel würden wir einen **TXT**-Eintrag für `_acme-challenge.zapdocs.example.com` mit dem angegebenen Wert erstellen.

Nachdem du den Eintrag erstellt hast, drücke die Eingabetaste, um fortzufahren. Wenn alles korrekt ist und weitergegeben wurde, werden die Zertifikate erstellt und unter dem Pfad `/etc/letsencrypt/live/[deine_domain]` gespeichert.

Nun musst du zu deiner Serverblockdatei zurückkehren. Dies kannst du tun, indem du den Befehl `sudo nano /etc/nginx/sites-available/[deine_domain]` ausführst.

In der Datei solltest du entweder die Port-80-Listener (HTTP) durch Port-443-Listener (HTTPS) ersetzen oder sie separat hinzufügen, je nachdem, ob du den Inhalt auch über HTTP zugänglich halten möchtest.
```
listen 443 ssl;
listen [::]:443 ssl;
```

Am wichtigsten ist, dass du die Pfade zu dem von dir erstellten SSL-Zertifikat manuell definieren musst. Füge unterhalb des Parameters `server_name` die folgenden Zeilen hinzu und ersetze dabei `[deine_domain]` durch die von dir verwendete Domain.
```
server_name
...
# SSL Certificates
ssl_certificate /etc/letsencrypt/live/[deine_domain]/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/[deine_domain]/privkey.pem;
```

Speichere die Datei und beende nano mit `STRG + X`, gefolgt von `Y` zur Bestätigung und schließlich `ENTER`.

Um sicherzustellen, dass alles korrekt ist, insbesondere in Bezug auf die Syntax, kannst du mit `sudo nginx -t` überprüfen, ob Probleme auftreten. Wenn die Ausführung erfolgreich ist, besteht der letzte Schritt darin, Nginx neu zu starten, damit die neue Konfiguration wirksam wird.
```
systemctl reload nginx.service
```

</TabItem>
</Tabs>

Du hast erfolgreich ein SSL-Zertifikat für deine Domain(s) eingerichtet. Nachdem Nginx neu gestartet wurde, solltest du nun versuchen, über HTTPS auf die von dir verwendete Domain zuzugreifen, um sicherzustellen, dass alles funktioniert. Wenn du auf Probleme stößt, empfehlen wir, die Protokolle mit `journalctl -f -u nginx.service` auf Fehler zu überprüfen, um mögliche Fehler zu identifizieren.

## Automatische Verlängerung

Schließlich empfehlen wir, einen Cronjob einzurichten, um die SSL-Zertifikate in regelmäßigen Abständen automatisch zu erneuern, und zwar erneut mit Certbot. Dies kann einfach über das Crontab-Menü mit `crontab -e` erfolgen.

Wenn du dies zum ersten Mal verwendest, wirst du möglicherweise aufgefordert, einen Editor auszuwählen. Wir empfehlen, die erste Option auszuwählen, die `/bin/nano` lauten sollte.

Wenn die Datei nun in nano geöffnet ist, füge einfach die folgende Zeile hinzu, um die Verlängerung täglich um 6 Uhr Ortszeit durchzuführen.
```
0 6 * * * certbot renew
```

Speichere die Datei und beende nano mit `STRG + X`, gefolgt von `Y` zur Bestätigung und zuletzt `ENTER`. Du hast die automatische Verlängerung mit Certbot für deine SSL-Zertifikate erfolgreich eingerichtet.

## Abschluss

Du hast Certbot erfolgreich für deine Domain(s) mit Nginx eingerichtet und stellst damit eine sichere Datenübertragung über HTTPS für deine Website bereit.