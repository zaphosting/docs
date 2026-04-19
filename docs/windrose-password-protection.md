---
id: windrose-password-protection
title: "Windrose: Password Protection"
description: "Set a password on your Windrose game server to protect access and manage password change settings securely in the server configuration -> Learn more now"
sidebar_label: Password Protection
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windrose supports password protection, which allows you to restrict access to your dedicated server with a join password. In this guide, you will learn how to enable, change, or remove the password on your Windrose server using the ZAP-Hosting gameserver management.

## Preparation

Before you begin, make sure you have access to your Windrose server in the ZAP-Hosting web interface and permission to edit server files.

:::info Required Access
You need access to your server Dashboard and the file management area in order to edit the `ServerDescription.json` file.
:::

## Understanding Windrose Password Protection

Setting a password helps prevent unauthorized players from joining your Windrose game server. Players can still reach the server through the invite code, but they must enter the correct password before they can connect.

This is useful if you want to:
- limit access to friends, staff, or a private group
- protect a testing server from public access
- control who can join without relying on a separate password manager or account password system

:::note Password Behavior
Windrose uses the password configured in the server file itself. This is separate from your ZAP-Hosting account password and is not related to tools such as a password manager, password manager Google integration, or any passwords list.
:::

## Enable Password Protection

To apply a password, you need to stop the server first, edit the configuration file, and then start the server again.

### Stop the Server

Open your server Dashboard in the ZAP-Hosting web interface and stop the server completely before making changes.

:::caution Stop the Server Before Editing
You should stop the server before editing `ServerDescription.json` to avoid configuration conflicts or the file being overwritten while the server is running.
:::

### Open the Configuration File

In the panel sidebar, open `Files`.

Then locate and open the `ServerDescription.json` file in the root directory of your server file list.

### Edit the Password Settings

Inside `ServerDescription.json`, set `IsPasswordProtected` to `true` and define your desired password in the `Password` field.

```json
"IsPasswordProtected": true,
"Password": "YourPasswordHere"
```

Replace `YourPasswordHere` with your own secure password.

:::tip Choose a Strong Password
Use a unique password that is not reused from your account password or any other service. This helps protect your Windrose server from unwanted access.
:::

### Save and Restart the Server

After editing the file, click `Save Content`.

Once the file has been saved, start your server again from the Dashboard. Your Windrose server will now require the configured password when players attempt to join.

## Configuration Reference

The following table explains the relevant settings in `ServerDescription.json`:

| Key | Type | Example | Description |
| --- | --- | --- | --- |
| `IsPasswordProtected` | Boolean | `true` | Enables or disables password protection |
| `Password` | String | `"YourPasswordHere"` | Defines the join password used when password protection is enabled |

## Change the Existing Password

If you want to perform a password change later, the process is the same as the initial setup.

### Update the Password Value

Stop the server, open `ServerDescription.json`, and change the value in the `Password` field to your new password.

Example:

```json
"IsPasswordProtected": true,
"Password": "[your_new_password]"
```

The placeholder `[your_new_password]` represents the new password you want players to use when joining the server.

### Save and Restart Again

Save the file and restart the server so the password change takes effect.

:::note Password Check
If players cannot join after a password change, ask them to check password entry carefully, including uppercase and lowercase characters if applicable.
:::

## Remove Password Protection

If you no longer want to protect your Windrose server with a password, you can disable the feature in the same configuration file.

### Disable the Setting

Stop the server and open `ServerDescription.json` again.

Set `IsPasswordProtected` to `false`. The `Password` value is ignored when this option is disabled.

```json
"IsPasswordProtected": false,
"Password": ""
```

### Save and Restart the Server

Click `Save Content` and start the server again. Players will then be able to join without entering a password.

## Troubleshooting

If password protection does not work as expected, review the following points.

| Issue | Possible Cause | Solution |
| --- | --- | --- |
| Server does not ask for a password | `IsPasswordProtected` is still set to `false` | Set it to `true`, save the file, and restart the server |
| Players cannot join with the correct password | Password was entered incorrectly | Verify the configured value and ask players to check password input carefully |
| Changes do not apply | Server was not restarted after editing | Restart the server after saving `ServerDescription.json` |
| File changes are lost | File was edited while the server was running | Stop the server first, reapply the changes, then save and restart |

:::danger Do Not Store Sensitive Passwords Publicly
Do not share your server password publicly in community posts, screenshots, or file exports. Also avoid using passwords from old passwords list collections or reusing credentials from other services.
:::

## Conclusion

Congratulations, you have successfully set up password protection on your Windrose server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!