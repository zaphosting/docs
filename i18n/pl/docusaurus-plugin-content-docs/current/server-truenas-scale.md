---
id: server-truenas-scale
title: "Konfiguracja TrueNAS SCALE na Serwerze - Zbuduj Własny System NAS"
description: "Dowiedz się, jak zainstalować TrueNAS SCALE na swoim serwerze dedykowanym do sieciowej pamięci masowej i udostępniania plików → Sprawdź teraz"
sidebar_label: Instalacja TrueNAS SCALE
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

TrueNAS SCALE to open-source’owa platforma do przechowywania danych, która pozwala zbudować system sieciowej pamięci masowej (NAS) na serwerze. W tym poradniku zainstalujesz TrueNAS SCALE na serwerze dedykowanym i skonfigurujesz podstawowe ustawienia, w tym pule dyskowe, konta użytkowników oraz udostępnianie plików przez SMB.

:::danger VPS Nieodpowiedni
Nasze produkty VPS nie nadają się, ponieważ mają tylko jeden wirtualny dysk. Możesz zainstalować TrueNAS SCALE na VPS, ale nie stworzysz pul dyskowych, bo cały dysk jest zajęty przez system operacyjny.

Do instalacji TrueNAS SCALE potrzebujesz [serwera dedykowanego](https://zap-hosting.com/en/dedicated-server-hosting/) z co najmniej dwoma dyskami.
 :::

<InlineVoucher />

## Przygotowanie

Przed rozpoczęciem instalacji upewnij się, że spełniasz minimalne wymagania sprzętowe:

| Sprzęt    | Minimum     | Rekomendacja ZAP-Hosting |
| --------- | ----------- | ------------------------ |
| CPU       | 2 rdzenie CPU | 8 rdzeni vCPU           |
| RAM       | 8 GB        | 16 GB                    |
| Miejsce na dysku | 16 GB na system | Zależnie od zastosowania |

<InlineServiceLink />

Wejdź na oficjalną [stronę TrueNAS](https://www.truenas.com/download-truenas-scale/) i pobierz najnowszą stabilną wersję. Możesz wgrać ISO na publicznie dostępny serwer (własny serwer WWW lub chmurę) albo trzymać plik lokalnie na komputerze do bezpośredniego montowania.

:::tip[Hosting ISO]
Jeśli planujesz montować ISO przez URL w konsoli zdalnej, upewnij się, że adres URL pliku ISO kończy się na `.iso` i jest publicznie dostępny bez uwierzytelniania.
:::

**Montowanie ISO**

Zaloguj się do swojego [panelu głównego ZAP-Hosting](https://zap-hosting.com/en/customer/) i przejdź do serwera dedykowanego na liście usług. Następnie otwórz stronę zarządzania serwerem i kliknij **Aktywuj iLO**, aby wejść do interfejsu zarządzania serwerem.

![img](https://screensaver01.zap-hosting.com/index.php/s/or8HJ8e3QeAJm6z/preview)

W interfejsie iLO znajdź opcję **Zintegrowana Konsola Zdalna**. Wybierz preferowany typ konsoli i uruchom ją. Otworzy się nowe okno z bezpośrednim dostępem do ekranu serwera.

W konsoli zdalnej kliknij ikonę **CD** u góry i wybierz **CD/DVD**. Wybierz **Scripted Media URL**, jeśli wgrałeś ISO online i wpisz jego bezpośredni URL. W przeciwnym razie wybierz **Lokalny plik .iso** i wskaż plik na komputerze. ISO zostanie zamontowane jako wirtualny napęd CD/DVD.

![img](https://screensaver01.zap-hosting.com/index.php/s/F98tgjsqq2S6nqp/preview)

:::tip Alternatywne Metody
Inne metody montowania ISO, w tym przez interfejs Virtual Media, znajdziesz w [poradniku Own ISO](dedicated-iso.md).
:::

Po zamontowaniu ISO użyj menu **Zasilanie** w konsoli, aby zrestartować serwer. Wybierz **Resetuj**, a serwer uruchomi się ponownie, bootując z ISO TrueNAS SCALE.

## Instalacja

Obserwuj konsolę podczas uruchamiania systemu. Pojawi się ekran instalacji TrueNAS SCALE, a instalator załaduje się automatycznie. Załadowanie środowiska instalacyjnego zajmuje kilka minut.

![img](https://screensaver01.zap-hosting.com/index.php/s/TJwMWFZeorwGryn/preview)

Instalator wyświetli **Wybierz nośnik docelowy** wraz z listą dostępnych dysków. Poruszaj się strzałkami i wybierz dysk, na którym chcesz zainstalować system. Wybierz najmniejszy dysk na instalację systemu (cały ten dysk zostanie przeznaczony na TrueNAS SCALE). Naciśnij **Spację**, aby zaznaczyć, a potem **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z5o7TFye6BPor7Q/preview)

Pojawi się ostrzeżenie, że instalacja **usunie wszystkie dane** na wybranym dysku. Przejdź do **Tak** strzałkami i potwierdź **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/LS2mJBQ2deawKFp/preview)

Następnie instalator zapyta o konfigurację hasła. **Opcja 1** ustawia hasło teraz, a **Opcja 2** pozwala skonfigurować je później przez interfejs webowy. Wybierzemy **Opcję 2: Konfiguracja przez Web UI** dla większej elastyczności. Zaznacz ją i naciśnij **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oPpMLCZ5nPePdLW/preview)

Instalator zapyta **"Zezwolić na boot EFI?"**. Wybierz **Tak** (zalecane) i potwierdź **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/We8tqgctQrjz5oS/preview)

Instalacja się rozpocznie i zwykle trwa 15-20 minut. Obserwuj postęp kopiowania plików i konfiguracji systemu.

![img](https://screensaver01.zap-hosting.com/index.php/s/BAykMjmxDn76sJB/preview)

Po zakończeniu zobaczysz komunikat **"Instalacja TrueNAS zakończona pomyślnie"**. Naciśnij **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/GmNwHaTfY6KHSbN/preview)

Przed restartem **odmontuj ISO**, inaczej system zbootuje ponownie instalator. Kliknij ikonę **DVD**, wybierz **CD/DVD** i kliknij **Wysuń nośnik**. Zrestartuj serwer przez menu zasilania lub poczekaj na automatyczny restart.

<InlineServiceLink />

## Konfiguracja

Po instalacji musisz ustawić, z którego dysku serwer ma się bootować. TrueNAS SCALE jest zainstalowany, ale serwer musi zostać skonfigurowany, aby startował z właściwego dysku przez konfigurację ROM kontrolera RAID.

:::info[Krok Krytyczny]
Po instalacji konieczne jest ustawienie wolumenu startowego w ROM kontrolera RAID, aby serwer bootował z właściwego dysku.
:::

**Ustawianie dysku startowego w ROM**

Obserwuj konsolę podczas uruchamiania. Gdy pojawi się komunikat **"Naciśnij F8, aby wejść do konfiguracji ROM dla macierzy"**, natychmiast wciśnij **F8**.

![img](https://screensaver01.zap-hosting.com/index.php/s/BCosyXCBnZJjeiX/preview)

Otworzy się narzędzie konfiguracji ROM. Przejdź do **Wybierz wolumen startowy** strzałkami i potwierdź **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw4netxJPkX3354/preview)

Zobaczysz listę dostępnych dysków. Wybierz dysk, na którym zainstalowano TrueNAS SCALE i potwierdź **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7mPgXFMqn9Q475Z/preview)

Po wybraniu dysku naciśnij **F8**, aby zapisać ustawienia. Potwierdź, jeśli zostaniesz o to poproszony, a następnie wyjdź z narzędzia. Serwer uruchomi się z TrueNAS SCALE.

![img](https://screensaver01.zap-hosting.com/index.php/s/YEFokMkz3RSB625/preview)

**Dostęp do interfejsu webowego**

Po pierwszym uruchomieniu konsola TrueNAS SCALE wyświetli adres URL do Web UI: `http://[twoj_adres_ip_serwera]`. Zapisz ten adres IP, bo będzie potrzebny do logowania się do panelu webowego.

![img](https://screensaver01.zap-hosting.com/index.php/s/8JwikNGRTz4La3y/preview)

:::tip Automatyczna konfiguracja sieci
TrueNAS SCALE zazwyczaj automatycznie konfiguruje sieć przez DHCP. Pomiń ten krok, jeśli nie masz wielu adresów IP lub nie potrzebujesz statycznego IP.
:::

Jeśli chcesz skonfigurować sieć ręcznie, wybierz z menu konsoli **1) Konfiguruj interfejsy sieciowe**. Wybierz główny interfejs (np. `enp0s3` lub `eth0`), potem **Konfiguruj IPv4**, a następnie **Statyczny**. Wprowadź adres IP, maskę podsieci i bramę (znajdziesz je w panelu głównym ZAP-Hosting).

Otwórz przeglądarkę i wpisz `http://[twoj_adres_ip_serwera]` z konsoli.

Ponieważ wybraliśmy wcześniej **Konfigurację przez Web UI**, teraz ustawisz hasło. Na stronie logowania użytkownik to `truenas_admin`. Wpisz silne hasło, potwierdź je i kliknij **Zatwierdź**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dZrpdZYQwKBFksJ/preview)

:::danger Ważne dla bezpieczeństwa
Wybierz silne, unikalne hasło dla konta admina TrueNAS. To konto ma pełny dostęp do systemu.
:::

Po zalogowaniu zobaczysz panel główny z informacjami o systemie, statusie sieci, pulach dyskowych, usługach i alertach. Udało Ci się skonfigurować TrueNAS SCALE i możesz zacząć ustawiać pamięć masową.

![img](https://screensaver01.zap-hosting.com/index.php/s/fYkDpDfpqwTT5yY/preview)

**Tworzenie pul dyskowych**

Kliknij **Storage** w lewym menu, a następnie przycisk **Create Pool**.

![img](https://screensaver01.zap-hosting.com/index.php/s/fFeSjm3YnnPfxq5/preview)

Najpierw wpisz nazwę puli, np. `Disk`, `tank` lub inną, która Ci pasuje. Kliknij **Next**, gdy będziesz gotowy.

![img](https://screensaver01.zap-hosting.com/index.php/s/23MNpcrHmmGz2L2/preview)

W sekcji **Data** rozwiń listę **Layout** i wybierz konfigurację dopasowaną do Twoich potrzeb:

- **Stripe**: Maksymalna pojemność, brak redundancji
- **Mirror**: Kopia lustrzana na dwóch dyskach, redundancja kosztem pojemności
- **RAIDZ1**: Jedna dyskowa redundancja
- **RAIDZ2**: Dwu-dyskowa redundancja
- **RAIDZ3**: Trzy-dyskowa redundancja

![img](https://screensaver01.zap-hosting.com/index.php/s/wKHy7f8xoifEXB6/preview)

W sekcji **Disk Selection** zobaczysz wszystkie dyski do wykorzystania. Kliknij te, które chcesz dodać do puli — pojawią się w konfiguracji z szacowaną pojemnością.

:::info Dysk startowy niedostępny
Dysk systemowy nie pojawi się tutaj, bo jest zarezerwowany wyłącznie dla systemu operacyjnego.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/McEcGQSBzHaZNNc/preview)

Zostaw ustawienia opcjonalne domyślne i kliknij **Next**. Na stronie podsumowania sprawdź konfigurację: nazwę, układ, dyski i pojemność. Jeśli wszystko się zgadza, kliknij **Create Pool**.

![img](https://screensaver01.zap-hosting.com/index.php/s/RDitijsoGWtEoT5/preview)

**Organizacja przez Datasets**

Po utworzeniu puli możesz uporządkować dane za pomocą datasets. To logiczne podziały puli, które pomagają segregować różne typy danych. Kliknij **Datasets** w menu. Zobaczysz tam swoją nową pulę (np. "Disk").

![img](https://screensaver01.zap-hosting.com/index.php/s/oZPctpbLcCESWWt/preview)

Kliknij **Add Dataset**. Pula jest automatycznie ustawiona jako nadrzędna. Nadaj datasetowi nazwę, np. `documents`, `media` lub `backups`. Zaawansowane opcje zostaw domyślne, chyba że masz specjalne wymagania. Kliknij **Save**.

![img](https://screensaver01.zap-hosting.com/index.php/s/JxPmPW53zke9NQL/preview)

**Tworzenie kont użytkowników**

Kliknij **Credentials** w menu, a potem **Add**. Wybierz nazwę użytkownika (np. `john` lub `fileuser`), wpisz pełne imię i ustaw hasło. Grupę podstawową, katalog domowy i powłokę zostaw domyślne. Na dole włącz opcję **SMB** dla dostępu z Windows.

Dostosuj uprawnienia według potrzeb bezpieczeństwa. Do podstawowego udostępniania plików wystarczy domyślna konfiguracja z włączonym SMB. Po skończeniu kliknij **Submit**.

:::danger Ważne dla dostępu SMB
Nie używaj kont `root` ani `truenas_admin` do udostępniania plików. Te konta systemowe nie działają z SMB. Twórz dedykowanych użytkowników.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/3SLGk75E3KP57ZS/preview)

**Konfiguracja udziałów SMB**

Kliknij **Shares** w menu. Pojawią się trzy opcje: Windows (SMB) dla Windows/macOS/Linux, Unix (NFS) dla Linux/Unix oraz Block (iSCSI) dla pamięci blokowej. Skonfigurujemy SMB. Kliknij **Add** w sekcji Windows (SMB) Shares.

![img](https://screensaver01.zap-hosting.com/index.php/s/fgWcqjyxXLD2dRy/preview)

Otworzy się okno **Add SMB**. W polu **Path** wskaż dataset (np. `/mnt/Disk/documents`). W **Name** wpisz nazwę udziału, np. `documents` (to nazwa widoczna w sieci). **Purpose** zostaw domyślne. Możesz dodać opis. Zaawansowane opcje (ACL i inne) zostaw domyślne, a dostęp gościa wyłączony dla bezpieczeństwa. Kliknij **Save**.

![img](https://screensaver01.zap-hosting.com/index.php/s/D2xQYHQfbmsKRwT/preview)

Po utworzeniu udziału pojawi się komunikat, że **usługa SMB nie działa**. Kliknij **Start Service**. Zaznacz też **Start Automatycznie**, aby usługa uruchamiała się przy starcie systemu. Udział SMB jest teraz dostępny w sieci.

![img](https://screensaver01.zap-hosting.com/index.php/s/KQH5zoA7FYWaXMa/preview)

Dla udziałów NFS na systemach Linux/Unix przejdź do **Shares** → **Unix (NFS) Shares** i kliknij **Add**. Wybierz dataset, skonfiguruj sieci i uprawnienia, włącz NFS i zapisz.

<InlineServiceLink />

## Dostęp do udziału

Aby uzyskać dostęp do udziału np. z Windows, otwórz **Eksplorator plików**. Kliknij prawym na **Ten komputer** (lub **Mój komputer**) i wybierz **Dodaj lokalizację sieciową**.

![img](https://screensaver01.zap-hosting.com/index.php/s/NDJWjdpC6ZCq6c3/preview)

Otworzy się kreator dodawania lokalizacji sieciowej. Kliknij **Dalej**, aby kontynuować.

![img](https://screensaver01.zap-hosting.com/index.php/s/7KXPxNQJy4qsiBy/preview)

Gdy zapyta o lokalizację, wpisz w formacie: `\\[twoj_adres_ip_serwera]\[nazwa_udziału]`. Na przykład: `\\192.168.1.100\documents`. Zamień `[twoj_adres_ip_serwera]` na IP serwera TrueNAS, a `[nazwa_udziału]` na nazwę udziału SMB. Kliknij **Dalej**.

![img](https://screensaver01.zap-hosting.com/index.php/s/2yaoWfiCTX6XLAz/preview)

Wprowadź **nazwę użytkownika** i **hasło** konta utworzonego w TrueNAS. Nie używaj `root` ani `truenas_admin`, bo nie działają z SMB. Zaznacz **Zapamiętaj moje dane logowania** na przyszłość. Kliknij **OK**.

![img](https://screensaver01.zap-hosting.com/index.php/s/4nFReNbPLkHfmMp/preview)

Udział TrueNAS jest teraz dostępny. Przeglądaj pliki, twórz foldery i kopiuj dane jak na zwykłym dysku sieciowym. Połączyłeś swój Windows z udziałem TrueNAS.

![img](https://screensaver01.zap-hosting.com/index.php/s/nBqrkmkCYJntwW2/preview)

:::tip Szybszy dostęp
Dla wygody użyj **Mapuj dysk sieciowy** zamiast **Dodaj lokalizację sieciową**. Udział pojawi się jako litera dysku (np. `Z:`) w Eksploratorze.
:::

:::info Dostęp z macOS lub Linux
**macOS**: W Finderze naciśnij `Cmd+K` i wpisz `smb://[twoj_adres_ip_serwera]/[nazwa_udziału]`

**Linux**: Użyj opcji "Połącz z serwerem" w menedżerze plików z adresem `smb://[twoj_adres_ip_serwera]/[nazwa_udziału]` lub zamontuj przez terminal komendą `mount.cifs`
:::

## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować TrueNAS SCALE na swoim serwerze. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂