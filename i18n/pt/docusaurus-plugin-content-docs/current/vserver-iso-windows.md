---
id: vserver-iso-windows
title: "VPS: Instalação do Windows X/Windows Server 20XX"
description: "Descubra como personalizar instalações do Windows com ISOs sob medida para controle total sobre setup e drivers → Saiba mais agora"
sidebar_label: "Instalar Windows X/WS 20XX"
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introdução
Instalar uma ISO personalizada te dá controle total sobre a configuração de ambientes Windows, como Windows 10 ou Windows Server 2016/2019/2022/2025. Diferente das imagens padrão pré-configuradas que oferecemos, essa abordagem permite usar um meio de instalação feito sob medida para suas necessidades específicas, por exemplo, incluindo drivers especiais, configurações pré-definidas ou pacotes de software adicionais.

<InlineVoucher />



## Preparação

Para a instalação e configuração de um sistema operacional, é importante inicialmente montar a ISO correspondente do sistema. Se você ainda não está familiarizado com o processo de montar uma ISO, o melhor é consultar nosso [guia Own ISO](vserver-iso.md).



## Instalação

No início da instalação do sistema Windows, você será guiado pelos passos iniciais do setup. Primeiro, selecione o **idioma** preferido, depois configure o **layout do teclado** e, em seguida, escolha o **método de instalação**. Para fins de demonstração, aqui usamos a opção **Versão Anterior do Setup**. No próximo passo, selecione a edição, e neste exemplo, escolhemos **Windows Server 2025 Datacenter Desktop Experience**, que oferece a interface gráfica completa.



![img](https://screensaver01.zap-hosting.com/index.php/s/7K227dRoaz5Y4py/download)

Nesta etapa da instalação, você vai notar que nenhuma partição aparece. Isso não é um erro, mas sim porque o Windows não consegue detectar os drives virtuais sem drivers adicionais. Os drivers VirtIO essenciais são necessários para o reconhecimento dos discos e seu correto funcionamento. Esses drivers precisam ser montados e instalados agora, após o que os drives aparecerão e você poderá continuar com a partição e instalação do sistema operacional.



### Driver(s) VirtIO

Antes de instalar o sistema operacional, os drivers VirtIO precisam ser configurados. Esses drivers Windows são otimizados para uso com hypervisors baseados em KVM e garantem que as máquinas virtuais Windows rodem com máxima performance e compatibilidade.

Para isso, você deve trocar temporariamente o meio de instalação para o `virtio-win.iso`. Selecione o arquivo ISO VirtIO entre as ISOs disponíveis e clique em **Montar**. Isso torna os drivers acessíveis durante o processo de setup, para que possam ser instalados antes de continuar a instalação do sistema operacional.



![img](https://screensaver01.zap-hosting.com/index.php/s/wtZFngf9FofiQ88/download)

:::warning NÃO REINICIE O SERVIDOR
Ao trocar **temporariamente** a ISO para a VirtIO, apenas selecione a ISO. Não **<u>reinicie</u>** o sistema, senão o progresso anterior será perdido.

:::

Os drivers necessários estão organizados em três pastas dedicadas chamadas **Balloon**, **NetKVM** e **vioscsi**. Cada uma dessas pastas contém um tipo específico de driver essencial para rodar uma máquina virtual Windows em um hypervisor baseado em KVM.

- **Balloon:** Esse driver gerencia a alocação de memória dinamicamente, permitindo que a RAM atribuída à VM aumente ou diminua sem precisar reiniciar.  
- **NetKVM:** Esse driver fornece uma interface de rede totalmente funcional e otimizada, garantindo conectividade estável e de alta performance para a VM.  
- **Vioscsi:** Esse driver é um controlador SCSI especializado que garante a detecção correta e acesso rápido aos discos virtuais. Ele melhora a performance de I/O e assegura que o Windows reconheça corretamente os discos virtuais.  

Dentro de cada uma dessas pastas, há uma subpasta correspondente à arquitetura do sistema. Durante a instalação, você deve selecionar a subpasta que corresponde ao sistema operacional que pretende instalar. Sempre use a arquitetura amd64 para esse processo. <u>Repita o procedimento para as três pastas de drivers conforme mostrado na imagem.</u>

![img](https://screensaver01.zap-hosting.com/index.php/s/fisTox5ziW4Y3tt/download)

Depois que os drivers VirtIO forem instalados com sucesso, você pode continuar com a instalação real do sistema operacional. Como antes, é necessário trocar a ISO. Desta vez, selecione a ISO original de instalação do sistema operacional e reabra o console VNC para continuar o processo.

![img](https://screensaver01.zap-hosting.com/index.php/s/QECit2kf66WQF9R/download)



### Criar e selecionar Partição

O próximo passo é configurar a partição. Primeiro, exclua quaisquer partições desconhecidas restantes. Depois, selecione a partição não alocada recém-disponível como destino para a instalação do sistema operacional.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRijdykS6CxyrbA/download)

Depois disso, clique em **Avançar** para continuar, e o restante da instalação ocorrerá automaticamente. No final, você será solicitado a definir as credenciais da conta Administrador.

![img](https://screensaver01.zap-hosting.com/index.php/s/bPzrdmbgYeLGrjJ/download)



## Configuração

Após a instalação do sistema operacional, alguns passos finais de configuração são necessários para garantir que o sistema possa ser usado de forma segura e confiável. Isso inclui habilitar e gerenciar o acesso via **Área de Trabalho Remota (RDP)**, configurar as **regras do firewall** para oferecer proteção e funcionalidade, e ajustar a **configuração de rede** para integrar corretamente o servidor à rede.

Com esses ajustes, você garante que o acesso remoto esteja disponível, que o monitoramento e verificações de status funcionem sem problemas, e que o servidor opere com parâmetros de rede estáveis e previsíveis dentro da sua infraestrutura.



### Configuração do RDP

Para habilitar a Área de Trabalho Remota (RDP) no Windows, o procedimento é basicamente o mesmo para Windows 10 (sistemas cliente) e Windows Server 2016/2019/2022/2025. Abra o **Painel de Controle** ou **Configurações**, vá para **Sistema → Área de Trabalho Remota** (nas edições cliente) ou **Propriedades do Sistema → Remoto** (nas edições servidor), e ative a opção **Permitir conexões remotas a este computador**. Nas versões servidor, isso aparece como **Habilitar Área de Trabalho Remota**.

![img](https://screensaver01.zap-hosting.com/index.php/s/kcA3bWFHamWRwL8/download)



### Configuração do Firewall

Para que o servidor seja totalmente inicializado e para que verificações de status como testes de ping funcionem, o **protocolo ICMP** deve ser permitido no Firewall do Windows. Sem essa regra, ferramentas de monitoramento e testes de rede não conseguirão alcançar o servidor, resultando em falhas nas verificações de saúde.

![img](https://screensaver01.zap-hosting.com/index.php/s/jyLqA5Ly3iXDPJ5/download)

Para habilitar o ICMP, abra o **Firewall do Windows com Segurança Avançada** e vá para a seção de regras de entrada. Crie uma nova regra personalizada e defina o protocolo como "Qualquer" e selecione **ICMPv4**. Configure a regra para aplicar a todas as portas e escolha os perfis (Domínio, Privado, Público) onde a regra deve estar ativa. Na maioria dos casos, é recomendado habilitar para todos os perfis. Por fim, dê um nome descritivo como *Permitir ICMP de entrada* e finalize o assistente.

A partir desse ponto, o servidor aceitará requisições ICMP, permitindo que comandos como `ping` e sistemas de monitoramento o alcancem e verifiquem seu status com sucesso.



### Configuração de Rede

Para configurar manualmente as configurações de rede no Windows, primeiro abra o **Central de Rede e Compartilhamento** pelo Painel de Controle ou pela barra de tarefas. Selecione o adaptador de rede relevante (LAN ou Wi-Fi), clique com o botão direito nele e abra as **Propriedades**. Na lista de itens, destaque **Protocolo IP Versão 4 (TCP/IPv4)** e clique em **Propriedades**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nEGkdE79tDwLszr/download)

Na janela de diálogo, altere a configuração de Obter um endereço IP automaticamente para Usar o seguinte endereço IP. Agora você pode inserir o **endereço IP**, **máscara de sub-rede** e **gateway padrão** para seu servidor. Abaixo, altere as configurações de DNS para manual e especifique `1.1.1.1` e `8.8.8.8` como seus servidores **DNS** primário e secundário. Confirme com **OK** para aplicar a configuração estática de rede.









## Conclusão

Parabéns, você instalou e configurou seu sistema operacional Windows com sucesso. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂



<InlineVoucher />