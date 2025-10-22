---
id: vserver-windows-nointernet
title: "VPS: Rozwiązywanie problemów z brakiem internetu"
description: "Dowiedz się, jak skutecznie rozwiązać problemy z połączeniem internetowym na swoim Windows VPS → Sprawdź teraz"
sidebar_label: Rozwiązywanie problemów z brakiem internetu
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Przerwane lub wadliwe połączenie internetowe może mieć różne przyczyny, takie jak niepoprawny adres IP, maska podsieci, brama, serwer DNS lub ustawienia zapory sieciowej. W tym poradniku wyjaśnimy, jak możesz zdiagnozować i rozwiązać potencjalne problemy sieciowe.

<YouTube videoId="VfZyNge5ikA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pqpjBWoHGJWztQG/preview" title="Jak naprawić problemy z połączeniem internetowym na Windows VPS" description="Wolisz zobaczyć wszystko w praktyce? Mamy coś dla Ciebie! Zanurz się w naszym wideo, które wszystko dokładnie wyjaśnia. Niezależnie czy się spieszysz, czy po prostu wolisz chłonąć wiedzę w najbardziej angażujący sposób!"/>



<InlineVoucher />

## Dostęp VNC bez internetu

Jeśli nie możesz połączyć się z serwerem przez RDP (Pulpit zdalny) z powodu braku działającego internetu, alternatywą jest użycie konsoli VNC (Virtual Network Computing), dostępnej na naszej stronie.

Ta opcja pozwala na dostęp do serwera i rozwiązanie problemów nawet przy braku połączenia internetowego. Możesz ją znaleźć w panelu webowym serwera w sekcji **Narzędzia->Konsola VNC**.

Na tej stronie możesz aktywować konsolę, klikając przycisk **Otwórz klienta webowego** i logując się swoimi standardowymi danymi.

![](https://screensaver01.zap-hosting.com/index.php/s/L9ZPLHEXbydc6ZS/preview)

## Metody rozwiązywania problemów

### Sprawdź ustawienia adresu IP, maski podsieci i bramy

Pierwszym krokiem jest upewnienie się, że konfiguracja techniczna karty sieciowej na Twoim serwerze jest poprawna, czyli adres IP, maska podsieci i brama.

Zacznij od przejścia do sekcji **Ustawienia->Adresy IP** w panelu webowym serwera, gdzie zobaczysz wszystkie adresy IP, które aktualnie wynajmujesz wraz z usługą.

![](https://screensaver01.zap-hosting.com/index.php/s/8gF7Qsq5k5aYxbq/preview)

Teraz połącz się z serwerem przez RDP lub konsolę VNC, jeśli masz problemy. Wejdź w ustawienia karty sieciowej Windows, przechodząc do: 
```
Ustawienia -> Sieć i Internet -> Zmień opcje karty -> Karta sieciowa
```

Znajdź na liście opcję **Protokół internetowy w wersji 4 (TCP/IPv4)** i wybierz **Właściwości**.

![](https://screensaver01.zap-hosting.com/index.php/s/xYSSa2txkRkM4bx/preview)

#### Konfiguracja karty sieciowej

Porównaj dane w karcie i upewnij się, że są ustawione następująco:
- Adres IP: powinien być taki sam, jak adres IP widoczny na stronie **Adresy IP** w panelu webowym.
- Maska podsieci: zwykle `255.255.255.0`, ponieważ nasza sieć korzysta z klasy C.
- Brama domyślna: powinna być Twoim adresem IP, ale z ostatnim oktetem (`.xxx`) zamienionym na `.1`.

#### Przykładowa konfiguracja

:::info
To jest **przykład**, który ułatwia zrozumienie. Powinieneś zastąpić adres IP swoim **własnym** adresem serwera.
:::

Dla adresu IP `185.223.28.163` konfiguracja powinna wyglądać tak:

| Ustawienie     | Wartość        |
| -------------- | -------------- |
| Adres IP       | 185.223.28.163 |
| Maska podsieci | 255.255.255.0  |
| Brama domyślna | 185.223.28.1   |

![](https://screensaver01.zap-hosting.com/index.php/s/PTjQZc5gqP2okAC/preview)

Po ustawieniu kliknij **Ok**, aby zatwierdzić zmiany. Zalecamy restart serwera, aby zakończyć proces rozwiązywania problemów.



### Ustawienia serwera DNS

Kolejnym krokiem, jeśli nadal masz problemy z internetem, jest sprawdzenie poprawności konfiguracji serwera DNS. Powinieneś zastąpić brakujące lub istniejące wartości DNS znanym, sprawdzonym serwerem.

Polecamy korzystać z serwerów DNS Google lub Cloudflare, które są popularne i niezawodne.

| Dostawca DNS | Wartości serwera DNS                 |
| ------------ | ----------------------------------- |
| Google       | Preferowany: 8.8.8.8 / Zapasowy: 8.8.4.4 |
| Cloudflare   | Preferowany: 1.1.1.1 / Zapasowy: 1.0.0.1 |

![](https://screensaver01.zap-hosting.com/index.php/s/oqcR5BHBKLa3ink/preview)

Po ustawieniu kliknij ponownie **Ok**, aby zatwierdzić zmiany. Również tutaj zalecamy restart serwera, aby zakończyć proces rozwiązywania problemów.

:::tip
Możesz szybko ustawić serwery DNS, otwierając wiersz poleceń (cmd.exe) na serwerze i wykonując poniższe polecenie: 
```
powershell “Get-NetAdapter | Get-NetIPAddress | ForEach-Object { netsh interface ip set dns name=”$($_.InterfaceAlias)“ static 8.8.8.8; netsh interface ip add dns name=”$($_.InterfaceAlias)“ 1.1.1.1 index=2 }”
```
:::



### Ustawienia zapory sieciowej

Ostatnim krokiem jest upewnienie się, że zapora sieciowa Windows jest poprawnie skonfigurowana.

Zalecamy tymczasowe wyłączenie całej zapory Windows, aby sprawdzić, czy problem nadal występuje. Wyszukaj w Windows **Ustawienia zapory Windows Defender** i wybierz opcję **Włącz lub wyłącz zaporę Windows Defender** po lewej stronie.

![](https://screensaver01.zap-hosting.com/index.php/s/bWcPqHcCZ7ajJSA/preview)

Jeśli problem znika po wyłączeniu zapory, prawdopodobną przyczyną jest błędna konfiguracja zapory.

Rozwiązanie problemów z zaporą zależy od konkretnego problemu. Skorzystaj z naszego [poradnika o przekierowaniu portów (zapora)](vserver-windows-port.md), jeśli potrzebujesz pomocy z zarządzaniem regułami zapory.



## Reset konfiguracji sieci

Możesz zresetować konfigurację sieci w panelu administracyjnym VPS, klikając przycisk **Resetuj konfigurację sieci** na stronie ustawień. Podczas tego procesu ustawienia adresu IP, maski podsieci, bramy i serwera DNS zostaną przywrócone do stanu początkowego.

![img](https://screensaver01.zap-hosting.com/index.php/s/YsLZZJZEaf3pemt/preview)


## Podsumowanie
Jeśli wykonałeś wszystkie kroki, połączenie powinno działać ponownie jak zwykle. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />