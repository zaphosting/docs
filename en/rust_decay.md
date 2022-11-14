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

![image](https://user-images.githubusercontent.com/26007280/189934822-b7283e2e-e5ad-4eb6-94c7-5ce5e74df0d6.png)

To save our changes, its required to send

```server.writecfg``` once and sent it by pressing enter.

![image](https://user-images.githubusercontent.com/26007280/189934861-1730ebe5-d066-40a2-a841-990af833bf0c.png)

If your console now shows `Config Saved` the server has taken your changes.


