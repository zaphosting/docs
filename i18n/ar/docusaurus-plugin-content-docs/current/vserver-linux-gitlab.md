---
id: vserver-linux-gitlab
title: "تثبيت GitLab على سيرفر Linux - استضف منصة DevOps الخاصة بك"
description: "اكتشف كيفية تثبيت GitLab على Linux بكفاءة لتبسيط سير عمل DevOps وتعزيز التعاون بين الفريق → تعلّم المزيد الآن"
sidebar_label: تثبيت GitLab
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

GitLab هو منصة DevOps شاملة تتيح للفرق التعاون على الكود، وأتمتة سير العمل، وإدارة دورة حياة تطوير البرمجيات بالكامل بكفاءة. في هذا الدليل، سنشرح كيفية تثبيت GitLab على سيرفر Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## التحضير

المتطلبات التالية موصى بها من قبل فريق [GitLab الرسمي](https://docs.gitlab.com/ee/install/requirements.html) ومن الأفضل اتباعها لتجنب المشاكل لاحقًا.

#### الأجهزة

| المكونات      | الحد الأدنى             | الموصى به                  |
| ------------- | ---------------------- | -------------------------- |
| المعالج (CPU) | 2x 2 GHz               | 4x 2.6+ GHz                |
| الذاكرة (RAM) | 4 جيجابايت             | 8 جيجابايت                 |
| التخزين      | 10 جيجابايت            | 50+ جيجابايت               |
| عرض النطاق    | 100 ميجابت/ث (رفع وتنزيل) | 100 ميجابت/ث (رفع وتنزيل)  |

#### البرمجيات

| النظام الأساسي    | الخيارات                                                      |
| ----------------- | ------------------------------------------------------------- |
| نظام التشغيل      | Ubuntu (20.04, 22.04, 24.04)، Debian (10, 11, 12)، OpenSUSE (15.5) |
| قاعدة البيانات    | PostgreSQL 14.9+                                              |
| سيرفر الويب      | NGINX (مرفق مع GitLab)، Puma 6.4.2+                           |
| أخرى             | Redis 7.x+، Sidekiq 7.3.2+، Prometheus 2.54.1+               |

:::info
للحصول على أدق وأحدث المواصفات، يرجى الرجوع إلى وثائق [متطلبات الأجهزة](https://docs.gitlab.com/ee/install/requirements.html) الرسمية من GitLab.
:::

يجب إنشاء اتصال عبر عميل SSH لتثبيت GitLab على سيرفر Linux الخاص بك. اطلع على دليلنا [الوصول الأولي (SSH)](vserver-linux-ssh.md) لمعرفة المزيد.

بمجرد إنشاء الاتصال، يمكنك البدء بتثبيت الحزم اللازمة لتثبيت GitLab.

## الخطوة 1: تثبيت التبعيات

أولًا، عليك تثبيت بعض التبعيات لتشغيل مثبت GitLab. استخدم الأوامر التالية لتثبيت التبعيات المطلوبة على سيرفر Linux الخاص بك.

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

قم بتحديث قائمة الحزم إلى أحدث إصدار وثبت حزمة OpenSSH Server مع المتطلبات اللازمة باستخدام الأمر التالي. هذا هو كيف سيتم استضافة لوحة واجهة الويب لـ GitLab.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

يمكنك أيضًا تثبيت Postfix (خادم SMTP) إذا كنت ترغب في إرسال إشعارات بريد إلكتروني عند استخدام GitLab. هذا **اختياري**.

إذا أردت استخدام إشعارات البريد الإلكتروني، قم بتثبيت Postfix بالأمر التالي:
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

قم بتحديث قائمة الحزم إلى أحدث إصدار وثبت حزمة OpenSSH Server مع المتطلبات اللازمة باستخدام الأمر التالي. هذا هو كيف سيتم استضافة لوحة واجهة الويب لـ GitLab.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

يمكنك أيضًا تثبيت Postfix (خادم SMTP) إذا كنت ترغب في إرسال إشعارات بريد إلكتروني عند استخدام GitLab. هذا **اختياري**.

إذا أردت استخدام إشعارات البريد الإلكتروني، قم بتثبيت Postfix بالأمر التالي:
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

ثبت حزمة OpenSSH Server مع المتطلبات اللازمة باستخدام الأمر التالي. هذا هو كيف سيتم استضافة لوحة واجهة الويب لـ GitLab.

```
sudo zypper install curl openssh perl
```

بعدها، تأكد من تفعيل خدمة OpenSSH daemon بالأوامر التالية:
```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

تأكد من أن الجدار الناري يسمح بالوصول اللازم إذا كنت تستخدم `firewalld`.

اكتشف إذا كنت تستخدم `firewalld` بالأمر التالي:

```bash
sudo systemctl status firewalld
```

إذا كنت تستخدمه، تأكد من فتح المنافذ المطلوبة (80 و443 بشكل افتراضي):

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

يمكنك أيضًا تثبيت Postfix (خادم SMTP) إذا كنت ترغب في إرسال إشعارات بريد إلكتروني عند استخدام GitLab. هذا **اختياري**.

إذا أردت استخدام إشعارات البريد الإلكتروني، قم بتثبيت Postfix بالأوامر التالية:
```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
أثناء تثبيت Postfix، قد تظهر نافذة إعداد. في هذه الحالة، اختر 'Internet Site' واضغط Enter. استخدم نطاق DNS الخارجي لسيرفر Linux الخاص بك كـ 'mail name' واضغط Enter. إذا ظهرت شاشات إضافية، استمر بالضغط على Enter لقبول الإعدادات الافتراضية.

إذا كنت تفضل استخدام حل آخر لإرسال البريد الإلكتروني، تخطى هذه الخطوة وقم [بتكوين خادم SMTP خارجي](https://docs.gitlab.com/omnibus/settings/smtp) بعد تثبيت GitLab على سيرفر Linux الخاص بك باتباع دليل رسمي من فريق GitLab.
:::

## الخطوة 2: تثبيت GitLab

بعد تنزيل وتثبيت جميع التبعيات المطلوبة، أنت الآن جاهز لتثبيت GitLab.

في هذا الدليل، سنثبت GitLab مباشرة من مستودعات الحزم الرسمية.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu و Debian" default>
السكريبت التالي سيضيف مستودعات GitLab إلى مدير الحزم apt:

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

بعد الانتهاء، يمكن تثبيت حزمة `gitlab-ee`:

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
السكريبت التالي سيضيف مستودعات GitLab إلى مدير الحزم Zypper:

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

بعد الانتهاء، يمكن تثبيت حزمة `gitlab-ee`:

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

بعد إتمام هذه العملية، يجب أن يكون GitLab جاهزًا للعمل على سيرفر Linux الخاص بك. تابع القسم التالي لتكوين بعض الإعدادات الأساسية لضمان عمل السيرفر بشكل صحيح.

## الخطوة 3: تكوين GitLab

للتأكد من أن كل شيء يعمل بشكل صحيح، يجب إجراء بعض التعديلات على ملف التكوين. ابدأ بفتح ملف تكوين GitLab باستخدام محرر النصوص المفضل لديك. كمثال، سنستخدم المحرر المدمج `nano`.
```
sudo nano /etc/gitlab/gitlab.rb
```

بعدها، ابحث عن السطر `external_url` وأدخل نطاقك أو عنوان IP الخاص بسيرفر Linux إذا لم يكن لديك نطاق لاستخدامه مع GitLab.

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
## GitLab URL
##! URL الذي سيكون GitLab متاحًا عليه.
##! لمزيد من التفاصيل حول تكوين external_url راجع:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! ملاحظة: أثناء التثبيت/التحديث، سيتم استخدام قيمة المتغير البيئي
##! EXTERNAL_URL لملء/استبدال هذه القيمة.
##! على مثيلات AWS EC2، نحاول أيضًا جلب اسم المضيف/عنوان IP العام
##! من AWS. لمزيد من التفاصيل، راجع:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`نطاقك / عنوان IPv4 لسيرفر Linux الخاص بك`'
```

ننصح أيضًا بإدخال بريدك الإلكتروني في السطر `letsencrypt['contact_emails']`. هذا سيمكن Let's Encrypt من إرسال إشعارات والتواصل معك بخصوص شهادات SSL المجانية والتلقائية.

:::note
يجب استخدام نطاق إذا كنت ترغب في الحصول على شهادة SSL مجانية من Let's Encrypt. لا يمكنك طلب شهادة مباشرة على عنوان IP.
:::

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
################################################################################
# تكامل Let's Encrypt
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`بريدك الإلكتروني هنا`] # يجب أن تكون مصفوفة من عناوين البريد الإلكتروني للتواصل
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# راجع https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically لمزيد من المعلومات عن هذه الإعدادات
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # يجب أن يكون رقمًا أو تعبير كرون، إذا تم تحديده.
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
يمكنك استخدام `CTRL+W` للبحث عن `letsencrypt['contact_emails']` والضغط Enter لتسهيل العثور على السطر دون البحث يدويًا في الملف.
:::

عند الانتهاء، اضغط `CTRL+X` ثم `Y` ثم Enter لتأكيد التغييرات.

أخيرًا، شغّل الأمر التالي لإعادة تكوين GitLab باستخدام الإعدادات الجديدة.
```
sudo gitlab-ctl reconfigure
```

قد تستغرق هذه العملية بعض الوقت لأنها ستقوم بتهيئة GitLab باستخدام معلومات التكوين المحدثة، مع عمليات تلقائية. كما سيتم إصدار شهادات SSL إذا تم استخدام نطاق.

## الخطوة 4: الوصول إلى واجهة الويب

بعد التهيئة، يجب أن يكون السيرفر متاحًا الآن عبر متصفح الويب. انتقل إلى موقعك بإدخال اسم النطاق أو عنوان IP كما يلي:
```
https://[نطاقك] OR http://[عنوان IP الخاص بك]
```

عند الدخول لأول مرة إلى واجهة الويب، ستظهر لك صفحة تسجيل الدخول.

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

للحصول على صلاحيات المدير في أول تسجيل دخول، قم بتسجيل الدخول كمستخدم root باستخدام اسم المستخدم `root`.

بالنسبة لكلمة المرور، يجب الوصول إلى ملف على سيرفر Linux حيث يتم تخزينها. افتح الملف بالأمر التالي وابحث عن حقل `Password`.
```
sudo nano /etc/gitlab/initial_root_password
```

<!-- The following code is from the /etc/gitlab/initial_root_password file -->
```
# تحذير: هذه القيمة صالحة فقط في الحالات التالية

# 1. إذا تم توفيرها يدويًا (إما عبر متغير البيئة `GITLAB_ROOT_PASSWORD` أو عبر إعداد `gitlab_rails['initial_root_password']` في `gitlab.rb`، وتم توفيرها قبل تهيئة قاعدة البيانات لأول مرة)

# 2. لم يتم تغيير كلمة المرور يدويًا، سواء عبر واجهة المستخدم أو عبر سطر الأوامر.

#

# إذا لم تعمل كلمة المرور المعروضة هنا، يجب إعادة تعيين كلمة مرور المدير باتباع https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: `[كلمة المرور الخاصة بك هنا]`

# ملاحظة: سيتم حذف هذا الملف تلقائيًا في أول تشغيل لإعادة التهيئة بعد 24 ساعة.
```

أدخل اسم المستخدم وكلمة المرور في صفحة تسجيل الدخول للدخول إلى لوحة معلومات GitLab لأول مرة. يجب أن تكون قادرًا الآن على الوصول إلى لوحة GitLab الخاصة بك على سيرفر Linux الخاص بك.

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

ننصح بشدة بإنشاء مستخدم جديد و/أو تغيير كلمة مرور مستخدم `root`. يمكن فعل ذلك من خلال الدخول إلى **Admin** في الزاوية السفلية اليسرى ثم اختيار **Overview->Users**. في هذه الصفحة، يمكنك إدارة المستخدمين لحساب GitLab الخاص بك.

## اختياري: إعداد جدار ناري باستخدام ufw

يمكنك تخطي هذا إذا لم ترغب في تكوين جدار ناري أو إذا كنت تستخدم مثلاً `firewalld` على OpenSUSE.
تأكد من السماح بالمنافذ 80/443 ومنفذ 22.

### تثبيت ufw

إذا كنت قد ثبتت `ufw` مسبقًا، يمكنك تخطي هذه الخطوة بأمان.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu و Debian" default>
```bash
sudo apt-get install -y ufw
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
```bash
sudo zypper install ufw
```
</TabItem>

</Tabs>

### فتح المنافذ المطلوبة

```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

### تفعيل الجدار الناري

:::warning
بشكل افتراضي، هذا سيمنع الوصول إلى جميع المنافذ غير المسموح بها. تأكد من إعداد القائمة البيضاء بشكل صحيح قبل تشغيل هذا الأمر.
:::

لتفعيل الجدار الناري، استخدم الأمر التالي:

```
sudo ufw enable
```

## الخاتمة

مبروك، لقد قمت بتثبيت GitLab بنجاح! إذا كان لديك أي أسئلة أو مشاكل إضافية، يرجى التواصل مع فريق الدعم لدينا، المتوفر لمساعدتك يوميًا!

إذا كنت ترغب في إجراء إعدادات إضافية، ننصح بقراءة [الوثائق الرسمية لـ GitLab](https://docs.gitlab.com/ee/install/next_steps.html) للخطوات التالية.

<InlineVoucher />