---
id: vserver-linux-lemp-stack
title: "VPS: إعداد حزمة LEMP - لينكس، Nginx، MySQL، PHP"
description: "اكتشف كيفية إعداد حزمة LEMP لاستضافة مواقع PHP الديناميكية على سيرفرات VPS لينكس → تعلّم المزيد الآن"
sidebar_label: حزمة ويب LEMP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

حزمة **LEMP** هي مجموعة شهيرة من البرمجيات مفتوحة المصدر التي تُثبت معًا لتوفير استضافة مواقع ديناميكية بسيطة، مع تركيز خاص على مواقع وتطبيقات PHP. الاختصار يعني: **L**ينكس كنظام تشغيل، "**E**ngine x" (nginx) كسيرفر ويب، **M**ySQL كقاعدة بيانات وأخيرًا **P**HP للمعالجة. في هذا الدليل، سنغطي عملية إعداد حزمة LEMP على VPS لينكس، مع شرح مفصل ومثال لإنشاء موقع قائمة مهام.

<InlineVoucher />

## التحضير

ابدأ بالاتصال بسيرفرك عبر SSH. إذا لم تكن تعرف كيف تفعل ذلك، يرجى مراجعة دليلنا [الوصول الأولي (SSH)](vserver-linux-ssh.md).

في هذا الدليل، سنستخدم أوبونتو كتوزيعة لينكس. التعليمات هي نفسها تقريبًا لـ Debian ويجب أن تكون مشابهة للتوزيعات الأخرى، لكن قد تختلف صياغة الأوامر قليلاً. تأكد من تثبيت نظام تشغيل وأنك متصل بالسيرفر عبر SSH.

كالعادة، قبل المتابعة بالتثبيت، تأكد من تحديث جميع الحزم عبر الأمر التالي:
```
// أوبونتو وديبيان
sudo apt update

// سنت أو إس
sudo yum update

// أوبن سوزي
sudo zypper up

// فيدورا
sudo dnf upgrade --refresh
```

## التثبيت

يمكن تقسيم التثبيت بسهولة إلى كل مكون أساسي من حزمة LEMP، بدءًا بسيرفر الويب Nginx، يليه قاعدة بيانات MySQL وأخيرًا PHP. خلال التثبيت، سنقوم بإعداد موقع اختبار مكتوب بـ PHP ويتصل بقاعدة بيانات MySQL. وأخيرًا، ستتم معالجة كل طلب ويب وتقديمه عبر سيرفر Nginx.

### إعداد Nginx

Nginx هو سيرفر الويب الذي سيعالج طلبات الويب الواردة ويقدم الردود. قم بتثبيته بالأمر التالي:
```
sudo apt install nginx
```

بعد التثبيت، يجب التأكد من إنشاء قواعد جدار ناري مناسبة لضمان وصول سيرفر الويب إلى الإنترنت. في هذا المثال، سنستخدم **جدار ناري UFW** لأن Nginx لديه تطبيق مسجل له.

إذا كنت تستخدم جدار ناري مختلف، تأكد من السماح بالمنفذ 80 (HTTP) عبر الجدار الناري. يمكنك معرفة المزيد عن الجدران النارية في لينكس عبر دليلنا [إدارة الجدار الناري](vserver-linux-firewall.md).

تأكد من تفعيل جدار ناري UFW وأيضًا من إنشاء قاعدة للسماح بالاتصال عبر SSH.
```
# إنشاء قاعدة للسماح بـ SSH
sudo ufw allow OpenSSH

# تفعيل جدار ناري UFW
sudo ufw enable
```

:::caution
تأكد من وجود قاعدة للسماح بالـ SSH إذا كنت تستخدم جدار ناري UFW! إذا لم تفعل، فلن تتمكن من الاتصال بالسيرفر عبر SSH مرة أخرى إذا فقدت الاتصال بجلسة العمل الحالية!
:::

الآن أنشئ القاعدة للسماح لـ Nginx ثم تحقق من وجود القواعد.
```
# إنشاء قاعدة للسماح لـ Nginx
sudo ufw allow in "Nginx Full"

# التحقق من قواعد جدار ناري UFW
sudo ufw status
```

:::tip
يمكنك عرض الملفات التعريفية المتاحة عبر الأمر `ufw app list`. في المثال أعلاه، استخدام `Nginx Full` يعني إنشاء قواعد لكل من HTTP (المنفذ 80) و HTTPS (المنفذ 443).
:::

يجب أن ترى قواعد `Nginx` و `Nginx (v6)` مع إجراءات `ALLOW`، مما يؤكد أن الجدار الناري جاهز. كما يجب أن ترى قواعد أخرى قد قمت بإعدادها سابقًا، بما في ذلك قاعدة SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

مع فتح الجدار الناري لـ Nginx، يجب الآن التأكد من أن Nginx يعمل بشكل صحيح. يمكنك فعل ذلك بمحاولة الوصول إلى عنوان IP الخاص بك عبر المتصفح، كالتالي: `http://[your_ipaddress]`

إذا كان يعمل، سترى صفحة ترحيب افتراضية. إذا لم تتمكن، تحقق من حالة الخدمة باستخدام الأمر: `systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### إعداد MySQL

الآن ستقوم بتثبيت وإعداد سيرفر MySQL الذي سيعمل كقاعدة بيانات لتخزين البيانات بشكل دائم بطريقة علاقاتية. قم بتثبيته بالأمر التالي:
```
sudo apt install mysql-server
```

بعد الانتهاء، يُنصح بتشغيل سكريبت التثبيت الآمن الذي يضمن بقاء سيرفر MySQL الخاص بك آمنًا. هذا اختياري لكنه موصى به بشدة. يمكنك تشغيله عبر الأمر `sudo mysql_secure_installation`.

سيأخذك هذا خلال إعداد تفاعلي. أولًا، سيُطلب منك اختيار التحقق من كلمات المرور. نوصي باختيار `Y` لضمان قبول كلمات مرور آمنة فقط في المستقبل، ثم اختيار إما `MEDIUM` عبر `1` أو `STRONG` عبر `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

بعدها سيُطلب منك إزالة المستخدم `anonymous` ومنع تسجيل دخول root عن بُعد. نوصي بشدة بالموافقة على كلا الخيارين عبر `Y` لأسباب أمنية. هذا يضمن إزالة المستخدم التجريبي وأن مستخدم root الرئيسي يمكن استخدامه محليًا فقط عبر SSH وليس من أي مكان آخر، مما يقلل المخاطر.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

أخيرًا، سيُطلب منك إزالة قاعدة بيانات `test` وإعادة تحميل جداول الصلاحيات. مرة أخرى نوصي بالموافقة عبر `Y` لأن جدول الاختبار غير ضروري ويجب إعادة تحميل جداول الصلاحيات لتطبيق التعديلات.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

الآن تحقق مما إذا كانت قاعدة بيانات MySQL تعمل عبر محاولة تسجيل الدخول بالأمر: `sudo mysql -u root`. إذا نجحت، سترى رسالة ترحيب. يمكنك الخروج باستخدام الأمر `quit` عند الانتهاء.

### إعداد PHP

المكون الأخير في حزمة LEMP هو PHP، ولـ nginx يتطلب استخدام برنامج خارجي يسمى `php-fpm` (مدير عمليات PHP fastCGI). يتم تكوين Nginx لتمرير الطلبات إلى `php-fpm` قبل الرد عليها لاحقًا عند استخدام كتل السيرفر.

الأمر التالي يثبت أحدث نسخة من php-fpm مع إضافة PHP لـ MySQL، للسماح لـ Nginx بالعمل مع PHP وتمكين PHP من استخدام MySQL.
```
sudo apt install php-fpm php-mysql
```

تأكد من نجاح التثبيت عبر التحقق من النسخة. إذا ظهر رقم نسخة، فهذا يعني أن PHP يعمل بشكل صحيح.
```
php -v
```

:::tip امتدادات PHP
لحالات الاستخدام المتقدمة، قد تحتاج إلى امتدادات PHP إضافية لوظائف أكثر. يمكنك عرض قائمة بهذه الامتدادات عبر الأمر `apt search php- | less`.

استخدم الأسهم للتصفح واضغط `Q` للخروج. لتثبيت امتداد، استخدم أمر apt install كالتالي. يمكنك إدخال عدة امتدادات مرة واحدة مفصولة بمسافة لتسريع التثبيت.

```
sudo apt install [php_extension] [...]
```
:::

### إنشاء موقع اختبار

بعد الانتهاء من تثبيت كل مكونات LEMP، سننشئ موقع اختبار لعرض كيف تعمل الحزمة معًا لتشكيل حل رائع لمواقع ديناميكية. هذا اختياري تمامًا، لكنه مفيد لفهم كيفية استخدام هذه الأدوات لإعداد مواقعك الخاصة.

في هذا المثال، سننشئ موقع قائمة مهام صغير عبر PHP يسترجع ويعرض مهام القائمة. سيتم تخزينها في جدول قاعدة بيانات MySQL وسيتم تقديمها عبر Nginx.

سنستخدم نطاق اختبار `zapdocs.example.com` طوال الدليل، لأنه في سيناريو حقيقي ستستخدم نطاقًا. يجب **أن تقوم** بإعداد سجل DNS من نوع `A` للنطاق يشير إلى عنوان IP الخاص بسيرفرك. إذا كنت بحاجة للمساعدة، تصفح دليلنا [سجلات النطاق](domain-records.md).

:::note
يمكنك اختيار عدم استخدام نطاق واستبدال ذكر `[your_domain]` باسم عادي. عندها ستصل للموقع عبر عنوان IP. لكن لاحظ أنه عند إنشاء ملف كتلة السيرفر لاحقًا، يجب إزالة معامل `server_name`.
:::

#### إعداد Nginx

عادةً، تُخزن جميع ملفات وبيانات المواقع تحت مجلد `/var/www`. بشكل افتراضي، يأتي Nginx مع مجلد `html` يحتوي على صفحة افتراضية. لضمان التنظيم خاصة عند استضافة عدة مواقع على نفس Nginx، نوصي بإعداد كل موقع في مجلد منفصل.

لعمل ذلك، يمكنك ببساطة إنشاء مجلد جديد في `/var/www/[your_domain]` لكل نطاق موقع. في هذا المثال، سيكون `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

الآن ستنشئ ملف تكوين كتلة سيرفر Nginx جديد في مجلد `sites-available` لهذا النطاق والمجلد.
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

استخدم القالب أدناه وانسخه في محرر nano، مع استبدال `[your_domain]` بالنطاق الذي تستخدمه.
```
server {
    listen 80;
    server_name [your_domain] www.[your_domain];
    root /var/www/[your_domain];

    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php[your_phpversion]-fpm.sock;
     }

    location ~ /\.ht {
        deny all;
    }
}
```

:::important نسخة PHP
من المهم تغيير `[your_phpversion]` إلى نسخة PHP الحالية المثبتة. للتحقق، شغّل `php -v` والذي سيُظهر نسخة، مثلاً: `PHP 8.3.6 (cli) (built: Mar 19 2025 10:08:38) (NTS)`.

في هذا المثال، ستضع `8.3` كنسخة فرعية رئيسية، فيصبح السطر: `fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;`
:::

هذا الملف الجديد لكتلة السيرفر يتعامل مع طلبات المنفذ 80 (HTTP) ويتحقق مما إذا كان الطلب يطابق `server_name` المحدد، في هذه الحالة نطاقك. كما يشير إلى أن مجلد `/var/www/[your_domain]` الذي أنشأته سابقًا يجب استخدامه لتقديم الملفات.

احفظ الملف واخرج من nano باستخدام `CTRL + X`، ثم `Y` للتأكيد وأخيرًا `ENTER`.

الخطوة الأخيرة في إعداد Nginx هي تفعيل التكوين عبر ربط الملف من مجلد `sites-enabled`.
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note عدم استخدام نطاق
إذا كنت **لا تستخدم** نطاقًا، قم بإزالة سطر `server_name` أو علقه بإضافة `#` في بدايته. كما يجب تعطيل كتلة السيرفر الافتراضية عبر الأمر `sudo unlink /etc/nginx/sites-enabled/default`.
:::

ننصح باستخدام الأمر `sudo nginx -t` للتأكد من عدم وجود أخطاء في الصياغة.

وأخيرًا، أعد تشغيل Nginx لتفعيل المضيف الافتراضي الجديد باستخدام الأمر: `sudo systemctl reload nginx`.

#### إنشاء الموقع

بعد تكوين Nginx عبر كتلة السيرفر الجديدة ومجلد المستندات، حان الوقت لإنشاء الموقع الفعلي الذي سيتم تقديمه. حاليًا، المجلد فارغ لذا لن يتم تقديم أي شيء. سننشئ موقع قائمة مهام صغير كما ذكرنا سابقًا لهذا النطاق.

##### تحضير قاعدة البيانات

لنبدأ بإنشاء قاعدة بيانات جديدة وجدول لتخزين كل عنصر في القائمة. سجل دخولك إلى سيرفر MySQL.
```
sudo mysql -u root
```

الآن لننشئ قاعدة بيانات `todowebsite` وجدول `todoitems` بداخلها.
```
# إنشاء قاعدة البيانات
CREATE DATABASE todowebsite;

# استخدام قاعدة البيانات الجديدة
USE todowebsite;

# إنشاء جدول العناصر في قاعدة البيانات
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

مع جاهزية الجدول، لننشئ بعض الإدخالات التجريبية الآن.
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

أخيرًا، لننشئ مستخدمًا مخصصًا `todo` سيُستخدم فقط لهذا الموقع.
```
# إنشاء مستخدم مخصص
# استبدل [your_password] بكلمة المرور الخاصة بك
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# تعيين الصلاحيات للمستخدم (انسخ كأمر واحد)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# إعادة تحميل الصلاحيات
FLUSH PRIVILEGES;
```

مع تحضير قاعدة البيانات والمستخدم، يمكنك الخروج من طرفية MySQL عبر الأمر `quit` عند الانتهاء.

##### ملفات موقع PHP

الجزء الأخير من هذا المثال هو إعداد ملف موقع PHP الفعلي لصفحة المهام. سيتم ذلك عبر ملف جديد `index.php` في مجلد `/var/www/[your_domain]` الذي أنشأته سابقًا. افتح محرر nano لإنشاء الملف هناك.
```
sudo nano /var/www/[your_domain]/index.php
```

فيما يلي شفرة بسيطة يمكنك وضعها في محرر nano لصفحة مهام أساسية تعرض العناصر المخزنة في قاعدة البيانات. القسم الأول من PHP ينشئ اتصال MySQL بقاعدة بياناتك.

:::important
يجب تغيير حقل `[your_password]` إلى كلمة المرور التي عينتها لمستخدم `todo` سابقًا.
:::

القسم التالي من HTML يحتوي على الصفحة الرئيسية التي تنشئ قائمة غير مرتبة، وتكرر كل النتائج.

```
<?php
// إعداد اتصال MySQL
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// إنشاء الاتصال
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من نجاح الاتصال، وإرجاع خطأ إذا فشل
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// تنفيذ استعلام SQL لإرجاع الإدخالات من الجدول وتعيينها في متغير النتيجة
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF--8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-Do List</title>
  </head>
  <body>
      <h1>Awesome To-Do List :D</h1>
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
      <ul>
          <?php
          // التحقق من وجود نتائج
          if ($result->num_rows > 0) {
              // التكرار عبر كل عنصر من النتائج
              foreach ($result as $entry) {
                  echo "<li>";
                  // عرض الاسم واستخدام htmlspecialchars لمنع XSS (حقن النصوص)
                  echo htmlspecialchars($entry["name"]);

                  // عرض حالة الإنجاز
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // عرض تاريخ الإنشاء
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // إذا لم توجد عناصر، عرض رسالة افتراضية
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// إغلاق اتصال قاعدة البيانات
$conn->close();
?>
```

بعد نسخ الشفرة في محرر nano، احفظ الملف واخرج باستخدام `CTRL + X`، ثم `Y` للتأكيد وأخيرًا `ENTER`.

#### اختبار الموقع

لقد نجحت في اتباع الخطوات وإعداد موقع اختبار لقائمة مهام يستخدم كل مكونات حزمة LEMP!

يجب أن تتمكن الآن من الوصول إلى الموقع عبر النطاق (باستخدام `http`/المنفذ 80) الذي حددته سابقًا في ملف كتلة السيرفر، والذي في هذا المثال هو `zapdocs.example.com`. النتيجة النهائية يجب أن تبدو كما يلي:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## الخاتمة

مبروك، لقد قمت بتثبيت وإعداد حزمة LEMP بنجاح! كخطوة تالية، نوصي **بشدة** بإعداد نطاق وشهادة SSL لضمان نقل البيانات بأمان إلى مواقعك. يرجى مراجعة دليلنا [Certbot](vserver-linux-certbot.md) مع التركيز على **إضافة Nginx** واتباع الإعداد التفاعلي لتثبيت شهادة بسرعة وسهولة للنطاق الذي تختاره.

لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />