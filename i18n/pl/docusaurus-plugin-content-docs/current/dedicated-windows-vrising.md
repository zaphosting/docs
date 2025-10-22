---
id: dedicated-windows-vrising
title: "Serwer dedykowany: Konfiguracja dedykowanego serwera V-Rising na Windows"
description: "Dowiedz się, jak skonfigurować dedykowany serwer V Rising na Windows dla optymalnej wydajności i zarządzania serwerem → Sprawdź teraz"
sidebar_label: V-Rising
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/yCRYqJAjTTp4YFf/preview" title="Jak skonfigurować dedykowany serwer V RISING na Windows!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu wolisz chłonąć info w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Podstawowe informacje: 
Wymagany jest serwer oparty na Windows Server 2016/2019 z co najmniej 4x 2.4 GHz CPU (AMD/Intel) oraz minimum 4GB pamięci RAM (DDR3/4) i 6GB wolnego miejsca na dysku (preferowany dysk SSD lub lepszy). Serwer musi działać na architekturze 64-bitowej.

## Krok 1 Utwórz folder dla V-Rising

Najpierw musisz połączyć się z serwerem za pomocą [Początkowego dostępu (RDP)](vserver-windows-userdp.md). Po połączeniu utwórz nowy folder na serwerze, w którym będą instalowane pliki V-Rising.  
W tym przykładzie stworzymy nowy folder na Pulpicie.  
Zrób to klikając prawym przyciskiem myszy, a następnie wybierz "Nowy -> Folder".

![](https://screensaver01.zap-hosting.com/index.php/s/SzB3TgsSkHRAaAB/preview)

Możesz nazwać go jak chcesz. W naszym przykładzie nazwaliśmy go "VRising".

## Krok 2 Pobierz SteamCMD na swój serwer Windows

Otwórz przeglądarkę i przejdź do [tego linku](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). To pobierze SteamCMD dla Windows na Twój serwer.

![](https://screensaver01.zap-hosting.com/index.php/s/oHSse2fToxxTpCt/preview)

Plik zostanie pobrany i powinien znajdować się w katalogu pobierania (lokalizacja może się różnić).

![](https://screensaver01.zap-hosting.com/index.php/s/35r8Dm49xcdwfq4/preview)

Dla przejrzystości kopiujemy plik steamcmd.zip do folderu VRising, który wcześniej utworzyliśmy na pulpicie.  
Kliknij plik i naciśnij "CTRL+C".  
Następnie otwórz folder VRising na pulpicie i naciśnij "CTRL+V".  
Teraz plik powinien być widoczny w folderze VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/kKGt3gy2yDQXSLx/preview)

Kliknij prawym przyciskiem myszy na plik steamcmd.zip i wybierz "Wypakuj wszystko". Potwierdź komunikat klikając "Wypakuj".

![](https://screensaver01.zap-hosting.com/index.php/s/SHsNeRy4RbEenDX/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/y5ef3ncPgYMTzFw/preview)

Po wypakowaniu kliknij dwukrotnie plik steamcmd.  
Otworzy się nowe okno, które zainstaluje pliki steamcmd.

![](https://screensaver01.zap-hosting.com/index.php/s/TC2KAbWaCHEeZiF/preview)

## Krok 3 Pobierz pliki V Rising

Po zainstalowaniu plików steamcmd zobaczysz takie okno:

![](https://screensaver01.zap-hosting.com/index.php/s/GAb4TgCNbpiW2F2/preview)

Teraz określ miejsce, gdzie mają zostać pobrane pliki.  
Zrobisz to poleceniem "force_install_dir".  
Pełne polecenie w naszym przykładzie to:  
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/DeNFAWGLLnKq7pr/preview)

Następnie zaloguj się jako anonimowy użytkownik, wpisując "login anonymous".

![](https://screensaver01.zap-hosting.com/index.php/s/pq74iCW6E2k8Sid/preview)

Gdy to zrobisz, możesz w końcu pobrać pliki.  
Użyj polecenia:  
app_update 1829350 validate

Pliki zaczną się pobierać, co może potrwać kilka minut.

![](https://screensaver01.zap-hosting.com/index.php/s/6XX8wtekd89PJec/preview)

Po zakończeniu procesu zobaczysz wszystkie pliki na serwerze w folderze VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/y9Gx9ANEpgbpESy/preview)

## Krok 4 Uruchom i skonfiguruj serwer V Rising

Możesz edytować plik start_server_example.bat, aby wprowadzić kilka zmian.  
Kliknij na plik prawym przyciskiem i wybierz "Edytuj".  
Możesz zmienić nazwę serwera oraz ścieżkę, gdzie mają być zapisywane dane.

![](https://screensaver01.zap-hosting.com/index.php/s/zpEw92o7eQG9P2a/preview)

Więcej zmian możesz zrobić w plikach konfiguracyjnych, które znajdziesz w katalogu VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/9TtQm6Yp8g3y5HH/preview)

W pliku ServerHostSettings.json możesz wprowadzić ogólne zmiany, takie jak porty, opis serwera, interwał zapisu czy hasło do serwera gier.  
My zmieniliśmy nazwę serwera na "ZAP-Hosting Test Server".

Aby uruchomić serwer, kliknij dwukrotnie plik start_server_example.bat.

![](https://screensaver01.zap-hosting.com/index.php/s/gzs85C4HRy9MPTy/preview)

Proces uruchamiania może chwilę potrwać.  
Jeśli porty zostały poprawnie przekierowane, serwer pojawi się na liście serwerów.

![](https://screensaver01.zap-hosting.com/index.php/s/S9mM8KNzsFARmQW/preview)

## Krok 5 Odblokuj porty w zaporze sieciowej

Serwer musi być oczywiście publicznie dostępny, żeby grać ze znajomymi.  
W tym celu porty serwera muszą być odblokowane w zaporze Windows.  
Porty 9876 i 9877 muszą być otwarte dla protokołów TCP ORAZ UDP.  
Port 9876 to port serwera gier, a 9877 to port zapytań (Query Port).  
Jak odblokować porty w Windows: [Przekierowanie portów (zapora)](vserver-windows-port.md).

Po odblokowaniu portów serwer będzie publicznie dostępny, jeśli został uruchomiony.

<InlineVoucher />