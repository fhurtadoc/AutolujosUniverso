const single = (resource, authUser) => ({
    id: resource.id_usuario,
    username: resource.nom_usuario,
    email: resource.correo,
    perfil:resource.perfil
  });

const multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
  single,
  multiple,
};
