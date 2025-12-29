---
id: vserver-linux-troubleshooting-restore-access
title: "VPS: Återställ åtkomst"
description: "Upptäck hur du återfår åtkomst till din Linux VPS efter lösenordslåsning och minimerar driftstopp → Läs mer nu"
sidebar_label: Återställ åtkomst
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Det kan gå snabbt. Du försöker logga in på din Linux-server, men lösenordet accepteras inte längre eller har glömts bort. Resultatet blir att du inte längre kan komma åt systemet och kritiska data eller tjänster. Den här situationen kan vara riktigt frustrerande, särskilt när servern behövs för pågående drift. I de flesta Linux-distributioner kan åtkomsten återställas via recovery-läge utan att behöva installera om operativsystemet. Genom att följa stegen nedan kan du återfå åtkomst till din server och fortsätta jobba med minimal störning.

## Återställ åtkomst

För att återställa lösenordet via recovery-läge måste systemet startas med tillgång till GRUB-bootmenyn. Under systemstart, öppna GRUB-menyn och välj **Advanced options for Ubuntu**.

![img](https://screensaver01.zap-hosting.com/index.php/s/j6DKWdM95fFWWZi/preview)

På nästa skärm väljer du den posten som startar systemet i **recovery mode**. Detta laddar recovery-miljön istället för det vanliga operativsystemet.

När recovery-menyn visas, välj **root – Drop to root shell prompt** och bekräfta valet. Tryck Enter igen för att komma in i root-shell.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFjTj3FxKQwHemD/preview)

I recovery-läge är root-filsystemet som standard monterat som read-only. För att kunna ändra lösenord måste det monteras om med skrivbehörighet. Kör följande kommando:

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

Byt ut `username` mot det faktiska kontonamnet. Skriv in det nya lösenordet och bekräfta när du blir ombedd. Lösenordet visas inte på skärmen när du skriver. När lösenordet har uppdaterats framgångsrikt, starta om systemet med kommandot `reboot`.

## Avslutning

När du har gått igenom processen ska du ha lyckats sätta ett nytt lösenord för önskad användare. Nu kan du logga in igen via fjärrskrivbordet. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support – vi finns tillgängliga varje dag för att hjälpa dig! 🙂