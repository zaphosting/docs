---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Learn how to set up Yet Another Rclone Dashboard, a modern rclone gui and rclone browser for Linux and Windows, using rclone rcd and release files from rclone GitHub -> Learn more now"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard, `rclone rcd` için modern bir web panelidir ve dosya gezintisi, uzak bağlantıları görüntüleme ve transfer yönetimi için grafiksel arayüz sunar. Bu rehberde, yazılımın ne işe yaradığını, gereksinimlerini ve Linux veya Windows üzerinde desteklenen kurulum yöntemleriyle nasıl çalıştırılacağını öğreneceksiniz.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Başlamadan önce, Yet Another Rclone Dashboard sadece Rclone uzaktan kontrol daemonu için bir ön yüz olduğundan, çalışan bir [Rclone](https://rclone.org/) kurulumunuzun olması gerekir.

### Gereksinimler

Aşağıdaki gereksinimler mevcut proje bilgileri ve kurulum taslağına dayanmaktadır.

| Gereksinim | Detaylar |
| --- | --- |
| İşletim sistemi | Linux veya Windows |
| Gerekli yazılım | `rclone` |
| Önerilen Rclone sürümü | `v1.72.0` veya sonrası |
| Opsiyonel yazılım | Kurulum yöntemine bağlı olarak `Docker`, `Nginx` veya `Caddy` |
| Varsayılan port | `5572/tcp` |
| İnternet erişimi | Sürüm indirmek veya web fetch yöntemi kullanmak için gerekli |

### Dashboard hangi bileşenlere bağlıdır

Yet Another Rclone Dashboard, Rclone’un yerini almaz. Bunun yerine, Rclone’un *uzaktan kontrol daemonu* modu olan `rclone rcd` ile bağlantı kurar.

| Bileşen | Görev |
| --- | --- |
| Yet Another Rclone Dashboard | Web ön yüzü |
| `rclone rcd` | Arka uç API ve dosya işlemleri |
| Rclone uzak bağlantıları | Google Drive gibi yapılandırılmış bulut depolama bağlantılarınız |

:::info Rclone Gereklidir
Bu dashboard tek başına kullanılamaz. `rclone` kurulu olmalı ve uzaktan kontrol arayüzü etkinleştirilmiş daemon modunda çalıştırılmalıdır.
:::

### Bu rehberde kullanılan yer tutucu değerler

Rehberdeki bazı komutlarda yer tutucular kullanılmıştır. Komutları çalıştırmadan önce bunları kendi değerlerinizle değiştirin.

| Yer Tutucu | Anlamı |
| --- | --- |
| `[your_user]` | Rclone uzaktan kontrol kimlik doğrulama kullanıcı adı |
| `[your_password]` | Rclone uzaktan kontrol kimlik doğrulama şifresi |
| `[your_server_ip]` | Sunucunuzun genel veya özel IP adresi |
| `[your_domain]` | Ters proxy erişimi için kullanılan alan adı |
| `[your_build_path]` | Dashboard dosyalarının açıldığı dizin yolu |

## Mevcut kurulum yöntemleri

Yet Another Rclone Dashboard’u erişim tercihinize göre farklı şekillerde çalıştırabilirsiniz.

| Yöntem | En uygun kullanım | Notlar |
| --- | --- | --- |
| `--rc-files` | Manuel kurulumlar | Çıkarılmış statik build dosyalarını kullanır |
| `--rc-web-gui` ve `--rc-web-fetch-url` | Hızlı kurulum | Rclone’un en son dashboard sürümünü otomatik çekmesini sağlar |
| Nginx veya Caddy gibi web sunucusu | Özel barındırma | Statik ön yüzü ayrı sunar |
| Dış kimlik doğrulamalı ters proxy | Gelişmiş kurulumlar | Merkezi kimlik doğrulama için uygundur |

## Dashboard sürümünü indir

Manuel `--rc-files` yöntemi veya kendi web sunucunuzla ön yüzü sunmak istiyorsanız, önce projenin GitHub sürümlerinden en son sürüm arşivini indirin.

Resmi proje kaynağı: [Yet Another Rclone Dashboard on GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

Referans alınan sürüm verisi zamanında en son sürüm `v0.3.8` ve içinde `yet-another-rclone-dashboard-v0.3.8.zip` dosyası bulunur.

### Linux indirme örneği

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_build_path]
```

### Windows indirme örneği

Windows’ta GitHub sürüm sayfasından `.zip` dosyasını indirip aşağıdaki gibi bir klasöre çıkarabilirsiniz:

```text
C:\yet-another-rclone-dashboard
```

:::note Sürüm Versiyon Bilgisi
Sürüm zamanla değişebilir. Daha yeni bir sürüm varsa, burada verilen örnek sürüm yerine projenin GitHub sayfasındaki güncel sürüm dosyasını kullanın.
:::

## Rclone rc-files ile dashboard’u çalıştır

Ön yüz dosyalarını indirdiyseniz ve çıkardıysanız, bu en doğrudan yöntemdir.

### Linux örneği

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Windows örneği

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Yerel masaüstü örneği

Dashboard’u sadece aynı sistemde yerel olarak kullanmak isterseniz, `127.0.0.1` adresine bağlayabilirsiniz.

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

:::caution Yetkisiz Rclone’u Açmayın
`--rc-no-auth` sadece `127.0.0.1` üzerinde yerel test için kullanılmalıdır. Rclone’u `0.0.0.0` adresine bağlarsanız, mutlaka kimlik doğrulama veya düzgün yapılandırılmış bir ters proxy ile koruyun.
:::

## Rclone web fetch ile dashboard’u çalıştır

Rclone, desteklenen kurulumlarda web GUI’yi otomatik çekebilir ve bu da kurulumu kolaylaştırır.

### Linux örneği

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Windows örneği

```powershell
rclone rcd `
  --rc-web-gui `
  --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Önemli bayrakların açıklaması

| Bayrak | Görev |
| --- | --- |
| `--rc-web-gui` | Rclone’da web GUI desteğini etkinleştirir |
| `--rc-web-fetch-url` | Rclone’u en son sürüm meta verisine yönlendirir |
| `--rc-user` | Giriş kullanıcı adını ayarlar |
| `--rc-pass` | Giriş şifresini ayarlar |
| `--rc-addr` | Dinlenecek IP adresi ve portu belirler |
| `--rc-allow-origin` | Tarayıcı isteklerine izin verilen URL’yi belirtir |
| `--rc-web-gui-no-open-browser` | Otomatik tarayıcı açılmasını engeller |

:::tip Origin Değerini Tam Eşleştirin
`--rc-allow-origin` değerini tarayıcıda kullandığınız tam URL ile, doğru protokol (`http://` veya `https://`) dahil olacak şekilde ayarlayın. Bu, ters proxy kullanırken özellikle önemlidir.
:::

## Dashboard’u web sunucusu ile sunma

Yet Another Rclone Dashboard statik bir web uygulaması olduğundan, Nginx veya Caddy gibi standart bir web sunucusuyla da barındırabilirsiniz.

Bu yöntem, ön yüzü bir port veya alan adı üzerinde sunarken Rclone’u arka planda ayrı çalıştırmak istediğinizde faydalı olabilir.

### Nginx örneği

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_build_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Caddy örneği

```caddy
[your_domain] {
    root * [your_build_path]
    file_server
}
```

### Dikkat edilmesi gerekenler

Ön yüzü ayrı sunarsanız, Rclone arka planda uyumlu `rc` ayarlarıyla çalışmaya devam etmelidir. Ayrıca tarayıcı isteklerinin ön yüz URL’nizden gelmesine izin vermelisiniz.

| Ayar | Örnek |
| --- | --- |
| Ön yüz URL’si | `https://[your_domain]` |
| Rclone bağlama adresi | `127.0.0.1:5572` veya `0.0.0.0:5572` |
| İzin verilen origin | `https://[your_domain]` |

## Gelişmiş kurulum: ters proxy kimlik doğrulaması

Gelişmiş ortamlarda, dashboard’u ters proxy arkasına koyup dış kimlik doğrulama kapısı kullanabilirsiniz. Sağlanan örnek, Rclone’un `--rc-user-from-header` seçeneğini referans alır.

### Rclone örneği

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_build_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Caddy örneği

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

:::info Gelişmiş Kimlik Doğrulama Kurulumu
Bu yöntem ters proxy ve kimlik doğrulama altyapınıza bağlıdır. `caddy-security` gibi araçların tam yapılandırması bu rehberin kapsamı dışındadır, ancak yukarıdaki örnek dashboard’un doğrulanmış kullanıcı başlığı almasını gösterir.
:::

## Erişim ve güvenlik yapılandırması

Dashboard’u kullanmaya başlamadan önce en önemli erişim ayarlarını gözden geçirin.

### Önerilen yapılandırma değerleri

| Seçenek | Öneri |
| --- | --- |
| `--rc-user` | `zaphosting` gibi özel bir kullanıcı adı belirleyin |
| `--rc-pass` | Güçlü bir şifre kullanın |
| `--rc-addr` | Mümkünse ters proxy arkasında `127.0.0.1:5572` kullanın |
| `--rc-allow-origin` | Tarayıcıda kullanılan tam URL ile eşleşsin |
| Güvenlik duvarı | Doğrudan erişim gerekiyorsa sadece `5572/tcp` açın |

### Güvenlik en iyi uygulamaları

- Hizmeti ağ üzerinden açarken kimlik doğrulama kullanın
- Genel erişim için HTTPS destekli ters proxy tercih edin
- Mümkün olduğunca `5572/tcp` doğrudan erişimini sınırlandırın
- Bulut depolama erişimi için Rclone’u güncel tutun (örneğin `rclone google drive`)

:::danger Genel Açık Riskleri
Rclone uzaktan kontrol erişimi güçlü dosya ve uzak yönetim yetenekleri sağlar. Kimlik doğrulama ve uygun ağ kısıtlamaları olmadan genel erişime açmayın.
:::

## Dashboard’u başlat ve doğrula

Seçtiğiniz kurulum tamamlandıktan sonra `rclone rcd`’yi başlatın ve dashboard’u tarayıcınızda açın.

### Erişim örnekleri

| Senaryo | URL |
| --- | --- |
| Yerel erişim | `http://127.0.0.1:5572` |
| Sunucu doğrudan erişimi | `http://[your_server_ip]:5572` |
| Ters proxy erişimi | `https://[your_domain]` |

### Görmeniz gerekenler

Her şey doğru yapılandırıldıysa, Yet Another Rclone Dashboard arayüzü açılır ve şunları yapabilirsiniz:

- Rclone daemonuna bağlanmak
- Yapılandırılmış uzak bağlantıları incelemek
- Dosyalarda gezinti yapmak
- Transferleri görüntülemek
- Ayarları ve sistem bilgilerini kontrol etmek

Sayfa açılmazsa aşağıdakileri kontrol edin:

| Kontrol | Neden önemli |
| --- | --- |
| Rclone işlemi çalışıyor mu | Dashboard arka uç daemonuna ihtiyaç duyar |
| `5572` portu erişilebilir mi | Doğrudan erişim için gereklidir |
| `--rc-allow-origin` doğru mu | Tarayıcı erişim sorunlarını önler |
| Kullanıcı adı ve şifre doğru mu | Kimlik doğrulama için zorunludur |
| Ters proxy başlıkları doğru mu | Gelişmiş kimlik doğrulama için önemlidir |

## Sorun giderme

### Tarayıcı bağlanamıyor

Tarayıcınız dashboard’u açamıyorsa, Rclone’un beklenen adres ve portta dinlediğini doğrulayın.

Linux’ta dinlenen portları şu komutla kontrol edebilirsiniz:

```bash
ss -tulpn | grep 5572
```

Windows’ta ise:

```powershell
netstat -ano | findstr 5572
```

### Kimlik doğrulama başarısız

Giriş yapılamıyorsa:

- `--rc-user` ve `--rc-pass` değerlerini kontrol edin
- Ters proxy’nin gerekli başlıkları kaldırmadığından emin olun
- Uzak veya genel arayüzlerde `--rc-no-auth` kullanmaktan kaçının

### Ön yüz yükleniyor ama işlemler başarısız

Bu genellikle origin veya arka uç iletişim sorununa işaret eder.

Aşağıdaki değerleri dikkatle kontrol edin:

- `--rc-allow-origin`
- `--rc-addr`
- ters proxy hedef adresi
- dashboard’a erişmek için kullanılan tarayıcı URL’si

:::tip Daha Hızlı Teşhis İçin Logları Kullanın
Dashboard beklediğiniz gibi davranmıyorsa, önce Rclone konsol çıktısını inceleyin. Kimlik doğrulama, bağlama ve origin sorunları genellikle hemen orada görünür.
:::

## Yazılım referansı

### Proje detayları

| Öğe | Değer |
| --- | --- |
| İsim | Yet Another Rclone Dashboard |
| Kategori | Ön yüz |
| Kaynak | [GitHub deposu](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Referans sürüm | `v0.3.8` |
| Sürüm dosyası | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Önerilen arka uç | `rclone v1.72.0` veya sonrası |

### Proje sayfasından bilinen fonksiyonlar

Referans alınan depo bilgilerine göre dashboard aşağıdaki alanları destekler:

- birden fazla bağlantı profili
- Rclone sistem bilgisi ve durum özeti
- uzak bağlantı inceleme
- Rclone yapılandırma içe/dışa aktarma
- dosya gezintisi ve filtreleme
- transfer ile ilgili görünümler

:::note Özellik Kullanılabilirliği
Özellik davranışları sürümler arasında değişebilir. Daha yeni sürüm için kesin fonksiyon detayları gerekiyorsa, GitHub’daki proje değişiklik günlüğü ve sürüm notlarını kontrol edin.
:::

## Conclusion

Congratulations, you have successfully set up Yet Another Rclone Dashboard on Linux or Windows. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂