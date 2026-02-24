---
id: dedicated-linux-xrdp
title: "Konfiguracja xRDP na serwerze Linux - Włącz zdalny pulpit"
description: "Dowiedz się, jak skonfigurować zdalny pulpit na serwerach Ubuntu i Debian, aby łatwiej nimi zarządzać → Sprawdź teraz"
sidebar_label: Instalacja xRDP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Na Linuxie zazwyczaj jest domyślna konsola SSH do zarządzania serwerem. W niektórych przypadkach łatwiej może być użyć połączenia zdalnego pulpitu, podobnie jak w Windows.  
Post-instalacja jest możliwa dla większości dystrybucji Linuxa. W tym poradniku wyjaśniamy to na przykładzie Ubuntu i Debiana.

:::info
Ważne: Jako system operacyjny musi być użyte co najmniej Ubuntu 18.04.X LTS (Bionic Beaver) lub Debian 10 (Buster). Zalecamy nowsze wersje.
:::

## Instalacja xRDP

Najpierw serwer powinien zostać zaktualizowany: 
```
// Debian
sudo apt update; sudo apt upgrade -y

// Ubuntu
sudo apt update; sudo apt upgrade -y
```

Po aktualizacji instalujemy niezbędne pakiety: 
```
// Debian
sudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y

// Ubuntu
sudo apt install ubuntu-desktop -y
```

Następnie instalujemy xRDP: 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

Po instalacji status powinien pokazać "active": 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/wdKep3W6GHWekp3/preview)

Jeśli status jest OK, trzeba jeszcze utworzyć użytkownika. Potem restartujemy usługę xRDP: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

Po zakończeniu konfiguracji możesz połączyć się z rootem lub odpowiednim użytkownikiem serwera przez Zdalny Pulpit.  
Domyślny port to: 3389

## Połączenie

Połączenie można nawiązać przez dowolne narzędzie RDP, łącząc się z IP:PORT.  
Podczas łączenia zostaniesz poproszony o dane logowania: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/btRPMG73cT6ysyL/preview)

Po poprawnym zalogowaniu zobaczysz pulpit.  
Na Ubuntu wygląda to trochę inaczej niż na Debianie:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/Co6TgmH3yoad6HP/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/riHNCEEyKcoLHDy/preview)