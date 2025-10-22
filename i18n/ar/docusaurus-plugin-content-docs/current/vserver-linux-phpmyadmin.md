---
id: vserver-linux-phpmyadmin
title: "VPS: تثبيت phpMyAdmin"
description: "اكتشف كيف تدير قواعد بيانات MySQL وMariaDB بسهولة مع واجهة phpMyAdmin الودية على الويب → تعلّم المزيد الآن"
sidebar_label: تثبيت phpMyAdmin
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

phpMyAdmin هي أداة مجانية تعتمد على الويب لإدارة قواعد بيانات MySQL وMariaDB. توفر واجهة سهلة الاستخدام تتيح للمستخدمين إنشاء وتحرير وإدارة وحذف قواعد البيانات دون الحاجة لكتابة أوامر SQL يدويًا.

<InlineVoucher />

## التحضير

قبل بدء التثبيت، تأكد من تحديث النظام. يمكن تنفيذ التحديثات والترقيات المعلقة كما يلي:

```
sudo apt update -y
sudo apt upgrade -y
```

يجب أيضًا التأكد من تثبيت PHP على نظامك مسبقًا. هذا ضروري لاستخدام phpMyAdmin. لمعرفة كيفية تثبيت PHP، يرجى مراجعة [دليل تثبيت PHP](vserver-linux-php.md). 
:::warning نقص حزم PHP
إذا كانت حزم PHP اللازمة مفقودة، فلن تتم معالجة وعرض ملفات PHP الخاصة بـ phpMyAdmin بشكل صحيح. 
:::

## التثبيت

إذا تم الانتهاء من التحضير، يمكن الآن بدء تثبيت واجهة phpMyAdmin. للقيام بذلك، افتح أولاً مجلد التثبيت الذي تريد تثبيت phpMyAdmin فيه. 
انتقل إلى المجلد المناسب باستخدام الأمر `cd /usr/share`. ثم يجب تنزيل أحدث إصدار من phpMyAdmin إلى مجلد التثبيت باستخدام `wget`:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
إذا لم يتم العثور على خدمة `wget`، يمكن تثبيتها باستخدام الأمر `sudo apt install wget -y`. 
:::

بمجرد اكتمال التنزيل، يمكن فك ضغط ملف ZIP المحمّل باستخدام الأمر التالي: 

```
unzip phpmyadmin.zip
```
:::warning
إذا لم يتم العثور على خدمة `unzip`، يمكن تثبيتها باستخدام الأمر `sudo apt install unzip -y`. 
:::

يمكن الآن إعادة تسمية الأرشيف المفكوك إلى اسم أبسط، وحذف ملف ZIP، وضبط الأذونات اللازمة: 

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```



## التهيئة

### ملف تهيئة سيرفر الويب
الآن يجب إضافة phpMyAdmin إلى تهيئة سيرفر الويب. للقيام بذلك، استخدم الأمر `nano /etc/apache2/conf-available/phpmyadmin.conf` لإنشاء ملف تهيئة مضيف افتراضي جديد واملأه بالمحتوى التالي:

```
# تهيئة phpMyAdmin لأباتشي

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# منع الوصول للويب لأسباب أمنية إلى المجلدات التي لا تحتاج لذلك
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

بمجرد ملء ملف تهيئة Apach2-phpMyAdmin بالمحتوى، يمكن حفظه وإغلاقه بالضغط على ***CTRL+X***، ثم اضغط ***Y*** وأكد بالضغط على ***Enter***.

يجب بعد ذلك تفعيل وتحميل ملف تهيئة المضيف الافتراضي الجديد. للقيام بذلك، نفذ الأوامر التالية:

```
a2enconf phpmyadmin
systemctl reload apache2
```



### إنشاء مجلد مؤقت مطلوب

لضمان عمل phpMyAdmin بشكل صحيح، يجب إنشاء مجلد مؤقت وضبط الأذونات اللازمة. يمكنك القيام بذلك بالأوامر التالية: 

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```



## الخاتمة

مبروك، لقد قمت بتثبيت وتكوين phpMyAdmin بنجاح. يمكنك الوصول إلى واجهة الويب باستخدام عنوان IP ومسار سيرفرك (http://IP-Address/phpmyadmin). لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />