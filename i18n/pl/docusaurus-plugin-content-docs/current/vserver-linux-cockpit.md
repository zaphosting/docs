---
id: vserver-linux-cockpit
title: "Konfiguracja Cockpit na serwerze Linux - Zarządzaj swoim serwerem przez przeglądarkę"
description: "Dowiedz się, jak efektywnie zarządzać serwerami Linux dzięki webowemu interfejsowi Cockpit — dla początkujących i zaawansowanych → Sprawdź teraz"
sidebar_label: Instalacja Cockpit
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Cockpit to webowy interfejs do zarządzania jednym lub wieloma serwerami Linux (klaster). Od prostych logów po zarządzanie RAID — Cockpit oferuje mnóstwo funkcji.  
Cockpit sprawdzi się zarówno dla początkujących, jak i zaawansowanych użytkowników, którzy chcą szybko mieć podgląd i kontrolę nad najważniejszymi rzeczami. Do tego można się do niego dostać praktycznie z każdego urządzenia.  
Strona projektu dostępna jest pod adresem https://cockpit-project.org/. 

:::info
Ten poradnik opisuje instalację dla Debiana (od wersji Buster) oraz Ubuntu (od Bionic Beaver). Instalację znajdziesz też na stronie projektu dla Fedory, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Archlinux i Tumbleweed.  
:::

<InlineVoucher />

## Instalacja

Najpierw zaktualizuj serwer:
```
// Aktualizacja
sudo apt update; sudo apt upgrade -y
```
Następnie przejdź do instalacji: 
```
// Instalacja Cockpit
sudo apt install cockpit -y
```
Po zakończeniu instalacji panel Cockpit będzie dostępny pod adresem IP:9090.  
Logujesz się danymi użytkownika serwera, tak jak zwykle. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## Podsumowanie

Gratulacje, właśnie zainstalowałeś i skonfigurowałeś Cockpit! Jeśli masz jakieś pytania lub problemy, śmiało kontaktuj się z naszym supportem — jesteśmy do Twojej dyspozycji codziennie! 

<InlineVoucher />