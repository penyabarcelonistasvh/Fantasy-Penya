# Perfil de participante — propuesta para después del piloto

No desplegado. No modificar cuentas, jornadas ni alineaciones existentes.

## Datos
- Nombre de equipo Fantasy: conservar alias existente y permitir edición independiente de la jornada.
- Nombre de pila, apellidos, vinculación y equipo: perfil privado, editable por su titular y consultable por administrador autorizado.
- Proyección para ranking: alias, nombre de pila y equipo únicamente si el titular elige mostrarlos; por defecto ocultar identidad y categoría hasta consentimiento. No publicar correo, apellidos ni vinculación.
- Vinculación: jugador, entrenador, familiar, directiva, socio, aficionado.
- Equipo declarado por participante, no verificado por el club. Familiares pueden elegir el equipo de referencia.

## Equipos disponibles (catálogo actual)
- Alevín S11 A
- Alevín S11 B
- Alevín S12 A
- Alevín S12 B
- Alevín S12 C
- Amateur A
- Amateur B
- Amateur Fem A
- Amateur Fem B
- Benjamín S10 A
- Benjamín S9 A
- Cadete S15
- Genuino Blau
- Genuino Grana
- Genuino Groc
- Genuino Taronja
- Infantil Fem A
- Infantil S13
- Infantil S14
- Juvenil A
- Juvenil B
- Juvenil C
- Juvenil Fem A
- Prebenjamín S7 A
- Veteranas
- Directiva
- Sin equipo asignado

## Integración pendiente
Separar perfil privado de proyección compartida; validar campos y permisos en Firestore antes de activar la interfaz. Mantener el alias histórico como respaldo para usuarios sin perfil. No bloquear inicio de sesión ni guardado de alineación si el perfil no está completo durante el piloto. La clasificación debe conservar puntuaciones y jornadas disputadas; el perfil no modifica el cálculo.

## Pruebas de aceptación
- Cuenta existente conserva su once y puede completar perfil.
- Cuenta nueva puede completar perfil sin guardar once.
- Un participante no puede leer apellidos ni correo de otro ni modificar su perfil.
- Ocultar nombre o equipo elimina el dato de la vista compartida.
- Cambio de alias después del cierre no modifica el once histórico.
- Ranking mantiene puntos y jornadas, incluso si falta perfil.
- Administrador distingue perfiles completos, pendientes y alineaciones guardadas.
- Validar con dos cuentas y reglas en entorno de prueba antes de publicar.
