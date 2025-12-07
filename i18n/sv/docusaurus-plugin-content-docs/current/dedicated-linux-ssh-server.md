---
id: dedicated-linux-ssh-server
title: "Dedikerad Server: Installation av SSH"
description: "Upptäck hur du säkert installerar och hanterar SSH-servrar på Linux VPS för trygg fjärråtkomst och förbättrat serverskydd → Lär dig mer nu"
sidebar_label: Installera SSH
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Secure Shell (SSH) är ett säkert protokoll som möjliggör trygg och krypterad åtkomst till fjärrsystem. Det garanterar konfidentialitet och integritet för data som skickas över nätverk.

I den här guiden lär du dig hur du installerar eller installerar om SSH-servern för flera Linux-distributioner som vi erbjuder på våra VPS-servrar. De flesta Linux-distros som erbjuds via våra VPS-servrar har en SSH-server förinstallerad, vilket gör att du enkelt kan hantera den via produktens webbgränssnitt. Du kan se hur du gör detta i vår guide: [Initial access (SSH)](vserver-linux-ssh.md)

Vill du lära dig mer om hur du förbättrar säkerheten på din server rekommenderar vi starkt att du kollar in vår guide [Säkerhetstips](vserver-linux-security-tips.md) som tipsar om olika verktyg och tjänster för att göra din server ännu säkrare.



## Installation

För att starta installationsprocessen, anslut till din server via VNC. Följ dessa steg med hjälp av [VNC-konsolen](vserver-vnc.md).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Om du vill installera om SSH-servern, se till att avinstallera den först. Det gör du med kommandot: `yum remove openssh`.
:::

Innan du installerar SSH-servern, se till att ditt system är uppdaterat. Kör följande kommando:
```
yum update
```

Fortsätt nu med att installera SSH-servern med följande kommando:
```
yum install openssh-server
```

När installationen är klar kan du starta SSH-serverns tjänst med följande kommando:
```
systemctl start sshd
```

Se till att tjänsten startar automatiskt vid systemstart. Det gör du med detta kommando:
```
systemctl enable sshd
```

## Aktivera root-inloggning

För att aktivera root-inloggning behöver du redigera openssh-konfigurationsfilen. I den här guiden använder vi "nano" som editor.

:::info
Om "nano" inte redan är installerat måste du installera det först. Använd då kommandot: `yum install nano`
:::

Öppna konfigurationsfilen med:
```
nano /etc/ssh/sshd_config 
```

Navigera med piltangenterna och leta upp följande rad:
```
#PermitRootLogin prohibit-password
```

Ändra den till följande för att tillåta root-inloggning på distans:
```
PermitRootLogin yes
```

Slutligen, starta om SSH-servern för att tillämpa ändringarna med:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Om du vill installera om SSH-servern, se till att avinstallera den först. Det gör du med kommandot: `apt remove openssh`.
:::

Innan du installerar SSH-servern, se till att ditt system är uppdaterat. Kör följande kommando:
```
apt update
```

Fortsätt nu med att installera SSH-servern med följande kommando:
```
apt install openssh-server
```

När installationen är klar kan du starta SSH-serverns tjänst med följande kommando:
```
systemctl start sshd
```

Se till att tjänsten startar automatiskt vid systemstart. Det gör du med detta kommando:
```
systemctl enable sshd
```

## Aktivera root-inloggning

För att aktivera root-inloggning behöver du redigera openssh-konfigurationsfilen. I den här guiden använder vi "nano" som editor.

:::info
Om du inte redan har "nano" installerat måste du installera det. Använd då kommandot: `apt install nano`
:::

Öppna konfigurationsfilen med:
```
nano /etc/ssh/sshd_config 
```

Navigera med piltangenterna och leta upp följande rad:
```
#PermitRootLogin prohibit-password
```

Ändra den till följande för att tillåta root-inloggning på distans:
```
PermitRootLogin yes
```

Slutligen, starta om SSH-servern för att tillämpa ändringarna med:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Om du vill installera om SSH-servern, se till att avinstallera den först. Det gör du med kommandot: `apt remove openssh`.
:::

Innan du installerar SSH-servern, se till att ditt system är uppdaterat. Kör följande kommando:
```
apt update
```

Fortsätt nu med att installera SSH-servern med följande kommando:
```
apt install openssh-server
```

När installationen är klar kan du starta SSH-serverns tjänst med följande kommando:
```
systemctl start sshd
```

Se till att tjänsten startar automatiskt vid systemstart. Det gör du med detta kommando:
```
systemctl enable sshd
```

## Aktivera root-inloggning

För att aktivera root-inloggning behöver du redigera openssh-konfigurationsfilen. I den här guiden använder vi "nano" som editor.

:::info
Om du inte redan har "nano" installerat måste du installera det. Använd då kommandot: `apt install nano`
:::

Öppna konfigurationsfilen med:
```
nano /etc/ssh/sshd_config 
```

Navigera med piltangenterna och leta upp följande rad:
```
#PermitRootLogin prohibit-password
```

Ändra den till följande för att tillåta root-inloggning på distans:
```
PermitRootLogin yes
```

Slutligen, starta om SSH-servern för att tillämpa ändringarna med:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Om du vill installera om SSH-servern, se till att avinstallera den först. Det gör du med kommandot: `dnf remove openssh`.
:::

Innan du installerar SSH-servern, se till att ditt system är uppdaterat. Kör följande kommando:
```
dnf update
```

Fortsätt nu med att installera SSH-servern med följande kommando:
```
dnf install openssh-server
```

När installationen är klar kan du starta SSH-serverns tjänst med följande kommando:
```
systemctl start sshd
```

Se till att tjänsten startar automatiskt vid systemstart. Det gör du med detta kommando:
```
systemctl enable sshd
```

## Aktivera root-inloggning

För att aktivera root-inloggning behöver du redigera openssh-konfigurationsfilen. I den här guiden använder vi "nano" som editor.

:::info
Om du inte redan har "nano" installerat måste du installera det. Använd då kommandot: `dnf install nano`
:::

Öppna konfigurationsfilen med:
```
sudo nano /etc/ssh/sshd_config 
```

Navigera med piltangenterna och leta upp följande rad:
```
#PermitRootLogin prohibit-password
```

Ändra den till följande för att tillåta root-inloggning på distans:
```
PermitRootLogin yes
```

Slutligen, starta om SSH-servern för att tillämpa ändringarna med:
```
systemctl restart sshd
```
</TabItem>
</Tabs>

Du har nu installerat SSH-tjänsten på din server och kan ansluta till den via SSH.