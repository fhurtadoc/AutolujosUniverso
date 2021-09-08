var single = (resource, authUser) => ({
    id_categoria: resource.id_categoria,
    nombre: resource.nombre,
    descripcion: resource.descripcion,
    estado:resource.estado    
  });

var multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
  single,
  multiple,
};
