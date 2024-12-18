// agents.js

const API_URL = "https://valorant-api.com/v1/agents";

// Elementos del DOM
const agentsScroll = document.getElementById("agents-scroll");
const agentPortrait = document.getElementById("agent-portrait");
const agentName = document.getElementById("agent-name");
const agentDescription = document.getElementById("agent-description");
const agentAbilities = document.getElementById("agent-abilities");

// Cargar agentes desde la API
async function fetchAgents() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const agents = data.data.filter(agent => agent.isPlayableCharacter);

        renderAgents(agents);
    } catch (error) {
        console.error("Error fetching agents:", error);
    }
}

// Renderizar agentes en el scroll
function renderAgents(agents) {
    agents.forEach(agent => {
        const agentIcon = document.createElement("img");
        agentIcon.src = agent.displayIconSmall;
        agentIcon.alt = agent.displayName;
        agentIcon.className = "w-24 h-24 md:w-36 md:h-36 lg:w-28 lg:h-28 object-cover cursor-pointer transition-transform transform hover:scale-105 bg-black bg-opacity-60 rounded-lg";

        // Evento para mostrar detalles del agente
        agentIcon.addEventListener("click", () => displayAgentDetails(agent));

        agentsScroll.appendChild(agentIcon);
    });
}

// Mostrar detalles del agente seleccionado
function displayAgentDetails(agent) {
    agentPortrait.src = agent.fullPortrait;
    agentPortrait.classList.remove("hidden");
    agentName.textContent = agent.displayName;
    agentDescription.textContent = agent.description;

    // Limpiar habilidades anteriores
    agentAbilities.innerHTML = "";

    // Agregar habilidades nuevas
    agent.abilities.forEach(ability => {
        if (ability.displayIcon) {
            const abilityIcon = document.createElement("img");
            abilityIcon.src = ability.displayIcon;
            abilityIcon.alt = ability.displayName;
            abilityIcon.className = "w-12 h-12 object-contain";
            agentAbilities.appendChild(abilityIcon);
        }
    });
}

// Ejecutar función principal
fetchAgents();
