document.addEventListener('DOMContentLoaded', () => {
    // Simulador de amenazas
    document.getElementById('threat-simulator').addEventListener('click', () => {
        const output = document.getElementById('output');
        output.innerHTML = '> Iniciando simulación sin censura...<br>> Bypassing security protocols...<br>> Accediendo a registros del sistema...';
        
        setTimeout(() => {
            output.innerHTML += '<br>> [!] Vulnerabilidad crítica detectada: CVE-2023-XXXXX';
            output.innerHTML += '<br>> [!] 12 dispositivos comprometidos';
            output.innerHTML += '<br>> [✓] Simulación completada';
        }, 2000);
    });

    // Terminal interactiva
    const commandInput = document.getElementById('command-input');
    commandInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = commandInput.value.trim();
            commandInput.value = '';
            processCommand(command);
        }
    });

    function processCommand(cmd) {
        const output = document.getElementById('output');
        output.innerHTML += `<br>> ${cmd}`;
        
        switch(cmd.toLowerCase()) {
            case 'scan network':
                output.innerHTML += '<br>> Escaneando red...<br>> [✓] 24 dispositivos encontrados<br>> [!] 3 vulnerabilidades detectadas';
                break;
            case 'show threats':
                output.innerHTML += '<br>> Amenazas activas:<br>   - Ransomware: LockBit 3.0<br>   - Exploit: Log4Shell<br>   - Phishing: ActiveCampaign';
                break;
            case 'help':
                output.innerHTML += '<br>> Comandos disponibles:<br>   - scan network<br>   - show threats<br>   - clear';
                break;
            case 'clear':
                output.innerHTML = '> Terminal lista<br>[Esperando comando]';
                break;
            default:
                output.innerHTML += '<br>> Comando no reconocido. Escribe "help" para opciones';
        }
        
        // Scroll automático
        output.scrollTop = output.scrollHeight;
    }
});
