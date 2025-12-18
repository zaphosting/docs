---
id: vserver-windows-expand-disk
title: "VPS: Utöka disken (partition) på Windows Server"
description: "Upptäck hur du säkert utökar din Windows-serverpartition för att effektivt använda nytt diskutrymme → Läs mer nu"
sidebar_label: Utöka Disk (Partition)
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Windows OS har inbyggda verktyg för disk- och partitionhantering som låter dig enkelt utföra en mängd olika åtgärder, inklusive att utöka partitioner, dela diskar och mer. En viktig funktion är möjligheten att utöka partitioner, vilket är extra viktigt efter att du uppgraderat lagringskapaciteten på din Windows-server. I den här guiden går vi igenom hur du utökar en partition på din Windows-server.

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din Windows-server via RDP. Om du behöver hjälp med detta, kolla in vår guide för [Initial Access (RDP)](vserver-windows-userdp.md).

Det finns två sätt att hantera diskar och partitioner: via **Diskhantering** (Disk Management) som är ett grafiskt verktyg, eller via kommandoradsverktyget **diskpart**. Diskhantering ger en GUI-version av diskpart och kan utföra de flesta vanliga åtgärder, inklusive att utöka partitioner. För mer avancerade användare kan `diskpart` vara ett kraftfullare alternativ.

## Utöka partition

I flera situationer kan det vara nödvändigt att utöka din befintliga partition för att använda nytt diskutrymme. Ett vanligt scenario är när du uppgraderar serverns diskutrymme, vilket som standard inte tilldelas förrän du utökar din huvudpartition.

Vi rekommenderar att använda **Diskhantering** eftersom det är mycket enklare, särskilt för nybörjare. Processen är säker och påverkar inte dina data alls.

<Tabs>
<TabItem value="disk-management" label="Via Diskhantering (GUI)" default>

Börja med att öppna **Diskhantering**. Sök efter det i startmenyn eller öppna det via Kör genom att trycka `Windows-tangenten + R` och skriva `diskmgmt.msc` följt av Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/xfMexYdrJMr3L6Y/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/gKjkst3H89knLFa/preview)

När verktyget är öppet, högerklicka på huvudpartitionen och välj **Utöka volym** (Extend Volume) för att öppna en ny guide.

:::tip
Huvudbootdisken är alltid **C:**-enheten.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/nWMStW6T74SrrRe/preview)

I guiden klickar du på **Nästa** för att komma till sidan där du kan ange hur mycket utrymme du vill lägga till. Windows fyller automatiskt i all tillgänglig oallokerad plats, vilket är det optimala.

Klicka på **Nästa** igen och avsluta med **Slutför** för att genomföra processen.

![](https://screensaver01.zap-hosting.com/index.php/s/MwRFS8eCHoqBSNt/download)

När processen är klar visas den uppdaterade diskstorleken i Diskhantering.

![](https://screensaver01.zap-hosting.com/index.php/s/M46ca4FkeG42AZz/preview)

</TabItem>

<TabItem value="diskpart" label="Via Diskpart (CLI)">

Börja med att öppna Kommandotolken som administratör. Sök efter den i startmenyn, högerklicka och välj **Kör som administratör**.

Skriv `diskpart` för att starta verktyget. När det är igång, kör `list disk` för att visa alla anslutna diskar.

Kör sedan `select disk [disknummer]` där du byter ut `[disknummer]` mot numret på den disk du vill utöka från listan.

:::tip
Huvudbootdisken är alltid **C:**-enheten.
:::

Med disken vald, kör `list volume` för att visa alla volymer på den valda disken. Hitta volymen du vill utöka och kör `select volume [volymnummer]` där du byter ut `[volymnummer]` mot rätt nummer.

När både disk och volym är valda kan du utöka volymen med följande kommando. Du kan antingen köra kommandot utan argument för att använda all oallokerad plats, eller ange en specifik storlek.
```
# Utöka till all oallokerad plats
extend

# Utöka till en specifik storlek (10240 = 10240MB = 10GB)
extend size=10240
```

Om det lyckas kommer volymstorleken att öka när du listar diskar igen eller kollar i Utforskaren. Avsluta diskpart med kommandot `quit`.

</TabItem>
</Tabs>

## Avslutning

Du har nu framgångsrikt utökat din huvudpartition för att använda allt tillgängligt diskutrymme. Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns här för dig varje dag! 🙂

<InlineVoucher />