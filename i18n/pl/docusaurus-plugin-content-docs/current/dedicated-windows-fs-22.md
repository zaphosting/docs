---
id: dedicated-windows-fs-22
title: "Serwer dedykowany: Farming Simulator 2022 – konfiguracja serwera dedykowanego na Windows"
description: "Dowiedz się, jak zainstalować serwer dedykowany Farming Simulator 2022 na swoim VPS lub serwerze dedykowanym z Windows → Sprawdź teraz"
sidebar_label: Farming Simulator 2022
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz VPS lub serwer dedykowany z Windows i chcesz zainstalować na nim serwer dedykowany Farming Simulator 2022? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze.

<InlineVoucher />

## Przygotowanie
Potrzebny jest serwer z Windows Server 2016/2019, minimum 4x 2.4 GHz CPU (AMD/Intel), co najmniej 2GB pamięci RAM (DDR3/4) oraz 6GB wolnego miejsca na dysku (SSD lub lepszy, zalecany). Serwer musi działać na architekturze 64-bitowej.  
Dodatkowo wymagana jest własna licencja gry (nie wersja Steam) oraz publiczny adres IPv4. GPU lub karta dźwiękowa nie są potrzebne do serwera dedykowanego.  
W zależności od tego, jak bardzo serwer dedykowany jest zmodyfikowany, rozszerzony o mody lub DLC, może być potrzebnych więcej zasobów. 

## Krok 1 Zakup licencji cyfrowej

Wymagana jest cyfrowa wersja Farming Simulator 2022, nie może to być wersja Steam.  
Cyfrową wersję można kupić na [stronie Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Po zakupie wersji cyfrowej, Farming Simulator można pobrać online, korzystając z linku w mailu od Giants: [Link](https://eshop.giants-software.com/downloads.php).  
:::info
Ważne: W mailu znajdziesz klucz gry (GameKey), który jest potrzebny do pobrania oraz późniejszej aktywacji instalacji. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/MXkbf8pNSYJAmGt/preview)

## Krok 2 Pobierz Farming Simulator bezpośrednio na swój serwer Windows

Połącz się przez [Initial Access (RDP)](vserver-windows-userdp.md) ze swoim serwerem Windows. Po połączeniu otwórz przeglądarkę i ponownie przejdź do [linku](https://eshop.giants-software.com/downloads.php) z maila. Wprowadź swój GameKey i wybierz pobieranie dla Windows 8/10.

![](https://screensaver01.zap-hosting.com/index.php/s/wDa758WS8aKDBwE/preview)

Plik zostanie pobrany i powinien znajdować się w katalogu pobierania (lokalizacja może się różnić).

![](https://screensaver01.zap-hosting.com/index.php/s/3KZ9wstGSz6JTke/preview)

Kliknij dwukrotnie plik, aby go otworzyć i uruchomić Setup.exe.  
Następnie przeczytaj regulamin (TOS) i potwierdź go. Instalację możesz przeprowadzić w trybie Standard lub Custom, zwykle Standard wystarczy.  
Na koniec kliknij „install” i Farming Simulator 2022 zostanie zainstalowany – to może potrwać kilka minut.

![](https://screensaver01.zap-hosting.com/index.php/s/A4daMGF35a6aCj4/preview)

Po zakończeniu instalacji pojawi się komunikat, który zatwierdź przyciskiem „Finish”.

![](https://screensaver01.zap-hosting.com/index.php/s/EWcaeSD8HacP8je/preview)

Podstawowa instalacja jest teraz zakończona.

## Krok 3 Aktywacja gry i konfiguracja serwera dedykowanego

Teraz uruchom Farming Simulator. Powinien być skrót na pulpicie, jeśli nie, możesz go uruchomić przez menu Windows.  
Błędy dotyczące braku GPU lub podobne można zignorować lub zamknąć przyciskiem Nie/Anuluj. Farming Simulator musi być uruchomiony tylko po to, by wprowadzić klucz.

![](https://screensaver01.zap-hosting.com/index.php/s/5FcRkkxajWFN6D5/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/FXzNNeaBzAP794w/preview)

Teraz trzeba ustawić lub odczytać login i hasło w konfiguracji serwera dedykowanego, aby możliwe było logowanie do panelu webowego serwera.  
Konfiguracja znajduje się w standardowej instalacji pod ścieżką:  
`C:\Program Files (x86)\Farming Simulator 2022` w pliku o nazwie `"dedicatedServer.xml"`.  
Dane logowania możesz dowolnie zmienić.

![](https://screensaver01.zap-hosting.com/index.php/s/LHkeCNSnEtE5Rd8/preview)

## Krok 4 Uruchom serwer dedykowany Farming Simulator 2022

Aby uruchomić serwer dedykowany, musisz wykonać plik `"dedicatedServer.exe"` w tym samym katalogu, gdzie znajduje się `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/43ZYGoNiE7npxDz/preview)

Następnie panel webowy otworzysz pod adresem `https://ADRES-IP-SERWERA:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/RbfZFQZkRSX4okr/preview)

Logowanie odbywa się danymi ustawionymi/odczytanymi wcześniej z `"dedicatedServer.xml"`.  
Dalsza konfiguracja w panelu webowym jest intuicyjna i możesz ją zrobić kilkoma kliknięciami, według własnych preferencji.

## Krok 5 Odblokuj porty w zaporze sieciowej

Serwer musi być oczywiście publicznie dostępny, żeby grać ze znajomymi. W tym celu porty serwera muszą być odblokowane w zaporze Windows.  
Porty 10823 i 8080 muszą być otwarte dla protokołu TCP. 10823 to port serwera gier, a 8080 to port webowy panelu – ten drugi odblokuj tylko jeśli chcesz mieć dostęp do panelu webowego, bo administrować można też lokalnie na serwerze przez RDP.  
Jak odblokować porty w Windows: [Port Forwarding (Firewall)](vserver-windows-port.md).

Po odblokowaniu portów i uruchomieniu serwera, będzie on publicznie dostępny.

<InlineVoucher />