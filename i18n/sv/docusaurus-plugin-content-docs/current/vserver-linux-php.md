---
id: vserver-linux-php
title: 'Installera PHP på en Linux-server – Driv kraftfulla webbapplikationer'
description: "Lär dig hur du installerar PHP på din Linux-server för webbutveckling och optimera din setup för Apache eller fristående användning → Läs mer nu"
sidebar_label: Installera PHP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

PHP är ett populärt allmänt programmeringsspråk med stor användning inom webbutveckling. I den här guiden går vi igenom hur du installerar PHP på din server.

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din server via SSH. Om du inte vet hur man gör detta, kolla gärna in vår guide för [Initial access (SSH)](vserver-linux-ssh.md).

När du är inloggad rekommenderar vi att du kör uppdateringskommandot som passar ditt operativsystem för att hålla servern säker och uppdaterad med de senaste funktionerna.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Installation

Det finns två huvudsakliga sätt att installera PHP på din Linux-server, antingen fristående eller som ett tilläggspaket för Apache. Om du använder din egen webbserver som inte är Apache eller för allmänna ändamål rekommenderar vi den fristående metoden. Annars, för användning med Apache-webbservern, använd Apache-metoden för att installera PHP som ett extra paket.

## Fristående

Använd följande kommando för att installera den senaste versionen av PHP. Vill du installera en specifik version kan du använda flaggan `-y` följt av versionsnumret.
```
# Senaste versionen
sudo apt install php

# Specifik version (t.ex. php7.4)
sudo apt -y install php[version]
```

Verifiera att installationen lyckades med kommandot `php -v`. Du har nu installerat PHP på din server. Vi rekommenderar att du läser avsnittet **PHP Extensions** för att säkerställa att du installerar eventuella tillägg du kan behöva.

## Med Apache

Börja med att installera Apache på din server om du inte redan gjort det. Det gör du med följande kommando:
```
sudo apt install apache2
```

När Apache är installerat bör du se till att rätt brandväggsregler skapas så att webbservern är åtkomlig från internet. I det här exemplet använder vi **UFW Firewall** eftersom Apache har en registrerad applikation för detta. Använder du en annan brandvägg, se till att tillåta port 80 (HTTP) genom brandväggen.
```
sudo ufw allow in "Apache"
```

Din server bör nu vara åtkomlig. Testa genom att skriva in `http://[din_serverip]` i en webbläsare.

När Apache är klart kan du installera PHP-paketet för Apache med följande kommando:
```
sudo apt install php libapache2-mod-php
```

Verifiera att installationen lyckades med kommandot `php -v`. Du har nu installerat PHP tillsammans med din Apache-webbserver. Vi rekommenderar att du läser avsnittet **PHP Extensions** för att säkerställa att du installerar eventuella tillägg du kan behöva.

## PHP Extensions

PHP levereras med ett stort urval av tillägg som är valfria och kan installeras för att utöka funktionaliteten. För att se en lista över tillgängliga tillägg, kör följande kommando som visar sökresultatet i konsolen via `less`-kommandot.

```
apt search php- | less
```

Använd piltangenterna för att scrolla och tryck `Q` när du vill avsluta. För att installera ett tilläggspaket, använd helt enkelt apt install-kommandot så här. Du kan ange flera tillägg samtidigt separerade med mellanslag för att snabba upp installationen.

```
sudo apt install [php_extension] [...]
```

## Avslutning

Du har nu installerat PHP på din Linux-server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />