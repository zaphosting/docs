---
id: source-gsltoken
title: Korzystanie z tokenów logowania serwera gier
description: "Dowiedz się, jak tokeny GSL zabezpieczają serwery gier Steam, łącząc bany z kontami, zapewniając bezpieczniejszy i zgodny wynajem serwerów → Sprawdź teraz"
sidebar_label: Token GSL
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ❓ Co to jest token GSL?

Gameserver Login Tokens (GSLT) to procedura wprowadzona przez Steam jako środek bezpieczeństwa. Aby uruchomić serwery gier niektórych gier Steam (głównie gier opartych na Source), konieczne jest wygenerowanie tokena.

<InlineVoucher />

## ❓ Jaki jest cel tokena GSL?

W przeszłości Valve wprowadziło kilka zmian w zasadach dotyczących wynajmu serwerów gier. Nie wszyscy operatorzy serwerów gier przestrzegali tych regulacji. W efekcie adresy IP serwerów gier były blokowane.

Jednak ta metoda nie była skuteczna, ponieważ łatwo można było ją obejść, zmieniając adres IP, a także stanowiła duży problem dla dostawców serwerów gier. Powodem było to, że blokując adres IP, często ucierpieli też inni klienci.

Dlatego wprowadzono ten system, który zamiast blokować adres IP, blokuje token i powiązane z nim konto Steam, uniemożliwiając dalszą obsługę serwera gier.


## ➕ Tworzenie tokena

Aby utworzyć token logowania serwera gier, musisz być zalogowany na stronie Steam. Token można wygenerować tutaj: [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers)



![](https://screensaver01.zap-hosting.com/index.php/s/an5ySHwzSZmEwep/preview)



Po wejściu na stronę zostaniesz poproszony o podanie App ID oraz notatki (dowolnej nazwy, którą chcesz użyć jako opis). App ID zależy od gry. Poniżej znajdziesz najważniejsze App ID:

|              Gra               | App ID |
| :----------------------------: | :----: |
| Counter-Strike: Global Offensive |  730   |
|      Counter-Strike: Source      |  240   |
|         Team Fortress 2          |  440   |
|            Garrys Mod            |  4000  |



Token GSL można ustawić w panelu administracyjnym w ustawieniach.

![](https://screensaver01.zap-hosting.com/index.php/s/jqkbkXG2YQLatw2/preview)


Po wykonaniu tego kroku i restarcie serwera, serwer pojawi się również na publicznej liście serwerów.

## ⁉ Najczęściej zadawane pytania

**Jakie są wymagania wstępne do tokena GSL?**

Konto Steam nie może mieć żadnych ograniczeń, takich jak ban społecznościowy. Dodatkowo, na koncie Steam musi być zarejestrowany ważny numer telefonu.


**Czy mogę używać jednego tokena GSL na wielu serwerach?**

Każdy serwer gier wymaga indywidualnego tokena.


**Czy coś może spowodować zbanowanie mojego tokena GSL?**

Szczególnie w przypadku serwerów CS:GO istnieją pluginy, których nie wolno używać. Oficjalna lista nie została opublikowana. Jednak obejmuje to pluginy zmieniające ekwipunek graczy (skiny broni), rangi lub podobne modyfikacje.


**Co się stanie, jeśli mój token GSL zostanie zbanowany?**

Jeśli token zostanie zbanowany, konto oraz wszystkie powiązane tokeny również zostaną zablokowane. Oznacza to, że serwer gier nie będzie już publicznie dostępny. Konto nie będzie mogło być używane do obsługi kolejnych serwerów gier w przyszłości. Mimo to konto Steam nadal można używać do grania. Nie przewiduje się żadnych dalszych kar w tym zakresie.

<InlineVoucher />