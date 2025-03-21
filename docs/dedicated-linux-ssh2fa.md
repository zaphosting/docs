---
id: dedicated-linux-ssh2fa
title: "Dedicated Server: SSH two-factor authentication "
description: Information on how to set up two-factor authentication for your Linux server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Google's SSH two-factor authentication (2FA) service, known as **Google Authenticator SSH**, enhances the security of SSH (Secure Shell) access by adding a second layer of authentication. While SSH already provides a secure method to establish an encrypted connection to a remote server, the integration of 2FA increases the level of security by requiring users to enter not only their password, but also a one-time verification code generated by Google Authenticator. In this guide, we will explore the process of installing and configuring the **Google Authenticator SSH** service on a Linux server.

<InlineVoucher />

## Installation

First you need to install the Google Authenticator on your Linux VPS/Root server. Execute the following command:

```
sudo apt install libpam-google-authenticator
```

You will then be prompted to type "Y" to install the package, type this, press Enter and then the Google Authenticator will be installed!

![](https://screensaver01.zap-hosting.com/index.php/s/mtqePXTr5KdoHkm/preview)

Start the Google Authenticator by typing 'google-authenticator'. Make sure that your window size is sufficient for the QR Code, otherwise press "CTRL+C" and enter it again.

![](https://screensaver01.zap-hosting.com/index.php/s/agW9EHjs5Aimc43/preview)

You will now be prompted again if you want to execute it, type "Y" to accept. You will now get a QR Code. Open your Authenticator app on your smartphone and scan the QR Code.For this example we use the Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/CmQERELXNotsgZB/preview)

Make sure to copy the backup codes, these can each be used once in case you lose your authenticator.

![](https://screensaver01.zap-hosting.com/index.php/s/pkKM2SANJbEejFD/preview)

Now the app already shows you the codes you need to log in later. In this case it looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/QnBxLbR8Grf2GL4/preview)

The following questions are now prompted:

1. Do you want to save the Google Authenticator configuration?
2. Do you want only one login every 30 seconds? 
3. Should the time in which a code is usable be increased?
4. Should only three logins be possible every 30 seconds? (Protection against Brute Force)

For security reasons we recommend to confirm all with Yes. 

![](https://screensaver01.zap-hosting.com/index.php/s/A9RmFA6nWgKzSF6/preview)

## Configuration

Now we have to adjust the Google Authenticator so that it is also used. This requires two adjustments. 

### /etc/ssh/sshd_config

Activate the required modules in the `/etc/ssh/sshd_config'. Open the `/etc/ssh/sshd_config' file by typing 
```
sudo nano /etc/ssh/sshd_config
```

You are now in a text editor. You can move around with the arrow keys, freely delete text and enter and then press 'CTRL + X' then 'Y' and lastly 'Enter' to save the file.

Make sure that the two lines 'UsePAM' and 'ChallengeResponseAuthentication' are set to 'yes'. Like this:

![](https://screensaver01.zap-hosting.com/index.php/s/f5a9G5Wif9HcwQq/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qdf4JCqLgZ85nia/preview)

Save the file with 'CTRL + X' then 'Y' and lastly 'Enter`. Restart SSH afterwards with the following command:
```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

Now we add the Google Authenticator to the login in the `/etc/pam.d/sshd`.Open the `/etc/pam.d/sshd` file by typing `sudo nano /etc/pam.d/sshd`. The last step is to scroll down to the end of the file and enter 'auth required pam_google_authenticator.so'.

![](https://screensaver01.zap-hosting.com/index.php/s/Mgw8tJJtTbkg7T3/preview)

Save the file with 'CTRL + X' then 'Y' and lastly 'Enter`

## Testing access

Now it is time to log in for the first time with 2FA. After you have followed the steps above, all you need to do is restart your SSH connection.

![](https://screensaver01.zap-hosting.com/index.php/s/RwaymAzjGjMgbYL/preview)

You now enter your password as normal. You will be asked for a code, simply enter the recent 2FA code.

![](https://screensaver01.zap-hosting.com/index.php/s/w7BFMMTMdcwXj2x/preview)

Now you are logged in!



## Conclusion

Congratulations, you have successfully configured 2FA for your SSH access. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂
