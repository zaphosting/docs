---
id: dedicated-windows-fs-19
title: "Serwer dedykowany: Farming Simulator 2019 Serwer dedykowany Windows - konfiguracja"
description: "Dowiedz się, jak szybko i sprawnie skonfigurować serwer dedykowany Farming Simulator 2019 na swoim Windows VPS lub serwerze dedykowanym → Sprawdź teraz"
sidebar_label: Farming Simulator 2019
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz Windows VPS lub serwer dedykowany i chcesz zainstalować na nim serwer dedykowany Farming Simulator 2019? Trafiłeś idealnie. W tym poradniku wyjaśnimy krok po kroku, jak zainstalować tę usługę na Twoim serwerze.

## Przygotowanie

Potrzebny jest serwer z Windows Server 2016/2019, minimum 4x 2,4 GHz CPU (AMD/Intel) oraz co najmniej 2GB pamięci RAM (DDR3/4) i 6GB wolnego miejsca na dysku (SSD lub lepszy, zalecany). Serwer musi działać na architekturze 64-bitowej.  
Dodatkowo wymagana jest własna licencja gry (nie wersja Steam) oraz publiczny adres IPv4. GPU lub karta dźwiękowa nie są potrzebne do serwera dedykowanego.  
W zależności od tego, jak bardzo serwer dedykowany jest zmodyfikowany, rozszerzony o mody lub DLC, może być potrzebne więcej zasobów.

## Krok 1 Zakup licencji cyfrowej

Wymagana jest cyfrowa wersja Farming Simulator 2019, nie może to być wersja Steam.  
Cyfrową wersję można kupić na [stronie Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Po zakupie wersji cyfrowej, Farming Simulator można pobrać online, korzystając z linku w mailu od Giants: [Link](https://eshop.giants-software.com/downloads.php).  
:::info
Ważne: W mailu znajdziesz klucz gry (GameKey), który jest potrzebny do pobrania oraz późniejszej aktywacji instalacji. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## Krok 2 Pobierz Farming Simulator bezpośrednio na swój serwer Windows

Połącz się z serwerem Windows przez [Initial Access (RDP)](vserver-windows-userdp.md). Po połączeniu otwórz przeglądarkę i ponownie przejdź do [linku](https://eshop.giants-software.com/downloads.php) z maila. Wprowadź swój GameKey i wybierz pobieranie dla Windows 8/10.

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

Plik zostanie pobrany i powinien znajdować się w katalogu pobierania (lokalizacja może się różnić).

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

Kliknij dwukrotnie plik, aby go otworzyć i uruchomić Setup.exe.  
Następnie przeczytaj regulamin (TOS) i potwierdź go. Instalację można przeprowadzić w trybie Standard lub Custom, zwykle wystarczy Standard.  
Na koniec kliknij „install” i Farming Simulator 2019 zostanie zainstalowany – to może potrwać kilka minut.

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

Po zakończeniu instalacji pojawi się komunikat, który potwierdź klikając „Finish”.

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

Podstawowa instalacja jest teraz zakończona.

## Krok 3 Aktywacja gry i konfiguracja serwera dedykowanego

Teraz uruchom Farming Simulator. Powinien być skrót na pulpicie, jeśli nie, możesz go uruchomić przez menu Windows.  
Błędy dotyczące braku GPU lub podobne można zignorować lub zamknąć klikając Nie/Anuluj. Farming Simulator musi być uruchomiony tylko po to, by wpisać klucz.

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

Po rozpoznaniu klucza pojawi się potwierdzenie.

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

Teraz trzeba ustawić lub zmienić login i hasło w konfiguracji serwera dedykowanego, aby możliwe było logowanie do panelu webowego serwera dedykowanego.  
Konfiguracja znajduje się w standardowej instalacji pod ścieżką:  
`C:\Program Files (x86)\Farming Simulator 2019` w pliku `"dedicatedServer.xml"`.  
Dane logowania można dowolnie dostosować.

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## Krok 4 Uruchom serwer dedykowany Farming Simulator 2019

Aby uruchomić serwer dedykowany, należy wykonać plik `"dedicatedServer.exe"` w tym samym katalogu, gdzie znajduje się `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

Następnie panel webowy można otworzyć pod adresem `https://SERVER-IP:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

Logowanie odbywa się za pomocą wcześniej ustawionych/odczytanych danych z `"dedicatedServer.xml"`.  
Dalsza konfiguracja w panelu webowym jest intuicyjna i można ją wykonać kilkoma kliknięciami, według własnych preferencji.

## Krok 5 Odblokuj porty w zaporze sieciowej

Serwer powinien być oczywiście publicznie dostępny, aby grać ze znajomymi. W tym celu porty serwera muszą być odblokowane w zaporze Windows.  
Porty 10823 i 8080 muszą być otwarte dla protokołu TCP. 10823 to port serwera gier, a 8080 to port webowy panelu webowego – ten ostatni odblokuj tylko jeśli potrzebujesz panelu webowego, bo administracja może też odbywać się lokalnie na serwerze Windows przez RDP.  
Jak odblokować porty w Windows: [Przekierowanie portów (Firewall)](vserver-windows-port.md).

Po odblokowaniu portów i uruchomieniu serwera, będzie on publicznie dostępny.