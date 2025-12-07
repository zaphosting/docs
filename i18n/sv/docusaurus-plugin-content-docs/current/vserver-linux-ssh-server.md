---
id: vserver-linux-ssh-server
title: "VPS: Installation av SSH"
description: "Lär dig hur du säkert får åtkomst till och hanterar fjärrservrar med Linux via SSH för bättre dataskydd och serverkontroll → Läs mer nu"
sidebar_label: Installera SSH
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduktion

Secure Shell (SSH) är ett säkert protokoll som möjliggör trygg och krypterad åtkomst till fjärrsystem. Det garanterar konfidentialitet och integritet för data som skickas över nätverk.

I den här guiden lär du dig hur du installerar eller installerar om SSH-servern för flera Linux-distributioner som vi erbjuder på våra VPS-servrar. De flesta Linux-distros som erbjuds via våra VPS-servrar har en SSH-server förinstallerad, vilket gör att du enkelt kan hantera den via produktens webbgränssnitt. Du kan se hur man gör detta i vår guide: [Initial access (SSH)](vserver-linux-ssh.md)

Vill du förbättra säkerheten på din server rekommenderar vi starkt att du kollar in vår guide [Säkerhetstips](vserver-linux-security-tips.md) som tipsar om verktyg och tjänster för att göra din server ännu tryggare.

<InlineVoucher />

## Installation

För att starta installationsprocessen, anslut till din server via VNC. Följ stegen i vår [VNC-konsol](vserver-vnc.md).


<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Vill du installera om SSH-servern? Se till att avinstallera den först med kommandot: `yum remove openssh`.
:::

Innan du installerar SSH-servern, se till att systemet är uppdaterat. Kör följande kommando:
```
yum update
```

Installera sedan SSH-servern med kommandot:
```
yum install openssh-server
```

När installationen är klar startar du SSH-servern med:
```
systemctl start sshd
```

Se till att tjänsten startar automatiskt vid systemstart med:
```
systemctl enable sshd
```

</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Vill du installera om SSH-servern? Se till att avinstallera den först med kommandot: `apt remove openssh`.
:::

Innan du installerar SSH-servern, se till att systemet är uppdaterat. Kör följande kommando:
```
apt update
```

Installera sedan SSH-servern med kommandot:
```
apt install openssh-server
```

När installationen är klar startar du SSH-servern med:
```
systemctl start sshd
```

Se till att tjänsten startar automatiskt vid systemstart med:
```
systemctl enable sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Vill du installera om SSH-servern? Se till att avinstallera den först med kommandot: `apt remove openssh`.
:::

Innan du installerar SSH-servern, se till att systemet är uppdaterat. Kör följande kommando:
```
apt update
```

Installera sedan SSH-servern med kommandot:
```
apt install openssh-server
```

När installationen är klar startar du SSH-servern med:
```
systemctl start sshd
```

Se till att tjänsten startar automatiskt vid systemstart med:
```
systemctl enable sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Vill du installera om SSH-servern? Se till att avinstallera den först med kommandot: `dnf remove openssh`.
:::

Innan du installerar SSH-servern, se till att systemet är uppdaterat. Kör följande kommando:
```
dnf update
```

Installera sedan SSH-servern med kommandot:
```
dnf install openssh-server
```

När installationen är klar startar du SSH-servern med:
```
systemctl start sshd
```

Se till att tjänsten startar automatiskt vid systemstart med:
```
systemctl enable sshd
```
</TabItem>
</Tabs>

## Aktivera root-inloggning

<Tabs>

<TabItem value="CentOS" label="CentOS" default>
För att aktivera root-inloggning behöver du redigera openssh-konfigurationsfilen. Vi använder "nano" som editor i den här guiden.

:::info
Om "nano" inte redan är installerat måste du installera det först med kommandot: `yum install nano`
:::

Öppna konfigurationsfilen med:
```
nano /etc/ssh/sshd_config 
```

Navigera med piltangenterna och leta upp raden:
```
#PermitRootLogin prohibit-password
```

Ändra den till följande för att tillåta root-inloggning på distans:
```
PermitRootLogin yes
```

Starta om SSH-servern för att tillämpa ändringarna med:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian" default>
För att aktivera root-inloggning behöver du redigera openssh-konfigurationsfilen. Vi använder "nano" som editor i den här guiden.

:::info
Om "nano" inte redan är installerat måste du installera det först med kommandot: `yum install nano`
:::

Öppna konfigurationsfilen med:
```
nano /etc/ssh/sshd_config 
```

Navigera med piltangenterna och leta upp raden:
```
#PermitRootLogin prohibit-password
```

Ändra den till följande för att tillåta root-inloggning på distans:
```
PermitRootLogin yes
```

Starta om SSH-servern för att tillämpa ändringarna med:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu" default>
För att aktivera root-inloggning behöver du redigera openssh-konfigurationsfilen. Vi använder "nano" som editor i den här guiden.

:::info
Om "nano" inte redan är installerat måste du installera det först med kommandot: `yum install nano`
:::

Öppna konfigurationsfilen med:
```
nano /etc/ssh/sshd_config 
```

Navigera med piltangenterna och leta upp raden:
```
#PermitRootLogin prohibit-password
```

Ändra den till följande för att tillåta root-inloggning på distans:
```
PermitRootLogin yes
```

Starta om SSH-servern för att tillämpa ändringarna med:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora" default>
För att aktivera root-inloggning behöver du redigera openssh-konfigurationsfilen. Vi använder "nano" som editor i den här guiden.

:::info
Om "nano" inte redan är installerat måste du installera det först med kommandot: `yum install nano`
:::

Öppna konfigurationsfilen med:
```
nano /etc/ssh/sshd_config 
```

Navigera med piltangenterna och leta upp raden:
```
#PermitRootLogin prohibit-password
```

Ändra den till följande för att tillåta root-inloggning på distans:
```
PermitRootLogin yes
```

Starta om SSH-servern för att tillämpa ändringarna med:
```
systemctl restart sshd
```
</TabItem>
</Tabs>


## Avslutning

Grattis, du har nu installerat och konfigurerat SSH-tjänsten! Har du fler frågor eller problem? Tveka inte att kontakta vår support, vi finns här för dig varje dag! 


<InlineVoucher />