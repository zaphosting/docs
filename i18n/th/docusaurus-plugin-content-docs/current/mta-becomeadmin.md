---
id: mta-becomeadmin
title: "Multi Theft Auto: วิธีเป็นแอดมินบนเซิร์ฟเวอร์ MTA"
description: "ค้นพบวิธีการมอบสิทธิ์แอดมินเพื่อควบคุมเซิร์ฟเวอร์เต็มรูปแบบและจัดการเกมได้อย่างมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เป็นแอดมิน
services:
  - gameserver-mta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
การมอบสิทธิ์แอดมินช่วยให้คุณบริหารจัดการได้ง่ายและครบถ้วน พร้อมควบคุมเซิร์ฟเวอร์ได้เต็มที่ ในฐานะแอดมิน คุณสามารถใช้ตัวเลือกและฟังก์ชันทั้งหมดที่เกมมีให้ได้โดยตรงในเกม ขั้นตอนทั้งหมดที่คุณต้องทำเพื่อมอบสิทธิ์แอดมินให้กับเซิร์ฟเวอร์ของคุณจะถูกอธิบายไว้ด้านล่างนี้  
<InlineVoucher />

### การเตรียมตัว

อันดับแรกต้องสร้างบัญชีผู้ใช้ที่จะได้รับสิทธิ์แอดมินในภายหลัง โดยใช้คำสั่งนี้ใน Live Console:

```
addaccount [options] <PASSWORD>
```

Live Console จะอยู่ในแดชบอร์ดเซิร์ฟเวอร์เกมในอินเทอร์เฟซขณะที่เซิร์ฟเวอร์กำลังรันอยู่ หน้าตาจะเป็นแบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/KHcBA5p5ZC4pJ4R/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/tKLHyoSandPpfx2/preview)




### การตั้งค่า

เมื่อสร้างบัญชีเสร็จแล้ว ต้องเพิ่มบัญชีนี้เข้าไปในกลุ่มแอดมินในไฟล์ Config **acl.xml** โดยเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน FTP แล้วเปิดไฟล์นี้ขึ้นมา ไฟล์จะอยู่ที่ **gXXXX/gtamta/mods/deathmatch/** หากคุณยังไม่รู้ว่า FTP client คืออะไรและใช้งานยังไง ลองดูคู่มือนี้:  [การเข้าถึงไฟล์ FTP](gameserver-ftpaccess.md)

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
</group>
```

ตรงนี้คุณต้องเพิ่ม user object เพื่อมอบสิทธิ์ให้ผู้ใช้เข้าเป็นกลุ่มแอดมิน:

```
<object name="user.BENUTZERNAME"></object>
```

แทนที่ BENUTZERNAME ด้วยชื่อผู้ใช้ของคุณ ผลลัพธ์ควรจะเป็นแบบนี้:

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
    <object name="user.Benutzername"></object>
</group>
```



### การล็อกอินเป็นแอดมิน

เมื่อคุณตั้งค่าไฟล์ **acl.xml** เสร็จแล้ว ให้เริ่มเกม/เซิร์ฟเวอร์ของคุณและเชื่อมต่อเข้ากับเซิร์ฟเวอร์ จากนั้นล็อกอินด้วยคำสั่งนี้:

```
login USERNAME PASSWORD
```

## สรุป

ยินดีด้วย คุณตั้งค่าสิทธิ์แอดมินสำเร็จแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂


<InlineVoucher />