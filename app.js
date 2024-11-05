// app.js

// Función para cargar las habitaciones desde el backend
async function cargarHabitaciones() {
    try {
        const response = await fetch('http://localhost:3000/api/habitaciones');
        const rooms = await response.json(); // Convierte la respuesta a JSON
        
        const roomList = document.getElementById('room-list');

        // Limpiar la lista de habitaciones antes de cargar nuevas
        roomList.innerHTML = '';

        // Recorrer las habitaciones y agregarlas al HTML
        rooms.forEach(room => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <h2>${room.nombre}</h2>
                <p>${room.descripcion}</p>
                <p>Ocupación:</p>
                <ul>
                    ${Object.keys(room.ocupacion).map(dia => `<li>${dia}: ${room.ocupacion[dia] ? 'Ocupado' : 'Libre'}</li>`).join('')}
                </ul>
            `;
            roomList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al cargar habitaciones:', error);
    }
}

// Llamamos a la función para cargar las habitaciones cuando se carga la página
window.onload = cargarHabitaciones;


