---
id: dedicated-linux-rsync
title: "เซิร์ฟเวอร์เฉพาะ: สำรองข้อมูลเซิร์ฟเวอร์ Linux ด้วย Rsync"
description: "ค้นพบวิธีสร้างสำรองข้อมูลแบบท้องถิ่นและระยะไกลอย่างมีประสิทธิภาพด้วย Rsync เพื่อการซิงค์ข้อมูลและปกป้องข้อมูลที่เชื่อถือได้ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: สร้างสำรองข้อมูลด้วย Rsync
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

การสำรองข้อมูลสามารถทำได้ด้วยเครื่องมือ Rsync ซึ่งสามารถคัดลอกข้อมูลไปยังระบบท้องถิ่นในไดเรกทอรี/ไดรฟ์อื่น หรือไปยังระบบระยะไกลได้  

## คัดลอกข้อมูลไปยังไดเรกทอรีหรือไดรฟ์ท้องถิ่นอื่น:

:::info
ระวัง: การรันครั้งแรกอาจใช้เวลานานกว่าครั้งถัดไปมาก ขึ้นอยู่กับปริมาณข้อมูล เพราะครั้งแรก Rsync จะซิงค์ข้อมูลทั้งหมด แต่ตั้งแต่ครั้งที่สองเป็นต้นไปจะซิงค์เฉพาะข้อมูลที่เปลี่ยนแปลงเท่านั้น
:::
> ดังนั้นจะได้สำรองข้อมูลแบบเพิ่มขึ้น (incremental backup)  

## ขั้นตอนที่ 1

สามารถติดตั้ง Rsync ด้วยคำสั่งนี้:

```
apt install rsync
```

หลังติดตั้งเสร็จ สามารถใช้งานได้ทันที  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Daily backup to a local directory/drive" label="สำรองข้อมูลรายวันไปยังไดเรกทอรี/ไดรฟ์ท้องถิ่น">
## ขั้นตอนที่ 2

ในตัวอย่างนี้ โฟลเดอร์ Client ภายใต้ /home จะถูกซิงค์ไปยังโฟลเดอร์ Backup ภายใต้ /home  

สามารถทำได้ด้วยคำสั่งนี้: 

```
rsync -arz /home/Client /home/Backup
```
-a=เก็บถาวร (Archiving) จะคัดลอกแอตทริบิวต์ทั้งหมด
<br/>
-r=แบบเรียกซ้ำ (Recursive) ซิงค์โฟลเดอร์ย่อยด้วย
<br/>
-z=บีบอัด (Compression) ขึ้นกับปริมาณ/ขนาดข้อมูลจะถูกบีบอัด

โฟลเดอร์ถูกซิงค์เรียบร้อยแล้ว  

ถ้ามีการลบไฟล์ในโฟลเดอร์ Client ตอนนี้ ไฟล์นั้นจะยังคงอยู่ในโฟลเดอร์ Backup  
แต่ถ้าต้องการให้ไฟล์ใน Backup ตรงกับ Client แบบ 1:1 สามารถแก้ไขคำสั่ง rsync ได้ง่ายๆ เพื่อให้ข้อมูลที่ไม่มีใน Client ถูกลบออกจาก Backup ด้วย  

คำสั่งที่แก้ไขคือ: 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=เก็บถาวร (Archiving) จะคัดลอกแอตทริบิวต์ทั้งหมด
<br/>
-r=แบบเรียกซ้ำ (Recursive) ซิงค์โฟลเดอร์ย่อยด้วย
<br/>
-z=บีบอัด (Compression) ขึ้นกับปริมาณ/ขนาดข้อมูลจะถูกบีบอัด
<br/>
--delete= ลบข้อมูลที่ไม่มีในต้นทางแต่ยังอยู่ในปลายทาง

## ขั้นตอนที่ 3

เพื่อไม่ต้องรันคำสั่งด้วยมือทุกครั้ง สามารถใส่คำสั่งนี้ใน cronjob ได้เลย  
เช่น ต้องการสำรองข้อมูลทุกวันตอนตี 3:  

เปิด crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

กด 1 เพื่อใช้ nano เป็นตัวแก้ไข
<br/>
กด 2 เพื่อใช้ vim เป็นตัวแก้ไข  

หลังเปิดไฟล์ด้วย nano หรือโปรแกรมแก้ไขอื่นๆ สามารถสร้างและใส่ crontab ได้  
สามารถสร้าง crontab ได้ที่ [Generator นี้](https://crontab-generator.org/)  

crontab ที่ใส่จะมีลักษณะดังนี้: 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

ทุกวันตอนตี 3 คำสั่งจะถูกรันและสร้างสำรองข้อมูล  

</TabItem>
<TabItem value="Daily backup to a remote system" label="สำรองข้อมูลรายวันไปยังระบบระยะไกล">

## ขั้นตอนที่ 4

ในตัวอย่างนี้ โฟลเดอร์ Client ภายใต้ /home จะถูกซิงค์ไปยังโฟลเดอร์ Backup บนระบบระยะไกล การเชื่อมต่อจะใช้ SSH key เพื่อให้สามารถทำสำรองข้อมูลอัตโนมัติได้  
>สำคัญ: Rsync ต้องติดตั้งบนเซิร์ฟเวอร์ระยะไกลด้วย  
>```
>apt install rsync
>```

ตัวอย่างคำสั่งสำหรับสำรองข้อมูลไปยังโฮสต์ระยะไกล (ปรับแต่งตามต้องการ): 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=เก็บถาวร (Archiving) จะคัดลอกแอตทริบิวต์ทั้งหมด
<br/>
-r=แบบเรียกซ้ำ (Recursive) ซิงค์โฟลเดอร์ย่อยด้วย
<br/>
-z=บีบอัด (Compression) ขึ้นกับปริมาณ/ขนาดข้อมูลจะถูกบีบอัด
<br/>
-e=ระบุพอร์ต SSH (ค่าเริ่มต้น 22)
<br/>
ระบุ SSH key (path)("ssh -i /home/sshkey/keybackup")= ssh -i /[path to key]
<br/>
ระบุไดเรกทอรีที่จะสำรอง (/home/client/)= /[directory]
<br/>
RemoteHost(root@123.123.123.123:)= ชื่อผู้ใช้บน RemoteHost และที่อยู่: name@IP/โดเมน
<br/>
ไดเรกทอรีเป้าหมายบน RemoteHost(:/home/Backup/Home-Server1/)= :/[path to key]

โฟลเดอร์/ไฟล์ถูกซิงค์และบันทึกไปยังไดเรกทอรีระยะไกลเรียบร้อยหลังรันคำสั่ง  

ถ้ามีการลบไฟล์ในโฟลเดอร์ Client ไฟล์นั้นจะยังคงอยู่ในโฟลเดอร์ Backup บนโฮสต์ระยะไกล  
แต่ถ้าต้องการให้ไฟล์ใน Backup ตรงกับ Client แบบ 1:1 สามารถแก้ไขคำสั่ง rsync ได้ง่ายๆ เพื่อให้ข้อมูลที่ไม่มีใน Client ถูกลบออกจาก Backup บนโฮสต์ระยะไกลด้วย  

คำสั่งที่แก้ไขคือ:

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=เก็บถาวร (Archiving) จะคัดลอกแอตทริบิวต์ทั้งหมด
<br/>
-r=แบบเรียกซ้ำ (Recursive) ซิงค์โฟลเดอร์ย่อยด้วย
<br/>
-z=บีบอัด (Compression) ขึ้นกับปริมาณ/ขนาดข้อมูลจะถูกบีบอัด
<br/>
--delete= ลบข้อมูลที่ไม่มีในต้นทางแต่ยังอยู่ในปลายทาง
<br/>
-e=ระบุพอร์ต SSH (ค่าเริ่มต้น 22)
<br/>
ระบุ SSH key (path)("ssh -i /home/sshkey/keybackup")= ssh -i /[path to key]
<br/>
ระบุไดเรกทอรีที่จะสำรอง (/home/client/)= /[directory]
<br/>
RemoteHost(root@123.123.123.123:)= ชื่อผู้ใช้บน RemoteHost และที่อยู่: name@IP/โดเมน
<br/>
ไดเรกทอรีเป้าหมายบน RemoteHost(:/home/Backup/Home-Server1/)= :/[Path to target directory]

## ขั้นตอนที่ 5

เพื่อไม่ต้องรันคำสั่งด้วยมือทุกครั้ง สามารถใส่คำสั่งนี้ใน cronjob ได้เลย  
เช่น ต้องการสำรองข้อมูลทุกวันตอนตี 3:  

เปิด crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

กด 1 เพื่อใช้ nano เป็นตัวแก้ไข
<br/>
กด 2 เพื่อใช้ vim เป็นตัวแก้ไข  

หลังเปิดไฟล์ด้วย nano หรือโปรแกรมแก้ไขอื่นๆ สามารถสร้างและใส่ crontab ได้  
สามารถสร้าง crontab ได้ที่ [Generator นี้](https://crontab-generator.org/)  

crontab ที่ใส่จะมีลักษณะดังนี้: 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

ทุกวันตอนตี 3 คำสั่งจะถูกรันและสร้างสำรองข้อมูล  

</TabItem>
</Tabs>