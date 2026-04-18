---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Learn how to use Yet Another Rclone Dashboard as an rclone gui for Linux and Windows, including rclone download and browser-based dashboard access -> Learn more now"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard, `rclone rcd`'yi tarayıcı tabanlı bir arayüzle yönetmek için modern bir web panelidir. Bu rehberde, yazılımın ne işe yaradığını, gereksinimlerini ve Linux veya Windows üzerinde Rclone ile nasıl kuracağınızı öğreneceksiniz.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Başlamadan önce, [Rclone](https://rclone.org/) kurulumunuzun çalışır durumda olması gerekir çünkü bu panel, bağımsız bir backend olarak değil, `rclone rcd`'ye bağlanmak için tasarlanmıştır.

### Requirements

Aşağıdaki gereksinimler, mevcut proje bilgileri ve sağlanan kurulum taslağına dayanmaktadır.

| Gereksinim | Detaylar |
| --- | --- |
| İşletim sistemi | Linux veya Windows |
| Gerekli yazılım | `rclone` |
| Önerilen Rclone sürümü | `v1.72.0` veya sonrası |
| Opsiyonel yazılım | Statik dosyaları ayrı sunmak isterseniz `Nginx`, `Caddy` veya başka bir web sunucusu |
| Opsiyonel derleme bağımlılığı | Projeyi kaynaktan derlemeyi planlıyorsanız `Node.js` |
| Varsayılan RC portu | `5572/tcp` |

:::info Rclone Gereklidir
Yet Another Rclone Dashboard, `rclone rcd` için bir ön yüzdür. Çalışan bir Rclone uzaktan kontrol örneği olmadan kullanamazsınız.
:::

### Access and network considerations

Dashboard'u uzaktan açmak istiyorsanız, Rclone'u çalıştırdığınız sistemin yapılandırılan porta erişime izin verdiğinden emin olun.

| Senaryo | Önerilen bağlanma adresi | Örnek URL |
| --- | --- | --- |
| Sadece yerel erişim | `127.0.0.1:5572` | `http://127.0.0.1:5572` |
| Ağ içinde uzaktan erişim | `0.0.0.0:5572` | `http://[your_server_ip]:5572` |
| Reverse proxy kurulumu | `127.0.0.1:5572` | `https://[your_domain]` |

:::caution Paneli Güvenli Şekilde Açın
Rclone'u `0.0.0.0` adresine bağlarsanız, servis diğer sistemlerden erişilebilir hale gelir. Kimlik doğrulama kullanmalı ve mümkünse HTTPS destekli bir reverse proxy ile korumalısınız.
:::

## About Yet Another Rclone Dashboard

Yet Another Rclone Dashboard, Rclone daemon moduna web tabanlı bir ön yüz sağlar. Proje deposuna göre, `rclone rcd`'ye bağlanmayı, birden fazla bağlantı profili yönetimini, uzak depoların incelenmesini, yapılandırma içe/dışa aktarmayı, dosya gezintisini ve transfer yönetimini destekler.

Bu sayede, doğrudan komut satırı kullanmak yerine yaygın görevler için bir `rclone gui` veya `rclone browser` olarak kullanabilirsiniz.

### Project details

| Öğe | Değer |
| --- | --- |
| İsim | Yet Another Rclone Dashboard |
| Kategori | Ön yüz |
| Kaynak | [GitHub repository](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Son referans sürüm | `v0.3.8` |
| Sürüm dosyası | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Önerilen backend | `rclone rcd` |

### Supported usage model

Proje bilgileri, panelin Rclone'un uzaktan kontrol modu ile çalışmak üzere tasarlandığını doğrular. İşletim sistemi bazlı paketleme davranışı tam olarak belgelenmemiştir, bu yüzden bu rehber depo taslak içeriğinden doğrulanmış dağıtım yöntemlerine odaklanır.

## Installation methods

Yet Another Rclone Dashboard'u erişim tercihinize göre farklı şekillerde kurabilirsiniz. En doğrudan yöntem, Rclone'un panel dosyalarını kendisinin sunmasıdır.

### Method 1: Serve the dashboard with `--rc-files`

Bu yöntem, çıkarılmış panel dosyalarını kullanır ve `rclone rcd`'ye bunları doğrudan sunmasını söyler.

#### Download the release files

Projenin GitHub sürümler sayfasından en son sürüm arşivini indirin:

- [Yet Another Rclone Dashboard releases](https://github.com/outlook84/yet-another-rclone-dashboard/releases)

Referans verilen zamanda en son sürüm dosyası:

- `yet-another-rclone-dashboard-v0.3.8.zip`

Arşivi sunucunuzda veya yerel sisteminizde bir klasöre çıkarın.

:::note Yer Tutucu Yolları Değiştirin
Aşağıdaki komutlarda `[your_dashboard_path]` yerine çıkarılan panel dosyalarının bulunduğu klasör yolunu yazın.
:::

#### Linux örneği

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Windows örneği

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Uzaktan sunucu örneği, kimlik doğrulamalı

Başsız bir sunucu için, kimlik doğrulama kullanın ve sadece gerekirse dışarıdan erişilebilir bir adrese bağlayın.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Method 2: Use Rclone's web GUI fetcher

Sağlanan kurulum taslağı, Rclone'un dahili web GUI fetcher'ını da referans verir. Bu, panel dosyalarını otomatik indirip sunabilir, manuel çıkarma adımına gerek kalmaz.

#### Linux örneği

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Windows örneği

```powershell
rclone rcd --rc-web-gui --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Uzaktan sunucu örneği

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Güncellemeler İçin Fetcher'ı Kullanın
Panel dosyaları için daha kolay bir `rclone download` iş akışı istiyorsanız, fetcher tabanlı yöntem sürümleri manuel indirmekten daha pratik olabilir.
:::

### Method 3: Serve the static files with a web server

Yet Another Rclone Dashboard statik bir web uygulaması olduğu için, ön yüzü ayrı olarak standart bir web sunucusu ile de sunabilirsiniz. Örneğin [Nginx](https://nginx.org/) veya [Caddy](https://caddyserver.com/).

Bu kurulumda, Rclone backend'i `rclone rcd` ile sağlar, web sunucunuz ise ön yüz dosyalarını sunar.

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

:::note Ön Yüz ve Arka Uç Ayrı
Ayrı bir web sunucusu kullanıyorsanız, ön yüzün Rclone RC uç noktasına erişebildiğinden emin olun. Bu durumda `--rc-allow-origin` değeri özellikle önem kazanır.
:::

## Important Rclone options

Yet Another Rclone Dashboard'u yapılandırırken en önemli seçenekler şunlardır:

| Seçenek | Amacı |
| --- | --- |
| `--rc-files` | Statik panel dosyalarını yerel dizinden sunar |
| `--rc-web-gui` | Rclone'un web GUI mekanizmasını etkinleştirir |
| `--rc-web-fetch-url` | Paneli indirmek için sürüm kaynağı URL'sini tanımlar |
| `--rc-serve` | RC arayüzünü HTTP üzerinden sunar |
| `--rc-addr` | Dinlenecek IP adresi ve portu ayarlar |
| `--rc-no-auth` | Kimlik doğrulamayı devre dışı bırakır |
| `--rc-user` | RC kullanıcı adını belirler |
| `--rc-pass` | RC şifresini belirler |
| `--rc-allow-origin` | Tarayıcı erişimine izin verilen orijini belirtir |
| `--rc-web-gui-no-open-browser` | Otomatik tarayıcı açılmasını engeller |
| `--rc-user-from-header` | Güvenilen reverse proxy başlığından kullanıcı kabul eder |

### Doğru `--rc-allow-origin` seçimi

`--rc-allow-origin` değerini tarayıcıda kullandığınız tam URL olarak ayarlamalısınız.

| Erişim yöntemi | Örnek değer |
| --- | --- |
| Yerel erişim | `http://127.0.0.1:5572` |
| Doğrudan IP erişimi | `http://[your_server_ip]:5572` |
| HTTPS destekli reverse proxy | `https://[your_domain]` |

:::caution Orijin Uyumsuzlukları Paneli Bozabilir
`--rc-allow-origin` gerçek tarayıcı URL'si ile eşleşmezse, tarayıcı güvenlik kısıtlamaları nedeniyle panel Rclone'a bağlanamayabilir.
:::

## Advanced reverse proxy setup

Paneli kimlik doğrulama kapısı arkasına almak isterseniz, sağlanan kurulum taslağı reverse proxy ve `--rc-user-from-header` kullanımı için gelişmiş bir örnek içerir.

### Rclone örneği

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
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

:::danger Proxy'nizden Gelen Başlıklara Güvenin
`--rc-user-from-header` seçeneğini yalnızca Rclone'un `127.0.0.1` gibi güvenilir yerel bir arayüze bağlı olduğu ve sadece reverse proxy üzerinden erişildiği durumlarda kullanmalısınız. Aksi takdirde, istemciler başlıkları taklit edebilir.
:::

## First start and verification

Dağıtım yöntemini seçtikten sonra, panelin doğru çalıştığını doğrulayabilirsiniz.

### Servisi başlatın

Seçtiğiniz komutla `rclone rcd`'yi başlatın ve işlemi açık tutun.

### Paneli açın

Tarayıcınızda uygun URL'yi açın:

- `http://127.0.0.1:5572`
- `http://[your_server_ip]:5572`
- `https://[your_domain]`

### Başarılı erişimi doğrulayın

Her şey doğru yapılandırıldıysa, Yet Another Rclone Dashboard arayüzünü görmeli ve Rclone backend'e bağlanabilmelisiniz.

Böylece, Rclone yapılandırmanıza bağlı olarak uzak depoları inceleyebilir, dosyalara göz atabilir ve transferleri yönetebilirsiniz.

## Troubleshooting

Panel yüklenmez veya bağlanamazsa, aşağıdaki noktaları kontrol edin.

### Common issues

| Sorun | Olası sebep | Önerilen çözüm |
| --- | --- | --- |
| Tarayıcı sayfayı açamıyor | Rclone çalışmıyor | `rclone rcd`'yi tekrar başlatın ve terminal çıktısını kontrol edin |
| Panel açılıyor ama bağlanamıyor | `--rc-allow-origin` yanlış | Tarayıcıdaki tam URL ile eşleştirin |
| Uzaktan erişim başarısız | `5572` portu kapalı | Güvenlik duvarında portu açın veya reverse proxy kullanın |
| Kimlik doğrulama başarısız | Yanlış `--rc-user` veya `--rc-pass` | Kimlik bilgilerinizi doğrulayın |
| Reverse proxy kurulumu başarısız | Başlık veya orijin uyumsuzluğu | Proxy başlıklarını ve `--rc-allow-origin` değerini kontrol edin |

### Log review

Öncelikle Rclone konsol çıktısını inceleyin. Sağlanan kaynak materyalde Yet Another Rclone Dashboard için proje özelinde bir log yolu belirtilmemiştir, bu yüzden en güvenilir ilk adım aktif Rclone süreci çıktısını kontrol etmektir.

:::tip Uzaktan Erişim İçin HTTPS Tercih Edin
Paneli internet üzerinden açmak istiyorsanız, doğrudan HTTP yerine TLS destekli bir reverse proxy arkasına koymalısınız.
:::

## Additional notes

Sağlanan taslak, opsiyonel Docker ve kaynak derleme senaryolarından bahsetse de, referans verilen içerikte doğrulanmış Docker kurulum talimatları bulunmamaktadır. Bu nedenle, doğrulanmamış davranışları belgelememek için bu rehber Docker komutu içermez.

Ayrıca, iç derleme dizini adı sürüm arşiv yapısına bağlı olarak değişebilir, bu yüzden `[your_dashboard_path]` ayarlamadan önce çıkarılan klasör içeriğini kontrol etmelisiniz.

## Conclusion

Tebrikler, Yet Another Rclone Dashboard'u Linux veya Windows üzerinde Rclone ile başarıyla kurdunuz. Daha fazla soru veya destek için, günlük olarak hizmet veren destek ekibimizle iletişime geçmekten çekinmeyin! 🙂