---
id: dedicated-setup
title: "Dedikerad Server: Första installationen"
description: "Upptäck hur du enkelt sätter upp din ZAP Dedikerade Server och får tillgång till en mängd olika operativsystem → Lär dig mer nu"
sidebar_label: Första installationen
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Är du ny på det här och orolig för att du inte ska klara av att sätta upp en sådan tjänst eller att du kanske stöter på problem? Ingen fara! Den här guiden och vår installationsassistent tar dig igenom alla steg för första installationen av din ZAP Dedikerade Server. 



## Förberedelser

### Aktivera iLO
För första installationen måste iLO administrationsgränssnitt först aktiveras. Det kan ta en liten stund. För mer info och vidare användning av iLO administrationsgränssnitt rekommenderar vi att du kollar in [iLO](dedicated-ilo.md)-guiden.

![EN](https://screensaver01.zap-hosting.com/index.php/s/xmAFAt4CXTt7b7c/preview)

Så fort iLO är aktiverat ska iLO-status visas som **Aktiv**. iLO-sessionen är alltid aktiverad i tre timmar som standard och måste aktiveras på nytt om du vill komma åt den igen. Nu kan du fortsätta med att välja ISO. 

### Välja ISO

Nästa steg är att välja en ISO att montera för första installationen. Klicka på dropdown-menyn, välj en ISO-fil och klicka på **Infoga**-knappen.  

![EN](https://screensaver01.zap-hosting.com/index.php/s/SfMfrWHpjAGeMgo/preview)

Vi erbjuder ett brett utbud av ISO-filer för de vanligaste operativsystemen som Debian, Ubuntu, FreeBSD, Windows, CentOS, ArchLinux och Proxmox som standard. I tabellen nedan hittar du en översikt över alla tillgängliga operativsystem och deras versioner. 

| ISO (Operativsystem) | Versioner                                              |
| -------------------- | ------------------------------------------------------ |
| Debian               | 12, 11, 10.9, 9.13                                     |
| Ubuntu               | 22.04.3, 22.04, 22.02, 18.04                           |
| FreeBSD              | 13.0, 12.2, 11.4                                       |
| Windows              | 2022 (EN/DE), 2019 (EN/DE), 2016 (EN/DE), 2012 (EN/DE) |
| CentOS               | 7.9, 8.3                                               |
| ArchLinux            | 2023                                                   |
| Proxmox              | 8.0-2, 7.4-1, 7.1-1, 7.0-1, 6.4-1, 6.3-1               |

Det går också att lägga till och montera din egen individuella ISO. För mer info om hur du monterar din egen ISO-fil rekommenderar vi att du kollar in **[Egen ISO](dedicated-iso.md)**-guiden.

## Installation

### Montera och starta ISO

När ISO-filen är vald och infogad måste systemet startas om en gång så att ändringen accepteras och systemet startar upp från ISO-filen. Klicka bara på **Starta om**-knappen. Det kan ta en liten stund innan omstarten är klar. 

![EN](https://screensaver01.zap-hosting.com/index.php/s/zPQagx6yD5nCM7L/preview)

### Använd iLO för att installera operativsystemet

Grunden för att installera ditt önskade operativsystem är nu på plats. Systemet har monterat ISO:n och startat installationen. Öppna nu **iLO administrationsgränssnitt** på din server och klicka direkt på "Integrated Remote Console: **HTML 5**" för att komma åt serverns skärm. Mer info om hur du hanterar konsolen i iLO finns i vår [iLO](dedicated-ilo.md)-guide. 

Installation av operativsystemet sker nu i HTML-konsolen. Vi har även guider för de vanligaste operativsystemen. För mer info om nästa steg, kolla in respektive guide:  

- [Installera Windows](dedicated-windows.md)
- [Installera Debian](dedicated-linux-debian.md)
- [Installera Ubuntu](dedicated-linux-ubuntu.md)
- [Installera FreeBSD](dedicated-freebsd.md)
- [Installera CentOS](dedicated-centos.md)
- [Installera Proxmox](dedicated-proxmox.md)