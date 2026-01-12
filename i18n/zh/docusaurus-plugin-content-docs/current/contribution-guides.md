---
id: contribution-guides
title: 指南流程
description: "了解如何为 ZAP-Docs 贡献有价值且原创的指南，帮助用户通过清晰实用的内容学习 → 立即了解"
sidebar_label: 指南流程
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

在本页了解如何参与贡献到我们的 ZAP-Docs。流程按时间顺序排列，建议从这里开始阅读。

## 第一步：建议内容

流程的第一步是通过我们的 GitHub 仓库创建一个建议 Issue。你需要向我们提供你计划制作的更改和改进的详细信息。

请确保你的想法不是已有指南或建议的重复内容，并且你坚信它对初学者或高级用户都会有帮助。你可以通过访问[问题页面](https://github.com/zaphosting/docs/issues?q=is%3Aissue)查看现有建议。

:::tip
建议先阅读我们的[指南规范](contribution-guides-guidelines.md)，了解我们追求的内容和文档风格。
:::

### 我们在寻找什么主题？

我们的指南涵盖了通过 ZAP-Hosting 提供或与我们服务相关的产品、服务和开源软件的实用且高质量的内容。如果你需要灵感，可以浏览我们 ZAP-Docs 的页面，感受我们的写作风格和发布内容类型。

如前言所述，所有内容必须原创，以遵守版权法。严禁未经授权使用 AI/生成工具和/或其他知识产权。我们的指南旨在通过一系列步骤提供高质量信息，确保读者理解操作内容和方法，最终达到教育读者并提供解决方案的目的。

#### 需求指南列表

下面有一份实用的建议清单，包含你可能感兴趣的新指南主题。部分指南主题甚至有额外奖励。你可以[手动访问列表](https://docs.google.com/document/d/13R321FP6Yo3TMQZ07vMARQFlX6n_Or6RIrLpU7IsMfs/edit?usp=sharing)。

<iframe width="800" height="750" src="https://docs.google.com/document/d/e/2PACX-1vRACoNJMjk3rcWyo6LDt8WCvtqB17JpdjsPW3YHpLaZJgfPxGlt4pDEnD1ezOwGW1eljWZYPSyfgrb3/pub?embedded=true"></iframe>
<br></br>

:::note
请记住，这些只是有用的想法，你**不必**严格局限于这些，正如之前提到的，你的指南建议可以很有创意。
:::

### 提交建议

确认你的建议适合我们的文档后，请前往我们的[ZAP Docs GitHub 仓库](https://github.com/zaphosting/docs)，使用**Contribution Suggestion**模板打开一个 Issue。请按照模板填写所有必要信息。你还需要确认接受我们的贡献计划条款，详见[贡献条款](contribution-terms.md)。

:::caution
请务必正确填写你的 ZAP ID，确保奖励发放到正确账户！
:::

提交建议后，我们会在3-5天内回复。回复会直接在你的 GitHub Issue 中。

:::tip
**遇到问题？** 欢迎加入我们的[ZAP-Hosting Discord 服务器](https://zap-hosting.com/discord)，ZAP 社区和我们都会乐意帮助你。或者通过我们网站的[工单系统](https://zap-hosting.com/en/customer/support/)联系我们，留言时请注明“Contribution Program - Guides”，以便转给 ZAP-Hosting 贡献团队。
:::

回复中我们会提供反馈或需要调整的细节。如有问题，会直接在你的 GitHub Issue 中跟进。

## 第二步：撰写指南

在对文档进行任何添加或修改时，请务必严格遵守我们的[指南规范](contribution-guides-guidelines.md)，确保内容一致且高质量。本节将深入介绍最佳实践和创建新内容及修改现有内容的最佳流程。如果你是 GitHub 新手，可以参考下面的简易教程，了解如何轻松编辑或创建 ZAP-Docs 内容。

:::note
请确保你已在我们的[GitHub 仓库](https://github.com/zaphosting/docs)创建了建议，并且已获得 ZAP 贡献团队成员的批准，才开始撰写新指南或修改内容。未按流程获得批准的贡献无法保证获得奖励。
:::

**前置条件：**
- [GitHub 账号](https://github.com/)

第一步是从 GitHub 创建你自己的 ZAP-Docs 仓库 Fork。访问[ZAP Docs GitHub 仓库](https://github.com/zaphosting/docs)，点击页面顶部的 **Fork** 按钮。

![](https://screensaver01.zap-hosting.com/index.php/s/3AGoSTE7dGTsdz7/preview)

Fork 时请根据已接受的建议命名仓库，并勾选“仅复制主分支（Copy the master branch only）”。点击创建按钮，等待几秒钟完成 Fork。

Fork 完成后，你可以继续下一节完成贡献。主要有两种内容制作方式：直接通过 GitHub 网站，或本地克隆仓库。前者更友好，后者可以先用 Docusaurus 本地测试查看实时效果。

:::tip
对于新手或不熟悉 Git 的用户，推荐使用**方法一**，通过 GitHub 网站编辑，操作简单快捷，无需本地环境配置。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### 创建指南的方法

<Tabs>
<TabItem value="direct" label="方法一：直接通过 GitHub 网站" default>

最简单且推荐的方式是通过 GitHub 网站创建内容。本节将演示如何通过 GitHub 网站创建新指南和编辑现有指南。

首先，进入你之前创建的 Fork。进入你的 ZAP Docs Fork 后，可以通过 **docs** 文件夹访问所有文档指南。

![](https://screensaver01.zap-hosting.com/index.php/s/dqptZFrSTrBBHAJ/preview)

文档文件命名遵循简单规则，首词通常指指南类型（游戏、产品或板块），后续词指具体部分。建议浏览我们当前的[ZAP-Docs 网站](https://zap-hosting.com/guides)，找到合适的指南归属区域。例如，`dedicated-windows.md` 属于专用服务器板块，针对 Windows 操作系统。

接下来，根据你的贡献是更新现有指南还是创建新指南，打开对应文件或新建文件。请根据下面的标签页选择相应操作说明，新建指南需要额外准备文件。

<Tabs>
<TabItem value="direct_new" label="新建指南文件" default>

举例来说，我们的建议是为游戏 Rust 创建一份关于游戏命令的指南。查看 ZAP-Docs 网站或仓库发现，游戏服务器产品类别下已有 Rust 板块。根据命名规则和现有指南，新指南应命名为 `rust-commands.md`。

新建文件步骤：进入[GitHub 仓库](https://github.com/zaphosting/docs)，打开 **docs** 文件夹，右侧点击 **Add File**，选择 **Create new file**。

![](https://screensaver01.zap-hosting.com/index.php/s/xgL3QF9HzJnwARA/preview)

在页面顶部路径栏输入文件名，如示例中的 `rust-commands.md`。

:::info
请确保添加 `.md` 文件扩展名，所有指南均为 Markdown 格式。
:::

接下来，在文件开头添加关键元数据。最简单方法是打开类似 `rust-plugins.md` 的文件，复制顶部元数据标签，然后修改为新指南对应内容，最重要的是 `id` 字段，**必须**与文件名（去除 `.md`）一致。

示例文件内容：
```
---
id: rust-commands
title: "Rust: 管理员命令"
description: "ZAP-Hosting 提供的 Rust 管理员命令信息"
sidebar_label: 管理员命令
services:
  - gameserver
---
```

:::note
我们会在审核时仔细检查元数据，遇到问题不用担心，先继续完成即可。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/2CJFHoc5LeD4YSn/preview)

</TabItem>

<TabItem value="direct_existing" label="编辑现有指南文件" default>

如果是编辑现有文件，打开你想修改的目标文件。示例中使用 `dedicated-linux-satisfactory.md`，位于仓库的 `/docs` 文件夹。打开文件后，你会看到基于 Markdown 的大致预览。

点击文件右上角的编辑（笔形）图标，打开新标签页直接编辑文件。

![](https://screensaver01.zap-hosting.com/index.php/s/SZTsAikipzCZcg3/preview)

</TabItem>
</Tabs>

#### 继续：撰写内容

准备好文件后，开始撰写建议中约定的内容。建议定期保存或提交，避免丢失工作。

:::tip 保持工作安全
编辑时请务必定期提交或备份内容，GitHub 编辑器无自动保存功能，关闭标签页或异常可能导致进度丢失。

强烈推荐使用 Markdown 工具 **[StackEdit](https://stackedit.io/app#)** 编写内容，可本地保存并同步到云端。完成后复制粘贴到 GitHub 文件并提交。
:::

你可以点击编辑窗口顶部的 **Preview** 按钮切换预览模式，查看大致效果，再点击 **Edit** 返回编辑。

![](https://screensaver01.zap-hosting.com/index.php/s/4YcQo6q3iAAGYkZ/preview)

:::note Docusaurus 元素
请注意，部分 Docusaurus 特有元素（如 `:::note`、`:::tip` 等提示标签或标签页）在 GitHub 预览中可能无法正确显示，因为它们不是传统 Markdown 语法，但本地测试和生产环境中会正常显示。
:::

:::info 遵循指南规范
请参考[指南规范](contribution-guides-guidelines.md)了解 Markdown、结构、术语等详细要求。
:::

完成修改后，点击 **Commit changes...** 按钮，会弹出提交提示。

![](https://screensaver01.zap-hosting.com/index.php/s/2iQCZzzAHsHS2rt/preview)

填写有用的提交信息，简述所做更改，必要时添加详细描述。提交后更改会保存到你的 Fork 仓库。接下来请前往**提交内容**部分创建 Pull Request，将内容提交到主 ZAP-Docs 仓库。

</TabItem>

<TabItem value="local" label="方法二：本地通过 IDE（git 克隆）">

你也可以选择通过 IDE 或编辑器（如 Visual Studio Code）本地编写内容。本节演示如何本地创建新指南和编辑现有指南。

**前置条件：**
- 你喜欢的 IDE，本例使用 [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/)（或其他支持 Git 的工具）

第一步是克隆你的 Fork 仓库。推荐使用 GitHub Desktop，点击 **Add**，选择 **Clone repository**，然后选择你的 Fork 仓库。也可以直接用 IDE 的 Git 功能完成。

![](https://screensaver01.zap-hosting.com/index.php/s/g8AwEcGa6mBrQ75/preview)

打开 Visual Studio Code，载入仓库文件夹。左侧 **Explorer** 标签页会显示仓库内所有文件夹。

文档文件命名规则同上，建议浏览[ZAP-Docs 网站](https://zap-hosting.com/guides)确认指南归属区域。

根据贡献内容，打开已有文件或新建文件。请根据下面标签页选择对应操作说明，新建指南需额外准备文件。

<Tabs>
<TabItem value="local_new" label="新建指南文件" default>

示例建议为 Rust 游戏创建一份命令指南。查看网站和仓库发现已有 Rust 板块，按命名规则，新指南应命名为 `rust-commands.md`。

在 IDE 中打开 `/docs` 文件夹，创建新文件，命名为合适的文件名。

:::info
请确保添加 `.md` 文件扩展名，所有指南均为 Markdown 格式。
:::

接下来添加关键元数据。最简单方法是打开类似 `rust-plugins.md` 的文件，复制顶部元数据标签，修改为新指南内容，`id` 字段**必须**与文件名（去除 `.md`）一致。

示例内容：
```
---
id: rust-commands
title: "Rust: 管理员命令"
description: "ZAP-Hosting 提供的 Rust 管理员命令信息"
sidebar_label: 管理员命令
services:
  - gameserver
---
```

:::note
审核时会检查元数据，遇到问题不用担心，先继续完成即可。
:::

最后，为确保新页面在 Docusaurus 侧边栏显示，需要将其添加到 `sidebar.js` 文件的正确板块。Rust 板块已存在，可用 `CTRL+F` 搜索 rust。

在最后一项下新建一行，输入文件名（示例为 `rust-commands`）。如果没有合适板块，可参考其他板块格式新增。

![](https://screensaver01.zap-hosting.com/index.php/s/TwKjWmCofG5Rs8f/preview)

:::note
请确保在新行前一行末尾添加逗号（`,`），保证语法正确。
:::

</TabItem>

<TabItem value="local_existing" label="编辑现有指南文件" default>

编辑现有文件非常简单，无需重新设置文件结构。

直接打开 `/docs` 文件夹中目标指南文件，进行你之前建议并获批的修改。

</TabItem>
</Tabs>

#### 继续：撰写内容

文件准备好后，开始撰写建议中约定的内容。建议定期保存或提交，避免丢失工作。

使用快捷键 `CTRL+SHIFT+V` 或点击编辑器右上角预览图标，开启分屏预览，实时查看 Markdown 渲染效果。

:::note Docusaurus 元素
请注意，部分 Docusaurus 特有元素（如 `:::note`、`:::tip` 等提示标签或标签页）在 GitHub 预览中可能无法正确显示，但本地测试和生产环境中会正常显示。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cXgQEswNsbpGMsR/preview)

:::info 遵循指南规范
请参考[指南规范](contribution-guides-guidelines.md)了解 Markdown、结构、术语等详细要求。
:::

完成修改后，最后一步是将提交推送到你的 Fork 仓库，并创建 Pull Request。可通过 GitHub Desktop（或其他 Git 工具）添加合适标题和描述，点击推送按钮完成。

![](https://screensaver01.zap-hosting.com/index.php/s/tFdrLknnXn62sZc/preview)

接下来请前往**提交内容**部分创建 Pull Request，将内容提交到主 ZAP-Docs 仓库。

:::tip
建议阅读可选的**本地测试构建**章节，结合本地测试打造最佳工作流程，实时查看更改效果，十分实用，但非必需。
:::

</TabItem>
</Tabs>

### 可选：本地测试构建

在创建最终 Pull Request 前，通常建议本地构建并测试，确保更改正常。建议本地测试以加快 Pull Request 处理速度，但非必需，可直接跳过。

:::tip
这**非必需**，因为提交 Pull Request 后我们会自动构建。但本地测试有助于调试和实时预览。
:::

:::note
如果你已按照教程本地修改，可跳过克隆仓库步骤，因为你已有本地仓库。
:::

**前置条件：**
- [Node.js v16.14 或更高版本](https://nodejs.org/en)
- [GitHub Desktop](https://desktop.github.com/) 或 [Git](https://git-scm.com/)

第一步是克隆你的 Fork 仓库。推荐用 GitHub Desktop，点击 **Add**，选择 **Clone repository**，选择你的 Fork 仓库。

也可以用 Git 命令行。新建一个文件夹（如 `Docs Test`），进入该文件夹，打开 Git Bash（Windows 右键菜单中选择）。复制你的 Fork 仓库 URL，执行：
```
git clone [your_url]
```

无论哪种方式，仓库都会克隆到本地。接下来安装所需模块，进入仓库文件夹，右键打开命令行窗口（或用 Git Bash），执行：
```
npm install
```

安装过程可能较长，完成后会在仓库文件夹生成 `node_modules` 文件夹。若报错，可能是未安装 Node.js。

最后启动本地文档网站，执行：
```
npm start
```

完成后，默认浏览器会自动打开本地网站，端口为 `3000`。本地版本与生产环境一致，你可以在这里测试所有内容！

确认无误后，前往下一节创建 Pull Request，提交内容到主仓库。

## 第三步：提交内容

完成符合规范且高质量的贡献后，可以创建 Pull Request。进入你的 ZAP Docs Fork，点击主按钮下方的 **Contribute**，打开 Pull Request。

![](https://screensaver01.zap-hosting.com/index.php/s/GLjSno3Ltz3zFpZ/preview)

新页面会显示你的更改。默认描述包含一个小清单，确保你已正确全面完成所有步骤。浏览后可删除该模板。

填写合适的标题，描述中请务必提及/链接你的建议，格式为 `#000` 加建议 ID。如果菜单找不到，可以去主[ZAP Docs GitHub 仓库](https://github.com/zaphosting/docs)的 Issues 区查找建议及其 ID。

确认标题、描述和更改无误后，点击按钮创建 Pull Request，提交到我们的仓库。

![](https://screensaver01.zap-hosting.com/index.php/s/mrGm5f2WMttYzFT/preview)

系统会自动进行语法和质量检查。两项通过后，ZAP-Docs 团队会在几天内审核你的 Pull Request。

审核时我们可能会要求你做一些必要修改，也可能直接调整。完成后，我们会批准你的更改，准备发布。

## 第四步：发布指南更改 & 奖励发放

当我们最终接受你的 Pull Request 并完成所有修改后，会回复你的 Pull Request，告知发布细节及奖励发放信息。

:::info
此类贡献的奖励取决于多个因素，尤其是内容质量和规模，以及 ZAP 贡献团队评估的其他标准。详情请参阅我们的[奖励说明](contribution-rewards.md)。
:::

恭喜你为 ZAP-Hosting 指南贡献内容！我们非常感谢你的付出！💚