---
id: vserver-linux-ssh
title: "VPS: Pierwszy dostęp przez SSH"
description: "Poznaj popularne klienty SSH do zarządzania serwerami Linux przez konsolę i dowiedz się, jak bezpiecznie połączyć się za pomocą Putty → Sprawdź teraz"
sidebar_label: Pierwszy dostęp (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

![](https://screensaver01.zap-hosting.com/index.php/s/TYEHE38gNQoFjBx/download/ssh_connect.gif)

Produkty serwerów Linux nie mają domyślnie graficznego panelu zarządzania, dlatego połączenie i obsługa odbywa się przez klienta SSH (konsolę). Do wyboru jest wiele klientów SSH. Poniżej znajdziesz przegląd znanych i często używanych klientów SSH.

| Klient SSH | Obsługiwane systemy operacyjne | Open-Source |                           Pobierz                           |
| :--------: | :-----------------------------: | :---------: | :---------------------------------------------------------: |
|   Putty    |        Windows, Linux            |     Tak     |               [Kliknij](https://www.putty.org/)             |
|   Kitty    |        Windows, Linux            |     Tak     |        [Kliknij](http://www.9bis.net/kitty/)                |
| MobaXterm  |        Windows, Linux            |     Tak     |           [Kliknij](https://mobaxterm.mobatek.net/)         |
| SecureCRT  |     Windows, Linux, Mac          |     Nie     | [Kliknij](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
| mRemoteNG  |           Windows                |     Tak     |           [Kliknij](https://mremoteng.org/download)         |


<InlineVoucher />

## Adres IP & dostęp

Poniżej wyjaśniamy, jak połączyć się za pomocą klienta SSH Putty. W oknie konfiguracji wpisz adres IP serwera oraz port SSH 22 jako **nazwę hosta**. Następnie kliknij **Open**, aby rozpocząć połączenie.

![](https://screensaver01.zap-hosting.com/index.php/s/wyfbo8dENbX3T9E/preview)

:::info
Logowanie SSH za pomocą hasła jest domyślnie wyłączone. Jeśli chcesz logować się hasłem, musisz najpierw aktywować tę opcję w zakładce **Dostęp & Bezpieczeństwo**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/N7ZL8MZfe55T7zR/preview)

:::info
Przy pierwszym połączeniu z serwerem pojawi się komunikat bezpieczeństwa od Putty, informujący, że klucz hosta nie jest jeszcze zapisany w rejestrze. Potwierdź go klikając **Yes**, jeśli nie chcesz widzieć tego komunikatu przy kolejnych połączeniach.
:::

 

Otworzy się konsola SSH, która poprosi o **nazwę użytkownika** i **hasło**. Nazwa użytkownika to "**root**". Hasło znajdziesz w panelu webowym w zakładce "**Dostęp & Bezpieczeństwo**" lub możesz je tam ustawić.

![](https://screensaver01.zap-hosting.com/index.php/s/X8ykHmkYFa826aM/preview)





## Administracja przez SSH

Aby efektywnie korzystać z klienta SSH, warto znać podstawowe komendy. Poniżej znajdziesz szybki przegląd najważniejszych poleceń i ich znaczenia:


### Zarządzanie kontami

| Komenda  |                Opis                |            Składnia            |
| :------: | :-------------------------------: | :----------------------------: |
| useradd  |          Tworzenie nowego użytkownika          | useradd [opcje] [nazwa] |
| usermod  |      Edycja istniejącego użytkownika       | usermod [opcje] [nazwa] |
| userdel  |        Usuwanie istniejącego użytkownika        | userdel [opcje] [nazwa] |
| passwd   | Zmiana hasła istniejącego użytkownika |      passwd [opcje]       |



### Zarządzanie systemem

| Komenda |                         Opis                         | Składnia                                       |
| :-----: | :--------------------------------------------------: | ---------------------------------------------- |
|   top   | Przegląd obciążenia, procesów i innych informacji (jak Menedżer zadań w Windows)  | top                                            |
|   df    |            Wyświetlanie wykorzystania dysków (partycji)            | df -h                                          |
|   du    |          Wyświetlanie zużycia miejsca na dysku (katalog)           | du -sh *                                       |
|  free   | Wykorzystanie pamięci systemowej, podział na RAM i SWAP | free                                           |
|  kill   |  Zakończenie procesu o podanym ID (PID)   | kill [ID]                                      |
| killall |        Zakończenie wszystkich procesów o podanej nazwie        | killall [nazwa]                                |
|   mv    |       Przenoszenie plików lub katalogów w inne miejsce        | mv ścieżka_źródłowa ścieżka_docelowa          |
|  mkdir  |                    Tworzenie nowego katalogu                    | mkdir nazwa_katalogu                           |
| service |    Uruchamianie, zatrzymywanie, restartowanie usług oraz sprawdzanie statusu     | service nazwa_usługi start/stop/restart/status |
| reboot  |                      Restart systemu                        | reboot                                         |



### Zarządzanie plikami

| Komenda | Opis | Składnia
| ------- | ------------------------------------------ | ---------------------------------------- |
| ls | Wyświetl pliki i foldery w katalogu | ls |
| cd | zmiana katalogu | cd [OPCJA] KATALOG |
| cp | Kopiowanie plików lub katalogów | cp [OPCJE] ŹRÓDŁO CEL |
| mv | przenoszenie pliku lub katalogu | mv [OPCJA] ŹRÓDŁO CEL |
| mkdir | Tworzenie nowego katalogu | mkdir [OPCJA] NAZWA_KATALOGU |
| rmdir | Usuwanie istniejącego katalogu | rmdir [OPCJA] KATALOG |
| find | przeszukiwanie systemu plików | find [OPCJE] [KATALOG] [DZIAŁANIA] |
| grep | Wyszukiwanie w plikach tekstowych | grep [OPCJE] WZÓR_WYSZUKIWANIA [PLIK(I)] |



### Zarządzanie siecią

| Komenda | Opis | Składnia
| -------- | ------------------------------------------------- | ----------------------------------------- |
| ip | Zapytania i konfiguracja interfejsów sieciowych | ip [OPCJE] OBIEKT [KOMENDA [ARGUMENTY]] |
| netstat | Zapytania statusu interfejsów sieciowych | netstat [OPCJE] |
| nslookup | Zapytania informacji DNS | nslookup |
| ping | Sprawdzanie połączenia sieciowego | ping [OPCJE] CEL |


<InlineVoucher />