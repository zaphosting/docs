---
id: minecraft-commands
title: "Minecraft: Allmänna Serverkommandon"
description: "Upptäck hur du använder Minecraft-kommandon för att förbättra spelupplevelsen och hantera funktioner effektivt → Lär dig mer nu"
sidebar_label: Allmänna kommandon
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

### Vad är kommandon?

Kommandon kan användas i Minecraft för att utföra extra eller speciella funktioner. Minecraft innehåller redan över **100 kommandon** utan några modifikationer, som kan användas för att aktivera, hantera eller utföra en mängd olika funktioner.

I den här artikeln i vår dokumentation går vi igenom de viktigaste kommandona som används och behövs väldigt ofta.  
Om ett kommando inte finns med här är den officiella [Minecraft-Wikin](https://minecraft-de.gamepedia.com/) superhjälpsam, eftersom varje del (inklusive alla kommandon) förklaras i detalj.

<InlineVoucher />

### Användning

Varje kommando börjar alltid med en "/". Så om du vill använda ett kommando måste du öppna chatten i spelet och skriva "/" först, sedan kan du skriva själva kommandot. Genom att trycka på TAB-tangenten visas en förhandsvisning av alla tillgängliga kommandon. På så sätt kan kommandon snabbt och enkelt autokompletteras, precis som när du söker på nätet.

:::info
Om du ska köra kommandon via konsolen behövs inte "/" och måste tas bort!

Den här tecknet används bara för att skilja på ett vanligt chattmeddelande och ett kommando i spelet.
:::

### Rättigheter / Behörigheter

För att kunna använda kommandon krävs rätt behörigheter. I Minecraft Vanilla eller Forge finns inget riktigt behörighetssystem som kan användas av plugins som i Spigot. Här används bara OP-rättigheternas nivåsystem. Här hittar du en guide om OP-rättighetssystemet: [OP Permissions](minecraft-addop.md)

Om ett behörighetssystem är installerat och du vill tilldela rättigheter till vissa Minecraft-kommandon kan respektive behörigheter tilldelas enligt beskrivningen nedan.

:::info
Syntaxen för behörigheter för varje kommando är alltid densamma och kan anpassas därefter.

Om du till exempel vill tilldela behörigheter för Locate-kommandot måste följande behörighet sättas: ``minecraft.command.locate``
:::



## Kommandon

### /tp

Med **/tp**-kommandot kan admins teleportera sig till andra spelare eller teleportera en spelare till en önskad målspelare.  
Kommandot kan också användas för att teleportera mobs eller teleportera sig själv till en plats genom att ange koordinater. Mer detaljer finns nedan.

**Exempel:**

``/tp PlayerA``

Teleportera den som kör kommandot till en annan spelare.

``/tp PlayerA PlayerB``

Teleportera *PlayerA* till *PlayerB*. Oavsett vem som kör kommandot teleporteras de angivna spelarna.  
Om den som kör kommandot är *PlayerB* teleporteras *PlayerA* till sig själv.

``/tp -100 75 985``

Den som kör kommandot teleporteras till de angivna koordinaterna.  
Om man anger en spelare före koordinaterna (``/tp PlayerA -100 75 985``) teleporteras den spelaren dit istället för den som kör kommandot.

``/tp @s @e[type=minecraft:cow,distance=..10,limit=1]``

Teleportera dig till närmaste *ko* inom en radie på 10 block.  
``@s`` kan också bytas ut mot en spelare som *PlayerA*, vilket teleportar den spelaren.

### /locate

Med **/locate**-kommandot kan du få koordinaterna till byggnaden du letar efter, som en by med bybor.

**Exempel:**

``/locate fortress``

Hittar och visar positionen för närmaste Nether-fästning när du är i Nether.

``/locate village``

Hittar och visar positionen på samma sätt som för Nether-fästningar, men i det här fallet för en by med bybor.

### /worldborder

Med det här kommandot kan du skapa en världgräns i den aktuella världen. Det hindrar spelare från att utforska världen utanför den angivna gränsen.

**Exempel:**

``/worldborder center 0 0``

Sätter världens mittpunkt till koordinaterna 0;0, därifrån räknas och sätts radien.

``/worldborder set 16000``

Sätter gränsen till 16 000x16 000 block. Det motsvarar alltså 8 000 block radie i varje riktning.

### /effect

Detta låter spelare (eller entiteter) få vanliga potion-effekter.  
Vissa effekter kan bara fås via kommandon, som lycko-effekten som ännu inte har någon funktion.

:::info
Kommandot har ändrats och utökats under olika versioner.

Exemplen nedan är från den senaste versionen och kan därför se annorlunda ut i äldre versioner!
:::

**Exempel:**

``/effect give PlayerA minecraft:speed``

Ger spelaren *PlayerA* hastighetseffekt på **Speed 1**.

### /gamerule

Det här kommandot kan användas för att ändra speciella inställningar i en värld eller aktivera/inaktivera speciella funktioner.  
Till exempel kan man som i exemplet nedan aktivera att spelare behåller sin inventarie vid död.

**Exempel:**

``/gamerule keepInventory true``

En världinställning som gör att spelare behåller sin inventarie (inklusive erfarenhet) vid död.

``/gamerule mobGriefing false``

Definierar om monster som Creepers kan förstöra världen eller inte.

### /save-all

Servern sparar världen var 5:e minut och skriver data till disken.  
Med det här kommandot sparas världen direkt och nedräkningen för autosparandet återställs till 5 minuter.

### /tps

Det här kommandot visar TPS (ticks per second) för Spigot och Paper Spigot.  
TPS ger info om serverns prestanda. Max och bästa TPS är 20.  
TPS visar de senaste 60 sekunderna, och de två följande värdena är medelvärden för 5 och 15 minuter.

### /ban

Det här kommandot kan användas för att utesluta en spelare från servern, så att spelaren inte kan gå in på servern alls. Spelarkontot bannas baserat på dess UUID.

:::info
På servrar med avaktiverat online-läge kan spelare byta namn och få tillgång igen. Då är IP-ban via plugins bästa lösningen.
:::

**Exempel:**

``/ban PlayerA``

Spelaren *PlayerA* bannas från servern.

``/ban @a``

Alla nuvarande spelare på servern bannas. Admins med OP-rättigheter påverkas inte och stannar kvar.

### /pardon

Med det här kommandot kan du ta bort en ban (som beskrivits ovan) så att spelaren kan gå in på servern igen.

**Exempel:**

``/pardon PlayerA``

Spelaren *PlayerA* tas bort från banlistan och kan gå in på servern igen.

### /kick

Det här kommandot stänger anslutningen mellan servern och den angivna spelaren. Spelaren tvingas lämna servern men kan ansluta igen.

**Exempel:**

``/kick PlayerA``

Sparkar ut spelaren *PlayerA* från servern med meddelandet "Kicked by an operator".

``/kick PlayerA Reason``

Sparkar ut spelaren *PlayerA* från servern med meddelandet "Reason".

<InlineVoucher />