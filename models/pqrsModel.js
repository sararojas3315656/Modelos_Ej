const pqrsDB = [];

class PQRS {
  constructor({ tipo, descripcion, solicitante }) {
    this.id = Date.now().toString();
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.solicitante = solicitante;
    this.estado = 'pendiente';
    this.fechaCreacion = new Date().toISOString();
    this.fechaActualizacion = this.fechaCreacion;
  }

  static create(data) {
    const pqrs = new PQRS(data);
    pqrsDB.push(pqrs);
    return { message: 'PQRS registrada exitosamente', data: pqrs };
  }

  static findAll() {
    return { message: 'Listado de PQRS obtenido correctamente', data: pqrsDB };
  }

  static findById(id) {
    const pqrs = pqrsDB.find(p => p.id === id);
    if (!pqrs) return null;
    return { message: 'PQRS encontrada', data: pqrs };
  }

  static update(id, data) {
    const index = pqrsDB.findIndex(p => p.id === id);
    if (index === -1) return null;
    pqrsDB[index] = { ...pqrsDB[index], ...data, fechaActualizacion: new Date().toISOString() };
    return { message: 'PQRS actualizada exitosamente', data: pqrsDB[index] };
  }

  static delete(id) {
    const index = pqrsDB.findIndex(p => p.id === id);
    if (index === -1) return false;
    pqrsDB.splice(index, 1);
    return { message: 'PQRS eliminada exitosamente' };
  }
}

module.exports = PQRS;
