---
id: mta-becomeadmin
title: "Multi Theft Auto: Bli admin på MTA-servrar"
description: "Upptäck hur du ger adminrättigheter för full kontroll över servern och smidig spelhantering → Läs mer nu"
sidebar_label: Bli admin
services:
  - gameserver-mta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela adminrättigheter ger dig enkel och komplett administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att ge adminrättigheter på din server beskrivs nedan.  
<InlineVoucher />

### Förberedelser

Först måste ett användarkonto skapas som senare ska få adminrättigheterna. Det gör du genom att köra följande kommando i Live Console:

```
addaccount [options] <PASSWORD>
```

Live Console hittar du i spelserverns kontrollpanel i gränssnittet medan servern är igång. Det ser ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/KHcBA5p5ZC4pJ4R/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/tKLHyoSandPpfx2/preview)




### Konfiguration

När kontot är skapat måste det läggas till i Admin-gruppen i **acl.xml**-konfigurationen. För detta ansluter vi till servern via FTP och öppnar filen. Filen ligger på **gXXXX/gtamta/mods/deathmatch/**. Om du inte vet vad en FTP-klient är eller hur du använder den, kolla in vår guide: [FTP filåtkomst](gameserver-ftpaccess.md)

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
</group>
```

Där måste du lägga till ett användarobjekt för att tilldela användaren till Admin-gruppen:

```
<object name="user.BENUTZERNAME"></object>
```

Istället för BENUTZERNAME skriver du in ditt eget användarnamn. Resultatet ska se ut så här:

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
    <object name="user.Benutzername"></object>
</group>
```



### Logga in som admin

När du är klar med konfigurationen av **acl.xml** kan du starta spelet/servern och ansluta till din server. Därefter loggar du in med följande kommando:

```
login USERNAME PASSWORD
```

## Sammanfattning

Grattis, du har nu konfigurerat adminrättigheterna! Har du fler frågor eller behöver hjälp är det bara att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂


<InlineVoucher />