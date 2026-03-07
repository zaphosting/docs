---
id: 7d2d-crossplay
title: "7 Days to Die: Włącz Crossplay dla graczy z konsol i PC"
description: "Dowiedz się, jak skonfigurować swój serwer gier 7 Days to Die, aby wspierał crossplay między graczami na PC i konsolach → Sprawdź teraz"
sidebar_label: Włącz Crossplay
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W nowszych wersjach **7 Days to Die** crossplay pozwala graczom z **PC oraz obsługiwanych platform konsolowych** dołączać do tego samego serwera. Dzięki temu społeczności mogą grać razem, niezależnie od używanej platformy.

Aby crossplay był możliwy, trzeba odpowiednio skonfigurować serwer. Te ustawienia zapewniają kompatybilność serwera z połączeniami z konsol oraz poprawną rejestrację przez Epic Online Services.

<InlineVoucher />



## Konfiguracja

Konfiguracja crossplay znajduje się w pliku `serverconfig-zap.xml`. Aby go edytować, otwórz swój **panel administracyjny serwera gier** i przejdź do **Konfiguracje**. Znajdź i otwórz plik konfiguracyjny `serverconfig-zap.xml`.

W pliku upewnij się, że poniższe wartości są ustawione poprawnie:

```
<property name="ServerMaxPlayerCount" value="8"/> 
<property name="ServerAllowCrossplay" value="true"/> 
<property name="EACEnabled" value="true"/> 
<property name="IgnoreEOSSanctions" value="false"/> 
```

Te parametry są niezbędne do działania crossplay. `ServerMaxPlayerCount` nie może przekraczać **8 graczy**, ponieważ crossplay na konsolach obsługuje maksymalnie ośmiu uczestników. Opcja `ServerAllowCrossplay` musi być włączona, aby gracze z konsol mogli dołączyć do serwera.

Dodatkowo `EACEnabled` musi pozostać aktywne, ponieważ crossplay korzysta z **Epic Online Services i Easy Anti-Cheat** do uwierzytelniania i matchmakingu. Wartość `IgnoreEOSSanctions` musi być ustawiona na `false`, aby ograniczenia EOS były prawidłowo egzekwowane podczas sesji cross-platformowych.

Po zmianie ustawień zapisz plik i **zrestartuj serwer**, aby nowe ustawienia zaczęły działać.



## Ważne uwagi

Wsparcie dla crossplay wymaga, aby wszyscy gracze mieli kompatybilną wersję gry. Serwery korzystające z nieobsługiwanych modyfikacji lub mocno zmodyfikowanych konfiguracji mogą uniemożliwić dołączenie graczom z konsol. Jeśli gracze z konsol nie mogą znaleźć lub dołączyć do serwera, sprawdź poprawność ustawień crossplay oraz czy serwer działa na najnowszej wspieranej wersji.



## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś swój **serwer gier 7 Days to Die pod kątem crossplay**, dzięki czemu zarówno gracze z PC, jak i konsol mogą wspólnie grać w tym samym świecie. Przy poprawnych ustawieniach serwera Twoja społeczność może grać razem na różnych platformach.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />