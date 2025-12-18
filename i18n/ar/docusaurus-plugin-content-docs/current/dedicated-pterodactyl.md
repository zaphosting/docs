---
id: dedicated-pterodactyl
title: "سيرفر مخصص: تثبيت Pterodactyl"
description: "اكتشف كيفية إعداد وإدارة لوحة سيرفر ألعاب Pterodactyl الخاصة بك بكفاءة → تعلّم المزيد الآن"
sidebar_label: تثبيت Pterodactyl
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

لوحة Pterodactyl هي لوحة تحكم مفتوحة المصدر مصممة لإدارة وتأجير سيرفر ألعاب بسهولة. توفر واجهة مستخدم تتيح للمسؤولين تكوين وإدارة عدة سيرفرات ألعاب مركزياً.

في هذا الدليل، سنستعرض الخطوات اللازمة لإعداد نسخة Pterodactyl الخاصة بك على سيرفرك.

## التحضير

ستحتاج إلى سيرفر مخصص يعمل بنظام Linux لتثبيت لوحة Pterodactyl. يجب أن تستخدم أحد أنظمة التشغيل المتوافقة الموجودة في الجدول أدناه.

| نظام التشغيل | الإصدارات المتوافقة |
| ------------ | ------------------- |
| Ubuntu       | 20.04, 22.04        |
| CentOS       | 7, 8                |
| Debian       | 11, 12              |

## المتطلبات

تحتاج Pterodactyl إلى مجموعة من المتطلبات لتتمكن من التثبيت والتشغيل بنجاح. كما تعتمد على مدير تبعيات شهير للـ PHP يُسمى Composer.

### قائمة المتطلبات

إليك قائمة مختصرة بالمتطلبات التي ستحتاجها لهذا الدليل. انتقل إلى القسم التالي الذي يشرح كيفية تثبيت هذه المتطلبات.

- PHP 8.1 مع الإضافات التالية: cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xml أو dom, curl, zip, و fpm.
- MariaDB
- سيرفر ويب - في هذا الدليل سنستخدم Nginx.
- curl
- tar
- unzip
- git
- composer v2

### تثبيت المتطلبات

أولاً، يجب تشغيل هذا الأمر الذي يسمح لك بإضافة الحزم غير الافتراضية لنظام التشغيل.

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

الآن يجب تثبيت المستودعات الإضافية لـ PHP و Redis و MariaDB (MySQL).

```bash
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
```

ستحتاج أيضاً لتثبيت Redis الذي يُستخدم لتخزين البيانات المؤقتة.

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

بالنسبة لسيرفر الويب، اخترنا استخدام Nginx لأنه موثوق ومفتوح المصدر. يجب تثبيته أو يمكنك استخدام سيرفرات ويب بديلة مثل Apache أو Caddy، لكن هذا لن يتناسب مع هذا الدليل.

```bash
sudo apt install nginx # تحميل وتثبيت Nginx
sudo ufw allow 'Nginx Full' # تعديل الجدار الناري
```

ننصح بزيارة `http://[your_serverip]/` مع استبدال `[your_serverip]` بعنوان IP الخاص بسيرفرك لاختبار وضمان تشغيل Nginx. يجب أن ترى صفحة ترحيب افتراضية.

بعد ذلك، قم بتثبيت MariaDB التي ستستخدمها كقاعدة بيانات MySQL.
```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

أخيراً، قم بتحديث قائمة المستودعات وتثبيت بقية المتطلبات.
```bash
apt update
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

الآن يجب أن تكون جميع المتطلبات مثبتة ويمكنك المتابعة لتثبيت Composer.

### تثبيت Composer

بعد تثبيت المتطلبات الأساسية، يجب تثبيت Composer، مدير التبعيات الشهير للـ PHP. سيمكنك من تحميل وتثبيت كامل خدمة Pterodactyl بسهولة.

شغّل الأمر التالي:
```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## تحميل اللوحة

بعد تجهيز كل المتطلبات، يجب تثبيت لوحة Pterodactyl.

ابدأ بإنشاء مجلد لتخزين اللوحة باستخدام الأمر التالي.
```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

الآن، يمكنك استنساخ مستودع Pterodactyl الرسمي على GitHub لتحميل الملفات اللازمة.
```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

بعد الانتهاء من الاستنساخ، ستكون اللوحة محملة بنجاح. في القسم التالي، ستقوم بضبط مجموعة واسعة من الإعدادات والخيارات لضمان تثبيت اللوحة بشكل صحيح وعملها بسلاسة.

## التثبيت

الجزء الأول من التثبيت يتضمن إعداد قاعدة بيانات MySQL التي ستخزن كل بيانات لوحة Pterodactyl الخاصة بك. إذا كان لديك قاعدة بيانات MySQL جاهزة مع مستخدم مناسب، يمكنك تخطي القسم الفرعي التالي.

### إعداد قاعدة البيانات

ستحتاج لتسجيل الدخول إلى قاعدة بيانات MySQL للبدء. إذا كانت هذه أول مرة تستخدم MySQL، يمكنك ببساطة تشغيل:
```
mysql -u root -p
```

أما إذا كان لديك قاعدة بيانات MySQL موجودة، فاستخدم بيانات الدخول الخاصة بك مع `-u` لاسم المستخدم و `-p` لحقل كلمة المرور.

بعد تسجيل الدخول، يجب إنشاء مستخدم جديد ستستخدمه لنسخة Pterodactyl الخاصة بك. تأكد من استبدال `[your_password]` بكلمة المرور التي تريدها. نفّذ الأمر التالي:
```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY '[your_password]';
```

الآن بعد أن أصبح المستخدم جاهزاً، يجب إنشاء قاعدة بيانات لنسخة Pterodactyl ومنح الصلاحيات للمستخدم الجديد ليتمكن من إدارة القاعدة. نفّذ:
```sql
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

لقد أنشأت بنجاح مستخدم وقاعدة بيانات MySQL لنسخة Pterodactyl، يمكنك الآن متابعة التثبيت. اكتب `exit` للخروج من إدارة MySQL.

### متابعة الإعداد

للمتابعة، يجب نسخ ملف البيئة الافتراضي حيث ستخزن الرموز السرية.
```bash
cp .env.example .env
```

بعد ذلك، يمكنك استخدام Composer لتثبيت كل الحزم اللازمة تلقائياً عبر الأمر:
```bash
composer install --no-dev --optimize-autoloader
```

يجب أيضاً توليد مفتاح تشفير لتطبيقك، ويتم ذلك عبر:
```bash
php artisan key:generate --force
```

### إعداد البيئة

الآن ستقوم بضبط نسخة Pterodactyl الخاصة بك. يتم ذلك ببساطة عبر تشغيل الأوامر التالية. كل أمر سيأخذك خلال إعداد تفاعلي يغطي مجموعة واسعة من الإعدادات مثل الجلسات، البريد الإلكتروني، التخزين المؤقت والمزيد.

```bash
php artisan p:environment:setup # الأمر الأول
php artisan p:environment:database # الأمر الثاني
```

### إعداد قاعدة البيانات

الخطوة التالية هي إعداد البيانات الأساسية اللازمة لتشغيل اللوحة، والتي تستخدم قاعدة البيانات التي أنشأتها سابقاً. مرة أخرى، يتم ذلك ببساطة عبر تشغيل الأمر التالي.

:::info
يرجى العلم أن هذه العملية قد تستغرق عدة دقائق. لا تغلق العملية وإلا قد تتسبب في مشاكل. تحلَّ بالصبر :)
:::

```bash
php artisan migrate --seed --force
```

### إنشاء مستخدم مسؤول

بعد تجهيز قاعدة البيانات، يجب إنشاء أول مستخدم مسؤول لتتمكن من تسجيل الدخول إلى لوحة Pterodactyl الخاصة بك. يتم ذلك عبر الأمر التالي.
```bash
php artisan p:user:make
```

### ضبط الصلاحيات

الخطوة التالية في تثبيت اللوحة هي ضبط الصلاحيات اللازمة للملفات الموجودة في لوحة pterodactyl حتى تتمكن النسخة من القراءة والكتابة بدون مشاكل.

يمكنك ضبط الصلاحيات عبر الأمر:
```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

بعد الانتهاء، يجب أن تتمكن من الوصول إلى لوحة Pterodactyl عبر الرابط التالي مع استبدال `your_ipaddress` بعنوان IP الخاص بسيرفرك.
```
http://[your_ipaddress]/
```

### عمال الطابور (Queue Workers)

الخطوة الأخيرة في تثبيت اللوحة تتضمن إعداد مهمة مجدولة (cronjob) تعمل بشكل دوري مع عامل طابور مسؤول عن العديد من المهام الخلفية.

أولاً، افتح جدول المهام المجدولة عبر تشغيل `sudo crontab -e` في الطرفية. بعد الفتح، أضف الأمر التالي الذي ينشئ مهمة مجدولة تعمل كل دقيقة للوحة Pterodactyl.
```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

الآن، تحتاج لإنشاء عامل طابور باستخدام `systemd` ليبقي عملية الطابور تعمل في الخلفية.

أنشئ ملف جديد للعامل عبر فتح محرر nano بالأمر التالي:
```
nano /etc/systemd/system/pteroq.service
```

انسخ والصق المحتوى التالي:
```
# ملف عامل طابور Pterodactyl
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
# في بعض الأنظمة قد يكون المستخدم والمجموعة مختلفين.
# بعض الأنظمة تستخدم `apache` أو `nginx` كمستخدم ومجموعة.
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

:::note
إذا كنت تستخدم CentOS، يجب استبدال `redis-server.service` بـ `redis.service` في الملف أعلاه.
:::

بعد الانتهاء، احفظ الملف بالضغط على `CTRL + X` ثم `Y` لتأكيد الحفظ.

أخيراً، فعّل خدمة redis والخدمة التي أنشأتها لتعمل عند إقلاع النظام عبر الأوامر التالية.
```
sudo systemctl enable --now redis-server
sudo systemctl enable --now pteroq.service
```

لقد ثبت Pterodactyl بنجاح على سيرفرك. يجب أن تتمكن من الوصول إلى اللوحة عبر الرابط التالي مع استبدال `[your_serverip]` بعنوان IP الخاص بسيرفرك.
```
http://[your_serverip]
```

## اختياري: ضبط سيرفر الويب

كميزة إضافية، قد ترغب في ضبط سيرفر الويب الخاص بك. في هذا الدليل استخدمنا Nginx، لذلك سيشرح هذا القسم كيفية تعديل الإعدادات له.

فوائد ضبط سيرفر الويب تشمل إمكانية إعداد اللوحة على نطاق خاص بك وإضافة شهادة SSL لموقع اللوحة.

### سجل DNS للنطاق
لكي يكون سيرفرك متاحاً عبر نطاقك، يجب إعداد سجل DNS من نوع `A` لذلك النطاق. هذا يعتمد بشكل كبير على مزود الخدمة الذي تستخدمه، لكنه عادة ما يكون متاحاً عبر لوحة تحكم DNS عند إدارة نطاقك. يجب أن يحتوي السجل على عنوان IP الهدف لسيرفرك.

![](https://screensaver01.zap-hosting.com/index.php/s/EsGB6DaTC65Fce8/preview)

### إزالة الإعداد الافتراضي
ابدأ بحذف إعداد Nginx الافتراضي عبر حذف الملف.
```bash
rm /etc/nginx/sites-enabled/default
```
الآن، استخدم المحتوى أدناه لإنشاء ملف إعداد جديد لموقع لوحة pterodactyl. يجب أن تقرر إذا كنت تريد استخدام SSL أم لا في هذه المرحلة، لأن محتوى الإعداد والخطوات اللازمة ستختلف قليلاً حسب اختيارك.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx With SSL" label="Nginx مع SSL" default>

### إعداد Certbot
لكي يحصل موقعك على شهادة SSL، يجب إعداد نظام يدير ويجدد الشهادات تلقائياً. في هذه الحالة، ستستخدم Certbot المفتوح المصدر.

أولاً، ثبت Certbot على سيرفرك. لـ Nginx، تحتاج أيضاً لتثبيت حزمة python3-certbot-nginx.
```bash
sudo apt update
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

بعدها، يجب إعداد التحقق للسماح بإنشاء الشهادة. هنا ستستخدم تحدي DNS لأنه أكثر أماناً من تحدي HTTP.

يجب إنشاء سجل DNS من نوع `TXT` للنطاق الذي تريد استخدامه. هذا يعتمد على مزود الخدمة، لكنه عادة متاح عبر لوحة تحكم DNS عند إدارة نطاقك.

شغّل الأمر التالي الذي سيعطيك محتوى سجل `TXT` اللازم. استبدل `[your_domain]` بالنطاق الذي تريد استخدامه.
```bash
certbot -d [your_domain] --manual --preferred-challenges dns certonly
```

بعد إعداد سجل DNS، يجب إعداد التجديد التلقائي عبر مهمة مجدولة (cronjob). افتح crontab عبر `sudo crontab -e` وأضف الأمر التالي لتجديد الشهادة يومياً عند الساعة 23:00 بتوقيت النظام.

```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

#### إنشاء ملف الإعداد

الآن بعد أن أصبحت شهادة SSL جاهزة، يمكنك البدء بإنشاء ملف الإعداد.

شغّل الأمر التالي لفتح محرر nano في المجلد المستهدف وباسم الملف المحدد.
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

انسخ ملف الإعداد التالي داخل المحرر. تأكد من استبدال `[your_domain]` بالنطاق الذي أعددت له سجلات DNS في الخطوات السابقة.

:::warning
تأكد من إعداد شهادة SSL، وإلا سيفشل سيرفر الويب في البدء بنجاح.
:::

```
server_tokens off;

server {
    listen 80;
    server_name [your_domain];
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name [your_domain];

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    ssl_certificate /etc/letsencrypt/live/[your_domain]/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/[your_domain]/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

</TabItem>
<TabItem value="Nginx Without SSL" label="Nginx بدون SSL">

#### إنشاء ملف الإعداد

شغّل الأمر التالي لفتح محرر nano في المجلد المستهدف وباسم الملف المحدد.
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

انسخ ملف الإعداد التالي داخل المحرر. تأكد من استبدال `[your_domain]` بالنطاق الذي أعددت له سجل DNS يشير إلى عنوان IP الخاص بسيرفرك.

:::warning
تأكد من إعداد شهادة SSL، وإلا سيفشل سيرفر الويب في البدء بنجاح.
:::

```
server {
    listen 80;
    server_name [your_domain];

    root /var/www/pterodactyl/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\.ht {
        deny all;
    }
}
```
</TabItem>
</Tabs>

### تطبيق الإعداد

بعد إجراء التعديلات على الإعداد، يجب تفعيله عبر تشغيل الأمر التالي.
```bash
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf # غير مطلوب في CentOS

sudo systemctl restart nginx # إعادة تشغيل Nginx
```

مع إتمام كل الخطوات بنجاح، يجب أن تتمكن الآن من الوصول بسهولة إلى لوحة Pterodactyl باستخدام النطاق الذي أعددته في هذا القسم.

لقد قمت بضبط سيرفر الويب بنجاح لتمكين استخدام نطاقك وإضافة شهادة SSL لموقعك.