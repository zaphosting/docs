---
id: dedicated-windows-ftpserver
title: "Ställ in FTP på en Windows Server - Host en Säker Filöverföringstjänst"
description: "Upptäck hur du sätter upp och hanterar en FileZilla FTP-server på Windows för säker filöverföring och användarhantering → Läs mer nu"
sidebar_label: Installera FTP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

**FTP (File Transfer Protocol)** är ett nätverksprotokoll som används för att överföra filer över ett TCP/IP-nätverk. Protokollet utvecklades för att möjliggöra enkel filutbyte mellan system.

Med **FileZilla Server** kan du sätta upp en sådan FTP-server på Windows. FileZilla Server är enkel att installera och konfigurera, och erbjuder många funktioner som möjligheten att skapa användarkonton, hantera åtkomsträttigheter och överföra filer.



## Förberedelser

### Nedladdning

För att sätta upp en FTP-server behöver du rätt mjukvara. FileZilla Server är en möjlig lösning för Windows-serveroperativsystemet. Du hittar nedladdningslänken här: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### Installation

När installationsfilen är nedladdad måste du köra den. Klicka på den nedladdade filen så öppnas följande fönster: ![](https://screensaver01.zap-hosting.com/index.php/s/a2DEpaR5jD28X23/preview)



Här kan du välja vilka paket som ska installeras. Det räcker dock att installera de förvalda paketen, så klicka bara på **Next** och välj sedan installationsväg:

![](https://screensaver01.zap-hosting.com/index.php/s/cN7K9Cte9tXFrF2/preview)

I det här exemplet installeras FileZilla Server under **C:\Program Files (x86)\FileZilla Server**. Du kan dock välja en egen sökväg. Efter att ha valt sökväg måste du ange hur FTP-servern ska installeras och startas. Dessutom kan porten bestämmas och ett administratörslösenord måste anges.



![](https://screensaver01.zap-hosting.com/index.php/s/WopFXcW3teFAyJK/preview)

Klicka sedan på **Next** igen och i nästa steg. Slutligen klickar du på **Install** för att starta installationen. Administrationsgränssnittet för FileZilla FTP-server öppnas nu. Klicka på knappen **Connect to FileZilla FTP Server**.

Ett fönster bör dyka upp där du ser fälten Host, Port och Password. Lämna de två första fälten som de är och skriv in ditt valda administratörslösenord för FTP-servern. Klicka sedan på **Ok** för att ansluta.



## Konfiguration

### Skapa användare

För att kunna ansluta till din server via FTP måste du skapa en användare.  
Klicka på **Server** i menyn ovan och sedan på **Configure**.

![](https://screensaver01.zap-hosting.com/index.php/s/C5WLC8Lp8CjTjQg/preview)

Under menyalternativet Users kan du sedan lägga till en ny användare genom att klicka på **Add**:

![](https://screensaver01.zap-hosting.com/index.php/s/dbCS5yJfwqry8Dq/preview)

I det här exemplet är användarnamnet **YourUserName**. Du kan självklart välja vilket användarnamn du vill.



### Lösenord och behörigheter

När användaren är skapad måste åtkomst och behörigheter konfigureras. Aktivera användaren och ställ in lösenordsalternativ under **General** i kategorin **Credentials**. Vi rekommenderar starkt att använda lösenord av säkerhetsskäl. Välj **Require a password to log in** och ange ditt önskade lösenord.

![](https://screensaver01.zap-hosting.com/index.php/s/z78wpcFbYEAJYeB/preview)

För att säkerställa att användaren har rätt behörigheter måste du ange vilka mappar användaren får åtkomst till genom att klicka på **Add** under mount points. En virtuell och en fysisk sökväg måste anges. I vårt exempel definierar vi att C-disken listas under \.

![](https://screensaver01.zap-hosting.com/index.php/s/iqQrjGByHpkBcJF/preview)

Till höger finns alternativet **Permissions**, där du kan ställa in åtkomsträttigheterna för den angivna sökvägen. Vill du kunna läsa och redigera data rekommenderar vi att du sätter det till **Read+Write**.

::: danger
Av säkerhetsskäl bör du endast ge användare åtkomst till specifika mappar.
:::

Du kan nu spara och bekräfta dina ändringar genom att klicka på **Apply**.



## Undantag i Windows-brandväggen

För att möjliggöra anslutning till din FTP-server måste FTP-servern tillåtas i Windows-brandväggen. Öppna brandväggsinställningarna under **Kontrollpanelen\System och säkerhet\Windows Defender-brandvägg** och klicka på **Tillåt en app eller funktion genom Windows Defender-brandväggen**.  
I nästa fönster väljer du sedan den app som ska tillåtas:

![](https://screensaver01.zap-hosting.com/index.php/s/xHwQzCKokHTn424/preview)

I det här exemplet är sökvägen **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/Laz3HFb7GrLBY9w/preview)

Avsluta med att klicka på **OK**, nu är anslutning till din FTP-server möjlig.



## Avslutning

Grattis, du har nu installerat FTP-servern! Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂