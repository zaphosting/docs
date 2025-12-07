---
id: dedicated-linux-debian
title: "Dedikerad Server: Installation av Debian"
description: "Lär dig hur du installerar och konfigurerar Debian OS på din dedikerade server för optimal prestanda och pålitlighet → Läs mer nu"
sidebar_label: Installera Debian
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Här går vi igenom steg för steg hur du installerar och konfigurerar Debian-operativsystemet på din dedikerade server. Följ instruktionerna noggrant för att säkerställa att du sätter upp operativsystemet korrekt och använder det på bästa sätt.

:::info

Guidens upplägg baseras på Debian 10. Installationer från äldre eller nyare versioner kan skilja sig något i processen.

:::



## Förberedelser

För att installera och konfigurera ett operativsystem är det först viktigt att montera rätt ISO-fil för operativsystemet. Det finns flera sätt att göra detta på:

1. Montera via initial setup
2. Montera via iLO (Virtual Media)
3. Montera via iLO (Remote Console)

Om du inte är van vid att montera ISO-filer än, kolla gärna in våra guider för [Initial setup](dedicated-setup.md) eller [Egen ISO](dedicated-iso.md).



## Installation

När ISO-filen är laddad startar servern installationsprocessen.

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

I det här exemplet går vi igenom installationen med "klassisk" installation.

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

Välj önskat språk för installationsguiden. Tänk på att detta språk också påverkar det installerade systemet i slutändan.

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

Vår plats finns inte på första sidan, så vi går vidare med "Other".

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

I vårt exempel väljer vi "Europe".

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

Beroende på önskad tidszon väljer vi tysk tidszon i detta exempel.

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

Vi väljer United States som locale.

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

I vårt fall väljer vi tysk tangentbordslayout, vilket är QWERTZ. Om du är från USA är standardlayouten QWERTY.

:::info
Din server förbereder nu komponenter som behövs för installationen, detta kan ta några minuter.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

Servern konfigurerar nätverksgränssnittet automatiskt via DHCP. Välj `eno1` som är standard nätverksadapter på din ZAP Dedicated Server. ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

Hostname kan ändras om du vill, men det är inget krav.

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

Domännamnet behöver inte ändras heller.

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

Här sätter du lösenord för "root"-kontot. Skriv ner lösenordet du väljer.

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

Bekräfta lösenordet genom att skriva det igen.

:::info
Installationsguiden ber dig skapa ett andra användarkonto.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

Skriv in namnet på ägaren för ett vanligt användarkonto. Du väljer helt fritt vad du vill skriva här.

:::info
Du kan såklart använda "root"-kontot i slutändan.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

Skriv in användarnamnet för kontot. Välj även ett lösenord och bekräfta det. Servern förbereder nu nästa steg i installationen.

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

Nu kan du skapa partitioner eller använda hela SSD:n som en partition. Vill du inte ändra något väljer du "Guided - Use entire disk".

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

Välj SSD:n som sitter i din server. ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

Det är helt okej att ha hela strukturen på en partition. ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

Bekräfta med "Finish partitioning and write changes to disk".

:::info
Om det finns gamla partitioner på SSD:n bekräftar du att de ska skrivas över med "Yes".
:::

Servern partitionerar nu och förbereder installationen.

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

Vill du lägga till andra installationsmedia, t.ex. för vissa paket, kan det göras nu. Vanligtvis laddar du ner alla paket smidigt via paketverktyget (apt) efteråt.

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

Våra dedikerade servrar står i Tyskland, så vi rekommenderar att välja den tyska spegelservern för bästa möjliga nedladdningshastighet.

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

Vi rekommenderar att använda standard Debian-repositoriet.

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

Vill du använda en HTTP-proxy kan du ange det här (inte obligatoriskt).

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

Systemet vill samla in anonymiserad statistik, detta kan du neka eller godkänna.

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

Välj nu vilka paket du vill installera:

* Debian desktop environment  
Skapar ett grafiskt gränssnitt på servern, men i detta exempel använder vi bara shell.

* SSH server  
Behövs för att t.ex. ansluta via PuTTY.

* Standard system utilities  
Ger en rad grundläggande paket.

Välj paket med `TAB` och piltangenter. Markera eller avmarkera med mellanslag. När du är nöjd tryck `TAB` till Continue och bekräfta med Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

Bekräfta att detta är det enda operativsystemet på servern med `Yes`.

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

Som lagringsplats väljer vi standardplatsen på SSD:n.

:::info
🎉 Din Debian-installation är nu klar.
:::

Öppna "Virtual Media" i din iLO och klicka på "Eject Media" för att ta bort ISO-filen från systemet.

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

När detta är klart väljer vi Continue, servern startar om.

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## Konfiguration

### SSH-inloggning

När servern startat om och installationen lyckats kommer du till inloggningsprompten.

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

Du vill såklart kunna hantera servern via SSH, t.ex. med PuTTY, så vi måste aktivera inloggning för det:

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

Öppna SSH-konfigfilen med nano: `nano /etc/ssh/sshd_config`.

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

Sök efter `#PermitRootLogin no` och ändra till `PermitRootLogin yes`.

Tryck `CTRL + X` och spara ändringarna med `Y`.

Starta om SSH-tjänsten med `service ssh restart`.

SSH-inloggningen är nu aktiv och du kan ansluta via PuTTY, t.ex.  
Ange IP-adressen till din server som du ser i din ZAP-panel och använd dina inloggningsuppgifter.

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
Har du frågor eller problem? Vår support hjälper dig gärna!
:::





## Avslutning

Grattis, du har nu installerat Debian på din dedikerade server! Vid frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂