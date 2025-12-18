---
id: minecraft-bungeecord-config
title: "Minecraft: Bungeecord Server Server Config Settings"
description: "Förstå hur du optimerar och hanterar dina BungeeCord-servernätverksinställningar för bättre prestanda och spelupplevelse → Lär dig mer nu"
sidebar_label: Serveregenskaper
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Varför behöver jag en BungeeCord-konfiguration?

BungeeCord är hanteringen av en samling servrar som är kopplade via en proxyserver (BungeeCord-servern). För att anpassa nätverket av dessa servrar måste filen *config.yml* redigeras. På den här sidan lär du dig exakt vad varje inställning betyder och får extra info om hur det påverkar underservrar som PaperSpigot och Bukkit-servrar.

<InlineVoucher />

## Inställningar

### forge_support

Värdet kan sättas till false eller true. Om du sätter det till true kan spelare ansluta med en Forge-klient (tänkt för modpacks). Om du sätter det till false kommer servern att neka dessa anslutningar.

### player_limit

Det här värdet anger hur många spelare som får ansluta till servern samtidigt. Jämfört med värdet *max_players* från listeners är detta värdet den interna, absoluta gränsen för totala antalet spelare.

### permissions

Här kan du tilldela vissa behörigheter till olika grupper. Det här är **endast BungeeCord-behörigheter** och inte t.ex. Spigot/Bukkit-behörigheter. Syntax och indrag (2 mellanslag) är viktiga att följa:
```
permissions:
  GroupName:
  - Permission.One
  - Permission.Two
```

### timeout

Det här numret anger max tid servern får vara utan att skicka signaler till spelarna innan den stänger ner och bryter alla anslutningar. Standardvärdet är 30000, vilket motsvarar max 30 sekunders svarstid.

### log_commands

Värdet kan sättas till false eller true. Om du sätter det till true skrivs ett meddelande i konsolen när en spelare kör ett BungeeCord-kommando. Om du sätter det till false visas inget meddelande.

### network_compression_threshold

Detta sätter storleken på paketen som skickas till spelarna. Ett mindre värde än standard *256*, t.ex. 128, kan förbättra anslutningen för användare längre bort. Men det ger också mycket högre CPU-användning, så ändra detta med försiktighet.

### online_mode

Värdet kan sättas till false eller true. Om du sätter det till true kan bara spelare som köpt Minecraft ansluta. Om du sätter det till false kan även cracked-spelare ansluta eftersom ingen kommunikation sker med Mojang-servern.  
**Viktigt:** Vill du att cracked-spelare ska kunna spela på din server bör du använda ett auktoriseringsplugin, annars kan andra spelare utge sig för att vara dig och få adminrättigheter.

### disabled_commands

Här kan du lista kommandon som ska vara inaktiverade och inte gå att köra i hela nätverket. Denna begränsning gäller alla spelare i nätverket.

### servers

Den här listan visar alla underservrar i ditt nätverk. Saknas en server här integreras den inte i ditt serversystem. Syntax och indrag (2 mellanslag) är viktiga:
```
servers:
  ServerName:
    motd: '&1Just another BungeeCord - Forced Host'
    address: 0.0.0.0:2000
    restricted: false
```
**motd** är meddelandet som visas i serverlistan när du pingar en underserver via *forced_hosts*-funktionen:

![](https://screensaver01.zap-hosting.com/index.php/s/E93qgyfkjfW7Mzf/preview)

Under **address** anger du IP:n för underservern. Om **restricted** är true måste spelaren ha behörigheten *bungeecord.server.ServerName* för att gå in på underservern.

### listeners

Här finns många inställningar viktiga för anslutningen till BungeeCord-servern. Flera listeners kan skapas för att tillåta anslutning till olika IP-adresser och portar. En listener består av följande konfigurationsvärden:  
* query_port - Porten för listenen.  
* motd - Meddelandet som visas i serverlistan om spelaren direkt valt BungeeCord-servern.  
* tab_list - Välj mellan *GLOBAL_PING*, *GLOBAL* och *SERVER*. GLOBAL_PING visar alla spelare med ping i tabben. GLOBAL visar alla spelare över alla servrar utan ping. SERVER visar bara spelare på samma underserver. **Viktigt:** Fungerar inte i version 1.8 och äldre.  
* query_enabled - false eller true. Om true kontrolleras en UDP-query under DNS-förfrågan som bara tillåter sådana anslutningar. Om false kan andra anslutningar göras via vidarebefordran.  
* proxy_protocol - false eller true. Om true kan HAProxy-protokollet användas. Om false nekas det.  
* forced_hosts - Tillåt individuella direkta anslutningar till underservrar. Syntax: `Your.OwnDomain.net: ServerName`  
* ping_passthrough - false eller true. Om true ser du den riktiga MOTD:n från underservern när du pingar via *forced_hosts*. Om false visas värdet från *servers*.  
* priorities - Lista i fallande ordning vilka servrar spelare ska kopplas till först. En offline eller otillgänglig server hoppas över.  
* bind_local_address - false eller true. Om true försöker systemet alltid dirigera spelare till servrar som lyssnar på samma IP som BungeeCord-servern. Om false kan underservrar ha olika IP. Relevant för nätverk med servrar på olika system.  
* host - IP och port för hosten. Om 0.0.0.0 används accepteras alla IP och domäner som vidarebefordrar till hosten.  
* max_players - Max antal spelare för denna listener.  
* tab_size - Max antal spelare som visas i tabblistan.  
* default_server - false eller true. Om true kopplas spelaren alltid till standardservern (första tillgängliga i *priorities*). Om false hamnar spelaren på underservern där hen var senast online. **Viktigt:** Om du aktiverar detta kommer anslutningar via *forced_hosts* också skickas till standardservern.

### ip_forward

false eller true. Om true kan spelare bara ansluta via BungeeCord-servern. Om false kan spelare även ansluta direkt till underserver om de känner till IP och port.  
**Viktigt:** Om du sätter *online_mode* till true bör du också aktivera detta för att täppa till en säkerhetslucka.

### prevent_proxy_connections

false eller true. Om true skickas IP-adresserna på anslutna spelare till Mojang-servern. Om false förhindrar servern IP-vidarebefordran till Mojang.  
Detta påverkar inte spelupplevelsen.

### groups

Här kan du tilldela en eller flera grupper till enskilda spelare. De får då de BungeeCord-behörigheter som definierats i *permissions*. Syntax och indrag (2 mellanslag) är viktiga:
```
groups:
  PlayerName:
  - GroupName
```

### connection_throttle

Detta värde bestämmer hur länge en spelare måste vänta innan hen kan försöka ansluta igen. Standard är 4000, alltså max 4 sekunders väntetid.

### stats

Här lägger BungeeCord in en slumpmässigt genererad kod. Det rekommenderas att inte ändra den, då den hjälper till att optimera BungeeCord och fixa buggar. Analysdata skickas anonymt och krypterat till utvecklarna.

### connection_throttle_limit

Detta värde anger hur många anslutningsförsök spelaren får göra innan hen måste vänta enligt *connection_throttle* innan nästa försök.

<InlineVoucher />