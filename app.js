const calendarData = [
    {
        day: "Día 1 (Lunes)",
        tasks: [
            { id: "d1-0", icon: "🎓", text: "Servicio Social (10:00 AM - 2:00 PM)." },
            { id: "d1-1", icon: "🏋️", text: "Ejercicio (1 hora)." },
            { id: "d1-2", icon: "📝", text: "AgenMono: Finalizar Libreta para notas (exportar PDF)." },
            { id: "d1-4", icon: "💼", text: "Búsqueda Empleo: 1 postulación rápida." },
            { id: "d1-5", icon: "🤖", text: "Agencia IA Agéntica: Definir MVP y esquema LangGraph (45 min)." },
            { id: "d1-6", icon: "🧠", text: "NotebookLM: Lectura corta Multi-agentes (20 min)." }
        ]
    },
    {
        day: "Día 2 (Martes)",
        tasks: [
            { id: "d2-0", icon: "🎓", text: "Servicio Social (10:00 AM - 2:00 PM)." },
            { id: "d2-1", icon: "🏋️", text: "Ejercicio (1 hora)." },
            { id: "d2-2", icon: "📝", text: "AgenMono: Iniciar diseño Libreta Diario (45 min)." },
            { id: "d2-3", icon: "🎵", text: "DJ Sets: Siguiente bloque del Set 2 (30 min)." },
            { id: "d2-5", icon: "🤖", text: "Agencia IA Agéntica: Programar primer nodo del workflow." }
        ]
    },
    {
        day: "Día 3 (Miércoles)",
        tasks: [
            { id: "d3-1", icon: "🏋️", text: "Ejercicio (1 hora)." },
            { id: "d3-2", icon: "📝", text: "AgenMono: Refinar Libreta Diario (vistas y márgenes)." },
            { id: "d3-3", icon: "🎵", text: "DJ Sets: Último bloque del Set 2 (Terminado)." },
            { id: "d3-4", icon: "💼", text: "Búsqueda Empleo: Revisar BD PostgreSQL, contactar reclutadores y postular." },
            { id: "d3-5", icon: "🤖", text: "Agencia IA Agéntica: Desarrollar nodo de Data Engineer." },
            { id: "d3-6", icon: "🧠", text: "NotebookLM: MLOps, empaquetado de modelos y crítica a la agencia." }
        ]
    },
    {
        day: "Día 4 (Jueves)",
        tasks: [
            { id: "d4-1", icon: "🏋️", text: "Ejercicio (1 hora)." },
            { id: "d4-2", icon: "📝", text: "AgenMono: Terminar Libreta Diario e iniciar conceptos publicitarios." },
            { id: "d4-3", icon: "🎵", text: "DJ Sets: 1 bloque de transición del Set 3." },
            { id: "d4-4", icon: "💼", text: "Búsqueda Empleo: Mejorar CV con el LLM local." },
            { id: "d4-5", icon: "🤖", text: "Agencia IA Agéntica: Validaciones Human-in-the-loop." },
            { id: "d4-6", icon: "🧠", text: "NotebookLM: Estudiar flujos Human-in-the-loop." }
        ]
    },
    {
        day: "Día 5 (Viernes)",
        tasks: [
            { id: "d5-1", icon: "🏋️", text: "Ejercicio (1 hora)." },
            { id: "d5-2", icon: "📝", text: "AgenMono: Crear imágenes publicitarias (línea 2027-2028)." },
            { id: "d5-3", icon: "🎵", text: "DJ Sets: 2 bloques continuos del Set 3." },
            { id: "d5-4", icon: "💼", text: "Búsqueda Empleo: Postulaciones de fin de semana." },
            { id: "d5-5", icon: "🤖", text: "Agencia IA Agéntica: Pruebas de integración del workflow." },
            { id: "d5-6", icon: "🧠", text: "NotebookLM: Resumen semanal de lecciones." }
        ]
    },
    {
        day: "Día 6 (Sábado)",
        tasks: [
            { id: "d6-1", icon: "🏋️", text: "Ejercicio ligero (Descanso activo)." },
            { id: "d6-2", icon: "📝", text: "AgenMono: Contenido base agendas anuales (estructura y fechas)." },
            { id: "d6-3", icon: "🎵", text: "DJ Sets: Terminar el Set 3." },
            { id: "d6-4", icon: "🎵", text: "DJ Sets: 1er bloque del Set 4 (Adelanto por el Lunes)." }
        ]
    },
    {
        day: "Día 7 (Lunes)",
        tasks: [
            { id: "d7-0", icon: "🎓", text: "Servicio Social (10:00 AM - 2:00 PM)." },
            { id: "d7-1", icon: "🏋️", text: "Ejercicio (1 hora)." },
            { id: "d7-2", icon: "📝", text: "AgenMono: Continuar programación agendas anuales (efemérides)." },
            { id: "d7-4", icon: "💼", text: "Búsqueda Empleo: Postulaciones nuevas rápidas." },
            { id: "d7-5", icon: "🤖", text: "Agencia IA Agéntica: Nodo run_ml_architect." }
        ]
    },
    {
        day: "Día 8 (Martes)",
        tasks: [
            { id: "d8-0", icon: "🎓", text: "Servicio Social (10:00 AM - 2:00 PM)." },
            { id: "d8-1", icon: "🏋️", text: "Ejercicio (1 hora)." },
            { id: "d8-2", icon: "📝", text: "AgenMono: Finalizar agendas anuales (PDF prueba)." },
            { id: "d8-3", icon: "🎵", text: "DJ Sets: Bloque 2 del Set 4." },
            { id: "d8-5", icon: "🤖", text: "Agencia IA Agéntica: Integrar reportes Markdown automáticos." }
        ]
    },
    {
        day: "Día 9 (Miércoles)",
        tasks: [
            { id: "d9-1", icon: "🏋️", text: "Ejercicio (1 hora)." },
            { id: "d9-2", icon: "📝", text: "AgenMono: Comenzar lógica de Planner para trabajadores." },
            { id: "d9-3", icon: "🎵", text: "DJ Sets: Bloque 3 del Set 4." },
            { id: "d9-4", icon: "💼", text: "Búsqueda Empleo: Ejercicio LeetCode y revisar render_3d_local.py." },
            { id: "d9-5", icon: "🤖", text: "Agencia IA Agéntica: UI en Streamlit." },
            { id: "d9-6", icon: "🧠", text: "NotebookLM: Lecturas de RAG y Optimizaciones LangGraph." }
        ]
    },
    {
        day: "Día 10 (Jueves)",
        tasks: [
            { id: "d10-1", icon: "🏋️", text: "Ejercicio (1 hora)." },
            { id: "d10-2", icon: "📝", text: "AgenMono: Estructura de tablas para el Planner de trabajadores." },
            { id: "d10-3", icon: "🎵", text: "DJ Sets: Último bloque del Set 4. (Exportar completo)." },
            { id: "d10-4", icon: "💼", text: "Búsqueda Empleo: Envío y revisión de estado." },
            { id: "d10-5", icon: "🤖", text: "Agencia IA Agéntica: Enlazar backend-frontend." },
            { id: "d10-6", icon: "🧠", text: "NotebookLM: Conceptos de DevOps/DataOps y GenAI." }
        ]
    },
    {
        day: "Día 11 (Viernes)",
        tasks: [
            { id: "d11-1", icon: "🏋️", text: "Ejercicio (1 hora)." },
            { id: "d11-2", icon: "📝", text: "AgenMono: Detalles finales y exportación PDF Planner." },
            { id: "d11-3", icon: "🎵", text: "DJ Sets: Auditoría final de los 4 Sets." },
            { id: "d11-4", icon: "💼", text: "Búsqueda Empleo: Post en LinkedIn documentando agencia." },
            { id: "d11-5", icon: "🤖", text: "Agencia IA Agéntica: Pulido general UI/UX." },
            { id: "d11-6", icon: "🧠", text: "NotebookLM: Reflexión final y métricas de desempeño." }
        ]
    },
    {
        day: "Día 12 (Sábado)",
        tasks: [
            { id: "d12-1", icon: "🏋️", text: "Ejercicio (1 hora)." },
            { id: "d12-2", icon: "✨", text: "Revisiones Finales: Check general." },
            { id: "d12-3", icon: "🎉", text: "Celebración de Cierre de ciclo." }
        ]
    }
];

let state = JSON.parse(localStorage.getItem('nexusCalendarState')) || {};

function saveState() {
    localStorage.setItem('nexusCalendarState', JSON.stringify(state));
    updateGlobalProgress();
}

function updateGlobalProgress() {
    let totalTasks = 0;
    let completedTasks = 0;
    
    calendarData.forEach(day => {
        totalTasks += day.tasks.length;
        day.tasks.forEach(task => {
            if (state[task.id]) completedTasks++;
        });
    });

    const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    document.getElementById('global-progress').style.width = `${percentage}%`;
    document.getElementById('progress-text').innerText = `${percentage}% Completado`;
}

function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';

    calendarData.forEach((dayData, index) => {
        const card = document.createElement('div');
        card.className = 'day-card';
        
        let completedInDay = 0;
        dayData.tasks.forEach(t => { if(state[t.id]) completedInDay++; });
        const allCompleted = completedInDay === dayData.tasks.length;

        card.innerHTML = `
            <div class="day-header">
                <h2 class="day-title">${dayData.day}</h2>
                <span class="day-status ${allCompleted ? 'completed' : ''}" id="status-${index}">
                    ${completedInDay}/${dayData.tasks.length}
                </span>
            </div>
            <ul class="task-list">
                ${dayData.tasks.map(task => `
                    <li class="task-item ${state[task.id] ? 'checked' : ''}" data-id="${task.id}" data-day="${index}">
                        <div class="checkbox"></div>
                        <div class="task-text"><span class="task-icon">${task.icon}</span>${task.text}</div>
                    </li>
                `).join('')}
            </ul>
        `;

        grid.appendChild(card);
    });

    // Add event listeners
    document.querySelectorAll('.task-item').forEach(item => {
        item.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const dayIndex = this.getAttribute('data-day');
            
            // Toggle state
            state[id] = !state[id];
            this.classList.toggle('checked');
            
            // Update day status
            const dayData = calendarData[dayIndex];
            let completedInDay = 0;
            dayData.tasks.forEach(t => { if(state[t.id]) completedInDay++; });
            const statusEl = document.getElementById(`status-${dayIndex}`);
            statusEl.innerText = `${completedInDay}/${dayData.tasks.length}`;
            
            if (completedInDay === dayData.tasks.length) {
                statusEl.classList.add('completed');
            } else {
                statusEl.classList.remove('completed');
            }

            saveState();
        });
    });
}

document.getElementById('reset-btn').addEventListener('click', () => {
    if(confirm('¿Estás seguro de que quieres reiniciar todo tu progreso?')) {
        state = {};
        saveState();
        renderCalendar();
    }
});

// Init
renderCalendar();
updateGlobalProgress();
