---
id: webspace-plesk-ssl
title: "Webspace: Erstelle ein SSL-Zertifikat in Plesk"
description: "Lerne, wie du deine Website mit einem SSL-Zertifikat in Plesk absicherst und HTTPS für verschlüsselte Verbindungen aktivierst."
sidebar_label: SSL-Zertifikat erstellen
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

Ein SSL-Zertifikat verschlüsselt die Verbindung zwischen deiner Website und ihren Besuchern. Sobald HTTPS aktiviert ist, stellen Browser eine sichere Verbindung her und zeigen ein Schloss-Symbol in der Adressleiste an. Das schützt sensible Daten, erhöht das Vertrauen und verhindert, dass Browser deine Website als unsicher markieren.

<InlineVoucher />

## Absicherung deiner Hauptdomain

Wenn eine Domain in Plesk neu angelegt wird, ist sie zunächst über HTTP erreichbar und nicht verschlüsselt. Im Plesk Panel siehst du, dass noch kein Zertifikat zugewiesen ist. Öffnest du die Domain jetzt im Browser, wird sie meist als nicht sicher markiert:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Um die Verschlüsselung zu aktivieren, öffne die Domain in deinem Plesk Panel und navigiere zu **SSL/TLS-Zertifikate**. Das entsprechende Menü öffnet sich:

![img](https://screensaver01.zap-hosting.com/index.php/s/8rSr7Jt3DsjDzBY/download)

Hier kannst du ein kostenloses Let's Encrypt Zertifikat anfordern. Während des Antrags musst du eine gültige E-Mail-Adresse angeben und die Domainnamen auswählen, die abgesichert werden sollen. In den meisten Fällen sind sowohl die Root-Domain als auch die www-Subdomain ausgewählt, sofern der www-Eintrag in deiner DNS-Konfiguration existiert:

![img](https://screensaver01.zap-hosting.com/index.php/s/LTFN73ekPjtikwp/preview)

Nach Bestätigung des Antrags mit **Kostenlos erhalten** kommuniziert Plesk automatisch mit Let's Encrypt und stellt das Zertifikat aus. Sobald das Zertifikat erfolgreich erstellt wurde, sollte HTTPS erzwungen werden, indem du in den Hosting-Einstellungen die permanente Weiterleitung von HTTP auf HTTPS aktivierst:

![img](https://screensaver01.zap-hosting.com/index.php/s/BN7AMzG6MyMKb38/preview)

Nach der Aktivierung werden alle Besucher automatisch auf die verschlüsselte HTTPS-Version deiner Website weitergeleitet. Du kannst die Installation überprüfen, indem du deine Domain mit https im Browser öffnest.



## Absicherung aller Subdomains mit einem Wildcard-Zertifikat

Wenn du mehrere Subdomains nutzt oder planst, ist ein Wildcard-Zertifikat die effizientere Lösung. Es sichert die Hauptdomain sowie alle bestehenden und zukünftigen Subdomains ab. Um ein Wildcard-Zertifikat anzufordern, öffne erneut das Menü **SSL/TLS-Zertifikate**:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Wähle die Option, ein Let's Encrypt Zertifikat zu erneuern oder anzufordern. Aktiviere die Option, die Wildcard-Domain abzusichern:

![img](https://screensaver01.zap-hosting.com/index.php/s/ZMcdJk9wCzifBmq/preview)

Nach Bestätigung des Antrags zeigt Plesk eine blaue Infobox mit einem DNS TXT-Eintrag an, der erstellt werden muss:

![img](https://screensaver01.zap-hosting.com/index.php/s/wnbNfKeTMsCdsy9/preview)

Dieser TXT-Eintrag muss genau so in die DNS-Zone deiner Domain eingetragen werden. Er bestätigt den Domainbesitz und ermöglicht Let's Encrypt die Validierung des Antrags. Ein DNS-Eintrag sieht ungefähr so aus:

![img](https://screensaver01.zap-hosting.com/index.php/s/tDtDaERR7twzaMr/preview)

:::warning DNS-Verzögerung bei der Propagation
Die DNS-Propagation kann bis zu 24 Stunden dauern, bis der TXT-Eintrag weltweit erreichbar ist. In dieser Zeit kann die Validierung fehlschlagen, weil manche DNS-Server noch veraltete Infos liefern. Falls das passiert, warte, bis der Eintrag vollständig propagiert ist, und versuche die Verifizierung erneut.
:::



Um sicherzugehen, dass der TXT-Eintrag korrekt propagiert wurde und öffentlich erreichbar ist, kannst du ihn mit einem externen DNS-Tool wie dem MXToolbox SuperTool überprüfen:

https://mxtoolbox.com/SuperTool.aspx

Öffne die Website und wähle die Option **TXT Lookup**. Gib den vollständigen Hostnamen ein, den Plesk angibt, meist im Format `_acme-challenge.deinedomain.com`, und starte die Abfrage. Das Tool fragt öffentliche DNS-Server ab und zeigt die aktuell sichtbaren TXT-Einträge an.

Wenn der korrekte Verifizierungswert genau so angezeigt wird, wie in Plesk, wurde der DNS-Eintrag erfolgreich propagiert und Let's Encrypt kann den Domainbesitz validieren. Wird kein Ergebnis angezeigt oder der Wert weicht ab, ist die DNS-Propagation wahrscheinlich noch im Gange. Warte in dem Fall und wiederhole die Abfrage später, bis der korrekte Eintrag weltweit sichtbar ist.

![img](https://screensaver01.zap-hosting.com/index.php/s/iFP5P8SY6oSXQBW/download)

Sobald der Eintrag sichtbar ist, kehre zu Plesk zurück und starte die Validierung erneut. Wenn sie erfolgreich ist, wird das Wildcard-Zertifikat ausgestellt und als geschützt angezeigt. Ab diesem Zeitpunkt werden alle neu erstellten Subdomains automatisch abgesichert.



## Fazit

Glückwunsch! Deine Website ist jetzt erfolgreich mit SSL-Verschlüsselung geschützt. Alle Daten, die zwischen deinem Server und den Besuchern übertragen werden, sind gesichert, Browser erkennen deine Domain als vertrauenswürdig und HTTPS wird automatisch erzwungen.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />