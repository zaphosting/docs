---
id: dedicated-linux-ssh-server
title: "SSH instellen op een Linux Server - Veilige externe servertoegang inschakelen"
description: "Ontdek hoe je SSH-servers veilig installeert en beheert op Linux-servers voor veilige externe toegang en betere serverbeveiliging → Leer het nu"
sidebar_label: SSH installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Secure Shell (SSH) is een veilig protocol dat versleutelde toegang tot externe systemen mogelijk maakt. Het zorgt voor de vertrouwelijkheid en integriteit van data die over netwerken wordt verzonden.

In deze gids leer je hoe je de SSH-server installeert of opnieuw installeert voor verschillende Linux-distributies die wij aanbieden op onze VPS/Dedicated Servers. De meeste Linux-distro’s die via onze VPS/Dedicated Servers worden geleverd, hebben standaard een SSH-server geïnstalleerd, waardoor je deze eenvoudig kunt beheren via de webinterface van het product. Hoe je dit doet, lees je in onze gids: [Eerste toegang (SSH)](vserver-linux-ssh.md)

Wil je je serverbeveiliging verder verbeteren? Check dan zeker onze [Security Tips](vserver-linux-security-tips.md) gids met handige tools en services om je server nog veiliger te maken.



## Installatie

Om te beginnen met installeren, maak je verbinding met je server via VNC. Volg hiervoor de stappen in de [VNC-console](vserver-vnc.md).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Wil je de SSH-server opnieuw installeren? Verwijder hem dan eerst met het commando: `yum remove openssh`.
:::

Zorg dat je systeem up-to-date is voordat je de SSH-server installeert. Voer het volgende commando uit:
```
yum update
```

Installeer nu de SSH-server met dit commando:
```
yum install openssh-server
```

Als de installatie klaar is, start je de SSH-server met:
```
systemctl start sshd
```

Zorg dat de service automatisch start bij het opstarten van het systeem:
```
systemctl enable sshd
```

## Root login inschakelen

Wil je root login inschakelen? Dan moet je het openssh-configuratiebestand aanpassen. We gebruiken hier "nano" als editor.

:::info
Als "nano" nog niet geïnstalleerd is, installeer het dan eerst met: `yum install nano`
:::

Open het configuratiebestand met:
```
nano /etc/ssh/sshd_config 
```

Navigeer met de pijltjestoetsen en zoek deze regel:
```
#PermitRootLogin prohibit-password
```

Pas deze aan naar:
```
PermitRootLogin yes
```

Herstart daarna de SSH-server om de wijzigingen toe te passen:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Wil je de SSH-server opnieuw installeren? Verwijder hem dan eerst met het commando: `apt remove openssh`.
:::

Zorg dat je systeem up-to-date is voordat je de SSH-server installeert. Voer het volgende commando uit:
```
apt update
```

Installeer nu de SSH-server met dit commando:
```
apt install openssh-server
```

Als de installatie klaar is, start je de SSH-server met:
```
systemctl start sshd
```

Zorg dat de service automatisch start bij het opstarten van het systeem:
```
systemctl enable sshd
```

## Root login inschakelen

Wil je root login inschakelen? Dan moet je het openssh-configuratiebestand aanpassen. We gebruiken hier "nano" als editor.

:::info
Als "nano" nog niet geïnstalleerd is, installeer het dan eerst met: `apt install nano`
:::

Open het configuratiebestand met:
```
nano /etc/ssh/sshd_config 
```

Navigeer met de pijltjestoetsen en zoek deze regel:
```
#PermitRootLogin prohibit-password
```

Pas deze aan naar:
```
PermitRootLogin yes
```

Herstart daarna de SSH-server om de wijzigingen toe te passen:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Wil je de SSH-server opnieuw installeren? Verwijder hem dan eerst met het commando: `apt remove openssh`.
:::

Zorg dat je systeem up-to-date is voordat je de SSH-server installeert. Voer het volgende commando uit:
```
apt update
```

Installeer nu de SSH-server met dit commando:
```
apt install openssh-server
```

Als de installatie klaar is, start je de SSH-server met:
```
systemctl start sshd
```

Zorg dat de service automatisch start bij het opstarten van het systeem:
```
systemctl enable sshd
```

## Root login inschakelen

Wil je root login inschakelen? Dan moet je het openssh-configuratiebestand aanpassen. We gebruiken hier "nano" als editor.

:::info
Als "nano" nog niet geïnstalleerd is, installeer het dan eerst met: `apt install nano`
:::

Open het configuratiebestand met:
```
nano /etc/ssh/sshd_config 
```

Navigeer met de pijltjestoetsen en zoek deze regel:
```
#PermitRootLogin prohibit-password
```

Pas deze aan naar:
```
PermitRootLogin yes
```

Herstart daarna de SSH-server om de wijzigingen toe te passen:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Wil je de SSH-server opnieuw installeren? Verwijder hem dan eerst met het commando: `dnf remove openssh`.
:::

Zorg dat je systeem up-to-date is voordat je de SSH-server installeert. Voer het volgende commando uit:
```
dnf update
```

Installeer nu de SSH-server met dit commando:
```
dnf install openssh-server
```

Als de installatie klaar is, start je de SSH-server met:
```
systemctl start sshd
```

Zorg dat de service automatisch start bij het opstarten van het systeem:
```
systemctl enable sshd
```

## Root login inschakelen

Wil je root login inschakelen? Dan moet je het openssh-configuratiebestand aanpassen. We gebruiken hier "nano" als editor.

:::info
Als "nano" nog niet geïnstalleerd is, installeer het dan eerst met: `dnf install nano`
:::

Open het configuratiebestand met:
```
sudo nano /etc/ssh/sshd_config 
```

Navigeer met de pijltjestoetsen en zoek deze regel:
```
#PermitRootLogin prohibit-password
```

Pas deze aan naar:
```
PermitRootLogin yes
```

Herstart daarna de SSH-server om de wijzigingen toe te passen:
```
systemctl restart sshd
```
</TabItem>
</Tabs>

Je hebt nu succesvol de SSH-service op je server geïnstalleerd en kunt vanaf nu via SSH verbinding maken met je server.