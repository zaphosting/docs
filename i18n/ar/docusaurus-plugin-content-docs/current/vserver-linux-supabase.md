---
id: vserver-linux-supabase
title: "VPS: إعداد Supabase على لينكس"
description: "اكتشف كيف تستضيف وتضبط Supabase كمنصة Postgres مفتوحة المصدر موثوقة مع المصادقة والميزات الفورية → تعلّم المزيد الآن"
sidebar_label: تثبيت Supabase
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Supabase هي منصة تطوير Postgres مفتوحة المصدر توفر قاعدة بيانات Postgres كاملة بالإضافة إلى المصادقة، واجهات برمجة تطبيقات فورية، الوقت الحقيقي، والتخزين، مما يجعلها بديل مفتوح المصدر لـ Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

تفكر تستضيف هذه الخدمة بنفسك؟ راح نرشدك خطوة بخطوة لكيفية إعدادها وضبطها، مع كل شيء لازم تعرفه.

<InlineVoucher />

## المتطلبات الأساسية

قبل تثبيت **Supabase**، تأكد أن بيئة الاستضافة عندك تلبي المتطلبات التالية لضمان تثبيت سلس وأداء مثالي.

| العتاد      | الحد الأدنى  | توصية ZAP-Hosting          |
| ----------- | ------------ | -------------------------- |
| CPU         | 1 نواة vCPU  | 4 أنوية vCPU               |
| RAM         | 4 جيجابايت   | 8 جيجابايت                 |
| مساحة القرص | 25 جيجابايت  | 25 جيجابايت                |

البرنامج يحتاج كل التبعيات الضرورية تكون مثبتة ويعمل على نظام تشغيل مدعوم. تأكد أن سيرفرك يلبي المتطلبات التالية قبل متابعة التثبيت:

**التبعيات:** `Git`، `Docker (Engine و Compose)`

**نظام التشغيل:** أحدث إصدار من أوبونتو/ديبيان يدعم Docker 2

تأكد من تثبيت كل التبعيات واستخدام إصدار نظام التشغيل الصحيح لتجنب مشاكل التوافق أثناء تثبيت Supabase.

## التحضير

قبل إعداد **Supabase**، لازم تجهز نظامك. هذا يشمل تحديث نظام التشغيل لأحدث إصدار وتثبيت كل التبعيات المطلوبة. هالتحضيرات تضمن بيئة مستقرة وتساعد على منع المشاكل أثناء أو بعد التثبيت.

### تحديث النظام
عشان تتأكد أن نظامك يعمل بأحدث البرامج وتحسينات الأمان، لازم تسوي تحديث للنظام أولاً. نفذ الأمر التالي:

```
sudo apt update && sudo apt upgrade -y
```
هذا يضمن أن نظامك يحتوي على أحدث تصحيحات الأمان وإصدارات البرامج قبل المتابعة.

### تثبيت التبعيات
بعد ما يخلص التحديث، تقدر تبدأ بتثبيت التبعيات.

#### Git
بيانات Supabase راح تُحمّل عبر GitHub. لهذا لازم تثبت Git أولاً. نفذ الأمر التالي:
```
sudo apt install git-all
```

#### Docker

Supabase راح يتم نشره وتشغيله على جهازك باستخدام حاوية Docker. لهذا لازم تثبت Docker أولاً. نفذ الأمر التالي:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

شرح كامل لعملية التثبيت وكيفية استخدام Docker متوفر في [دليل Docker](vserver-linux-docker.md) الخاص بنا.

## التثبيت
الآن بعد ما تم استيفاء كل المتطلبات واكتمال التحضيرات، تقدر تبدأ بتثبيت تطبيق Supabase.

استخرج مستودع Supabase، أنشئ مجلد مشروع مخصص، وانسخ ملفات Docker وملف البيئة النموذجي داخله.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir supabase-project

cp -rf supabase/docker/* supabase-project
cp supabase/docker/.env.example supabase-project/.env
```

ادخل على مجلد المشروع، اسحب أحدث صور الحاويات، وشغل الستاك في وضع الخلفية.
```
cd supabase-project
docker compose pull
docker compose up -d
```

![img](https://screensaver01.zap-hosting.com/index.php/s/njapji2YePRgema/preview)

تقدر الآن تدخل على Supabase Studio عبر `http://<your-ip>:8000`. راح يطلب منك اسم مستخدم وكلمة مرور. بشكل افتراضي، بيانات الدخول هي:

- اسم المستخدم: `supabase`
- كلمة المرور: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning بيانات الدخول الافتراضية
تطبيقك الآن يعمل ببيانات دخول افتراضية. أأمن خدماتك بأسرع وقت ممكن باستخدام التعليمات أدناه.
:::

## الضبط
لا تنشر أبداً باستخدام القيم الافتراضية أو النموذجية. لازم تستبدل كل العناصر النائبة بأسرار قوية وفريدة، تراجع الإعدادات حسب متطلبات الأمان عندك، وأعد تشغيل كل الخدمات لتطبيق التغييرات.

أنشئ مفاتيح API آمنة قبل ما تعرض أي خدمة. ابدأ باختيار سر JWT مكون من 40 حرف. تقدر تستخدم القيمة المقدمة أو تنشئ سر خاص فيك. خزّن هذا السر محلياً في مكان آمن. لا تشاركه ولا ترفعه على نظام التحكم بالإصدارات. استخدم السر لإنشاء JWT ثم استخرج مفاتيح API للـ anon والخدمة باستخدام النموذج الموجود في توثيق Supabase: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

شغل النموذج مرتين لإنتاج المفتاحين. حدّث ملف `./docker/.env` بـ:

- `ANON_KEY`: مفتاح anon
- `SERVICE_ROLE_KEY`: مفتاح الخدمة

حدّث الأسرار المطلوبة في `./docker/.env`. لازم تعيين هذه القيم لتشغيل ناجح:

- `POSTGRES_PASSWORD`: كلمة مرور دور `postgres`
- `JWT_SECRET`: يستخدمها PostgREST و GoTrue
- `SITE_URL`: عنوان URL الأساسي لموقعك
- `SMTP_*`: بيانات اعتماد خادم البريد
- `POOLER_TENANT_ID`: معرف المستأجر المستخدم من قبل Supavisor pooler

أمّن لوحة المعلومات ببيانات دخول جديدة قبل الاستخدام في الإنتاج. عدل `./docker/.env`:

- `DASHBOARD_USERNAME`: مستخدم لوحة المعلومات
- `DASHBOARD_PASSWORD`: كلمة مرور لوحة المعلومات

تقدر تعرف عدة مستخدمين للوحة المعلومات في `./docker/volumes/api/kong.yml`:

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

لتفعيل كل ميزات لوحة المعلومات خارج `localhost`، عيّن `SUPABASE_PUBLIC_URL` في `./docker/.env` إلى عنوان URL أو IP اللي راح تستخدمه للوصول للوحة.

طبق تغييرات الإعداد بإعادة تشغيل الستاك:

```
docker compose down
docker compose up -d
```

## الخاتمة والمزيد من الموارد

مبروك! الآن ثبت وضبطت Supabase بنجاح على VPS الخاص فيك. ننصحك أيضاً تطّلع على الموارد التالية، اللي ممكن تساعدك أكثر خلال عملية إعداد السيرفر:

- [Supabase.com](https://Supabase.com/) - الموقع الرسمي
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - توثيق Supabase

عندك أسئلة محددة مش مذكورة هنا؟ لأي استفسار أو مساعدة إضافية، لا تتردد تتواصل مع فريق الدعم عندنا، متوفر يومياً لمساعدتك! 🙂

<InlineVoucher />