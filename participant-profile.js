// Pure profile validation and display projection. Not connected to Firebase.
export const CLUB_TEAMS=Object.freeze(["Alevín S11 A","Alevín S11 B","Alevín S12 A","Alevín S12 B","Alevín S12 C","Amateur A","Amateur B","Amateur Fem A","Amateur Fem B","Benjamín S10 A","Benjamín S9 A","Cadete S15","Genuino Blau","Genuino Grana","Genuino Groc","Genuino Taronja","Infantil Fem A","Infantil S13","Infantil S14","Juvenil A","Juvenil B","Juvenil C","Juvenil Fem A","Prebenjamín S7 A","Veteranas","Directiva","Sin equipo asignado"]);
export const ROLES=Object.freeze(['Jugador','Entrenador','Familiar','Directiva','Socio','Aficionado','Invitado']);
function field(value,max,label){if(typeof value!=='string')throw Error(label+' inválido');const s=value.trim();if(!s||s.length>max||/[\u0000-\u001f\u007f]/.test(s))throw Error(label+' inválido');return s;}
export function validateProfile(input){
 const alias=field(input.alias,36,'Equipo Fantasy'),firstName=field(input.firstName,40,'Nombre'),lastName=field(input.lastName,80,'Apellidos');
 if(!ROLES.includes(input.role)||!CLUB_TEAMS.includes(input.team))throw Error('Vinculación o equipo inválido');
 return {alias,firstName,lastName,role:input.role,team:input.team,showName:input.showName===true,showTeam:input.showTeam===true};
}
export function publicProfile(input){const p=validateProfile(input);return {alias:p.alias,firstName:p.showName?p.firstName:'',team:p.showTeam?(p.role==='Invitado'&&p.team==='Sin equipo asignado'?'Invitado':p.team):''};}
export function rankingDisplay(row,profile){return {alias:profile?.alias||row.alias,firstName:profile?.firstName||'',team:profile?.team||'',total:row.total,played:row.played};}
