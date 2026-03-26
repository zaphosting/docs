# 使用 txAdmin 成为 FiveM 管理员

## 介绍  
本指南教你如何通过 txAdmin 成为 FiveM 服务器的管理员。包括通过 txAdmin 界面设置管理员权限的必要步骤。

## 需求  
- 通过 ZAP-Hosting 网页界面或面板访问你的 FiveM 服务器  
- FiveM 服务器上必须安装并运行 txAdmin  
- 具备基本的 FiveM 服务器管理知识  

## 逐步指南

### 1. 访问 txAdmin 面板  
1. 登录你的 ZAP-Hosting 账号。  
2. 进入你的 FiveM 服务器控制面板。  
3. 点击 **打开 txAdmin** 按钮启动 txAdmin 界面。  
   
   ![打开 txAdmin](img/fivem-admin-txadmin/open-txadmin.png)  

### 2. 登录 txAdmin  
1. 如果是首次访问 txAdmin，会提示你创建管理员账号。  
2. 输入你想要的用户名和密码，然后保存。  
3. 如果已有账号，直接输入凭证登录即可。  

### 3. 添加管理员权限  
1. 在 txAdmin 仪表盘中，切换到 **玩家** 标签。  
2. 通过搜索你的 Steam ID 或游戏内昵称找到你的玩家信息。  
3. 点击你玩家条目旁的 **管理** 按钮。  
4. 在权限部分，给自己分配 **admin** 角色或所需的权限。  
   
   ![分配管理员角色](img/fivem-admin-txadmin/assign-admin-role.png)  

### 4. 配置权限（可选）  
1. 进入 txAdmin 的 **设置** 标签。  
2. 选择 **权限**，细化管理员可用的具体命令和权限。  
3. 根据需求调整并保存更改。  

### 5. 保存并重启服务器  
1. 分配权限后，返回 **仪表盘** 标签。  
2. 点击 **重启服务器** 以应用所有更改。  
   
   ```bash
   # 或者通过 ZAP-Hosting 面板重启：
   # 1. 进入你的服务器控制面板
   # 2. 点击“重启”
   ```  

### 6. 游戏内验证管理员身份  
1. 加入你的 FiveM 服务器。  
2. 打开游戏内控制台（通常是 F8 键）。  
3. 测试管理员命令，例如：  
   
   ```plaintext
   /admin
   /kick [playerID]
   /ban [playerID]
   ```  
   
4. 如果命令执行成功，说明你已拥有管理员权限。  

> **注意：** 如果遇到问题，请再次确认你的 Steam ID 或 txAdmin 中的服务器白名单设置。

## 结语  
按照以上步骤，你已经成功通过 txAdmin 成为 FiveM 服务器的管理员。现在你可以用管理员权限高效管理你的服务器啦！