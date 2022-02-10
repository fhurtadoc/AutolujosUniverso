var single = (resource, authUser) => ({
    id: resource.id_usuario,
    username: resource.nom_usuario,
    email: resource.correo,
    permisos:resource.permisos,
    nombre_permisos:resource.nombre_permisos,
    id_permisos:resource.id_permisos,
    estado:resource.estado
  });

var multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
  single,
  multiple,
};
