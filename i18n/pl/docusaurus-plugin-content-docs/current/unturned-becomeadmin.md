---
id: unturned-becomeadmin
title: "Unturned: Zostań administratorem serwera"
description: "Dowiedz się, jak przyznać uprawnienia administratora, aby mieć pełną kontrolę nad serwerem i lepsze zarządzanie w grze → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przyznanie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w niej. Wszystkie kroki, które musisz wykonać, aby przyznać uprawnienia administratora na swoim serwerze, opisane są poniżej.  
<InlineVoucher />

## Przygotowania

Aby móc dodać adminów na serwerze, należy edytować plik konfiguracyjny. Aby uniknąć problemów z zastosowaniem zmian, upewnij się, że Twój serwer jest wcześniej zatrzymany!

Dodatkowo potrzebny jest odpowiedni Steam ID (64), aby serwer mógł zidentyfikować gracza. Możesz skorzystać z tego [narzędzia](https://steamidfinder.com/) jako przykładu.  
Po wejściu na stronę narzędzia, wymagane informacje zwykle można uzyskać, wpisując nazwę gracza.

![](https://screensaver01.zap-hosting.com/index.php/s/72YkRLBXE77NJQ5/preview)

## Otwieranie plików konfiguracyjnych

Istnieją dwa sposoby na edycję plików na serwerze.  
Pierwszy to [dostęp przez FTP](gameserver-ftpaccess.md).

Drugi to użycie Edytora Konfiguracji bezpośrednio w panelu webowym.  
W tym przypadku korzystamy z wbudowanego edytora w panelu. Aby to zrobić, należy otworzyć pozycję menu „Konfiguracje” w lewym pasku bocznym serwera, pod zakładką „Ustawienia”.  
![](https://screensaver01.zap-hosting.com/index.php/s/x872MGFpMLbTBj2/preview)

System załaduje teraz wszystkie dostępne konfiguracje i wyświetli je na liście. Wymagana jest odrobina cierpliwości, ponieważ proces ten zwykle trwa kilka sekund. Gdy wszystkie pliki konfiguracyjne zostaną załadowane, należy edytować plik „commands.dat”. Wystarczy kliknąć niebieski przycisk „Otwórz plik”, aby otworzyć go w edytorze webowym.

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)

## Dodawanie adminów

W pliku konfiguracyjnym można teraz wyznaczyć admina lub właściciela. Pamiętaj, że rangę właściciela można przyznać tylko raz!

W tym celu należy w nowej linii wpisać poniższe dla przyznania rangi właściciela:

`owner Steam64IDReplacedHere //<-- Musi zostać zastąpione Twoim własnym Steam64-ID`

Aby dodać administratora, wystarczy zamienić „owner” na „admin”:

`admin Steam64IDReplacedHere //<-- Musi zostać zastąpione Twoim własnym Steam64-ID`

![](https://screensaver01.zap-hosting.com/index.php/s/i6PpdsfK6spBECj/preview)

Po przypisaniu wszystkich rang w pliku konfiguracyjnym, zapisz zmiany klikając „Zapisz”. Teraz możesz zrestartować serwer, a wszyscy gracze wpisani w konfiguracji automatycznie otrzymają swoje rangi.

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂

<InlineVoucher />