---
id: vserver-windows-nointernet
title: "VPS: Problemen met Geen Internet Oplossen"
description: "Ontdek hoe je internetverbinding problemen op je Windows VPS effectief kunt oplossen → Leer het nu"
sidebar_label: Problemen met Geen Internet
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een onderbroken of slechte internetverbinding kan door verschillende oorzaken komen, zoals een verkeerde IP-adres, subnetmasker, gateway, DNS-server of firewall instellingen. In deze gids leggen we uit hoe je netwerkproblemen kunt opsporen en oplossen.

<YouTube videoId="VfZyNge5ikA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pqpjBWoHGJWztQG/preview" title="Hoe je Internetverbinding Problemen op Windows VPS Oplost" description="Snap je het beter als je dingen in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op een toffe manier opneemt!"/>



<InlineVoucher />

## VNC Toegang zonder Internet

Als je niet via RDP (Remote Desktop) op je server kunt inloggen vanwege een niet-functionerende internetverbinding, is er een alternatief: de VNC (Virtual Network Computing) console die beschikbaar is op onze website.

Met deze optie kun je toch toegang krijgen tot je server en problemen oplossen, zelfs als de internetverbinding niet werkt. Je vindt deze optie onder **Tools->VNC-Console** in het webinterface paneel van je server.

Op deze pagina kun je de console activeren via de knop **Open Web Client** en inloggen met je gebruikelijke gegevens.

![](https://screensaver01.zap-hosting.com/index.php/s/L9ZPLHEXbydc6ZS/preview)

## Probleemoplossingsmethodes

### Controleer IP-adres, Subnetmasker, Gateway Instellingen

De eerste stap is om te checken of de technische configuratie van de netwerkadapter op je server klopt, inclusief IP-adres, subnetmasker en gateway.

Ga naar **Settings->IP-Addresses** in het webinterface paneel van je server om alle IP-adressen te zien die je bij je dienst huurt.

![](https://screensaver01.zap-hosting.com/index.php/s/8gF7Qsq5k5aYxbq/preview)

Log nu in op je server via RDP of de VNC Console als je problemen hebt. Ga naar de Windows Netwerkadapter Instellingen via: 
```
Settings -> Network and Internet -> Change Adapter Options -> Network Adapter
```

Zoek de optie **Internet Protocol, Version 4 (TCP/IPv4)** in de lijst en klik op **Properties**.

![](https://screensaver01.zap-hosting.com/index.php/s/xYSSa2txkRkM4bx/preview)

#### Adapter Configureren

Vergelijk de gegevens in de adapter en zorg dat ze zo zijn ingesteld:
- IP-adres: Dit moet het IP-adres zijn dat je ziet op de **IP-Addresses** pagina in het webinterface.
- Subnetmasker: Dit is meestal `255.255.255.0` omdat ons netwerk klasse C gebruikt.
- Default Gateway: Dit is je IP-adres, hetzelfde als het eerste deel, maar dan met het laatste octet (`.xxx`) vervangen door `.1`.

#### Voorbeeld Configuratie

:::info
Let op: dit is een **voorbeeld** om het makkelijker te maken. Vervang het IP-adres door het **eigen** IP-adres van jouw server.
:::

Met een IP-adres van `185.223.28.163` ziet je configuratie er zo uit:

| Instelling      | Waarde         |
| --------------- | -------------- |
| IP-adres        | 185.223.28.163 |
| Subnetmasker    | 255.255.255.0  |
| Default Gateway | 185.223.28.1   |

![](https://screensaver01.zap-hosting.com/index.php/s/PTjQZc5gqP2okAC/preview)

Als alles klopt, klik je op **Ok** om de wijzigingen toe te passen. We raden aan de server te herstarten om het proces af te ronden.



### DNS Server Instellingen

Als je nog steeds problemen hebt met internet, check dan of de DNS-server goed is ingesteld. Vervang ontbrekende of bestaande DNS-waarden door een bekende host.

Wij raden aan om Google's of Cloudflare's DNS-servers te gebruiken, omdat die betrouwbaar en veelgebruikt zijn.

| DNS Provider | DNS Server Waarden                   |
| ------------ | ---------------------------------- |
| Google       | Voorkeur: 8.8.8.8 / Alternatief: 8.8.4.4 |
| Cloudflare   | Voorkeur: 1.1.1.1 / Alternatief: 1.0.0.1 |

![](https://screensaver01.zap-hosting.com/index.php/s/oqcR5BHBKLa3ink/preview)

Klik weer op **Ok** om de wijzigingen toe te passen. Ook hier raden we aan de server te herstarten om alles goed door te voeren.

:::tip
Je kunt ook snel de DNS-servers instellen via de command prompt (cmd.exe) op je server met deze opdracht: 
```
powershell “Get-NetAdapter | Get-NetIPAddress | ForEach-Object { netsh interface ip set dns name=”$($_.InterfaceAlias)“ static 8.8.8.8; netsh interface ip add dns name=”$($_.InterfaceAlias)“ 1.1.1.1 index=2 }”
```
:::



### Firewall Instellingen

De laatste stap is om te checken of de Windows Firewall goed is ingesteld.

Probeer tijdelijk de hele Windows Firewall uit te schakelen om te zien of het probleem dan weg is. Gebruik de zoekfunctie in Windows om **Windows Defender Firewall Settings** te openen en kies links voor **Turn Windows Defender Firewall on or off**.

![](https://screensaver01.zap-hosting.com/index.php/s/bWcPqHcCZ7ajJSA/preview)

Als het probleem weg is als de firewall uitstaat, is de kans groot dat de firewall verkeerd is ingesteld.

De oplossing voor firewallproblemen hangt sterk af van het specifieke probleem. Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) gids als je hulp nodig hebt met firewallregels.



## Netwerkconfiguratie Resetten

Je kunt de netwerkconfiguratie resetten via het webinterface beheer van je VPS door op de knop **Reset network configuration** te klikken op de instellingenpagina. Hierbij worden IP-adres, subnetmasker, gateway en DNS-server teruggezet naar de standaardwaarden.

![img](https://screensaver01.zap-hosting.com/index.php/s/YsLZZJZEaf3pemt/preview)


## Conclusie
Als je alle stappen hebt gevolgd, zou de verbinding weer normaal moeten werken. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />