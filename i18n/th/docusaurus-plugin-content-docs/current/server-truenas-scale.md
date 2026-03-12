---
id: server-truenas-scale
title: "ติดตั้ง TrueNAS SCALE บนเซิร์ฟเวอร์ - สร้างระบบ NAS ส่วนตัวของคุณ"
description: "ค้นพบวิธีติดตั้ง TrueNAS SCALE บนเซิร์ฟเวอร์เฉพาะของคุณสำหรับการจัดเก็บข้อมูลแบบเครือข่ายและแชร์ไฟล์ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: การติดตั้ง TrueNAS SCALE
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## บทนำ

TrueNAS SCALE คือแพลตฟอร์มจัดเก็บข้อมูลแบบโอเพนซอร์สที่ช่วยให้คุณสร้างระบบจัดเก็บข้อมูลแบบเครือข่าย (NAS) บนเซิร์ฟเวอร์ ในคู่มือนี้ คุณจะได้ติดตั้ง TrueNAS SCALE บนเซิร์ฟเวอร์เฉพาะและตั้งค่าการใช้งานครั้งแรก รวมถึงการสร้าง storage pool, บัญชีผู้ใช้ และการแชร์ไฟล์แบบ SMB

:::danger VPS ไม่เหมาะสม
ผลิตภัณฑ์ VPS ของเราไม่เหมาะสมเพราะมีเพียงดิสก์เสมือนเดียว คุณสามารถติดตั้ง TrueNAS SCALE บน VPS ได้ แต่ไม่สามารถสร้าง storage pool ได้เพราะดิสก์ทั้งหมดถูกใช้สำหรับระบบปฏิบัติการ

การตั้งค่า TrueNAS SCALE ต้องใช้ [เซิร์ฟเวอร์เฉพาะ](https://zap-hosting.com/en/dedicated-server-hosting/) ที่มีฮาร์ดไดรฟ์อย่างน้อยสองตัวขึ้นไป
 :::

<InlineVoucher />

## การเตรียมตัว

ก่อนเริ่มติดตั้ง ตรวจสอบให้แน่ใจว่าคุณมีสเปคขั้นต่ำดังนี้:

| ฮาร์ดแวร์   | ขั้นต่ำ     | คำแนะนำจาก ZAP-Hosting |
| ---------- | ----------- | -------------------------- |
| CPU        | 2 คอร์ CPU | 8 คอร์ vCPU               |
| RAM        | 8 GB        | 16 GB                      |
| พื้นที่ดิสก์ | 16 GB สำหรับ OS | ขึ้นอยู่กับการใช้งาน  |

<InlineServiceLink />

ไปที่เว็บไซต์ทางการของ [TrueNAS](https://www.truenas.com/download-truenas-scale/) และดาวน์โหลดเวอร์ชันเสถียรล่าสุด คุณสามารถอัปโหลดไฟล์ ISO ไปยังที่เก็บข้อมูลสาธารณะ (เว็บเซิร์ฟเวอร์ของคุณเองหรือคลาวด์สตอเรจ) หรือเก็บไว้ในเครื่องเพื่อเมานต์โดยตรง

:::tip[การโฮสต์ ISO]
ถ้าคุณวางแผนจะเมานต์ผ่าน URL ในคอนโซลระยะไกล ให้แน่ใจว่า URL ของไฟล์ ISO ลงท้ายด้วย `.iso` และสามารถเข้าถึงได้โดยไม่ต้องยืนยันตัวตน
:::

**การเมานต์ ISO**

ล็อกอินเข้า [แดชบอร์ด ZAP-Hosting](https://zap-hosting.com/en/customer/) แล้วไปที่เซิร์ฟเวอร์เฉพาะของคุณในรายการบริการ จากนั้นเปิดหน้าจัดการเซิร์ฟเวอร์และคลิก **Activate iLO** เพื่อเข้าสู่หน้าจัดการเซิร์ฟเวอร์

![img](https://screensaver01.zap-hosting.com/index.php/s/or8HJ8e3QeAJm6z/preview)

ในอินเทอร์เฟซ iLO หาเมนู **Integrated Remote Console** เลือกประเภทคอนโซลที่คุณชอบแล้วเปิดใช้งาน หน้าต่างใหม่จะเปิดขึ้นพร้อมการเข้าถึงหน้าจอเซิร์ฟเวอร์โดยตรง

ในคอนโซลระยะไกล คลิกไอคอน **CD** ด้านบนแล้วเลือก **CD/DVD** เลือก **Scripted Media URL** ถ้าคุณอัปโหลด ISO ไว้บนออนไลน์และกรอก URL โดยตรง หรือเลือก **Local .iso File** เพื่อเลือกไฟล์ในเครื่องของคุณ ไม่ว่าจะวิธีไหน ISO จะถูกเมานต์ไปยังไดรฟ์ CD/DVD เสมือน

![img](https://screensaver01.zap-hosting.com/index.php/s/F98tgjsqq2S6nqp/preview)

:::tip วิธีอื่นๆ
สำหรับวิธีเมานต์ ISO อื่นๆ รวมถึงผ่าน Virtual Media interface ดูได้ใน [คู่มือ Own ISO](dedicated-iso.md)
:::

เมื่อเมานต์ ISO แล้ว ใช้เมนู **Power** ในคอนโซลเพื่อรีบูต เลือก **Reset** เซิร์ฟเวอร์จะรีสตาร์ทและบูตจาก TrueNAS SCALE ISO

## การติดตั้ง

ดูที่คอนโซลขณะระบบบูต หน้าจอติดตั้ง TrueNAS SCALE จะปรากฏและตัวติดตั้งจะโหลดอัตโนมัติ การโหลดสภาพแวดล้อมติดตั้งใช้เวลาสักครู่

![img](https://screensaver01.zap-hosting.com/index.php/s/TJwMWFZeorwGryn/preview)

ตัวติดตั้งจะแสดง **Choose destination media** พร้อมดิสก์ที่มีให้เลือก ใช้ **ปุ่มลูกศร** เลือกดิสก์ที่จะใช้ติดตั้ง OS เลือกดิสก์ที่เล็กที่สุดสำหรับติดตั้ง OS (ดิสก์นี้จะถูกใช้ทั้งหมดสำหรับ TrueNAS SCALE) กด **Space** เพื่อเลือก แล้วกด **Enter**

![img](https://screensaver01.zap-hosting.com/index.php/s/Z5o7TFye6BPor7Q/preview)

จะมีคำเตือนว่าการติดตั้งจะ **ลบข้อมูลทั้งหมด** บนดิสก์ที่เลือก ใช้ปุ่มลูกศรไปที่ **Yes** แล้วกด **Enter**

![img](https://screensaver01.zap-hosting.com/index.php/s/LS2mJBQ2deawKFp/preview)

ถัดไป ตัวติดตั้งถามเกี่ยวกับการตั้งค่าการยืนยันตัวตน **ตัวเลือก 1** ตั้งรหัสผ่านตอนนี้ ส่วน **ตัวเลือก 2** ตั้งค่าภายหลังผ่านเว็บอินเทอร์เฟซ เราจะใช้ **ตัวเลือก 2: ตั้งค่าผ่าน Web UI** เพื่อความยืดหยุ่น เลือกแล้วกด **Enter**

![img](https://screensaver01.zap-hosting.com/index.php/s/oPpMLCZ5nPePdLW/preview)

ตัวติดตั้งถามว่า **"Allow EFI boot?"** เลือก **Yes** (แนะนำ) แล้วกด **Enter**

![img](https://screensaver01.zap-hosting.com/index.php/s/We8tqgctQrjz5oS/preview)

การติดตั้งเริ่มต้นและใช้เวลาประมาณ 15-20 นาที ดูความคืบหน้าบนหน้าจอขณะคัดลอกไฟล์และตั้งค่าระบบ

![img](https://screensaver01.zap-hosting.com/index.php/s/BAykMjmxDn76sJB/preview)

เมื่อเสร็จสิ้น คุณจะเห็นข้อความ **"The TrueNAS installation is successful"** กด **Enter**

![img](https://screensaver01.zap-hosting.com/index.php/s/GmNwHaTfY6KHSbN/preview)

ก่อนรีบูต **ถอดเมานต์ ISO ออก** ไม่เช่นนั้นจะบูตกลับเข้าสู่ตัวติดตั้งอีกครั้ง คลิกไอคอน **DVD** เลือก **CD/DVD** แล้วคลิก **Eject Media** รีบูตโดยใช้เมนู Power หรือปล่อยให้รีสตาร์ทเอง

<InlineServiceLink />

## การตั้งค่า

หลังติดตั้งเสร็จ คุณต้องตั้งค่าให้เซิร์ฟเวอร์บูตจากดิสก์ที่ติดตั้ง TrueNAS SCALE จริงๆ โดยตั้งค่าผ่าน RAID controller ROM

:::info[ขั้นตอนสำคัญ]
หลังติดตั้ง คุณต้องตั้งค่า boot volume ใน RAID controller ROM เพื่อให้เซิร์ฟเวอร์บูตจากดิสก์ที่ถูกต้อง
:::

**ตั้งค่าดิสก์บูตใน ROM**

ดูที่คอนโซลขณะบูต เมื่อเห็นข้อความ **"Press F8 for ROM Configuration for Arrays Utility"** ให้กด **F8** ทันที

![img](https://screensaver01.zap-hosting.com/index.php/s/BCosyXCBnZJjeiX/preview)

หน้าจอ ROM Configuration จะเปิดขึ้น ใช้ปุ่มลูกศรไปที่ **Select Boot Volume** แล้วกด **Enter**

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw4netxJPkX3354/preview)

รายการดิสก์ที่มีจะแสดง เลือกดิสก์ที่ติดตั้ง TrueNAS SCALE แล้วกด **Enter**

![img](https://screensaver01.zap-hosting.com/index.php/s/7mPgXFMqn9Q475Z/preview)

เมื่อเลือกดิสก์แล้ว กด **F8** เพื่อบันทึก ยืนยันถ้ามีคำถาม แล้วออกจากยูทิลิตี้ เซิร์ฟเวอร์จะบูตเข้าสู่ TrueNAS SCALE

![img](https://screensaver01.zap-hosting.com/index.php/s/YEFokMkz3RSB625/preview)

**เข้าถึงเว็บอินเทอร์เฟซ**

หลังบูตครั้งแรก คอนโซล TrueNAS SCALE จะแสดง URL สำหรับเข้าถึง Web UI: `http://[your_server_ip]` จดที่อยู่ IP นี้ไว้เพราะต้องใช้เข้าหน้าเว็บ

![img](https://screensaver01.zap-hosting.com/index.php/s/8JwikNGRTz4La3y/preview)

:::tip การตั้งค่าเครือข่ายอัตโนมัติ
TrueNAS SCALE มักตั้งค่าเครือข่ายผ่าน DHCP อัตโนมัติ ข้ามขั้นตอนนี้ได้ถ้าคุณไม่มี IP หลายตัวหรือไม่ต้องการตั้ง IP แบบสแตติก
:::

ถ้าต้องการตั้งค่าเครือข่ายเอง เลือก **1) Configure Network Interfaces** จากเมนูคอนโซล เลือกอินเทอร์เฟซหลัก (เช่น `enp0s3` หรือ `eth0`) เลือก **Configure IPv4** แล้วเลือก **Static** กรอก IP, subnet mask และ gateway (ดูได้จากแดชบอร์ด ZAP-Hosting)

เปิดเว็บเบราว์เซอร์และเข้า `http://[your_server_ip]` โดยใช้ IP ที่ได้จากคอนโซล

เพราะเราเลือก **Configure using Web UI** ไว้ก่อนหน้านี้ ที่นี่คือจุดตั้งรหัสผ่าน หน้าเข้าสู่ระบบจะแสดงชื่อผู้ใช้ `truenas_admin` กรอกรหัสผ่านที่แข็งแรง ยืนยัน แล้วคลิก **Submit**

![img](https://screensaver01.zap-hosting.com/index.php/s/dZrpdZYQwKBFksJ/preview)

:::danger ความปลอดภัยสำคัญ
ตั้งรหัสผ่านที่แข็งแรงและไม่ซ้ำสำหรับบัญชีแอดมิน TrueNAS ของคุณ บัญชีนี้มีสิทธิ์เข้าถึงระบบเต็มรูปแบบ
:::

หลังล็อกอิน แดชบอร์ดจะแสดงข้อมูลระบบ, สถานะเครือข่าย, storage pool, บริการ และแจ้งเตือน คุณตั้งค่า TrueNAS SCALE สำเร็จและพร้อมสร้าง storage แล้ว

![img](https://screensaver01.zap-hosting.com/index.php/s/fYkDpDfpqwTT5yY/preview)

**สร้าง Storage Pool**

คลิก **Storage** ในแถบด้านซ้าย แล้วคลิกปุ่ม **Create Pool**

![img](https://screensaver01.zap-hosting.com/index.php/s/fFeSjm3YnnPfxq5/preview)

ตั้งชื่อ pool ของคุณ เช่น `Disk`, `tank` หรือชื่อที่เข้าใจง่าย คลิก **Next** เมื่อพร้อม

![img](https://screensaver01.zap-hosting.com/index.php/s/23MNpcrHmmGz2L2/preview)

ในส่วน **Data** เปิดเมนู **Layout** แล้วเลือกการตั้งค่าที่เหมาะกับคุณ:

- **Stripe**: ใช้พื้นที่สูงสุดแต่ไม่มีความซ้ำซ้อน
- **Mirror**: เก็บข้อมูลเหมือนกันบนสองดิสก์ เพิ่มความซ้ำซ้อนแต่ลดพื้นที่ใช้งาน
- **RAIDZ1**: มีดิสก์สำรองหนึ่งตัว
- **RAIDZ2**: มีดิสก์สำรองสองตัว
- **RAIDZ3**: มีดิสก์สำรองสามตัว

![img](https://screensaver01.zap-hosting.com/index.php/s/wKHy7f8xoifEXB6/preview)

ในส่วน **Disk Selection** จะแสดงดิสก์ทั้งหมดที่มี คลิกเลือกดิสก์ที่ต้องการใส่ใน pool พวกมันจะย้ายไปยังพื้นที่ตั้งค่าพร้อมแสดงความจุโดยประมาณ

:::info ดิสก์บูตไม่แสดง
ดิสก์ที่ใช้ติดตั้ง OS จะไม่แสดงที่นี่เพราะสงวนไว้สำหรับระบบปฏิบัติการเท่านั้น
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/McEcGQSBzHaZNNc/preview)

ปล่อยค่าตั้งค่าอื่นๆ เป็นค่าเริ่มต้นแล้วคลิก **Next** หน้าตรวจสอบจะแสดงการตั้งค่าของคุณ รวมชื่อ, layout, ดิสก์ และความจุ ตรวจสอบให้ถูกต้องแล้วคลิก **Create Pool**

![img](https://screensaver01.zap-hosting.com/index.php/s/RDitijsoGWtEoT5/preview)

**จัดการด้วย Datasets**

เมื่อสร้าง storage pool แล้ว คุณสามารถจัดการข้อมูลด้วย datasets ซึ่งเป็นการแบ่งย่อยของ storage pool เพื่อแยกประเภทข้อมูล คลิก **Datasets** ในแถบด้านข้าง จะเห็น pool ใหม่ของคุณ (เช่น "Disk")

![img](https://screensaver01.zap-hosting.com/index.php/s/oZPctpbLcCESWWt/preview)

คลิก **Add Dataset** pool จะถูกตั้งเป็น parent อัตโนมัติ ตั้งชื่อ dataset เช่น `documents`, `media` หรือ `backups` ปล่อยตัวเลือกขั้นสูงเป็นค่าเริ่มต้นถ้าไม่มีความต้องการพิเศษ คลิก **Save**

![img](https://screensaver01.zap-hosting.com/index.php/s/JxPmPW53zke9NQL/preview)

**สร้างบัญชีผู้ใช้**

คลิก **Credentials** ในแถบด้านข้าง แล้วคลิก **Add** เลือกชื่อผู้ใช้ (เช่น `john` หรือ `fileuser`), ใส่ชื่อเต็ม และตั้งรหัสผ่าน ปล่อยกลุ่มหลัก, โฟลเดอร์บ้าน และ shell เป็นค่าเริ่มต้น เลื่อนลงไปด้านล่างแล้วเปิดใช้งานตัวเลือก **SMB** เพื่อให้เข้าถึงผ่าน Windows ได้

ปรับสิทธิ์ตามความต้องการด้านความปลอดภัย สำหรับแชร์ไฟล์พื้นฐาน ตัวเลือกเริ่มต้นพร้อมเปิด SMB ก็เพียงพอ เมื่อเสร็จแล้วคลิก **Submit**

:::danger สำคัญสำหรับการเข้าถึง SMB
อย่าใช้บัญชี `root` หรือ `truenas_admin` สำหรับแชร์ไฟล์ บัญชีระบบเหล่านี้จะไม่ทำงานกับ SMB ให้สร้างผู้ใช้เฉพาะแทน
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/3SLGk75E3KP57ZS/preview)

**ตั้งค่า SMB Shares**

คลิก **Shares** ในแถบด้านข้าง จะเห็นตัวเลือกสามแบบ: Windows (SMB) สำหรับ Windows/macOS/Linux, Unix (NFS) สำหรับ Linux/Unix, และ Block (iSCSI) สำหรับบล็อกสตอเรจ เราจะตั้งค่า SMB คลิก **Add** ในส่วน Windows (SMB) Shares

![img](https://screensaver01.zap-hosting.com/index.php/s/fgWcqjyxXLD2dRy/preview)

หน้าต่าง **Add SMB** จะเปิด สำหรับ **Path** ให้เลือก dataset ของคุณ (เช่น `/mnt/Disk/documents`) สำหรับ **Name** ตั้งชื่อเช่น `documents` (ชื่อที่ผู้ใช้จะเห็นบนเครือข่าย) **Purpose** ปล่อยเป็นค่าเริ่มต้นในกรณีส่วนใหญ่ ใส่คำอธิบายถ้าต้องการ มีตัวเลือกขั้นสูง (ตั้งค่า ACL และอื่นๆ) แต่ปิดการเข้าถึง guest เพื่อความปลอดภัย คลิก **Save**

![img](https://screensaver01.zap-hosting.com/index.php/s/D2xQYHQfbmsKRwT/preview)

หลังสร้างแชร์ จะมีป๊อปอัพแจ้งว่า **บริการ SMB ยังไม่ทำงาน** คลิก **Start Service** และติ๊กเลือก **Start Automatically** เพื่อให้รันตอนบูต SMB share จะพร้อมใช้งานบนเครือข่าย

![img](https://screensaver01.zap-hosting.com/index.php/s/KQH5zoA7FYWaXMa/preview)

สำหรับแชร์ NFS กับระบบ Linux/Unix ไปที่ **Shares** → **Unix (NFS) Shares** แล้วคลิก **Add** เลือก dataset, ตั้งค่าเครือข่ายและสิทธิ์, เปิดใช้งาน NFS เมื่อถาม และบันทึก

<InlineServiceLink />

## การเข้าถึงแชร์ของคุณ

เพื่อเข้าถึงแชร์ผ่าน Windows PC เปิด **File Explorer** คลิกขวาที่ **This PC** (หรือ **My Computer**) แล้วเลือก **Add a network location**

![img](https://screensaver01.zap-hosting.com/index.php/s/NDJWjdpC6ZCq6c3/preview)

ตัวช่วย **Add Network Location Wizard** จะเปิดขึ้น คลิก **Next** เพื่อดำเนินการต่อ

![img](https://screensaver01.zap-hosting.com/index.php/s/7KXPxNQJy4qsiBy/preview)

เมื่อถามตำแหน่ง ให้ใช้รูปแบบนี้: `\\[your_server_ip]\[share_name]` เช่น `\\192.168.1.100\documents` แทนที่ `[your_server_ip]` ด้วย IP เซิร์ฟเวอร์ TrueNAS ของคุณ และ `[share_name]` ด้วยชื่อ SMB share ที่ตั้งไว้ จากนั้นคลิก **Next**

![img](https://screensaver01.zap-hosting.com/index.php/s/2yaoWfiCTX6XLAz/preview)

กรอก **ชื่อผู้ใช้** และ **รหัสผ่าน** ของผู้ใช้ที่สร้างใน TrueNAS อย่าใช้ `root` หรือ `truenas_admin` เพราะจะไม่ทำงานกับ SMB ติ๊กเลือก **Remember my credentials** เพื่อบันทึกข้อมูลสำหรับครั้งถัดไป คลิก **OK**

![img](https://screensaver01.zap-hosting.com/index.php/s/4nFReNbPLkHfmMp/preview)

ตอนนี้แชร์ TrueNAS พร้อมใช้งานแล้ว คุณสามารถเรียกดูไฟล์ สร้างโฟลเดอร์ และคัดลอกข้อมูลเหมือนกับไดรฟ์เครือข่ายทั่วไป คุณเชื่อมต่อ Windows PC กับแชร์ TrueNAS สำเร็จแล้ว

![img](https://screensaver01.zap-hosting.com/index.php/s/nBqrkmkCYJntwW2/preview)

:::tip เข้าถึงเร็วขึ้น
เพื่อความสะดวก ใช้ **Map network drive** แทน **Add a network location** แชร์จะปรากฏเป็นตัวอักษรไดรฟ์ (เช่น `Z:`) ใน File Explorer
:::

:::info การเข้าถึงจาก MacOS หรือ Linux
**macOS**: ใน Finder กด `Cmd+K` แล้วกรอก `smb://[your_server_ip]/[share_name]`

**Linux**: ใช้ตัวจัดการไฟล์เลือก "Connect to Server" ด้วย `smb://[your_server_ip]/[share_name]` หรือเมานต์ผ่านคำสั่ง `mount.cifs`
:::

## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่า TrueNAS SCALE บนเซิร์ฟเวอร์ของคุณสำเร็จแล้ว หากมีคำถามหรือต้องการความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂