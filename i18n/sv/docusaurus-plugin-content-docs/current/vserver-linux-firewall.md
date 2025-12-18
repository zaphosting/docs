---
id: vserver-linux-firewall
title: "VPS: Hantera brandvägg i Linux"
description: "Lär dig hur du konfigurerar en brandvägg för att säkra din server och tillåta nödvändiga externa anslutningar → Läs mer nu"
sidebar_label: Port Forwarding (Brandvägg)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

För många tjänster och program måste du tillåta externa anslutningar. Det gör du genom att sätta upp en brandvägg.  
I den här guiden lär du dig hur du sätter upp en brandvägg och tillåter de anslutningarna.

<InlineVoucher />

## Förberedelser

För att installera brandväggen behöver du ansluta till din server via SSH. Om du inte vet hur, kan du kolla in vår [initial access](vserver-linux-ssh.md)-guide.  
När du är ansluten bör du uppdatera servern med `apt update` och `apt upgrade`.

## Använda UFW (Enkelt)

Det finns flera brandväggsprogram för Linux, i den här guiden fokuserar vi på de två mest populära: UFW och IPTables.  
Vi börjar med UFW eftersom det är enklare att sätta upp och hantera.

### Installera UFW

Du kan enkelt installera UFW via APT med `sudo apt install ufw`.  
För att inte tappa SSH-anslutningen bör du inte aktivera brandväggen än, först måste du konfigurera den.

### Konfigurera UFW

Vi rekommenderar att använda följande standardregler:

`sudo ufw default deny incoming`  
och  
`sudo ufw default allow outgoing`

Nu ska du tillåta SSH-anslutningen och eventuella andra portar du vill öppna:

`sudo ufw allow 22` för SSH

`sudo ufw allow 80` exempel för HTTP

`sudo ufw allow 25565` exempel för en Minecraft-server

För att aktivera UFW kör du `sudo ufw enable`. Du kan alltid öppna fler portar vid behov med `sudo ufw allow PORT`.

### Lägg till Port Forwarding

För att vidarebefordra en port kan du enkelt använda detta kommando:

För TCP-portar:

`sudo ufw allow PORT/tcp` där du byter ut PORT mot portnumret du vill vidarebefordra.

Exempel: `sudo ufw allow 25565/tcp` för en Minecraft-server

För UDP-portar:

`sudo ufw allow PORT/udp` där du byter ut PORT mot portnumret du vill vidarebefordra.

Exempel: `sudo ufw allow 9987/udp` för en TeamSpeak 3-server

### Lista och ta bort Port Forwarding

För att visa alla portregler kör du `sudo ufw status numbered`. Vill du ta bort en regel använder du `sudo ufw delete NUMMER`, där NUMMER är regeln i listan.

## Installera IPTables (Avancerat)

De flesta system har redan IPTables installerat, men för att vara säker kan du köra `sudo apt install iptables`.

### Konfigurera IPTables

Börja med att sätta standardregler och inställningar:

`sudo iptables -P INPUT DROP` för att blockera alla inkommande anslutningar

`sudo iptables -P FORWARD DROP` för att blockera all vidarebefordran

`sudo iptables -P OUTPUT ACCEPT` för att tillåta alla utgående anslutningar

`sudo iptables -A INPUT -i lo -j ACCEPT` för att tillåta loopback

`sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` för att tillåta alla befintliga anslutningar

Nu ska du tillåta SSH-anslutningen och andra portar du vill öppna:

`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` för SSH

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` exempel för HTTP

`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` exempel för en Minecraft-server

Sedan måste du göra reglerna permanenta så att de finns kvar efter omstart. Installera paketet för IPTables persistent med `sudo apt install iptables-persistent`.  
Spara reglerna med `sudo netfilter-persistent save`.  
Lägg till autostart med `sudo systemctl enable netfilter-persistent`.

### Lägg till Port Forwarding

För att vidarebefordra en port använder du detta kommando:

För TCP-portar:

`sudo iptables -A INPUT -p tcp --dport PORT -j ACCEPT` där du byter ut PORT mot portnumret du vill vidarebefordra.

Exempel: `sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` för en Minecraft-server

För UDP-portar:

`sudo iptables -A INPUT -p udp --dport PORT -j ACCEPT` där du byter ut PORT mot portnumret du vill vidarebefordra.

Exempel: `sudo iptables -A INPUT -p udp --dport 9987 -j ACCEPT` för en TeamSpeak 3-server

### Lista och ta bort Port Forwarding

Visa alla regler med `sudo iptables -L --line-numbers`. Vill du ta bort en regel använder du `sudo iptables -D INPUT NUMMER` där NUMMER är regeln i listan.

## Slutsats

Du har nu installerat en brandvägg på din Linux-server och skapat dina egna portregler. Du kan använda den här guiden för att vidarebefordra fler portar också.  
Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns här för dig varje dag! 🙂

<InlineVoucher />