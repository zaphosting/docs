---
id: palworld-troubleshooting
title: "Palworld: Felsökning"
description: "Åtgärda vanliga Palworld-serverproblem som Palworld Steam-uppdateringsproblem, anslutningstidsgränser och Steam-fel på din spelserver. -> Läs mer nu"
sidebar_label: Palworld: Felsökning
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld dedikerade servrar kan ibland stöta på problem med uppdateringar, uppstart och anslutningar, särskilt efter en Palworld Steam-uppdatering eller när tredjepartsmodifikationer är installerade. I den här guiden lär du dig hur du identifierar vanliga problem, vilka filer eller inställningar du ska kontrollera i din ZAP-Hosting spelserveradministration och vilka åtgärder som krävs för att återställa normal drift.



## Preparation

Innan du börjar felsöka, se till att du har tillgång till din Palworld spelserveradministration och kan öppna serverkonsolen samt avsnittet `Configs`.

:::info Krävd åtkomst
Du behöver åtkomst till ZAP-Hostings webbgränssnitt för din Palworld-server så att du kan stoppa, starta, installera om och redigera konfigurationsfiler vid behov.
:::

:::note Om konfigurationsfiler
De flesta problem i den här guiden löses inte enbart genom att ändra spelinställningar. Om du behöver granska eller manuellt justera Palworld-serverinställningar finns den relevanta filen vanligtvis under `Configs` i din spelserveradministration.
:::

## Hitta rätt konfigurationsfil

För Palworld dedikerade servrar lagras de huvudsakliga serverinställningarna vanligtvis i följande fil:

```ini
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

I ZAP-Hostings spelserveradministration kan du oftast nå denna fil via avsnittet `Configs`.

### Vad den här filen används till

`PalWorldSettings.ini` innehåller huvuddelen av `OptionSettings`-raden med servervärden som:

- servernamn
- lösenord
- adminlösenord
- spelargränser
- spelmultiplikatorer
- PvP- och raid-inställningar

En typisk struktur ser ut ungefär så här:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="[your_server_name]",ServerDescription="[your_server_description]",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]")
```

:::caution Redigera syntax försiktigt
Palworld använder en enda `OptionSettings=(...)`-struktur för många inställningar. Om du råkar ta bort ett kommatecken, citattecken eller en parentes kan din server misslyckas med att starta korrekt.
:::

### När du behöver redigera den

Du bör bara redigera `PalWorldSettings.ini` när:

- du behöver korrigera ett felaktigt server- eller adminlösenord
- du vill ta bort ogiltiga värden efter en misslyckad manuell ändring
- du testar om ett uppstartsproblem orsakas av en trasig konfigurationspost

Efter att du sparat ändringarna i filen bör du starta om servern så att de nya inställningarna tillämpas.

## Felsök uppdateringsfel

Ett av de vanligaste problemen med Palworld-spelservrar är en misslyckad Steam-uppdatering.

### Fel: `app '2394010' state is 0x6 after update job`

Detta fel indikerar vanligtvis att speldata inte uppdaterades korrekt via Steam.

### Så här åtgärdar du felet

1. Stoppa din Palworld-server helt.
2. Öppna din spelserveradministration i ZAP-Hostings webbgränssnitt.
3. Gå till området där ominstallation eller reparationsåtgärder finns.
4. Starta en ominstallation eller verifiering av serverfilerna.
5. Vänta tills processen är helt klar.
6. Starta servern igen.

:::info Varför detta hjälper
En filverifiering eller ominstallation tvingar servern att ladda ner saknade eller skadade Palworld Steam-filer på nytt. Detta är den mest pålitliga lösningen för `0x6`-uppdateringsfelet.
:::

### Behöver du redigera en konfigurationsfil?

Normalt krävs ingen konfigurationsändring för detta fel.

| Problem | Konfigfil krävs | Ytterligare åtgärd |
| --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | Nej | Stoppa server, verifiera eller installera om filer, starta sedan servern igen |

## Felsök anslutningstidsgränser

Om spelare får meddelandet `Connection timed out` är orsaken oftast antingen ett uppstartsproblem, en trasig mod-konfiguration eller ett anslutningsproblem.

### Kontrollera om servern faktiskt körs

Börja med att bekräfta att servern har startat korrekt.

Du kan kontrollera detta genom att:

- se serverstatus i ZAP-Hostings webbgränssnitt
- öppna konsolen och leta efter normal uppstartsutdata
- kontrollera om servern svarar på konsolkommandon om det är tillgängligt

Om servern visar mycket låg aktivitet och inte svarar normalt kan den ha kraschat under uppstart.

### Granska senaste konfigurationsändringar

Om du redigerade `PalWorldSettings.ini` strax innan problemet började, öppna filen igen i `Configs` och kontrollera:

- saknade kommatecken
- trasiga citattecken
- duplicerade värden
- ogiltiga IP- eller lösenordsvärden

Exempel på poster att granska:

```ini
ServerName="[your_server_name]"
ServerPassword="[your_server_password]"
AdminPassword="[your_admin_password]"
PublicPort=8211
PublicIP="[your_server_ip]"
```

Om du är osäker på om problemet orsakas av konfigurationen, återställ de senaste ändringarna och starta om servern.

### Kontrollera mod- eller UE4SS-problem

Om Palworld nyligen uppdaterats och du använder mods eller `UE4SS` kan servern ha blivit inkompatibel.

I så fall bör du:

1. Stoppa servern.
2. Skapa en backup om det finns tillgängligt i din produktadministration.
3. Ta bort eller uppdatera installerade mods.
4. Starta servern igen och testa anslutningen.

:::caution Mod-kompatibilitet efter uppdateringar
Palworld Steam-uppdateringar kan bryta serverbaserade modifikationer. Om problemet började direkt efter en uppdatering är mods en av de första sakerna du bör kontrollera.
:::

### Använd direkt IP istället för senaste servrar

Palworld-klienter kan misslyckas med att ansluta korrekt via listan `Recent Servers` i spelet.

Anslut istället direkt med din server-IP och port.

Använd följande format:

```text
[your_server_ip]:8211
```

Byt ut `[your_server_ip]` mot den faktiska IP-adressen till din spelserver.

### Guild-relaterade världproblem

En tidsgräns kan också inträffa i vissa världstillstånd, till exempel om en guildmedlem lämnar medan andra guildmedlemmar är offline.

Möjliga lösningar inkluderar:

- att den drabbade spelaren går med i guilden igen
- att starta om världen
- att återställa från en backup om världen förblir oanvändbar

:::danger Risk för världdata
Om du misstänker korruption i världen eller sparfiler, undvik upprepade manuella ändringar utan backup. Skapa eller återställ en backup innan du gör destruktiva ändringar.
:::

## Felsök Steam-anslutningsfel

Steam-relaterade anslutningsproblem kan hindra din Palworld-server från att uppdateras eller bli tillgänglig.

### Fel: `Connecting anonymously to Steam Public...Retrying`

Detta meddelande är vanligtvis kopplat till ett tillfälligt Steam-tjänstproblem snarare än en trasig Palworld-konfiguration.

### Vad du bör göra

- vänta `5` till `10` minuter och försök igen
- kontrollera om Steam har underhåll eller driftstörning
- undvik upprepade omstarter under en tillfällig Steam-störning

Steam-underhåll sker ofta på tisdagar, så korta avbrott är möjliga.

### Automatiska uppdateringar under Steam-störningar

Om din server upprepade gånger försöker uppdatera under en Steam-störning kan den förbli otillgänglig tills Steam svarar normalt igen.

Om din produkt har en automatisk uppdateringsinställning i administrationsgränssnittet kan du tillfälligt inaktivera den tills störningen är över.

:::tip Hantera tillfällig Steam-störning
Om servern fungerade tidigare och plötsligt visar Steam-anslutningsförsök är det ofta bäst att vänta en stund istället för att omedelbart ändra konfigurationsfiler.
:::

### Behöver du redigera en konfigurationsfil?

Normalt krävs ingen konfigurationsfiländring för detta problem.

| Problem | Konfigfil krävs | Ytterligare åtgärd |
| --- | --- | --- |
| `Connecting anonymously to Steam Public...Retrying` | Nej | Vänta, kontrollera Steam-status, inaktivera eventuellt automatisk uppdatering tillfälligt |

## Felsök versionskonflikter

Om du ser ett meddelande om att matchen kör en inkompatibel version av spelet, stämmer inte serverns och klientens version överens.

### Så här åtgärdar du det

1. Starta om Palworld-servern.
2. Vänta tills servern har slutfört uppstarten.
3. Uppdatera din lokala Palworld-spelklient via Steam om det behövs.
4. Försök ansluta igen.

Om servern fortfarande rapporterar inkompatibel version kan uppdateringen ha misslyckats. Upprepa då verifierings- eller ominstallationsprocessen som beskrivits tidigare.

### Kontrollera serverinställningar efter en uppdatering

Versionskonflikter orsakas vanligtvis inte av `PalWorldSettings.ini`, men om servern kraschar efter en uppdatering är det ändå värt att bekräfta att konfigurationsfilen är giltig och oförändrad.

## Förstå normala Steam-uppstartsmeddelanden

Vissa uppstartsmeddelanden kan se kritiska ut trots att de är förväntade.

### Meddelande: `steamclient.so: cannot open shared object file: No such file or directory`

Detta meddelande rapporteras ofta vid uppstart och är generellt ofarligt för Palworld dedikerade servrar i detta sammanhang.

Du behöver vanligtvis inte redigera någon fil eller köra något extra kommando för detta meddelande.

:::note Kan oftast ignoreras
Om servern annars startar normalt och spelare kan ansluta kan detta Steam-biblioteksmeddelande oftast ignoreras.
:::

## Konfigurationsreferens

Tabellen nedan sammanfattar de mest relevanta felsökningskontrollerna för Palworld.

| Problem | Fil att kontrollera | Sökväg i serverfiler | Manuell ändring krävs | Omstart krävs |
| --- | --- | --- | --- | --- |
| Uppdateringsfel `0x6` | Ingen normalt | Ej nödvändig | Nej | Ja |
| Anslutningstidsgräns efter konfigändring | `PalWorldSettings.ini` | `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini` | Ja, granska `OptionSettings`-värden | Ja |
| Anslutningstidsgräns efter moduppdatering | Modfiler, ej standardkonfig | Varierar | Ta bort eller uppdatera inkompatibla mods | Ja |
| Steam retry-loop | Ingen normalt | Ej nödvändig | Nej | Ibland, men väntan rekommenderas först |
| Inkompatibel spelversion | Ingen normalt | Ej nödvändig | Nej | Ja |
| `steamclient.so` varning | Ingen | Ej nödvändig | Nej | Nej, om servern fungerar normalt |

## Rekommenderad felsökningsordning

Om du är osäker på var du ska börja, använd denna ordning:

1. Bekräfta att servern är online.
2. Försök ansluta med direkt IP istället för `Recent Servers`.
3. Kontrollera om Palworld eller Steam nyligen uppdaterats.
4. Ta bort eller uppdatera mods om du använder sådana.
5. Granska `PalWorldSettings.ini` i `Configs` för ogiltig syntax.
6. Starta om servern.
7. Verifiera eller installera om speldata om uppdateringsfel fortsätter.

Denna metod hjälper dig att utesluta de vanligaste orsakerna först utan onödiga ändringar.

## Conclusion

Grattis, du har framgångsrikt felsökt vanliga Palworld-serverproblem. För ytterligare frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂