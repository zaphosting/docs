---
id: conan-becomeadmin
title: "Conan Exiles: Bli admin på din egen server"
description: "Upptäck hur du ger administratörsrättigheter för full kontroll över din server och hanterar spel-funktioner effektivt → Läs mer nu"
sidebar_label: Bli admin
services:
  - gameserver-conan
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och heltäckande administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att ge administratörsrättigheter på din server beskrivs nedan.  
<InlineVoucher />

## Konfiguration
För att ge administratörsrättigheter till dig själv eller andra spelare måste du först sätta ett admin-lösenord för servern. Detta lösenord ställer du in i **Inställningar** för din server, som du hittar i kontrollpanelen.

![](https://screensaver01.zap-hosting.com/index.php/s/gpHQXB9tk46RpLL/preview)

Inne på sidan **Inställningar** letar du upp "Admin Password" och ändrar det gärna till ett lösenord du gillar.

![](https://screensaver01.zap-hosting.com/index.php/s/bKWx4qCj3aj6agA/preview)

När lösenordet är satt, spara ändringarna och starta om din server en gång. Därefter kan du ansluta till din server och öppna Serverinställningar genom att trycka på ESC. Där kan du ange Admin Password och bli admin.

![](https://screensaver01.zap-hosting.com/index.php/s/giLP794irsw8bjK/preview)

Efter det kan du köra alla serverkommandon som admin. Här nedan hittar du en översikt över de vanligaste kommandona.

## Vanliga kommandon

| Kommando                                              | Beskrivning                                                  |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| MakeMeAdmin [AdminPassword]                           | Aktiverar admin-läge                                         |
| MakeMeNormal                                          | Avaktiverar admin-läge                                       |
| LearnEmote [emote]                                    | Skriv /emote [emote] i chatten eller håll ner R för att visa emote-menyn. Kräver admin-läge |
| God                                                   | Aktiverar/avaktiverar gudaläge                              |
| PlayerCanBuildEverywhere [PlayerName]                 | Tillåter byggande överallt för angiven spelare              |
| Teleport                                              | Teleportera till en yta eller upp i luften                   |
| TeleportPlayer X[float] Y[float] Z[float]             | Teleporterar dig eller en annan spelare till angivna koordinater |
| TeleportToPlayer [PlayerName]                         | Teleporterar dig till angiven spelare                        |
| Fly                                                   | Aktiverar flygläge                                          |
| Ghost                                                 | Aktiverar spökläge (osynlig, noclip)                         |
| SetServerSetting serverSetting[FString] Value[FString] | Gör att du kan ändra serverinställningar från ServerSettings.ini under spelets gång |

Fler admin-kommandon relaterade till spelet hittar du på [Gamepedia](https://conanexiles.gamepedia.com/Admin_Panel) för Conan Exiles.

## Avslutning

Grattis, du har nu framgångsrikt konfigurerat administratörsrättigheterna. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />