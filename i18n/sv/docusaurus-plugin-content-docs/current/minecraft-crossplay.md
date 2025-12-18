---
id: minecraft-crossplay
title: "Minecraft: Så här ställer du in crossplay mellan Minecraft Java & Bedrock Edition"
description: "Upptäck hur du aktiverar smidig crossplay mellan Minecraft Java och Bedrock med GeyserMC och Floodgate-plugins för en bättre multiplayerupplevelse → Läs mer nu"
sidebar_label: Java & Bedrock Crossplay
services:
  - gameserver-minecraft
---

## Introduktion

Traditionellt har det inte varit möjligt att spela tillsammans över både Minecraft Java och Bedrock edition eftersom båda ses som helt separata plattformar. Som tur är kan du numera göra crossplay möjligt genom att använda specifika plugins för Java Edition-servrar som låter Bedrock-spelare ansluta. I den här guiden går vi igenom hur du installerar och ställer in GeyserMC-pluginet tillsammans med Floodgate-pluginet för att göra crossplay mellan båda plattformarna enkelt och smidigt.

## Förberedelser

För att ställa in crossplay behöver du ha en Minecraft-server som kör någon av de kompatibla Java-serverprogramvarorna. Vi rekommenderar att använda Paper, Spigot eller Bukkit, som är de mest populära alternativen.

Du bör ha en Minecraft Game Server redo med något av dessa spel installerade och aktiverade. Behöver du hjälp med detta? Kolla in vår [Game Change](gameserver-gameswitch.md)-guide.

## Installation

Börja med att gå till din gameservers webbgränssnitt och navigera till **Inställningar->Plugins**. På den sidan hittar du dropdown-menyn för **GeyserMC** och väljer den. Klicka på install-knappen för att automatiskt installera pluginet på din server och vänta tills progressbaren är klar.

Vi rekommenderar också att installera **Floodgate**-pluginet som finns i samma sektion, eftersom det ger flera fördelar som:
- Låter Bedrock Edition-spelare ansluta utan att behöva ett Java-konto.
- Möjlighet att se Bedrock-skinn på Java edition.
- Olika utvecklarrelaterade fördelar.

:::note
Floodgate-pluginet är valfritt, men vi rekommenderar starkt att du installerar det eftersom det gör crossplay mycket smidigare för Bedrock-spelare.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cagcHmzwR2yBZSo/preview)

När pluginen är installerade på din server, gå vidare till nästa avsnitt för att konfigurera inställningarna.

## Konfigurera Plugins

I samma **Plugins**-sektion i webbgränssnittet, klicka på den blå inställningsikonen bredvid GeyserMC-pluginet. Det tar dig automatiskt till rätt plats under **Inställningar**.

![](https://screensaver01.zap-hosting.com/index.php/s/RAZKNSdePa5wBs4/preview)

Här kan du anpassa servernamnet och MOTD-raderna som visas specifikt för Bedrock Edition-spelare.

![](https://screensaver01.zap-hosting.com/index.php/s/kBzxQkmNgdsWgZb/preview)

Scrolla ner till botten av sidan för att se vilka portar som är tilldelade din server.

- **Game Port** är huvudserverporten som ska användas när du ansluter med vanliga Java Edition-klienter.
- **Port 5** är porten som GeyserMC-pluginet använder. Den ska du använda när du ansluter med Bedrock Edition-klienter.

När du ansluter från en klient, se till att använda rätt port beroende på Minecraft-klientens edition.

:::tip
För kunder med serverkonfigurationen **Egen IP** går det att få en anpassad port tilldelad på begäran för att skräddarsy porten efter dina önskemål. Du kan [kontakta support](https://zap-hosting.com/en/customer/support/) via en ticket för att be om detta.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/joA62kWeJ5crCmY/preview)

<!--

### Floodgate Plugin

Om du valde att installera Floodgate-pluginet måste du justera GeyserMC:s konfigurationsfil för att aktivera det som huvudautentiseringsmetod. Se till att servern är avstängd innan du redigerar konfigurationsfiler, annars kan ändringar skrivas över.

Gå till **Configs** i ditt gameservers webbpanel och öppna filen `plugins/Geyser-[din_servertype]/config.yml` med den blå redigeringsknappen.

![](https://screensaver01.zap-hosting.com/index.php/s/ixCtkQ5WWWacfGe/preview)

I filen, hitta parametern `auth-type` under `remote`-sektionen och ändra värdet från **online** till **floodgate** innan du sparar.

![](https://screensaver01.zap-hosting.com/index.php/s/c6JRFxPfjGBSWZi/preview)

GeyserMC kommer nu använda Floodgate-pluginet för användarautentisering, vilket ger dig de fördelar vi nämnt tidigare.
-->

## Anslutning & Felsökning

När pluginet är konfigurerat, starta om servern för att nya inställningar ska börja gälla. Försök sedan ansluta till servern från båda spelversionerna för att säkerställa att allt funkar.

Se till att använda rätt portar beroende på spelversion. Det ska vara **Port 5** för Bedrock-spelare och **Game Port** för Java-spelare, som du hittar under **Inställningar**. Du kan också se dem genom att hovra över informationsikonen på dashboarden i webbgränssnittet.

![](https://screensaver01.zap-hosting.com/index.php/s/M42ZkamKHieRcEz/preview)

När det funkar ska du nu kunna crossplaya och enkelt ansluta från båda spelversionerna.

![](https://screensaver01.zap-hosting.com/index.php/s/oMRWkaSs5KKbkzy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/xyMaENLFx4BCSPF/preview)

Om du har problem att ansluta, testa följande felsökningssteg som löser de vanligaste problemen.

#### Klient för gammal - Server för gammal

Det här felet betyder att servern och klienten har olika spelversioner. Om du har detta problem på Java Edition, byt enkelt till rätt spelversion via launchern.

Tyvärr går det inte lika smidigt att byta version på Bedrock. Så om du har detta problem på en Minecraft Bedrock Edition-klient, se till att uppdatera både appen och servern till senaste versionerna.

Vi rekommenderar också att använda ViaVersion och ViaBackwards-plugins som utökar vilka spelversioner servern kan ta emot, så att användare med äldre eller nyare versioner ändå kan ansluta. Precis som tidigare, gå till **Plugins** i webbgränssnittet och under dropdown-menyn **Alla Plugins**, hitta **ViaVersion** och **ViaBackwards**. Klicka på den gröna nedladdningsikonen för att installera dem på din server.

:::note
Om du har problem att installera plugin via webbgränssnittet kan det bero på att pluginet saknar en stabil senaste version. I sådana fall rekommenderar vi att du manuellt laddar ner en beta-version från pluginets hemsida och laddar upp via FTP. Läs mer om hur du gör detta i vår [FTP Access](gameserver-ftpaccess.md)-guide.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QCcndf6TGMsrw7x/preview)

När pluginen är installerade, försök ansluta igen – nu ska det fungera från fler spelversioner.

#### Kan inte ansluta till världen

Vanligaste orsaken till detta är att fel port används när du lägger till servern i klienten. Se till att använda porten som står under **Port 5** i **Inställningar** i ditt gameservers webbgränssnitt när du ansluter från Bedrock Edition-klienter. För Java Edition-klienter, använd huvudporten **Game Port**.

Om problemet kvarstår, kolla GeyserMC:s konfigurationsfil för att säkerställa att rätt portar är inställda. Gå till **Configs** i webbgränssnittet och öppna filen `plugins/Geyser-[din_servertype]/config.yml` med den blå redigeringsknappen.

I filen, leta upp `port`-parametrarna under `bedrock` och `remote`. Se till att bedrock-porten är satt till värdet under **Port 5** i **Inställningar** och att remote-porten är satt till antingen **25565** eller **Game Port**.

![](https://screensaver01.zap-hosting.com/index.php/s/AcZ5JAasBcKQpCm/preview)

## Avslutning

Grattis! Du har nu framgångsrikt installerat och konfigurerat GeyserMC-pluginet på din Minecraft-server och öppnat upp för crossplay mellan Java och Bedrock edition! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂