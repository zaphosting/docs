---
id: vserver-linux-bitwarden
title: "Konfiguracja Bitwarden na serwerze Linux - Zabezpiecz swoje zarządzanie hasłami"
description: "Dowiedz się, jak bezpiecznie samodzielnie hostować Bitwarden do zarządzania hasłami z szyfrowaniem end-to-end i silnymi funkcjami uwierzytelniania → Sprawdź teraz"
sidebar_label: Instalacja Bitwarden
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Bitwarden to open source menedżer haseł i kluczy dostępu, który korzysta z zasady zero knowledge oraz szyfrowania end-to-end, aby chronić Twoje dane. Możesz korzystać z niego jako usługi w chmurze lub hostować samodzielnie, z funkcjami generowania, przechowywania i automatycznego wypełniania silnych danych uwierzytelniających.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Myślisz o samodzielnym hostingu tej usługi? Przeprowadzimy Cię przez każdy krok konfiguracji i ustawień, wraz ze wszystkim, co musisz wiedzieć.

<InlineVoucher />

## Wymagania wstępne

Przed instalacją **Bitwarden** upewnij się, że Twoje środowisko hostingowe spełnia poniższe wymagania, aby zapewnić płynną instalację i optymalną wydajność.

| Sprzęt    | Minimum     | Zalecenia ZAP-Hosting     |
| --------- | ----------- | ------------------------- |
| CPU       | 1 rdzeń vCPU| 4 rdzenie vCPU            |
| RAM       | 2 GB        | 4 GB                      |
| Miejsce na dysku | 12 GB | 25 GB                     |

Oprogramowanie wymaga zainstalowania wszystkich niezbędnych zależności oraz działania na wspieranym systemie operacyjnym. Upewnij się, że Twój serwer spełnia poniższe wymagania przed przystąpieniem do instalacji:

**Zależności:** `Docker (Engine 26+ i Compose)`

**System operacyjny:** Najnowsza wersja Ubuntu/Debian wspierająca Docker 26+

Upewnij się, że wszystkie zależności są zainstalowane, a system operacyjny jest odpowiedniej wersji, aby uniknąć problemów z kompatybilnością podczas instalacji Bitwarden.

## Przygotowanie

Przed konfiguracją **Bitwarden** musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji oraz instalację wszystkich wymaganych zależności. Te przygotowania zapewnią stabilne środowisko i pomogą uniknąć problemów podczas lub po instalacji.

### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i z poprawkami bezpieczeństwa, zawsze wykonuj najpierw aktualizację systemu. W tym celu uruchom następujące polecenie:

```
sudo apt update && sudo apt upgrade -y
```

Zapewni to, że Twój system ma najnowsze poprawki bezpieczeństwa i wersje oprogramowania przed kontynuacją.

### Instalacja zależności
Po zakończeniu aktualizacji możesz przejść do instalacji zależności. Bitwarden będzie uruchamiany na Twojej maszynie za pomocą zestawu kontenerów Docker. Wymaga to najpierw instalacji Dockera. Wykonaj poniższe polecenia:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Pełny poradnik instalacji i korzystania z Dockera znajdziesz w naszym [poradniku Docker](dedicated-linux-docker.md).

### Utworzenie użytkownika i katalogu

Zalecamy skonfigurowanie serwera Linux z dedykowanym kontem serwisowym `bitwarden`, z którego będzie instalowany i uruchamiany Bitwarden. Dzięki temu Twoja instancja Bitwarden będzie odizolowana od innych aplikacji działających na serwerze.

Utwórz użytkownika bitwarden i ustaw dla niego silne, unikalne hasło:

```
sudo adduser bitwarden
sudo passwd bitwarden
```

Utwórz grupę docker, jeśli jeszcze nie istnieje, i dodaj użytkownika bitwarden do grupy docker:

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

Utwórz katalog roboczy, ustaw uprawnienia i przypisz właściciela bitwarden:

```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```

### Konfiguracja domeny

Domyślnie Bitwarden działa na hoście na portach 80 (HTTP) i 443 (HTTPS). Skonfiguruj domenę z rekordami DNS wskazującymi na hosta, np. server.example.com, szczególnie jeśli serwer ma być dostępny w internecie. Unikaj umieszczania „bitwarden” w nazwie hosta, aby zmniejszyć ujawnianie roli serwera lub używanego oprogramowania.

## Instalacja

Gdy wszystkie wymagania są spełnione, a przygotowania zakończone, możesz przystąpić do instalacji aplikacji Bitwarden.

Pobierz skrypt instalacyjny Bitwarden na swój serwer, a następnie uruchom instalator. Katalog `./bwdata` zostanie utworzony względem lokalizacji `bitwarden.sh`.

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

W instalatorze najpierw wpisujesz nazwę domeny swojej instancji Bitwarden, zwykle skonfigurowany rekord DNS. Następnie wybierasz, czy Let’s Encrypt ma wygenerować darmowy, zaufany certyfikat SSL. Jeśli tak, podajesz adres e-mail do powiadomień o wygaśnięciu. Jeśli nie, pojawią się pytania o certyfikat.

Wprowadź swój Installation ID i Installation Key, oba dostępne na [Bitwarden](https://bitwarden.com/host). Następnie wybierz region US lub EU, co ma znaczenie tylko, jeśli łączysz samodzielnie hostowaną instancję z płatną subskrypcją.

Jeśli nie korzystasz z Let’s Encrypt, możesz użyć istniejącego certyfikatu, umieszczając pliki w `./bwdata/ssl/your.domain` i określając, czy jest zaufany. Alternatywnie możesz wygenerować certyfikat samopodpisany, co zalecamy tylko do testów. Jeśli wybierzesz brak certyfikatu, musisz postawić proxy HTTPS przed instalacją, inaczej aplikacje Bitwarden nie będą działać.

## Konfiguracja

Po instalacji dokończ podstawową konfigurację za pomocą dwóch plików. Najpierw edytuj plik środowiskowy `./bwdata/env/global.override.env`. Ustaw tam dane swojego serwera SMTP, w tym host, port, SSL, nazwę użytkownika i hasło, aby Bitwarden mógł wysyłać maile weryfikacyjne i zaproszenia do organizacji. Jeśli potrzebujesz dostępu do Portalu Administratora Systemu, dodaj adres e-mail administratora do `adminSettings__admins`.

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

Zweryfikuj konfigurację SMTP poleceniem `./bitwarden.sh checksmtp`. Poprawna konfiguracja zwróci sukces; w przeciwnym razie zobaczysz komunikaty o brakującym OpenSSL lub błędnych wartościach. Zastosuj zmiany poleceniem `./bitwarden.sh restart`.

Następnie sprawdź parametry instalacji w pliku `./bwdata/config.yml`. Ten plik kontroluje generowane zasoby i musi być dostosowany do specjalnych środowisk, np. gdy działasz za proxy lub używasz niestandardowych portów. Zmiany zastosuj poleceniem `./bitwarden.sh rebuild`.

Na koniec uruchom instancję poleceniem `./bitwarden.sh start`. Pierwsze uruchomienie może potrwać, gdy Docker pobiera obrazy. Użyj `docker ps`, aby potwierdzić, że wszystkie kontenery działają poprawnie. Następnie otwórz web vault pod swoją domeną i zarejestruj konto, jeśli to konieczne. Weryfikacja mailowa wymaga poprawnie skonfigurowanych zmiennych SMTP.

## Podsumowanie i dodatkowe zasoby

Gratulacje! Właśnie pomyślnie zainstalowałeś i skonfigurowałeś Bitwarden na swoim VPS/serwerze dedykowanym. Polecamy też zapoznać się z poniższymi zasobami, które mogą pomóc i wesprzeć Cię podczas konfiguracji serwera:

- [bitwarden.com](https://bitwarden.com/) - Oficjalna strona
- https://bitwarden.com/help/ - Centrum pomocy Bitwarden (dokumentacja)

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz dalszej pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂