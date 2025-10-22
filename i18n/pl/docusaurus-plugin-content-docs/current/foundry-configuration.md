---
id: foundry-configuration
title: "Foundry: Konfiguracja Serwera"
description: "Dowiedz się, jak dostosować ustawienia serwera Foundry dla optymalnej rozgrywki i zarządzania serwerem → Sprawdź teraz"
sidebar_label: Konfiguracja Serwera
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery Foundry oferują szeroki zakres parametrów konfiguracyjnych, które możesz dostosować do swoich potrzeb. W tym poradniku przeanalizujemy wszystkie dostępne obecnie parametry konfiguracyjne i wyjaśnimy każdy z nich bardziej szczegółowo.

<InlineVoucher />

## Dostęp do Pliku Konfiguracyjnego

Na początek musisz uzyskać dostęp do pliku konfiguracyjnego, aby móc edytować dowolne parametry. Istnieje kilka sposobów na edycję tego pliku.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Przez Webinterface" default>

#### Przez Webinterface

Najwygodniejszą metodą jest przejście do sekcji **Ustawienia** w panelu głównym Twojego serwera gier i wyszukanie tam odpowiednich opcji, jak pokazano poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Przez plik konfiguracyjny w WI">

#### Przez plik konfiguracyjny w WI

:::note
Serwer musi być zatrzymany przed edycją pliku konfiguracyjnego, ponieważ edycja i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Alternatywnie, jeśli chcesz bezpośrednio edytować surowy plik, możesz to zrobić, przechodząc do sekcji **Konfiguracje** w panelu głównym serwera gier i klikając niebieski przycisk edycji pliku, jak pokazano poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/64bAt9qCqHAdWXH/preview)

Otworzy to edytor tekstu bezpośrednio na stronie, umożliwiając Ci edycję.

</TabItem>

<TabItem value="ftp" label="Przez FTP">

#### Przez FTP

:::note
Serwer musi być zatrzymany przed edycją pliku konfiguracyjnego, ponieważ edycja i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Ostatnią metodą dostępu do surowego pliku jest FTP. Jeśli nie znasz się na FTP, polecamy zapoznać się z [poradnikiem Dostęp przez FTP](gameserver-ftpaccess.md). Jednak ta metoda zajmuje więcej czasu, a jeśli chcesz bezpośrednio edytować zawartość pliku, lepiej skorzystać z sekcji **Konfiguracje** w panelu głównym serwera gier, jak wspomniano wcześniej.

</TabItem>
</Tabs>

## Opcje Konfiguracji Serwera

W poniższej tabeli przedstawiamy ważne opcje konfiguracji serwera, które są obecnie dostępne na serwerach Foundry.

:::tip
Nie zalecamy zmiany ustawień Portów, ponieważ są one automatycznie konfigurowane przez serwer gier. Zmiana wartości portów może spowodować problemy z działaniem serwera!
:::

### Ważne Ustawienia Serwera

| Nazwa Parametru    | Przykład                  | Opis                                                                                 |
| ------------------ | ------------------------- | ------------------------------------------------------------------------------------ | 
| server_world_name  | ZAPDocsTest               | Ustaw nazwę świata, która będzie też nazwą folderu, w którym zapisywane są pliki     |
| server_name        | ZAP-Hosting Docs Test     | Nazwa wyświetlana na liście serwerów                                               |
| server_password    | iLoveZAP!2024             | Ustaw hasło wymagane do dołączenia na serwer                                        |
| server_is_public   | true/false                | Włącz lub wyłącz wyświetlanie serwera w przeglądarce serwerów                       |
| server_port        | 3724 (domyślny)           | Ustaw port sieciowy używany przez grę                                              |
| server_query_port  | 27015 (domyślny)          | Ustaw port zapytań zwracający informacje o serwerze na liście serwerów              |
| server_max_players | 32                        | Ustaw maksymalną liczbę graczy, którzy mogą być jednocześnie na serwerze            |

### Ustawienia Konfiguracji Rozgrywki

| Nazwa Parametru          | Przykład     | Opis                                                                                 |
| ----------------------- | ----------- | ----------------------------------------------------------------------------------- | 
| pause_server_when_empty | true/false  | Włącz lub wyłącz pauzowanie serwera, gdy nie ma żadnych graczy online               |
| map_seed                | 42938743982 | Ustaw niestandardowy seed do generowania świata                                    |
| autosave_interval       | 300         | Ustaw, co ile sekund serwer ma automatycznie zapisywać stan                         |

Po dokonaniu zmian pamiętaj, aby zapisać plik i zrestartować serwer. Przy następnym uruchomieniu serwer użyje podanych przez Ciebie ustawień.

<InlineVoucher />