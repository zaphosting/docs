---
id: vserver-iso
title: "VPS: Podłączanie pliku ISO"
description: "Dowiedz się, jak dostosować swój VPS, montując wybrane ISO, aby mieć pełną kontrolę nad środowiskiem serwera → Sprawdź teraz"
sidebar_label: Podłącz plik ISO
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Wprowadzenie
Chcesz mieć jeszcze więcej swobody przy wyborze systemu? Oprócz naszych szablonów systemów operacyjnych możesz oczywiście podłączyć własne pliki ISO. To mega proste z naszymi produktami VPS. Dzięki temu na swoim serwerze masz dokładnie taki system operacyjny, jaki naprawdę chcesz!

<InlineVoucher />



## Dostępne pliki ISO

Oprócz naszych prekonfigurowanych standardowych szablonów systemów operacyjnych oferujemy też możliwość podłączenia dodatkowych plików ISO. To daje jeszcze większą elastyczność przy konfiguracji i zarządzaniu środowiskiem serwera. Nasze produkty VPS obecnie obsługują następujące pliki ISO: 

<SearchableItemList items={items} />

:::info Brakuje pliku ISO?
Chcesz użyć konkretnego ISO, którego nie ma na liście? Skontaktuj się z naszym supportem, chętnie sprawdzimy, czy możemy je dla Ciebie dodać.
:::





## Podłączanie pliku ISO
Aby podłączyć ISO, przejdź do panelu zarządzania VPS i otwórz **Ustawienia → ISO**. Wybierz plik ISO, ustaw kolejność bootowania, a następnie zrestartuj serwer. 

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Po restarcie możesz połączyć się z serwerem przez klienta VNC i rozpocząć instalację oraz konfigurację systemu operacyjnego.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Status online i połączenia zdalne po podłączeniu ISO

Po podłączeniu ISO serwer nie jest jeszcze skonfigurowany. W efekcie w panelu nie będzie widoczny **status online**, a połączenia **RDP** lub **SSH** nie będą dostępne. Będą one możliwe dopiero po pomyślnej instalacji i konfiguracji systemu operacyjnego.

:::




## Podsumowanie
Gratulacje, udało Ci się wybrać i podłączyć plik ISO. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂



<InlineVoucher />