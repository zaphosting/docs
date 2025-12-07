---
id: vserver-linux-docker
title: "VPS: Installation av Docker"
description: "Upptäck hur du installerar Docker på din Linux-server för att köra isolerade applikationer effektivt och spara systemresurser → Lär dig mer nu"
sidebar_label: Installera Docker
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduktion

Docker är en lättviktig, öppen källkodsvirtualiseringsmjukvara som levererar tjänster eller applikationer isolerat på ett enda system. Till skillnad från riktiga virtuella maskiner emuleras eller hostas inget extra operativsystem, utan endast en applikationsmiljö inom värdsystemet. Detta sparar inte bara resurser generellt, utan ger också låg overhead jämfört med full virtualisering. I den här guiden går vi igenom hur du installerar Docker på din server.

<InlineVoucher />

## Förberedelser

För att börja måste du ansluta till din Linux-server via SSH. Kolla gärna in vår guide för [Första åtkomst (SSH)](vserver-linux-ssh.md) om du behöver hjälp med detta. I hela guiden använder vi Ubuntu som Linux-distribution.



## Installation

Nu när du är ansluten till din Linux-server kan du fortsätta med installationsmetoderna. Välj en av Linux-repositorierna nedan för att se relevanta installationssteg.

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

För att börja måste du lägga till Dockers paket via `apt` och konfigurera det. Detta gör att du enkelt kan installera och uppdatera Docker från repot i framtiden.

Använd följande kommandon för att lägga till Dockers officiella GPG-nyckel till din repolista.

```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

När detta är klart måste du lägga till repot till `apt`-källorna med följande kommando.

```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Nu när du har lagt till Docker-repot till dina källor, kör `apt-get update` för att hämta ändringarna.

```
sudo apt-get update
```

Vid det här laget har du framgångsrikt konfigurerat Docker `apt`-repo. Som sista steg installerar du Docker-paketen. Du kan installera senaste versionen med följande kommando.

```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

För att börja bör du installera paketet `dnf-plugins-core` som hjälper till att hantera repositorier.

```
sudo dnf -y install dnf-plugins-core
```

När paketet är installerat lägger du till Docker-repot och installerar det med följande kommando.

```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Docker ska nu vara installerat. Som sista steg behöver du starta och aktivera det innan det kan användas.

```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

För att verifiera att installationen lyckades, testa att köra **hello-world**-imagen med följande kommando.

```
sudo docker run hello-world
```

Vid framgång bör du se ett trevligt välkomstmeddelande i chatten med grundläggande info. Om du får `Permission Denied`-fel, kontrollera att du aktiverat **Docker Compatibility**-alternativet i webbgränssnittet och startat om servern som beskrivet i förberedelseavsnittet.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Du har nu installerat Docker på din Linux-server.

## Efterinstallationsinställningar

Med Docker installerat på din server kan du välja att göra några extra inställningar för att slippa använda sudo vid Docker-kommandon och för att starta Docker automatiskt vid serverstart.

### Hantera Docker utan Sudo

Du kan slippa prefixa alla Docker-kommandon med `sudo` genom att skapa en Docker-grupp och lägga till dina användare i den. Det gör det smidigare, men var medveten om att det indirekt ger root-behörighet till användaren.

Skapa Docker-gruppen och lägg till din nuvarande användare med följande kommandon.

```
# Skapa Docker-grupp
sudo groupadd docker

# Lägg till nuvarande användare i Docker-gruppen
sudo usermod -aG docker $USER
```

När detta är gjort rekommenderar vi att du startar om servern för att gruppmedlemskapet ska uppdateras. Alternativt kan du köra `newgrp docker`.

Verifiera nu att du kan köra Docker-kommandon utan `sudo` genom att köra `docker run hello-world` igen.

:::tip
Ibland kan du få ett fel om en konfigurationsfil om du tidigare kört kommandot med `sudo`. För att fixa detta, ta bort Docker-katalogen med `rmdir ~/.docker/` så skapas den automatiskt på nytt vid nästa kommando.
:::

Om kommandot körs som det ska har du lyckats konfigurera Docker utan att behöva använda `sudo`.

### Starta Docker vid Boot

Du kan konfigurera Docker att starta automatiskt vid serverstart med `systemd`, som används av de flesta Linux-distributioner.

:::tip
På både Ubuntu & Debian startar Docker automatiskt vid boot som standard. Om du använder dessa distributioner behöver du inte göra något mer.
:::

Du kan aktivera Docker-tjänsten att starta vid boot med följande kommandon.
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

För att istället inaktivera tjänsten vid boot, byt ut `enable` mot `disable`. Du kan också hantera tjänsten med olika `systemctl`-kommandon, till exempel:
```
sudo systemctl start [din_tjänst]
sudo systemctl stop [din_tjänst]
sudo systemctl restart [din_tjänst]
```

## Avslutning

Grattis, du har nu installerat och konfigurerat Docker på din Linux-server! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns tillgänglig varje dag!

<InlineVoucher />