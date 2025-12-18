---
id: dedicated-linux-gitlab
title: "เซิร์ฟเวอร์เฉพาะ: ติดตั้ง GitLab บน Linux"
description: "ค้นพบวิธีตั้งค่า GitLab บน Linux เพื่อเพิ่มประสิทธิภาพการทำงาน DevOps และเสริมการทำงานร่วมกันของทีม → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง GitLab
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

GitLab คือแพลตฟอร์ม DevOps ครบวงจรที่ช่วยให้ทีมสามารถทำงานร่วมกันบนโค้ด อัตโนมัติกระบวนการทำงาน และจัดการวงจรการพัฒนาซอฟต์แวร์ทั้งหมดได้อย่างมีประสิทธิภาพ ในคู่มือนี้จะอธิบายการติดตั้ง GitLab บนเซิร์ฟเวอร์ Linux

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)



## การเตรียมตัว

ข้อกำหนดต่อไปนี้ได้รับการแนะนำโดยทีมงาน [GitLab อย่างเป็นทางการ](https://docs.gitlab.com/ee/install/requirements.html) และแนะนำอย่างยิ่งให้ปฏิบัติตามเพื่อหลีกเลี่ยงปัญหาและความไม่สะดวกในภายหลัง

#### ฮาร์ดแวร์

| อุปกรณ์       | ขั้นต่ำ                 | แนะนำ                      |
| -------------- | ---------------------- | --------------------------- |
| CPU            | 2x 2 GHz               | 4x 2.6+ GHz                 |
| RAM            | 4 GB                   | 8 GB                        |
| พื้นที่จัดเก็บ | 10 GB                  | 50+ GB                      |
| แบนด์วิดท์    | 100 mbit/s (อัปโหลด & ดาวน์โหลด) | 100 mbit/s (อัปโหลด & ดาวน์โหลด) |

#### ซอฟต์แวร์

| แพลตฟอร์ม       | ตัวเลือก                                                      |
| ---------------- | ------------------------------------------------------------ |
| ระบบปฏิบัติการ  | Ubuntu (20.04, 22.04, 24.04), Debian(10, 11, 12), OpenSUSE (15.5) |
| ฐานข้อมูล        | PostgreSQL 14.9+                                             |
| เว็บเซิร์ฟเวอร์  | NGINX (มาพร้อม GitLab), Puma 6.4.2+                          |
| อื่นๆ            | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+               |

:::info
สำหรับข้อมูลสเปคที่แม่นยำและอัปเดตที่สุด โปรดดูเอกสาร [ข้อกำหนดฮาร์ดแวร์](https://docs.gitlab.com/ee/install/requirements.html) อย่างเป็นทางการของ GitLab
:::

## การเตรียมตัว

ต้องเชื่อมต่อผ่าน SSH client เพื่อทำการติดตั้ง GitLab บนเซิร์ฟเวอร์ Linux ของคุณ ดูคู่มือ [การเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md) เพื่อเรียนรู้เพิ่มเติม

เมื่อเชื่อมต่อเรียบร้อยแล้ว คุณสามารถเริ่มติดตั้งแพ็กเกจที่จำเป็นสำหรับการติดตั้ง GitLab ได้เลย

## ขั้นตอนที่ 1: ติดตั้ง Dependencies

ก่อนอื่น คุณต้องติดตั้ง dependencies บางตัวเพื่อให้ตัวติดตั้ง GitLab ทำงานได้ ใช้คำสั่งต่อไปนี้เพื่อติดตั้ง dependencies ที่จำเป็นบนเซิร์ฟเวอร์ Linux ของคุณ

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

อัปเดตรายการแพ็กเกจเป็นเวอร์ชันล่าสุดและติดตั้งแพ็กเกจ OpenSSH Server พร้อม dependencies ที่จำเป็นโดยใช้คำสั่งนี้ นี่คือวิธีที่แดชบอร์ดเว็บของ GitLab จะถูกโฮสต์

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

คุณสามารถติดตั้ง Postfix (เซิร์ฟเวอร์ SMTP) หากต้องการส่งการแจ้งเตือนทางอีเมลเมื่อใช้ GitLab ซึ่งเป็น **ตัวเลือกเสริม**

ถ้าต้องการใช้การแจ้งเตือนทางอีเมล ให้ติดตั้ง Postfix ด้วยคำสั่งนี้
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

อัปเดตรายการแพ็กเกจเป็นเวอร์ชันล่าสุดและติดตั้งแพ็กเกจ OpenSSH Server พร้อม dependencies ที่จำเป็นโดยใช้คำสั่งนี้ นี่คือวิธีที่แดชบอร์ดเว็บของ GitLab จะถูกโฮสต์

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

คุณสามารถติดตั้ง Postfix (เซิร์ฟเวอร์ SMTP) หากต้องการส่งการแจ้งเตือนทางอีเมลเมื่อใช้ GitLab ซึ่งเป็น **ตัวเลือกเสริม**

ถ้าต้องการใช้การแจ้งเตือนทางอีเมล ให้ติดตั้ง Postfix ด้วยคำสั่งนี้
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

ติดตั้งแพ็กเกจ OpenSSH Server พร้อม dependencies ที่จำเป็นโดยใช้คำสั่งนี้ นี่คือวิธีที่แดชบอร์ดเว็บของ GitLab จะถูกโฮสต์

```
sudo zypper install curl openssh perl
```

จากนั้นตรวจสอบให้แน่ใจว่า OpenSSH daemon ถูกเปิดใช้งานด้วยคำสั่งต่อไปนี้
```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

ถ้าคุณใช้ `firewalld` ให้ตรวจสอบว่าไฟร์วอลล์อนุญาตการเข้าถึงที่จำเป็น

ตรวจสอบว่าคุณใช้ `firewalld` หรือไม่ด้วยคำสั่งนี้:

```bash
sudo systemctl status firewalld
```

ถ้าใช้งานอยู่ ให้เปิดพอร์ตที่จำเป็น (พอร์ต 80 และ 443 ตามค่าเริ่มต้น):

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

คุณสามารถติดตั้ง Postfix (เซิร์ฟเวอร์ SMTP) หากต้องการส่งการแจ้งเตือนทางอีเมลเมื่อใช้ GitLab ซึ่งเป็น **ตัวเลือกเสริม**

ถ้าต้องการใช้การแจ้งเตือนทางอีเมล ให้ติดตั้ง Postfix ด้วยคำสั่งนี้
```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
ระหว่างติดตั้ง Postfix อาจมีหน้าคอนฟิกขึ้นมา ในกรณีนี้ให้เลือก 'Internet Site' แล้วกด Enter ใช้ DNS ภายนอกของเซิร์ฟเวอร์ Linux ของคุณสำหรับ 'mail name' แล้วกด Enter ถ้ามีหน้าจอเพิ่มเติม ให้กด Enter เพื่อยอมรับค่าดีฟอลต์

ถ้าคุณต้องการใช้โซลูชันอื่นในการส่งอีเมล ให้ข้ามขั้นตอนนี้และ [ตั้งค่าเซิร์ฟเวอร์ SMTP ภายนอก](https://docs.gitlab.com/omnibus/settings/smtp) หลังจากติดตั้ง GitLab บนเซิร์ฟเวอร์ Linux ตามคู่มือจากทีม GitLab อย่างเป็นทางการ
:::

## ขั้นตอนที่ 2: ติดตั้ง GitLab

หลังจากดาวน์โหลดและติดตั้ง dependencies ที่จำเป็นทั้งหมดแล้ว คุณก็พร้อมติดตั้ง GitLab ได้เลย

ในคู่มือนี้ เราจะติดตั้ง GitLab โดยตรงจากที่เก็บแพ็กเกจอย่างเป็นทางการ

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
สคริปต์ต่อไปนี้จะเพิ่มที่เก็บ GitLab ลงในตัวจัดการแพ็กเกจ apt:

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

เมื่อเสร็จแล้ว ให้ติดตั้งแพ็กเกจ `gitlab-ee`:

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
สคริปต์ต่อไปนี้จะเพิ่มที่เก็บ GitLab ลงในตัวจัดการแพ็กเกจ Zypper:

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

เมื่อเสร็จแล้ว ให้ติดตั้งแพ็กเกจ `gitlab-ee`:

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

เมื่อกระบวนการนี้เสร็จสิ้น คุณจะมี GitLab พร้อมใช้งานบนเซิร์ฟเวอร์ Linux ของคุณ ต่อไปให้ตั้งค่าบางอย่างที่จำเป็นเพื่อให้เซิร์ฟเวอร์ทำงานได้

## ขั้นตอนที่ 3: ตั้งค่า GitLab

เพื่อให้ทุกอย่างทำงานได้ คุณต้องแก้ไขไฟล์คอนฟิก เริ่มด้วยการเปิดไฟล์คอนฟิก GitLab ด้วยโปรแกรมแก้ไขข้อความที่คุณชอบ ตัวอย่างนี้ใช้ `nano` ที่ติดตั้งมาแล้ว
```
sudo nano /etc/gitlab/gitlab.rb
```

จากนั้นค้นหาบรรทัด `external_url` และใส่โดเมนของคุณ หรือถ้าไม่มีโดเมน ให้ใส่ที่อยู่ IP ของเซิร์ฟเวอร์ Linux แทน

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
## GitLab URL
##! URL ที่ GitLab จะสามารถเข้าถึงได้
##! ดูรายละเอียดเพิ่มเติมเกี่ยวกับการตั้งค่า external_url ได้ที่:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! หมายเหตุ: ระหว่างการติดตั้ง/อัปเกรด ค่าของตัวแปรแวดล้อม
##! EXTERNAL_URL จะถูกใช้แทนค่าตรงนี้
##! บน AWS EC2 เราจะพยายามดึงโฮสต์เนมหรือที่อยู่ IP สาธารณะจาก AWS ด้วย
##! ดูรายละเอียดเพิ่มเติมได้ที่:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`โดเมนของคุณ / ที่อยู่ IPv4 ของเซิร์ฟเวอร์ Linux`'
```

นอกจากนี้ เราแนะนำให้ใส่อีเมลของคุณในบรรทัด `letsencrypt['contact_emails']` เพื่อให้ Let's Encrypt ส่งการแจ้งเตือนและติดต่อคุณเกี่ยวกับใบรับรอง SSL อัตโนมัติและฟรี

:::note
คุณต้องใช้โดเมนถ้าต้องการรับใบรับรอง SSL ฟรีจาก Let's Encrypt ไม่สามารถขอใบรับรองโดยตรงกับที่อยู่ IP ได้
:::

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
################################################################################
# การรวม Let's Encrypt
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`อีเมลของคุณที่นี่`] # ควรเป็นอาร์เรย์ของอีเมลที่ใช้ติดต่อ
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# ดู https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically สำหรับการตั้งค่าเพิ่มเติม
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # ควรเป็นตัวเลขหรือสคริปต์ cron ถ้ามี
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
คุณสามารถใช้ `CTRL+W` เพื่อค้นหา `letsencrypt['contact_emails']` แล้วกด Enter เพื่อไม่ต้องค้นหาไฟล์ทั้งหมดด้วยตนเอง
:::

เมื่อพร้อม กด `CTRL+X` ตามด้วย `Y` แล้วกด `Enter` เพื่อบันทึกการเปลี่ยนแปลง

สุดท้าย รันคำสั่งนี้เพื่อคอนฟิก GitLab ใหม่ด้วยการตั้งค่าใหม่
```
sudo gitlab-ctl reconfigure
```

กระบวนการนี้อาจใช้เวลาสักครู่เพราะจะเริ่มต้น GitLab ด้วยข้อมูลคอนฟิกที่อัปเดต พร้อมกระบวนการอัตโนมัติ ใบรับรอง SSL จะถูกออกให้ถ้าใช้โดเมน

## ขั้นตอนที่ 4: เข้าถึงเว็บอินเทอร์เฟซ

หลังจากเริ่มต้นเสร็จแล้ว เซิร์ฟเวอร์ควรเข้าถึงได้ผ่านเว็บเบราว์เซอร์ ให้เข้าเว็บไซต์โดยพิมพ์โดเมนหรือที่อยู่ IP ดังนี้
```
https://[โดเมนของคุณ] OR http://[ที่อยู่ IP ของคุณ]
```

เมื่อเข้าครั้งแรก คุณจะเจอหน้าล็อกอิน

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

เพื่อเข้าสู่ระบบด้วยสิทธิ์แอดมินครั้งแรก ให้ล็อกอินด้วยผู้ใช้ `root`

สำหรับรหัสผ่าน คุณต้องเข้าไปดูไฟล์บนเซิร์ฟเวอร์ Linux ที่เก็บรหัสผ่านไว้ ใช้คำสั่งนี้เพื่อเปิดไฟล์และหาฟิลด์ `Password`
```
sudo nano /etc/gitlab/initial_root_password
```

<!-- The following code is from the /etc/gitlab/initial_root_password file -->
```
# คำเตือน: ค่านี้ใช้ได้เฉพาะในเงื่อนไขต่อไปนี้เท่านั้น

# 1. ถ้ากำหนดเอง (ผ่านตัวแปรแวดล้อม `GITLAB_ROOT_PASSWORD` หรือการตั้งค่า `gitlab_rails['initial_root_password']` ใน `gitlab.rb`) ก่อนฐานข้อมูลถูกสร้างครั้งแรก

# 2. รหัสผ่านยังไม่ถูกเปลี่ยนด้วยตนเอง ไม่ว่าจะผ่าน UI หรือคำสั่ง

#

# ถ้ารหัสผ่านนี้ใช้ไม่ได้ คุณต้องรีเซ็ตรหัสผ่านแอดมินตาม https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password

Password: `[รหัสผ่านของคุณอยู่ที่นี่]`

# หมายเหตุ: ไฟล์นี้จะถูกลบอัตโนมัติหลังจากรัน reconfigure ครั้งแรกภายใน 24 ชั่วโมง
```

ใส่ชื่อผู้ใช้และรหัสผ่านในหน้าล็อกอินเพื่อเข้าสู่แดชบอร์ด GitLab ครั้งแรก คุณจะสามารถเข้าถึงแดชบอร์ด GitLab บนเซิร์ฟเวอร์ Linux ของคุณได้เลย

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

เราแนะนำให้สร้างผู้ใช้ใหม่และ/หรือเปลี่ยนรหัสผ่านของผู้ใช้ `root` โดยเข้าไปที่ **Admin** มุมล่างซ้าย แล้วเลือก **Overview->Users** ที่หน้านี้คุณจะจัดการผู้ใช้สำหรับ GitLab instance ของคุณได้

## ตัวเลือกเสริม: ตั้งค่าไฟร์วอลล์ด้วย ufw

ถ้าไม่อยากตั้งค่าไฟร์วอลล์ หรือใช้ `firewalld` บน OpenSUSE อยู่แล้ว สามารถข้ามส่วนนี้ได้ ให้แน่ใจว่าอนุญาตพอร์ต 80/443 และพอร์ต 22

### ติดตั้ง ufw

ถ้าคุณติดตั้ง `ufw` แล้ว สามารถข้ามขั้นตอนนี้ได้เลย

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
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

### เปิดพอร์ตที่จำเป็น

```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

### เปิดใช้งานไฟร์วอลล์

:::warning
คำสั่งนี้จะบล็อกการเข้าถึงพอร์ตทั้งหมดที่ไม่ได้อนุญาตไว้ในรายการขาว โปรดตรวจสอบให้แน่ใจว่ารายการขาวถูกตั้งค่าอย่างถูกต้องก่อนรันคำสั่งนี้
:::

เพื่อให้ไฟร์วอลล์ทำงาน ให้เปิดใช้งานด้วยคำสั่งนี้

```
sudo ufw enable
```

## สรุป

ยินดีด้วย คุณติดตั้ง GitLab สำเร็จแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือทุกวัน!

ถ้าต้องการตั้งค่าเพิ่มเติม แนะนำให้อ่าน [เอกสาร GitLab อย่างเป็นทางการ](https://docs.gitlab.com/ee/install/next_steps.html) สำหรับขั้นตอนถัดไป


