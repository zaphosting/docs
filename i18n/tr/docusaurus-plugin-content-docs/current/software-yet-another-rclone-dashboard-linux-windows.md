---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Yet Another Rclone Dashboard kurulumunu yapın, Linux ve Windows için modern bir rclone gui ve rclone tarayıcısıdır, rclone daemonunuzu güvenli şekilde yönetin -> Hemen öğrenin"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard, `rclone rcd` için modern bir web panelidir ve uzaktaki dosyaları yönetmek, dosyalara göz atmak ve transferleri incelemek için grafiksel bir arayüz sunar. Bu rehberde, Linux veya Windows üzerinde nasıl kurulum yapacağınızı ve mevcut Rclone kurulumunuza nasıl bağlanacağınızı öğreneceksiniz.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Başlamadan önce, sisteminizin temel gereksinimleri karşıladığından ve Rclone’un zaten kurulu olduğundan emin olun.

### Requirements

| Bileşen | Gereksinim |
| --- | --- |
| İşletim sistemi | Linux veya Windows |
| Rclone sürümü | `v1.72.0` veya daha yenisi önerilir |
| Erişim yöntemi | Yerel kabuk, SSH veya RDP |
| Varsayılan port | `5572/tcp` |
| Opsiyonel | Nginx veya Caddy gibi ters proxy |

### Kurulum öncesi gerekenler

Şunlara ihtiyacınız var:

- Çalışır durumda bir [Rclone](https://rclone.org/) kurulumu
- En az bir yapılandırılmış Rclone uzak depo (örneğin *rclone Google Drive*) erişimi için
- Uzaktan bağlanmak istiyorsanız açık veya yönlendirilmiş `5572` portu
- Panele erişmek için bir tarayıcı

:::info Rclone Gereksinimi
Yet Another Rclone Dashboard sadece `rclone rcd` için bir ön yüzdür. Rclone’un kendisini değiştirmez, bu yüzden önce Rclone’u kurup yapılandırmanız gerekir.
:::

### Bu rehberde kullanılan önemli yer tutucular

Aşağıdaki komutlarda kendi değerlerinizle değiştirmeniz gereken yer tutucular kullanılmıştır.

| Yer Tutucu | Anlamı |
| --- | --- |
| `[your_dashboard_path]` | Panel dosyalarının bulunduğu yol |
| `[your_server_ip]` | Sunucunuzun genel veya özel IP adresi |
| `[your_domain]` | Ters proxy erişimi için kullanılan alan adı |
| `[your_rc_user]` | Rclone RC kimlik doğrulama kullanıcı adı |
| `[your_rc_password]` | Rclone RC kimlik doğrulama şifresi |

## Yet Another Rclone Dashboard Hakkında

Yet Another Rclone Dashboard, [GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) üzerinde yayınlanan statik bir web ön yüzüdür. Proje README dosyasına göre, `rclone rcd` için tasarlanmıştır ve şu özellikleri destekler:

- Rclone’u daemon modunda bağlama
- Birden fazla bağlantı profili yönetimi
- Sistem bilgisi ve durumunu inceleme
- Dizinlerde gezinme
- Uzak depolar ve yapılandırma verileri ile çalışma

Ön yüz olduğu için gerçek dosya işlemleri hala Rclone tarafından yapılır. Bu nedenle panel, çalışan bir `rclone rcd` örneğine bağlıdır.

## Kurulum Yöntemleri

Panele erişim şeklinize bağlı olarak farklı kurulum yöntemleri vardır. En yaygın yöntemler, Rclone’u statik dosyalarla doğrudan kullanmak veya Rclone’un web GUI’yi otomatik çekmesini sağlamaktır.

### Kurulum genel bakış

| Yöntem | En uygun kullanım | Notlar |
| --- | --- | --- |
| `--rc-files` | Manuel kurulumlar | Panel dosyalarını kendiniz indirip açarsınız |
| `--rc-web-gui` ve `--rc-web-fetch-url` | Hızlı kurulum | Rclone en son panel sürümünü otomatik çeker |
| Harici web sunucusu | Özel barındırma | Nginx veya Caddy ile kullanışlı |
| Kimlik doğrulamalı ters proxy | Gelişmiş kurulumlar | Güvenli uzaktan erişim için ideal |

## Paneli Manuel İndirme

Kurulan sürüm üzerinde tam kontrol istiyorsanız, projenin GitHub sürümlerinden en son sürümü manuel indirebilirsiniz.

### Linux

Panel için bir dizin oluşturun, en son sürüm arşivini indirin ve açın.

```bash
mkdir -p [your_dashboard_path]
cd [your_dashboard_path]
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip
```

### Windows

Windows’ta resmi GitHub sürüm sayfasından arşiv dosyasını indirip aşağıdaki gibi bir klasöre açın:

```text
C:\rclone-dashboard
```

:::note Sürüm Notu
Yazım tarihi itibarıyla en son doğrulanmış sürüm `v0.3.8`’dir. Daha yeni bir sürüm varsa onu da kullanabilirsiniz.
:::

## Rclone ile Paneli Başlatma

Dosyalar hazır olduktan sonra `rclone rcd`’yi başlatabilir ve paneli Rclone üzerinden sunabilirsiniz.

### Linux’te yerel erişim

Paneli sadece aynı sistemden yerel olarak kullanmak istiyorsanız bu yöntemi kullanın.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Linux’te uzaktan erişim

Başka bir cihazdan ağ üzerinden bağlanmak istiyorsanız bu yöntemi kullanın.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Windows’ta yerel erişim

Komut İstemi veya PowerShell’i açıp şu komutu çalıştırın:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

### Windows’ta uzaktan erişim

Uzaktan erişim için şu komutu kullanın:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-web-gui-no-open-browser --rc-user="[your_rc_user]" --rc-pass="[your_rc_password]" --rc-addr=0.0.0.0:5572 --rc-allow-origin=http://[your_server_ip]:5572
```

:::caution Korumasız Rclone GUI Açmayın
Rclone’u `0.0.0.0` adresine bağlarsanız `--rc-no-auth` kullanmayın. Uzaktan erişimi mutlaka kimlik doğrulama veya ters proxy ile koruyun.
:::

## Rclone WebGUI Fetcher Kullanımı

Rclone, paneli GitHub’dan otomatik olarak da çekebilir. Dosyaları manuel indirmek ve açmak istemiyorsanız bu yöntem faydalıdır.

### Yerel mod

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Uzaktan mod

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Otomatik Güncellemeler
Bu yöntem, Rclone’un en son panel sürümünü otomatik çekmesini sağlar. Yeni bir rclone gui kurulumu test etmek için genellikle en hızlı seçenektir.
:::

## Paneli Web Sunucusu ile Sunma

Yet Another Rclone Dashboard statik bir ön yüz olduğu için standart bir web sunucusuyla da barındırabilirsiniz. `rclone rcd` ise arka planda ayrı çalışmaya devam eder.

### Nginx örneği

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_dashboard_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Caddy örneği

```caddy
[your_domain] {
    root * [your_dashboard_path]
    file_server
}
```

Bu yöntem, zaten ters proxy kullanıyorsanız veya panel uygulamanız için alan adı bazlı daha temiz erişim istiyorsanız faydalıdır.

## Gelişmiş Ters Proxy Kurulumu

Dış kimlik doğrulama katmanı ile erişimi güvenceye almak isterseniz, Rclone önünde ters proxy kullanabilir ve doğrulanmış kullanıcıyı başlık üzerinden iletebilirsiniz.

### Rclone komutu

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Caddy örneği, kullanıcı başlığı ile

```caddy
@rclone host [your_domain]
handle @rclone {
    reverse_proxy 127.0.0.1:5572 {
        header_up X-Remote-User {http.auth.user.id}
        header_up -Authorization
    }
}
```

:::info Gelişmiş Kimlik Doğrulama
Kesin kimlik doğrulama geçidi uygulaması ortamınıza bağlıdır. Yukarıdaki örnek sadece Rclone ve ters proxy entegrasyon modelini gösterir. Kimlik sağlayıcı veya Caddy eklentisi gibi ek yazılımlar kullanıyorsanız, onları resmi dokümantasyonlarına göre yapılandırın.
:::

## Konfigürasyon Referansı

Panel ile kullanılan en önemli Rclone RC seçenekleri aşağıdadır.

| Seçenek | Amacı |
| --- | --- |
| `--rc-files` | Panel dosyalarını sunar |
| `--rc-web-gui` | Rclone WebGUI desteğini açar |
| `--rc-web-fetch-url` | Panel sürüm bilgisini GitHub’dan çeker |
| `--rc-no-auth` | Kimlik doğrulamayı kapatır, sadece yerel kullanım için uygundur |
| `--rc-user` | Rclone RC kullanıcı adını belirler |
| `--rc-pass` | Rclone RC şifresini belirler |
| `--rc-addr` | Dinleme adresi ve portunu tanımlar |
| `--rc-allow-origin` | Tarayıcı erişimine izin verilen URL’yi belirtir |
| `--rc-web-gui-no-open-browser` | Otomatik tarayıcı açmayı engeller |
| `--rc-user-from-header` | Proxy başlığından doğrulanmış kullanıcıyı kabul eder |

### Doğru `--rc-allow-origin` seçimi

`--rc-allow-origin` değerini tarayıcıda kullandığınız tam URL olarak ayarlayın.

| Erişim türü | Örnek değer |
| --- | --- |
| Yerel erişim | `http://127.0.0.1:5572` |
| IP tabanlı uzaktan erişim | `http://[your_server_ip]:5572` |
| HTTPS ile ters proxy | `https://[your_domain]` |

:::caution Origin Eşleşmeli
`--rc-allow-origin` tarayıcıda kullandığınız URL ile eşleşmezse, tarayıcı güvenlik kısıtlamaları nedeniyle panel düzgün yüklenmeyebilir.
:::

## Panele Erişim ve Doğrulama

`rclone rcd` çalışmaya başladıktan sonra, paneli tarayıcınızda açın.

### Yaygın erişim URL’leri

| Senaryo | URL |
| --- | --- |
| Yerel makine | `http://127.0.0.1:5572` |
| IP ile uzaktan | `http://[your_server_ip]:5572` |
| Ters proxy | `https://[your_domain]` |

### Başlatma sonrası kontrol edilecekler

Sayfa açıldıktan sonra şunları doğrulayın:

- Yet Another Rclone Dashboard arayüzü yükleniyor
- Yapılandırılmış uzaklar görünür durumda
- Rclone tarayıcı görünümünde dosya gezintisi çalışıyor
- Transfer ve sistem bilgi panelleri doğru tepki veriyor

Sayfa açılmazsa önce Rclone konsol çıktısını kontrol edin. Kimlik doğrulama hataları, origin uyuşmazlıkları ve port bağlama sorunları en yaygın nedenlerdir.

## Güvenlik Önerileri

Bulut depolamanız için panel çalıştırmak, özellikle internet üzerinden erişim sağlanıyorsa, dikkatli güvenlik ayarları gerektirir.

### Önerilen güvenlik uygulamaları

| Öneri | Sebep |
| --- | --- |
| Uzaktan erişimde `--rc-user` ve `--rc-pass` kullanın | Yetkisiz erişimi engeller |
| Ters proxy üzerinden HTTPS tercih edin | Kimlik bilgilerini korur |
| Mümkünse `127.0.0.1` adresine bağlayın | Açığı azaltır |
| `5572/tcp` portunu firewall ile sınırlandırın | Saldırı yüzeyini kısıtlar |
| Halka açık ağlarda `--rc-no-auth` kullanmayın | Rclone örneğinizi açık erişime kapatır |

:::danger Halka Açık Erişim Riski
Korumasız ve açık bir `rclone rcd` örneği, yapılandırılmış uzaklarınıza ve dosyalarınıza erişim sağlar. “rclone güvenli mi?” sorusunun cevabı, servisi ne kadar güvenli açtığınıza ve doğruladığınıza bağlıdır.
:::

## Sorun Giderme

Panel beklediğiniz gibi çalışmazsa aşağıdaki kontrolleri yapın.

### Panel sayfası açılmıyor

Olası nedenler:

- `rclone rcd` çalışmıyor
- `5572` portu firewall tarafından engellenmiş
- Servis `127.0.0.1` adresine bağlı, ama uzaktan bağlanmaya çalışıyorsunuz

### Arayüz yükleniyor ama işlemler başarısız

Olası nedenler:

- Geçersiz `--rc-user` veya `--rc-pass`
- Yanlış `--rc-allow-origin`
- Rclone uzak yapılandırması eksik veya bozuk

### Panel ters proxy üzerinden yüklenmiyor

Olası nedenler:

- Proxy hedefi yanlış backend’e işaret ediyor
- HTTPS URL’si `--rc-allow-origin` ile uyuşmuyor
- Gerekli başlıklar doğru iletilmiyor

### Faydalı kontroller

Linux:

```bash
ss -tulpn | grep 5572
```

Windows PowerShell:

```powershell
netstat -ano | findstr 5572
```

Yerel uç noktayı test edin:

```bash
curl http://127.0.0.1:5572
```

:::tip Önce Rclone Loglarını Kontrol Edin
Başlatma ve bağlantı sorunlarının çoğu, `rclone rcd`’nin çalıştığı terminal veya servis loglarında doğrudan görünür. Yapılandırmanızı değiştirmeden önce mutlaka bu logları inceleyin.
:::

## Ek Notlar

Yet Another Rclone Dashboard, 10 Nisan 2026’da Self-Host Weekly’de yer aldı ve GitHub’da açık şekilde barındırılıyor. Yazım tarihi itibarıyla proje, Rclone’u tarayıcı tabanlı bir panelle yönetmeyi kolaylaştıran ön yüz odaklı bir çözümdür.

Docker gibi bazı özel ortamlar için ek kurulum yöntemleri mümkün olabilir, ancak sağlanan kaynaklarda doğrulanmış Docker talimatları bulunmamaktadır. Bu yüzden bu rehber sadece mevcut proje bilgileriyle doğrudan desteklenen kurulum yöntemlerini kapsar.

## Conclusion

Tebrikler, Yet Another Rclone Dashboard’u Linux veya Windows üzerinde başarıyla kurup yapılandırdınız. Daha fazla soru veya destek için, günlük olarak hizmet veren destek ekibimizle iletişime geçmekten çekinmeyin! 🙂