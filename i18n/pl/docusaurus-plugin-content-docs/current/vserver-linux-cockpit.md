---
id: vserver-linux-cockpit
title: "Konfiguracja Cockpit na serwerze Linux – Zarządzaj serwerem przez interfejs WWW"
description: "Dowiedz się, jak efektywnie zarządzać serwerami Linux dzięki webowemu interfejsowi Cockpit – dla początkujących i zaawansowanych → Sprawdź teraz"
sidebar_label: Instalacja Cockpit
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Cockpit to webowy interfejs do zarządzania jednym lub wieloma serwerami Linux (klaster). Od prostych logów po zarządzanie RAID – Cockpit oferuje mnóstwo funkcji.  
Cockpit jest idealny dla początkujących, ale też dla zaawansowanych użytkowników, którzy chcą szybko mieć podgląd i kontrolę nad wszystkim, co ważne. Do tego można się do niego dostać praktycznie z każdego urządzenia.  
Strona projektu dostępna jest pod adresem https://cockpit-project.org/. 

## Instalacja Cockpit przez One Click Apps Installer

Możesz zainstalować **Cockpit** bezpośrednio przez nasz **One Click Apps Installer** w panelu VPS. Po zakończeniu wstępnej konfiguracji aplikacji, otwórz katalog aplikacji, wyszukaj **Cockpit** i rozpocznij wdrożenie z wybranym projektem, środowiskiem i ustawieniami domeny. To szybki i wygodny sposób na uruchomienie i zarządzanie **Cockpit** bez ręcznego setupu w terminalu, a jednocześnie z korzyściami takimi jak zarządzanie przez web, wsparcie dla własnej domeny i automatyczne SSL tam, gdzie jest dostępne.

:::info
Ten poradnik opisuje instalację dla Debiana (od wersji Buster) i Ubuntu (od Bionic Beaver). Instalacja jest też dostępna na stronie projektu dla Fedory, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Archlinux i Tumbleweed.  
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
Logowanie odbywa się przy użyciu standardowych danych logowania do serwera/użytkownika. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować Cockpit! Jeśli masz pytania lub problemy, śmiało kontaktuj się z naszym supportem – jesteśmy do Twojej dyspozycji codziennie! 

<InlineVoucher />