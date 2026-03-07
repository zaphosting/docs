---
id: vserver-linux-ip-configuration
title: "VPS: IP-konfiguration (Ubuntu/Debian)"
description: "Lär dig hur du konfigurerar en statisk IP-adress på en Linux-server som kör Ubuntu eller Debian → Läs mer nu"
sidebar_label: Konfigurera IP-adresser
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduktion

Att konfigurera IP-adresser på din Linux VPS ger dig kontroll över hur din server kommunicerar i nätverket. Det inkluderar att tilldela IP-adresser, definiera standardgateway och konfigurera DNS-servrar som krävs för nätverksanslutning.

:::warning Servern är otillgänglig på grund av saknad internetanslutning?
Om din server blir otillgänglig på grund av felaktig nätverkskonfiguration eller saknad internetanslutning kan fjärråtkomst via SSH sluta fungera. Använd [VNC-konsolen](vserver-vnc.md) i webbgränssnittet för att ansluta till din server och fixa nätverksinställningarna.
:::

<InlineVoucher />

## Förberedelser

Innan du konfigurerar en statisk IP-adress, se till att du har följande information till hands:

- IP-adress du vill tilldela  
- Subnätmask  
- Standardgateway  
- DNS-servrar  

Denna info hittar du i webbgränssnittet. Öppna din **VPS-hantering** och gå till **IP-adresser**.

## Konfiguration

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Ubuntu använder **Netplan** för nätverkskonfiguration. Anslut till din VPS via SSH och hitta Netplan-konfigurationsfilen i `/etc/netplan/`-mappen. Öppna filen:

```bash
nano /etc/netplan/50-cloud-init.yaml
```

Ändra konfigurationen för att definiera en statisk IP-adress:
```
network:
  version: 2
  ethernets:
    eth0:
      match:
        macaddress: "bc:24:11:5f:5c:34"
      addresses:
      - "109.230.238.45/24"
      nameservers:
        addresses:
        - 8.8.8.8
        - 1.1.1.1
      set-name: "eth0"
      routes:
      - to: "default"
        via: "109.230.238.1"
```

Justera följande värden så att de matchar din nätverkskonfiguration:

- 109.230.238.45 → Din statiska IP-adress
- 109.230.238.1 → Din gateway
- DNS-adresser → Dina föredragna DNS-servrar

Spara filen och applicera konfigurationen:

```
sudo netplan apply
```

</TabItem> <TabItem value="debian" label="Debian">

Debian använder ofta nätverksgränssnittets konfigurationsfil istället för Netplan. Anslut till din VPS via SSH och öppna filen för nätverksgränssnitt:

```
nano /etc/network/interfaces
```

Lägg till eller ändra konfigurationen för ditt nätverksgränssnitt. Exempel:

```bash
auto lo
iface lo inet loopback

# Primära nätverksgränssnittet
allow-hotplug ens18
iface ens18 inet static
        address 134.255.219.160/24
        gateway 134.255.219.1
        # dns-* alternativ hanteras av resolvconf-paketet, om installerat
        dns-nameservers 1.1.1.1
```

Justera värdena efter din nätverkskonfiguration:
- address → Din statiska IP-adress
- netmask → Din subnätmask
- gateway → Din standardgateway
- dns-nameservers → Dina föredragna DNS-servrar

Efter att ha sparat filen, starta om nätverkstjänsten:

```
systemctl restart networking
```

</TabItem> </Tabs>



## Verifiering

Efter att ha applicerat konfigurationen rekommenderas det att kontrollera att den nya IP-adressen har satts korrekt. Kör följande kommando i terminalen:

```
ip a
```

Det här kommandot visar alla **nätverksgränssnitt** på systemet med deras aktuella konfiguration. Leta upp det gränssnitt du konfigurerade, oftast `eth0`, `ens18` eller liknande.

I gränssnittets sektion, leta efter **`inet`-raden**, som visar IPv4-adressen tilldelad gränssnittet. Utdata bör innehålla den statiska IP-adress du satte tidigare, t.ex.:

```
inet 109.230.238.45/24
```

![img](https://screensaver01.zap-hosting.com/index.php/s/TmaCRcfLgiabTBp/preview)

Om rätt adress visas har den statiska IP-konfigurationen lyckats. Om den nya IP-adressen inte syns, dubbelkolla konfigurationsfilen och att ändringarna sparats innan du kör:

```
sudo netplan apply
```

igen.



## Avslutning

Grattis! Du har nu konfigurerat din IP-adress på din Linux-server. Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns här för dig varje dag! 🙂

<InlineVoucher />