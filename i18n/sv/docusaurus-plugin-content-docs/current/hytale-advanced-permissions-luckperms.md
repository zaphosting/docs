---
id: hytale-advanced-permissions-luckperms
title: "Hytale: Avancerade behörigheter med LuckPerms"
description: "Upptäck hur du installerar och konfigurerar LuckPerms för att hantera avancerade behörigheter och ranker på en Hytale-server → Lär dig mer nu"
sidebar_label: Avancerade behörigheter
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Att hantera behörigheter på en Hytale-server blir allt viktigare när du börjar jobba med staff-roller, egna ranker eller speciella spelarförmåner. Det inbyggda behörighetssystemet i spelet funkar för grundläggande administration, men når snabbt sina begränsningar när du behöver mer detaljerad kontroll över kommandon och funktioner.

**LuckPerms** erbjuder ett kraftfullt och mycket anpassningsbart behörighetssystem för Hytale-servrar. Det låter dig exakt definiera vilka behörigheter och kommandon olika spelare eller grupper ska ha tillgång till.

<InlineVoucher />



## Installera LuckPerms

För att installera LuckPerms mods, ladda först ner den senaste LuckPerms `.jar`-filen.  
Efter nedladdning, öppna din serverpanel och stoppa servern för att säkert kunna ladda upp modden.

Gå till **Filer**-sektionen på din server och öppna mappen `mods`. Ladda upp LuckPerms `.jar`-filen i den här mappen. För en detaljerad guide om hur man installerar mods rekommenderar vi att du kollar in [Install Mods](hytale-mods).

När filuppladdningen är klar, starta servern igen. Efter uppstart, öppna serverkonsolen och kontrollera att LuckPerms körs som det ska. Om installationen lyckades kommer LuckPerms skriva ut startmeddelanden i konsolen.



## Ge initiala behörigheter

Efter installationen behöver LuckPerms konfigureras innan det kan användas effektivt. För att börja hantera behörigheter måste du ge dig själv rätt att använda LuckPerms-kommandon. I konsolen eller i spelets chatt kör du följande kommando:

```
lp user <playername> permission set luckperms.* true
```

Detta ger den valda spelaren full tillgång till LuckPerms-kommandon.



## Använda LuckPerms webbredigerare

LuckPerms inkluderar en webbredigerare som ger ett smidigt gränssnitt för att skapa grupper och hantera behörigheter. För att generera en redigerarsession, skriv:

```
lp editor
```

LuckPerms skriver ut en genererad redigerarlänk i konsolen. Öppna den länken i din webbläsare för att komma åt webbredigeraren.

```
[LP] Preparing a new editor session, please wait...
[LP] Click the link below to open the editor:
https://luckperms.net/editor/XXXXXXXXXX
```

![img](https://screensaver01.zap-hosting.com/index.php/s/5Cx2sGY4axZ6TBo/preview)

Inne i editorn, kopiera **kommandolänken** som visas. Gå tillbaka till serverkonsolen och klistra in kommandolänken för att etablera förtroende och koppla redigerarsessionen till din server.

```
/lp trusteditor XXXX-XXXX
```

När editorn är kopplad kan du konfigurera användare, grupper och behörigheter direkt i webbgränssnittet. Efter att du gjort ändringar, klicka på **Apply** för att spara konfigurationen. Om LuckPerms ger ett apply-kommando, kopiera det och klistra in i serverkonsolen för att slutföra ändringarna.



## Skapa en admin-grupp

Öppna editor-länken i din webbläsare och gå till sektionen **Groups**. Skapa en ny grupp med plus-ikonen och sätt gruppnamnet till `admin`. Du kan även konfigurera extra detaljer som visningsnamn, vikt, föräldragrupp och prefix/suffix.

![img](https://screensaver01.zap-hosting.com/index.php/s/xEWHSBkxKy5q8qr/preview)

Efter att ha skapat gruppen, välj `admin`-gruppen i editorn och lägg till behörigheter. För att ge fulla Hytale-behörigheter till gruppen, skriv:

```
hytale.*
```

Denna behörighet ger full tillgång till alla Hytale-behörigheter. Efter att ha lagt till behörigheter, tilldela en spelare till gruppen.  
I editorn, öppna sektionen **Users**, välj önskad användare och lägg till `admin`-gruppen under **Parent groups**.

Till sist, klicka på **Apply** för att spara dina ändringar. Om du uppmanas, klistra in apply-kommandot i serverkonsolen.



## Vanliga LuckPerms-kommandon

LuckPerms kan hanteras antingen via webbredigeraren eller direkt med kommandon. Följande kommandon används ofta för att hantera behörigheter:

| Kommando                                                      | Beskrivning                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `/lp user <playername> parent add <group>`                   | Lägger till spelaren i gruppens behörigheter.                |
| `/lp user <playername> parent remove <group>`                | Tar bort spelaren från gruppens behörigheter.                |
| `/lp user <playername> permission set <permission>`          | Ger spelaren behörigheten.                                   |
| `lp user <playername> permission settemp <permission> true <duration>` | Ger spelaren en temporär behörighet med varaktighet som `1h` för 1 timme eller `1m` för 1 minut. |
| `/lp user <playername> permission unset <permission>`        | Tar bort behörigheten från spelaren.                         |
| `/lp group <group> permission set <permission>`              | Ger gruppen behörigheten.                                    |
| `/lp group <group> permission unset <permission>`            | Tar bort behörigheten från gruppen.                          |



## Slutsats

LuckPerms är en grym lösning för avancerad behörighetshantering på Hytale-servrar. Genom att använda grupper, behörigheter och webbredigeraren kan du skapa ett strukturerat rollsystem som växer med din community.

När det är konfigurerat gör LuckPerms det enkelt att underhålla staff-ranker, spelarförmåner och accesskontroll samtidigt som serveradministrationen hålls snygg, konsekvent och prestandavänlig.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />