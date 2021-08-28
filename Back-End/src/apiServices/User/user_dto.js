var single = (resource, authUser) => ({
    id: resource.id_usuario,
    username: resource.nom_usuario,
    email: resource.correo,
    perfil:resource.perfil
  });

var multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
  single,
  multiple,
};
