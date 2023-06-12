const Formulario = () => {
  return (
    <div className="contenedor">
        <form>
            <div className="campo">
                <label htmlFor="ciudad">Ciudad: </label>
                <input type="text" name="ciudad" id="ciudad" placeholder="Ej. Londres" />
            </div>
            <div className="campo">
                <label htmlFor="pais">País: </label>
                <select name="pais" id="pais">
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="VE">Venezuela</option>
                </select>
            </div>
            <input type="submit" value="Consultar Clima" />            
        </form>
    </div>
  )
}

export default Formulario