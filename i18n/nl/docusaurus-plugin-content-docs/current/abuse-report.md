---
id: abuse-report
title: "Misbruik en illegale content melden - Alles wat je moet weten!"
description: "Ontdek hoe je online misbruik herkent en meldt om gebruikers en diensten effectief te beschermen → Leer het nu"
sidebar_label: Misbruik Melden
---

## Introductie

Het internet creëert waarde. Misbruik schaadt gebruikers en diensten. Ons doel is om incidenten snel te detecteren en te stoppen. Jij kunt vermoedens van misbruik melden bij ons Abuse Team. Wij bekijken elke melding, bewaren bewijsmateriaal, handelen volgens de wet en onze regels, en informeren de bevoegde instanties wanneer dat nodig is.

## Soorten Misbruik

Misbruik kan op verschillende manieren voorkomen. Meld elk geval dat binnen of dicht bij onderstaande categorieën valt:

<details>
  <summary>Spam</summary>

Ongevraagde of bulkberichten die via onze systemen of gehoste content worden verstuurd en spamfilters triggeren. Varianten zijn e-mailspam, commentaarspam, SEO-linkspam en automatische accountaanmaak. Lever voorbeeldberichten, headers, afzender IP’s en verzendpatronen aan.

</details>

<details>
  <summary>Aanvallen en DDoS</summary>

Vijandig verkeer dat bedoeld is om diensten te verstoren of systemen te scannen. Veelvoorkomende vormen zijn volumetrische L3/L4 floods, HTTP layer-7 floods, amplificatie, brute-force inlogpogingen en agressieve poortscans. Signalen zijn pieken in PPS of Mbps, verhoogde 4xx/5xx fouten en herhaalde authenticatiefouten van wisselende bronnen.

</details>

<details>
  <summary>Auteursrecht- en merkinbreuk</summary>

Ongeautoriseerde verspreiding van beschermde werken of misbruik van geregistreerde merken. Varianten zijn piraterijspiegels, gekraakte downloads, merkimmitaties en misleidende domeinen. Geef het werk, de rechthebbende, exacte locatie en autorisatiestatus door.

</details>

<details>
  <summary>Phishing</summary>

Content die bedoeld is om inloggegevens of betaalgegevens te verzamelen door vertrouwde merken na te bootsen. Varianten zijn nep-loginpagina’s, factuurfraude, QR- of bijlage lokmiddelen en MFA-moeheid. Geef het doelmerk, vangpunten en verschillen met de legitieme site aan.

</details>

<details>
  <summary>AVG</summary>

Ongeautoriseerde verwerking, blootstelling of lekken van persoonsgegevens. Typische gevallen zijn open indexen, verkeerd geconfigureerde buckets, scraping zonder wettelijke basis en openbare logs. Beschrijf datacategorieën, omvang, getroffen personen en oorzaak van blootstelling.

</details>

<details>
  <summary>CSAM/SAM</summary>

Alle materiaal dat seksuele uitbuiting van mensen afbeeldt. Zero tolerance.

</details>

<details>
  <summary>Illegale content</summary>

Content die de wet overtreedt zoals extremistische propaganda, bedreigingen, haatzaaien, aanzetten tot geweld of laster. Varianten zijn doxxing, expliciete bedreigingen en materiaal dat in bepaalde jurisdicties verboden is. Geef de exacte locatie en, indien bekend, de juridische basis.

</details>

<details>
  <summary>Overig</summary>

Misbruik dat niet in bovenstaande categorieën past maar wel schade toebrengt aan gebruikers of systemen. Voorbeelden zijn malwarehosting, botnet C2, fraude en ongeautoriseerde cryptomining. Deel hashes, URL’s, C2-patronen en afwijkingen in resourcegebruik.

</details>

## Benodigde informatie

Voor een volledige en bruikbare melding, geef alsjeblieft zoveel mogelijk details zodat we de bron kunnen identificeren, het incident kunnen verifiëren en de juiste stappen kunnen zetten, waaronder:
- Locatie. URL, IP, poort, hostname, bestandslocatie, hash
- Timestamps in UTC in het formaat YYYY-MM-DDTHH:MM:SSZ
- Beschrijving. Wat is er gebeurd, hoe ontdekt, waargenomen impact
- Bewijsmateriaal. Screenshots, tekstlogs, volledige e-mail met headers als EML, korte PCAP, NetFlow, HTTP-headers

## Geaccepteerde bestanden en aanlevering

Lever bewijsmateriaal aan in duidelijke formaten die we betrouwbaar kunnen openen. Voeg kleinere bestanden toe aan je mail of host grote bestanden extern. Kleine tot middelgrote bestanden graag direct bijvoegen. Geef de voorkeur aan open, ongewijzigde formaten. Ruwe tekst is beter dan screenshots van tekst.

Voor grote bestanden deel je een stabiele downloadlink. Deze moet zonder interactie te downloaden zijn of duidelijke inloggegevens bevatten. Geef aan hoe lang de link geldig is. Voeg checksums toe voor integriteitscontrole.

Gebruik standaardformaten zoals TXT, PDF, PNG, JPG, PCAP of PCAPNG, EML, HAR, CSV en JSON. Voeg geen wachtwoorden, private keys of volledige persoonsgegevens toe tenzij strikt noodzakelijk.

Voor kwaliteit: stuur e-mails als EML met volledige headers, logs als platte tekst, netwerkcaptures als korte en relevante PCAP of PCAPNG bestanden, en screenshots in originele resolutie.

Voor veiligheid: redacteer geheimen; indien nodig plaats bestanden in een met wachtwoord beveiligd archief en deel het wachtwoord apart. Voor CSAM/SAM: verstuur geen bestanden, alleen links.

## Neem contact met ons op

Stuur je melding naar `abuse@zap-hosting.com`. Gebruik een duidelijke onderwerpregel zoals `Abuse Report Phishing` of `Abuse Report DDoS`. Stuur één mail per incident. Hieronder een voorbeeld van een complete melding:

```
To: abuse@zap-hosting.com
Subject: Abuse Report Brute Force (SSH)

Location:
- Target IP: XXX.XX.XXX.XX
- Service: SSH
- Port: 22
- Hostname: v12345.zap-hosting.com

Timestamps (UTC):
- First seen: 2025-08-23T09:12:04Z
- Last seen: 2025-08-23T10:03:31Z

Description:
"Repeated SSH login attempts with rotating usernames and source IPs. Detected via anomalies in auth.log and elevated connection rate. Password authentication disabled after detection. No successful login observed."

Evidence:
- auth.log excerpt with multiple "Failed password" and "Invalid user" entries
- fail2ban log snippet showing bans and source addresses
- 60-second PCAP capturing TCP attempts to port 22
- Aggregate counts: 12,438 attempts from 352 source IPs
- Top sources with ASN information

Sample log excerpt:
2025-08-23T09:55:17Z sshd[2173]: Failed password for invalid user admin from XXX.X.XXX.XX port XXXX ssh2
2025-08-23T09:55:18Z sshd[2173]: Failed password for root from XXX.X.XX
```

## Wat gebeurt er daarna

Ons Abuse Team verwerkt je melding zo snel mogelijk en reageert snel. We beoordelen het incident en prioriteren op ernst.

Op basis van de beoordeling nemen we acties zoals klantmelding, tijdelijke of permanente schorsing, verwijdering van de gemelde content, bewaring van bewijsmateriaal en melding aan bevoegde instanties wanneer nodig.