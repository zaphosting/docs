---
id: vserver-linux-ssh-server
title: "VPS: SSH Installeren"
description: "Leer hoe je veilig toegang krijgt tot en je remote Linux-servers beheert met SSH voor betere databeveiliging en servercontrole → Ontdek het nu"
sidebar_label: SSH Installeren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introductie

Secure Shell (SSH) is een veilig protocol dat veilige en versleutelde toegang tot remote systemen mogelijk maakt. Het garandeert de vertrouwelijkheid en integriteit van data die via netwerken wordt verzonden.

In deze gids leer je hoe je de SSH-server installeert of opnieuw installeert voor verschillende Linux-distributies die wij aanbieden op onze VPS-servers. De meeste Linux-distro’s die via onze VPS-servers worden aangeboden, hebben standaard een SSH-server geïnstalleerd, waardoor je deze eenvoudig kunt beheren via de webinterface van het product. Je kunt zien hoe dit werkt via onze handleiding: [Eerste toegang (SSH)](vserver-linux-ssh.md)

Wil je meer weten over het verbeteren van de beveiliging van je server? Check dan zeker onze [Security Tips](vserver-linux-security-tips.md) gids, waarin we diverse tools en services bespreken die je server nog veiliger maken.

<InlineVoucher />

## Installatie

Om te starten met de installatie, maak je verbinding met je server via VNC. Volg hiervoor de stappen in de [VNC-console](vserver-vnc.md).


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
</TabItem>
</Tabs>

## Root login inschakelen

<Tabs>

<TabItem value="CentOS" label="CentOS" default>
Om root login in te schakelen, moet je het openssh-configuratiebestand aanpassen. In deze gids gebruiken we "nano" als editor.

:::info
Als "nano" nog niet geïnstalleerd is, moet je dat eerst doen met het commando: `yum install nano`
:::

Open het configuratiebestand met:
```
nano /etc/ssh/sshd_config 
```

Navigeer met de pijltjestoetsen en zoek de volgende regel:
```
#PermitRootLogin prohibit-password
```

Pas deze aan naar:
```
PermitRootLogin yes
```

Herstart daarna de SSH-server om de nieuwe instellingen toe te passen:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian" default>
Om root login in te schakelen, moet je het openssh-configuratiebestand aanpassen. In deze gids gebruiken we "nano" als editor.

:::info
Als "nano" nog niet geïnstalleerd is, moet je dat eerst doen met het commando: `yum install nano`
:::

Open het configuratiebestand met:
```
nano /etc/ssh/sshd_config 
```

Navigeer met de pijltjestoetsen en zoek de volgende regel:
```
#PermitRootLogin prohibit-password
```

Pas deze aan naar:
```
PermitRootLogin yes
```

Herstart daarna de SSH-server om de nieuwe instellingen toe te passen:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu" default>
Om root login in te schakelen, moet je het openssh-configuratiebestand aanpassen. In deze gids gebruiken we "nano" als editor.

:::info
Als "nano" nog niet geïnstalleerd is, moet je dat eerst doen met het commando: `yum install nano`
:::

Open het configuratiebestand met:
```
nano /etc/ssh/sshd_config 
```

Navigeer met de pijltjestoetsen en zoek de volgende regel:
```
#PermitRootLogin prohibit-password
```

Pas deze aan naar:
```
PermitRootLogin yes
```

Herstart daarna de SSH-server om de nieuwe instellingen toe te passen:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora" default>
Om root login in te schakelen, moet je het openssh-configuratiebestand aanpassen. In deze gids gebruiken we "nano" als editor.

:::info
Als "nano" nog niet geïnstalleerd is, moet je dat eerst doen met het commando: `yum install nano`
:::

Open het configuratiebestand met:
```
nano /etc/ssh/sshd_config 
```

Navigeer met de pijltjestoetsen en zoek de volgende regel:
```
#PermitRootLogin prohibit-password
```

Pas deze aan naar:
```
PermitRootLogin yes
```

Herstart daarna de SSH-server om de nieuwe instellingen toe te passen:
```
systemctl restart sshd
```
</TabItem>
</Tabs>


## Conclusie

Gefeliciteerd, je hebt de SSH-service succesvol geïnstalleerd en geconfigureerd! Heb je nog vragen of problemen? Neem dan gerust contact op met onze support, die elke dag voor je klaarstaat!


<InlineVoucher />