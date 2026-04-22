---
id: vserver-linux-nextcloud
title: "إعداد Nextcloud على سيرفر Linux - أنشئ تخزين السحابة الخاص بك"
description: "اكتشف كيفية إعداد سيرفر Nextcloud عالي الأداء على Linux لاستضافة سحابية مثالية → تعلّم المزيد الآن"
sidebar_label: تثبيت Nextcloud
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Nextcloud هو حل سحابي مفتوح المصدر وتفرع من Owncloud، تأسس في 2016 على يد مؤسس Owncloud السابق فرانك كاليتشيك.

![](https://screensaver01.zap-hosting.com/index.php/s/kCndbKaFAaktERk/preview)

لتحقيق أفضل أداء واستقرار ووظائف، يُنصح بالإعداد التالي لاستضافة سيرفر Nextcloud. سيرفر Nextcloud غير متوافق مع Windows وMacOS، على الأقل ليس بدون استخدام تقنيات افتراضية إضافية أو حلول مشابهة.

## تثبيت Nextcloud باستخدام مثبت التطبيقات بنقرة واحدة

يمكنك تثبيت **Nextcloud** مباشرة عبر **مثبت التطبيقات بنقرة واحدة** في واجهة الويب الخاصة بـ VPS. بعد إكمال الإعداد الأولي للتطبيقات، افتح كتالوج التطبيقات، وابحث عن **Nextcloud**، وابدأ النشر مع إعدادات المشروع، البيئة، والنطاق المفضلة لديك. هذه الطريقة تمنحك نشرًا سريعًا وسهل الاستخدام لـ **Nextcloud** بدون إعداد يدوي عبر سطر الأوامر، مع الاستفادة من إدارة متكاملة عبر الويب، دعم نطاق مخصص، وتوفير SSL حيثما كان متاحًا.

<InlineVoucher />

## التحضير

المتطلبات التالية موصى بها من قبل المطورين وتعتمد على تجربتنا الخاصة. قد تواجه مشاكل إذا لم تستوفِ هذه المتطلبات.

#### الأجهزة

| المكونات       | الحد الأدنى           | الموصى به                      |
| -------------- | --------------------- | ------------------------------ |
| CPU            | 2x 1 GHz              | 4x 2+ GHz                     |
| RAM            | 512 ميجابايت          | 4+ جيجابايت                   |
| التخزين       | 10 جيجابايت           | 50+ جيجابايت                  |
| عرض النطاق     | 100 ميجابت/ث (رفع وتنزيل) | 500 ميجابت/ث (رفع وتنزيل) موصى به إذا كان من المفترض أن يستخدم عدة مستخدمين السحابة |

#### البرمجيات

| النظام الأساسي    | الخيارات                                                      |
| ----------------- | ------------------------------------------------------------- |
| نظام التشغيل      | Ubuntu (14.04, 16.04, 18.04)، Debian(8,9,10)، CentOS 6.5/7   |
| قاعدة البيانات    | MySQL أو MariaDB 5.5+ (موصى به)، SQLite (موصى به فقط للاختبار والحالات البسيطة) |
| خادم الويب        | Apache 2.4 مع `mod_php` أو `php-fpm` (موصى به)                |
| PHP               | 5.6، 7.0 (موصى به)، 7.1 (موصى به)، 7.2                        |

يجب إنشاء اتصال عبر عميل SSH لتثبيت السحابة على سيرفر Linux. إذا لم تكن متأكدًا من كيفية استخدام SSH، إليك دليل لذلك: [الوصول الأولي (SSH)](vserver-linux-ssh.md)

بمجرد إنشاء الاتصال، يمكنك البدء بتثبيت الحزم اللازمة لتثبيت Nextcloud الفعلي. يشمل ذلك تثبيت خادم ويب وPHP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Debian" label="Debian" default>

<br/>

**Apache (خادم الويب)**

🗄️ Debian 8/9/10:
```
sudo apt update && sudo apt -y upgrade
sudo apt -y install apache2
```

**PHP (مفسر النصوص الفائقة)**

🗄️ Debian 8:
```
# الخطوة 1: إضافة مستودع PHP 7.3 PPA
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# الخطوة 2: تثبيت PHP 7.3
sudo apt -y install php7.3

# الخطوة 3: تثبيت امتدادات PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 9:
```
# الخطوة 1: إضافة مستودع PHP 7.3 PPA
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# الخطوة 2: تثبيت PHP 7.3
sudo apt -y install php7.3

# الخطوة 3: تثبيت امتدادات PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 10:
```
# الخطوة 1: تثبيت PHP 7.3
sudo apt -y install php php-common

# الخطوة 2: تثبيت امتدادات PHP 7.3
sudo apt -y install php-cli php-fpm php-json php-pdo php-mysql php-zip php-gd  php-mbstring php-curl php-xml php-pear php-bcmath
```

تحقق من إصدار PHP للتأكد من الوظائف
```
php -v
```

</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">

<br/>

**Apache (خادم الويب)**

🗄️ Ubuntu 16.X/18.X/19.X:
```
sudo apt update && sudo apt -y upgrade
sudo apt-get -y install apache2
```

**PHP (مفسر النصوص الفائقة)**

🗄️ Ubuntu 16.X:
```
# الخطوة 1: إضافة مستودع PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# الخطوة 2: تثبيت PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# الخطوة 3: تثبيت امتدادات PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 18.X:
```
# الخطوة 1: إضافة مستودع PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# الخطوة 2: تثبيت PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# الخطوة 3: تثبيت امتدادات PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 19.X:
```
# الخطوة 1: إضافة مستودع PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# الخطوة 2: تثبيت PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# الخطوة 3: تثبيت امتدادات PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

تحقق من إصدار PHP للتأكد من الوظائف
```
php -v
```

</TabItem>
<TabItem value="CentOS" label="CentOS">
<br/>

**Apache (خادم الويب)**

🗄️ CentOS 6:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd.service
```

🗄️ CentOS 7:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

🗄️ CentOS 8:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

**PHP (مفسر النصوص الفائقة)**

🗄️ CentOS 6:
```
# الخطوة 1: إعداد مستودع Yum
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

# الخطوة 2: تثبيت PHP 7.3
yum --enablerepo=remi-php73 install php

# الخطوة 3: تثبيت امتدادات PHP 7.3
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 7:
```
# الخطوة 1: إعداد مستودع Yum
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# الخطوة 2: تثبيت PHP 7.3
yum --enablerepo=remi-php73 install php

# الخطوة 3: تثبيت امتدادات PHP 7.3
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 8:
```
# الخطوة 1: إعداد مستودع Yum
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

# الخطوة 2: تثبيت PHP 7.3
dnf module reset php
dnf module enable php:remi-7.3
dnf install php
```

تحقق من إصدار PHP للتأكد من الوظائف
```
php -v
```

</TabItem>
</Tabs>

الخطوة التالية هي تحديد نوع قاعدة البيانات لتخزين المعلومات ذات الصلة. هناك عدة خيارات:

<Tabs>

<TabItem value="MariaDB" label="MariaDB" default>

<br/>
إذا قررت استخدام هذا النوع من قواعد البيانات، فعليك اتباع الخطوات التالية:

تثبيت الحزمة:
```
sudo apt-get install mariadb-server php-mysql
```

أثناء التثبيت، سيُطلب منك تعيين كلمة مرور root. إذا لم يُطلب كلمة مرور، فالكلمة الافتراضية فارغة. هذا غير آمن ويجب تغييره فورًا!

الخطوة التالية هي الاتصال بخادم قاعدة البيانات وإنشاء قاعدة البيانات المطلوبة:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

بعد ذلك، يجب إنشاء مستخدم يحصل على صلاحية الوصول إلى قاعدة بيانات Nextcloud.

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

:::info
لا تتخطى هذه الخطوة باستخدام مستخدم root. هذا غير آمن وقد يعرض بياناتك للخطر!
:::

الخطوة الأخيرة هي منح الصلاحيات للمستخدم الجديد:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

بعد الانتهاء، يمكنك الضغط على Ctrl-D للخروج من قاعدة البيانات والمتابعة للخطوات التالية.

</TabItem>
<TabItem value="MySQL" label="MySQL">

<br/>
إذا قررت استخدام هذا النوع من قواعد البيانات، فعليك اتباع الخطوات التالية:

تثبيت الحزمة:
```
sudo apt-get install mysql-server php-mysql
```

أثناء التثبيت، سيُطلب منك تعيين كلمة مرور root. إذا لم يُطلب كلمة مرور، فالكلمة الافتراضية فارغة. هذا غير آمن ويجب تغييره فورًا!

الخطوة التالية هي الاتصال بخادم قاعدة البيانات وإنشاء قاعدة البيانات المطلوبة:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

بعد ذلك، يجب إنشاء مستخدم يحصل على صلاحية الوصول إلى قاعدة بيانات Nextcloud.

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

:::info
لا تتخطى هذه الخطوة باستخدام مستخدم root. هذا غير آمن وقد يعرض بياناتك للخطر!
:::

الخطوة الأخيرة هي منح الصلاحيات للمستخدم الجديد:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

بعد الانتهاء، يمكنك الضغط على Ctrl-D للخروج من قاعدة البيانات والمتابعة للخطوات التالية.

</TabItem>
<TabItem value="PostgreSQL" label="PostgreSQL">
<br/>
إذا قررت استخدام هذا النوع من قواعد البيانات، فعليك اتباع الخطوات التالية:

تثبيت الحزمة:
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

أثناء التثبيت، سيُطلب منك تعيين كلمة مرور root. إذا لم يُطلب كلمة مرور، فالكلمة الافتراضية فارغة. هذا غير آمن ويجب تغييره فورًا!

الخطوة التالية هي الاتصال بخادم قاعدة البيانات وإنشاء قاعدة البيانات المطلوبة:

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

بعد ذلك، يجب إنشاء مستخدم يحصل على صلاحية الوصول إلى قاعدة بيانات Nextcloud.

```sql
CREATE USER nextcloud with encrypted password 'YOUR_PASSWORD_HERE';
```

:::info
لا تتخطى هذه الخطوة باستخدام مستخدم root. هذا غير آمن وقد يعرض بياناتك للخطر!
:::

الخطوة الأخيرة هي منح الصلاحيات للمستخدم الجديد:

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

بعد الانتهاء، يمكنك الضغط على Ctrl-D للخروج من قاعدة البيانات. بعد ذلك يمكنك تعديل قاعدة بيانات PostgreSQL إما عبر مثبت الويب أو عبر ملف **config.php**.

```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "pgsql",
  "dbname"        => "nextcloud",
  "dbuser"        => "username",
  "dbpass"        => "password",
  "dbhost"        => "localhost",
  "dbtableprefix" => "",
);
```

</TabItem>
<TabItem value="SQLite" label="SQLite">

<br/>
إذا قررت استخدام هذا النوع من قواعد البيانات، فعليك اتباع الخطوات التالية:

تثبيت الحزمة:
```
apt-get install sqlite3 php-sqlite3
```

إنشاء قاعدة بيانات SQLite 3 جديدة
```
sqlite3 DatabaseName.db
```

بعد ذلك، يمكن تعديل قاعدة بيانات SQLite 3 إما عبر مثبت الويب أو عبر ملف **config.php**.
```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "sqlite",
  "dbname"        => "nextcloud",
  "dbtableprefix" => "",
);
```
</TabItem>
</Tabs>

## التثبيت

الآن يمكن بدء التثبيت الفعلي لـ Nextcloud. يجب تنزيل البرنامج وفك ضغطه:
```
cd /var/www/
wget https://download.nextcloud.com/server/releases/latest.zip
apt-get install unzip
unzip latest.zip
chown -R www-data:www-data nextcloud
rm latest.zip
```

بعد الانتهاء من هذه الخطوة، حان الوقت لتشغيل سكربت التثبيت. يمكن الوصول إليه عبر المتصفح من خلال الرابط التالي:

:::info
**http://domain.tld/nextcloud/** 
:::

تظهر صفحة إعداد سكربت التثبيت، حيث يتم إنشاء مستخدم root وتعريف معلومات قاعدة البيانات:

![](https://screensaver01.zap-hosting.com/index.php/s/79kgamkS36Dgi9x/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/qJs3Sd8TiYAg6mB/preview)


## الأمان والسلامة

**تحذيرات الإعداد**

![](https://screensaver01.zap-hosting.com/index.php/s/nat3Fekj6MRP8Nw/preview)



**مجلد البيانات**

ننصح بشدة بوضع مجلد البيانات خارج مجلد الجذر الخاص بالويب (أي خارج /var/www). أسهل طريقة للقيام بذلك هي أثناء التثبيت الجديد. يمكن تحديد المجلد أثناء الإعداد. لكن يجب إنشاء المجلد أولاً وضبط الأذونات المناسبة. يمكن تخزين البيانات مثلاً في مجلد يسمى Cloud داخل مجلد المنزل.

```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**HTTPS عبر شهادة SSL (Let's Encrypt)** 

يجب أن يكون الحل السحابي الجيد متاحًا فقط عبر اتصال SSL. بدون تشفير SSL، تنتقل البيانات والمعلومات كنص عادي. يمكن اعتراض هذه المعلومات بسهولة وسرعة وقراءتها بدون تشفير.

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
 DocumentRoot "/var/www/nextcloud"
 ServerName domain.tld

 ErrorLog ${APACHE_LOG_DIR}/error.log
 CustomLog ${APACHE_LOG_DIR}/access.log combined

<Directory /var/www/nextcloud/>
 Options +FollowSymlinks
 AllowOverride All

 <IfModule mod_dav.c>
 Dav off
 </IfModule>

 SetEnv HOME /var/www/nextcloud
 SetEnv HTTP_HOME /var/www/nextcloud
 Satisfy Any

</Directory>

SSLCertificateFile /etc/letsencrypt/live/domain.tld/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/domain.tld/privkey.pem
</VirtualHost>
</IfModule>

<IfModule mod_headers.c>
     Header always set Strict-Transport-Security "max-age=15768000; preload"
 </IfModule>
```



علاوة على ذلك، يجب إعادة توجيه كل حركة HTTP إلى HTTPS باستخدام إعادة توجيه دائمة برمز الحالة 301. يمكن تحقيق ذلك باستخدام Apache مع تكوين مثل التالي:

```
<VirtualHost *:80>
   ServerName domain.tld
   Redirect permanent / https://domain.tld/
</VirtualHost>
```


## إدارة Nextcloud

يمكن الوصول إلى Nextcloud عبر المتصفح، وكذلك عبر الهاتف الذكي والكمبيوتر باستخدام التطبيق. يمكن العثور على مصادر التنزيل هنا: https://nextcloud.com/install/#install-clients

![](https://screensaver01.zap-hosting.com/index.php/s/aw6qpNE7TkwQeaP/preview)

ضمن الإعدادات يمكنك تعديل بعض الخيارات حتى بعد الإعداد وعرض معلومات مهمة مثل السجلات، الأنشطة. يشمل ذلك إعدادات أمان إضافية (المصادقة الثنائية، التشفير، ...)، إعدادات التصميم (الشعار، اللون، الشعار النصي، الرأس)، إعدادات الوصول والمزيد.

**التطبيقات**

بالإضافة إلى ذلك، هناك إمكانية تثبيت تطبيقات إضافية بجانب التطبيقات الافتراضية. يمكنك الوصول إليها عبر عنصر القائمة **التطبيقات**.

![](https://screensaver01.zap-hosting.com/index.php/s/wKERd24E25668kt/preview)

مع هذه **التطبيقات** يمكنك تخصيص Nextcloud أكثر حسب رغباتك.


## الخلاصة

تهانينا، لقد قمت بتثبيت Nextcloud بنجاح! إذا كان لديك أي أسئلة أو مشاكل أخرى، يرجى التواصل مع فريق الدعم لدينا، المتوفر لمساعدتك يوميًا!

<InlineVoucher />