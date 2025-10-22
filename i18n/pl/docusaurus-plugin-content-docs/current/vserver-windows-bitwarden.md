---
id: vserver-windows-bitwarden
title: "VPS: Instalacja Bitwarden na Windows"
description: "Dowiedz się, jak bezpiecznie samodzielnie hostować Bitwarden do zarządzania hasłami z szyfrowaniem end-to-end i zaawansowanymi funkcjami zabezpieczeń → Sprawdź teraz"
sidebar_label: Instalacja Bitwarden
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Bitwarden to open source menedżer haseł i kluczy dostępu, który wykorzystuje zero knowledge oraz szyfrowanie end-to-end do ochrony danych. Możesz korzystać z niego jako usługi w chmurze lub hostować samodzielnie, z funkcjami generowania, przechowywania i automatycznego wypełniania silnych danych uwierzytelniających.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Myślisz o samodzielnym hostingu tej usługi? Przeprowadzimy Cię przez każdy krok konfiguracji i ustawień oraz podpowiemy, na co zwrócić uwagę.

<InlineVoucher />



## Wymagania wstępne

Przed instalacją **Bitwarden** upewnij się, że Twoje środowisko hostingowe spełnia poniższe wymagania, aby zapewnić płynną instalację i optymalną wydajność.

| Sprzęt    | Minimum      | Zalecenia ZAP-Hosting     |
| --------- | ------------ | ------------------------- |
| CPU       | 1 rdzeń vCPU | 4 rdzenie vCPU            |
| RAM       | 2 GB         | 4 GB                      |
| Miejsce na dysku | 12 GB   | 25 GB                     |

Oprogramowanie wymaga zainstalowania wszystkich niezbędnych zależności oraz działania na wspieranym systemie operacyjnym. Upewnij się, że Twój serwer spełnia poniższe wymagania przed rozpoczęciem instalacji:

**Zależności:** `Docker (Engine 26+ i Compose)`

**System operacyjny:** Najnowsza wersja Windows Server wspierająca Docker 26+

Upewnij się, że wszystkie zależności są zainstalowane, a system operacyjny jest odpowiedni, aby uniknąć problemów z kompatybilnością podczas instalacji Bitwarden.



## Przygotowanie

Przed konfiguracją **Bitwarden** musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji oraz instalację wszystkich wymaganych zależności. Te kroki zapewnią stabilne środowisko i pomogą uniknąć problemów podczas lub po instalacji.


### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i z poprawkami bezpieczeństwa, zawsze zacznij od aktualizacji systemu. Dzięki temu Twój serwer będzie miał najnowsze łatki i wersje oprogramowania przed dalszymi krokami.

### Instalacja zależności
Po zakończeniu aktualizacji możesz przejść do instalacji zależności. Bitwarden będzie uruchamiany na Twoim serwerze za pomocą zestawu kontenerów Docker. Wymaga to wcześniejszej instalacji Dockera. Zainstaluj [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) na swoim serwerze.

Pełny poradnik instalacji i obsługi Dockera znajdziesz w naszym [poradniku Docker](vserver-windows-docker.md).



### Utworzenie użytkownika i katalogu

Zalecamy skonfigurowanie serwera Windows z dedykowanym kontem serwisowym `bitwarden`, z którego będzie uruchamiany Bitwarden. Dzięki temu instancja Bitwarden będzie odizolowana od innych aplikacji działających na serwerze.

Otwórz PowerShell jako administrator. Utwórz lokalnego użytkownika Bitwarden, wykonując poniższe polecenia. Po pierwszym poleceniu pojawi się okno do wpisania hasła. Wprowadź wybrane hasło i potwierdź. Następnie wykonaj drugie polecenie, aby zakończyć konfigurację.

```
PS C:\> $Password = Read-Host -AsSecureString
New-LocalUser "Bitwarden" -Password $Password -Description "Bitwarden Local Admin"
```

Następnie utwórz folder Bitwarden w katalogu `C:\` dla nowo utworzonego użytkownika:

```
PS C:\> mkdir Bitwarden
```

W Docker Desktop przejdź do **Settings → Resources → File Sharing**. Dodaj katalog `C:\Bitwarden` do udostępnionych ścieżek. Wybierz Zastosuj i Uruchom ponownie, aby zatwierdzić zmiany.



### Konfiguracja domeny

Domyślnie Bitwarden działa na hoście na portach 80 (HTTP) i 443 (HTTPS). Skonfiguruj domenę z rekordami DNS wskazującymi na hosta, np. server.example.com, szczególnie jeśli serwer ma być dostępny z internetu. Unikaj umieszczania „bitwarden” w nazwie hosta, aby ograniczyć ujawnianie roli serwera lub używanego oprogramowania.




## Instalacja
Gdy spełnisz wszystkie wymagania i przygotowania, możesz przejść do instalacji aplikacji Bitwarden.

Pobierz skrypt instalacyjny Bitwarden na swój serwer, a następnie uruchom go:

```
cd C:\Bitwarden
Invoke-RestMethod -OutFile bitwarden.ps1 -Uri "https://func.bitwarden.com/api/dl/?app=self-host&platform=windows"
.\bitwarden.ps1 -install
```

W instalatorze najpierw wpisujesz nazwę domeny swojej instancji Bitwarden, zwykle skonfigurowany rekord DNS. Następnie wybierasz, czy Let’s Encrypt ma wygenerować darmowy, zaufany certyfikat SSL. Jeśli tak, podajesz adres e-mail do powiadomień o wygaśnięciu certyfikatu. Jeśli nie, pojawią się pytania o certyfikat.

Wprowadź swój Installation ID i Installation Key, które pobierzesz na [Bitwarden](https://bitwarden.com/host). Następnie wybierz region US lub EU, co ma znaczenie tylko, jeśli łączysz samodzielnie hostowaną instancję z płatną subskrypcją.

Jeśli nie korzystasz z Let’s Encrypt, możesz użyć istniejącego certyfikatu, umieszczając pliki w `C:\Bitwarden\bwdata\ssl\<twoja_domena>` i określając, czy jest zaufany. Alternatywnie możesz wygenerować certyfikat samopodpisany, co zalecamy tylko do testów. Jeśli nie wybierzesz żadnego certyfikatu, musisz postawić proxy HTTPS przed instalacją, inaczej aplikacje Bitwarden nie będą działać.



## Konfiguracja

Po instalacji dokończ podstawową konfigurację za pomocą dwóch plików. Najpierw edytuj plik środowiskowy `\bwdata\env\global.override.env`. Ustaw tam dane serwera SMTP, w tym host, port, SSL, nazwę użytkownika i hasło, aby Bitwarden mógł wysyłać maile weryfikacyjne i zaproszenia do organizacji. Jeśli potrzebujesz dostępu do Portalu Administratora Systemu, dodaj adres e-mail administratora do `adminSettings__admins`.

```
...
globalSettings__mail__smtp__host=<placeholder>
globalSettings__mail__smtp__port=<placeholder>
globalSettings__mail__smtp__ssl=<placeholder>
globalSettings__mail__smtp__username=<placeholder>
globalSettings__mail__smtp__password=<placeholder>
...
adminSettings__admins=
...
```

Zweryfikuj konfigurację SMTP. Poprawna konfiguracja zwróci sukces; w przeciwnym razie zobaczysz komunikaty o brakującym OpenSSL lub błędnych wartościach. Zastosuj zmiany poleceniem `.\bitwarden.ps1 -start`.

Poprawna konfiguracja zwróci sukces; w przeciwnym razie zobaczysz komunikaty o brakującym OpenSSL lub błędnych wartościach. Zastosuj zmiany poleceniem `.\bitwarden.ps1 -restart`.

Następnie sprawdź parametry instalacji w pliku `.\bwdata\config.yml`. Ten plik kontroluje generowane zasoby i musi być dostosowany do specjalnych środowisk, np. gdy działasz za proxy lub używasz niestandardowych portów. Zastosuj takie zmiany poleceniem `.\bitwarden.ps1 -rebuild`.

Na koniec uruchom instancję poleceniem `.\bitwarden.ps1 -start`. Pierwsze uruchomienie może potrwać, ponieważ Docker pobiera obrazy. Użyj `docker ps`, aby potwierdzić, że wszystkie kontenery działają poprawnie. Następnie otwórz web vault pod swoją domeną i zarejestruj konto, jeśli potrzebujesz. Weryfikacja mailowa wymaga poprawnie skonfigurowanych zmiennych SMTP.

## Podsumowanie i dodatkowe zasoby

Gratulacje! Właśnie pomyślnie zainstalowałeś i skonfigurowałeś Bitwarden na swoim VPS. Polecamy też zapoznać się z poniższymi materiałami, które mogą pomóc Ci w dalszej konfiguracji serwera:

- [bitwarden.com](https://bitwarden.com/) - Oficjalna strona
- https://bitwarden.com/help/ - Centrum pomocy Bitwarden (dokumentacja)

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz dalszej pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂