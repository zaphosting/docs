---
id: dedicated-linux-troubleshooting-restore-access
title: "Dedikerad Server: Återställ åtkomst"
description: "Upptäck hur du återfår åtkomst till din Linux Dedikerade Server efter lösenordslåsning och minimerar driftstopp → Läs mer nu"
sidebar_label: Återställ åtkomst
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Det kan gå snabbt. Du försöker logga in på din Linux-server, men lösenordet accepteras inte längre eller har glömts bort. Resultatet blir att åtkomst till systemet och kritiska data eller tjänster inte längre är möjlig. Den här situationen kan vara riktigt frustrerande, särskilt när servern behövs för pågående drift. I de flesta Linux-distributioner kan åtkomsten återställas via recovery-läget utan att behöva installera om operativsystemet. Genom att följa stegen nedan kan du återfå åtkomst till din server och fortsätta jobba med minimal störning.



## Återställ åtkomst

För att återställa lösenordet via recovery-läget måste systemet startas med tillgång till GRUB-bootmenyn. Under systemstart, öppna GRUB-menyn och välj **Advanced options for Ubuntu**.

![img](https://screensaver01.zap-hosting.com/index.php/s/j6DKWdM95fFWWZi/preview)

På nästa skärm, välj den rad som startar systemet i **recovery mode**. Detta laddar recovery-miljön istället för det vanliga operativsystemet.

När recovery-menyn visas, välj **root – Drop to root shell prompt** och bekräfta valet. Tryck Enter igen för att komma in i root-shell.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFjTj3FxKQwHemD/preview)

I recovery-läget är root-filsystemet som standard monterat som skrivskyddat. För att kunna ändra lösenord måste det monteras om med skrivbehörighet. Kör följande kommando:

```bash
mount -o remount,rw /
```

Om du inte vet användarnamnet kan du lista alla tillgängliga användarkonton genom att kolla hemkatalogerna:

```
ls /home
```

För att återställa lösenordet, använd kommandot `passwd` följt av användarnamnet:

```
passwd username
```

Byt ut `username` mot det faktiska kontonamnet. Skriv in det nya lösenordet och bekräfta när du blir ombedd. Lösenordet visas inte på skärmen när du skriver. När lösenordet är uppdaterat, starta om systemet med kommandot `reboot`.



## Avslutning

När du har gått igenom processen ska du ha lyckats sätta ett nytt lösenord för den önskade användaren. Du kan nu logga in igen via fjärrskrivbordet. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support – vi finns tillgängliga varje dag för att hjälpa dig! 🙂