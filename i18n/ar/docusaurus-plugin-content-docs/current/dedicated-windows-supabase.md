---
id: dedicated-windows-supabase
title: "سيرفر مخصص: إعداد Supabase على ويندوز"
description: "اكتشف كيفية إعداد وتكوين Supabase لمنصة Postgres مفتوحة المصدر موثوقة مع المصادقة والميزات الفورية → تعلّم المزيد الآن"
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

| العتاد      | الحد الأدنى | توصية ZAP-Hosting          |
| ----------- | ----------- | -------------------------- |
| CPU         | 1 نواة CPU  | 4 أنوية CPU                |
| RAM         | 4 جيجابايت  | 8 جيجابايت                 |
| مساحة القرص | 25 جيجابايت | 25 جيجابايت                |

يتطلب البرنامج تثبيت جميع التبعيات اللازمة وأن يعمل على نظام تشغيل مدعوم. تأكد من أن سيرفرك يلبي المتطلبات التالية قبل المتابعة بالتثبيت:

**التبعيات:** `Git`، `Docker (Engine و Compose)`

**نظام التشغيل:** أحدث إصدار من Ubuntu/Debian يدعم Docker 2

تأكد من تثبيت جميع التبعيات واستخدام إصدار نظام التشغيل الصحيح لتجنب مشاكل التوافق أثناء تثبيت Supabase.

## التحضير

قبل إعداد **Supabase**، تحتاج إلى تحضير نظامك. يشمل ذلك تحديث نظام التشغيل إلى أحدث إصدار وتثبيت جميع التبعيات المطلوبة. هذه التحضيرات تضمن بيئة مستقرة وتساعد في منع المشاكل أثناء أو بعد التثبيت.

### تحديث النظام
للتأكد من أن نظامك يعمل بأحدث البرامج وتحسينات الأمان، يجب عليك دائمًا إجراء تحديثات النظام أولاً. هذا يضمن أن نظامك يحتوي على أحدث تصحيحات الأمان وإصدارات البرامج قبل المتابعة.

### تثبيت التبعيات
بمجرد الانتهاء من التحديث، يمكنك البدء بتثبيت التبعيات.

#### Git
سيتم تنزيل بيانات Supabase عبر GitHub. لذلك يجب تثبيت Git أولاً. لتثبيته، قم بتنزيل [Git لنظام ويندوز](https://git-scm.com/downloads/win) على سيرفرك.

#### Docker

سيتم نشر وتشغيل Supabase على جهازك باستخدام حاوية Docker. لذلك يجب تثبيت Docker أولاً. لتثبيته، قم بتنزيل [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) على سيرفرك.

دليل كامل لعملية التثبيت وكيفية استخدام Docker متوفر في دليلنا الخاص بـ [Docker](dedicated-windows-docker.md).

## التثبيت
الآن بعد أن تم استيفاء جميع المتطلبات واكتمال التحضيرات اللازمة، يمكنك المتابعة بتثبيت تطبيق Supabase. افتح موجه الأوامر. قم بجلب مستودع Supabase، أنشئ مجلد مشروع مخصص، وانسخ ملفات Docker وملف البيئة النموذجي إليه.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir .\supabase-project

Copy-Item .\supabase\docker\* -Destination .\supabase-project -Recurse -Force
Copy-Item .\supabase\docker\.env.example -Destination .\supabase-project\.env -Force
```

انتقل إلى مجلد المشروع، اسحب أحدث صور الحاويات، وشغّل الحزمة في وضع منفصل.
```
cd supabase-project
docker compose pull
docker compose up -d
```

يمكنك الآن الوصول إلى Supabase Studio عبر `http://<your-ip>:8000`. سيُطلب منك اسم مستخدم وكلمة مرور. بشكل افتراضي، بيانات الدخول هي:

- اسم المستخدم: `supabase`
- كلمة المرور: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning بيانات الدخول الافتراضية
تطبيقك يعمل الآن ببيانات الدخول الافتراضية. قم بتأمين خدماتك بأسرع وقت ممكن باستخدام التعليمات أدناه.
:::

## التكوين
لا يجب أبدًا النشر باستخدام القيم الافتراضية أو القيم النموذجية. يجب استبدال جميع العناصر النائبة بأسرار قوية وفريدة، ومراجعة التكوين وفقًا لمتطلبات الأمان الخاصة بك، وإعادة تشغيل جميع الخدمات لتطبيق التغييرات.

قم بإنشاء مفاتيح API آمنة قبل تعريض أي خدمة. ابدأ باختيار سر JWT مكون من 40 حرفًا. يمكنك استخدام القيمة المقدمة أو إنشاء خاص بك. خزّن هذا السر محليًا في مكان آمن. لا تشاركه ولا ترفعه إلى نظام التحكم بالإصدارات. استخدم السر لإنشاء JWT ثم استخرج مفاتيح API للـ anon و service باستخدام النموذج المشار إليه في وثائق Supabase: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

شغّل النموذج مرتين لإنتاج كلا المفتاحين. حدّث ملف `./docker/.env` بـ:

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

تهانينا! لقد قمت الآن بتثبيت وتكوين Supabase بنجاح على سيرفرك المخصص. نوصي أيضًا بإلقاء نظرة على الموارد التالية، التي قد توفر لك مساعدة إضافية وإرشادات خلال عملية تكوين السيرفر.

- [Supabase.com](https://Supabase.com/) - الموقع الرسمي
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - وثائق Supabase

هل لديك أسئلة محددة غير مغطاة هنا؟ لأي استفسارات أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />