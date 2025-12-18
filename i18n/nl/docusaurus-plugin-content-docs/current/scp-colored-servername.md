---
id: scp-colored-servername
title: "SCP Secret Laboratory: Gekleurde Servernaam"
description: "Leer hoe je je servernaam aanpast met gekleurde tekst voor betere zichtbaarheid en stijl → Ontdek het nu"
sidebar_label: Gekleurde Servernaam
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Om je server in de publieke serverlijst te tonen, moet je een Pastebin ID instellen. Je vindt onze handleiding [Pastebin ID](scp-pastebin.md).

De server moet uitgeschakeld zijn voordat wijzigingen van kracht worden.
:::

<InlineVoucher />

Open je serverinstellingen en check of 'SCP Servernaam' leeg is.

![](https://screensaver01.zap-hosting.com/index.php/s/Y9BXkJnBGXy3jWP/preview)

Als je zeker weet dat er niets ingevuld staat, ga dan naar het tabblad 'Configs', dat één menu onder de instellingen zit.

Open nu het bestand config_gameplay.txt door op de blauwe knop te klikken.

![](https://screensaver01.zap-hosting.com/index.php/s/FAm8KQfAonpTWp2/preview)

Onze Config-Editor is nu open, je kunt je servernaam aanpassen met "server_name". Door gebruik te maken van [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) kun je verschillende kleuren toepassen.

![](https://screensaver01.zap-hosting.com/index.php/s/jebLtwqZToWJ27C/preview)

In dit voorbeeld wil ik dat "Groene Tekst", "Blauwe Tekst" en "Rode Tekst" in de bijpassende kleur worden weergegeven.

Hiervoor moet je de `<color="COLOR">Je Tekst</color>` tag gebruiken. Je vindt alle beschikbare kleuren [hier](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html). Het is ook mogelijk om andere eigenschappen aan te passen, zoals de grootte.
:::info
Belangrijk: de aanhalingstekens " " zijn verplicht rond de kleur binnen de tag, zoals in het bovenstaande voorbeeld.
:::

Als je klaar bent met je aanpassingen, sla ze dan op.

:::info
Start je server opnieuw op, dan wordt je servernaam nu gekleurd weergegeven.
:::

<InlineVoucher />