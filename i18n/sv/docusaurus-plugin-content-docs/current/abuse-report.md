---
id: abuse-report
title: "Rapportera missbruk och olagligt innehåll – Allt du behöver veta!"
description: "Lär dig hur du identifierar och rapporterar nätmissbruk för att effektivt skydda användare och tjänster → Läs mer nu"
sidebar_label: Rapportera Missbruk
---

## Introduktion

Internet skapar värde. Missbruk skadar användare och tjänster. Vårt mål är att snabbt upptäcka och stoppa incidenter. Du kan rapportera misstänkt missbruk till vårt Abuse Team. Vi granskar varje rapport, sparar bevis, agerar enligt gällande lag och våra riktlinjer, och informerar behöriga myndigheter när det krävs.

## Typ av missbruk

Missbruk kan dyka upp på olika sätt. Rapportera alla fall som passar in eller ligger nära kategorierna nedan:

<details>
  <summary>Spam</summary>

Oönskade eller massutskickade meddelanden via våra system eller hostat innehåll som triggar spamfilter. Varianter inkluderar e-postspam, kommentarsspam, SEO-länkspam och automatiserad kontoskapning. Bifoga exempelmeddelanden, headers, avsändar-IP:er och sändningsmönster.

</details>

<details>
  <summary>Attacker och DDoS</summary>

Fientlig trafik som syftar till att störa tjänster eller undersöka system. Vanliga former är volymbaserade L3/L4-floods, HTTP lager-7-floods, amplification, brute-force-inloggningar och aggressiva portskanningar. Tecken är toppar i PPS eller Mbps, höga 4xx/5xx-frekvenser och upprepade autentiseringsfel från roterande källor.

</details>

<details>
  <summary>Upphovsrätts- och varumärkesintrång</summary>

Oauktoriserad spridning av skyddade verk eller missbruk av registrerade varumärken. Varianter inkluderar piratkopieringsmirrorar, crackade nedladdningar, varumärkesförfalskning och vilseledande domäner. Ange verket, rättighetsinnehavaren, exakt plats och auktorisationsstatus.

</details>

<details>
  <summary>Phishing</summary>

Innehåll som är utformat för att samla in inloggningsuppgifter eller betalningsdata genom att imitera betrodda varumärken. Varianter inkluderar falska inloggningssidor, fakturabedrägerier, QR- eller bilagelurar och MFA-trötthet. Specificera målvarumärket, insamlingspunkterna och hur sidan skiljer sig från den legitima.

</details>

<details>
  <summary>GDPR</summary>

Oauktoriserad behandling, exponering eller läckage av personuppgifter. Typiska fall är öppna index, felkonfigurerade buckets, scraping utan laglig grund och offentliga loggar. Beskriv datatyper, omfattning, berörda personer och orsaken till exponeringen.

</details>

<details>
  <summary>CSAM/SAM</summary>

Allt material som visar sexuell exploatering av människor. Nolltolerans.

</details>

<details>
  <summary>Olagligt innehåll</summary>

Innehåll som bryter mot gällande lag, som extremistpropaganda, hot, hatretorik, uppmaning till våld eller förtal. Varianter inkluderar doxxing, explicita hot och material förbjudet enligt jurisdiktion. Ange exakt plats och, om känt, den juridiska grunden.

</details>

<details>
  <summary>Annat</summary>

Missbruk som inte passar ovan men ändå skadar användare eller system. Exempel är malware-hosting, botnet C2, bedrägeri och obehörig kryptomining. Dela hashar, URL:er, C2-mönster och avvikelser i resursanvändning.

</details>

## Nödvändig information

För att säkerställa en komplett och hanterbar rapport, ge så mycket detaljer som möjligt så att vi kan identifiera resursen, verifiera incidenten och vidta rätt åtgärder, inklusive:
- Plats. URL, IP, port, värdnamn, filväg, hash
- Tidsstämplar i UTC i formatet ÅÅÅÅ-MM-DDTHH:MM:SSZ
- Beskrivning. Vad hände, hur upptäcktes det, observerad påverkan
- Bevis. Skärmdumpar, textloggar, fullständiga e-postmeddelanden med headers som EML, kort PCAP, NetFlow, HTTP-headers

## Accepterade filer och leverans

Skicka bevis i tydliga format och på ett sätt vi kan komma åt pålitligt. Bifoga mindre filer i ditt mail eller hosta stora filer externt. Bifoga små till medelstora filer direkt. Föredra öppna, oförändrade format. Rå text är bättre än skärmdumpar av text.

För stora filer, dela en stabil nedladdningslänk. Den ska kunna hämtas utan interaktion eller innehålla tydliga inloggningsuppgifter. Ange giltighetstiden för länken. Lägg till checksummor för att verifiera integritet.

Använd standardformat som TXT, PDF, PNG, JPG, PCAP eller PCAPNG, EML, HAR, CSV och JSON. Inkludera inte lösenord, privata nycklar eller fullständiga personuppgifter om det inte är absolut nödvändigt.

För kvalitet, skicka e-post som EML med fullständiga headers, loggar som ren text, nätverksspår som korta och relevanta PCAP- eller PCAPNG-filer och skärmdumpar i originalupplösning.

För säkerhet, maska eventuella hemligheter; om det behövs, lägg filerna i ett lösenordsskyddat arkiv och dela lösenordet separat. För CSAM/SAM, skicka aldrig filer, endast länkar.

## Kontakta oss

Skicka din rapport till `abuse@zap-hosting.com`. Viktigt att använda en tydlig ämnesrad som `Abuse Report Phishing` eller `Abuse Report DDoS`. Skicka ett mail per incident. Exemplet nedan visar en komplett förfrågan:

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
"Upprepade SSH-inloggningsförsök med roterande användarnamn och käll-IP:er. Upptäckt via avvikelser i auth.log och förhöjd anslutningsfrekvens. Lösenordsautentisering avstängd efter upptäckt. Ingen lyckad inloggning observerad."

Evidence:
- utdrag ur auth.log med flera "Failed password" och "Invalid user"
- fail2ban-logg med bans och källadresser
- 60-sekunders PCAP som fångar TCP-försök till port 22
- Sammanlagda antal: 12 438 försök från 352 käll-IP:er
- Toppkällor med ASN-information

Sample log excerpt:
2025-08-23T09:55:17Z sshd[2173]: Failed password for invalid user admin from XXX.X.XXX.XX port XXXX ssh2
2025-08-23T09:55:18Z sshd[2173]: Failed password for root from XXX.X.XX
```

## Vad händer sen?

Vårt Abuse Team hanterar din rapport så snabbt som möjligt och svarar snabbt. Vi granskar incidenten och prioriterar efter allvarlighetsgrad.

Baserat på granskningen vidtar vi åtgärder som kundnotifiering, tillfällig eller permanent avstängning, borttagning av rapporterat innehåll, bevarande av bevis och underrättelse till behöriga myndigheter när det behövs.