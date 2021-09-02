var single = (resource, authUser) => ({
    id_articulo: resource.id_articulo,
    id_categoria: resource.id_categoria,
    codigo: resource.codigo,
    perfil:resource.perfil,
    nombre:resource.nombre,
    precio_venta:resource.precio_venta,
    stock:resource.stock,
    descripcion:resource.descripcion,
    imagen:resource.imagen,
    estado:resource.estado,
    precio_compra:resource.precio_compra
  });

var multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
  single,
  multiple,
};
