---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Learn how to use Yet Another Rclone Dashboard as a modern rclone GUI for Linux and Windows, including rclone browser access and daemon setup with rclone rcd. -> Learn more now"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard, `rclone rcd`'yi tarayıcı tabanlı bir arayüzle yönetmek için modern bir web panelidir. Bu rehberde, yazılımın ne işe yaradığını, gereksinimlerini ve Linux veya Windows üzerinde desteklenen kurulum yöntemleriyle nasıl yapılandırılacağını öğreneceksiniz.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Başlamadan önce, sisteminizin temel gereksinimleri karşıladığından ve `rclone`un zaten kurulu olduğundan emin olun.

### Requirements

Proje deposuna göre, Yet Another Rclone Dashboard `rclone rcd` için tasarlanmıştır ve **Rclone `v1.72.0` veya üzeri** sürümü önerir.

| Gereksinim | Detaylar |
|---|---|
| İşletim sistemi | Linux veya Windows |
| Ana bağımlılık | `rclone` |
| Önerilen Rclone sürümü | `v1.72.0` veya üzeri |
| Erişim yöntemi | Web tarayıcısı |
| Varsayılan RC portu | `5572/tcp` |
| Opsiyonel yazılımlar | Kurulumunuza bağlı olarak `Docker`, `Nginx` veya `Caddy` |

### What the dashboard provides

Upstream proje, Yet Another Rclone Dashboard'ı `rclone rcd` için bir ön yüz olarak tanımlar. Mevcut kaynak bilgilerine göre aşağıdaki özellikleri içerir:

| Özellik | Açıklama |
|---|---|
| Çoklu bağlantı profilleri | Farklı `rclone rcd` örneklerine bağlanma |
| Sistem bilgisi | Rclone sistem ve durum bilgilerini görüntüleme |
| Remote yönetimi | Remoteleri inceleme ve Rclone yapılandırmasını içe/dışa aktarma |
| Dosya tarayıcı | Dizinde gezinme ve dosyaları panel üzerinden yönetme |

:::info Rclone Gereksinimi
Bu yazılım bağımsız bir depolama sunucusu değildir. Çalışan bir `rclone` kurulumu olmalı ve `rclone`u daemon modunda `rcd` ile çalıştırmalısınız.
:::

### Download source

Resmi proje kaynağı GitHub'da mevcuttur:

- [Yet Another Rclone Dashboard on GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

Sağlanan kaynak materyal zamanında, en son sürüm `v0.3.8` olup `yet-another-rclone-dashboard-v0.3.8.zip` dosyasını içerir.

## Understand how the dashboard works

Yet Another Rclone Dashboard, `rclone rcd` tarafından sağlanan *Rclone uzaktan kontrol API'sine* bağlanan statik bir web ön yüzüdür. Bu, panelin kendisinin `rclone`un yerini almadığı anlamına gelir. Bunun yerine, tarayıcınızda daha temiz bir `rclone gui` deneyimi sunar.

Pratikte, kullanabileceğiniz birkaç yöntem vardır:

| Yöntem | Kullanım durumu | Notlar |
|---|---|---|
| `--rc-files` | Manuel yerel veya sunucu kurulumu | Çıkarılmış panel dosyalarını doğrudan `rclone rcd` ile sunar |
| `--rc-web-gui` ve fetch URL | Rclone üzerinden otomatik indirme | Rclone'un en son panel sürümünü çekmesini sağlar |
| Reverse proxy | Alan adı tabanlı erişim | Paneli `Nginx` veya `Caddy` ile yayınlamak için kullanışlıdır |
| Harici web sunucusu | Statik dosya barındırma | Ön yüzü ayrı sunar ve `rclone rcd`ye bağlar |

:::note Tarayıcı Tabanlı Erişim
Bu bir web paneli olduğu için, `rclone rcd` çalıştıktan ve doğru yapılandırıldıktan sonra tarayıcınızdan erişeceksiniz.
:::

## Download the dashboard files

Manuel kurulum yöntemini kullanmak istiyorsanız, önce projenin GitHub sürümler sayfasından en son sürüm arşivini indirip sunucunuza veya yerel sisteminize çıkarın.

### Linux example

Mevcut sürüm arşivini `wget` ile indirebilirsiniz:

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
```

Sonra çıkarın:

```bash
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_dashboard_directory]
```

`[your_dashboard_directory]` yerine çıkarılan dosyaları depolamak istediğiniz klasörü yazın, örneğin `/opt/yet-another-rclone-dashboard`.

### Windows example

Windows'ta, GitHub sürüm sayfasından `.zip` arşivini indirip şu gibi bir klasöre çıkarın:

```text
C:\yet-another-rclone-dashboard
```

:::tip Dosyaları Kalıcı Bir Konumda Tutun
Paneli geçici bir klasöre çıkarmayın. `rclone rcd` `--rc-files` yöntemini kullanıyorsanız dosyalara sürekli erişim sağlamalıdır.
:::

## Start Rclone with the dashboard

Dosyalar hazır olduktan sonra `rclone rcd`yi başlatabilir ve paneli erişime açabilirsiniz.

### Method 1: Manual setup with `--rc-files`

Bu yöntem çıkarılmış panel dosyalarını doğrudan kullanır.

#### Linux local example

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Linux server example

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

#### Windows example

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[your_rc_username] `
  --rc-pass=[your_rc_password] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Method 2: Automatic setup with `--rc-web-gui`

Bu yöntem, Rclone'un GitHub sürüm API'sinden paneli otomatik çekmesini sağlar.

#### Local example

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Remote server example

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

:::caution Korumasız RC Arayüzünü Açmayın
`rclone rcd`yi `0.0.0.0` adresine bağlarsanız, servis diğer sistemlerden erişilebilir olabilir. `--rc-user` ve `--rc-pass` kullanın veya doğru yapılandırılmış bir reverse proxy arkasına alın.
:::

## Important Rclone options

Bu paneli kurarken en önemli seçenekler şunlardır:

| Seçenek | Amacı |
|---|---|
| `--rc-files` | Statik panel dosyalarını yerel dizinden sunar |
| `--rc-web-gui` | Rclone'un web GUI çekme mekanizmasını etkinleştirir |
| `--rc-web-fetch-url` | Panel için sürüm API uç noktasını belirtir |
| `--rc-no-auth` | Kimlik doğrulamayı devre dışı bırakır, sadece güvenilen yerel kullanım için uygundur |
| `--rc-user` | RC kullanıcı adını ayarlar |
| `--rc-pass` | RC şifresini ayarlar |
| `--rc-addr` | Dinleme adresi ve portunu tanımlar |
| `--rc-allow-origin` | Belirtilen kaynaktan tarayıcı erişimine izin verir |
| `--rc-web-gui-no-open-browser` | Headless sistemlerde otomatik tarayıcı açmayı engeller |
| `--rc-user-from-header` | Reverse proxy başlığından doğrulanmış kullanıcıyı kabul eder |

### Placeholder values explained

Örneklerde aşağıdaki yer tutucuları kullanın:

| Yer Tutucu | Anlamı |
|---|---|
| `[your_dashboard_directory]` | Çıkarılmış panel dosyalarının bulunduğu klasör |
| `[your_rc_username]` | `rclone rcd` kimlik doğrulama kullanıcı adı |
| `[your_rc_password]` | `rclone rcd` kimlik doğrulama şifresi |
| `[your_server_ip]` | Sunucunuzun genel veya özel IP adresi |

## Configure browser access

`rclone rcd`yi başlattıktan sonra, panel URL'sini tarayıcınızda açın.

### Local access

Servisi aynı makinede yerel olarak başlattıysanız, şu adresi açın:

```text
http://127.0.0.1:5572
```

### Remote access

Servisi uzak bir Linux veya Windows sunucusunda başlatıp dış erişime izin verdiyseniz, şu adresi açın:

```text
http://[your_server_ip]:5572
```

Bir alan adı ve reverse proxy kullanıyorsanız, yapılandırdığınız URL'yi açın, örneğin:

```text
https://[your_domain]
```

:::info Allowed Origin Must Match
`--rc-allow-origin` ile kullanılan değer, tarayıcınızda gerçekten kullandığınız adresle eşleşmelidir. Eşleşmezse, panel doğru bağlanamayabilir.
:::

## Use a reverse proxy

Reverse proxy, daha temiz URL'ler, HTTPS veya ek erişim kontrolü için faydalıdır.

### Nginx example

Aşağıdaki örnek, çıkarılmış statik panel dosyalarını `Nginx` ile sunar:

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

### Caddy example

Aşağıdaki örnek, statik panel dosyalarını `Caddy` ile sunar:

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

:::note Statik Ön Yüz Barındırma
Bu örnekler sadece ön yüz dosyalarını sunar. Panelin erişebileceği çalışan bir `rclone rcd` backend'e ihtiyacınız vardır.
:::

## Advanced authentication with a reverse proxy

Proje, kimlik doğrulamanın harici bir geçit tarafından yapıldığı ve `--rc-user-from-header` ile Rclone'a iletildiği gelişmiş bir kurulum da belgeler.

### Rclone example

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/path/to/extracted/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Caddy reverse proxy example

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

:::caution Gelişmiş Kimlik Doğrulama Dikkatli Test Gerektirir
Bu kurulum, reverse proxy ve kimlik doğrulama geçidinizin doğru başlıkları iletmesine bağlıdır. Başlık eksik veya yanlış yapılandırılmışsa, erişim başarısız olabilir veya beklenmedik davranabilir.
:::

## Verify the installation

Her şey çalışmaya başladıktan sonra, panelin doğru yüklendiğini doğrulayın.

### Basic checks

Aşağıdakileri kontrol edin:

| Kontrol | Beklenen sonuç |
|---|---|
| `rclone rcd` süreci çalışıyor | Konsol veya servis günlüklerinde başlangıç hatası yok |
| `5572` portu dinleniyor | Servis yerel veya uzak erişime açık |
| Tarayıcı yapılandırılan URL'yi açıyor | Yet Another Rclone Dashboard arayüzü yükleniyor |
| Kimlik doğrulama çalışıyor | RC kimlik doğrulama etkinse giriş yapabiliyorsunuz |

### Common issues

| Sorun | Olası neden | Önerilen çözüm |
|---|---|---|
| Panel yüklenmiyor | Yanlış URL veya servis çalışmıyor | `--rc-addr` değerini ve süreç durumunu kontrol edin |
| Tarayıcı bağlantı hataları | Port güvenlik duvarı tarafından engellenmiş | Gerekirse `5572/tcp` için gelen erişime izin verin |
| Giriş başarısız | Yanlış `--rc-user` veya `--rc-pass` | Doğru kimlik bilgileriyle `rclone rcd`yi yeniden başlatın |
| Ön yüz açılıyor ama API çağrıları başarısız | `--rc-allow-origin` uyumsuzluğu | Kaynağı tam tarayıcı URL'si olarak ayarlayın |
| Uzak erişim yok | Servis sadece `127.0.0.1`e bağlı | Uzak erişim için `0.0.0.0:5572` kullanın |

:::danger Korumasız Genel Erişim Tehlikesi
Paneli doğrudan internete kimlik doğrulama veya güvenli reverse proxy olmadan açmayın. Uzaktan `rclone browser` veya `rclone google drive` remote yönetimi yapacaksanız, önce uç noktayı güvenceye alın.
:::

## Additional notes for Linux and Windows

### Linux

Linux, uzun süre çalışan `rclone rcd` servisleri için genellikle en kolay ortamdır. Komutu manuel, terminal multiplexer ile veya sistem tasarımınıza bağlı olarak servis olarak çalıştırabilirsiniz.

### Windows

Windows'ta, `--rc-files` ile kullanılan yolun çıkarılmış panel dizinine işaret ettiğinden ve uzak erişim gerekiyorsa güvenlik duvarının yapılandırılan porta izin verdiğinden emin olun.

### Docker note

Sağlanan kaynak materyal Docker'ı opsiyonel bağımlılık olarak belirtir ancak bu proje için doğrulanmış bir Docker kurulum prosedürü içermez. `rclone docker` iş akışlarını kullanmak istiyorsanız, konteyner kurulumu varsaymadan önce upstream depoyu inceleyin.

## Conclusion

Congratulations, you have successfully set up Yet Another Rclone Dashboard on Linux or Windows. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂