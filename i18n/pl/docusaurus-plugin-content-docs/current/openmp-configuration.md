---
id: openmp-configuration
title: "Open.mp: Konfiguracja serwera Open.mp"
description: "Dowiedz się, jak dostosować ustawienia serwera Open.mp, aby zoptymalizować rozgrywkę i wydajność serwera → Sprawdź teraz"
sidebar_label: Konfiguracja serwera
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery Open.mp oferują szeroki zakres parametrów konfiguracyjnych, które możesz dostosować według własnych upodobań. W tym poradniku przeanalizujemy wszystkie dostępne obecnie opcje konfiguracji i wyjaśnimy je szczegółowo.

<InlineVoucher />

## Dostęp do pliku konfiguracyjnego

Na początek musisz uzyskać dostęp do pliku konfiguracyjnego, aby edytować dowolne parametry. Istnieje kilka sposobów na edycję tego pliku.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Przez Webinterface" default>

#### Przez Webinterface

Najwygodniejszą metodą edycji podstawowych ustawień jest przejście do sekcji **Settings** w panelu głównym twojego serwera gier i wyszukanie tam odpowiednich opcji, jak na poniższym obrazku:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Pamiętaj, że nie wszystkie opcje konfiguracyjne będą dostępne tutaj. Jeśli chcesz skonfigurować wszystko, skorzystaj z zakładki **WI Config File**, aby łatwo edytować potrzebny plik bezpośrednio w webinterface.

</TabItem>

<TabItem value="configs" label="Przez plik WI Config">

#### Przez plik WI Config

:::note
Serwer musi być zatrzymany przed edycją pliku konfiguracyjnego, ponieważ edycja i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Dla użytkowników, którzy chcą bezpośrednio edytować plik i wszystkie opcje konfiguracyjne, dostęp do niego uzyskasz w sekcji **Configs** w panelu głównym serwera gier, klikając niebieski przycisk edycji pliku, jak na poniższym obrazku:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Otworzy się wtedy edytor tekstu bezpośrednio na stronie, umożliwiający edycję pliku.

</TabItem>

<TabItem value="ftp" label="Przez FTP">


#### Przez FTP

:::note
Serwer musi być zatrzymany przed edycją pliku konfiguracyjnego, ponieważ edycja i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Ostatnią metodą dostępu do surowego pliku jest FTP. Jeśli nie znasz się na FTP, polecamy zapoznać się z [poradnikiem Dostęp przez FTP](gameserver-ftpaccess.md). Jednak ta metoda zajmuje więcej czasu, a jeśli chcesz bezpośrednio edytować zawartość pliku, lepiej skorzystać z sekcji **Configs** w webinterface serwera gier, jak wspomniano wcześniej.

Po zalogowaniu się przez klienta FTP, przejdź do następującego katalogu, zastępując `[zap_id]` swoim własnym ID ZAP:
```
..g[zap_id]/gta-openmp/
```

W tym katalogu znajdź plik `config.json` i otwórz go. To jest plik konfiguracyjny serwera, który powinieneś edytować.

</TabItem>
</Tabs>

## Opcje konfiguracji serwera

### Szczegóły serwera

To są opcje konfiguracyjne, które zmieniają informacje o twoim serwerze w publicznej przeglądarce serwerów. Znajdziesz je w pliku konfiguracyjnym, co możesz łatwo zrobić za pomocą `CTRL+F` w przeglądarce lub edytorze, aby wyszukać.

| Nazwa parametru               | Przykład                               | Opis                                                                                   |
| ------------------------------ | ------------------------------------- | ------------------------------------------------------------------------------------- |
| name                           | ZAP-Hosting Docs Test                 | Ustaw nazwę hosta twojego serwera                                                    |
| language                       | English                              | Język, który pojawi się w przeglądarce serwerów dla twojego serwera                   |
| website                        | zap-hosting.com/                     | Dodaj stronę internetową, którą ludzie mogą odwiedzić, aby uzyskać więcej informacji  |
| discord.invite                 | discord.gg/zaphosting                | Link do serwera Discord, który pojawi się w przeglądarce serwerów                     |
| banners.light                  | zap-hosting.com/lighticon.png        | Ustaw URL do banera w jasnym motywie, który pojawi się w przeglądarce serwerów        |
| banners.dark                   | zap-hosting.com/darkicon.png         | Ustaw URL do banera w ciemnym motywie, który pojawi się w przeglądarce serwerów       |
| game.map                       | ZAPtastic Stunt Map                  | Nazwa mapy, która powinna pojawić się w przeglądarce serwerów                         |
| game.mode                      | Survival                            | Tryb gry, który powinien pojawić się w przeglądarce serwerów                          |
| announce                       | true                                | Włącz/wyłącz wyświetlanie twojego serwera w publicznej przeglądarce serwerów         |
| enable_query                   | true                                | Włącz/wyłącz wyświetlanie informacji o twoim serwerze w przeglądarce serwerów        |

Po wprowadzeniu zmian pamiętaj, aby zapisać plik i zrestartować serwer. Przy następnym uruchomieniu serwer użyje podanych przez ciebie ustawień.

### Podstawowe ustawienia serwera

To ważniejsze opcje konfiguracyjne, które wpływają na funkcjonalność twojego serwera. Znajdziesz je w pliku konfiguracyjnym, co możesz łatwo zrobić za pomocą `CTRL+F` w przeglądarce lub edytorze, aby wyszukać.

| Nazwa parametru               | Przykład                               | Opis                                                                                     |
| ------------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------- | 
| max_players                    | 50 (domyślnie)                       | Ustaw maksymalną liczbę graczy, jaką serwer może obsłużyć jednocześnie                  |
| max_bots                       | 0 (domyślnie)                        | Ustaw maksymalną liczbę NPC, jaką serwer może obsłużyć. Wlicza się do limitu max_players |
| password                       | iLoveZAP!2024                       | Ustaw hasło, które gracze muszą podać, aby połączyć się z serwerem                      |
| rcon.enable                    | true                                | Włącz/wyłącz funkcję RCON                                                               |
| rcon.password                  | ZAP-IS-AWESOME                     | Ustaw hasło wymagane do dostępu do RCON z klienta                                       |
| logging.enable                 | true                                | Włącz/wyłącz logowanie                                                                  |
| logging.file                   | log.txt                             | Ścieżka i nazwa pliku do logowania, jeśli jest włączone                                |
| logging.log_chat               | true                                | Włącz/wyłącz wyświetlanie czatu graczy w konsoli serwera                               |

Po wprowadzeniu zmian pamiętaj, aby zapisać plik i zrestartować serwer. Przy następnym uruchomieniu serwer użyje podanych przez ciebie ustawień.

## Ustawienia rozgrywki i sieci

Open.mp oferuje szeroki zakres opcji rozgrywki i sieci, które pozwalają na dużą personalizację serwera. Poniżej podsumowujemy kilka ważniejszych. Znajdziesz je w pliku konfiguracyjnym, co możesz łatwo zrobić za pomocą `CTRL+F` w przeglądarce lub edytorze, aby wyszukać.

Jeśli chcesz dostosować wszystkie ustawienia, polecamy przeczytać [poradnik open.mp dotyczący config.json](https://www.open.mp/docs/server/config.json), który przedstawia wszystkie dostępne opcje konfiguracji.

:::tip
Nie zalecamy zmiany ustawień Portu ani IP, ponieważ są one automatycznie konfigurowane przez serwer gier. Zmiana wartości IP/Port może spowodować problemy z działaniem serwera!
:::

| Nazwa parametru               | Opis                                                                                      | 
| ------------------------------ | ----------------------------------------------------------------------------------------- | 
| game.use_chat_radius           | Włącz/wyłącz ograniczenie zasięgu czatu                                                  |
| game.chat_radius               | Ustaw promień ograniczenia czatu                                                         |
| game.time                      | Ustaw globalny czas, którego używa serwer                                               |
| game.use_nametags              | Włącz/wyłącz wyświetlanie nazw, pasków zdrowia i pancerza nad graczami                   |
| game.use_vehicle_friendly_fire | Włącz przyjazny ogień dla pojazdów drużynowych                                          |
| game.vehicle_respawn_time      | Czas odrodzenia pojazdu w milisekundach                                                |
| game.weather                   | Globalna pogoda, której używa serwer                                                    |
| network.bind                   | Adres IP, którego serwer powinien używać (zalecamy nie zmieniać dla serwerów gier)       |
| network.port                   | Port, którego serwer powinien używać (ponownie, zalecamy nie zmieniać dla serwerów gier)  |
| network.messages_limit         | Maksymalna liczba wiadomości, które użytkownik może wysłać na sekundę                    |
| network.player_timeout         | Czas w milisekundach, po którym gracz zostanie rozłączony, jeśli nie wysyła danych do serwera |

Po wprowadzeniu zmian pamiętaj, aby zapisać plik i zrestartować serwer. Przy następnym uruchomieniu serwer użyje podanych przez ciebie ustawień.

<InlineVoucher />