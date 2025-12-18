---
id: vserver-windows-rdp-port
title: "VPS: Zmień port Windows RDP"
description: "Dowiedz się, jak zmienić port Windows RDP → Sprawdź teraz"
sidebar_label: Zmień port RDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Remote Desktop Protocol domyślnie korzysta z portu 3389. Ten port jest powszechnie znany i często celem automatycznych skanów. Zmiana portu RDP może ograniczyć niechciane próby połączeń i poprawić podstawowe bezpieczeństwo.

<InlineVoucher />



## Zmiana portu RDP w rejestrze

Zaloguj się na serwer lokalnie lub przez istniejące połączenie Remote Desktop. Otwórz okno Uruchom za pomocą **Win + R**, wpisz `regedit` i potwierdź, aby otworzyć Edytor rejestru. Przejdź do następującej ścieżki w rejestrze:

```
HKEY_LOCAL_MACHINE
 └─ SYSTEM
    └─ CurrentControlSet
       └─ Control
          └─ Terminal Server
             └─ WinStations
                └─ RDP-Tcp
```

Znajdź wpis rejestru o nazwie **PortNumber**. Zmień format wartości na **Dziesiętny** i wpisz nowy, wybrany numer portu. Zalecamy port powyżej 1024, który nie jest już używany przez inny serwis. Po zastosowaniu zmiany zamknij Edytor rejestru.

## Dostosuj reguły zapory Windows

Nowy port RDP musi być dozwolony w zaporze Windows. Otwórz **Zapora Windows Defender z zaawansowanymi zabezpieczeniami** i przejdź do sekcji reguł przychodzących.

Zmodyfikuj istniejącą regułę Remote Desktop lub stwórz nową regułę przychodzącą, która zezwala na ruch TCP na nowo skonfigurowanym porcie. Upewnij się, że reguła pozwala na połączenie i jest stosowana do wymaganych profili sieciowych.

## Uruchom ponownie usługę, aby zastosować zmiany

Zmiana portu zaczyna działać dopiero po restarcie usług Remote Desktop lub po ponownym uruchomieniu systemu. Zalecamy pełny restart serwera, aby konfiguracja została zastosowana poprawnie.

## Połącz się, używając nowego portu

Podczas nawiązywania nowego połączenia Remote Desktop port musi być podany jawnie, dopisując go do adresu IP lub nazwy hosta. Przykład:

```
203.0.113.10:3390
```

## Podsumowanie

Zmiana portu Windows RDP zmniejsza ryzyko automatycznych skanów i nieautoryzowanych prób połączeń. Proces obejmuje aktualizację rejestru Windows, zezwolenie na nowy port w zaporze oraz restart systemu lub usług.

Po zakończeniu od razu sprawdź dostęp i zanotuj skonfigurowany port, aby uniknąć problemów z połączeniem w przyszłości. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />