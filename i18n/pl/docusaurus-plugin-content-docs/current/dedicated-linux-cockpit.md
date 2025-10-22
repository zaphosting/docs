---
id: dedicated-linux-cockpit
title: "Serwer dedykowany: Instalacja Cockpit"
description: "Dowiedz się, jak efektywnie zarządzać serwerami Linux dzięki webowemu interfejsowi Cockpit do monitoringu i administracji → Sprawdź teraz"
sidebar_label: Instalacja Cockpit
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Cockpit to webowy interfejs do zarządzania jednym lub wieloma serwerami Linux (klaster). Od prostych logów po zarządzanie RAID, Cockpit oferuje wiele funkcji.  
Cockpit jest odpowiedni dla początkujących, ale też dla zaawansowanych użytkowników, którzy chcą szybko zobaczyć i zarządzać wszystkim, co ważne. Dodatkowo, dostęp do niego można uzyskać z niemal każdego urządzenia.  
Strona projektu dostępna jest pod adresem https://cockpit-project.org/. 

:::info
Ten poradnik wyjaśnia instalację dla Debiana (od Buster)/ Ubuntu (od Bionic Beaver). Instalacja jest również dostępna na stronie projektu dla Fedory, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Archlinux i Tumbleweed.   
:::

<InlineVoucher />

## Instalacja

Najpierw serwer musi zostać zaktualizowany:
```
// Aktualizacja
sudo apt update; sudo apt upgrade -y
```
Następnie można przejść do instalacji: 
```
// Instalacja Cockpit
sudo apt install cockpit -y
```
Po zakończeniu instalacji panel Cockpit będzie dostępny pod adresem IP:9090.  
Logowanie odbywa się za pomocą standardowych danych logowania serwera/użytkownika. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/iobBy6s7gDJ4Zxm/preview)

<InlineVoucher />