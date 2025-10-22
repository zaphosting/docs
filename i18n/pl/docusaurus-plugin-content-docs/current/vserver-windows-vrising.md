---
id: vserver-windows-vrising
title: "VPS: Dedykowany serwer Windows do V-Rising – konfiguracja"
description: "Dowiedz się, jak skonfigurować dedykowany serwer Windows do V-Rising, aby uzyskać optymalną wydajność w grach i bezproblemowy hosting → Sprawdź teraz"
sidebar_label: V-Rising
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qnEwRNpMmo3JzQq/preview" title="Jak skonfigurować dedykowany serwer Windows do V RISING!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć info w najbardziej angażujący sposób!"/>
<InlineVoucher />

## Podstawowe informacje: 
Potrzebujesz serwera opartego na Windows Server 2016/2019 z co najmniej 4x 2,4 GHz CPU (AMD/Intel) oraz minimum 4GB pamięci RAM (DDR3/4) i 6GB wolnego miejsca na dysku (SSD lub lepszy, zalecany). Serwer musi działać na architekturze 64-bitowej.

## Krok 1 Stwórz folder dla V-Rising

Najpierw połącz się z serwerem przez [Initial Access (RDP)](vserver-windows-userdp.md). Po połączeniu utwórz nowy folder na serwerze, w którym zainstalujesz pliki V-Rising.  
W tym przykładzie stworzymy nowy folder na Pulpicie.  
Zrób to klikając prawym przyciskiem myszy, a następnie wybierz „Nowy -> Folder”.

![](https://screensaver01.zap-hosting.com/index.php/s/wgf8ckdTgiQ9wAq/preview)

Nazwij go jak chcesz. My nazwiemy go „VRising”.

## Krok 2 Pobierz SteamCMD na swój serwer Windows

Otwórz przeglądarkę i przejdź pod [ten link](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Pobierze to SteamCMD dla Windows na Twój serwer.

![](https://screensaver01.zap-hosting.com/index.php/s/7HE5smMXq6mEetw/preview)

Plik zostanie pobrany i powinien znajdować się w katalogu pobierania (lokalizacja może się różnić).

![](https://screensaver01.zap-hosting.com/index.php/s/eEsyPe9J8KWGRMs/preview)

Dla przejrzystości skopiujemy plik steamcmd.zip do folderu VRising, który stworzyliśmy wcześniej na pulpicie.  
Kliknij plik i naciśnij „CTRL+C”.  
Następnie otwórz folder VRising na pulpicie i wciśnij „CTRL+V”.  
Teraz plik jest w folderze VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/rNCZB7NDYkqDxrm/preview)

Kliknij prawym przyciskiem na steamcmd.zip i wybierz „Wypakuj wszystko”. Potwierdź komunikat klikając „Wypakuj”.

![](https://screensaver01.zap-hosting.com/index.php/s/RSQReHkc3SYbzNS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yaw87p2bcmFe9z6/preview)

Po wypakowaniu kliknij dwukrotnie plik steamcmd.  
Otworzy się nowe okno, które zainstaluje pliki steamcmd.

![](https://screensaver01.zap-hosting.com/index.php/s/R7Xm4tSLfEBqboD/preview)

## Krok 3 Pobierz pliki V Rising

Po instalacji plików steamcmd zobaczysz takie okno:

![](https://screensaver01.zap-hosting.com/index.php/s/DjaZjaqM8tFZzCj/preview)

Teraz określ miejsce, gdzie mają zostać pobrane pliki.  
Zrobisz to komendą „force_install_dir”.  
W naszym przykładzie to:  
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/EFdLWdJ5Ypym3Ym/preview)

Następnie zaloguj się jako anonimowy użytkownik, wpisując:  
login anonymous

![](https://screensaver01.zap-hosting.com/index.php/s/SN8qqRPezLDEF3Q/preview)

Gdy to zrobisz, możesz w końcu pobrać pliki.  
Użyj komendy:  
app_update 1829350 validate

Pliki zaczną się pobierać, co może potrwać kilka minut.

![](https://screensaver01.zap-hosting.com/index.php/s/S5cwykrPq6bYyrG/preview)

Po zakończeniu procesu zobaczysz wszystkie pliki w folderze VRising na serwerze.

![](https://screensaver01.zap-hosting.com/index.php/s/8PwswWgB8BxwECL/preview)

## Krok 4 Uruchom i skonfiguruj serwer V Rising

Możesz edytować plik start_server_example.bat, aby wprowadzić kilka zmian.  
Kliknij na niego prawym przyciskiem i wybierz „Edytuj”.  
Możesz zmienić nazwę serwera i ścieżkę, gdzie mają być zapisywane dane.

![](https://screensaver01.zap-hosting.com/index.php/s/PFDkyayBtSBoEFa/preview)

Więcej zmian możesz zrobić w plikach konfiguracyjnych, które znajdziesz w katalogu VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/jQWy34tbPTEtcc9/preview)

W pliku ServerHostSettings.json możesz zmienić ustawienia ogólne, takie jak porty, opis serwera, interwał zapisu czy hasło do serwera gier.  
My zmieniliśmy nazwę serwera na „ZAP-Hosting Test Server”.

Aby uruchomić serwer, kliknij dwukrotnie plik start_server_example.bat.

![](https://screensaver01.zap-hosting.com/index.php/s/nSqbQQb3pHXnWmZ/preview)

Proces startu może chwilę potrwać.  
Jeśli porty zostały poprawnie przekierowane, serwer pojawi się na liście serwerów.

![](https://screensaver01.zap-hosting.com/index.php/s/TajWHXtRCLEeRKf/preview)

## Krok 5 Odblokuj porty w zaporze sieciowej

Serwer musi być publicznie dostępny, żeby grać ze znajomymi. Dlatego porty serwera muszą być odblokowane w zaporze Windows.  
Porty 9876 i 9877 muszą być otwarte dla protokołów TCP i UDP.  
Port 9876 to port serwera gier, a 9877 to port Query.  
Jak odblokować porty w Windows, sprawdź w [Port Forwarding (Firewall)](vserver-windows-port.md).

Po odblokowaniu portów i uruchomieniu serwera, będzie on publicznie dostępny.

## Podsumowanie

Gratulacje, właśnie zainstalowałeś i skonfigurowałeś V-Rising na swoim VPS! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />