---
id: vserver-iso-windows
title: "VPS: Instalacja Windows X/Windows Server 20XX"
description: "Dowiedz się, jak dostosować instalacje Windows za pomocą spersonalizowanych ISO, aby mieć pełną kontrolę nad konfiguracją i sterownikami → Sprawdź teraz"
sidebar_label: "Instalacja Windows X/WS 20XX"
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Wprowadzenie
Instalacja niestandardowego ISO daje Ci pełną kontrolę nad konfiguracją środowisk Windows, takich jak Windows 10 czy Windows Server 2016/2019/2022/2025. W przeciwieństwie do naszych gotowych standardowych obrazów systemu operacyjnego, ta metoda pozwala użyć nośnika instalacyjnego dopasowanego do Twoich indywidualnych potrzeb, np. z dodatkowymi sterownikami, predefiniowanymi ustawieniami lub dodatkowymi pakietami oprogramowania.

<InlineVoucher />



## Przygotowanie

Do instalacji i konfiguracji systemu operacyjnego najpierw ważne jest zamontowanie odpowiedniego ISO systemu. Jeśli jeszcze nie wiesz, jak zamontować plik ISO, najlepiej zajrzyj do naszego [poradnika Own ISO](vserver-iso.md).



## Instalacja

Na początku instalacji systemu Windows przejdziesz przez podstawowe kroki konfiguracji. Najpierw wybierz preferowany **język**, potem ustaw **układ klawiatury**, a następnie wybierz **metodę instalacji**. Dla celów demonstracyjnych tutaj używamy opcji **Poprzednia wersja instalatora**. W kolejnym kroku wybierasz edycję systemu, a w tym przykładzie jest to **Windows Server 2025 Datacenter Desktop Experience**, który oferuje pełny interfejs graficzny.

![img](https://screensaver01.zap-hosting.com/index.php/s/7K227dRoaz5Y4py/download)

Na tym etapie instalacji zauważysz, że nie wyświetlają się żadne partycje. To nie błąd, lecz fakt, że Windows nie wykrywa wirtualnych dysków bez dodatkowych sterowników. Niezbędne są sterowniki VirtIO, które odpowiadają za rozpoznanie dysków i ich prawidłową obsługę. Sterowniki te trzeba teraz zamontować i zainstalować, po czym dyski pojawią się i będzie można kontynuować partycjonowanie oraz instalację systemu.

### Sterowniki VirtIO

Przed instalacją systemu operacyjnego należy zainstalować sterowniki VirtIO. To sterowniki Windows zoptymalizowane pod hyperwizory oparte na KVM, które zapewniają maksymalną wydajność i kompatybilność maszyn wirtualnych Windows.

W tym celu tymczasowo przełącz nośnik instalacyjny na `virtio-win.iso`. Wybierz plik ISO VirtIO z dostępnych ISO i kliknij **Zamontuj**. Sterowniki będą wtedy dostępne podczas instalacji, aby można je było zainstalować przed kontynuacją instalacji systemu.

![img](https://screensaver01.zap-hosting.com/index.php/s/wtZFngf9FofiQ88/download)

:::warning NIE URUCHAMIAJ SERWERA PONOWNIE
Podczas **tymczasowego** przełączania ISO na VirtIO wystarczy wybrać tylko ISO. Nie należy **<u>restartować</u>** systemu, bo stracisz dotychczasowy postęp.

:::

Wymagane sterowniki są podzielone na trzy dedykowane foldery: **Balloon**, **NetKVM** i **vioscsi**. Każdy z nich zawiera inny typ sterownika niezbędnego do działania maszyny wirtualnej Windows na hyperwizorze KVM.

- **Balloon:** Sterownik zarządzający dynamicznym przydziałem pamięci RAM, pozwalający na zwiększanie lub zmniejszanie przydzielonej pamięci bez konieczności restartu.
- **NetKVM:** Sterownik zapewniający w pełni funkcjonalny i zoptymalizowany interfejs sieciowy, gwarantujący stabilne i szybkie połączenie sieciowe dla maszyny wirtualnej.
- **Vioscsi:** Specjalistyczny sterownik kontrolera SCSI, który zapewnia prawidłowe wykrywanie i szybki dostęp do wirtualnych dysków twardych. Poprawia wydajność I/O i gwarantuje, że Windows poprawnie rozpoznaje dyski wirtualne.

W każdym z tych folderów znajduje się podfolder odpowiadający architekturze systemu. Podczas instalacji wybierz podfolder dopasowany do systemu, który chcesz zainstalować. Zawsze używaj architektury amd64. <u>Powtórz tę procedurę dla wszystkich trzech folderów sterowników, jak pokazano na zrzucie ekranu.</u>

![img](https://screensaver01.zap-hosting.com/index.php/s/fisTox5ziW4Y3tt/download)

Po pomyślnym zainstalowaniu sterowników VirtIO możesz kontynuować właściwą instalację systemu operacyjnego. Ponownie przełącz ISO na oryginalny nośnik instalacyjny systemu i otwórz konsolę VNC, aby kontynuować instalację.

![img](https://screensaver01.zap-hosting.com/index.php/s/QECit2kf66WQF9R/download)



### Tworzenie i wybór partycji

Kolejnym krokiem jest konfiguracja partycjonowania. Najpierw usuń wszystkie nieznane partycje. Następnie wybierz nowo dostępną nieprzydzieloną partycję jako miejsce instalacji systemu.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRijdykS6CxyrbA/download)

Kliknij **Dalej**, aby kontynuować, a reszta instalacji przebiegnie automatycznie. Na końcu zostaniesz poproszony o ustawienie danych logowania dla konta Administratora.

![img](https://screensaver01.zap-hosting.com/index.php/s/bPzrdmbgYeLGrjJ/download)



## Konfiguracja

Po zakończeniu instalacji systemu operacyjnego konieczne są jeszcze ostatnie kroki konfiguracyjne, aby system działał bezpiecznie i stabilnie. Należy włączyć i skonfigurować dostęp przez **Pulpit zdalny (RDP)**, ustawić reguły **zapory sieciowej** zapewniające ochronę i funkcjonalność oraz skonfigurować **ustawienia sieciowe**, by serwer poprawnie działał w Twojej sieci.

Dzięki tym ustawieniom zapewnisz dostęp zdalny, poprawne działanie monitoringu i testów stanu oraz stabilną i przewidywalną pracę serwera w Twojej infrastrukturze.



### Konfiguracja RDP

Aby włączyć Pulpit zdalny (RDP) w Windows, procedura jest podobna dla Windows 10 (systemy klienckie) oraz Windows Server 2016/2019/2022/2025. Otwórz **Panel sterowania** lub **Ustawienia**, przejdź do **System → Pulpit zdalny** (w wersjach klienckich) lub **Właściwości systemu → Zdalny** (w wersjach serwerowych) i włącz opcję **Zezwalaj na połączenia zdalne z tym komputerem**. W wersjach serwerowych opcja ta nazywa się **Włącz Pulpit zdalny**.

![img](https://screensaver01.zap-hosting.com/index.php/s/kcA3bWFHamWRwL8/download)



### Konfiguracja zapory sieciowej

Aby serwer był w pełni gotowy i testy stanu, takie jak ping, działały poprawnie, protokół **ICMP** musi być dozwolony w zaporze Windows. Bez tej reguły narzędzia monitorujące i testy sieciowe nie będą mogły dotrzeć do serwera, co spowoduje niepowodzenie kontroli stanu.

![img](https://screensaver01.zap-hosting.com/index.php/s/jyLqA5Ly3iXDPJ5/download)

Aby włączyć ICMP, otwórz **Zapora systemu Windows z zaawansowanymi zabezpieczeniami** i przejdź do reguł przychodzących. Utwórz nową regułę niestandardową, ustaw protokół na "Dowolny" i wybierz **ICMPv4**. Skonfiguruj regułę, aby dotyczyła wszystkich portów i wybierz profile (Domena, Prywatny, Publiczny), na których reguła ma działać. Najczęściej zaleca się włączenie jej dla wszystkich profili. Na koniec nadaj opisową nazwę, np. *Zezwól na przychodzący ICMP* i zakończ kreatora.

Od tego momentu serwer będzie akceptował żądania ICMP, co pozwoli na używanie polecenia `ping` i poprawne działanie systemów monitorujących.



### Konfiguracja sieci

Aby ręcznie skonfigurować ustawienia sieci w Windows, najpierw otwórz **Centrum sieci i udostępniania** przez Panel sterowania lub pasek zadań. Wybierz odpowiednią kartę sieciową (LAN lub Wi-Fi), kliknij ją prawym przyciskiem i otwórz **Właściwości**. Z listy elementów zaznacz **Protokół internetowy w wersji 4 (TCP/IPv4)** i kliknij **Właściwości**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nEGkdE79tDwLszr/download)

W oknie dialogowym zmień ustawienie z Uzyskaj adres IP automatycznie na Użyj następującego adresu IP. Teraz możesz wpisać **adres IP**, **maska podsieci** i **brama domyślna** dla swojego serwera. Poniżej przełącz ustawienia DNS na ręczne i wpisz `1.1.1.1` oraz `8.8.8.8` jako podstawowe i zapasowe serwery **DNS**. Potwierdź klikając **OK**, aby zastosować statyczną konfigurację sieci.



## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś swój system Windows. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂



<InlineVoucher />