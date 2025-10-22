---
id: vserver-windows-expand-disk
title: "VPS: Expandindo o disco (partição) no Windows Server"
description: "Descubra como expandir sua partição do Windows Server com segurança para usar o novo espaço de disco de forma eficiente → Saiba mais agora"
sidebar_label: Expandir Disco (Partição)
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O Windows OS oferece ferramentas nativas de gerenciamento de disco e partição que permitem realizar várias ações, como expandir partições, dividir discos e muito mais. Uma dessas funções é a capacidade de expandir partições, algo super importante após aumentar a capacidade de armazenamento do seu servidor Windows. Neste guia, vamos mostrar como expandir uma partição no seu servidor Windows.

<InlineVoucher />

## Preparação

Comece conectando ao seu servidor Windows via RDP. Se precisar de ajuda para isso, confira nosso [Guia de Acesso Inicial (RDP)](vserver-windows-userdp.md).

Existem duas formas de gerenciar discos e partições: pelo utilitário **Gerenciamento de Disco** (Disk Management) com interface gráfica, e pelo CLI **diskpart**. O **Gerenciamento de Disco** oferece uma versão GUI do Diskpart que cobre a maioria das ações comuns, incluindo expandir partições. Para usuários avançados, o `diskpart` é mais completo e poderoso.

## Expandindo a Partição

Em vários casos, pode ser necessário expandir sua partição existente para usar o novo espaço de disco. Um exemplo é quando você aumenta o espaço do disco do seu servidor, que por padrão não será alocado até você expandir a partição principal.

Recomendamos usar o método pelo utilitário **Gerenciamento de Disco**, pois é mais fácil, especialmente para quem está começando. Esse processo é seguro e não afeta seus dados.

<Tabs>
<TabItem value="disk-management" label="Via Gerenciamento de Disco (GUI)" default>

Comece abrindo o utilitário **Gerenciamento de Disco**. Basta buscar no menu iniciar ou abrir o executar com `Tecla Windows + R` e digitar `diskmgmt.msc`, depois confirme.

![](https://screensaver01.zap-hosting.com/index.php/s/xfMexYdrJMr3L6Y/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/gKjkst3H89knLFa/preview)

Com a ferramenta aberta, clique com o botão direito na partição principal e selecione a ação **Expandir Volume** para abrir o assistente.

:::tip
A unidade principal de boot sempre será a **C:**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/nWMStW6T74SrrRe/preview)

No assistente, clique em **Avançar** para ir para a página onde você define quanto espaço deseja adicionar. Por padrão, o Windows já preenche com todo o espaço não alocado, que é o ideal.

Então, basta clicar em **Avançar** novamente e por fim em **Concluir** para finalizar o processo.

![](https://screensaver01.zap-hosting.com/index.php/s/MwRFS8eCHoqBSNt/download)

Quando o processo terminar, a configuração atualizada será exibida no Gerenciamento de Disco com o tamanho do disco atualizado.

![](https://screensaver01.zap-hosting.com/index.php/s/M46ca4FkeG42AZz/preview)

</TabItem>

<TabItem value="diskpart" label="Via Diskpart (CLI)">

Comece abrindo o prompt de comando como administrador. Procure no menu iniciar, clique com o botão direito e selecione **Executar como administrador**.

Digite o comando `diskpart` para entrar na ferramenta CLI. Quando carregar, rode `list disk` para ver todos os discos conectados.

Depois, execute `select disk [número_do_disco]`, substituindo `[número_do_disco]` pelo número do disco que você quer expandir.

:::tip
A unidade principal de boot sempre será a **C:**.
:::

Com o disco selecionado, rode `list volume` para listar todos os volumes do disco. Encontre o volume que deseja expandir e execute `select volume [número_do_volume]`, substituindo `[número_do_volume]` pelo número do volume.

Com disco e volume selecionados, você pode expandir o volume com o comando abaixo. Pode usar o comando sozinho para usar todo o espaço não alocado ou especificar um tamanho.

```
# Expande para todo o espaço não alocado
extend

# Expande para um tamanho específico (10240 = 10240MB = 10GB)
extend size=10240
```

Se tudo der certo, o tamanho do volume vai aumentar quando você listar os discos novamente ou olhar no explorador de arquivos. Para sair do CLI, rode o comando `quit`.

</TabItem>
</Tabs>

## Conclusão

Você expandiu com sucesso a partição principal do seu disco para usar todo o espaço disponível. Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />