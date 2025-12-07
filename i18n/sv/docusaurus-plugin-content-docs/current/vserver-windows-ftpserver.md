---
id: vserver-windows-ftpserver
title: "VPS: Installation av FTP"
description: "Upptäck hur du sätter upp och hanterar en FileZilla FTP-server på Windows för säkra filöverföringar och användarhantering → Lär dig mer nu"
sidebar_label: Installera FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

**FTP (File Transfer Protocol)** är ett nätverksprotokoll som används för att överföra filer över ett TCP/IP-nätverk. Protokollet utvecklades för att möjliggöra enkel filutbyte mellan system.

Med **FileZilla Server** kan du sätta upp en sådan FTP-server på Windows. FileZilla Server är enkel att installera och konfigurera, och erbjuder många funktioner som att skapa användarkonton, hantera åtkomsträttigheter och överföra filer.
<InlineVoucher />


## Förberedelser

### Nedladdning

För att sätta upp en FTP-server behöver du rätt mjukvara. FileZilla Server är en möjlig lösning för Windows-serveroperativsystemet. Du hittar nedladdningslänken här: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### Installation

När installationsfilen är nedladdad måste du köra den. Klicka på den nedladdade filen så öppnas följande fönster: ![](https://screensaver01.zap-hosting.com/index.php/s/Qi97fYbyoKDdsi3/preview)



Här kan du välja vilka paket som ska installeras. Det räcker dock att installera de förvalda paketen, så klicka bara på **Next** och välj sedan installationsväg:

![](https://screensaver01.zap-hosting.com/index.php/s/fsMiKt9Zjas4Rme/preview)

I detta exempel installeras FileZilla Server under **C:\Program Files (x86)\FileZilla Server**. Du kan dock välja en egen sökväg. Efter att ha valt sökväg måste du ange hur FTP-servern ska installeras och startas. Du kan även bestämma port och måste ange ett administratörslösenord.



![](https://screensaver01.zap-hosting.com/index.php/s/gCoGAcGnTtLQ2P6/preview)

Klicka sedan på **Next** igen och i nästa steg. Slutligen klickar du på **Install** för att starta installationen. Administrationsgränssnittet för FileZilla FTP-server öppnas nu. Klicka på knappen **Connect to FileZilla FTP Server**.

Ett fönster bör dyka upp där du ser fälten Host, Port och Password. Lämna de två första fälten som de är och skriv in ditt administratörslösenord för FTP-servern. Klicka sedan på **Ok** för att ansluta.



## Konfiguration

### Skapa användare

För att kunna ansluta till din server via FTP måste du skapa en användare.  
Klicka på **Server** i menyn ovan och sedan på **Configure**.

![](https://screensaver01.zap-hosting.com/index.php/s/D7KHSrkGZEErEcH/preview)

Under menyn Users kan du lägga till en ny användare genom att klicka på **Add**:

![](https://screensaver01.zap-hosting.com/index.php/s/mtdi4oRmR4ZDzyq/preview)

I detta exempel heter användaren **YourUserName**. Du kan självklart välja valfritt användarnamn.



### Lösenord och behörigheter

När användaren är skapad måste åtkomst och behörigheter konfigureras. Aktivera användaren och ställ in lösenordsalternativ under **General** i kategorin **Credentials**. Vi rekommenderar starkt att använda lösenord av säkerhetsskäl. Välj **Require a password to log in** och ange ditt önskade lösenord.

![](https://screensaver01.zap-hosting.com/index.php/s/gwkkexqXgmfXc2q/preview)

För att användaren ska ha rätt behörigheter måste du ange vilka mappar användaren får åtkomst till genom att klicka på **Add** under mount points. Du måste ange både en virtuell och en fysisk sökväg. I vårt exempel definierar vi att C-disken listas under \.

![](https://screensaver01.zap-hosting.com/index.php/s/LE46PteX7eAftjQ/preview)

Till höger finns alternativet **Permissions** där du kan ställa in åtkomsträttigheter för den angivna sökvägen. Vill du kunna läsa och redigera data rekommenderas att sätta den till **Read+Write**.

::: danger
Av säkerhetsskäl bör du endast ge användare åtkomst till specifika mappar.
:::

Bekräfta och spara dina ändringar genom att klicka på **Apply**.



## Undantag i Windows-brandväggen

För att kunna ansluta till din FTP-server måste FTP-servern tillåtas i Windows-brandväggen. Öppna brandväggsinställningarna under **Kontrollpanelen\System och säkerhet\Windows Defender-brandvägg** och klicka på **Tillåt en app eller funktion genom Windows Defender-brandväggen**.
I nästa fönster väljer du sedan applikationen som ska tillåtas:

![](https://screensaver01.zap-hosting.com/index.php/s/aorQ7Y8gQJPSE8e/preview)

I detta exempel är sökvägen **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/wx7p5GykbQfx8B6/preview)

Avsluta med att klicka på **OK**. Nu är det möjligt att ansluta till din FTP-server.


## Avslutning

Grattis, du har nu installerat och konfigurerat FTP-servern på din VPS! Har du fler frågor eller problem är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig!

<InlineVoucher />