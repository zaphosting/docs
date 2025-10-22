---
id: vserver-linux-xrdp
title: "VPS: Instalacja xRDP (Pulpit zdalny)"
description: "Dowiedz się, jak skonfigurować dostęp do pulpitu zdalnego na serwerach Ubuntu i Debian, aby łatwiej nimi zarządzać → Sprawdź teraz"
sidebar_label: Instalacja xRDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Na Linuksie zazwyczaj domyślnie korzysta się z konsoli SSH do zarządzania serwerem. W niektórych przypadkach łatwiej może być użyć połączenia pulpitu zdalnego, podobnego do Windows.  
Post-instalacja jest możliwa dla większości dystrybucji Linuksa. W tym poradniku wyjaśniamy to na przykładzie Ubuntu i Debiana.  
<InlineVoucher />

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
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/P3G4ztqbYjZZMGR/preview)

Jeśli status jest OK, trzeba jeszcze utworzyć użytkownika. Potem należy zrestartować usługę xRDP: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

Po zakończeniu konfiguracji możesz połączyć się z rootem lub odpowiednim użytkownikiem serwera przez Pulpit zdalny.  
Domyślny port to: 3389

## Połączenie

Połączenie można nawiązać za pomocą dowolnego klienta RDP, łącząc się z IP:PORT.  
Podczas łączenia zostaniesz poproszony o dane logowania: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/GHzrDz6Ct3TGDN2/preview)

Po poprawnym zalogowaniu zobaczysz pulpit.  
W Ubuntu wygląda to trochę inaczej niż w Debianie:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/tgkAEyQxXnrk3Qr/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/gtxmQcPACEZJce7/preview)


## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś xRDP! Jeśli masz dalsze pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie! 

<InlineVoucher />