---
id: mta-becomeadmin
title: "Multi Theft Auto: Word admin op MTA-servers"
description: "Ontdek hoe je administratorrechten toewijst voor volledige servercontrole en efficiënt gamemanagement → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-mta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toewijzen van administratorrechten geeft je eenvoudige en uitgebreide admin-mogelijkheden met volledige controle over je server. Als admin kun je alle beschikbare opties en functies die het spel biedt direct in het spel gebruiken. Hieronder vind je alle stappen die je moet volgen om administratorrechten aan je server toe te wijzen.  
<InlineVoucher />

### Voorbereiding

Allereerst moet er een gebruikersaccount worden aangemaakt dat later de adminrechten krijgt. Dit doe je door het volgende commando uit te voeren in de Live Console:

```
addaccount [options] <PASSWORD>
```

De Live Console vind je in het game server dashboard in de interface terwijl de server draait. Dit ziet er zo uit:

![](https://screensaver01.zap-hosting.com/index.php/s/KHcBA5p5ZC4pJ4R/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/tKLHyoSandPpfx2/preview)




### Configuratie

Zodra het account is aangemaakt, moet het account worden toegevoegd aan de Admin Group in de **acl.xml** config. Hiervoor maak je verbinding met de server via FTP en open je het bestand. Het bestand staat in **gXXXX/gtamta/mods/deathmatch/**. Als je nog niet weet wat een FTP-client is en hoe je die gebruikt, check dan deze gids: [FTP-bestandstoegang](gameserver-ftpaccess.md)

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

Daar moet je een user-object toevoegen om de gebruiker aan de Admin Group toe te wijzen:

```
<object name="user.GEBRUIKERSNAAM"></object>
```

In plaats van GEBRUIKERSNAAM vul je je eigen gebruikersnaam in. Het resultaat zou er zo uit moeten zien:

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
    <object name="user.Gebruikersnaam"></object>
</group>
```



### Inloggen als admin

Nu je de configuratie van de **acl.xml** hebt afgerond, kun je je game/server starten en verbinding maken met je server. Daarna kun je inloggen met het volgende commando:

```
login GEBRUIKERSNAAM WACHTWOORD
```

## Conclusie

Gefeliciteerd, je hebt de administratorrechten succesvol ingesteld. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂


<InlineVoucher />