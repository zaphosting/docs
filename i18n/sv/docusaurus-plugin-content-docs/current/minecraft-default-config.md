---
id: minecraft-default-config
title: "Minecraft: Serverkonfig-inställningar"
description: "Upptäck hur du optimerar Minecraft-serverinställningar för prestanda och stabilitet samtidigt som du anpassar spelupplevelsen → Lär dig mer nu"
sidebar_label: Serverkonfig
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Vad kan jag ställa in i denna konfig?

Minecraft levereras redan med en liten konfig som heter *server.properties*.  
Servern kan grundläggande konfigureras här. Vi beskriver vad de olika punkterna gör och vad du bör tänka på när du ändrar inställningarna. Vissa inställningar bör hanteras **försiktigt**, eftersom de ibland kan påverka serverns prestanda drastiskt, vilket bland annat kan leda till instabilitet.

<InlineVoucher />

### view-distance

Med denna inställning kan servern sätta *maximal synlighet*. Oavsett hur synligheten är inställd i klienten, skickar servern aldrig chunk-data till klienten utöver detta värde. Här kan du också sänka värdet för att skydda serverns prestanda. Spelupplevelsen påverkas inte ens med värdet 5. Lägre värden än 5 rekommenderas inte och kan i sällsynta fall orsaka problem.  
**VIKTIGT:** Värdet bör under inga omständigheter (om det inte är absolut nödvändigt) sättas högre och bör därför hanteras med försiktighet, eftersom det kan leda till allvarliga prestandaproblem.

:::info
Denna inställning gäller endast för Vanilla- eller Forge-servrar.

För Bukkit, Spigot och Paper Spigot måste värdet sättas i deras egna konfigfiler.
:::

### max-build-height

Här bestämmer du upp till vilken höjd (Y-koordinat) som byggande eller rivning är tillåtet. Värden över 256 är **inte tillåtna** och ignoreras av servern. Denna inställning är användbar om du vill begränsa maxhöjden.

### server-ip

Om du har bokat flera IP-adresser för din root- eller VPS-server kan du här ange vilken IP som ska användas. Har du bara en IP kan detta fält lämnas tomt – samma gäller för en spelserver.

### level-seed

Som standard genererar världsgeneratorn alltid ett slumpmässigt [seed](https://minecraft.fandom.com/wiki/Seed_(level_generation)) och därmed en helt slumpmässig värld.  
Men du kan definiera ditt eget seed av **bokstäver eller siffror** här, och servern skapar då motsvarande värld. Maxlängden på **32 tecken** bör inte överskridas.

:::info
Det finns seed-generatorer där du kan konfigurera en värld efter egna idéer.

[Den här](https://minecraft.tools/en/custom.php) generatorn är en av de bästa och kan nästan allt.
:::

### gamemode

Med detta kan du ställa in standard spelläge på din server. Spelläget ges till varje spelare vid första besöket och kan sedan ändras när som helst med kommandot [/gamemode](https://minecraft.fandom.com/wiki/Gameplay).

Om du inte känner till ID:n för respektive spelläge hittar du en lista här:

| värde | Spelläge |
|--|--|
| 0 | Survival |
| 1 | Creative |
| 2 | Adventure |
| 3 | Spectator |

### server-port

Du kan tilldela en fast port till din server som den är åtkomlig på tillsammans med IP-adressen. Om du vill köra flera servrar på samma maskin måste varje server ha en unik port. Denna inställning kan oftast lämnas orörd och behövs vanligtvis bara för BungeeCord-nätverk.

### enable-command-block

Aktiverar [command blocks](https://minecraft.fandom.com/wiki/Command_Block) på servern. Om inga behövs bör värdet sättas till *false* eftersom det finns metoder där servern kan förstöras eller skadas i samband med command blocks.

### allow-nether

Denna inställning kan slå på eller av Nether. Om den är avstängd kan man inte längre nå Nether via portal. Men åtkomst är fortfarande möjlig via plugin som [Multiverse Core](https://www.spigotmc.org/resources/multiverse-core.390/).

### enable-rcon

Med RCON kan kommandon köras från var som helst i konsolen. Ett lösenord och en separat port krävs. Inställningarna för detta görs också här i konfigen. Vi rekommenderar att stänga av RCON för att förhindra intrång från obehöriga.

### op-permission-level

Standard OP-nivå kan anges här, som ska tilldelas en ny operatör från början. Den exakta nivån och individuell tilldelning per spelare beskrivs mer i detalj [här](minecraft-addop.md).

### enable-query

Query ger externa tjänster, som en webbplats, separat data som aktuell spelarantal eller en exakt lista över nuvarande spelare. Exempelvis kan data visas på en webbplats via PHP. Vissa serverlistor använder denna funktion för att korrekt lista servern.

### prevent-proxy-connections

Med denna inställning kan du bestämma om spelare kan ansluta via VPN/proxy. VPN används ofta för att kringgå IP-ban, så denna funktion kan vara mycket användbar. I vissa fall kan dock även vanliga anslutningar felaktigt blockeras.

:::info
För att få bättre kontroll över VPN/proxy-anslutningar är det värt att installera ett plugin.

Många gratis-plugins finns snabbt tillgängliga, men detta (mot betalning) [plugin](https://www.spigotmc.org/resources/antibotdeluxe-%E2%80%BA-the-most-advanced-antibot-spigot-bungee-1500-purchases-1-7-1-15.31700/updates) övertygade oss mest och skyddar din server från alla bot-attacker.
:::

### generator-settings

Precis som i singleplayer kan servern skapa en värld enligt vissa specifikationer. Liknande ett seed kan världen konfigureras i förväg, och servern skapar sedan världen. Skillnaden är att det fortfarande är en slumpmässig värld och alltså inte exakt som någon annan.

En genereringskod för en flatmap kan se ut så här:

`{"biome":"minecraft:plains","layers":[{"block":"minecraft:bedrock","height":1},{"block":"minecraft:dirt","height":2},{"block":"minecraft:grass_block","height":1}],structures:{"village":{}}}`

### resource-pack

Om ett speciellt texturpaket ska användas på servern kan den **direkta nedladdningslänken** anges här.  
Paketet laddas då ner och aktiveras automatiskt efter att spelaren godkänt det.

### player-idle-timeout

Inaktiva spelare kan automatiskt kickas efter angivet antal sekunder. Detta är användbart när serverns slots är fulla och du vill göra plats för nya (kanske aktiva) spelare.

### level-name

Världen heter "world" som standard. Med denna inställning kan du definiera ett annat namn för världen. Om en värld redan finns och namnet ändras här skapas automatiskt en ny värld med det namnet. Den gamla världen finns kvar i sin mapp.

### motd

Här kan ett meddelande definieras som visas i serverlistan, om det är tillagt. Meddelandet visas inte vid direktanslutning om inte speciella mods finns i klienten. Meddelandet kan ha alla möjliga färger och formateringar som Minecraft erbjuder.

:::info
MOTD kan snabbt och enkelt skapas med detta [verktyg](https://minecraft.tools/en/motd.php).
:::

### force-gamemode

Bestämmer om spelaren alltid ska sättas till standard spelläge när de går in på servern. Oavsett vilket spelläge servern lämnades i, sätts alltid standardläget.

### hardcore

Hardcore-läget gör att spelare bannas vid död eller sätts i åskådarläge. Om detta önskas måste en ny värld **skapas**, eftersom hardcore påverkar världsgenereringen.

### white-list

Aktiverar [Whitelist](https://minecraft.fandom.com/wiki/Commands/whitelist), så att endast spelare på listan får tillgång. Kommandon för att lägga till, ta bort och hantera whitelist finns på sidan.

### broadcast-console-to-ops

Bestämmer om operatörer får chattnotiser när kommandon körs i spelet.

### pvp

Med detta kan PVP aktiveras eller inaktiveras på servern. Om PVP är avstängt kan spelare inte skada varandra. Detta hindrar dock inte exempelvis medveten placering av lava, så attacker via omvägar är fortfarande möjliga.

### spawn-npcs

I byar möter du bybor om detta är aktiverat. Om inställningen är *false* finns inga bybor på hela servern. Detta är användbart om du vill begränsa handel till spelare och därmed stärka ekonomin på en ekonomiserver.

### generate-structures

Denna inställning påverkar världsgeneratorn igen. Den bestämmer om strukturer som byar eller tempel ska genereras i världen.

### spawn-animals

Bestämmer om djur ska spawnas på servern. En lista över alla djur finns  
[ här](https://minecraft.fandom.com/wiki/Animal).

### snooper-enabled

Om aktiverat skickar servern anonym data till Mojang. Datan används för vidareutveckling och optimering. Denna inställning påverkar inte serverns prestanda.

### difficulty

Här ställer du in svårighetsgraden på servern. Beroende på svårighetsgrad gör mobs mer eller mindre skada. Mer info och möjliga alternativ finns [här](https://minecraft.fandom.com/wiki/Difficulty).

### network-compression-threshold

Värdet definierar storleken från vilken data komprimeras mellan klient och server. Ett lågt värde som standard 256 innebär att data utbyts ca 20 gånger per sekund. Värdet 512 rekommenderas för att avlasta serverns prestanda utan negativa effekter. Värdet bör **aldrig sättas** högre än 1024.

**Denna inställning bör hanteras med försiktighet, fel värden kan orsaka stora problem för spelare och oåterkallelig skada på världen.**

### level-type

Bestämmer världstypen som världsgeneratorn skapar. Efter ändring bör en **ny värld** **skapas**. Annars kan oönskade skarvar uppstå där nya chunks genereras.

| Värde | Betydelse |
|--|--|
| DEFAULT | Normal värld med berg, dalar, byar osv |
| FLAT | En helt platt värld där endast byar finns |
| LARGEBIOMES | Liknar en normal värld, men med större biom |
| AMPLIFIED | Liknar normal värld, men mycket ojämn med stora höjdskillnader |
| BUFFET | En buffet-värld där inställningar sätts via *generator-settings* |

### spawn-monsters

Bestämmer om monster ska spawnas på servern. En lista över alla monster finns  
[ här](https://minecraft.fandom.com/wiki/Mob).

### max-tick-time

Reglerar maxlängden på en tick. Olika serveruppgifter fördelas på ticks. Om en tick varar längre än 60 sekunder (standard) stoppas servern automatiskt.

För Forge-servrar kan detta vara irriterande då mods ofta kräver mer tid. Då kan värdet sättas till *-1* för att inaktivera automatisk stopp.

### max-players

Sätter antalet slots som kan användas och max antal spelare på servern.

### enforce-whitelist

Denna inställning gör att whitelist ändringar accepteras direkt. Normalt måste whitelist laddas om innan ändringar aktiveras.

### online-mode

Bestämmer om spelare kan ansluta utan premiumkonto. På en publik server kan spelare annars få rättigheter genom att välja operatörsnamn, och servern **matchar bara namnet**.

Detta kan ge obehöriga rättigheter. För att förhindra detta bör du installera ett lösenords-plugin på en plugin-kompatibel server som Spigot.

### allow-flight

Aktiverar eller inaktiverar Minecrafts egen AntiCheat för flygning. Hackklienter gör ofta att spelare kan flyga utan tillåtelse.

:::info
Vi rekommenderar dock alltid att installera en AntiCheat som plugin!
:::

### function-permission-level

Anger OP-nivån som krävs för att köra kommandon. På nivå 4 kan man exempelvis stoppa servern eller kicka/banna spelare.

<InlineVoucher />