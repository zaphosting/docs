---
id: rust-commands
title: "Rust: أوامر الأدمن"
description: "اكتشف أوامر Rust الأساسية لإدارة سيرفر الألعاب والتحكم باللاعبين لتحسين تجربة اللعب والإدارة → تعلّم المزيد الآن"
sidebar_label: أوامر الأدمن
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

لعبة Rust تحتوي على مجموعة واسعة من الأوامر المختلفة المتاحة لمالكي سيرفر الألعاب واللاعبين لاستخدامها. في هذه الصفحة، نلخص أكثر الأوامر فائدة وشعبية والتي تُستخدم لإعدادات السيرفر، إدارة اللاعبين، والتحكم فيهم.

:::info
بعض الأوامر تتطلب استخدام Steam64 ID الخاص باللاعب. استخدم الدليل الصغير أدناه لفهم كيفية الحصول على Steam ID للاعب.
:::

<InlineVoucher />

## كيفية الحصول على Steam ID الخاص بك
أولاً، استخدم أداة مثل [Steam ID Finder](https://steamidfinder.com/) للحصول على Steam64 ID الخاص بك.

هنا تدخل رابط Steam الخاص بك:

![](https://screensaver01.zap-hosting.com/index.php/s/wscaNkzWSjzAktf/preview)

ثم اضغط على `Find Steam ID`. الآن يجب أن نتمكن من رؤية ملف Steam الخاص بنا، هنا نقوم بنسخ "Steam64ID (Dec)".

وهذا كل شيء، الآن لديك Steam64 ID ويمكنك استخدامه للأوامر التي تتطلب Steam64 ID أدناه.

## فئات الأوامر

استخدم تبويبات الأقسام أدناه للتنقل بين كل فئة. الجداول تحتوي على الأمر نفسه، القيم المقبولة للأمر (إن وجدت)، ووصف لتسهيل الفهم.

:::info
أي أمر مذكور في هذه الصفحة هو للعبة Rust الأصلية (vanilla).
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ServerSettings" label="إعدادات السيرفر" default>

| صيغة الأمر                  | القيم المقبولة | الوصف | 
| ----------------------- | ---------- | --------- | 
| server.globalchat      | true/false          | عند التفعيل، أي رسالة دردشة ستظهر لجميع اللاعبين         | 
| server.stop      | -          | إيقاف سيرفر الألعاب         | 
| server.save      | -          | حفظ سيرفر الألعاب         | 
| server.saveinterval "value"      | عدد صحيح (افتراضي 60)          | تعيين فترة الحفظ التلقائي لسيرفر الألعاب (بالثواني)         | 
| server.secure      | true/false          | عند التفعيل، Easy Anti Cheat (EAC) سيرفض الاتصال لأي لاعب غير مسجل أو محظور قبل الاتصال         | 
| server.seed "value"     | عدد صحيح (مثال: 123456)          | تعيين قيمة البذرة لعالم السيرفر         | 
| server.stability      | true/false          | عند التفعيل، يتم تفعيل استقرار الهياكل للمباني         | 
| server.tickrate "rate"      | عدد صحيح (افتراضي 30)          | تعيين معدل التحديث لسيرفر الألعاب         | 
| server.writecfg      | -          | حفظ تغييرات الإعدادات التي تم تعيينها سابقًا عبر أوامر السيرفر الأخرى         | 
| chat.serverlog      | true/false          | عند التفعيل، سيتم تسجيل الدردشة دائمًا في وحدة تحكم السيرفر         | 
| commands.echo "text"      | نص (مثال: "Hello World!")          | طباعة الرسالة المحددة في وحدة تحكم السيرفر         | 
| global.say "message"      | نص (مثال: "Welcome!")          | إرسال رسالة لجميع اللاعبين في السيرفر         | 
| env.time      | عدد صحيح (مثال: 16)          | تعيين وقت العالم داخل اللعبة إلى القيمة المحددة (بالساعات)         | 
| server.events      | -          | عند التفعيل، يتم تفعيل أحداث السيرفر مثل الإسقاطات الجوية         | 
| commands.find "command"      | نص (مثال: "quit")          | البحث عن أمر أو استخدام "." لعرض جميع الأوامر المتاحة         | 
| global.quit      | -          | حفظ السيرفر ثم إيقافه         | 
| global.init      | -          | تحميل ملفات الإعدادات         | 

</TabItem>
<TabItem value="PlayerAdmin" label="إدارة اللاعبين">

| صيغة الأمر                  | القيم المقبولة | الوصف | 
| ----------------------- | ---------- | --------- | 
| global.ban "playername" "reason"      | نص (مثال: "Jacob"), نص (مثال: "كان مشاغب!")          | حظر مستخدم من السيرفر (مع سبب اختياري)         | 
| global.banid "steam64"      | عدد صحيح          | حظر مستخدم عبر Steam64 ID الخاص به         | 
| global.banlistex      | -          | يعرض قائمة المستخدمين المحظورين مع اسم اللاعب وسبب الحظر         | 
| global.banlist      | -          | يعرض قائمة اللاعبين المحظورين داخل الدردشة         | 
| global.unban "steam64"      | عدد صحيح          | رفع الحظر عن مستخدم عبر Steam64 ID الخاص به         | 
| global.kickall      | -          | طرد جميع اللاعبين من السيرفر         | 
| global.kick "steam64 / playername" "reason"      | عدد صحيح/نص (مثال: "Jacob"), نص (مثال: "كان مشاغب!")         | طرد مستخدم من السيرفر عبر Steam64 ID أو اسم اللاعب (مع سبب اختياري)         | 
| global.ownerid "steam64 / playername"      | عدد صحيح/نص (مثال: "Jacob")          | تعيين اللاعب المحدد كأدمن للسيرفر عبر Steam64 ID أو اسم اللاعب (مستوى صلاحية 2)         | 
| global.removeowner "steam64"      | عدد صحيح         | إزالة صلاحيات الأدمن من المستخدم عبر Steam64 ID المحدد         | 
| global.moderatorid "steam64 / playername"      | عدد صحيح/نص (مثال: "Jacob")          | تعيين اللاعب المحدد كمشرف للسيرفر عبر Steam64 ID أو اسم اللاعب (مستوى صلاحية 1)         | 
| global.removemoderator "steam64"      | عدد صحيح          | إزالة صلاحيات المشرف من المستخدم عبر Steam64 ID المحدد         | 
| global.listid      | -          | يعرض قائمة المستخدمين الذين تم حظرهم عبر Steam64 ID          | 

</TabItem>
<TabItem value="Player Controls" label="تحكم باللاعبين">

| صيغة الأمر                  | القيم المقبولة | الوصف | 
| ----------------------- | ---------- | --------- | 
| kill      | -          | قتل لاعبك الخاص         | 
| global.quit      | -          | حفظ والخروج من اللعبة         | 
| global.god      | true/false          | تفعيل وضع الإله بحيث لا يتلقى اللاعب أي ضرر (للمشرفين فقط)          | 
| global.noclip      | true/false          | تفعيل وضع الطيران الحر للاعب (للمشرفين فقط)          | 
| global.debugcamera      | true/false          | تفعيل وضع كاميرا التصحيح بحيث يمكن للاعب استخدام كاميرا حرة (للمشرفين فقط)          | 
| player.sleep      | -          | إجبار لاعبك على النوم         | 
| commands.find "command"      | نص (مثال: "quit")          | البحث عن أمر متاح للاعب
| chat.say "text"     | نص (مثال: "Hello World!")          | إرسال رسالة لجميع اللاعبين في السيرفر         | 
| inventory.give "itemID" "amount"     | عدد صحيح (itemID), عدد صحيح (مثال: 5)          | إعطاء عنصر إلى مخزونك         | 
| inventory.giveto "playername" "itemID" "amount"      | نص (مثال: "Jacob"), عدد صحيح (itemID), عدد صحيح (مثال: 5)          | إعطاء عنصر إلى مخزون المستخدم المحدد         | 

</TabItem>
</Tabs>

<InlineVoucher />