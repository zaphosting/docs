---
id: palworld-update-your-server
title: "Palworld: Uppdatera Din Server"
description: "Lär dig hur du uppdaterar din Palworld-server, triggar en versionsuppdatering och verifierar den senaste Palworld-spelversionen på ZAP-Hosting -> Läs mer nu"
sidebar_label: Palworld: Uppdatera Din Server
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld-serveruppdateringar krävs för att hålla din server kompatibel med den senaste Palworld-spelversionen och klientuppdateringen. I den här guiden lär du dig hur du uppdaterar din Palworld-server på ZAP-Hosting, var du kan kontrollera relevanta inställningar och vad du gör om uppdateringen inte tillämpas korrekt.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt och behörighet att starta om eller installera om servern vid behov.

:::info Krav på serveråtkomst
Du behöver tillgång till din spelserveradministration, inklusive **Configs**, **Console** och strömstyrning i ZAP-Hosting-panelen.
:::

:::note Om konfigurationsfiler
För Palworld-uppdateringar finns normalt ingen gameplay-konfigurationsfil som du behöver redigera för att installera en ny spelversion. Uppdateringsprocessen hanteras vanligtvis av serverinstallationen själv. Du bör ändå kontrollera dina serverinställningar i panelen om du hanterar uppdateringsbeteendet manuellt.
:::

## Hur Palworld-serveruppdateringar fungerar på ZAP-Hosting

Palworld dedikerade servrar på hostingplattformar uppdateras vanligtvis när serverinstallationen kontrollerar efter en nyare version vid uppstart. Baserat på tillgänglig referensinformation utför ZAP-Hosting-servrar normalt denna kontroll automatiskt vid serverstart eller omstart.

Om din server redan är konfigurerad för automatiska uppdateringar behöver du oftast bara starta om den efter en ny Palworld-release. Om automatisk uppdatering är avstängd i dina tjänsteinställningar måste du manuellt starta om servern efter varje patch så att uppdateringskontrollen kan köras.

:::caution Tillgänglighet för automatisk uppdatering
Den exakta benämningen och tillgängligheten för kontroller av automatisk uppdatering kan variera beroende på aktuell ZAP-Hosting spelservergränssnitt och produktuppsättning. Om du inte ser en uppdateringsrelaterad växlingsknapp i dina serverinställningar, anta inte att den saknas permanent; alternativet kan skilja sig mellan produktversioner eller hanteras automatiskt i bakgrunden.
:::

## Kontrollera relevanta serverinställningar

Börja med att öppna din Palworld-server i ZAP-Hostings webbgränssnitt och granska tillgängliga inställningar relaterade till uppdateringar och uppstartsbeteende.

### Öppna din serveradministration

1. Logga in på ZAP-Hostings webbgränssnitt.
2. Öppna din **Palworld**-spelserver.
3. Granska tillgängliga sektioner som **Configs**, **Console** och serverns strömstyrning.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Verifiera om en konfigurationsfil måste redigeras

För själva Palworld-uppdateringsprocessen finns ingen bekräftad Palworld-konfigurationsfil som ändrar spelversionen manuellt i standardserverdrift. De relevanta Palworld gameplay-konfigurationsfilerna under **Configs** används generellt för serverinställningar som spelregler, inte för att ladda ner en ny serverversion.

Den vanligt använda Palworld-inställningsfilen är:

| Fil | Typiskt syfte | Var du hittar den |
| --- | --- | --- |
| `PalWorldSettings.ini` | Inställningar för gameplay och serverbeteende | Serveradministrationen under **Configs** |

:::note Ingen manuell versionspost
Det finns ingen verifierad nyckel i `PalWorldSettings.ini` för att tvinga en specifik Palworld-serverversionsuppdatering i en standard ZAP-Hosting-setup. Om ditt mål bara är att uppdatera serversoftwaren krävs normalt inte någon redigering av `PalWorldSettings.ini`.
:::

## Uppdatera servern

När du har bekräftat din serveråtkomst och kontrollerat tillgängliga inställningar kan du trigga uppdateringsprocessen.

### Starta om servern för att trigga en uppdateringskontroll

Den primära metoden är att starta om servern. På många hostade Palworld-servrar triggar uppstart en kontroll efter tillgängliga speluppdateringar.

1. Stoppa eller starta om din Palworld-server från ZAP-Hostings webbgränssnitt.
2. Vänta tills servern är helt avstängd.
3. Starta servern igen.
4. Vänta några minuter för att uppstarts- och uppdateringsprocessen ska slutföras.

Om ZAP-Hostings automatiska uppdateringsbeteende är aktivt för din tjänst bör denna omstart trigga servern att ladda ner och tillämpa den senaste tillgängliga Palworld-uppdateringen.

### Om automatiska uppdateringar är avstängda

Om din tjänst är konfigurerad att inte uppdatera automatiskt måste du manuellt starta om servern efter varje Palworld-patch eller versionsuppdatering.

Använd samma process:

1. Stoppa servern.
2. Starta servern igen.
3. Vänta tills servern har slutfört uppstarten.

:::tip Bästa praxis efter en Palworld-release
Efter ett nytt Palworld-releasedatum eller patch, starta om din server under en period med låg aktivitet. Detta hjälper till att undvika anslutningsproblem för spelare orsakade av mismatch mellan klient- och serverversion.
:::

## Verifiera att uppdateringen tillämpades

Efter att servern startat igen bör du bekräfta att den nya versionen är aktiv.

### Kontrollera konsolutdata

Öppna **Console** i din serveradministration och granska uppstartsloggen. Leta efter tecken på att servern startade normalt och inte stötte på uppdaterings- eller filvalideringsfel.

Eftersom exakta loggrader kan variera mellan serverversioner, fokusera på om servern startar framgångsrikt och accepterar anslutningar från klienter med senaste Palworld-spelversionen.

### Använd kommandot `info`

Om din serverkonsol stödjer det, kör följande kommando:

```text
info
```

Detta kommando kan användas för att kontrollera serverinformation efter uppstart.

| Kommando | Syfte |
| --- | --- |
| `info` | Visar serverinformation för verifiering efter uppdatering |

:::note Kommandots tillgänglighet
Stödet för konsolkommandon kan variera beroende på aktuell Palworld dedikerad serverimplementation och hur hosten exponerar konsoltillgång. Om `info` inte ger användbar utdata i din miljö, använd istället uppstartsloggen och ett anslutningstest från en uppdaterad spelklient.
:::

## Felsökning av misslyckad uppdatering

Om omstarten inte uppdaterar servern bör du använda återställningsalternativen i ZAP-Hosting-panelen.

### Installera om eller verifiera serverfilerna

Om servern fortfarande verkar köra en gammal version efter omstart:

1. Stoppa servern helt.
2. Öppna alternativet för ominstallation eller återställning i din ZAP-Hosting serveradministration.
3. Om tillgängligt, använd en **Verifiera integritet** eller liknande filkontroll.
4. Starta servern igen när processen är klar.

Denna process kontrollerar eller laddar ner Palworld-serverfilerna på nytt och kan lösa ofullständiga eller misslyckade uppdateringar.

:::caution Säkerhetskopiera innan ominstallation
Innan du använder ominstallationsfunktioner, se till att du förstår om det valda alternativet påverkar endast speldata eller även världens data. Om panelen inte tydligt förklarar detta, skapa en backup först eller kontakta support innan du fortsätter.
:::

### Bekräfta att klient- och serverversion matchar

Ibland är servern uppdaterad korrekt, men spelare kan ändå inte ansluta eftersom deras lokala spelklient har en annan version.

Kontrollera följande:

| Kontroll | Varför det är viktigt |
| --- | --- |
| Servern startades om efter patch | Uppstart triggar ofta uppdateringen |
| Senaste klientuppdateringen installerad | Spelare behöver samma spelversion |
| Inga uppstarts-fel i konsolen | Fel kan hindra uppdateringsslutförande |
| Filverifiering genomförd | Korrupta filer kan blockera uppdateringar |

## Vad du behöver redigera i Configs

Eftersom denna guide specifikt täcker en manuell process och uppgiften nämner **Configs**, är det viktigt att klargöra omfattningen:

- Palworld-konfigurationsfilerna under **Configs** används för serverinställningar.
- Det finns ingen verifierad Palworld-konfigurationspost i `PalWorldSettings.ini` som manuellt laddar ner eller tillämpar en serverprogramvaruuppdatering.
- För en normal versionsuppdatering behöver du generellt **inte** ändra något värde i konfigurationsfilen.
- Den nödvändiga åtgärden är vanligtvis en **serveromstart**, följt av en **filverifiering eller ominstallation** endast om uppdateringen misslyckas.

Om ZAP-Hosting senare exponerar en dedikerad uppdateringsknapp eller startparameter i panelen bör du använda exakt den benämning som visas i ditt gränssnitt istället för att lägga till icke-stödda poster i konfigurationsfilen.

:::danger Lägg inte till overifierade konfigurationsnycklar
Klistra inte in slumpmässiga uppdateringskommandon, SteamCMD-parametrar eller odokumenterade nycklar i `PalWorldSettings.ini` eller andra filer under **Configs** om de inte uttryckligen dokumenterats för din aktuella ZAP-Hosting Palworld-tjänst. Ostödda poster uppdaterar inte servern pålitligt och kan orsaka konfigurationsproblem.
:::

## Efter uppdateringen

När uppdateringen har tillämpats framgångsrikt:

1. Se till att servern körs normalt.
2. Granska konsolen efter fel.
3. Testa att ansluta till servern med en uppdaterad Palworld-klient.
4. Kör `info` i konsolen om det stöds.

Vid det här laget bör din server vara redo för spelare på den senaste versionsuppdateringen.

## Conclusion

Congratulations, you have successfully updated your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂