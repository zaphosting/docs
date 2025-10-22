---
id: abuse-report
title: "Missbrauch und illegale Inhalte melden – Alles, was du wissen musst!"
description: "Erfahre, wie du Online-Missbrauch erkennst und meldest, um Nutzer und Services effektiv zu schützen → Jetzt mehr erfahren"
sidebar_label: Missbrauch melden
---

## Einführung

Das Internet schafft Mehrwert. Missbrauch schadet Nutzern und Services. Unser Ziel ist es, Vorfälle schnell zu erkennen und zu stoppen. Du kannst vermuteten Missbrauch an unser Abuse Team melden. Wir prüfen jeden Bericht, sichern Beweise, handeln nach geltendem Recht und unseren Richtlinien und informieren bei Bedarf die zuständigen Behörden.

## Arten von Missbrauch

Missbrauch kann sich auf verschiedene Arten zeigen. Melde jeden Fall, der in die folgenden Kategorien passt oder ihnen nahekommt:

<details>
  <summary>Spam</summary>

Unaufgeforderte oder massenhaft versendete Nachrichten über unsere Systeme oder gehostete Inhalte, die Spamfilter auslösen. Varianten sind E-Mail-Spam, Kommentar-Spam, SEO-Link-Spam und automatisierte Kontoerstellung. Bitte gib Beispielnachrichten, Header, Absender-IP-Adressen und Versandmuster an.

</details>

<details>
  <summary>Angriffe und DDoS</summary>

Feindlicher Traffic, der darauf abzielt, Services zu stören oder Systeme auszuspähen. Häufige Formen sind volumetrische L3/L4-Floods, HTTP Layer-7-Floods, Amplification, Brute-Force-Logins und aggressive Portscans. Hinweise sind Spitzen bei PPS oder Mbps, erhöhte 4xx/5xx-Raten und wiederholte Authentifizierungsfehler von wechselnden Quellen.

</details>

<details>
  <summary>Urheberrechts- und Markenrechtsverletzungen</summary>

Unbefugte Verbreitung geschützter Werke oder missbräuchliche Nutzung eingetragener Marken. Varianten sind Piraterie-Spiegel, geknackte Downloads, Marken-Imitationen und irreführende Domains. Bitte gib das Werk, den Rechteinhaber, den genauen Ort und den Autorisierungsstatus an.

</details>

<details>
  <summary>Phishing</summary>

Inhalte, die darauf abzielen, Zugangsdaten oder Zahlungsinformationen durch Nachahmung vertrauenswürdiger Marken zu stehlen. Varianten sind gefälschte Login-Portale, Rechnungstricks, QR- oder Anhangs-Lockmittel und MFA-Fatigue. Gib die Zielmarke, Erfassungspunkte und Unterschiede zur legitimen Seite an.

</details>

<details>
  <summary>DSGVO</summary>

Unbefugte Verarbeitung, Offenlegung oder Leckage personenbezogener Daten. Typische Fälle sind offene Indizes, falsch konfigurierte Buckets, Scraping ohne Rechtsgrundlage und öffentliche Logs. Beschreibe Datenkategorien, Umfang, betroffene Personen und Ursache der Offenlegung.

</details>

<details>
  <summary>CSAM/SAM</summary>

Jegliches Material, das sexuelle Ausbeutung von Menschen darstellt. Null Toleranz.

</details>

<details>
  <summary>Illegale Inhalte</summary>

Inhalte, die geltendes Recht verletzen, wie extremistische Propaganda, Drohungen, Hassrede, Aufruf zu Gewalt oder Verleumdung. Varianten sind Doxxing, explizite Drohungen und juristisch verbotene Materialien. Gib den genauen Ort und, falls bekannt, die rechtliche Grundlage an.

</details>

<details>
  <summary>Sonstiges</summary>

Missbrauch, der nicht in die obigen Kategorien passt, aber dennoch Nutzer oder Systeme schädigt. Beispiele sind Malware-Hosting, Botnet-C2, Betrug und unautorisierte Kryptomining-Aktivitäten. Teile Hashes, URLs, C2-Muster und Auffälligkeiten bei der Ressourcennutzung mit.

</details>

## Erforderliche Informationen

Damit dein Bericht vollständig und handlungsfähig ist, gib bitte umfassende Details an, die uns helfen, die Ressource zu identifizieren, den Vorfall zu verifizieren und die richtigen Maßnahmen zu ergreifen, darunter:
- Ort: URL, IP-Adresse, Port, Hostname, Dateipfad, Hash
- Zeitstempel in UTC im Format YYYY-MM-DDTHH:MM:SSZ
- Beschreibung: Was ist passiert, wie entdeckt, beobachtete Auswirkungen
- Beweise: Screenshots, Text-Logs, komplette E-Mails mit Headern als EML, kurze PCAPs, NetFlow, HTTP-Header

## Akzeptierte Dateien und Bereitstellung

Stelle Beweise in klaren Formaten bereit, auf die wir zuverlässig zugreifen können. Kleinere Dateien kannst du an deine E-Mail anhängen, größere Dateien extern hosten. Kleine bis mittelgroße Dateien direkt anhängen. Bevorzuge offene, unveränderte Formate. Rohtext ist besser als Screenshots von Text.

Für große Dateien teile einen stabilen Download-Link. Er sollte ohne Interaktion abrufbar sein oder klare Zugangsdaten enthalten. Gib die Gültigkeitsdauer des Links an. Füge Prüfsummen zur Integritätsprüfung hinzu.

Verwende Standardformate wie TXT, PDF, PNG, JPG, PCAP oder PCAPNG, EML, HAR, CSV und JSON. Füge keine Passwörter, private Schlüssel oder vollständige persönliche Daten bei, außer es ist unbedingt nötig.

Für Qualität reiche E-Mails als EML mit vollständigen Headern ein, Logs als Klartext, Netzwerk-Traces als kurze und relevante PCAP- oder PCAPNG-Dateien und Screenshots in Originalauflösung.

Zur Sicherheit schwärze alle Geheimnisse; falls nötig, packe Dateien in ein passwortgeschütztes Archiv und teile das Passwort separat mit. Bei CSAM/SAM übermittle keine Dateien, sondern nur Links.

## Kontakt zu uns

Sende deinen Bericht an `abuse@zap-hosting.com`. Wichtig ist ein klarer Betreff wie `Abuse Report Phishing` oder `Abuse Report DDoS`. Pro Vorfall bitte eine E-Mail. Das folgende Beispiel zeigt eine vollständige Anfrage:

```
To: abuse@zap-hosting.com
Subject: Abuse Report Brute Force (SSH)

Location:
- Ziel-IP: XXX.XX.XXX.XX
- Service: SSH
- Port: 22
- Hostname: v12345.zap-hosting.com

Timestamps (UTC):
- Erstmalig gesehen: 2025-08-23T09:12:04Z
- Zuletzt gesehen: 2025-08-23T10:03:31Z

Beschreibung:
"Wiederholte SSH-Login-Versuche mit wechselnden Benutzernamen und Quell-IP-Adressen. Entdeckt durch Anomalien in auth.log und erhöhte Verbindungsrate. Passwort-Authentifizierung nach Entdeckung deaktiviert. Kein erfolgreicher Login beobachtet."

Beweise:
- auth.log-Auszug mit mehreren "Failed password" und "Invalid user"-Einträgen
- fail2ban-Log-Snippet mit Sperren und Quelladressen
- 60-Sekunden-PCAP mit TCP-Versuchen auf Port 22
- Gesamtanzahl: 12.438 Versuche von 352 Quell-IP-Adressen
- Top-Quellen mit ASN-Informationen

Beispiel Log-Auszug:
2025-08-23T09:55:17Z sshd[2173]: Failed password for invalid user admin from XXX.X.XXX.XX port XXXX ssh2
2025-08-23T09:55:18Z sshd[2173]: Failed password for root from XXX.X.XX
```

## Was passiert danach

Unser Abuse Team bearbeitet deinen Bericht so schnell wie möglich und antwortet zügig. Wir prüfen den Vorfall und priorisieren ihn nach Schweregrad.

Basierend auf der Prüfung ergreifen wir Maßnahmen wie Kundenbenachrichtigung, temporäre oder dauerhafte Sperrung, Entfernung der gemeldeten Inhalte, Beweissicherung und Benachrichtigung der zuständigen Behörden, wenn nötig.