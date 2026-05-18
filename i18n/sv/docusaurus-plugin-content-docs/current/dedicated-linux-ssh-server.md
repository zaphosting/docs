---
id: dedicated-linux-ssh-server
title: "Ställ in SSH på en Linux-server – Aktivera säker fjärråtkomst"
description: "Upptäck hur du säkert installerar och hanterar SSH-servrar på Linux för trygg fjärråtkomst och bättre serverskydd → Läs mer nu"
sidebar_label: Installera SSH
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Secure Shell (SSH) är ett säkert protokoll som möjliggör krypterad och trygg åtkomst till fjärrsystem. Det garanterar konfidentialitet och integritet för data som skickas över nätverk.

I den här guiden lär du dig hur du installerar eller installerar om SSH-servern för olika Linux-distributioner som vi erbjuder på våra VPS/Dedikerade servrar. De flesta Linux-distros som erbjuds via våra VPS/Dedikerade servrar har SSH-server förinstallerad, vilket gör att du enkelt kan hantera den via produktens webbgränssnitt. Du kan se hur du gör detta i vår guide: [Initial access (SSH)](vserver-linux-ssh.md)

Vill du förbättra säkerheten på din server rekommenderar vi starkt att du kollar in vår guide [Säkerhetstips](vserver-linux-security-tips.md) som tipsar om verktyg och tjänster för att göra din server ännu tryggare.



## Installation

För att starta installationen, anslut till din server via VNC. Följ stegen i vår [VNC-konsol](vserver-vnc.md).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Vill du installera om SSH-servern? Se till att avinstallera den först med kommandot: `yum remove openssh`.
:::

Innan du installerar SSH-servern, se till att systemet är uppdaterat. Kör:
```
yum update
```

Installera sedan SSH-servern med:
```
yum install openssh-server
```

När installationen är klar startar du SSH-servern med:
```
systemctl start sshd
```

Aktivera så att tjänsten startar automatiskt vid systemstart:
```
systemctl enable sshd
```

## Aktivera root-inloggning

För att aktivera root-inloggning behöver du redigera openssh-konfigurationsfilen. Vi använder "nano" som editor i den här guiden.

:::info
Om "nano" inte är installerat, installera det först med: `yum install nano`
:::

Öppna konfigurationsfilen med:
```
nano /etc/ssh/sshd_config 
```

Navigera med piltangenterna och leta upp raden:
```
#PermitRootLogin prohibit-password
```

Ändra den till:
```
PermitRootLogin yes
```

Starta om SSH-servern för att tillämpa ändringarna:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Vill du installera om SSH-servern? Avinstallera den först med kommandot: `apt remove openssh`.
:::

Se till att systemet är uppdaterat innan installation:
```
apt update
```

Installera SSH-servern med:
```
apt install openssh-server
```

Starta SSH-servern:
```
systemctl start sshd
```

Aktivera automatisk start vid boot:
```
systemctl enable sshd
```

## Aktivera root-inloggning

Redigera openssh-konfigurationsfilen med "nano":

:::info
Om du inte redan har "nano" installerat, installera det med: `apt install nano`
:::

Öppna filen:
```
nano /etc/ssh/sshd_config 
```

Hitta raden:
```
#PermitRootLogin prohibit-password
```

Ändra till:
```
PermitRootLogin yes
```

Starta om SSH-servern:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Vill du installera om SSH-servern? Avinstallera den först med kommandot: `apt remove openssh`.
:::

Uppdatera systemet:
```
apt update
```

Installera SSH-servern:
```
apt install openssh-server
```

Starta SSH-servern:
```
systemctl start sshd
```

Aktivera automatisk start:
```
systemctl enable sshd
```

## Aktivera root-inloggning

Redigera konfigurationsfilen med "nano":

:::info
Om "nano" inte är installerat, installera det med: `apt install nano`
:::

Öppna filen:
```
nano /etc/ssh/sshd_config 
```

Hitta raden:
```
#PermitRootLogin prohibit-password
```

Ändra till:
```
PermitRootLogin yes
```

Starta om SSH-servern:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Vill du installera om SSH-servern? Avinstallera den först med kommandot: `dnf remove openssh`.
:::

Uppdatera systemet:
```
dnf update
```

Installera SSH-servern:
```
dnf install openssh-server
```

Starta SSH-servern:
```
systemctl start sshd
```

Aktivera automatisk start:
```
systemctl enable sshd
```

## Aktivera root-inloggning

Redigera konfigurationsfilen med "nano":

:::info
Om "nano" inte är installerat, installera det med: `dnf install nano`
:::

Öppna filen:
```
sudo nano /etc/ssh/sshd_config 
```

Hitta raden:
```
#PermitRootLogin prohibit-password
```

Ändra till:
```
PermitRootLogin yes
```

Starta om SSH-servern:
```
systemctl restart sshd
```
</TabItem>
</Tabs>

Nu har du installerat SSH-tjänsten på din server och kan ansluta via SSH som vanligt.