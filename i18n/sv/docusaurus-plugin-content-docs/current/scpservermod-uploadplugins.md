---
id: scpservermod-uploadplugins
title: "SCP Secret Laboratory: Installera plugins på servern"
description: "Lär dig hur du installerar och konfigurerar SMOD-plugins för din SCP-server för att förbättra gameplay och serverfunktioner → Läs mer nu"
sidebar_label: Installera Plugins
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Arkiverad guide
Det här dokumentet har arkiverats. Dokument arkiveras om de inte längre är relevanta, felaktiga eller uppdaterade. Det har arkiverats av följande anledning:

Anledning: Servermod-tillägget för SCP har övergivits och kommer därför inte längre att underhållas. Vi rekommenderar att du istället byter till **[SCP:EXILED](exiled-plugins.md)**. 
::::

<InlineVoucher />

## Anslut till FTP

Innan du kan installera plugins måste du ställa in [åtkomst via FTP](gameserver-ftpaccess.md).

När det är klart kan du ansluta och öppna följande servermapp:
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/2Fid5MKq57YDCNj/preview)

## Installera Plugins

### Hitta Plugins

Först måste du hitta tillgängliga SMOD-kompatibla plugins.

Bästa stället att hitta dem är direkt i deras [Discord](https://discord.gg/T9aurNf)

:::info
Det här är bara ett ställe där du kan hitta dem. De kan finnas på andra ställen också. Det är viktigt att dubbelkolla att de är kompatibla med din SMOD-version. 
:::

I det här exemplet hämtar vi följande plugin:

![](https://screensaver01.zap-hosting.com/index.php/s/bEEQP3cm33fgMFi/preview)

### Ladda upp Plugins

När du har laddat ner dina önskade plugins laddar du upp dem till din server via FTP. Du kan enkelt **dra & släppa** dem i **sm_plugins-mappen.**

![](https://screensaver01.zap-hosting.com/index.php/s/HzRKJXFyENqK4N8/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/kSSMs23E6g4PfwN/preview)

:::info
Obs: Efter varje plugin-installation måste du **starta om din server** för att ändringarna ska **träda i kraft.**
:::

### Konfigurera Plugins

Beroende på plugin kan det finnas olika inställningar du behöver lägga till i din config_gameplay.txt.

I vårt exempel-plugin definieras följande inställningar.

![](https://screensaver01.zap-hosting.com/index.php/s/5PrLzeCQaFamGRn/preview)

För att lägga till dessa redigerar vi config_gameplay.txt.

Du hittar den under fliken **Configs** till vänster.

![](https://screensaver01.zap-hosting.com/index.php/s/mMck39x2mEnLtLY/preview)

Sen hittar vi **config_gameplay.txt**

![](https://screensaver01.zap-hosting.com/index.php/s/SGLpBYM5DAWRRzN/preview)

:::info
Inställningarna kan egentligen skrivas var som helst. För bästa praxis skriver vi dem under '#Misc gameplay settings' i config_gameplay.txt-filen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/JMK542jpCj472ag/preview)

:::info
OBS: Beroende på plugin kommer dina inställningar att skilja sig. Läs alltid instruktionerna som följer med pluginet för att lägga till konfigurationerna korrekt.
:::

När inställningarna är klara startar du om servern (eller startar den) och kollar direkt i spelet!  

<InlineVoucher />