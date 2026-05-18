---
id: webspace-plesk-ssl
title: "Hosting: Jak utworzyć certyfikat SSL w Plesk"
description: "Dowiedz się, jak zabezpieczyć swoją stronę certyfikatem SSL w Plesk i włączyć HTTPS dla szyfrowanych połączeń."
sidebar_label: Utwórz certyfikat SSL
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Wprowadzenie

Certyfikat SSL szyfruje połączenie między Twoją stroną a jej odwiedzającymi. Po włączeniu HTTPS, przeglądarki nawiązują bezpieczne połączenie i pokazują ikonę kłódki w pasku adresu. To chroni wrażliwe dane, zwiększa zaufanie i zapobiega oznaczaniu Twojej strony jako niezabezpieczonej.

<InlineVoucher />

## Zabezpieczenie głównej domeny

Gdy domena jest po raz pierwszy dodana w Plesk, jest dostępna przez HTTP i nie jest szyfrowana. W panelu Plesk widać, że nie przypisano jeszcze certyfikatu. Jeśli w tym momencie otworzysz domenę w przeglądarce, zwykle będzie oznaczona jako niezabezpieczona:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Aby aktywować szyfrowanie, otwórz domenę w panelu Plesk i przejdź do **Certyfikaty SSL/TLS**. Otworzy się odpowiednie menu:

![img](https://screensaver01.zap-hosting.com/index.php/s/8rSr7Jt3DsjDzBY/download)

Stąd możesz zamówić darmowy certyfikat Let's Encrypt. Podczas zamawiania musisz podać ważny adres e-mail i wybrać nazwy domen, które mają być zabezpieczone. W większości przypadków wybierane są zarówno domena główna, jak i subdomena www, o ile wpis www istnieje w konfiguracji DNS:

![img](https://screensaver01.zap-hosting.com/index.php/s/LTFN73ekPjtikwp/preview)

Po potwierdzeniu zamówienia klikając **Pobierz za darmo**, Plesk komunikuje się z Let's Encrypt i automatycznie wydaje certyfikat. Po pomyślnym utworzeniu certyfikatu, HTTPS powinno być wymuszone przez aktywację stałego przekierowania z HTTP na HTTPS w ustawieniach hostingu:

![img](https://screensaver01.zap-hosting.com/index.php/s/BN7AMzG6MyMKb38/preview)

Po aktywacji wszyscy odwiedzający są automatycznie przekierowywani na szyfrowaną wersję HTTPS Twojej strony. Instalację możesz zweryfikować, otwierając domenę z https w przeglądarce.



## Zabezpieczenie wszystkich subdomen certyfikatem Wildcard

Jeśli używasz lub planujesz wiele subdomen, certyfikat wildcard to wygodniejsze rozwiązanie. Zabezpiecza domenę główną oraz wszystkie istniejące i przyszłe subdomeny. Aby zamówić certyfikat wildcard, ponownie otwórz menu **Certyfikaty SSL/TLS**:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Wybierz opcję odnowienia lub zamówienia certyfikatu Let's Encrypt. Włącz opcję zabezpieczenia domeny wildcard:

![img](https://screensaver01.zap-hosting.com/index.php/s/ZMcdJk9wCzifBmq/preview)

Po potwierdzeniu zamówienia Plesk wyświetli niebieskie pole informacyjne z rekordem DNS TXT, który musisz utworzyć:

![img](https://screensaver01.zap-hosting.com/index.php/s/wnbNfKeTMsCdsy9/preview)

Ten rekord TXT musi zostać dodany do strefy DNS Twojej domeny dokładnie tak, jak podano. Potwierdza on własność domeny i pozwala Let's Encrypt zweryfikować zamówienie. Rekord DNS będzie wyglądał podobnie do poniższego przykładu:

![img](https://screensaver01.zap-hosting.com/index.php/s/tDtDaERR7twzaMr/preview)

:::warning Opóźnienie propagacji DNS
Propagacja DNS może potrwać do 24 godzin, zanim rekord TXT będzie dostępny globalnie. W tym czasie weryfikacja może się nie powieść, ponieważ niektóre serwery DNS zwracają jeszcze stare dane. Jeśli tak się stanie, poczekaj aż rekord się w pełni rozpowszechni, a następnie spróbuj ponownie zweryfikować.
:::



Aby upewnić się, że rekord TXT został poprawnie rozpowszechniony i jest publicznie dostępny, możesz go zweryfikować za pomocą zewnętrznego narzędzia do sprawdzania DNS, np. MXToolbox SuperTool:

https://mxtoolbox.com/SuperTool.aspx

Otwórz stronę i wybierz opcję **TXT Lookup**. Wpisz pełną nazwę hosta podaną przez Plesk, zwykle w formacie `_acme-challenge.twojadomena.com`, i rozpocznij wyszukiwanie. Narzędzie zapyta publiczne serwery DNS i pokaże aktualnie widoczne rekordy TXT.

Jeśli wyświetli się poprawna wartość weryfikacyjna dokładnie taka, jak w Plesk, rekord DNS został poprawnie rozpowszechniony i Let's Encrypt może zweryfikować własność domeny. Jeśli nie ma wyniku lub wartość się różni, propagacja DNS może nadal trwać. W takim wypadku poczekaj i powtórz wyszukiwanie po jakimś czasie, aż poprawny wpis będzie widoczny globalnie.

![img](https://screensaver01.zap-hosting.com/index.php/s/iFP5P8SY6oSXQBW/download)

Gdy rekord będzie widoczny, wróć do Plesk i ponownie wywołaj weryfikację. Jeśli się powiedzie, certyfikat wildcard zostanie wydany i oznaczony jako zabezpieczony. Od tego momentu każda nowo utworzona subdomena będzie automatycznie chroniona.



## Podsumowanie

Gratulacje! Twoja strona jest teraz skutecznie zabezpieczona szyfrowaniem SSL. Wszystkie dane przesyłane między serwerem a odwiedzającymi są chronione, przeglądarki traktują Twoją domenę jako zaufaną, a HTTPS jest wymuszane automatycznie.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />