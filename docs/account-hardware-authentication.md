---
id: account-hardware-authentication
title: "Hardware authentication (Passkey)"
description: "Discover how to enhance your account security with passkey and protect your personal information effectively → Learn more now"
sidebar_label: Hardware authentication
---

import SearchableAccordion from '@site/src/components/SearchableAccordion/SearchableAccordion';
import items from '@site/data/faqs/account-hardware-authentication.json';

## Introduction

Hardware Authentication using Passkeys is a modern and phishing resistant method to secure your user account. Instead of relying on a traditional password, a cryptographic key pair is used. The private key is securely stored on your device and never leaves it. Authentication is performed locally using biometric verification such as fingerprint or face recognition or alternatively a device PIN.



## Requirements

To use Hardware Authentication with Passkeys, your setup must meet certain requirements. You need a compatible device such as a smartphone, tablet, or computer. The operating system and browser must support Passkeys or WebAuthn. A screen lock must be configured on the device, for example a fingerprint, Face ID, or a local PIN. 



## Enable authentication

To enable Hardware Authentication, open the profile settings in the customer area and navigate to the Security section (Profile Settings → Security). In this area, you can configure the security options for your account. Select Hardware Authentication to proceed with the setup.

After selecting this option, a popup window will open. Within this window, click on the button labeled Add authenticator to start the configuration process.

![img](https://screensaver01.zap-hosting.com/index.php/s/oSEpGD5emG9ToxW/download)



The setup then continues with the creation of a Passkey sign in for ZAP-Hosting. During this step, you will be asked to define a recovery PIN. This PIN is required to regain access in case the primary authentication method is temporarily unavailable and should be stored securely.

![img](https://screensaver01.zap-hosting.com/index.php/s/tiPnCDTAkieNHNP/download)



After these steps have been confirmed and Hardware Authentication via Passkey has been successfully set up, you will be automatically logged out once. This is a normal security measure and ensures that the newly configured authentication method is properly applied. 

On the next login, after entering your username and password, you will see the Hardware Authentication option. Select this option and confirm the authentication request on your device to complete the login process.

![img](https://screensaver01.zap-hosting.com/index.php/s/FEpZkCCLmi9FmLw/download)



## Disable authentication

In order to disable two factor authentication, navigate to **Profile Settings → Security**. If the user is still able to sign in, the configured authenticator can be removed from the security settings at any time. 

![img](https://screensaver01.zap-hosting.com/index.php/s/Htb3Td7NfbQeCg3/preview)



## Frequently Asked Questions

If you are still unsure about using Hardware Authentication or have questions about its impact on your account, the following information helps clarify common concerns and explains how the feature works in practice at ZAP-Hosting.

<SearchableAccordion items={items} locale="en" />
