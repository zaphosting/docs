---
id: satisfactory-blueprints
title: "Satisfactory: Hantera Ritningar (Import/Export)"
description: "Upptäck hur du skapar, delar och hanterar egna ritningar för effektiva Satisfactory-byggnader och layouter → Lär dig mer nu"
sidebar_label:  Hantera Ritningar
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Satisfactory har ett eget ritningssystem som låter dig skapa och dela byggplaner med andra i communityn. Dessa ritningar kan vara allt från effektiva fabriksupplägg till snyggt designade lounger och komplexa järnvägssystem.

Ett stort utbud av ritningar finns tillgängliga via Satisfactory Calculator-webbplatsen. Ritningar kan enkelt både importeras och exporteras.

<InlineVoucher />



## Hantera Ritningar

Hantera ritningar på en Satisfactory-server görs helt via FTP. Om du inte är bekant med hur man ansluter till din server via FTP, kolla in vår separata [FTP Access](gameserver-ftpaccess.md)-guide för att komma igång.

### Importera Ritningar
Först behöver du skaffa ritningsfilerna du vill ladda upp. Dessa består av en `.sbp`-fil och, om det finns, en tillhörande `.sbpcfg`-konfigurationsfil. Filerna kan komma från pålitliga communitykällor eller skapas från andra spelinstanser.

Innan du laddar upp rekommenderas det att stänga ner servern helt via din serverhanteringspanel. Det säkerställer att inga filkonflikter eller minnesproblem uppstår under uppladdningen.

Anslut sedan till servern med en FTP-klient. När du är inloggad, navigera till ritningsmappen:

 ```
 /gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
 ```

I den här mappen måste det finnas en undermapp med exakt samma namn som världen (eller sessionen) du använder. Det namnet motsvarar namnet på `.sav`-filen som finns på servern. Om mappen inte finns måste du skapa den manuellt med exakt samma namn som sparfilen.

När rätt undermapp är klar, ladda upp ritningsfilerna dit. Det är viktigt att både `.sbp`-filen och, om tillgänglig, `.sbpcfg`-filen inkluderas. När uppladdningen är klar, starta om servern. När servern är igång igen finns de uppladdade ritningarna tillgängliga i spelet via Blueprint Designer-gränssnittet, så att du kan använda dem som vanligt.

### Exportera Ritningar

Att exportera ritningar från en Satisfactory-server innebär att ladda ner ritningsfiler från servern och spara dem lokalt på din dator. Börja med att stänga ner servern, det garanterar att ritningsfilerna är i ett stabilt och åtkomligt läge. Öppna din FTP-klient och anslut till servern. Navigera till katalogen:

````
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
````

Hitta undermappen som matchar världen/sessionen du vill exportera ritningar från. I den mappen hittar du `.sbp`-filen, samt den valfria `.sbpcfg`-filen, för varje sparad ritning.

Ladda ner de ritningsfiler du vill ha direkt till din dator via FTP-klienten. När överföringen är klar kan du arkivera filerna, öppna dem lokalt eller importera dem till en annan installation eller servermiljö. Om du planerar att återanvända ritningarna på en annan server, följ exakt samma importprocedur som ovan.

## Avslutning

Att hantera ritningar på en Satisfactory-server är enkelt när du följer stegen ovan. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂




<InlineVoucher />