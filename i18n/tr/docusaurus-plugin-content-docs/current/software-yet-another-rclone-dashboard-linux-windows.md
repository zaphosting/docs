---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Yazılım - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Linux ve Windows sistemler için modern bir rclone gui ve rclone tarayıcısı olarak Yet Another Rclone Dashboard nasıl kurulur öğrenin. -> Hemen daha fazlasını keşfedin"
sidebar_label: Yazılım - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Giriş

Yet Another Rclone Dashboard, `rclone rcd` için modern bir web panelidir ve dosyaları gözden geçirmenize, uzak depoları incelemenize ve Rclone kurulumunuzu yönetmenize olanak tanıyan grafiksel bir arayüz sunar. Bu rehberde, Linux veya Windows üzerinde nasıl kurulum yapacağınızı ve mevcut Rclone daemon’unuza güvenli şekilde nasıl bağlanacağınızı öğreneceksiniz.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Hazırlık

Başlamadan önce, sisteminizin temel gereksinimleri karşıladığından ve Rclone’un zaten kurulu olduğundan emin olun.

### Gereksinimler

| Gereksinim | Detaylar |
|---|---|
| İşletim sistemi | Linux veya Windows |
| Rclone sürümü | `v1.72.0` veya daha yeni önerilir |
| Erişim yöntemi | Yerel konsol, SSH veya RDP |
| Ağ | Tarayıcınızdan panel URL’sine erişim |
| Varsayılan port | `5572/tcp` |

### Öncelikle bilmeniz gerekenler

Yet Another Rclone Dashboard bağımsız bir depolama servisi değildir. Bu, Rclone’un uzaktan kontrol daemon modu olan `rclone rcd` için bir ön yüzdür. Bu nedenle, panelin yüklenip arka uçla iletişim kurabilmesi için `rclone rcd`’yi doğru web seçenekleriyle başlatmanız gerekir.

:::info Rclone gereklidir
Bu paneli kullanmadan önce çalışan bir [Rclone](https://rclone.org/) kurulumunuzun olması gerekir. Eğer Rclone henüz kurulu değilse, önce kurulum ve yapılandırmasını yapın.
:::

### Önerilen hazırlık kontrol listesi

| Görev | Neden önemli |
|---|---|
| Rclone’u kurun | `rclone rcd`’yi çalıştırmak için gerekli |
| En az bir uzak depo yapılandırın | Örneğin `rclone google drive` gibi bulut depolamaları gezmek için gerekli |
| Gerekli portu açın veya yönlendirin | Uzaktan tarayıcı erişimi için gerekli |
| Yerel veya uzaktan erişime karar verin | Kimlik doğrulama gerekip gerekmediğini belirler |

## Panelin nasıl çalıştığını anlamak

Yet Another Rclone Dashboard, Rclone uzaktan kontrol API’sine bağlanan statik bir web uygulamasıdır. Panel dosyalarını doğrudan Rclone üzerinden sunabilir veya ön yüzü Nginx veya Caddy gibi bir web sunucusuyla ayrı olarak barındırabilirsiniz.

### Ana özellikler

Yayınlanan proje bilgilerine göre panel aşağıdaki işlevleri sunabilir:

| Özellik | Açıklama |
|---|---|
| Çoklu bağlantı profilleri | Farklı `rclone rcd` örneklerine bağlanma |
| Sistem bilgisi | Rclone durumu ve ortam detaylarını görüntüleme |
| Uzak depo inceleme | Mevcut uzak depoları ve yapılandırma verilerini gözden geçirme |
| Dosya tarayıcı | Dizini gezme ve dosya yönetimi |
| Medya önizleme | Desteklenen içeriklerin önizlemesi |
| Transfer görünümü | Transfer etkinliğini izleme |
| Ayarlar arayüzü | Panel ile ilgili seçenekleri ayarlama |

### Bu panel ne zaman kullanılır?

Bu proje, sadece terminalde çalışmak yerine hafif bir `rclone gui` veya `rclone browser` isteyenler için faydalıdır. Özellikle VPS, dedicated server veya yerel Windows sistemden bulut uzak depolarını yönetirken işe yarar.

## Kurulum yöntemleri

Yet Another Rclone Dashboard’u farklı şekillerde kurabilirsiniz. Doğru seçenek, en basit kurulum, manuel yönetilen kurulum veya hizmet önünde ters proxy kullanmak isteyip istemediğinize bağlıdır.

### Yöntem 1: Paneli yerel dosyalarla sunmak

Bu yöntem, panelin çıkarılmış sürümünü Rclone’un `--rc-files` seçeneği ile kullanır.

#### Sürümü indirin

Projenin GitHub sürümler sayfasından en son sürüm arşivini indirin:

- GitHub projesi: [Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard)
- Sağlanan kaynak materyalde doğrulanmış en son sürüm: `v0.3.8`
- Sürüm arşivi: `yet-another-rclone-dashboard-v0.3.8.zip`

Arşivi istediğiniz bir konuma çıkarın.

Örnek konumlar:

| Platform | Örnek yol |
|---|---|
| Linux | `/opt/yet-another-rclone-dashboard` |
| Windows | `C:\yet-another-rclone-dashboard` |

#### Linux’ta Rclone’u başlatın

Paneli aynı makinede yerel olarak çalıştırıyor ve sadece yerel tarayıcı erişimi istiyorsanız, `127.0.0.1` adresine bağlayabilirsiniz.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

Başka bir cihazdan uzaktan erişmek istiyorsanız, kimlik doğrulama kullanın ve tüm arayüzlerde dinleyin.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

#### Windows’ta Rclone’u başlatın

`Command Prompt` veya `PowerShell` açın ve şu komutu çalıştırın:

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[your_rc_username] `
  --rc-pass=[your_rc_password] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

Yer tutucuları kendi değerlerinizle değiştirin:

| Yer Tutucu | Anlamı |
|---|---|
| `[your_rc_username]` | Rclone API’sine giriş için kullanılan kullanıcı adı |
| `[your_rc_password]` | Rclone API’sini koruyan parola |
| `[your_server_ip]` | Panele erişmek için kullandığınız genel veya özel IP adresi |

:::caution Kimlik doğrulamasız Rclone API’si açmayın
İnternet erişimine açık bir sunucuda `--rc-no-auth` ile `0.0.0.0:5572` kullanmayın. Bu, Rclone kontrol arayüzünüzü korumasız şekilde açar.
:::

### Yöntem 2: Rclone’un WebGUI fetcher’ını kullanmak

Bu yöntem, panel dosyalarını manuel indirmek yerine Rclone’un otomatik olarak çekmesini sağlar. Hızlı kurulum için işleri kolaylaştırabilir.

#### Yerel erişim örneği

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Uzaktan erişim örneği

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::note Otomatik çekme davranışı
Rclone’un çektiği web GUI varlıklarının tam depolama yolu Rclone ortamınıza bağlıdır. Dosyalar ve güncellemeler üzerinde tam kontrol istiyorsanız, manuel `--rc-files` yöntemi genellikle daha kolay yönetilir.
:::

### Yöntem 3: Ön yüzü bir web sunucusuyla sunmak

Proje statik bir web uygulaması olduğu için, ön yüzü ayrı bir web sunucusunda barındırabilir ve `rclone rcd`’yi arka planda çalıştırmaya devam edebilirsiniz.

#### Nginx örneği

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root /path/to/extracted/build;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

#### Caddy örneği

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

Bu yöntem, zaten bir ters proxy yığını kullanıyorsanız ve paneli özel bir alan adından sunmak istiyorsanız faydalı olabilir.

:::tip Ters proxy en iyi uygulaması
Bir alan adı veya ters proxy kullanıyorsanız, `--rc-allow-origin` değerini tarayıcınızda açtığınız tam URL olarak ayarlayın, örneğin `https://[your_domain]`.
:::

### Yöntem 4: Harici kimlik doğrulamalı gelişmiş ters proxy

Gelişmiş bir kurulumda, harici bir kimlik doğrulama geçidi kullanabilir ve doğrulanmış kullanıcıyı bir başlık aracılığıyla Rclone’a iletebilirsiniz. Bu, deneyimli kullanıcılar içindir.

#### Rclone örneği

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/path/to/extracted/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

#### Caddy örneği

```caddy
@rclone host [your_domain]
handle @rclone {
        authorize with admins_policy
        reverse_proxy 127.0.0.1:5572 {
                header_up X-Remote-User {http.auth.user.sub}
                header_up -Authorization
        }
}
```

:::danger Gelişmiş kimlik doğrulama kurulumu
Başlık tabanlı kimlik doğrulama yalnızca güvenilir bir ters proxy arkasında kullanılmalıdır. Yanlış yapılandırılırsa, yetkisiz erişime izin verebilir.
:::

## Önemli Rclone seçenekleri

Yet Another Rclone Dashboard kurulumunda en çok kullanılan seçenekler şunlardır:

| Seçenek | Amacı |
|---|---|
| `--rc-files` | Çıkarılmış panel dosyalarını Rclone üzerinden sunar |
| `--rc-web-gui` | Rclone üzerinden web GUI desteğini etkinleştirir |
| `--rc-web-fetch-url` | GUI sürüm meta verilerini uzaktan kaynaktan çeker |
| `--rc-user` | API kullanıcı adını belirler |
| `--rc-pass` | API şifresini belirler |
| `--rc-no-auth` | Kimlik doğrulamayı devre dışı bırakır |
| `--rc-addr` | Dinleme adresi ve portunu tanımlar |
| `--rc-allow-origin` | Belirtilen kaynaktan tarayıcı erişimine izin verir |
| `--rc-web-gui-no-open-browser` | Otomatik tarayıcı açmayı engeller |
| `--rc-user-from-header` | Ters proxy başlığından doğrulanmış kullanıcıyı kabul eder |

## Yapılandırma rehberi

Kurulum yöntemini seçtikten sonra, ilk kullanımdan önce temel yapılandırma değerlerini gözden geçirin.

### Kimlik doğrulama ayarları

Panel sadece kendi makinenizde yerel kullanılıyorsa, kimlik doğrulamasız yerel erişim kabul edilebilir. Herhangi bir uzaktan veya genel erişim için mutlaka kimlik doğrulama kullanmalısınız.

| Erişim türü | Önerilen ayar |
|---|---|
| Sadece yerel | `127.0.0.1` ve isteğe bağlı `--rc-no-auth` |
| LAN veya internet erişimi | `0.0.0.0` ile `--rc-user` ve `--rc-pass` |
| Alan adı ile ters proxy | `127.0.0.1` veya özel bağlama + proxy kimlik doğrulaması |

### İzin verilen kaynak (allowed origin)

`--rc-allow-origin` değeri, tarayıcınızın paneli yüklediği URL ile eşleşmelidir.

Örnekler:

| Erişim URL’si | Eşleşen `--rc-allow-origin` |
|---|---|
| `http://127.0.0.1:5572` | `http://127.0.0.1:5572` |
| `http://[your_server_ip]:5572` | `http://[your_server_ip]:5572` |
| `https://[your_domain]` | `https://[your_domain]` |

Bu değer eşleşmezse, tarayıcı istekleri engelleyebilir ve panel düzgün yüklenmeyebilir.

## Paneli başlatma ve doğrulama

Komutunuz çalışmaya başladıktan sonra, yapılandırdığınız adresi tarayıcınızda açın.

### Ne beklemelisiniz

Kurulum doğruysa, Yet Another Rclone Dashboard arayüzünü görmeli ve yapılandırdığınız Rclone daemon’una bağlanabilmelisiniz.

Tipik örnekler:

| Senaryo | URL |
|---|---|
| Yerel Linux veya Windows erişimi | `http://127.0.0.1:5572` |
| Uzaktan IP tabanlı erişim | `http://[your_server_ip]:5572` |
| Ters proxy erişimi | `https://[your_domain]` |

### Temel doğrulama adımları

1. Seçtiğiniz yöntemle `rclone rcd`’yi başlatın.
2. Panel URL’sini tarayıcınızda açın.
3. Kimlik doğrulama etkinse giriş yapın.
4. Uzak depoların, dosya tarayıcı fonksiyonlarının veya durum bilgilerinin göründüğünü doğrulayın.
5. Basit bir okuma işlemi, örneğin bir dizini açmayı test edin.

## Sorun giderme

Panel yüklenmez veya doğru bağlanmazsa, aşağıdaki yaygın nedenleri kontrol edin.

### Bağlantı reddedildi

Bağlantı reddedildi hatası alırsanız, şunları kontrol edin:

- `rclone rcd` gerçekten çalışıyor mu
- Doğru port `5572` kullanılıyor mu
- Hizmet beklenen arayüzde dinliyor mu
- Gerekirse güvenlik duvarı gelen erişime izin veriyor mu

### Tarayıcı kaynak veya giriş sorunları

Sayfa yükleniyor ama API istekleri başarısız oluyorsa:

- `--rc-allow-origin` değerini doğrulayın
- Tarayıcı URL’sinin izin verilen kaynakla tam eşleştiğinden emin olun
- `--rc-user` ve `--rc-pass` değerlerini kontrol edin
- Ters proxy istekleri doğru şekilde yönlendiriyor mu kontrol edin

### Dosya yolu sorunları

`--rc-files` kullanıyorsanız ve arayüz görünmüyorsa:

- Çıkarılmış panel dosyalarının doğru dizinde olduğundan emin olun
- Linux veya Windows için yol sözdizimini doğrulayın
- Arşiv içeriğinin sadece indirilmediğinden, çıkarıldığından emin olun

:::tip Rclone konsol çıktısını kontrol edin
Rclone genellikle terminalde faydalı başlangıç ve hata bilgileri gösterir. Panel, `rclone download` veya uzak tarayıcı fonksiyonları beklediğiniz gibi çalışmıyorsa önce bu çıktıyı inceleyin.
:::

## Güvenlik önerileri

Rclone’u kontrol eden bir panel, yapılandırılmış uzak depolara ve dosya işlemlerine erişebilir, bu yüzden güvenlik önemlidir.

| Öneri | Sebep |
|---|---|
| Uzaktan erişim için kimlik doğrulama kullanın | Rclone API’sini korur |
| Mümkünse `127.0.0.1` adresine bağlayın | Açıklığı azaltır |
| Ters proxy arkasında HTTPS kullanın | Kimlik bilgilerini korur |
| Güvenlik duvarı açıklığını sınırlandırın | Saldırı yüzeyini azaltır |
| Güçlü kimlik bilgileri kullanın | Yetkisiz erişimi engeller |

:::caution Hassas uzak depolar
Rclone kurulumunuz Google Drive gibi bulut depolamaları içeriyorsa, paneli güvensiz şekilde açmak bu uzak depolara ve verilere erişimi de açabilir.
:::

## Ek proje bilgileri

Proje GitHub’da yayınlanmıştır ve 10 Nisan 2026’da Self-Host Weekly’de yer almıştır.

| Öğe | Değer |
|---|---|
| Proje adı | Yet Another Rclone Dashboard |
| Kategori | Ön yüz (Frontend) |
| Kaynak | [GitHub deposu](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Haftalık özellik | [Self-Host Weekly (10 Nisan 2026)](https://selfh.st/weekly/2026-04-10/) |
| Kaynak materyalde doğrulanmış sürüm |