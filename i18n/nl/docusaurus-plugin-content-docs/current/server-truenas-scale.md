---
id: server-truenas-scale
title: "TrueNAS SCALE installeren op een server - Bouw je eigen NAS-systeem"
description: "Ontdek hoe je TrueNAS SCALE installeert op je dedicated server voor netwerkopslag en bestandsdeling → Leer het nu"
sidebar_label: TrueNAS SCALE installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introductie

TrueNAS SCALE is een open-source opslagplatform waarmee je een netwerkopslag (NAS) systeem op een server kunt bouwen. In deze handleiding installeer je TrueNAS SCALE op een Dedicated Server en configureer je de eerste setup, inclusief opslagpools, gebruikersaccounts en SMB-bestandsdeling.

:::danger VPS Niet Geschikt
Onze VPS-producten zijn niet geschikt omdat ze slechts één virtuele schijf bevatten. Je kunt TrueNAS SCALE op een VPS installeren, maar je kunt geen opslagpools aanmaken omdat de hele schijf voor het besturingssysteem wordt gebruikt.

Voor het opzetten van TrueNAS SCALE is een [dedicated server configuratie](https://zap-hosting.com/en/dedicated-server-hosting/) met minimaal twee harde schijven vereist.
 :::

<InlineVoucher />

## Voorbereiding

Voordat je begint met de installatie, zorg dat je aan de volgende minimale systeemvereisten voldoet:

| Hardware   | Minimaal   | ZAP-Hosting Aanbeveling |
| ---------- | ---------- | ----------------------- |
| CPU        | 2 CPU-kernen | 8 vCPU-kernen          |
| RAM        | 8 GB       | 16 GB                   |
| Schijfruimte | 16 GB OS  | Afhankelijk van gebruik |

<InlineServiceLink />

Ga naar de officiële [TrueNAS website](https://www.truenas.com/download-truenas-scale/) en download de nieuwste stabiele release. Je kunt de ISO uploaden naar een publiek toegankelijke locatie (je eigen webserver of cloudopslag) of lokaal op je computer houden voor directe koppeling.

:::tip[ISO Hosting]
Als je via URL wilt mounten in de remote console, zorg dan dat de ISO-URL eindigt op `.iso` en publiek toegankelijk is zonder authenticatie.
:::

**ISO mounten**

Log in op je [ZAP-Hosting Dashboard](https://zap-hosting.com/en/customer/) en ga naar je Dedicated Server in de servicelijst. Open de serverbeheerpagina en klik op **Activate iLO** om toegang te krijgen tot de serverbeheerinterface.

![img](https://screensaver01.zap-hosting.com/index.php/s/or8HJ8e3QeAJm6z/preview)

In de iLO-interface vind je de optie **Integrated Remote Console**. Kies je favoriete console-type en start deze. Er opent een nieuw venster met directe toegang tot het scherm van je server.

Klik in de remote console bovenaan op het **CD-icoon** en selecteer **CD/DVD**. Kies **Scripted Media URL** als je de ISO online hebt geüpload en vul de directe URL in. Anders kies je **Local .iso File** om lokaal te bladeren. De ISO wordt dan gekoppeld aan de virtuele CD/DVD-drive.

![img](https://screensaver01.zap-hosting.com/index.php/s/F98tgjsqq2S6nqp/preview)

:::tip Alternatieve Methoden
Voor andere manieren om ISO te mounten, inclusief via de Virtual Media interface, zie de [Own ISO gids](dedicated-iso.md).
:::

Met de ISO gekoppeld, gebruik je het **Power** menu in de console om te herstarten. Kies **Reset** en de server start opnieuw op, bootend vanaf de TrueNAS SCALE ISO.

## Installatie

Houd de console in de gaten tijdens het opstarten. Het TrueNAS SCALE setup scherm verschijnt en de installer laadt automatisch. Het laden van de installatieomgeving duurt een paar minuten.

![img](https://screensaver01.zap-hosting.com/index.php/s/TJwMWFZeorwGryn/preview)

De installer toont **Choose destination media** met je beschikbare schijven. Navigeer met de **pijltjestoetsen** en selecteer de schijf voor het OS. Kies de kleinste schijf voor de OS-installatie (deze hele schijf wordt toegekend aan TrueNAS SCALE). Druk op **Space** om te selecteren, daarna op **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z5o7TFye6BPor7Q/preview)

Er verschijnt een waarschuwing dat de installatie alles op de geselecteerde schijf zal **wissen**. Navigeer naar **Yes** met de pijltjestoetsen en druk op **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/LS2mJBQ2deawKFp/preview)

De installer vraagt vervolgens naar de authenticatie-instelling. **Optie 1** stelt het wachtwoord nu in, terwijl **Optie 2** je later via de webinterface laat configureren. We kiezen **Optie 2: Configure using Web UI** voor meer flexibiliteit. Selecteer en druk op **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oPpMLCZ5nPePdLW/preview)

De installer vraagt **"Allow EFI boot?"**. Kies **Yes** (aanbevolen) en druk op **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/We8tqgctQrjz5oS/preview)

De installatie start en duurt meestal 15-20 minuten. Volg de voortgang op het scherm terwijl bestanden gekopieerd worden en het systeem zichzelf configureert.

![img](https://screensaver01.zap-hosting.com/index.php/s/BAykMjmxDn76sJB/preview)

Als het klaar is, zie je **"The TrueNAS installation is successful"**. Druk op **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/GmNwHaTfY6KHSbN/preview)

Voordat je herstart, **unmount de ISO** anders start je weer in de installer. Klik op het **DVD-icoon**, selecteer **CD/DVD** en klik op **Eject Media**. Herstart via het Power menu of laat het automatisch opnieuw opstarten.

<InlineServiceLink />

## Configuratie

Na de installatie moet je instellen vanaf welke schijf de server opstart. TrueNAS SCALE is geïnstalleerd, maar de server moet via de RAID-controller ROM-configuratie verteld worden vanaf de juiste schijf te booten.

:::info[Kritieke Stap]
Na installatie moet je het bootvolume instellen in de RAID-controller ROM om te zorgen dat de server vanaf de juiste schijf opstart.
:::

**Bootschijf instellen in ROM**

Houd de console in de gaten tijdens het opstarten. Zodra **"Press F8 for ROM Configuration for Arrays Utility"** verschijnt, druk je meteen op **F8**.

![img](https://screensaver01.zap-hosting.com/index.php/s/BCosyXCBnZJjeiX/preview)

De ROM-configuratie opent. Navigeer met de pijltjestoetsen naar **Select Boot Volume** en druk op **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw4netxJPkX3354/preview)

Je beschikbare schijven worden hier getoond. Navigeer naar de schijf waar TrueNAS SCALE op geïnstalleerd is en druk op **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7mPgXFMqn9Q475Z/preview)

Met de schijf geselecteerd, druk op **F8** om op te slaan. Bevestig indien gevraagd en sluit de utility af. Je server start nu op in TrueNAS SCALE.

![img](https://screensaver01.zap-hosting.com/index.php/s/YEFokMkz3RSB625/preview)

**Toegang tot de Webinterface**

Na de eerste boot toont de TrueNAS SCALE console de Web UI toegang URL: `http://[jouw_server_ip]`. Noteer dit IP-adres, je hebt het nodig om de webinterface te bereiken.

![img](https://screensaver01.zap-hosting.com/index.php/s/8JwikNGRTz4La3y/preview)

:::tip Netwerk Auto-Configuratie
TrueNAS SCALE configureert netwerk meestal automatisch via DHCP. Sla dit over tenzij je meerdere IP-adressen hebt of een specifiek statisch IP nodig hebt.
:::

Voor handmatige netwerkconfiguratie kies je in het consolemenu **1) Configure Network Interfaces**. Selecteer je primaire interface (zoals `enp0s3` of `eth0`), kies **Configure IPv4**, daarna **Static**. Vul je IP-adres, subnetmasker en gateway in (deze vind je in je ZAP-Hosting Dashboard).

Open een webbrowser en ga naar `http://[jouw_server_ip]` met het IP-adres uit de console.

Omdat we eerder **Configure using Web UI** kozen, stel je hier het wachtwoord in. De loginpagina toont `truenas_admin` als gebruikersnaam. Vul een sterk wachtwoord in, bevestig het en klik op **Submit**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dZrpdZYQwKBFksJ/preview)

:::danger Veiligheid Belangrijk
Kies een sterk, uniek wachtwoord voor je TrueNAS admin-account. Dit account heeft volledige systeemtoegang.
:::

Na inloggen verschijnt het dashboard met systeeminfo, netwerkstatus, opslagpools, services en meldingen. Je hebt TrueNAS SCALE succesvol geconfigureerd en bent klaar om opslag in te richten.

![img](https://screensaver01.zap-hosting.com/index.php/s/fYkDpDfpqwTT5yY/preview)

**Opslagpools aanmaken**

Klik in de linkerzijbalk op **Storage** en klik vervolgens op de knop **Create Pool**.

![img](https://screensaver01.zap-hosting.com/index.php/s/fFeSjm3YnnPfxq5/preview)

Voer eerst een naam in voor je pool, bijvoorbeeld `Disk`, `tank` of iets wat voor jou logisch is. Klik op **Next** als je klaar bent.

![img](https://screensaver01.zap-hosting.com/index.php/s/23MNpcrHmmGz2L2/preview)

Open in het **Data** gedeelte de dropdown **Layout** en kies de configuratie die bij je wensen past:

- **Stripe**: Maximale bruikbare capaciteit, maar geen redundantie
- **Mirror**: Identieke data op twee schijven, biedt redundantie maar halveert bruikbare capaciteit
- **RAIDZ1**: Eén schijf redundantie
- **RAIDZ2**: Twee schijven redundantie
- **RAIDZ3**: Drie schijven redundantie

![img](https://screensaver01.zap-hosting.com/index.php/s/wKHy7f8xoifEXB6/preview)

Onder **Disk Selection** zie je al je opslagschijven. Klik de schijven aan die je in de pool wilt opnemen; ze verplaatsen naar het configuratiegebied met geschatte capaciteit.

:::info Bootschijf Niet Beschikbaar
De installatieschijf verschijnt hier niet omdat die exclusief voor het besturingssysteem is.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/McEcGQSBzHaZNNc/preview)

Laat optionele instellingen op standaard en klik op **Next**. De reviewpagina toont je configuratie met naam, layout, schijven en capaciteit. Controleer en klik op **Create Pool** om te bevestigen.

![img](https://screensaver01.zap-hosting.com/index.php/s/RDitijsoGWtEoT5/preview)

**Datasets organiseren**

Met je opslagpool aangemaakt kun je je data organiseren via datasets. Datasets zijn logische onderverdelingen van je pool die verschillende datatypes scheiden. Klik in de zijbalk op **Datasets**. Je nieuwe pool verschijnt daar (bijv. "Disk").

![img](https://screensaver01.zap-hosting.com/index.php/s/oZPctpbLcCESWWt/preview)

Klik op **Add Dataset**. De pool staat automatisch als parent. Geef het een naam zoals `documents`, `media` of `backups`. Laat geavanceerde opties standaard tenzij je specifieke wensen hebt. Klik op **Save**.

![img](https://screensaver01.zap-hosting.com/index.php/s/JxPmPW53zke9NQL/preview)

**Gebruikersaccounts aanmaken**

Klik in de zijbalk op **Credentials** en daarna op **Add**. Kies een gebruikersnaam (zoals `john` of `fileuser`), vul de volledige naam in en stel een wachtwoord in. Laat primaire groep, home directory en shell standaard. Scroll naar beneden en zet de **SMB** optie aan voor Windows-toegang.

Pas rechten aan naar je beveiligingswensen. Voor basis bestandsdeling zijn standaardopties met SMB aan voldoende. Klik op **Submit** om af te ronden.

:::danger Belangrijk voor SMB-toegang
Gebruik **niet** `root` of `truenas_admin` voor bestandsdeling. Deze systeemaccounts werken niet met SMB. Maak dedicated gebruikers aan.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/3SLGk75E3KP57ZS/preview)

**SMB-shares instellen**

Klik in de zijbalk op **Shares**. Er verschijnen drie opties: Windows (SMB) voor Windows/macOS/Linux, Unix (NFS) voor Linux/Unix, en Block (iSCSI) voor block storage. We richten SMB in. Klik op **Add** bij Windows (SMB) Shares.

![img](https://screensaver01.zap-hosting.com/index.php/s/fgWcqjyxXLD2dRy/preview)

Het **Add SMB** venster opent. Bij **Path** blader je naar je dataset (bijv. `/mnt/Disk/documents`). Bij **Name** vul je iets in als `documents` (gebruikers zien deze naam in het netwerk). **Purpose** kan meestal standaard blijven. Voeg eventueel een omschrijving toe. Geavanceerde opties (ACL-instellingen en meer) zijn er, maar laat gasttoegang uit voor veiligheid. Klik op **Save**.

![img](https://screensaver01.zap-hosting.com/index.php/s/D2xQYHQfbmsKRwT/preview)

Na het aanmaken verschijnt een popup dat de **SMB-service niet draait**. Klik op **Start Service**. Zet ook **Start Automatically** aan zodat het bij opstarten automatisch start. De SMB-share is nu beschikbaar in het netwerk.

![img](https://screensaver01.zap-hosting.com/index.php/s/KQH5zoA7FYWaXMa/preview)

Voor NFS-shares met Linux/Unix ga je naar **Shares** → **Unix (NFS) Shares** en klik je op **Add**. Selecteer je dataset, configureer netwerken en rechten, zet NFS aan als gevraagd en sla op.

<InlineServiceLink />

## Toegang tot je share

Om je share te benaderen, bijvoorbeeld vanaf je Windows-pc, open je de **Verkenner**. Klik met rechts op **Deze pc** (of **Mijn computer**) en kies **Netwerklocatie toevoegen**.

![img](https://screensaver01.zap-hosting.com/index.php/s/NDJWjdpC6ZCq6c3/preview)

De **Wizard Netwerklocatie toevoegen** opent. Klik op **Volgende** om door te gaan.

![img](https://screensaver01.zap-hosting.com/index.php/s/7KXPxNQJy4qsiBy/preview)

Bij locatie vul je dit formaat in: `\\[jouw_server_ip]\[share_naam]`. Bijvoorbeeld: `\\192.168.1.100\documents`. Vervang `[jouw_server_ip]` door het IP-adres van je TrueNAS-server en `[share_naam]` door de naam van je SMB-share. Klik daarna op **Volgende**.

![img](https://screensaver01.zap-hosting.com/index.php/s/2yaoWfiCTX6XLAz/preview)

Voer de **gebruikersnaam** en **wachtwoord** in van de gebruiker die je in TrueNAS hebt aangemaakt. Gebruik **niet** `root` of `truenas_admin` want die werken niet met SMB. Vink **Mijn referenties onthouden** aan om ze op te slaan. Klik op **OK**.

![img](https://screensaver01.zap-hosting.com/index.php/s/4nFReNbPLkHfmMp/preview)

De TrueNAS-share is nu bereikbaar. Blader door bestanden, maak mappen aan en kopieer data alsof het een gewone netwerkschijf is. Je hebt je Windows-pc succesvol verbonden met de TrueNAS-share.

![img](https://screensaver01.zap-hosting.com/index.php/s/nBqrkmkCYJntwW2/preview)

:::tip Snelle Toegang
Voor makkelijker toegang gebruik je **Netwerkstation koppelen** in plaats van **Netwerklocatie toevoegen**. De share verschijnt dan als een stationsletter (bijv. `Z:`) in Verkenner.
:::

:::info Toegang vanaf macOS of Linux
**macOS**: In Finder druk je op `Cmd+K` en voer je in `smb://[jouw_server_ip]/[share_naam]`

**Linux**: Gebruik de optie "Verbinden met server" in je bestandsbeheerder met `smb://[jouw_server_ip]/[share_naam]`, of mount via de commandline met `mount.cifs`
:::

## Conclusie

Gefeliciteerd, je hebt TrueNAS SCALE succesvol geïnstalleerd en geconfigureerd op je server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂