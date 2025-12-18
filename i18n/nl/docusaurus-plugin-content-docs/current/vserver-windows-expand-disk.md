---
id: vserver-windows-expand-disk
title: "VPS: Schijf (partitie) uitbreiden op Windows Server"
description: "Ontdek hoe je veilig je Windows server partitie uitbreidt om nieuwe schijfruimte optimaal te benutten → Leer het nu"
sidebar_label: Schijf (Partitie) Uitbreiden
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Windows OS heeft ingebouwde schijf- en partitiebeheer waarmee je makkelijk allerlei acties kunt uitvoeren, zoals partities uitbreiden, schijven splitsen en meer. Een belangrijk onderdeel hiervan is het kunnen uitbreiden van partities, vooral na een upgrade van je opslagcapaciteit op je Windows server. In deze gids leggen we uit hoe je een partitie op je Windows server uitbreidt.

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je Windows server via RDP. Hulp nodig? Check dan onze [Eerste Toegang (RDP)](vserver-windows-userdp.md) gids.

Er zijn twee manieren om schijven en partities te beheren: via de **Schijfbeheer** tool (GUI) of via de **diskpart** command line interface (CLI). De **Schijfbeheer** tool is een grafische versie van Diskpart en kan de meeste standaard acties uitvoeren, inclusief partities uitbreiden. Voor gevorderde gebruikers is `diskpart` krachtiger en uitgebreider.

## Partitie Uitbreiden

In sommige gevallen wil je je bestaande partitie uitbreiden om nieuwe schijfruimte te gebruiken. Bijvoorbeeld na een upgrade van je serverdisk, want standaard wordt die extra ruimte niet toegewezen totdat je je hoofdpartitie uitbreidt.

Wij raden aan om de **Schijfbeheer** tool te gebruiken, omdat dit veel makkelijker is, vooral als je beginner bent. Dit proces is veilig en je data blijft onaangetast.

<Tabs>
<TabItem value="disk-management" label="Via Schijfbeheer (GUI)" default>

Open eerst de **Schijfbeheer** tool. Zoek dit op in het startmenu, of open het via Uitvoeren (`Windows-toets + R`) en typ `diskmgmt.msc`, gevolgd door Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/xfMexYdrJMr3L6Y/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/gKjkst3H89knLFa/preview)

Klik met de rechtermuisknop op de hoofdpartitie en kies **Volume uitbreiden**. Er opent dan een wizard.

:::tip
De hoofdopstartschijf is altijd de **C:** schijf.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/nWMStW6T74SrrRe/preview)

Klik in de wizard op **Volgende**. Je komt dan op een pagina waar je kunt aangeven hoeveel ruimte je wilt toevoegen. Standaard vult Windows automatisch de totale niet-toegewezen ruimte in, wat ideaal is.

Klik dus weer op **Volgende** en daarna op **Voltooien** om het proces af te ronden.

![](https://screensaver01.zap-hosting.com/index.php/s/MwRFS8eCHoqBSNt/download)

Als het klaar is, zie je in Schijfbeheer de nieuwe grootte van je partitie.

![](https://screensaver01.zap-hosting.com/index.php/s/M46ca4FkeG42AZz/preview)

</TabItem>

<TabItem value="diskpart" label="Via Diskpart (CLI)">

Open een opdrachtprompt als administrator. Zoek dit op in het startmenu, klik met rechts en kies **Als administrator uitvoeren**.

Typ `diskpart` om de CLI tool te starten. Typ daarna `list disk` om alle aangesloten schijven te zien.

Kies de schijf die je wilt uitbreiden met `select disk [schijfnummer]`, waarbij je `[schijfnummer]` vervangt door het nummer uit de lijst.

:::tip
De hoofdopstartschijf is altijd de **C:** schijf.
:::

Typ `list volume` om alle volumes op die schijf te zien. Zoek het volume dat je wilt uitbreiden en selecteer het met `select volume [volumenummer]`.

Met de schijf en het volume geselecteerd, kun je het volume uitbreiden met het volgende commando. Je kunt het commando zonder extra parameters gebruiken om alle niet-toegewezen ruimte te gebruiken, of een specifieke grootte opgeven.
```
# Uitbreiden met alle niet-toegewezen ruimte
extend

# Uitbreiden met een specifieke grootte (10240 = 10240MB = 10GB)
extend size=10240
```

Als het lukt, zie je dat het volume groter is geworden als je de volumes opnieuw opvraagt of in de Verkenner kijkt. Typ `quit` om diskpart af te sluiten.

</TabItem>
</Tabs>

## Afsluiting

Je hebt nu succesvol je hoofdpartitie uitgebreid om alle beschikbare schijfruimte te gebruiken. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, we staan elke dag voor je klaar! 🙂

<InlineVoucher />