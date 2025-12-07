---
id: vserver-linux-fivem-txAdmin-cloudflare-tunnel
title: "VPS: Cloudflare Tunnel instellen voor txAdmin"
description: "Ontdek hoe je een Cloudflare tunnel instelt voor txAdmin voor extra beveiliging → Leer het nu"
sidebar_label: Cloudflare Tunnel voor txAdmin
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

Wil je extra beveiligingslagen bovenop de bestaande ZAP-Hosting DDoS-bescherming? Dan kun je je txAdmin instance nog veiliger maken met een Cloudflare Tunnel. Zo staat de txAdmin webinterface niet meer open via het publieke IP van je server, maar benader je ‘m veilig via je eigen domein. Aanvallen op de txAdmin poort worden door Cloudflare gefilterd, terwijl je de lokale poort volledig kunt afsluiten zonder toegang te verliezen.

<InlineVoucher />

## Vereisten

Om een Cloudflare Tunnel op Linux te gebruiken heb je een Linux VPS nodig, een werkende txAdmin installatie, je txAdmin poort en een domein dat al gekoppeld is aan je Cloudflare account. Als je domein nog niet gekoppeld is aan Cloudflare, volg dan eerst onze [Cloudflare Setup](domain-cloudflare-setup.md) gids.

Cloudflare Tunnel werkt door een uitgaande versleutelde verbinding van je server naar Cloudflare te maken, waardoor er geen publieke poorten open hoeven te staan voor txAdmin.


## Cloudflare Setup

Voordat je cloudflared op je Linux vServer installeert, maak en configureer je eerst de tunnel direct in je Cloudflare dashboard.

Log in op je Cloudflare account en ga naar het Zero Trust gedeelte. Daar maak je een nieuwe tunnel aan die later het verkeer naar je txAdmin interface doorstuurt.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Cloudflare Tunnel installatie

Cloudflare levert een klein tooltje genaamd cloudflared. De installatie van cloudflared op Linux is super simpel. Download en voer eerst de Linux installer uit.

![img](https://screensaver01.zap-hosting.com/index.php/s/93TFH8xfxEEDobd/preview)

```
# Voeg cloudflare gpg key toe
sudo mkdir -p --mode=0755 /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-public-v2.gpg | sudo tee /usr/share/keyrings/cloudflare-public-v2.gpg >/dev/null

# Voeg deze repo toe aan je apt repositories
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-public-v2.gpg] https://pkg.cloudflare.com/cloudflared any main' | sudo tee /etc/apt/sources.list.d/cloudflared.list

# installeer cloudflared
sudo apt-get update && sudo apt-get install cloudflared
```

Als de installatie klaar is, voer je het volgende commando uit:

```
cloudflared.exe service install eyJhIjoiMj...
```

Na het uitvoeren van de commando’s maakt je server verbinding met Cloudflare via de tunnel. Als de setup succesvol is, verandert de status in het Connectors-gedeelte naar **Connected**, wat betekent dat de tunnel actief en werkend is.

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Cloudflare Tunnel configureren

Vervolgens stel je de Route Traffic instellingen in. Maak een nieuwe subdomein entry aan naar keuze. In dit voorbeeld gebruiken we het subdomein `txAdmin`, waarmee je later de txAdmin interface bereikt.

Selecteer het domein dat je wilt gebruiken, zet het servicetype op **HTTP** en vul als URL **localhost:poort** in. Vervang poort door de poort die je voor je txAdmin instance hebt ingesteld. In dit voorbeeld gebruiken we poort 40500.

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Beveiligingstip
Gebruik liever niet de standaard txAdmin poort **40120**, maar kies een andere poort voor extra veiligheid.
:::



## Linux Firewall configureren

Om te voorkomen dat de poort buiten de tunnel bereikbaar is, stel je de Linux Firewall (iptables) zo in dat de betreffende poort alleen verbindingen van localhost accepteert. Beperk het remote adres in de regel tot 127.0.0.1. Zo zorg je dat al het verkeer van het lokale systeem moet komen en blokkeer je externe toegang, waardoor de service achter cloudflared niet van buitenaf bereikbaar is.

```
sudo iptables -A INPUT -p tcp --dport 40500 ! -s 127.0.0.1 -j DROP
```

Met deze instelling worden alle toegangspogingen van buiten de machine geblokkeerd, zodat de service achter cloudflared alleen via de tunnel bereikbaar is.



## Conclusie

Zodra de Cloudflare Tunnel actief is, is je txAdmin interface alleen nog via je eigen domein bereikbaar en lopen alle verzoeken via Cloudflare, waar ze gefilterd en beveiligd worden.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

Directe toegang tot de txAdmin poort via het server IP is geblokkeerd, waardoor het oorspronkelijke aanvalsvlak helemaal wegvalt. Dit maakt txAdmin stabiel, veilig en betrouwbaar bereikbaar, zelfs als iemand probeert de interface te overbelasten of aan te vallen.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />