---
id: barotrauma-becomeadmin
title: "Barotrauma: เป็นแอดมินบนเซิร์ฟเวอร์ของคุณเอง"
description: "ค้นพบวิธีการมอบสิทธิ์ผู้ดูแลระบบเพื่อควบคุมเซิร์ฟเวอร์แบบเต็มรูปแบบและจัดการในเกมได้อย่างลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เป็นแอดมิน
services:
  - gameserver-barotrauma
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
การมอบสิทธิ์ผู้ดูแลระบบช่วยให้คุณจัดการเซิร์ฟเวอร์ได้ง่ายและครบถ้วนด้วยการควบคุมเต็มรูปแบบในเซิร์ฟเวอร์เกมของคุณ ในฐานะแอดมิน คุณสามารถใช้ตัวเลือกและฟังก์ชันทั้งหมดที่เกมมีให้ได้โดยตรงในเกม ขั้นตอนทั้งหมดที่คุณต้องทำเพื่อมอบสิทธิ์ผู้ดูแลระบบสำหรับเซิร์ฟเวอร์ของคุณจะถูกอธิบายไว้ด้านล่างนี้  
<InlineVoucher />

## การตั้งค่า
การเพิ่มแอดมินทำได้ผ่านไฟล์ **Clientpermissions.xml** ซึ่งคุณสามารถหาได้ในแผงควบคุมที่เมนู Configs

![](https://screensaver01.zap-hosting.com/index.php/s/oJNTozXz9YW8sjG/preview)


ต้องเพิ่มรายการ client ใหม่ใน Config เพื่อเพิ่มผู้เล่นใหม่ รูปแบบไวยากรณ์จะเป็นแบบนี้:

```xml
<Client
    name="<player name>"
    steamid="<steamid>"
    permissions="<permission(s)>">
    <command
      name="<commandname>" />
  </Client>
```



รายการ client จะประกอบด้วยตัวแปร **Name, SteamID, Permissions, และ Command** ซึ่งต้องแก้ไขให้เหมาะสม ชื่อสามารถตั้งได้ตามต้องการ ใช้เป็นแค่ตัวแทนเพื่อดูภาพรวมเท่านั้น หลังจากนั้นต้องกำหนด SteamID64 ของบัญชี Steam ของคุณ

คุณสามารถหาได้โดยเข้าไปที่โปรไฟล์ Steam ของคุณ แล้วคลิกขวาที่ส่วนใดก็ได้ในโปรไฟล์ จากนั้นก็สามารถคัดลอก URL ของโปรไฟล์ Steam ได้



![](https://screensaver01.zap-hosting.com/index.php/s/C3nfdjemxkjZH5n/preview)



หลังจากนั้น ให้นำ URL ไปใส่ในเว็บไซต์ใดเว็บไซต์หนึ่งต่อไปนี้:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/asnbFc4JDifdSHn/preview)



เว็บไซต์เหล่านี้จะแสดงข้อมูลบัญชีทั่วไปรวมถึง Steam ID ที่ต้องใช้ ในกรณีนี้คือ **Steam ID 64** ซึ่งต้องนำไปใส่ในรายการ client ในช่อง **SteamID** ผลลัพธ์จะเป็นแบบนี้: 

```xml
<Client
    name="Name"
    steamid="123456789"
    permissions="<permission(s)>">
    <command
      name="<commandname>" />
  </Client>
```



ตอนนี้คุณเป็นแอดมินแล้ว แต่ยังไม่มีสิทธิ์เฉพาะเจาะจงในบัญชี คุณสามารถเพิ่มได้โดยใส่ permissions และคำสั่งที่อนุญาตให้ใช้ เช่น:

```xml
...
    permissions="<permission(s)>"> ---> permissions="ServerLog, ConsoleCommands">
...
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ClientPermissions> 
<Client
    name="Name"
    steamid="123456789"
    permissions="ServerLog, ConsoleCommands">
    <command
      name="heal" />
    <command
      name="spawn" />
  </Client>
</ClientPermissions>
```



ในตัวอย่างนี้ แอดมินได้รับสิทธิ์เข้าถึงบันทึกเซิร์ฟเวอร์, คอนโซล, คำสั่ง heal และ spawn ด้านล่างนี้คือภาพรวมของสิทธิ์ที่คุณสามารถตั้งค่าได้



## สิทธิ์

| สิทธิ์             | คำอธิบาย                                                  |
| ----------------- | ------------------------------------------------------------ |
| ManageRound       | สามารถเริ่ม/จบรอบเกมได้                                      |
| Kick              | สามารถเตะผู้เล่นคนอื่นออกจากเซิร์ฟเวอร์เกมได้               |
| Ban               | สามารถแบนผู้เล่นคนอื่นได้                                    |
| Unban             | สามารถยกเลิกการแบนผู้เล่นได้                                |
| SelectSub         | สามารถเลือกเรือดำน้ำได้                                      |
| SelectMode        | สามารถเลือกโหมดเกมได้                                       |
| ManageCampaign    | สามารถเลือกจุดหมาย, ภารกิจ และซื้อของจากร้านแคมเปญได้       |
| ConsoleCommands   | สามารถใช้คำสั่งคอนโซลได้ — แต่ต้องให้สิทธิ์คำสั่งคอนโซลแต่ละคำสั่งด้วย |
| ServerLog         | สามารถอ่านบันทึกเซิร์ฟเวอร์ได้                              |
| ManageSettings    | สามารถเปลี่ยนแปลงการตั้งค่าเซิร์ฟเวอร์ได้                  |
| ManagePermissions | สามารถเปลี่ยนแปลงสิทธิ์ของ client คนอื่นได้                 |
| KarmaImmunity     | ป้องกันผลกระทบเชิงลบจากระบบคาร์มา ไม่เสียคาร์มา             |
| All               | ให้สิทธิ์ทั้งหมด                                            |



## สรุป

ยินดีด้วย! คุณตั้งค่าสิทธิ์ผู้ดูแลระบบสำเร็จแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />