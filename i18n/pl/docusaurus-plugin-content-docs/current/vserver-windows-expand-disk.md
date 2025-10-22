---
id: vserver-windows-expand-disk
title: "VPS: Rozszerzanie dysku (partycji) na Windows Server"
description: "Dowiedz się, jak bezpiecznie rozszerzyć partycję na serwerze Windows, aby efektywnie wykorzystać nową przestrzeń dyskową → Sprawdź teraz"
sidebar_label: Rozszerzanie dysku (partycji)
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

System Windows ma wbudowane narzędzia do zarządzania dyskami i partycjami, które pozwalają łatwo wykonywać różne operacje, takie jak rozszerzanie partycji, dzielenie dysków i inne. Jedną z ważnych funkcji jest możliwość rozszerzania partycji, co jest szczególnie istotne po zwiększeniu pojemności dysku na Twoim serwerze Windows. W tym poradniku pokażemy, jak rozszerzyć partycję na Twoim serwerze Windows.

<InlineVoucher />

## Przygotowanie

Zacznij od połączenia się z serwerem Windows przez RDP. Jeśli potrzebujesz pomocy, zajrzyj do naszego [poradnika Pierwszy dostęp (RDP)](vserver-windows-userdp.md).

Są dwie metody zarządzania dyskami i partycjami: jedna to narzędzie **Zarządzanie dyskami** z GUI, a druga to konsola **diskpart**. Narzędzie **Zarządzanie dyskami** to graficzna wersja diskpart, która pozwala wykonać większość podstawowych operacji, w tym rozszerzanie partycji. Dla zaawansowanych użytkowników `diskpart` jest bardziej rozbudowany i potężny.

## Rozszerzanie partycji

W różnych sytuacjach może być konieczne rozszerzenie istniejącej partycji, aby wykorzystać nową przestrzeń dyskową. Jednym z takich przypadków jest zwiększenie pojemności dysku serwera, która domyślnie nie zostanie przypisana, dopóki nie rozszerzysz głównej partycji.

Polecamy metodę przez narzędzie **Zarządzanie dyskami**, bo jest prostsza, zwłaszcza dla początkujących. Proces jest bezpieczny i nie wpływa na dane.

<Tabs>
<TabItem value="disk-management" label="Przez Zarządzanie dyskami (GUI)" default>

Na początek otwórz narzędzie **Zarządzanie dyskami**. Wyszukaj je w menu start lub otwórz przez uruchamianie (`Windows Key + R`) i wpisz `diskmgmt.msc`, następnie zatwierdź.

![](https://screensaver01.zap-hosting.com/index.php/s/xfMexYdrJMr3L6Y/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/gKjkst3H89knLFa/preview)

Po otwarciu narzędzia kliknij prawym przyciskiem na główną partycję i wybierz **Rozszerz wolumin**, co otworzy nowy kreator.

:::tip
Główny dysk systemowy to zawsze partycja **C:**
:::

![](https://screensaver01.zap-hosting.com/index.php/s/nWMStW6T74SrrRe/preview)

W kreatorze kliknij **Dalej**, co przeniesie Cię do ustawień, gdzie możesz określić, ile przestrzeni chcesz dodać. Domyślnie Windows automatycznie ustawi całą nieprzydzieloną przestrzeń, co jest optymalne.

Możesz więc kliknąć **Dalej** i na końcu **Zakończ**, aby sfinalizować proces.

![](https://screensaver01.zap-hosting.com/index.php/s/MwRFS8eCHoqBSNt/download)

Po zakończeniu proces zostanie odświeżony w Zarządzaniu dyskami z nowym rozmiarem dysku.

![](https://screensaver01.zap-hosting.com/index.php/s/M46ca4FkeG42AZz/preview)

</TabItem>

<TabItem value="diskpart" label="Przez Diskpart (CLI)">

Na początek otwórz wiersz poleceń jako administrator. Wyszukaj go w menu start, kliknij prawym i wybierz **Uruchom jako administrator**.

Wpisz polecenie `diskpart`, aby wejść do narzędzia CLI. Po załadowaniu wpisz `list disk`, aby zobaczyć listę podłączonych dysków.

Następnie wpisz `select disk [numer_dysku]`, zamieniając `[numer_dysku]` na numer dysku, który chcesz rozszerzyć.

:::tip
Główny dysk systemowy to zawsze partycja **C:**
:::

Po wybraniu dysku wpisz `list volume`, aby zobaczyć listę woluminów na tym dysku. Znajdź wolumin, który chcesz rozszerzyć, i wpisz `select volume [numer_woluminu]`, zamieniając `[numer_woluminu]` na odpowiedni numer.

Po wybraniu dysku i woluminu możesz rozszerzyć partycję poleceniem. Możesz rozszerzyć o całą nieprzydzieloną przestrzeń lub określić rozmiar.
```
# Rozszerz o całą nieprzydzieloną przestrzeń
extend

# Rozszerz o konkretny rozmiar (10240 = 10240MB = 10GB)
extend size=10240
```

Po powodzeniu powinieneś zobaczyć zwiększony rozmiar woluminu przy ponownym wyświetleniu listy dysków i w eksploratorze plików. Aby wyjść z CLI, wpisz `quit`.

</TabItem>
</Tabs>

## Podsumowanie

Pomyślnie rozszerzyłeś główną partycję na dysku, aby wykorzystać całą dostępną przestrzeń. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />