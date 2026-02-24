---
id: humanitz-airdrop-management
title: "HumanitZ: Zarządzanie Airdropami"
description: "Dowiedz się, jak włączyć, wyłączyć i skonfigurować airdropy na swoim serwerze HumanitZ → Sprawdź teraz"
sidebar_label: "Zarządzanie Airdropami"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

Airdropy w HumanitZ dostarczają cenne łupy i mogą znacząco wpłynąć na ruch graczy, strefy konfliktów oraz ogólną dynamikę serwera. W zależności od stylu gry na Twoim serwerze, możesz chcieć częstsze zrzuty zaopatrzenia, aby zwiększyć akcję, lub całkowicie je wyłączyć, by uzyskać bardziej wymagające, skąpe w zasoby doświadczenie survivalowe.

<InlineVoucher />

## Konfiguracja

Ustawienia airdropów kontrolujesz w pliku `GameServerSettings.ini`. Możesz uzyskać do niego dostęp w panelu administracyjnym swojego serwera w zakładce **Konfiguracje**. W pliku konfiguracyjnym znajdź następujące parametry:

```
; Ustaw, czy airdropy są włączone czy nie
AirDrop=true
; Ile dni w grze musi upłynąć między kolejnymi airdropami
AirDropInterval=1
```

Konfiguracja działa następująco:

- `AirDrop=true` – Włącza airdropy  
- `AirDrop=false` – Całkowicie wyłącza airdropy  
- `AirDropInterval` – Określa, ile dni w grze musi minąć między kolejnymi airdropami  

Na przykład, jeśli chcesz, aby airdropy pojawiały się co trzy dni w grze:

```
AirDrop=true
AirDropInterval=3
```

Jeśli chcesz całkowicie wyłączyć airdropy:

```
AirDrop=false
```

Po edycji pliku zapisz zmiany i zrestartuj serwer, aby nowe ustawienia zaczęły działać.

## Podsumowanie

Gratulacje! Modyfikując wartości `AirDrop` i `AirDropInterval` w pliku `GameServerSettings.ini`, skutecznie skonfigurowałeś zachowanie airdropów na swoim serwerze HumanitZ. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />