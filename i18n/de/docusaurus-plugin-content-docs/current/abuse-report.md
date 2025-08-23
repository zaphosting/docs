---
id: abuse-report
title: "Abuse und illegale Inhalte melden – Alles, was du wissen musst!"
description: "So meldest du Abuse und illegale Inhalte an ZAP-Hosting – ZAP-Hosting.com Dokumentation"
sidebar_label: Abuse melden
---

## Einführung

Das Internet schafft Möglichkeiten. Missbrauch schadet Nutzern und Diensten. Unser Ziel ist es, Vorfälle schnell zu erkennen und zu stoppen. Du kannst mutmaßlichen Missbrauch unserem Abuse Team melden. Wir prüfen jede Meldung, sichern Beweise, handeln gemäß geltendem Recht und unseren Richtlinien und benachrichtigen bei Bedarf die zuständigen Behörden.



## Arten von Abuse

Missbrauch kann in unterschiedlicher Form auftreten. Melde uns alle Fälle, die unter die folgenden Kategorien fallen oder diesen nahekommen:

<details>
  <summary>Spam</summary>

Unerwünschte oder massenhaft versendete Nachrichten über unsere Systeme oder gehostete Inhalte, die Spam auslösen. Varianten sind E-Mail-Spam, Kommentar-Spam, SEO-Linkspam und automatisierte Kontoerstellung. Liefere Beispielnachrichten, Header, Absender-IPs und Versandmuster.

</details>

<details>
  <summary>Angriffe und DDoS</summary>

Bösartiger Verkehr zur Störung oder Auskundschaftung von Diensten. Typen sind volumetrische L3 L4 Floods, HTTP Layer 7, Amplification, Brute-Force-Logins und aggressive Portscans. Achte auf Peaks in PPS oder Mbps, erhöhte 4xx 5xx Raten und viele Auth-Fehler aus rotierenden Netzen.

</details>

<details>
  <summary>Verstöße gegen Urheberrechte und Markenrechte</summary>

Unerlaubte Verbreitung geschützter Werke oder Missbrauch eingetragener Marken. Varianten sind Piracy-Mirrors, Cracks, Logo oder Markenimitation und irreführende Domains. Nenne Werk, Rechteinhaber, exakte Fundstelle und den Autorisierungsstatus.


</details>

<details>
  <summary>Phishing</summary>

Inhalte, die Zugangsdaten oder Zahlungsdaten durch Markenimitation abgreifen. Varianten sind Fake-Login-Portale, Rechnungsbetrug, QR- oder Anhang-Köder und MFA-Fatigue. Nenne Zielmarke, Erfassungsstellen und Unterschiede zur legitimen Seite.

</details>

<details>
  <summary>DSGVO</summary>

Unbefugte Verarbeitung, Offenlegung oder Leakage personenbezogener Daten. Häufige Fälle sind offene Verzeichnisse, falsch konfigurierte Buckets, Scraping ohne Rechtsgrundlage und öffentliche Logs. Beschreibe Datenkategorien, Umfang, betroffene Personen und die Ursache der Exposition.

</details>

<details>
  <summary>CSAM/SAM</summary>

Darstellungen sexueller Ausbeutung. Null Toleranz.

</details>

<details>
  <summary>Illegale Inhalte</summary>

Inhalte, die Recht verletzen wie extremistische Propaganda, Drohungen, Hassrede, Aufruf zu Gewalt oder Verleumdung. Varianten sind Doxxing, explizite Gewaltandrohungen und verbotene Materialien je Rechtsraum. Nenne die genaue Fundstelle und falls bekannt den rechtlichen Bezug.

</details>

<details>
  <summary>Sonstiges</summary>

Abuse ausserhalb der obigen Gruppen, der Nutzer oder Systeme schädigt. Beispiele sind Malware-Hosting, Botnet-C2, Betrug und unautorisiertes Kryptomining. Teile Hashes, URLs, C2-Muster und Auffälligkeiten bei Ressourcen.


</details>

## Benötigte Informationen

Um einen vollständigen und verwertbaren Meldung zu erstellen, gib bitte umfassende Angaben an, damit wir die Inhalten identifizieren, den Vorfall verifizieren und passende Maßnahmen einleiten können. Dazu gehören:

- Fundstelle. URL, IP, Port, Hostname, Dateipfad, Hash
- Zeitangaben in UTC im Format YYYY-MM-DDTHH:MM:SSZ
- Beschreibung. Was ist passiert, wie entdeckt, beobachtete Auswirkungen
- Belege. Screenshots, Textlogs, vollständige E Mail als EML mit Headern, kurzer PCAP Mitschnitt, NetFlow, HTTP Header



## Akzeptierte Dateien und Bereitstellung

Stelle Belege in klaren Formaten bereit und so, dass wir zuverlässig darauf zugreifen können. Hänge kleinere Dateien an die E Mail an oder stelle große Dateien extern bereit. Kleine bis mittlere Dateien kannst du direkt anhängen. Bevorzuge offene, unveränderte Formate. Reiner Text ist besser als Screenshots von Text.

Für große Dateien teile einen stabilen Downloadlink. Der Link muss ohne Interaktion abrufbar sein oder klare Zugangsdaten enthalten. Gib die Gültigkeitsdauer des Links an. Füge Prüfsummen hinzu, damit wir die Integrität prüfen können.

Verwende Standardformate wie TXT, PDF, PNG, JPG, PCAP oder PCAPNG, EML, HAR, CSV und JSON. Sende keine Passwörter, keine privaten Schlüssel und keine vollständigen personenbezogenen Daten, außer wenn es zwingend erforderlich ist.

Für die Qualität reiche E Mails als EML mit vollständigen Headern ein, Logs als reinen Text, Netzwerkmitschnitte als kurze und relevante PCAP oder PCAPNG Mitschnitte sowie Screenshots in Originalauflösung.

Für die Sicherheit schwärze Geheimnisse. Wenn nötig nutze ein passwortgeschütztes Archiv und übermittle das Passwort getrennt. Bei CSAM SAM keine Dateien übertragen, sondern nur Links bereitstellen.

## Nimm Kontakt mit uns auf

Sende uns deinen Bericht an `abuse@zap-hosting.com`. Es ist wichtig, einen eindeutigen Betreff zu verwenden, z. B. `Abuse Report Phishing` oder `Abuse Report DDoS`. Sende bitte nur eine E-Mail pro Vorfall. Das folgende Beispiel zeigt eine vollständige Anfrage:

```
An: abuse@zap-hosting.com
Betreff: Missbrauchsbericht Brute Force (SSH)

Standort:
- Ziel-IP: XXX.XX.XXX.XX
- Dienst: SSH
- Port: 22
- Hostname: v12345.zap-hosting.com

Zeitstempel (UTC):
- Erstmals gesehen: 2025-08-23T09:12:04Z
- Zuletzt gesehen: 2025-08-23T10:03:31Z

Beschreibung:
Wiederholte SSH-Anmeldeversuche mit wechselnden Benutzernamen und Quell-IPs. Erkannt durch Anomalien in auth.log und erhöhte Verbindungsrate. Passwortauthentifizierung nach Erkennung deaktiviert. Keine erfolgreiche Anmeldung beobachtet.

Beweise:
- Auszug aus auth.log mit mehreren Einträgen „Failed password” (Passwort fehlgeschlagen) und „Invalid user” (Ungültiger Benutzer)
- Ausschnitt aus fail2ban-Protokoll mit Sperren und Quelladressen
- 60-Sekunden-PCAP-Erfassung von TCP-Versuchen an Port 22
- Gesamtzahl: 12.438 Versuche von 352 Quell-IPs
- Top-Quellen mit ASN-Informationen

Beispiel-Log-Auszug:
2025-08-23T09:55:17Z sshd[2173]: Passwort für ungültigen Benutzer admin von XXX.X.XXX.XX Port XXXX ssh2 fehlgeschlagen
2025-08-23T09:55:18Z sshd[2173]: Passwort für root von XXX.X.XX fehlgeschlagen
```

## Wie es weitergeht

Unser Abuse Team bearbeitet deine Meldung so schnell wie möglich und antwortet umgehend. Wir prüfen den Vorfall und stufen ihn nach Schweregrad ein.

Auf Grundlage der Prüfung ergreifen wir Maßnahmen, darunter die Benachrichtigung des Kunden, die vorübergehende/dauerhafte Sperrung, die Entfernung der gemeldeten Inhalte, die Sicherung von Beweismitteln und gegebenenfalls die Benachrichtigung der zuständigen Behörden.