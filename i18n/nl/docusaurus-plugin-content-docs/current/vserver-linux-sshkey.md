---
id: vserver-linux-sshkey
title: "VPS: SSH-sleutels genereren en gebruiken voor Linux-servers"
description: "Ontdek hoe je veilig SSH-sleutels genereert en beheert voor je Linux-server om je verbinding veiliger te maken en meer controle te krijgen → Leer het nu"
sidebar_label: SSH-sleutel
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## SSH-sleutel genereren

Voor een veel veiligere verbinding dan een gewone SSH-wachtwoordverbinding, raden we het gebruik van SSH-sleutels aan. Open hiervoor de tab "**Toegang & Beveiliging**" in het dashboard van je Linux-server.

![](https://screensaver01.zap-hosting.com/index.php/s/wJCtHY44dYiYoqX/preview)

In "**Toegang & Beveiliging**" kun je nu een sleutel genereren met de knop "**Genereer SSH-sleutel**".  
Zodra je deze indrukt, opent er een popup en wordt er direct een willekeurig gegenereerde sleutel gedownload naar je pc.  
Om de sleutel aan de server toe te voegen, moet je op de knop "**Sleutel toevoegen**" klikken.

:::info
Bij Linux VPS’en wordt de sleutel direct toegevoegd. Bij Linux Root Servers moet de server opnieuw opgestart worden voordat de wijzigingen actief zijn.
:::

<InlineVoucher />

![](https://screensaver01.zap-hosting.com/index.php/s/GsER3sNYWYj8t7y/preview)

Heb je meer sleutels nodig? Druk dan in hetzelfde venster op de knop "**Genereer sleutel**".  
Met "**Sleutelnaam**" kun je een naam aan de sleutel geven, die dan in het ZAP-Hosting paneel wordt weergegeven. Dit is handig voor een beter overzicht.

Als alle gewenste sleutels zijn gegenereerd en toegevoegd, zie je ze nu onder "**Toegang & Beveiliging**".

![](https://screensaver01.zap-hosting.com/index.php/s/5yjACdnpyiw6E97/preview)

Heb je al een eigen publieke sleutel die je extern hebt gegenereerd en niet via ons paneel? Dan kun je die toevoegen door op het "**+**" icoon te klikken.

![](https://screensaver01.zap-hosting.com/index.php/s/H75CCTe5tTonn8y/preview)

Er opent een leeg veld waarin je je eigen publieke sleutel kunt plakken. Door op "**Sleutel toevoegen**" te klikken, wordt deze aan de server toegevoegd en verschijnt hij in ons paneel.

## OpenSSH naar PuTTY Private Key met PuTTYGen

De SSH-sleutels die via ons paneel worden aangemaakt, zijn in OpenSSH-formaat. Om deze met PuTTY te kunnen gebruiken, moeten ze eerst worden geconverteerd naar het PuTTY private key-formaat. Hiervoor gebruik je de software "**PuTTYGen**", die automatisch met PuTTY wordt geïnstalleerd.

De PuTTYGen-applicatie vind je in de PuTTY hoofdmap. Standaard staat de PuTTY-map, zoals in het voorbeeld, op "**C:>Program Files>PuTTY**".

Start PuTTYGen en klik vervolgens op "**Bestand**" -> "**Private key laden**".

![](https://screensaver01.zap-hosting.com/index.php/s/KNeiG7eWpWateDz/preview)

Open nu het bestand dat door ZAP-Hosting is gegenereerd. Ga hiervoor naar de standaardmap waar je downloads worden opgeslagen.

:::info
**Belangrijk:** Zorg dat je de filter op "**Alle bestanden**" zet, zoals in de afbeelding, want het .pri-bestand dat het systeem aanmaakt is anders niet zichtbaar.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/WQfWN264pJPKWYX/preview)

Als het bestand is geladen, kun je in de verschillende velden een commentaar en een wachtwoord voor de sleutel instellen. Om een wachtwoord in te stellen, vul je dit in bij zowel "**Key passphrase**" als "**Confirm passphrase**".  
*Tip:* Je kunt deze velden ook leeg laten en de sleutel zonder wachtwoord aanmaken, maar dat is minder veilig en dus niet aan te raden. Als alles naar wens is ingevuld, sla je de sleutel op met de knop "**Private key opslaan**".

![](https://screensaver01.zap-hosting.com/index.php/s/N4dKc86M95yYbtK/preview)

Geef dit .ppk-bestand een naam en sla het op zodat je het later makkelijk terugvindt.

## SSH-sleutelverbinding

Om de sleutel te gebruiken voor je verbinding, moet je deze eerst koppelen aan PuTTY. Ga hiervoor naar "**SSH**" - "**Auth**" - "**Bladeren...**".

![](https://screensaver01.zap-hosting.com/index.php/s/3BJ7NaG2AemGSZt/preview)

Zoek de sleutel die je net met PuTTYGen hebt gemaakt en klik op "**Openen**".

Om dit niet elke keer opnieuw te hoeven doen, kun je deze instellingen opslaan in de sessie. Klik hiervoor op "**Sessie**" - "**Standaardinstellingen**" - "**Opslaan**", zoals te zien is in de screenshot.

![](https://screensaver01.zap-hosting.com/index.php/s/zENfY7DBZk85mMa/preview)

Je kunt nu inloggen op de server met PuTTY. De "**Sleutelcommentaar**" die je in PuTTYGen hebt ingevuld, zie je dan terug.

## Inloggen met wachtwoord uitschakelen

SSH-sleutels zijn bedoeld om de beveiliging te verhogen. Als inloggen met een SSH-wachtwoord nog mogelijk is, is de beveiliging van je server nog niet optimaal. Daarom moet je het inloggen met wachtwoord nu uitschakelen. Dit werkt anders bij Linux VPS’en en Linux root servers. Als het inloggen correct is uitgeschakeld, kunnen alleen gebruikers met de door jou aangemaakte SSH-sleutel verbinding maken.

### Linux VPS

Je kunt het inloggen met wachtwoord makkelijk uitschakelen in de tab Toegang & Beveiliging.  
Klik op de knop **Wachtwoordlogin deactiveren** naast de knop Genereer SSH-sleutel.  
Zodra dit is uitgeschakeld, is het niet meer mogelijk om via wachtwoord in te loggen op de server.

![](https://screensaver01.zap-hosting.com/index.php/s/jd9NiypwxgpeMGe/preview)

De status bij "**SSH-login via wachtwoord**" wordt dan ook op "**Inactief**" gezet.

## Conclusie

Gefeliciteerd, je hebt je SSH-sleutel succesvol geïnstalleerd en ingesteld! Heb je nog vragen of problemen? Neem dan gerust contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />