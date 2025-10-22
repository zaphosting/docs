---
id: dedicated-linux-plausible
title: "Serwer dedykowany: Instalacja Plausible na systemie operacyjnym"
description: "Dowiedz się, jak skonfigurować platformę analityki internetowej skupioną na prywatności, która dostarcza kluczowe dane szybko i łatwo → Sprawdź teraz"
sidebar_label: Instalacja Plausible
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Plausible to lekka, open-source’owa platforma analityki internetowej, która działa bez ciasteczek i w pełni przestrzega przepisów o ochronie prywatności. Dostarcza kluczowe metryki, takie jak liczba odwiedzających, odsłony stron i czas wizyty, za pomocą przejrzystego, intuicyjnego panelu głównego. Dzięki łatwości obsługi, szybkiemu działaniu i infrastrukturze opartej w UE, Plausible to nowoczesna i świadoma prywatności alternatywa dla Google Analytics.

Myślisz o samodzielnym hostingu tej usługi? Przeprowadzimy Cię przez każdy krok instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.

<InlineVoucher />

## Wymagania wstępne

Przed instalacją **Plausible** upewnij się, że Twoje środowisko hostingowe spełnia poniższe wymagania, aby zapewnić płynną instalację i optymalną wydajność.

| Sprzęt    | Minimum    | Rekomendacja ZAP-Hosting |
| --------- | ----------| ------------------------ |
| CPU       | 1 rdzeń CPU | 4 rdzenie CPU           |
| RAM       | 2 GB       | 4 GB                    |
| Miejsce na dysku | 10 GB | 25 GB                   |

Oprogramowanie wymaga zainstalowania wszystkich niezbędnych zależności oraz działania na wspieranym systemie operacyjnym. Upewnij się, że Twój serwer spełnia poniższe wymagania przed przystąpieniem do instalacji:

**Zależności:** `Docker`

**System operacyjny:** Najnowsza wersja Ubuntu/Debian wspierająca Docker 26+

Upewnij się, że wszystkie zależności są zainstalowane, a system operacyjny jest aktualny, aby uniknąć problemów z kompatybilnością podczas instalacji Plausible.

## Przygotowanie

Przed konfiguracją **Plausible** musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji oraz instalację wszystkich wymaganych zależności. Te przygotowania zapewnią stabilne środowisko i pomogą uniknąć problemów podczas lub po instalacji.

### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i z poprawkami bezpieczeństwa, zawsze najpierw wykonaj aktualizację systemu. W tym celu uruchom następujące polecenie:

```
sudo apt update && sudo apt upgrade -y
```

Zapewni to, że Twój system ma najnowsze poprawki bezpieczeństwa i wersje oprogramowania przed kontynuacją.

### Instalacja zależności
Po zakończeniu aktualizacji możesz przystąpić do instalacji zależności.

#### Git
Dane Plausible będą pobierane przez GitHub, więc najpierw musisz zainstalować Git. Wykonaj polecenie:

```
sudo apt install git-all
```

#### Docker

Plausible będzie uruchamiane na Twojej maszynie w kontenerze Docker, więc Docker musi być zainstalowany. Wykonaj polecenia:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Pełny poradnik instalacji i obsługi Dockera znajdziesz w naszym [poradniku Docker](vserver-linux-docker.md).

## Instalacja
Gdy wszystkie wymagania są spełnione, a przygotowania zakończone, możesz przejść do instalacji aplikacji Plausible.

Zacznij od sklonowania repozytorium Community Edition i utworzenia niezbędnego pliku konfiguracyjnego:

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

Następnie utwórz plik środowiskowy (.env) i zdefiniuj podstawowe zmienne. BASE_URL musi wskazywać na faktyczną domenę, która ma już rekord DNS kierujący na Twój serwer. Musisz też wygenerować losowy SECRET_KEY_BASE o długości co najmniej 64 bajtów:

```
touch .env
echo "BASE_URL=https://Plausible.example.com" >> .env
echo "SECRET_KEY_BASE=$(openssl rand -base64 48)" >> .env
echo "HTTP_PORT=80" >> .env
echo "HTTPS_PORT=443" >> .env
```

Zweryfikuj zawartość pliku poleceniem `cat .env`, aby potwierdzić poprawność wartości. Powinno to wyglądać tak:

```
BASE_URL=https://Plausible.example.com
SECRET_KEY_BASE=As0fZsJlUpuFYSthRjT5Yflg/NlxkFKPRro72xMLXF8yInZ60s6xGGXYVqml+XN1
HTTP_PORT=80
HTTPS_PORT=443
```

Te domyślne porty pozwalają Let’s Encrypt automatycznie wystawić certyfikaty TLS. Jeśli planujesz uruchomić Plausible za reverse proxy, możesz dostosować te wartości. Dodatkowo utwórz plik `compose.override.yml`, aby wystawić odpowiednie porty dla kontenera Plausible:

```
cat > compose.override.yml << EOF
services:
  Plausible:
    ports:
      - 80:80
      - 443:443
EOF 
```

Na koniec uruchom wymagane usługi za pomocą Docker Compose:

```
docker compose up -d
```

Gdy kontenery działają, otwórz przeglądarkę pod domeną wskazaną w BASE_URL i utwórz pierwsze konto użytkownika.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)

## Konfiguracja

Plausible można zintegrować z Google Search Console, aby wzbogacić analitykę o dane dotyczące zapytań wyszukiwania. Dzięki temu zobaczysz, które słowa kluczowe generują ruch na Twojej stronie, co daje głębszy wgląd w zachowania odwiedzających.

Jeśli masz konto Google Cloud i skonfigurowanego klienta OAuth, wystarczy dodać swoje dane (`GOOGLE_CLIENT_ID` i `GOOGLE_CLIENT_SECRET`) do pliku `.env`. Po zapisaniu zmian zrestartuj usługi Dockera poleceniem `docker compose up -d`. W panelu Plausible przejdź do *Site Settings > Integrations*, aby dokończyć połączenie i postępować zgodnie z instrukcjami uwierzytelniania.

Jeśli nie masz jeszcze klienta OAuth lub nie znasz procesu, oficjalne Wiki Plausible oferuje szczegółowy poradnik krok po kroku. Wyjaśnia, jak utworzyć projekt w Google Cloud, włączyć wymagane API, skonfigurować klienta OAuth i dodać wygenerowane dane do Plausible: [Plausible Wiki: Google Integration](https://github.com/Plausible/community-edition/wiki/google-integration).

Jeśli korzystasz z Google Search Console, możesz skonfigurować integrację Google, aby pobierać dane o wyszukiwanych frazach — to naprawdę fajna funkcja.

Jeśli masz już konto Google Cloud z klientem OAuth, po prostu wklej `GOOGLE_CLIENT_ID` i `GOOGLE_CLIENT_SECRET` do pliku `.env`, zrestartuj usługę Dockera poleceniem `docker compose up -d` i postępuj zgodnie z instrukcjami w panelu Plausible w sekcji Site Settings > Integrations.

## Podsumowanie i dodatkowe zasoby

Gratulacje! Właśnie pomyślnie zainstalowałeś i skonfigurowałeś Plausible na swoim serwerze dedykowanym. Polecamy też zapoznać się z poniższymi zasobami, które mogą Ci pomóc i wesprzeć podczas konfiguracji serwera:

- [Plausible.io](https://Plausible.io/) – Oficjalna strona
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) – Ogłoszenia, dyskusje, zgłaszanie problemów

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz dalszej pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />