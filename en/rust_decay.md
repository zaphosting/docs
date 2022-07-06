---
id: rust_decay
title: Modify Decay
sidebar_label: Decay
---

Using RCON, you can run a command directly to make yourself admin. Firstly its required to [Connect via RCON](rust_connectrcon.md).

> The server must be fully started, to be connectable through rcon.

When you're connected, please navigate to the Console section, where you can execute commands. In our example we're using **RustAdmin**.

You can modify the Decay-Rate as following:

`decay.scale 1.0` is the normal decay rate<br>
`decay.scale 0.5` reduces the decay rate by 50%<br>
`decay.scale 0` completely disables the decay<br>

In example you would like to disable the decay completly, then its required to execute the command

```decay.scale 0``` press enter after you have entered the command.

You can verify in the console tab now if the command was successfully sent.

![](https://screensaver01.zap-hosting.com/index.php/s/opfx5QQ5BrZkzS7/preview)

To save our changes, its required to send

```server.writecfg``` once and sent it by pressing enter.

![](https://screensaver01.zap-hosting.com/index.php/s/dqRyDgXDtzczCZj/preview)

If your console now shows `Config Saved` the server has taken your changes.


