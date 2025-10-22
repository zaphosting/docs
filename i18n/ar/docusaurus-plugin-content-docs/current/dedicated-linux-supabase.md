---
id: dedicated-linux-supabase
title: "سيرفر مخصص: إعداد Supabase على لينكس"
description: "اكتشف كيفية إعداد وتكوين Supabase للاستضافة الذاتية لبناء منصة Postgres مفتوحة المصدر قوية → تعلّم المزيد الآن"
sidebar_label: تثبيت Supabase
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Supabase هي منصة تطوير Postgres مفتوحة المصدر توفر قاعدة بيانات Postgres كاملة بالإضافة إلى المصادقة، واجهات برمجة التطبيقات الفورية، الوقت الحقيقي، والتخزين، مما يجعلها بديل مفتوح المصدر لـ Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

تفكر في استضافة هذه الخدمة بنفسك؟ سنرشدك خطوة بخطوة حول كيفية إعدادها وتكوينها، مع كل ما تحتاج لمعرفته.

<InlineVoucher />

## المتطلبات الأساسية

قبل تثبيت **Supabase**، تأكد من أن بيئة الاستضافة الخاصة بك تلبي المتطلبات التالية لضمان تثبيت سلس وأداء مثالي.

| الأجهزة    | الحد الأدنى | توصية ZAP-Hosting          |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 نواة CPU  | 4 أنوية CPU                |
| RAM        | 4 جيجابايت  | 8 جيجابايت                 |
| مساحة القرص | 25 جيجابايت | 25 جيجابايت                |

يتطلب البرنامج تثبيت جميع التبعيات اللازمة وأن يعمل على نظام تشغيل مدعوم. تأكد من أن سيرفرك يلبي المتطلبات التالية قبل المتابعة بالتثبيت:

**التبعيات:** `Git`، `Docker (Engine و Compose)`

**نظام التشغيل:** أحدث إصدار من أوبونتو/ديبيان يدعم Docker 2

تأكد من تثبيت جميع التبعيات واستخدام إصدار نظام التشغيل الصحيح لتجنب مشاكل التوافق أثناء تثبيت Supabase.

## التحضير

قبل إعداد **Supabase**، تحتاج إلى تحضير نظامك. يشمل ذلك تحديث نظام التشغيل إلى أحدث إصدار وتثبيت جميع التبعيات المطلوبة. هذه التحضيرات تضمن بيئة مستقرة وتساعد في منع المشاكل أثناء أو بعد التثبيت.

### تحديث النظام
للتأكد من أن نظامك يعمل بأحدث البرامج وتحسينات الأمان، يجب عليك دائمًا تنفيذ تحديثات النظام أولاً. للقيام بذلك، نفذ الأمر التالي:

```
sudo apt update && sudo apt upgrade -y
```
هذا يضمن أن نظامك يحتوي على أحدث تصحيحات الأمان وإصدارات البرامج قبل المتابعة.

### تثبيت التبعيات
بعد الانتهاء من التحديث، يمكنك الآن تثبيت التبعيات.

#### Git
سيتم تنزيل بيانات Supabase عبر GitHub. لذلك يجب تثبيت Git أولاً. لتنفيذ ذلك، نفذ الأمر التالي:
```
sudo apt install git-all
```

#### Docker

سيتم نشر وتشغيل Supabase على جهازك باستخدام حاوية Docker. لذلك يجب تثبيت Docker أولاً. لتنفيذ ذلك، نفذ الأمر التالي:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

دليل كامل لعملية التثبيت وكيفية استخدام Docker متوفر في دليلنا [Docker](dedicated-linux-docker.md).

## التثبيت
الآن بعد أن تم استيفاء جميع المتطلبات واكتمال التحضيرات اللازمة، يمكنك المتابعة بتثبيت تطبيق Supabase.

قم بجلب مستودع Supabase، أنشئ مجلد مشروع مخصص، وانسخ ملفات Docker وملف البيئة النموذجي إليه.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir supabase-project

cp -rf supabase/docker/* supabase-project
cp supabase/docker/.env.example supabase-project/.env
```

انتقل إلى مجلد المشروع، اسحب أحدث صور الحاويات، وشغّل الحزمة في وضع منفصل.
```
cd supabase-project
docker compose pull
docker compose up -d
```

![img](https://screensaver01.zap-hosting.com/index.php/s/njapji2YePRgema/preview)

يمكنك الآن الوصول إلى Supabase Studio عبر `http://<your-ip>:8000`. سيُطلب منك اسم مستخدم وكلمة مرور. بشكل افتراضي، بيانات الدخول هي:

- اسم المستخدم: `supabase`
- كلمة المرور: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning بيانات الدخول الافتراضية
تطبيقك يعمل الآن ببيانات الدخول الافتراضية. قم بتأمين خدماتك بأسرع وقت ممكن باستخدام التعليمات أدناه.
:::

## التكوين
لا يجب أبدًا النشر باستخدام القيم الافتراضية أو النموذجية. يجب استبدال جميع العناصر النائبة بأسرار قوية وفريدة، مراجعة التكوين وفقًا لمتطلبات الأمان الخاصة بك، وإعادة تشغيل جميع الخدمات لتطبيق التغييرات.

قم بإنشاء مفاتيح API آمنة قبل تعريض أي خدمة. ابدأ باختيار سر JWT مكون من 40 حرفًا. يمكنك استخدام القيمة المقدمة أو إنشاء سر خاص بك. خزّن هذا السر محليًا في مكان آمن. لا تشاركه ولا ترفعه إلى نظام التحكم في الإصدارات. استخدم السر لإنشاء JWT ثم استخرج مفاتيح API للـ anon و service باستخدام النموذج المشار إليه في وثائق Supabase: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

نفّذ النموذج مرتين لإنتاج كلا المفتاحين. حدّث ملف `./docker/.env` بـ:

- `ANON_KEY`: مفتاح anon
- `SERVICE_ROLE_KEY`: مفتاح الخدمة

حدّث الأسرار المطلوبة في `./docker/.env`. يجب تعيين هذه القيم لنشر يعمل بشكل صحيح:

- `POSTGRES_PASSWORD`: كلمة مرور دور `postgres`
- `JWT_SECRET`: يستخدمه PostgREST و GoTrue
- `SITE_URL`: عنوان URL الأساسي لموقعك
- `SMTP_*`: بيانات اعتماد خادم البريد
- `POOLER_TENANT_ID`: معرف المستأجر المستخدم من قبل Supavisor pooler

قم بحماية لوحة المعلومات ببيانات اعتماد جديدة قبل الاستخدام في الإنتاج. حرّر `./docker/.env`:

- `DASHBOARD_USERNAME`: مستخدم لوحة المعلومات
- `DASHBOARD_PASSWORD`: كلمة مرور لوحة المعلومات

يمكنك تعريف عدة مستخدمين للوحة المعلومات في `./docker/volumes/api/kong.yml`:

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

لتمكين جميع ميزات لوحة المعلومات خارج `localhost`، عيّن `SUPABASE_PUBLIC_URL` في `./docker/.env` إلى عنوان URL أو IP الذي ستستخدمه للوصول إلى اللوحة.

طبق تغييرات التكوين بإعادة تشغيل الحزمة:

```
docker compose down
docker compose up -d
```

## الخاتمة والمزيد من الموارد

تهانينا! لقد قمت الآن بتثبيت وتكوين Supabase بنجاح على سيرفرك المخصص. نوصي أيضًا بإلقاء نظرة على الموارد التالية، التي قد توفر لك مساعدة إضافية وإرشادات أثناء عملية تكوين السيرفر.

- [Supabase.com](https://Supabase.com/) - الموقع الرسمي
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - وثائق Supabase

هل لديك أسئلة محددة غير مغطاة هنا؟ لأي استفسارات أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />