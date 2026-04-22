---
id: dedicated-linux-odoo
title: "تثبيت Odoo على سيرفر لينكس - شغّل نظام ERP و CRM مفتوح المصدر الخاص بك"
description: "اكتشف كيف تدير وتؤتمت عمليات الأعمال مع منصة Odoo المتكاملة لنظام ERP و CRM لتبسيط عمليات شركتك → تعلّم المزيد الآن"
sidebar_label: تثبيت Odoo
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Odoo هو منصة مفتوحة المصدر ومودولار تجمع بين ميزات تخطيط موارد المؤسسات (ERP) وإدارة علاقات العملاء (CRM). تتيح للشركات إدارة وأتمتة عمليات مثل المحاسبة، المخزون، إدارة المشاريع، والمبيعات من نظام واحد.

مع امتداداتها المرنة، يمكن تخصيص Odoo لتلبية الاحتياجات الخاصة ويوفر حلاً متكاملاً لإدارة جميع مجالات الشركة.

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

تفكر تستضيف الخدمة بنفسك؟ هنمشي معك خطوة بخطوة لكيفية تثبيتها وضبطها، وكل شيء لازم تعرفه.

## تثبيت Odoo باستخدام مثبت التطبيقات بنقرة واحدة

تقدر تثبت **Odoo** مباشرة عبر **مثبت التطبيقات بنقرة واحدة** في واجهة الويب الخاصة بـ VPS. بعد إكمال إعداد التطبيقات الأولي، افتح كتالوج التطبيقات، ابحث عن **Odoo**، وابدأ النشر مع إعدادات المشروع، البيئة، والنطاق المفضلة عندك. هذا يعطيك طريقة سريعة وسهلة لنشر وإدارة **Odoo** بدون إعداد يدوي عبر سطر الأوامر، مع الاستفادة من إدارة متكاملة عبر الويب، دعم النطاق المخصص، وتوفير SSL حيثما كان متاحًا.

## المتطلبات الأساسية

قبل تثبيت **Odoo**، تأكد أن بيئة الاستضافة عندك تلبي المتطلبات التالية لضمان تثبيت سلس وأداء مثالي.

| العتاد      | الحد الأدنى   | الموصى به   |
| ----------- | ------------ | ----------- |
| CPU         | 1 نواة vCPU  | 4 أنوية vCPU|
| RAM         | 1 جيجابايت   | 4 جيجابايت  |
| مساحة القرص | 15 جيجابايت  | 25 جيجابايت |

البرنامج يحتاج أن تكون كل التبعيات الضرورية مثبتة وأنه يعمل على نظام تشغيل مدعوم. تأكد أن سيرفرك يلبي المتطلبات التالية قبل المتابعة بالتثبيت:

**التبعيات:** `Docker`

**نظام التشغيل:** أحدث إصدار من أوبونتو/ديبيان يدعم Docker 26+

تأكد من تثبيت كل التبعيات واستخدام نسخة نظام التشغيل الصحيحة لتجنب مشاكل التوافق أثناء تثبيت Odoo.

## التحضير

قبل إعداد **Odoo**، لازم تجهز نظامك. هذا يشمل تحديث نظام التشغيل لأحدث نسخة وتثبيت كل التبعيات المطلوبة. هذه التحضيرات تضمن بيئة مستقرة وتساعد على منع المشاكل أثناء أو بعد التثبيت.

### تحديث النظام
لتتأكد أن نظامك يعمل بأحدث البرامج وتحسينات الأمان، لازم تعمل تحديث للنظام أولاً. نفذ الأمر التالي:

```
sudo apt update && sudo apt upgrade -y
```
هذا يضمن أن نظامك يحتوي على أحدث تصحيحات الأمان وإصدارات البرامج قبل المتابعة.

### تثبيت التبعيات
بعد الانتهاء من التحديث، يمكنك تثبيت التبعيات. سيتم نشر Bitwarden وتشغيله على جهازك باستخدام مجموعة من حاويات Docker. لهذا، يجب تثبيت Docker أولاً. نفذ الأمر التالي:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

شرح كامل لعملية التثبيت وكيفية استخدام Docker متوفر في [دليل Docker](dedicated-linux-docker.md).

### ضبط النطاق الخاص بك

افتراضيًا، يعمل Odoo على السيرفر عبر المنافذ 80 (HTTP) و443 (HTTPS). قم بإعداد نطاق مع سجلات DNS تشير إلى السيرفر. إذا كان النطاق مُدار من قبلنا، يمكنك بسهولة فعل ذلك باستخدام خيار [EasyDNS](domain-easydns.md).

## التثبيت
بعد استيفاء كل المتطلبات وإكمال التحضيرات اللازمة، يمكنك متابعة تثبيت تطبيق Odoo.

عند العمل مع عدة إعدادات Docker، من الأفضل إنشاء هيكل مجلدات واضح لعزل المشاريع عن بعضها. طريقة شائعة هي إنشاء مجلد *docker* داخل مجلد المستخدم الرئيسي، مع مجلد فرعي مخصص لكل نطاق. بهذه الطريقة، يمكن استضافة عدة مشاريع على نفس السيرفر بدون تعارض في الإعدادات.

مثلاً، لتحضير الهيكل للنطاق `example.com`:

```
mkdir -p /docker/example.com
cd /docker/example.com
```

داخل مجلد المشروع هذا، يُنصح بإنشاء مجلدات فرعية سيتم ربطها كـ volumes من قبل الحاويات. هذه الـ volumes تسمح بمشاركة البيانات بين الخدمات أو الحفاظ عليها بشكل دائم. حالة مهمة هي الجذر المشترك للويب، الذي يجب أن يصل إليه كل من nginx وcertbot لتوليد وتجديد شهادات SSL. يمكن إنشاء هيكل مناسب كما يلي:

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

هذا يوفر مجلدات مخصصة لإعدادات nginx، شهادات SSL، ملفات التضمين، ومحتوى خاص بـ Odoo مثل الإعدادات والإضافات.

### إنشاء Docker Compose

داخل مشروع docker الخاص بك، أنشئ ملف compose.yml باستخدام `nano compose.yml`. أدخل الكود التالي:

```
services:
  db:
    image: postgres:16
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=odoo
      - POSTGRES_PASSWORD=odoo
      - PGDATA=/var/lib/postgresql/data/pgdata
    volumes:
      - odoo-db-data:/var/lib/postgresql/data

  odoo:
    image: odoo:18.0
    depends_on:
      - db
    ports:
      - "8069:8069"
    volumes:
      - odoo-web-data:/var/lib/odoo
      - ./config:/etc/odoo
      - ./addons:/mnt/extra-addons
    command: odoo -d odoo_db -i base --db_user=odoo --db_password=odoo --db_host=db

  nginx:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf:/etc/nginx/conf.d
      - ./nginx/inc:/etc/nginx/inc
      - ./nginx/ssl:/etc/nginx/ssl
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt
    depends_on:
      - odoo

  certbot:
    image: certbot/certbot
    volumes:
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt

volumes:
  odoo-db-data:
  odoo-web-data:
```

### الجدار الناري

لكي يعمل nginx وcertbot بشكل صحيح، يجب السماح بمرور منافذ TCP 80 (HTTP) و443 (HTTPS) عبر الجدار الناري. هذه المنافذ ضرورية لأن certbot يعتمد على المنفذ 80 للتحقق عبر HTTP، والمنفذ 443 مطلوب لخدمة حركة المرور المشفرة عبر HTTPS. إذا كان UFW (جدار ناري بسيط) مفعل، يمكنك إضافة القواعد اللازمة بالأوامر التالية:

```
sudo ufw allow http
sudo ufw allow https
```

بعدها تحقق من القواعد عبر الأمر `sudo ufw status` لتتأكد أن المنافذ مفتوحة. تأكد من عدم وجود إعدادات جدار ناري أخرى تمنع الوصول لهذه المنافذ، وإلا قد يفشل توليد الشهادات أو حركة HTTPS الآمنة.

### إعداد Nginx

يبدأ إعداد nginx بإنشاء ملف إعداد للنطاق الخاص بك. داخل مجلد `nginx/conf`، أنشئ ملف جديد باسم نطاقك. نفذ الأمر `nano nginx/conf/example.com.conf` وأضف التوجيهات الأساسية، مع استبدال المثال باسم نطاقك الفعلي:

```
server {
    listen 80;
    server_name example.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

هذا الإعداد يسمح لـ certbot بإكمال تحدي ACME وإصدار شهادات SSL صالحة. كما يضمن إعادة توجيه كل طلبات HTTP إلى HTTPS.

بعد حفظ الملف، يمكنك تشغيل الحاويات المطلوبة، وهي قاعدة البيانات، Odoo، وnginx. نفذ الأمر:

```
sudo docker compose up -d db odoo nginx
```

ستعمل الحاويات في الخلفية، وسيستخدم nginx الإعداد الجديد، مما يتيح لـ certbot توليد الشهادات في الخطوة التالية.

### توليد شهادات SSL

شغل الأمر التالي لإنشاء شهادات SSL باستخدام certbot. تأكد من تحديد نطاقك الخاص بعد العلامة `-d` واستبدال البريد الإلكتروني user@mail.com ببريدك الصحيح.

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

بعدها أنشئ ملف معلمات DH مخصص لتعزيز أمان تبادل المفاتيح التشفيرية.

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

الآن أنشئ ملف `ssl.conf` باستخدام `nano nginx/ssl/ssl.conf` وأضف المحتوى التالي مع استبدال example.com بنطاقك:

```
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ecdh_curve X25519:prime256v1:secp384r1;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-CHACHA20-POLY1305;
ssl_prefer_server_ciphers off;
ssl_session_timeout 1d;
ssl_session_cache shared:MozSSL:10m;
ssl_dhparam "/etc/nginx/ssl/dhparam.pem";
ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
resolver 1.1.1.1 1.0.0.1 valid=300s;
```

## الإعدادات

### إعداد nginx

حرر ملف إعداد nginx الذي أنشأته سابقًا واستبدل محتوياته بالإعداد التالي لضمان تقديم موقعك فقط عبر HTTPS.

تأكد من إدخال اسم نطاقك الفعلي في توجيه `server_name` وتحديد المسارات الصحيحة لملفات الشهادة في توجيهات `ssl_certificate` و`ssl_certificate_key`.

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # تضمين إعدادات SSL الخاصة بموزيلا
    include /etc/nginx/ssl/ssl.conf;

    # مسارات الشهادات (تأكد من مطابقتها للـ volume المربوط)
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # رؤوس الأمان
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    access_log /var/log/nginx/odoo_access.log;
    error_log  /var/log/nginx/odoo_error.log;

    # ضغط Gzip
    include /etc/nginx/inc/gzip.conf;

    # إعدادات البروكسي لـ Odoo
    location / {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Host $host;
        proxy_redirect off;
        proxy_request_buffering off;
        # مهلات موصى بها للطلبات العادية
        proxy_connect_timeout 30s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
        send_timeout          60s;
    }

    # تخزين مؤقت للملفات الثابتة
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://odoo:8069;
    }

    # زيادة المهلات للطلبات الطويلة
    location /longpolling {
        proxy_pass http://odoo:8069;
        proxy_connect_timeout 60s;
        proxy_send_timeout    300s;
        proxy_read_timeout    300s;
        send_timeout          300s;
    }

    location /websocket {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name example.com;

    # هذا يسمح لـ Certbot بالوصول إلى عنوان التحدي
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

بعد حفظ التغييرات في إعداد nginx، تحتاج لتطبيق الإعدادات الجديدة بإعادة تشغيل حاوية nginx:

```
sudo docker compose restart nginx
```

إعادة التشغيل تضمن تحميل nginx للإعدادات المحدثة وبدء تقديم الطلبات بالمعايير الجديدة فورًا. راقب أي رسائل خطأ أثناء إعادة التشغيل. إذا ظهرت مشاكل، يمكنك فحص سجلات الحاوية باستخدام `sudo docker compose logs nginx` لاستكشاف الأخطاء. عند تشغيل الحاوية بدون أخطاء، عد إلى موقعك لتتأكد من تفعيل HTTPS وأن الموقع يعمل كما هو متوقع.

### خيارات إعداد Odoo

لتطبيق إعدادات مخصصة، يمكنك إنشاء ملف إعداد مخصص لـ Odoo. ضع ملف جديد في `config/odoo.conf` وأضف الخيارات التي تريدها.

داخل هذا الملف يمكنك تعريف عدة معلمات مفيدة: `list_db = False` يخفي اختيار قاعدة البيانات من صفحة تسجيل الدخول، `proxy_mode = True` يخبر Odoo أنه يعمل خلف بروكسي عكسي، وإذا أردت استخدام إضافات مخصصة، يمكنك إلغاء تعليق سطر `addons_path` وتوجيهه إلى مجلد الإضافات الذي أنشأته سابقًا. مثال للإعداد:

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```

### إزالة علامة -i base

يجب إزالة علامة `-i base` من ملف `compose.yml`، لأنها ستعيد إنشاء قاعدة البيانات عند إعادة إنشاء حاوية odoo. لإزالتها، افتح ملف compose باستخدام `nano compose.yml` وعدل الأمر ليصبح:

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```

## الوصول إلى الموقع

بعد إكمال التثبيت والإعداد وتشغيل كل الخدمات، يمكنك الوصول إلى موقعك بأمان عبر إدخال نطاقك في شريط عنوان المتصفح.

![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

سيتم تحميل صفحة البداية لتثبيتك الجديد. لتسجيل الدخول الأولي، يوجد حساب افتراضي باسم المستخدم `admin` وكلمة المرور `admin`. ننصح بشدة بتغيير هذه البيانات فورًا.

## الخاتمة والمزيد من الموارد

مبروك! لقد قمت الآن بتثبيت وضبط Odoo بنجاح على VPS/سيرفر مخصص خاص بك. ننصح أيضًا بالاطلاع على الموارد التالية التي قد توفر لك مساعدة وإرشاد إضافي خلال عملية إعداد السيرفر:

- [Odoo.com](https://odoo.com) - الموقع الرسمي
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - توثيق Odoo

عندك أسئلة محددة مش مغطاة هنا؟ لأي استفسارات أو مساعدة إضافية، لا تتردد تتواصل مع فريق الدعم عندنا، متوفر يوميًا لمساعدتك! 🙂