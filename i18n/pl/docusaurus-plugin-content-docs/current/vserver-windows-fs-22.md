---
id: vserver-windows-fs-22
title: "VPS: Farming Simulator 2022 Dedicated Server Windows Setup"
description: "Dowiedz się, jak zainstalować Farming Simulator Dedicated Server 2022 na swoim Windows VPS, aby cieszyć się płynną rozgrywką multiplayer → Sprawdź teraz"
sidebar_label: Farming Simulator 2022
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz Windows VPS i chcesz zainstalować usługę Farming Simulator Dedicated Server 2022? Trafiłeś idealnie. W tym poradniku krok po kroku wyjaśnimy, jak zainstalować tę usługę na Twoim serwerze.  
<InlineVoucher />

## Przygotowanie
Potrzebny jest serwer oparty na Windows Server 2016/2019 z co najmniej 4x 2.4 GHz CPU (AMD/Intel) oraz minimum 2GB pamięci RAM (DDR3/4) i 6GB wolnego miejsca na dysku (SSD lub lepszy, zalecany). Serwer musi działać na architekturze 64-bitowej.  
Dodatkowo wymagana jest własna licencja gry (nie wersja Steam) oraz publiczny adres IPv4. GPU lub karta dźwiękowa nie są potrzebne do Dedicated Servera.  
W zależności od tego, jak bardzo serwer dedykowany jest zmodyfikowany, rozszerzony o mody lub DLC, może być potrzebne więcej zasobów.

## Krok 1 Zakup licencji cyfrowej

Wymagana jest cyfrowa wersja Farming Simulator 2022, nie może to być wersja Steam.  
Cyfrową wersję można kupić na [stronie Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Po zakupie wersji cyfrowej, Farming Simulator można pobrać online, korzystając z linku w mailu od Giants, który otrzymasz: [Link](https://eshop.giants-software.com/downloads.php).  
:::info
Ważne: W mailu znajdziesz GameKey, który jest potrzebny do pobrania oraz późniejszej aktywacji instalacji.  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/EH9ysn2jHaQXrtf/preview)

## Krok 2 Pobierz Farming Simulator bezpośrednio na swój Windows serwer

Połącz się przez [Initial Access (RDP)](vserver-windows-userdp.md) ze swoim Windows serwerem. Po połączeniu otwórz przeglądarkę i ponownie przejdź do [linku](https://eshop.giants-software.com/downloads.php) z maila. Wprowadź swój GameKey i wybierz pobieranie dla Windows 8/10.  

![](https://screensaver01.zap-hosting.com/index.php/s/JwMzAXbMx64CybQ/preview)

Plik zostanie pobrany i powinien znajdować się w katalogu pobierania (lokalizacja może się różnić).

![](https://screensaver01.zap-hosting.com/index.php/s/74LiBCfn2w6BwLJ/preview)

Kliknij dwukrotnie plik, aby go otworzyć i uruchomić Setup.exe.  
Następnie przeczytaj regulamin i potwierdź go. Instalację można przeprowadzić jako Standard lub Custom, zwykle wystarczy Standard.  
Na koniec kliknij „install” i Farming Simulator 2022 zostanie zainstalowany – to może potrwać kilka minut.

![](https://screensaver01.zap-hosting.com/index.php/s/8SrHwEjgirmKTJJ/preview)

Po zakończeniu instalacji pojawi się komunikat, który potwierdź klikając „Finish”.

![](https://screensaver01.zap-hosting.com/index.php/s/KYMX8SeMgxWmYdt/preview)

Podstawowa instalacja jest teraz zakończona.

## Krok 3 Aktywacja gry i konfiguracja serwera dedykowanego

Teraz uruchom Farming Simulator. Powinien być skrót na pulpicie, jeśli nie, możesz go uruchomić przez menu Windows.  
Błędy dotyczące braku GPU lub podobne możesz zignorować lub zamknąć klikając Nie/Anuluj. Farming Simulator musi być uruchomiony tylko po to, by wprowadzić klucz.

![](https://screensaver01.zap-hosting.com/index.php/s/iMTyYAGknFwDA3H/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/spnct8XYniz3Nf5/preview)

Teraz musisz ustawić lub odczytać login i hasło w konfiguracji Dedicated Servera, aby móc zalogować się do panelu webowego serwera dedykowanego.  
Konfiguracja znajduje się w standardowej instalacji pod ścieżką:  
`C:\Program Files (x86)\Farming Simulator 2022` w pliku o nazwie `"dedicatedServer.xml"`.  
Dane logowania możesz dowolnie dostosować.

![](https://screensaver01.zap-hosting.com/index.php/s/kK7nxEtqxgxjLFG/preview)

## Krok 4 Uruchom Farming Simulator 2022 Dedicated Server

Aby uruchomić serwer dedykowany, musisz wykonać plik `"dedicatedServer.exe"` w tym samym katalogu, gdzie znajduje się `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/qagHezKmK2tx2kj/preview)

Następnie możesz otworzyć panel webowy pod adresem `https://ADRES-IP-SERWERA:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/E8b34yHDPDbr9YP/preview)

Logowanie odbywa się za pomocą wcześniej ustawionych/odczytanych danych z `"dedicatedServer.xml"`.  
Dalsza konfiguracja w panelu webowym jest intuicyjna i możesz ją zrobić kilkoma kliknięciami, według własnych preferencji.

## Krok 5 Odblokuj porty w zaporze sieciowej

Serwer musi być oczywiście publicznie dostępny, żeby grać ze znajomymi. W tym celu porty serwera muszą być odblokowane w zaporze Windows. Porty 10823 i 8080 muszą być otwarte dla protokołu TCP.  
10823 to port serwera gier, a 8080 to port webowy panelu – ten drugi odblokuj tylko jeśli chcesz mieć dostęp do panelu webowego, bo administracja może też odbywać się lokalnie na Windows serwerze przez RDP.  
Jak odblokować porty w Windows: [Port Forwarding (Firewall)](vserver-windows-port.md).

Po odblokowaniu portów i uruchomieniu serwera, będzie on publicznie dostępny.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Farming Simulator 2022 na swoim VPS! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />