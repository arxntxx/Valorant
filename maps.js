document.addEventListener("DOMContentLoaded", async () => {
  const API_URL = "https://valorant-api.com/v1/maps";
  const container = document.getElementById("maps-container");
  const uniqueNames = new Set();

  try {
    const response = await fetch(API_URL);
    const { data } = await response.json();

    data.forEach((map) => {
      if (!uniqueNames.has(map.displayName)) {
        uniqueNames.add(map.displayName);

        const mapCard = `
            <div class=" rounded-lg overflow-hidden">
              <!-- PC Layout -->
              <div class="hidden lg:flex lg:justify-between p-6 space-y-6">
                <!-- Detalles del mapa -->
                <div class="flex flex-col items-center space-x-8">
                  <!-- Mapa pequeño -->  
                  <div>
                    <h2 id="map-name" class="text-3xl uppercase lg:text-8xl font-bold">${
                      map.displayName
                    }</h2>
                    <p class="text-gray-400">${
                      map.coordinates || "Coordenadas no disponibles"
                    }</p>
                  </div>
                  <img
                    src="${map.displayIcon}"
                    alt="Mapa pequeño de ${map.displayName}"
                    class="w-44 h-44 object-contain"
                  />
                </div>
                <!-- Imagen grande -->
                <img
                  src="${map.splash}"
                  alt="Mapa grande de ${map.displayName}"
                  class="w-[700px] max-h-[500px] object-cover rounded-lg"
                />
              </div>

              <!-- Mobile Layout -->
              <div class="flex lg:hidden flex-col space-y-4 p-4">
                <div class="flex justify-between items-center">
                  <!-- Nombre y coordenadas -->
                  <div>
                    <h2 id="map-name" class="text-5xl md:text-6xl uppercase font-bold">${map.displayName}</h2>
                    <p class="text-gray-400">${
                      map.coordinates || "Coordenadas no disponibles"
                    }</p>
                  </div>
                  <!-- Mapa pequeño -->
                  <img
                    src="${map.displayIcon}"
                    alt="Mapa pequeño de ${map.displayName}"
                    class="w-20 h-20 object-contain"
                  />
                </div>
                <!-- Imagen grande -->
                <img
                  src="${map.splash}"
                  alt="Mapa grande de ${map.displayName}"
                  class="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          `;
        container.innerHTML += mapCard;
      }
    });
  } catch (error) {
    console.error("Error al obtener los mapas:", error);
    container.innerHTML = `<p class="text-center text-red-500">Error al cargar los mapas. Inténtalo de nuevo más tarde.</p>`;
  }
});
